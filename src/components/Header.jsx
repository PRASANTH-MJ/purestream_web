import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import PureStreamLogo from './PureStreamLogo';
import { useQuoteModal } from '../context/QuoteModalContext';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'Water Purifiers', to: '/products' },
  { label: 'About', to: '/about-us' },
  { label: 'Contact', to: '/contact-us' },
];

const navLinkClass = ({ isActive }) =>
  `text-sm font-semibold transition-colors hover:text-brand-600 dark:hover:text-brand-400 ${
    isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-600 dark:text-slate-300'
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg transition-colors duration-300 dark:border-white/10 dark:bg-ink-900/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center">
          <PureStreamLogo textClassName="text-ink-900 dark:text-white" />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} to={link.to} end={link.to === '/'} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <button
            type="button"
            onClick={openQuoteModal}
            className="inline-flex items-center rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.03] hover:bg-brand-700 hover:shadow-brand-600/40 active:scale-95"
          >
            Site Assessment
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 dark:text-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 pb-6 transition-colors duration-300 dark:border-white/10 dark:bg-ink-900 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-white/5 dark:hover:text-brand-400 ${
                    isActive
                      ? 'bg-brand-50 text-brand-600 dark:bg-white/5 dark:text-brand-400'
                      : 'text-slate-700 dark:text-slate-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openQuoteModal();
              }}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-transform active:scale-95"
            >
              Book a Site Assessment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
