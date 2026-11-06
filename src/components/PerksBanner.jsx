import { KEY_FACTS } from '../data/wwtp';

export default function PerksBanner() {
  return (
    <section className="border-y border-slate-100 bg-white transition-colors duration-300 dark:border-white/10 dark:bg-ink-900">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
        {KEY_FACTS.map(({ value, unit, label }, i) => (
          <div
            key={label}
            className={`flex flex-col-reverse px-2 py-8 text-center sm:px-4 ${i % 2 ? 'border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''} border-slate-100 dark:border-white/10`}
          >
            <dt className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{label}</dt>
            <dd className="font-display text-2xl font-extrabold text-ink-900 sm:text-3xl dark:text-white">
              {value}
              {unit && <span className="ml-1 text-base font-bold text-brand-600 dark:text-brand-400">{unit}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
