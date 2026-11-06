import { FlaskConical, Recycle, Gauge, Factory } from 'lucide-react';

const BENEFITS = [
  {
    icon: FlaskConical,
    title: 'Test First',
    description: 'Every design starts from an on-site flow test and lab report, not assumptions.',
  },
  {
    icon: Recycle,
    title: 'Built for Reuse',
    description: 'Treated water fit for gardening, flushing or back into your process.',
  },
  {
    icon: Gauge,
    title: 'Low Running Cost',
    description: 'Airlift pumping and semi-automatic operation keep power and labour use down.',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-24 transition-colors duration-300 dark:bg-ink-900">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            About Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
            Water treatment engineers, not just equipment sellers
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Pure Stream, operated by SV Trades in Palakkad, designs and commissions effluent and
            sewage treatment plants for businesses across Kerala. Our technical team handles
            everything from site testing to commissioning and AMC. That includes effluent the
            brochures never planned for, such as 850 PPM TDS at pH 3.0. We also supply industrial
            RO, filtration and drinking-water purifiers.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {BENEFITS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 p-5 shadow-sm dark:border-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="mt-4 font-display text-sm font-bold text-ink-900 dark:text-white">{title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 p-10 text-white shadow-2xl shadow-brand-900/20">
            <Factory className="h-12 w-12 text-brand-200" strokeWidth={1.5} />
            <p className="mt-6 font-display text-2xl font-extrabold leading-snug">
              From a 2 KLD service-station ETP to a high-TDS metal finishing line, we design
              each plant around what actually comes out of your drain.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="font-display text-3xl font-extrabold">2–100 KLD</p>
                <p className="mt-1 text-sm font-medium text-brand-200">Plant capacity range</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold">~1 month</p>
                <p className="mt-1 text-sm font-medium text-brand-200">Order to commissioning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
