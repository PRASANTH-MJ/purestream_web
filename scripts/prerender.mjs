// Pre-renders every route in public/sitemap.xml into static HTML, so search
// engines get each page's real title, description and content without running
// JavaScript. Run via `npm run build:seo` (build + prerender).
//
// Output: dist/index.html for "/", dist/<route>.html for the rest
// (served for /<route> by .htaccess on Apache or Netlify pretty URLs).
// Needs Google Chrome installed (uses Playwright's "chrome" channel).

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { spawn } from 'node:child_process';
import { chromium } from 'playwright-core';

const PORT = 4399;
const ORIGIN = `http://localhost:${PORT}`;
const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');

const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);
// "/" last: dist/index.html is also the SPA fallback served for the other routes.
routes.sort((a, b) => (a === '/') - (b === '/'));

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { cwd: root, stdio: 'ignore' });
const stop = () => server.kill();
process.on('exit', stop);

async function waitForServer() {
  for (let i = 0; i < 50; i++) {
    try {
      if ((await fetch(ORIGIN)).ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error('preview server did not start');
}

await waitForServer();
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

for (const route of routes) {
  await page.goto(ORIGIN + route, { waitUntil: 'networkidle' });
  // Scroll through so scroll-reveal animations finish and content is visible.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(700);
  // Any scroll-reveal element still in its initial hidden state: make it visible
  // in the snapshot (the live app re-renders on load anyway).
  await page.evaluate(() => {
    document.querySelectorAll('[style*="opacity: 0"]').forEach((el) => {
      el.style.opacity = '';
      el.style.transform = '';
    });
  });
  const html = '<!doctype html>\n' + (await page.evaluate(() => document.documentElement.outerHTML));
  const file = route === '/' ? join(dist, 'index.html') : join(dist, `${route.replace(/^\//, '')}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log('prerendered', route);
}

await browser.close();
stop();
