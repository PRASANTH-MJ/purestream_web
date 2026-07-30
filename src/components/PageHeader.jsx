import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white dark:from-ink-800 dark:via-ink-900 dark:to-ink-900">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl dark:bg-brand-500/10" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <nav className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-brand-600 dark:hover:text-brand-400">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-brand-700 dark:text-brand-400">{crumb ?? title}</span>
        </nav>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl dark:text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg font-medium text-slate-600 dark:text-slate-300">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
