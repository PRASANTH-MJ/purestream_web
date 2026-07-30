import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { products, getProductBySlug, formatPrice } from '../data/products';
import ProductCard from '../components/ProductCard';

const CATEGORY_STYLE = {
  'Domestic Purifiers': 'from-brand-50 to-brand-100 dark:from-brand-500/15 dark:to-brand-500/5',
  'Booster Pumps': 'from-slate-100 to-slate-200 dark:from-white/10 dark:to-white/5',
  'Whole-House Filtration': 'from-teal-50 to-teal-100 dark:from-teal-500/15 dark:to-teal-500/5',
  'Industrial & Institutional': 'from-indigo-50 to-indigo-100 dark:from-indigo-500/15 dark:to-indigo-500/5',
  'Kitchen Appliances': 'from-rose-50 to-rose-100 dark:from-rose-500/15 dark:to-rose-500/5',
  'Spares & Accessories': 'from-amber-50 to-amber-100 dark:from-amber-500/15 dark:to-amber-500/5',
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const gradient = CATEGORY_STYLE[product.category];

  return (
    <>
      <section className="bg-white transition-colors duration-300 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-brand-600 dark:hover:text-brand-400">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/products" className="hover:text-brand-600 dark:hover:text-brand-400">
              Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-700 dark:text-brand-400">{product.name}</span>
          </nav>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
          <div
            className={`flex h-80 items-center justify-center rounded-3xl bg-gradient-to-br sm:h-[28rem] ${gradient}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain p-10"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600 dark:bg-white/10 dark:text-slate-300">
                {product.category}
              </span>
              {product.siteCategory && product.siteCategory !== product.category && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600 dark:bg-white/10 dark:text-slate-300">
                  {product.siteCategory}
                </span>
              )}
              {product.tag && (
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-700 dark:bg-amber-500/15 dark:text-amber-400">
                  {product.tag}
                </span>
              )}
            </div>

            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
              {product.name}
            </h1>

            <p
              className={`mt-4 font-display font-extrabold text-brand-700 dark:text-brand-400 ${
                product.price == null ? 'text-xl' : 'text-3xl'
              }`}
            >
              {formatPrice(product.price)}
            </p>

            {product.specs.length > 0 && (
              <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                <p className="font-display text-sm font-bold uppercase tracking-wide text-ink-900 dark:text-white">
                  Specifications
                </p>
                <ul className="mt-4 space-y-3">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-brand-700 hover:shadow-xl active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                Enquire Now
              </Link>
              <a
                href="tel:+917012411523"
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-8 py-4 text-base font-bold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 active:scale-95 dark:border-white/15 dark:text-slate-200 dark:hover:border-brand-500/50 dark:hover:text-brand-400"
              >
                <Phone className="h-5 w-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-slate-50 py-20 transition-colors duration-300 dark:bg-ink-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
              You May Also Like
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
