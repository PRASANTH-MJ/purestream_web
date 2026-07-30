import { useState } from 'react';
import { categories, products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const [active, setActive] = useState('All');

  const visible =
    active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section className="bg-slate-50 py-16 transition-colors duration-300 dark:bg-ink-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all hover:scale-[1.03] active:scale-95 ${
                active === category
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                  : 'bg-white text-slate-600 hover:bg-brand-50 hover:text-brand-700 dark:bg-ink-800 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-brand-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
