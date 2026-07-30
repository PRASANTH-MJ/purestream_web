import { ArrowRight, Phone } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

export default function QuoteBanner() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Ready for cleaner, healthier water?
          </h2>
          <p className="mt-2 text-base font-medium text-brand-100/80">
            Talk to our team and get a quote tailored to your home or business.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+917012411523"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-white"
          >
            <Phone className="h-4 w-4" />
            +91 70124 11523
          </a>
          <button
            type="button"
            onClick={openQuoteModal}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-800 shadow-lg transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl active:scale-95"
          >
            Get A Quote
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
