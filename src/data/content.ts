/** Shared UI tokens — align with reference designs */
export const ACCENT = "#2563eb";
export const NAVY_DEEP = "#1a2b4b";

export type RegionFilter = "all" | "Americas" | "Europe" | "Asia" | "Middle East";

export const whyCards = [
  {
    key: "partnerships",
    title: "Top university partnerships",
    description:
      "We work with 150+ accredited universities across the UK, USA, Canada, and Europe — matched to your study abroad goals.",
    accent: "blue" as const,
  },
  {
    key: "advisors",
    title: "Expert study abroad advisors",
    description:
      "Personalised guidance from consultants who understand university admissions, student visa timelines, and scholarships for international students.",
    accent: "purple" as const,
  },
  {
    key: "success",
    title: "Proven student success",
    description:
      "Students trust us for structured planning — from shortlisting and applications to visa readiness and departure.",
    accent: "sky" as const,
  },
  {
    key: "trust",
    title: "Trusted & accredited",
    description:
      "ICEF-accredited international education agency in Dubai — ethical counselling and transparent expectations.",
    accent: "green" as const,
  },
];

export const services = [
  {
    title: "Study abroad counselling",
    description:
      "Profile review, destination advice, and a roadmap for studying abroad — aligned with admissions and visa timelines.",
    accent: "blue" as const,
  },
  {
    title: "University application support",
    description:
      "University admissions support across portals — documentation review, submission tracking, and interview readiness.",
    accent: "purple" as const,
  },
  {
    title: "Student visa assistance",
    description:
      "Structured guidance for student visa applications and embassy preparation linked to your offer timeline.",
    accent: "sky" as const,
  },
  {
    title: "Embassy interview preparation",
    description:
      "Mock interviews and checklist-driven coaching where embassy appointments form part of your route abroad.",
    accent: "pink" as const,
  },
  {
    title: "Scholarships & financial advice",
    description:
      "Funding awareness for merit and institutional awards — packaged alongside realistic admissions strategy.",
    accent: "amber" as const,
  },
  {
    title: "Pre-departure guidance",
    description:
      "Travel readiness, accommodation orientation, and essential checks before you leave the UAE.",
    accent: "green" as const,
  },
  {
    title: "Post-arrival support",
    description:
      "Continued orientation after arrival so you settle into your university and host country with clarity.",
    accent: "rose" as const,
  },
];

export type Destination = {
  country: string;
  benefit: string;
  region: Exclude<RegionFilter, "all">;
  flag: string;
};

export const destinations: Destination[] = [
  { country: "USA", benefit: "Study in USA · Top research universities", region: "Americas", flag: "🇺🇸" },
  { country: "UK", benefit: "Study in UK · Historic institutions & graduate pathways", region: "Europe", flag: "🇬🇧" },
  { country: "Canada", benefit: "Study in Canada · PGWP-friendly routes", region: "Americas", flag: "🇨🇦" },
  { country: "Germany", benefit: "Study in Germany · STEM & English-taught options", region: "Europe", flag: "🇩🇪" },
  { country: "Spain", benefit: "Study in Spain · Vibrant student cities", region: "Europe", flag: "🇪🇸" },
  { country: "Italy", benefit: "Study in Italy · Arts, design & business hubs", region: "Europe", flag: "🇮🇹" },
  { country: "Hungary", benefit: "Study in Hungary · Accessible EU education", region: "Europe", flag: "🇭🇺" },
  { country: "Poland", benefit: "Study in Poland · Central European hubs", region: "Europe", flag: "🇵🇱" },
  { country: "Romania", benefit: "Study in Romania · Growing English programmes", region: "Europe", flag: "🇷🇴" },
  { country: "South Korea", benefit: "Study in South Korea · Innovation-led campuses", region: "Asia", flag: "🇰🇷" },
  { country: "Turkey", benefit: "Study in Turkey · Bridge between continents", region: "Middle East", flag: "🇹🇷" },
  { country: "UAE", benefit: "Study in UAE · Regional excellence hubs", region: "Middle East", flag: "🇦🇪" },
  { country: "Cyprus", benefit: "Study in Cyprus · EU pathways & Mediterranean lifestyle", region: "Europe", flag: "🇨🇾" },
  { country: "Lithuania", benefit: "Study in Lithuania · Affordable EU degrees", region: "Europe", flag: "🇱🇹" },
];

export type NewsItem = {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
};

export const newsItems: NewsItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
    category: "Scholarship Alert",
    date: "April 2026",
    title: "Merit awards opening for Fall intake",
    excerpt: "Key deadlines for institutional scholarships across UK and North American partners.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    category: "Education Fair",
    date: "March 2026",
    title: "Meet universities in Dubai",
    excerpt: "Representatives from partner institutions — programme briefings and on-site counselling slots.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    category: "Study Guide",
    date: "February 2026",
    title: "Visa readiness checklist",
    excerpt: "Documentation timelines and embassy preparation tips for popular study destinations.",
  },
];

export const trustIndicators = [
  { label: "University Partners", value: "150+" },
  { label: "Countries", value: "30+" },
  { label: "Accreditation", value: "ICEF Accredited" },
];

export const eventCards = [
  {
    title: "Scholarships",
    description:
      "Stay informed about merit awards, institutional scholarships, and deadlines.",
  },
  {
    title: "Education fairs",
    description:
      "Meet university representatives and explore programmes matched to your profile.",
  },
  {
    title: "Study guides",
    description:
      "Practical guidance on applications, visas, and life abroad — curated by our team.",
  },
];

export type FaqItem = {
  question: string;
  answer?: string;
  listItems?: string[];
  answerSuffix?: string;
};

export const faqSectionCopy = {
  eyebrow: "FAQ",
  title: "Study abroad questions students ask first",
  lead:
    "University admissions, student visa support, scholarships for international students, and timelines — clear answers before you book your Dubai consultation.",
} as const;

export const faqItems: FaqItem[] = [
  {
    question: "Which countries can I study abroad in with AGES Global?",
    answer:
      "AGES Global offers study abroad pathways across 30+ countries including the UK, USA, Canada, Germany, Europe, and Asia — aligned with your academic goals.",
  },
  {
    question: "How does AGES support students studying abroad?",
    answer:
      "We provide full international education agency support: university applications, student visa assistance, scholarships guidance, and pre-departure preparation.",
  },
  {
    question: "Do you charge for study abroad services?",
    answer:
      "Yes — we offer flexible service packages depending on the level of counselling, admissions, and visa support you choose.",
  },
  {
    question: "How do you help me choose the right university?",
    answer:
      "Our study abroad consultants assess your academic background, career goals, and budget to recommend best-fit universities and programmes.",
  },
  {
    question: "What are the basic requirements to study abroad?",
    answer: "Requirements vary by country and programme; common expectations include:",
    listItems: [
      "Academic transcripts",
      "English language tests (e.g. IELTS / TOEFL where applicable)",
      "Valid passport",
    ],
    answerSuffix: "We align documentation with your destination’s admissions and visa rules.",
  },
  {
    question: "Do you provide student visa support?",
    answer:
      "Yes — we deliver structured guidance for student visa applications and embassy preparation linked to your offer timeline.",
  },
  {
    question: "How long does the study abroad process take?",
    answer:
      "Timelines range from a few weeks to several months depending on destination and intake — earlier preparation protects admissions and visa windows.",
  },
  {
    question: "Can you help with scholarships for international students?",
    answer:
      "Yes — we assist students in identifying scholarships for international students and aligning documents with merit or institutional awards.",
  },
  {
    question: "When should I apply for study abroad?",
    answer:
      "We recommend starting your study abroad application 6–12 months before your intake where possible — competitive programmes fill earlier.",
  },
  {
    question: "How do I get started with AGES Global Dubai?",
    answer:
      "Book a consultation with our study abroad advisors in Dubai — we’ll map programmes, university admissions steps, and student visa milestones.",
  },
];

/** Homepage & pillar SEO — refine metrics with verified facts when publishing */
export const heroSeoCopy = {
  badgeLabel: "ICEF accredited · international education agency UAE",
  titlePrimary: "Study abroad with confidence",
  titleBrand: "AGES Global Dubai",
  subtitleBold: "Your trusted international education agency in Dubai.",
  body:
    "AGES Global helps students from the UAE and beyond find the right universities worldwide — from choosing where to study abroad to university admissions, student visa support, scholarships, and arrival planning.",
} as const;

export const aboutSeoCopy = {
  eyebrow: "Study abroad · UAE",
  title: "International education agency · Dubai",
  introHighlight:
    "AGES Global helps UAE students pursue study abroad goals with university admissions planning, student visa support, and scholarships guidance — targeting destinations including the UK, USA, Canada, Germany and Europe.",
  supportBullets: [
    "University admissions",
    "Student visa support",
    "Scholarships · planning",
  ],
  paragraphs: [
    "As an ICEF-accredited international education agency and study abroad consultancy in Dubai, we combine ethical counselling with structured pathways across 30+ countries — supporting university admissions, student visas and scholarships for international students with transparent, personalised advice.",
  ],
} as const;

export const missionVisionSeoCopy = {
  mission:
    "To simplify study abroad for students in the UAE and beyond — with clear guidance across university admissions, student visas, scholarships, and career-aligned outcomes.",
  vision:
    "To be among the most trusted study abroad consultancies in Dubai — recognised for ethical recruitment, strong placements, and international student success.",
} as const;

export const partnershipsSeoCopy = {
  lead:
    "Partner with a trusted international education agency in Dubai. AGES Global collaborates with universities and education partners to expand global study opportunities.",
  careersLead:
    "Join a leading study abroad consultancy in Dubai — opportunities across counselling, student recruitment, marketing, and university relations.",
} as const;

export const termsConditions = {
  subtitle:
    "Please review the following service terms before engaging with AGES Global Dubai.",
  items: [
    "AGES Global Dubai provides professional consultancy services. We do not guarantee university admission or visa issuance, as final decisions rest with the respective institutions and government authorities.",
    "All documents submitted as part of an application must be authentic, accurate, and translated into the required language where applicable.",
    "Application and service fees are non-refundable unless explicitly stated otherwise in a separate written agreement.",
    "Students are responsible for complying with the academic regulations, visa requirements, and institutional policies of their chosen universities and study destinations.",
  ],
  notice:
    "By engaging our services, students confirm that they have read, understood, and agreed to these terms. For any clarifications, please contact us directly.",
} as const;
