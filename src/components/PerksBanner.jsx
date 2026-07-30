import { Truck, RefreshCw, Headphones } from 'lucide-react';

const PERKS = [
  {
    icon: Truck,
    title: 'Delivery Free',
    description: 'On Order Over ₹5000',
  },
  {
    icon: RefreshCw,
    title: 'Exchange & Return',
    description: '30 Day Money Back Guarantee',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: '24/7 Online Support',
  },
];

export default function PerksBanner() {
  return (
    <section className="border-y border-slate-100 bg-white transition-colors duration-300 dark:border-white/10 dark:bg-ink-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-100 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-white/10 lg:px-8">
        {PERKS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-center gap-4 px-4 py-8 sm:justify-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
              <Icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <div>
              <p className="font-display text-base font-bold text-ink-900 dark:text-white">{title}</p>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
