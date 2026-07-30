import { Cpu, Wallet, Headphones, Users, Lightbulb, Award, Quote } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AboutUs from '../components/AboutUs';

const PILLARS = [
  {
    icon: Cpu,
    title: 'Latest Technology',
    description:
      'Our technical team is well trained and understands each customer is special and has a unique requirement.',
  },
  {
    icon: Wallet,
    title: 'Value for Money',
    description:
      'PureStream is your one-stop destination for a cost-effective RO water purifier for your home and office.',
  },
  {
    icon: Headphones,
    title: 'After Sales Services',
    description:
      'Our goal is not just to sell water purifiers — we provide timely after-sales services and solutions.',
  },
  {
    icon: Users,
    title: 'Team of Experts',
    description:
      'Skilled staff who understand your requirement and provide you with the best solutions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description:
      'Every requirement is different, so we treat each one on priority and offer innovative solutions based on the need.',
  },
  {
    icon: Award,
    title: 'Quality',
    description:
      'We take pride in always delivering the best quality solutions — be it a small requirement or a major product.',
  },
];

const TESTIMONIALS = [
  {
    role: 'School Teacher',
    quote:
      'Thanks to Pure Stream, we drink 100% pure water. With RO & UV technology we get completely safe alkaline water. It has been almost 5 years, we just changed filters a few times and their service is great.',
  },
  {
    role: 'Industrialist',
    quote:
      'Very good service and reliable people. Experience and passion driven in the field of water treatment for several years has proved their ability and credibility.',
  },
  {
    role: 'Electrical Trader',
    quote:
      'Good product with good service. Water is precious, it needs to be fresh but it must be clean. The matter can be entrusted to Pure Stream RO Purifiers.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Purity & Immunity in Everydrop." />

      <AboutUs />

      <section className="bg-slate-50 py-20 transition-colors duration-300 dark:bg-ink-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              A Trusted Name in Water Treatment
            </p>
            <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
              Why Choose PureStream
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm dark:bg-ink-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="mt-4 font-display text-base font-bold text-ink-900 dark:text-white">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 transition-colors duration-300 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
            What Our Customers Say
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map(({ role, quote }) => (
              <div
                key={role}
                className="rounded-2xl border border-slate-100 p-6 shadow-sm dark:border-white/10"
              >
                <Quote className="h-6 w-6 text-brand-300 dark:text-brand-500/50" />
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
