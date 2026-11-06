import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';
import { useQuoteModal } from '../context/QuoteModalContext';
import { QUOTE_REQUIREMENTS, QUOTE_INDUSTRIES, VOLUME_OPTIONS, CONTACT, whatsappLink, buildEnquiryMessage } from '../data/wwtp';

const INITIAL_FORM = { name: '', company: '', phone: '', location: '', industry: '', requirement: '', volume: '', urgent: false };

const inputClass =
  'mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-brand-500/20';
const labelClass = 'text-sm font-bold text-ink-900 dark:text-white';

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
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(whatsappLink(buildEnquiryMessage(form)), '_blank', 'noopener');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm" onClick={closeQuoteModal} />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
            className="relative max-h-full w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8 dark:bg-ink-800"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', damping: 24, stiffness: 300 }}
          >
            <button
              type="button"
              onClick={closeQuoteModal}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center py-6 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-eco-50 text-eco-600 dark:bg-eco-500/10 dark:text-eco-400">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-display text-xl font-extrabold text-ink-900 dark:text-white">
                  Thanks, {form.name.split(' ')[0] || 'there'}!
                </h2>
                <p className="mt-2 max-w-xs text-sm text-slate-500 dark:text-slate-400">
                  Your enquiry is ready in WhatsApp. Press send there and our team will reply. If WhatsApp did
                  not open, call us on{' '}
                  <a href={CONTACT.phoneHref} className="font-bold text-brand-700 dark:text-brand-400">
                    {CONTACT.phone}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 active:scale-95"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <h2 id="quote-modal-title" className="pr-8 font-display text-2xl font-extrabold tracking-tight text-ink-900 dark:text-white">
                  Book a Site Assessment
                </h2>
                <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                  Tell us about your site. Every plant is custom-quoted after a ₹4,900 industrial consultancy
                  visit (within 50 km).
                </p>

                <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="q-name" className={labelClass}>Your name</label>
                    <input id="q-name" name="name" required value={form.name} onChange={handleChange} className={inputClass} autoComplete="name" />
                  </div>
                  <div>
                    <label htmlFor="q-company" className={labelClass}>Company</label>
                    <input id="q-company" name="company" value={form.company} onChange={handleChange} className={inputClass} autoComplete="organization" />
                  </div>
                  <div>
                    <label htmlFor="q-phone" className={labelClass}>Phone / WhatsApp</label>
                    <input id="q-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} autoComplete="tel" />
                  </div>
                  <div>
                    <label htmlFor="q-location" className={labelClass}>Site location</label>
                    <input id="q-location" name="location" value={form.location} onChange={handleChange} placeholder="Town, district" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="q-industry" className={labelClass}>Industry</label>
                    <select id="q-industry" name="industry" required value={form.industry} onChange={handleChange} className={inputClass}>
                      <option value="" disabled>Select</option>
                      {QUOTE_INDUSTRIES.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="q-volume" className={labelClass}>Daily volume</label>
                    <select id="q-volume" name="volume" value={form.volume} onChange={handleChange} className={inputClass}>
                      <option value="">Select</option>
                      {VOLUME_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="q-req" className={labelClass}>What do you need?</label>
                    <select id="q-req" name="requirement" required value={form.requirement} onChange={handleChange} className={inputClass}>
                      <option value="" disabled>Select a requirement</option>
                      {QUOTE_REQUIREMENTS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <label className="flex items-start gap-3 rounded-xl bg-amber-50 p-3 text-sm text-ink-900 sm:col-span-2 dark:bg-amber-500/10 dark:text-slate-200">
                    <input type="checkbox" name="urgent" checked={form.urgent} onChange={handleChange} className="mt-0.5 h-4 w-4 accent-brand-600" />
                    <span>
                      <strong>This is urgent:</strong> we have a compliance deadline or an upcoming inspection, or our
                      existing system is down.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 active:scale-95 sm:col-span-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send enquiry on WhatsApp
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
