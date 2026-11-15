import { useEffect } from 'react';
import { BUSINESS } from '../data/wwtp';

// Per-page title/description tuned for local search: what we do + where.
export const PAGE_SEO = {
  '/': {
    title: 'ETP & STP Plant Manufacturer in Palakkad, Kerala | Pure Stream (SV Trades)',
    description:
      'Industrial waste water treatment in Palakkad and across Kerala: ETP, STP and modular plants from 2 to 100 KLD, plus RO water purifiers. Site consultancy from ₹4,900. Call +91 70124 11523.',
  },
  '/solutions': {
    title: 'ETP, STP & Effluent Treatment Plants in Kerala | Pure Stream Palakkad',
    description:
      'Effluent treatment plants (ETP), sewage treatment plants (STP), modular packaged plants and water recycling for Kerala industries. SBBR and electrocoagulation, designed for PCB norms.',
  },
  '/industries': {
    title: 'Waste Water Treatment for Industries in Kerala | Pure Stream',
    description:
      'ETP and STP solutions for food processing, hotels, hospitals, apartments, factories and car wash centres in Palakkad, Thrissur, Ernakulam and across Kerala.',
  },
  '/projects': {
    title: 'ETP & STP Projects in Palakkad and Thrissur | Pure Stream Case Studies',
    description:
      'Real waste water treatment plants we built in Kerala: Merge Mechano Thrissur, a Palakkad pickle factory, Shaju Car Wash and Raman’s Steam Wash. Watch the project videos.',
  },
  '/services': {
    title: 'Waste Water Consultancy & AMC in Palakkad | Pure Stream',
    description:
      'Industrial site consultancy with lab testing (₹4,900 within 50 km of Palakkad), ETP/STP commissioning in about 1 month, and plant AMC across Kerala.',
  },
  '/service-areas': {
    title: 'Service Areas: Palakkad, Thrissur, Ernakulam & Kerala | Pure Stream',
    description:
      'Where we install ETP/STP plants, RO purifiers, iron removers and softeners: Palakkad, Mannarkkad, Akathethara, Kanjikkode, Thrissur, Ernakulam and across Kerala.',
  },
  '/products': {
    title: 'Water Purifier Dealer in Palakkad | RO, UV, Iron Remover & Softener',
    description:
      'Buy RO and UV water purifiers, industrial RO plants, iron removers, softeners and whole-house filters in Palakkad with installation and AMC. SV Trades, Town Bus Stand.',
  },
  '/maintenance': {
    title: 'Water Purifier Service & AMC in Palakkad | Pure Stream',
    description:
      'RO water purifier service and annual maintenance plans (Platinum, Gold, Silver) in Palakkad: filter and membrane changes, TDS tests and trained technicians.',
  },
  '/about-us': {
    title: 'About Pure Stream (SV Trades), Palakkad | Water Treatment Engineers',
    description:
      'Pure Stream, run by SV Trades at Palakkad Town Bus Stand, designs ETP/STP plants and supplies water purifiers across Kerala.',
  },
  '/contact-us': {
    title: 'Contact Pure Stream Palakkad | ETP, STP & Water Purifier Enquiries',
    description:
      'Visit SV Trades at T B Complex, Town Bus Stand, Palakkad 678014, call +91 70124 11523 or WhatsApp us for ETP, STP and water purifier enquiries.',
  },
};

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** Sets title, description, canonical and Open Graph tags for the current page. */
export function useSeo(path, override) {
  useEffect(() => {
    const seo = override ?? PAGE_SEO[path] ?? PAGE_SEO['/'];
    const url = BUSINESS.siteUrl + (path === '/' ? '/' : path);
    document.title = seo.title;
    setMeta('name', 'description', seo.description);
    setMeta('property', 'og:title', seo.title);
    setMeta('property', 'og:description', seo.description);
    setMeta('property', 'og:url', url);
    setCanonical(url);
  }, [path, override]);
}
