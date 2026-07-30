import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { formatPrice } from '../data/products';

const MotionLink = motion.create(Link);

const CATEGORY_STYLE = {
  'Domestic Purifiers': 'from-brand-50 to-brand-100 dark:from-brand-500/15 dark:to-brand-500/5',
  'Booster Pumps': 'from-slate-100 to-slate-200 dark:from-white/10 dark:to-white/5',
  'Whole-House Filtration': 'from-teal-50 to-teal-100 dark:from-teal-500/15 dark:to-teal-500/5',
  'Industrial & Institutional': 'from-indigo-50 to-indigo-100 dark:from-indigo-500/15 dark:to-indigo-500/5',
  'Kitchen Appliances': 'from-rose-50 to-rose-100 dark:from-rose-500/15 dark:to-rose-500/5',
  'Spares & Accessories': 'from-amber-50 to-amber-100 dark:from-amber-500/15 dark:to-amber-500/5',
};

export default function ProductCard({ product }) {
  const gradient = CATEGORY_STYLE[product.category];

  return (
    <MotionLink
      to={`/product/${product.slug}`}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-200 dark:border-white/10 dark:bg-ink-800 dark:hover:shadow-none dark:hover:ring-1 dark:hover:ring-brand-500/30"
    >
      <div
        className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${gradient} overflow-hidden`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink-900 shadow-sm">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
          {product.category}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-bold text-ink-900 dark:text-white">
          {product.name}
        </h3>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span
            className={`font-display font-extrabold text-ink-900 dark:text-white ${
              product.price == null ? 'text-sm' : 'text-xl'
            }`}
          >
            {formatPrice(product.price)}
          </span>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-white/5 dark:text-slate-300">
            View
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </MotionLink>
  );
}
