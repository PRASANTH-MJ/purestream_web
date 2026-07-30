import { Phone, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-brand-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-300">
              Get In Touch
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Get A Quote Today
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-100/80">
              Reach out for pricing, installation, or maintenance across our full range of
              PureStream products.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-200">
                  <Phone className="h-5 w-5" />
                </span>
                <a href="tel:+917012411523" className="text-sm font-semibold text-brand-50 hover:text-white">
                  +91 70124 11523
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-200">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <a
                  href="https://wa.me/917012411523"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-brand-50 hover:text-white"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <form className="rounded-3xl bg-white p-8 shadow-2xl lg:col-span-3">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-bold text-ink-900">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-bold text-ink-900">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="text-sm font-bold text-ink-900">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-bold text-ink-900">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us which product you're interested in"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:scale-[1.02] hover:bg-brand-700 active:scale-95 sm:w-auto"
            >
              Request A Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
