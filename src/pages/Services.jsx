import { Link } from 'react-router-dom';
import { Wrench, Headphones, ShieldCheck, CalendarClock, ArrowRight, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const OFFERINGS = [
  {
    icon: Wrench,
    title: 'Installation & Setup',
    description: 'Professional installation for every PureStream product.',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Our support team is always available to answer questions and resolve issues.',
  },
  {
    icon: ShieldCheck,
    title: 'Genuine Filters & Parts',
    description: 'Only trusted, genuine filters and parts to protect performance and safety.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Maintenance Plans',
    description: 'Choose one-time servicing or an annual maintenance plan that fits your budget.',
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        title="Service & Support"
        subtitle="Be a part of an Industry Leading Service today."
      />

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-ink-900">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Our water purifier company is dedicated to providing the best possible service to
            our customers. Our commitment to innovation and quality ensures that our products
            are among the most reliable and effective on the market. In addition, our customer
            service team is always available to answer questions and provide support, ensuring
            that our customers are satisfied with their purchase and confident in the safety
            and quality of their drinking water.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {OFFERINGS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 p-6 text-center shadow-sm dark:border-white/10"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <p className="mt-4 font-display text-base font-bold text-ink-900 dark:text-white">{title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/maintenance"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-brand-700 hover:shadow-xl active:scale-95"
          >
            Maintenance Plans
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-8 py-4 text-base font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 active:scale-95 dark:border-white/15 dark:text-slate-200 dark:hover:border-brand-500/50 dark:hover:text-brand-400"
          >
            Contact Support
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-20 transition-colors duration-300 dark:bg-ink-800">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              PureStream
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
              Consultancy Service
            </h2>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Site visit, feasibility test, water sample collection, flow test &amp; lab test —
              within 50 km.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-ink-900">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                <MapPin className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-lg font-bold text-ink-900 dark:text-white">
                Domestic Consultancy
              </p>
              <p className="mt-1 font-display text-2xl font-extrabold text-brand-700 dark:text-brand-400">
                ₹2,900
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Site Visit · Feasibility Test · Water Sample Collection · Flow Test · Water Lab
                Test · Softcopy Proposal
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-ink-900">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                <MapPin className="h-5 w-5" />
              </span>
              <p className="mt-4 font-display text-lg font-bold text-ink-900 dark:text-white">
                Industrial Consultancy
              </p>
              <p className="mt-1 font-display text-2xl font-extrabold text-brand-700 dark:text-brand-400">
                ₹4,900
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Site Visit · Feasibility Test · Water Sample Collection · Flow Test · Water Lab
                Test · Offline Discussion · Proposal
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
