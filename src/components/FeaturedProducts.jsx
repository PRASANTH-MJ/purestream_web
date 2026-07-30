import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FEATURED_SLUGS = [
  'purestream-prime-100',
  'purestream-hotcool-ro',
  'purestream-neon',
  'purestream-hd-booster-pump-100-gpd',
  'purestream-industrial-100lph',
  'purestream-chimney-gold',
  'purestream-softener',
  'purestream-idol-copper',
];

export default function FeaturedProducts() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const featured = FEATURED_SLUGS.map((slug) => products.find((p) => p.slug === slug)).filter(
    Boolean
  );

  return (
    <section id="products" className="bg-slate-50 py-24 transition-colors duration-300 dark:bg-ink-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              Shop By Category
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
              Our Products
            </h2>
            <p className="mt-4 text-base font-medium text-slate-500 dark:text-slate-400">
              Purifiers, whole-house filtration, industrial RO, appliances &amp; more — all
              from PureStream. Swipe to browse.
            </p>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous product"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:scale-105 hover:border-brand-300 hover:text-brand-600 active:scale-95 dark:border-white/10 dark:text-slate-300 dark:hover:border-brand-500/50 dark:hover:text-brand-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              ref={nextRef}
              type="button"
              aria-label="Next product"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all hover:scale-105 hover:border-brand-300 hover:text-brand-600 active:scale-95 dark:border-white/10 dark:text-slate-300 dark:hover:border-brand-500/50 dark:hover:text-brand-400"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{ clickable: true }}
          a11y={{ prevSlideMessage: 'Previous product', nextSlideMessage: 'Next product' }}
          grabCursor
          spaceBetween={24}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2.15 },
            1024: { slidesPerView: 3.15 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-14 !pt-12"
        >
          {featured.map((product) => (
            <SwiperSlide key={product.slug} className="h-auto pb-1">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-brand-700 hover:shadow-xl active:scale-95"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
