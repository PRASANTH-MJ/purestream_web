import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';
import PureStreamLogo from './PureStreamLogo';
import { useQuoteModal } from '../context/QuoteModalContext';

const LINK_COLUMNS = [
  {
    title: 'Waste Water',
    links: [
      { label: 'Effluent Treatment (ETP)', to: '/solutions#etp' },
      { label: 'Sewage Treatment (STP)', to: '/solutions#stp' },
      { label: 'Modular Plants', to: '/solutions#modular' },
      { label: 'Water Recycling & RO', to: '/solutions#reuse' },
      { label: 'Projects', to: '/projects' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Industries', to: '/industries' },
      { label: 'Services & AMC', to: '/services' },
      { label: 'Water Purifiers', to: '/products' },
      { label: 'About Us', to: '/about-us' },
      { label: 'Contact Us', to: '/contact-us' },
      { label: 'Book a Site Assessment', to: null },
    ],
  },
];

const SOCIALS = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
];

export default function Footer() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <footer className="bg-ink-900 pt-16 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 pb-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center">
              <PureStreamLogo textClassName="text-white" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Industrial effluent and sewage treatment plants from 2 to 100 KLD. SBBR technology,
              designed for PCB norms and water reuse. SV Trades, Town Bus Stand, Palakkad, Kerala – 678014.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                <a href="tel:+917012411523" className="hover:text-white">
                  +91 70124 11523
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-brand-400" />
                <a
                  href="https://wa.me/917012411523"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {LINK_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-white">
                {column.title}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) =>
                  link.to ? (
                    <li key={link.label}>
                      <Link to={link.to} className="text-sm text-slate-400 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <button
                        type="button"
                        onClick={openQuoteModal}
                        className="text-sm text-slate-400 hover:text-white"
                      >
                        {link.label}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} PureStream. All rights reserved.</p>
          <p>Treat it right. Reuse it.</p>
        </div>
      </div>
    </footer>
  );
}
