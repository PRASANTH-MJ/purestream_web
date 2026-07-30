import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles } from 'lucide-react';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white dark:from-ink-800 dark:via-ink-900 dark:to-ink-900"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl dark:bg-brand-500/10" />
      <div className="pointer-events-none absolute top-40 -left-32 h-72 w-72 rounded-full bg-brand-100 blur-3xl dark:bg-brand-500/10" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm dark:border-brand-500/30 dark:bg-white/5 dark:text-brand-300"
          >
            <Sparkles className="h-4 w-4" />
            Everything for your water &amp; home, under one roof
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              Purity &amp; Immunity
            </span>{' '}
            in Everydrop.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg font-medium text-slate-600 dark:text-slate-300"
          >
            RO &amp; UV purifiers, whole-house filtration, industrial RO plants, kitchen
            chimneys and booster pumps — the complete PureStream catalog, in one place.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-600/30 transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-brand-700 hover:shadow-2xl hover:shadow-brand-600/40 active:scale-95"
            >
              Shop All Products
            </Link>
            <Link
              to="/about-us"
              className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 px-8 py-4 text-base font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 active:scale-95 dark:border-white/15 dark:text-slate-200 dark:hover:border-brand-500/50 dark:hover:text-brand-400"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 font-display text-lg font-bold uppercase tracking-widest text-brand-700 dark:text-brand-400"
          >
            One Catalog. Every Water Need.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="relative flex h-80 w-80 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 shadow-2xl shadow-brand-900/30 sm:h-96 sm:w-96">
            <img
              src="/images/purestream/hotcool-ro.jpg"
              alt="Pure Stream Hot & Cool RO Purifier"
              className="h-full w-full object-contain p-8 drop-shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl dark:bg-ink-800">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-400">Technology</p>
                <p className="text-sm font-bold text-ink-900 dark:text-white">9-Stage Filtration</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
