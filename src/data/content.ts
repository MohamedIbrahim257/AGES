/** Shared UI tokens — align with reference designs */
export const ACCENT = "#2563eb";
export const NAVY_DEEP = "#1a2b4b";

export type RegionFilter = "all" | "Americas" | "Europe" | "Asia" | "Middle East";

export const whyCards = [
  {
    key: "excellence",
    title: "Academic Excellence",
    description:
      "We partner with over 150 accredited universities, offering students a wide range of high-quality study options.",
    accent: "blue" as const,
  },
  {
    key: "engagement",
    title: "Global Engagement",
    description:
      "We stay connected with international institutions through regular events and ongoing collaboration.",
    accent: "purple" as const,
  },
  {
    key: "expertise",
    title: "Proven Expertise",
    description:
      "Our experienced team guides students toward the right academic choices and successful placements.",
    accent: "sky" as const,
  },
  {
    key: "trust",
    title: "Trusted & Accredited",
    description:
      "We are accredited by ICEF and recognized by leading international organizations, ensuring a reliable, transparent, and high-quality service for our students.",
    accent: "green" as const,
  },
];

export const services = [
  {
    title: "Study Abroad Counselling",
    description:
      "Profile evaluation, university selection, and destination advice aligned with your goals.",
    accent: "blue" as const,
  },
  {
    title: "University Application Support",
    description:
      "End-to-end support with applications, documentation, and interview preparation.",
    accent: "purple" as const,
  },
  {
    title: "Student Visa Assistance",
    description: "Step-by-step guidance for successful student visa applications.",
    accent: "sky" as const,
  },
  {
    title: "Scholarships & Financial Advice",
    description: "Guidance on scholarships, funding options, and financial planning.",
    accent: "amber" as const,
  },
  {
    title: "Pre-Departure Support",
    description: "Travel, accommodation, and readiness guidance before departure.",
    accent: "green" as const,
  },
  {
    title: "Post-Arrival Support",
    description: "Ongoing assistance to help you settle into your new country and university.",
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
  { country: "Cyprus", benefit: "Study in Cyprus · EU pathways & Mediterranean lifestyle", region: "Europe", flag: "🇨🇾" },
  { country: "Hungary", benefit: "Study in Hungary · Accessible EU education", region: "Europe", flag: "🇭🇺" },
  { country: "Poland", benefit: "Study in Poland · Central European hubs", region: "Europe", flag: "🇵🇱" },
  { country: "Romania", benefit: "Study in Romania · Growing English programmes", region: "Europe", flag: "🇷🇴" },
  { country: "South Korea", benefit: "Study in South Korea · Innovation-led campuses", region: "Asia", flag: "🇰🇷" },
  { country: "Turkey", benefit: "Study in Turkey · Bridge between continents", region: "Middle East", flag: "🇹🇷" },
  { country: "United Arab Emirates", benefit: "Study in UAE · Regional excellence hubs", region: "Middle East", flag: "🇦🇪" },
  { country: "Lithuania", benefit: "Study in Lithuania · Affordable EU degrees", region: "Europe", flag: "🇱🇹" },
];

export const destinationsSectionCopy = {
  eyebrow: "Global destinations",
  title: "Global Destinations",
  lead:
    "We offer opportunities in top destinations and universities across the world. Our guidance is tailored to each country's admissions process and visa requirements.",
  bannerEyebrow: "Find your perfect academic path",
  bannerTitle: "Explore universities and programs across our global network",
  bannerBody: "30+ countries — counselling aligned to local admissions and visa norms.",
} as const;

export type NewsItem = {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
};

export const eventsNewsCopy = {
  eyebrow: "Events & news",
  title: "Events & News",
  lead: "Scholarship alerts, education fairs, and study destination insights.",
} as const;

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
    category: "Study Destination Insights",
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

export const studentJourneySteps = [
  { key: "apply", label: "Apply", accent: "blue" as const },
  { key: "prepare", label: "Prepare", accent: "purple" as const },
  { key: "submit", label: "Submit", accent: "sky" as const },
  { key: "offer", label: "Get offer", accent: "amber" as const },
  { key: "visa", label: "Visa", accent: "green" as const },
  { key: "fly", label: "Fly", accent: "rose" as const },
  { key: "arrive", label: "Arrive", accent: "pink" as const },
] as const;

export const studentJourneyCopy = {
  eyebrow: "Your journey",
  title: "Student Journey Timeline",
  lead: "From first application to arrival overseas — structured support at every stage.",
  videoTitle: "Study abroad journey overview",
} as const;

/** Google Drive file — share: https://drive.google.com/file/d/10_ElIn3SFD1AcxVLL3Kbpbnkno0CPvNS/view */
export const studentJourneyVideo = {
  driveFileId: "10_ElIn3SFD1AcxVLL3Kbpbnkno0CPvNS",
  embedUrl: "https://drive.google.com/file/d/10_ElIn3SFD1AcxVLL3Kbpbnkno0CPvNS/preview",
  posterSrc: "/images/student-journey-planning-cover.png",
  posterAlt: "Diverse students planning study abroad destinations together on a world map",
} as const;

export type FaqItem = {
  question: string;
  answer?: string;
  listItems?: string[];
  answerSuffix?: string;
};

export const faqSectionCopy = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
  lead: "Clear answers about destinations, applications, visas, scholarships, and how to get started with AGES.",
} as const;

export const faqItems: FaqItem[] = [
  {
    question: "Which countries can I study in through AGES?",
    answer:
      "AGES partners with leading universities across 30+ global destinations, offering study opportunities tailored to different academic goals and career paths.",
  },
  {
    question: "How does AGES support students?",
    answer:
      "We provide end-to-end guidance, including university selection, application processing, visa assistance, pre-departure preparation, and post-arrival support.",
  },
  {
    question: "Do you charge for your services?",
    answer:
      "Yes. We offer flexible service packages — Basic, Standard, and Premium — allowing students to choose the level of support that suits their needs.",
  },
  {
    question: "How do you help me choose the right university?",
    answer:
      "Our expert advisors evaluate your academic profile, career objectives, and personal preferences to recommend the most suitable universities and programs.",
  },
  {
    question: "What are the basic requirements to study abroad?",
    answer: "Although requirements vary by country, most applications require:",
    listItems: [
      "Academic Certificates & Transcripts",
      "English Language Proficiency",
      "Valid Passport",
    ],
    answerSuffix: "Our team guides you through every step.",
  },
  {
    question: "Do you assist with visa applications?",
    answer:
      "Yes. We provide full visa support, including documentation review, application preparation, and compliance guidance to maximize approval success.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The process typically takes a few weeks to several months, depending on the destination and intake period. Early preparation is highly recommended.",
  },
  {
    question: "Can AGES help with scholarships?",
    answer:
      "Yes. We identify available scholarship opportunities and assist eligible students throughout the application process.",
  },
  {
    question: "When should I start applying?",
    answer:
      "We recommend starting your application 6–12 months before your intended intake to ensure sufficient preparation and processing time.",
  },
  {
    question: "How can I get started with AGES?",
    answer:
      "Simply book a consultation session through our website to speak with one of our advisors and begin your international education journey.",
  },
];

/** Hero background — campus students (Mixkit, free for commercial use) */
export const heroVideo = {
  src: "https://assets.mixkit.co/videos/preview/mixkit-group-of-students-walking-through-a-university-campus-1570-large.mp4",
  posterSrc: "/images/journey-video-poster.jpg",
  posterAlt: "Students on a university campus planning their study abroad journey",
} as const;

export const heroSeoCopy = {
  badgeLabel: "ICEF Accredited · International Education Agency",
  titlePrimary: "Welcome to AGES Global",
  subtitleBold: "Your trusted agency for international study opportunities",
  body:
    "AGES Global helps students secure university admissions, student visas, and scholarships across the UK, USA, Canada, Germany, and Europe — with expert, ethical guidance at every step.",
  bodySecondary:
    "From university shortlisting to arrival overseas, we manage your full study abroad journey.",
} as const;

export const aboutSeoCopy = {
  eyebrow: "About us",
  title: "About Us",
  /** Unsplash — https://unsplash.com/photos/four-people-watching-on-white-macbook-on-top-of-glass-top-table-vdXMSiX-n6M */
  imageSrc: "/images/about-study-abroad.jpg",
  imageAlt: "Diverse international students collaborating on university planning with AGES Global Dubai",
  paragraphs: [
    "We are a leading international education agency committed to guiding students toward exceptional global academic opportunities. With extensive experience in international admissions and student support, we ensure a smooth, transparent process from consultation through university placement.",
    "As an ICEF-accredited education agency in Dubai, AGES Global provides structured and transparent guidance for students applying to universities across 30+ countries. Our approach is personalized, ethical, and focused on long-term academic and career success.",
  ],
} as const;

export const missionVisionSeoCopy = {
  mission:
    "To make study abroad simple, transparent, and achievable through expert guidance, structured planning, and honest advice.",
  vision:
    "To become a globally recognized education consultancy known for integrity, strong student outcomes, and lasting impact.",
} as const;

export const servicesSectionCopy = {
  eyebrow: "Our services",
  title: "Our Services",
  lead: "Comprehensive support from counselling and applications through visas, funding, and life abroad.",
} as const;

export const whyChooseSectionCopy = {
  eyebrow: "Why choose us",
  title: "Why Choose AGES",
  lead: "Trusted guidance, global partnerships, and outcomes-focused support for your study abroad journey.",
} as const;

export const partnershipsSeoCopy = {
  /** Unsplash — https://unsplash.com/photos/two-person-handshake-photography-5QgIuuBxKwM */
  backgroundSrc: "/images/partnerships-careers-bg.jpg",
  sectionTitle: "Partnerships & Careers",
  partnershipsLead:
    "Are you a university representative, educational partner, or certified counselor interested in collaboration?",
  partnershipsBody:
    "At AGES Dubai, we welcome partnerships that expand international opportunities for students and strengthen global academic connections. Kindly send your proposal to international@agesglobal.ae and our team will get in touch with you.",
  careersLead:
    "We're also always looking for qualified, motivated professionals to join our growing international education team.",
  careersBody:
    "If you have experience in student recruitment, academic advising, marketing, or university relations, please send your CV to hr@agesglobal.ae. Our HR department will carefully review your application and contact shortlisted candidates for interviews.",
} as const;

export const ctaBannerCopy = {
  eyebrow: "Explore more",
  title: "Take the First Step",
  presentationTitle: "View Presentation",
  presentationBody:
    "Discover our full range of services, partner universities, and global destinations through our detailed agency presentation.",
  presentationCta: "Request Presentation",
  formTitle: "Request Information",
  formBody:
    "Fill in your personal details and study goals, and our team will contact you shortly.",
  formCta: "Request Information Form",
} as const;

export const contactSectionCopy = {
  eyebrow: "Contact us",
  title: "Contact Us",
  lead: "Reach our Dubai team by phone, WhatsApp, or email — or use the form to share your profile and study goals.",
  socialLead: "Follow us for updates and events:",
} as const;

export const termsConditions = {
  /** Unsplash — https://unsplash.com/photos/person-signing-document-5QgIuuBxKwM */
  backgroundSrc: "/images/terms-conditions-bg.jpg",
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
