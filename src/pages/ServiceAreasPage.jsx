import { Link } from 'react-router-dom';
import { useSeo } from '../lib/seo';
import { MapPin, Factory, Droplets, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import QuoteBanner from '../components/QuoteBanner';
import GoogleProfile from '../components/GoogleProfile';
import { SERVICE_AREAS } from '../data/wwtp';

export default function ServiceAreasPage() {
  useSeo('/service-areas');
  return (
    <>
      <PageHeader
        title="Waste Water Treatment & Water Purifiers Across Kerala"
        crumb="Service Areas"
        subtitle="Based at Palakkad Town Bus Stand, we design and install ETP/STP plants and supply water purifiers, iron removers and softeners across Kerala."
      />

      <section className="bg-white py-16 transition-colors duration-300 dark:bg-ink-900">
        <div className="mx-auto max-w-5xl space-y-6 px-6 lg:px-8">
          {SERVICE_AREAS.map((a) => (
            <article
              key={a.district}
              id={a.district.toLowerCase()}
              className="scroll-mt-28 rounded-3xl border border-slate-100 p-7 shadow-sm dark:border-white/10 dark:bg-ink-800"
            >
              <h2 className="flex items-center gap-2 font-display text-2xl font-extrabold text-ink-900 dark:text-white">
                <MapPin className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                ETP, STP &amp; water purifiers in {a.district}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{a.note}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {a.wastewater.length > 0 && (
                  <div>
                    <p className="flex items-center gap-2 font-display text-sm font-bold text-ink-900 dark:text-white">
                      <Factory className="h-4 w-4 text-brand-600 dark:text-brand-400" /> Waste water treatment work
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                      {a.wastewater.map((w) => (
                        <li key={w}>• {w}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {a.purifier.length > 0 && (
                  <div>
                    <p className="flex items-center gap-2 font-display text-sm font-bold text-ink-900 dark:text-white">
                      <Droplets className="h-4 w-4 text-eco-600" /> Purifier &amp; filter installations
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                      {a.purifier.map((w) => (
                        <li key={w}>• {w}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}

          <div className="rounded-3xl bg-slate-50 p-7 dark:bg-ink-800">
            <h2 className="font-display text-xl font-extrabold text-ink-900 dark:text-white">Elsewhere in Kerala</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              We take ETP and STP projects across Kerala. Share your location and daily volume, and we will confirm
              feasibility. Site consultancy beyond 50 km of Palakkad is quoted on enquiry.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold">
              <Link to="/solutions" className="inline-flex items-center gap-1 text-brand-700 dark:text-brand-400">
                ETP &amp; STP solutions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="inline-flex items-center gap-1 text-brand-700 dark:text-brand-400">
                Water purifiers <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-1 text-brand-700 dark:text-brand-400">
                Project videos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GoogleProfile />
      <QuoteBanner />
    </>
  );
}
