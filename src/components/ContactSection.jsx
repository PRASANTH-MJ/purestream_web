import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { CONTACT, QUOTE_INDUSTRIES, QUOTE_REQUIREMENTS, whatsappLink, buildEnquiryMessage } from '../data/wwtp';

const inputClass =
  'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', industry: '', requirement: '', message: '' });
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    window.open(whatsappLink(buildEnquiryMessage(form)), '_blank', 'noopener');
  };

  const items = [
    { icon: Phone, label: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: MessageCircle, label: 'WhatsApp us', href: `https://wa.me/${CONTACT.whatsapp}`, external: true },
    { icon: Mail, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MapPin, label: CONTACT.address },
  ];

  return (
    <section id="contact" className="bg-brand-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-300">Get in touch</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Talk to a water treatment engineer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-100/80">
              Share your industry, effluent type and rough daily volume. We will recommend the next step, usually
              a ₹4,900 site consultancy with lab testing.
            </p>

            <ul className="mt-8 space-y-5">
              {items.map(({ icon: Icon, label, href, external }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="text-sm font-semibold text-brand-50 hover:text-white"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-brand-50">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className="text-sm font-bold text-ink-900">Full name</label>
                <input id="c-name" name="name" required value={form.name} onChange={onChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="c-company" className="text-sm font-bold text-ink-900">Company</label>
                <input id="c-company" name="company" value={form.company} onChange={onChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="c-phone" className="text-sm font-bold text-ink-900">Phone number</label>
                <input id="c-phone" name="phone" type="tel" required value={form.phone} onChange={onChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="c-industry" className="text-sm font-bold text-ink-900">Industry</label>
                <select id="c-industry" name="industry" value={form.industry} onChange={onChange} className={inputClass}>
                  <option value="">Select</option>
                  {QUOTE_INDUSTRIES.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-req" className="text-sm font-bold text-ink-900">Requirement</label>
                <select id="c-req" name="requirement" value={form.requirement} onChange={onChange} className={inputClass}>
                  <option value="">Select</option>
                  {QUOTE_REQUIREMENTS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-message" className="text-sm font-bold text-ink-900">Details</label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  placeholder="Effluent source, daily volume, any PCB notice or deadline…"
                  className={inputClass}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 active:scale-95 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Send on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
