import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Timer } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const FLOW = [
  { label: 'Raw Effluent', tone: 'raw' },
  { label: 'Screening & Traps', tone: 'mid' },
  { label: 'Equalisation', tone: 'mid' },
  { label: 'SBBR Reactor', tone: 'core' },
  { label: 'Sand + Carbon Filter', tone: 'mid' },
  { label: 'Reuse / Discharge', tone: 'clean' },
];

const toneClass = {
  raw: 'bg-amber-100 text-amber-900 dark:bg-amber-500/15 dark:text-amber-200',
  mid: 'bg-white/90 text-ink-900 dark:bg-white/10 dark:text-white',
  core: 'bg-brand-600 text-white ring-4 ring-brand-300/40',
  clean: 'bg-eco-500 text-white',
};

function ProcessVisual() {
  return (
    <div className="relative w-full max-w-md rounded-[2rem] bg-gradient-to-br from-brand-800 via-brand-900 to-ink-900 p-6 shadow-2xl shadow-brand-900/30 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-widest text-brand-200">How your effluent is treated</p>
      <ol className="relative mt-5 space-y-3">
        <svg
          aria-hidden="true"
          className="absolute left-5 top-4 h-[calc(100%-2rem)] w-2"
          preserveAspectRatio="none"
          viewBox="0 0 8 100"
        >
          <line x1="4" y1="0" x2="4" y2="100" stroke="rgba(134,202,255,0.6)" strokeWidth="2" className="flow-line" vectorEffect="non-scaling-stroke" />
        </svg>
        {FLOW.map((s, i) => (
          <motion.li
            key={s.label}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            className="relative flex items-center gap-4"
          >
            <span className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${toneClass[s.tone]}`}>
              {i + 1}
            </span>
            <span className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-bold ${toneClass[s.tone]}`}>{s.label}</span>
          </motion.li>
        ))}
      </ol>
      <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-xl sm:-left-6 dark:bg-ink-800">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-eco-50 text-eco-600 dark:bg-eco-500/10 dark:text-eco-400">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-semibold text-slate-400">Designed for</p>
          <p className="text-sm font-bold text-ink-900 dark:text-white">PCB norms &amp; reuse</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white dark:from-ink-800 dark:via-ink-900 dark:to-ink-900"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl dark:bg-brand-500/10" />
      <div className="pointer-events-none absolute top-40 -left-32 h-72 w-72 rounded-full bg-eco-100 blur-3xl dark:bg-eco-500/10" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-eco-300/60 bg-white/70 px-4 py-1.5 text-sm font-semibold text-eco-700 shadow-sm dark:border-eco-500/30 dark:bg-white/5 dark:text-eco-300"
          >
            <span className="h-2 w-2 rounded-full bg-eco-500" />
            Industrial ETP &amp; STP · 2 to 100 KLD
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Waste water treatment{' '}
            <span className="bg-gradient-to-r from-brand-600 to-eco-500 bg-clip-text text-transparent">
              built around your real effluent.
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg font-medium text-slate-600 dark:text-slate-300">
            We design, supply and commission effluent and sewage treatment plants for factories, food
            processors, hotels, hospitals and apartment complexes. Plants use SBBR technology, are designed
            to meet Pollution Control Board norms and treat water to reuse standards.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={openQuoteModal}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:bg-brand-700 active:scale-95"
            >
              Book a Site Assessment
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 px-8 py-4 text-base font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 active:scale-95 dark:border-white/15 dark:text-slate-200 dark:hover:border-brand-500/50 dark:hover:text-brand-400"
            >
              See Our Projects
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <Timer className="h-4 w-4 text-brand-600 dark:text-brand-400" />
            Typically about 1 month from order to commissioning
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center pb-6"
        >
          <ProcessVisual />
        </motion.div>
      </div>
    </section>
  );
}
