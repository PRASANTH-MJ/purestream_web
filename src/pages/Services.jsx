import { Link } from 'react-router-dom';
import { FlaskConical, ClipboardCheck, Wrench, CalendarClock, ArrowRight, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import QuoteBanner from '../components/QuoteBanner';
import { HowWeWork } from '../components/wwtp/Sections';

const OFFERINGS = [
  {
    icon: FlaskConical,
    title: 'Site Testing & Feasibility',
    description: 'Flow tests, sample collection and lab analysis of your actual effluent before any design.',
  },
  {
    icon: ClipboardCheck,
    title: 'Design & Compliance',
    description: 'Plants designed to meet PCB discharge norms and support your Consent to Operate.',
  },
  {
    icon: Wrench,
    title: 'Supply & Commissioning',
    description: 'Equipment supply, installation and commissioning, typically about 1 month from order.',
  },
  {
    icon: CalendarClock,
    title: 'AMC & Plant Support',
    description: 'Ongoing maintenance to keep your plant running and compliant.',
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        title="Services & Consultancy"
        crumb="Services"
        subtitle="Site testing, plant design, commissioning and AMC for industrial waste water treatment."
      />

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-ink-900">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {OFFERINGS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-slate-100 p-6 shadow-sm dark:border-white/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <p className="mt-4 font-display text-base font-bold text-ink-900 dark:text-white">{title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <HowWeWork />

      <section className="bg-slate-50 py-16 transition-colors duration-300 dark:bg-ink-800">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:text-left lg:px-8">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-600 dark:bg-ink-900 dark:text-brand-400">
            <MapPin className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <p className="font-display text-lg font-bold text-ink-900 dark:text-white">
              Need a purifier for a home or office pantry?
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Domestic consultancy is ₹2,900 within 50 km. We also offer Platinum, Gold and Silver AMC plans for RO
              purifiers.
            </p>
          </div>
          <Link
            to="/maintenance"
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 hover:border-brand-300 hover:text-brand-700 dark:border-white/15 dark:text-slate-200"
          >
            Purifier AMC plans <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <QuoteBanner />
    </>
  );
}
