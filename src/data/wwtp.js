// Industrial waste-water treatment content.
// Every fact here is sourced from purestream-bot/knowledge/purestream.md
// (owner-confirmed 2026-08-08). Do not add capacities, prices, certifications
// or timelines that aren't in that file.

export const CONTACT = {
  youtube: '', // channel URL, e.g. https://www.youtube.com/@VineethWaterConsultant
  phone: '+91 70124 11523',
  phoneHref: 'tel:+917012411523',
  whatsapp: '917012411523',
  email: 'svtpkd@gmail.com',
  address: 'SV Trades, Town Bus Stand, Palakkad, Kerala – 678014',
};

export const KEY_FACTS = [
  { value: '2–100', unit: 'KLD', label: 'Plant capacity range' },
  { value: '~1', unit: 'month', label: 'Order to commissioning' },
  { value: 'SBBR', unit: '', label: 'Core treatment process' },
  { value: '₹4,900', unit: '', label: 'Industrial site consultancy' },
];

export const SOLUTIONS = [
  {
    slug: 'etp',
    icon: 'Factory',
    title: 'Effluent Treatment Plants (ETP)',
    short: 'For process effluent from factories, food processing, metal finishing and service stations.',
    points: [
      'Designed around your measured effluent, not a brochure estimate',
      'Oil & grease traps, equalisation, biological or chemical stages as the load needs',
      'Electrocoagulation + RO options for high-TDS or acidic streams',
      'Treated to PCB discharge norms or reuse standards',
    ],
  },
  {
    slug: 'stp',
    icon: 'Building2',
    title: 'Sewage Treatment Plants (STP)',
    short: 'For hotels, hospitals, apartment complexes / RWAs and institutional campuses.',
    points: [
      'SBBR (Sequencing Batch Biofilm Reactor) process',
      'Sized from 2 KLD to 100 KLD',
      'Treated water suitable for gardening, flushing and other reuse',
      'Supports your Consent to Operate (CTO) application',
    ],
  },
  {
    slug: 'modular',
    icon: 'Boxes',
    title: 'Modular Packaged Plants',
    short: 'For urgent needs: a compliance deadline, an upcoming inspection or a failed existing system.',
    points: [
      'Faster to deploy than a civil-work-based build',
      'Compact, pre-engineered units',
      'Same SBBR treatment approach',
      'Ask about this when time is the constraint',
    ],
  },
  {
    slug: 'reuse',
    icon: 'Recycle',
    title: 'Water Recycling & Industrial RO',
    short: 'Turn treated effluent back into process water and cut fresh-water costs.',
    points: [
      '100 LPH and 250 LPH industrial RO systems',
      'Multi-media, sand and activated-carbon filtration',
      'Iron removers and softeners for raw-water pre-treatment',
      'Sized only after a lab report and flow test',
    ],
  },
];

// SBBR / SBR process stages, in the order used on the Pickle Factory STP.
export const PROCESS_STAGES = [
  { name: 'Mud Trap', detail: 'Grit, sand and heavy solids settle out first.' },
  { name: 'Oil & Grease Trap', detail: 'Floating oil and fat are separated before they foul downstream stages.' },
  { name: 'Settling Tank', detail: 'Suspended solids settle as primary sludge.' },
  { name: 'Equalisation Tank', detail: 'Evens out flow and load swings across the day.' },
  { name: 'SBBR Reactor', detail: 'Hybrid SBR + MBBR biofilm stages break down organic load (BOD/COD) and absorb shock loads.' },
  { name: 'Pressure Sand Filter', detail: 'Polishes out remaining fine suspended solids.' },
  { name: 'Activated Carbon Filter', detail: 'Removes colour, odour and residual organics.' },
  { name: 'Chlorine Dosing', detail: 'Disinfects water for safe discharge or reuse.' },
];

export const INDUSTRIES = [
  { icon: 'UtensilsCrossed', name: 'Food Processing', note: 'High organic load, oil and grease, seasonal swings.' },
  { icon: 'Hotel', name: 'Hotels & Resorts', note: 'Kitchen and guest-room sewage, with reuse for landscaping.' },
  { icon: 'Hospital', name: 'Hospitals', note: 'Continuous flow and strict discharge expectations.' },
  { icon: 'Building', name: 'Apartments & RWAs', note: 'Shared STPs with low running cost and simple operation.' },
  { icon: 'Factory', name: 'Factories & Metal Finishing', note: 'Acidic, high-TDS and chemically loaded effluent.' },
  { icon: 'Car', name: 'Service Stations & Car Wash', note: 'Mud, oil and detergent-heavy wash water at small volumes.' },
];

export const CASE_STUDIES = [
  {
    slug: 'merge-mechano',
    client: 'Merge Mechano',
    location: 'Varavoor, Thrissur',
    industry: 'Industrial powder coating & metal finishing',
    capacity: 'Advanced Electrocoagulation (EC) System · 250 LPH',
    challenge:
      'Raw-material washing used caustic soda and oxalic acid. The projected influent TDS was 180 PPM, but on site it measured 850 PPM at pH 3.0. Standard chemical dosing would have created hazardous sludge and failed KSPCB norms.',
    solution: [
      'Electrocoagulation reactor that uses electric current instead of recurring chemical additives to neutralise acids and coagulate dissolved ions',
      'Automatic pH stabilisation from 3.0 to neutral',
      'Multi-stage sand + activated-carbon filtration',
      'High-rejection RO sized for the 850 PPM spike',
    ],
    result:
      'Chemical-free treatment cuts daily operating and sludge-handling costs. The treated water is recycled back into the washing process, and the factory stays within KSPCB norms with a footprint smaller than a traditional clarifier.',
    highlight: 'Pioneering chemical-free electrocoagulation in Kerala',
    video: '', // paste YouTube URL (watch, youtu.be or shorts link)
  },
  {
    slug: 'pickle-factory',
    client: 'Commercial Pickle Manufacturing Facility',
    location: 'Palakkad',
    industry: 'Food processing & high-TDS effluent',
    capacity: 'Hybrid SBBR (SBR + MBBR)',
    challenge:
      'Complex food-processing wastewater with shock organic loads and high salinity, which had to be treated without high power bills or a full-time operator.',
    solution: [
      'Hybrid SBBR: Sequencing Batch Reactor (SBR) combined with Moving Bed Biofilm Reactor (MBBR) biological stages',
      'Mud trap → oil & grease trap → settling → equalisation → reactor chamber',
      'Pressure sand filter → activated carbon filter → chlorine dosing',
      'Airlift pumping and semi-automatic operation',
    ],
    result: 'The plant absorbs shock loads and salinity while running on just 160 W of power with minimal hands-on operation.',
    highlight: 'Handles shock loads on just 160 W',
    video: '', // paste YouTube URL (watch, youtu.be or shorts link)
  },
  {
    slug: 'shaju-car-wash',
    client: 'Shaju Car Wash Center',
    location: null,
    industry: 'Automotive & wash centre',
    capacity: 'Chemical-Based Effluent Treatment Plant (ETP)',
    challenge: 'Automotive wash runoff heavy with mud, oil and grease needed treatment to a standard fit for reuse.',
    solution: [
      'High-efficiency chemical precipitation',
      'Oil and grease separation',
      'Multi-stage filtration',
    ],
    result: 'Clean, treated water is reused at the wash centre.',
    highlight: 'Wash water treated for reuse',
    video: '', // paste YouTube URL (watch, youtu.be or shorts link)
  },
  {
    slug: 'ramans-steam-wash',
    client: "Raman's Steam Wash Station",
    location: 'Chazhur, Thrissur',
    industry: 'Car wash / service station',
    capacity: '2 KLD Chemical ETP',
    challenge:
      'A small service station needed proper treatment for mud, oil and detergent wash water, sized for its real volume.',
    solution: [
      'Mud trap → oil & grease trap → settlement → collection tank',
      'Chemical dosing → coagulation unit → clariflocculator',
      'Sand filter → carbon filter → disinfectant dosing',
    ],
    result: 'A complete, compliant treatment train at 2 KLD, the right size for a small commercial site.',
    highlight: 'Complete ETP at 2 KLD',
    video: '', // paste YouTube URL (watch, youtu.be or shorts link)
  },
];

// Client-supplied copy (2026-11-06).
export const TECHNOLOGIES = [
  {
    icon: 'Car',
    name: 'Chemical-Based ETP',
    for: 'Automotive & wash centres',
    detail: 'Chemical precipitation and filtration for wash runoff, with oil and grease separation and clean water reuse.',
  },
  {
    icon: 'Zap',
    name: 'Electrocoagulation (EC)',
    for: 'Powder coating & metal finishing',
    detail: 'Uses electric current instead of recurring chemical additives, cutting daily operating and sludge-handling costs.',
  },
  {
    icon: 'Recycle',
    name: 'Hybrid SBBR (SBR + MBBR)',
    for: 'Food processing & high-load effluent',
    detail: 'Sequencing Batch Reactor plus Moving Bed Biofilm Reactor stages, built for shock organic loads and high salinity.',
  },
];

export const WHY_CHOOSE = {
  automation: {
    title: 'Intelligent automation',
    body: 'Every plant has a semi-automatic or fully automated control system. With manual intervention kept to a minimum, output quality stays consistent, human error is avoided and the system runs with near-zero failures.',
  },
  tco: {
    title: 'Lowest total cost of ownership',
    body: 'Advanced engineering and automated components need a slightly higher initial investment (CapEx), but our plants deliver industry-leading efficiency in daily operation (OpEx).',
    points: [
      { title: 'Lower operating expenses', detail: 'Minimal chemical use and optimised power consumption.' },
      { title: 'Virtually maintenance-free', detail: 'Much lower risk of mechanical breakdown and downtime.' },
      { title: 'Long-term ROI', detail: 'Counting setup and running costs together over the plant’s life, our systems deliver the lowest net expenditure.' },
    ],
  },
};

export const ENGAGEMENT_STEPS = [
  {
    title: 'Site Consultancy',
    detail:
      'Site visit, feasibility test, water sample collection, flow test, water lab test and an offline discussion. ₹4,900 within 50 km.',
  },
  {
    title: 'Written Proposal',
    detail: 'A plant design and custom quote based on your actual effluent and site conditions.',
  },
  {
    title: 'Civil Spec Handover',
    detail: 'We share tank and foundation specifications, and your team builds the civil works to spec.',
  },
  {
    title: 'Equipment & Commissioning',
    detail: 'We supply, install and commission the plant, typically about 1 month from order.',
  },
  {
    title: 'AMC & Support',
    detail: 'Ongoing maintenance to keep the plant performing and compliant.',
  },
];

export const SCOPE = {
  ours: ['Site consultancy & lab testing', 'Process design & proposal', 'Equipment supply', 'Installation & commissioning', 'AMC'],
  yours: ['Civil works (tanks, foundation) built to our specification'],
};

export const FAQS = [
  {
    q: 'What capacity plants do you build?',
    a: 'Our standard range is 2 KLD to 100 KLD (kilolitres per day). If your volume is outside this range, share your details and our team will confirm feasibility.',
  },
  {
    q: 'How much does an ETP or STP cost?',
    a: 'Every plant is custom-quoted from site conditions, effluent characteristics and volume, so there is no fixed price list. The first step is our ₹4,900 Industrial Consultancy (within 50 km), which ends with a written proposal and quote.',
  },
  {
    q: 'How long does installation take?',
    a: 'Typically about 1 month from order to commissioning. If you face an urgent deadline, ask about our modular packaged plants.',
  },
  {
    q: 'Is civil work included?',
    a: 'No. Civil works such as tanks and foundations are in the customer’s scope. We provide the exact specification, then handle equipment, installation, commissioning and AMC.',
  },
  {
    q: 'Will the plant meet Pollution Control Board norms?',
    a: 'Our plants are designed to meet PCB discharge norms, support your Consent to Operate (CTO), and treat water to reuse standards.',
  },
  {
    q: 'Our effluent is unusual. Can you still treat it?',
    a: 'Yes. That is why we test on site first and match the technology to the stream: chemical ETP, electrocoagulation or hybrid SBBR. In our Merge Mechano project the effluent measured 850 PPM TDS at pH 3.0, far worse than projected, and we engineered an electrocoagulation + RO plant around it.',
  },
  {
    q: 'Are your plants automated?',
    a: 'Yes. Every plant is semi-automatic or fully automated, which keeps manual work to a minimum and output quality consistent.',
  },
];

export const QUOTE_REQUIREMENTS = [
  'Effluent Treatment Plant (ETP)',
  'Sewage Treatment Plant (STP)',
  'Modular / urgent plant',
  'Water recycling / Industrial RO',
  'Existing plant AMC / upgrade',
  'Industrial consultancy visit',
  'Water purifier (home / office)',
];

export const QUOTE_INDUSTRIES = [
  'Food processing',
  'Hotel / Resort',
  'Hospital',
  'Apartment / RWA',
  'Factory / Manufacturing',
  'Service station / Car wash',
  'Other',
];

export const VOLUME_OPTIONS = ['Under 2 KLD', '2–10 KLD', '10–50 KLD', '50–100 KLD', 'Above 100 KLD', 'Not sure yet'];

export function whatsappLink(text) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function buildEnquiryMessage(f) {
  return [
    'Hello Pure Stream, I would like to enquire about waste water treatment.',
    '',
    `Name: ${f.name}`,
    f.company && `Company: ${f.company}`,
    `Phone: ${f.phone}`,
    f.location && `Site location: ${f.location}`,
    f.industry && `Industry: ${f.industry}`,
    f.requirement && `Requirement: ${f.requirement}`,
    f.volume && `Approx. daily volume: ${f.volume}`,
    f.urgent && 'URGENT: compliance deadline / inspection / existing system down',
    f.message && `Details: ${f.message}`,
  ]
    .filter(Boolean)
    .join('\n');
}

// Returns the 11-char YouTube video id from any common URL form, or null.
export function youtubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|v=|\/shorts\/|\/embed\/|\/live\/)([\w-]{11})/);
  return m ? m[1] : null;
}
