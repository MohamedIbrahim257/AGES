/** Pillar landing pages for intent-led SEO — expand over time */
export type StudyAbroadPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  bullets: string[];
  navLabel: string;
};

export const studyAbroadPages: StudyAbroadPage[] = [
  {
    slug: "study-in-uk-from-dubai",
    navLabel: "Study in UK from Dubai",
    title: "Study in UK from Dubai | AGES Global Dubai",
    description:
      "Plan university admissions and student visas for studying in the UK from Dubai. ICEF-accredited international education agency supporting UAE students.",
    h1: "Study in the UK from Dubai",
    intro:
      "UK degrees remain a top choice for UAE students — competitive admissions, strong graduate routes, and globally recognised qualifications. AGES Global Dubai maps your profile to the right institutions and supports university applications, English-test planning, CAS / visa guidance, and pre-departure readiness.",
    bullets: [
      "University admissions and programme shortlisting for UK study abroad goals",
      "Student visa support aligned with UKVI expectations",
      "Scholarships for international students — merit and institution-led options",
    ],
  },
  {
    slug: "study-in-canada-from-uae",
    navLabel: "Study in Canada from UAE",
    title: "Study in Canada from UAE | AGES Global Dubai",
    description:
      "Study abroad in Canada from the UAE with admissions counselling, visa pathways awareness, and documentation support through AGES Global Dubai.",
    h1: "Study in Canada from the UAE",
    intro:
      "Canada combines academic quality with practical post-study pathways many UAE families prioritise. We guide programme selection, application timelines, study permit preparation, and what to expect before you travel.",
    bullets: [
      "Study abroad counselling for colleges and universities across Canada",
      "Student visa support and checklist-driven documentation review",
      "Planning tied to intakes (January, May, September) where relevant",
    ],
  },
  {
    slug: "study-in-germany-international-students",
    navLabel: "Study in Germany",
    title: "Study in Germany for International Students | AGES Global Dubai",
    description:
      "Explore German universities with admissions guidance from Dubai — STEM programmes, English-taught degrees, visa timelines, and study abroad planning.",
    h1: "Study in Germany — international student pathway",
    intro:
      "Germany attracts international students with strong STEM faculties and accessible pathways when eligibility aligns. We help clarify APS / uni-assist touchpoints where relevant, programme fit, and realistic timelines for UAE-based applicants.",
    bullets: [
      "University admissions orientation for German institutions",
      "Student visa support preparation alongside your acceptance roadmap",
      "Budget and scholarships awareness for international students",
    ],
  },
  {
    slug: "scholarships-for-uae-students",
    navLabel: "Scholarships for UAE students",
    title: "Scholarships for UAE Students | Study Abroad Guidance | AGES Global",
    description:
      "Navigate merit scholarships and institutional awards when you study abroad — counselling from Dubai for competitive undergraduate and postgraduate applications.",
    h1: "Scholarships for UAE students studying abroad",
    intro:
      "Scholarships rarely arrive by accident — they reward aligned profiles, early timelines, and strong documents. We help identify realistic scholarship routes tied to your destinations and programmes, alongside admissions strategy.",
    bullets: [
      "Merit and institutional scholarship awareness across destinations",
      "Support packaged with university admissions planning",
      "Transparent expectations — scholarships are competitive and not guaranteed",
    ],
  },
];

export const studyAbroadPageSlugs = studyAbroadPages.map((p) => p.slug);

export function getStudyAbroadPage(slug: string): StudyAbroadPage | undefined {
  return studyAbroadPages.find((p) => p.slug === slug);
}
