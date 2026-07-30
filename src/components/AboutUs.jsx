import { FlaskConical, Waves, Gauge, Factory } from 'lucide-react';

const BENEFITS = [
  {
    icon: FlaskConical,
    title: 'Removes Impurities',
    description: 'Eliminates physical and chemical impurities for genuinely clean water.',
  },
  {
    icon: Waves,
    title: 'Reduces Hardness',
    description: 'Softens water by reducing hardness for better taste and appliance care.',
  },
  {
    icon: Gauge,
    title: 'Maintains pH Levels',
    description: 'Keeps water pH balanced for healthier, more drinkable output.',
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
            One Commitment to Clean Water
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            PureStream manufactures Water Purifiers (RO), Softeners, Coolers and Conditioners
            for home, commercial and industrial use — an RO, UV and Alkaline purifier range
            alongside kitchen chimneys and spare parts, all in one catalog for every water and
            appliance need, from home to industrial scale.
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
              One catalog homes and businesses can trust — from a kitchen tap to an
              industrial RO plant.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="font-display text-3xl font-extrabold">50+</p>
                <p className="mt-1 text-sm font-medium text-brand-200">Products in Catalog</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold">Home to Industrial</p>
                <p className="mt-1 text-sm font-medium text-brand-200">Purifier Range</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
