import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, HardHat, Wrench, MapPin, Cpu, TrendingDown } from 'lucide-react';
import { ICONS } from './icons';
import {
  SOLUTIONS,
  PROCESS_STAGES,
  INDUSTRIES,
  CASE_STUDIES,
  ENGAGEMENT_STEPS,
  SCOPE,
  FAQS,
  TECHNOLOGIES,
  WHY_CHOOSE,
} from '../../data/wwtp';
import { useQuoteModal } from '../../context/QuoteModalContext';

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export function SectionHeading({ eyebrow, title, intro, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{intro}</p>}
    </div>
  );
}

export function SolutionsGrid({ detailed = false }) {
  return (
    <section id="solutions" className="bg-white py-20 transition-colors duration-300 sm:py-24 dark:bg-ink-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {!detailed && (
          <SectionHeading
            eyebrow="What we build"
            title="Treatment plants for every effluent stream"
            intro="We engineer each plant from a site test and lab report, never from a standard template."
          />
        )}
        <div className={`${detailed ? '' : 'mt-14'} grid gap-6 md:grid-cols-2`}>
          {SOLUTIONS.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <motion.article
                key={s.slug}
                id={s.slug}
                {...reveal}
                className="group scroll-mt-28 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-ink-800"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold text-ink-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{s.short}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
        {!detailed && (
          <div className="mt-10 text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-800 dark:text-brand-400"
            >
              Explore all solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20 transition-colors duration-300 sm:py-24 dark:bg-ink-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our process"
          title="Inside an SBBR treatment plant"
          intro="A Sequencing Batch Biofilm Reactor combines attached-growth biofilm with timed batch cycles, giving stable treatment in a compact footprint. Here is the stage sequence from one of our running plants."
        />
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STAGES.map((s, i) => {
            const core = s.name.includes('SBBR');
            const last = i === PROCESS_STAGES.length - 1;
            return (
              <motion.li
                key={s.name}
                {...reveal}
                transition={{ ...reveal.transition, delay: (i % 4) * 0.06 }}
                className={`relative rounded-2xl p-5 ${
                  core
                    ? 'bg-brand-700 text-white shadow-lg shadow-brand-700/30'
                    : last
                      ? 'bg-eco-600 text-white'
                      : 'bg-white dark:bg-ink-900'
                }`}
              >
                <span
                  className={`font-display text-xs font-extrabold tracking-widest ${
                    core || last ? 'text-white/70' : 'text-brand-600 dark:text-brand-400'
                  }`}
                >
                  STAGE {String(i + 1).padStart(2, '0')}
                </span>
                <p className={`mt-2 font-display text-base font-bold ${core || last ? '' : 'text-ink-900 dark:text-white'}`}>
                  {s.name}
                </p>
                <p className={`mt-1.5 text-sm leading-relaxed ${core || last ? 'text-white/85' : 'text-slate-500 dark:text-slate-400'}`}>
                  {s.detail}
                </p>
              </motion.li>
            );
          })}
        </ol>
        <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          Stages are adapted to each site. High-TDS or acidic industrial streams may add electrocoagulation, pH
          correction and RO.
        </p>
      </div>
    </section>
  );
}

export function IndustriesGrid({ compact = false }) {
  return (
    <section id="industries" className="bg-white py-20 transition-colors duration-300 sm:py-24 dark:bg-ink-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {!compact && (
          <SectionHeading eyebrow="Industries we serve" title="Built for businesses that generate waste water" />
        )}
        <div className={`${compact ? '' : 'mt-14'} grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}>
          {INDUSTRIES.map((ind) => {
            const Icon = ICONS[ind.icon];
            return (
              <motion.div
                key={ind.name}
                {...reveal}
                className="flex gap-4 rounded-2xl border border-slate-100 p-5 dark:border-white/10"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-eco-50 text-eco-600 dark:bg-eco-500/10 dark:text-eco-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-ink-900 dark:text-white">{ind.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{ind.note}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyCard({ cs, expanded = false }) {
  return (
    <motion.article
      {...reveal}
      id={cs.slug}
      className="flex scroll-mt-28 flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-ink-800"
    >
      <span className="self-start rounded-full bg-eco-50 px-3 py-1 text-xs font-bold text-eco-700 dark:bg-eco-500/10 dark:text-eco-300">
        {cs.highlight}
      </span>
      <h3 className="mt-4 font-display text-xl font-extrabold text-ink-900 dark:text-white">{cs.client}</h3>
      <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        {[cs.location, cs.industry].filter(Boolean).join(' · ')}
      </p>
      <p className="mt-1 text-sm font-bold text-brand-700 dark:text-brand-400">{cs.capacity}</p>

      <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        <div>
          <p className="font-bold text-ink-900 dark:text-white">Challenge</p>
          <p className="mt-1">{cs.challenge}</p>
        </div>
        {expanded && (
          <div>
            <p className="font-bold text-ink-900 dark:text-white">Solution</p>
            <ul className="mt-1.5 space-y-1.5">
              {cs.solution.map((s) => (
                <li key={s} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco-500" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <p className="font-bold text-ink-900 dark:text-white">Result</p>
          <p className="mt-1">{cs.result}</p>
        </div>
      </div>
      {!expanded && (
        <Link
          to={`/projects#${cs.slug}`}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-brand-700 hover:text-brand-800 dark:text-brand-400"
        >
          Read the full case <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </motion.article>
  );
}

export function CaseStudies() {
  return (
    <section className="bg-slate-50 py-20 transition-colors duration-300 sm:py-24 dark:bg-ink-800/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proven on site"
          title="Real plants, real effluent"
          intro="From car wash centres to powder coating lines and food processing, these plants are running today in Kerala."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASE_STUDIES.slice(0, 3).map((cs) => (
            <CaseStudyCard key={cs.slug} cs={cs} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-800 dark:text-brand-400">
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HowWeWork() {
  const { openQuoteModal } = useQuoteModal();
  return (
    <section className="bg-white py-20 transition-colors duration-300 sm:py-24 dark:bg-ink-900">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-3">
          <SectionHeading eyebrow="How we work" title="From site visit to running plant" center={false} />
          <ol className="mt-10 space-y-6">
            {ENGAGEMENT_STEPS.map((s, i) => (
              <motion.li key={s.title} {...reveal} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-ink-900 dark:text-white">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{s.detail}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="space-y-5 lg:col-span-2">
          <div className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-7 text-white shadow-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-200">Start here</p>
            <p className="mt-2 font-display text-2xl font-extrabold">Industrial Consultancy</p>
            <p className="mt-1 font-display text-4xl font-extrabold">₹4,900</p>
            <p className="mt-1 text-sm text-brand-100/80">within 50 km</p>
            <ul className="mt-5 space-y-2 text-sm text-brand-50">
              {['Site visit', 'Feasibility test', 'Water sample collection', 'Flow test', 'Water lab test', 'Offline discussion', 'Written proposal'].map(
                (x) => (
                  <li key={x} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-eco-300" />
                    {x}
                  </li>
                ),
              )}
            </ul>
            <button
              type="button"
              onClick={openQuoteModal}
              className="mt-6 w-full rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-800 transition-transform hover:scale-[1.02] active:scale-95"
            >
              Book a consultancy visit
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-slate-100 p-5 dark:border-white/10">
              <p className="flex items-center gap-2 font-display text-sm font-bold text-ink-900 dark:text-white">
                <Wrench className="h-4 w-4 text-brand-600 dark:text-brand-400" /> Our scope
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{SCOPE.ours.join(' · ')}</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 dark:border-amber-500/20 dark:bg-amber-500/5">
              <p className="flex items-center gap-2 font-display text-sm font-bold text-ink-900 dark:text-white">
                <HardHat className="h-4 w-4 text-amber-600" /> Your scope
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{SCOPE.yours.join(' · ')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-slate-50 py-20 transition-colors duration-300 sm:py-24 dark:bg-ink-800">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions plant owners ask us" />
        <div className="mt-12 divide-y divide-slate-200 rounded-2xl bg-white dark:divide-white/10 dark:bg-ink-900">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-bold text-ink-900 dark:text-white"
                >
                  {f.q}
                  <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TechnologySection() {
  return (
    <section className="border-t border-slate-100 bg-white py-20 dark:border-white/10 transition-colors duration-300 sm:py-24 dark:bg-ink-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our technology"
          title="Tailored engineering for every effluent stream"
          intro="We do not offer one-size-fits-all plants. Every site gets the treatment technology it needs: chemical ETPs for automotive centres, pioneering electrocoagulation for powder coating, and hybrid SBBR biological systems for high-load food industries. Fully automated and built for the lowest lifecycle cost, our plants protect both your compliance and your bottom line."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TECHNOLOGIES.map((t) => {
            const Icon = ICONS[t.icon];
            return (
              <motion.div key={t.name} {...reveal} className="rounded-3xl border border-slate-100 p-7 dark:border-white/10 dark:bg-ink-800">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eco-50 text-eco-600 dark:bg-eco-500/10 dark:text-eco-400">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">{t.for}</p>
                <h3 className="mt-1 font-display text-xl font-extrabold text-ink-900 dark:text-white">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{t.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  const { automation, tco } = WHY_CHOOSE;
  return (
    <section className="bg-ink-900 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-eco-300">Why choose our systems</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pay a little more up front. Spend far less every day after.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <motion.div {...reveal} className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 lg:col-span-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
              <Cpu className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-xl font-extrabold">{automation.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{automation.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Semi-automatic', 'Fully automated'].map((x) => (
                <span key={x} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">{x}</span>
              ))}
            </div>
          </motion.div>
          <motion.div {...reveal} className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-7 ring-1 ring-white/10 lg:col-span-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eco-500/20 text-eco-300">
              <TrendingDown className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-xl font-extrabold">{tco.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-100/90">{tco.body}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {tco.points.map((pt) => (
                <li key={pt.title} className="rounded-2xl bg-white/10 p-4">
                  <p className="flex items-center gap-2 font-display text-sm font-bold">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-eco-300" />
                    {pt.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-brand-100/85">{pt.detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
