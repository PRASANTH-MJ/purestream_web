import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';

const PRODUCT_INTERESTS = [
  'RO Purifiers',
  'Booster Pumps',
  'Copper & Alkaline',
  'Maintenance / AMC',
  'Not Sure / General Enquiry',
];

const INITIAL_FORM = { name: '', phone: '', email: '', interest: '' };

export default function QuoteModal() {
  const { isOpen, closeQuoteModal } = useQuoteModal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeQuoteModal();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeQuoteModal]);

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setForm(INITIAL_FORM);
        setSubmitted(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
            onClick={closeQuoteModal}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
            className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl dark:bg-ink-800"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', damping: 24, stiffness: 300 }}
          >
            <button
              type="button"
              onClick={closeQuoteModal}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center py-6 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-display text-xl font-extrabold text-ink-900 dark:text-white">
                  Thanks, {form.name.split(' ')[0] || 'there'}!
                </h2>
                <p className="mt-2 max-w-xs text-sm text-slate-500 dark:text-slate-400">
                  Your request has been received. Our team will get back to you shortly with a
                  quote.
                </p>
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.03] hover:bg-brand-700 active:scale-95"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <h2
                  id="quote-modal-title"
                  className="font-display text-2xl font-extrabold tracking-tight text-ink-900 dark:text-white"
                >
                  Get A Quote
                </h2>
                <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                  Tell us a little about what you need — we'll take it from there.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="text-sm font-bold text-ink-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      id="quote-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-brand-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="text-sm font-bold text-ink-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-brand-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-email"
                      className="text-sm font-bold text-ink-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-brand-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-interest"
                      className="text-sm font-bold text-ink-900 dark:text-white"
                    >
                      Product Interest
                    </label>
                    <select
                      id="quote-interest"
                      name="interest"
                      required
                      value={form.interest}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-brand-500/20"
                    >
                      <option value="" disabled>
                        Select a category
                      </option>
                      {PRODUCT_INTERESTS.map((option) => (
                        <option key={option} value={option} className="text-ink-900">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.02] hover:bg-brand-700 hover:shadow-xl active:scale-95"
                  >
                    Submit Request
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
