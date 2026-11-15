import { MapPin, Navigation, Star, Phone, Mail } from 'lucide-react';
import { BUSINESS, CONTACT } from '../data/wwtp';

// Google Business Profile card: NAP exactly as on the listing + live map.
// The iframe uses native lazy loading, so it only loads when scrolled near.
export default function GoogleProfile() {
  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-ink-900">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">Find us on Google</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 dark:text-white">
            Visit our Palakkad office
          </h2>
          <a
            href={BUSINESS.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-bold text-amber-800 hover:bg-amber-100 dark:bg-amber-500/10 dark:text-amber-300"
          >
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {BUSINESS.rating.stars} on Google · {BUSINESS.rating.count} reviews
          </a>
          <address className="mt-6 space-y-4 not-italic">
            <p className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400" />
              <span>
                <strong className="block text-ink-900 dark:text-white">
                  {BUSINESS.legalName} ({BUSINESS.brand})
                </strong>
                {BUSINESS.street}, {BUSINESS.locality}, {BUSINESS.region} {BUSINESS.postalCode}
              </span>
            </p>
            <p className="flex items-center gap-3 text-sm">
              <Phone className="h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400" />
              <a href={CONTACT.phoneHref} className="font-semibold text-ink-900 hover:text-brand-700 dark:text-white">
                {CONTACT.phone}
              </a>
            </p>
            <p className="flex items-center gap-3 text-sm">
              <Mail className="h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400" />
              <a href={`mailto:${CONTACT.email}`} className="font-semibold text-ink-900 hover:text-brand-700 dark:text-white">
                {CONTACT.email}
              </a>
            </p>
          </address>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={BUSINESS.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700"
            >
              <Navigation className="h-4 w-4" /> Get directions
            </a>
            <a
              href={BUSINESS.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:border-amber-300 hover:text-amber-700 dark:border-white/15 dark:text-slate-200"
            >
              <Star className="h-4 w-4 text-amber-500" /> Reviews on Google
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            Happy with our work? A Google review helps other businesses find us.
          </p>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-3xl bg-slate-100 lg:col-span-3 dark:bg-ink-800">
          <iframe
            title="SV Trades (Pure Stream) on Google Maps"
            src={BUSINESS.mapsEmbed}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
