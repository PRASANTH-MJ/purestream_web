import { Link } from 'react-router-dom';
import { Filter, RefreshCw, HeartHandshake, ShieldCheck, Wallet, PackageCheck, ArrowRight, Crown, Medal, Award } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const AMC_PLANS = [
  {
    icon: Crown,
    tier: 'Platinum',
    features: [
      'Full system covered',
      'Unlimited repair visits',
      'Routine service once every 3 months',
      'Diagnosis, filter & tank cleaning, TDS test',
      'All parts incl. pump & electrical*',
      '1x membrane change as required',
      'Standby system*',
    ],
  },
  {
    icon: Medal,
    tier: 'Gold',
    features: [
      'All filters covered',
      '4 service visits',
      'Routine service once every 3 months',
      'Diagnosis, filter & tank cleaning, TDS test',
      '1x inline filter change · 1x membrane change as required',
      'Electrical spares at applicable rate',
    ],
  },
  {
    icon: Award,
    tier: 'Silver',
    features: [
      '4 service visits',
      'Routine service once every 3 months',
      'Diagnosis, filter & tank cleaning, TDS test',
      'Filters & electrical spares at applicable rate',
    ],
  },
];

const STEPS = [
  {
    icon: Filter,
    title: 'Every Three Months',
    description:
      'Because the filter absorbs chemicals and other dissolved elements from the water, it eventually becomes saturated and needs to be serviced on a regular basis. According to testing, your PureStream Water System filter will continue to operate at its best if the filter is cleaned every three months.',
  },
  {
    icon: RefreshCw,
    title: 'Every Twelve Months',
    description:
      'The filters have their own operating life and these have to be changed accordingly. The filters need to be replaced according to their filter life which is around 5000 ltr or 1 year. According to our rigorous study, you will continue to get safe, healthy, and tasty water if you replace the filters every 12 months.',
  },
];

const WHY_CARE = [
  {
    icon: HeartHandshake,
    title: 'Freedom & Convenience',
    description:
      "Save time and hassle with our all-in-one maintenance service – just give us a call and we'll take care of everything, so you have the freedom from worry and stress with our expert team always ready to assist, ensuring your water purifier works seamlessly giving you the comfort of clean and pure water in your home.",
  },
  {
    icon: ShieldCheck,
    title: 'Peace of Mind',
    description:
      'Have peace of mind with our authorized service centre and top-quality PureStream products and parts, which assures that you enjoy worry-free maintenance and optimal performance.',
  },
  {
    icon: Wallet,
    title: 'Manageable Payments',
    description:
      'Manage your budget with ease through our transparent payment options — whether you prefer a one-time payment or annual maintenance, you have the choice.',
  },
  {
    icon: PackageCheck,
    title: 'Trusted Filters and Parts',
    description:
      "Don't compromise on quality and safety — choose our trusted brand for genuine filters and parts, and ensure the longevity and performance of your water purifier.",
  },
];

export default function Maintenance() {
  return (
    <>
      <PageHeader
        title="Maintenance & AMC Plans"
        subtitle="Our water systems are made to be simple to use and need little upkeep. Your water system will run perfectly all year long with a few short maintenance services."
      />

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {STEPS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-3xl border border-slate-100 p-8 shadow-sm dark:border-white/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <p className="mt-5 font-display text-lg font-bold text-ink-900 dark:text-white">{title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            PureStream
          </p>
          <h2 className="mt-2 text-center font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
            RO AMC Plans
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {AMC_PLANS.map(({ icon: Icon, tier, features }) => (
              <div
                key={tier}
                className="rounded-3xl border border-slate-100 p-8 shadow-sm dark:border-white/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <p className="mt-5 font-display text-lg font-bold text-ink-900 dark:text-white">{tier}</p>
                <ul className="mt-4 space-y-2">
                  {features.map((f) => (
                    <li key={f} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      • {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 transition-colors duration-300 dark:bg-ink-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
            Why Choose PureStream Care
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CARE.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm dark:bg-ink-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="mt-4 font-display text-sm font-bold text-ink-900 dark:text-white">{title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-brand-700 hover:shadow-xl active:scale-95"
            >
              Explore Our Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
