import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageMotion } from "@/components/motion/PageMotion";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MissionVision } from "@/components/sections/MissionVision";
import { StudentJourney } from "@/components/sections/StudentJourney";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Destinations } from "@/components/sections/Destinations";
import { EventsNews } from "@/components/sections/EventsNews";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PartnershipsCareers } from "@/components/sections/PartnershipsCareers";
import { Faq } from "@/components/sections/Faq";
import { TermsConditions } from "@/components/sections/TermsConditions";
import { ContactSection } from "@/components/sections/ContactSection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `Study Abroad Dubai & UAE | ${SITE.name} — International Education Agency`,
  },
  description:
    "AGES Global Dubai — your trusted agency for international study. University admissions, student visas, and scholarships across the UK, USA, Canada, Germany, and Europe.",
  alternates: {
    canonical: SITE.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      description:
        "AGES Global Dubai — international education agency offering study abroad counselling, university admissions, student visa support, and scholarships guidance.",
      url: SITE.url,
      telephone: SITE.phoneTel,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        addressCountry: SITE.country,
      },
      areaServed: ["AE", "Dubai", "UAE", "Middle East"],
      knowsAbout: [
        "study abroad",
        "university admissions",
        "student visa support",
        "scholarships for international students",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en-AE",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <Hero />
      <PageMotion>
        {/* Sections alternate: white → band after Hero — keep order in sync */}
        <About />
        <MissionVision />
        <StudentJourney />
        <Services />
        <WhyChooseUs />
        <Destinations />
        <EventsNews />
        <CtaBanner />
        <PartnershipsCareers />
        <Faq />
        <TermsConditions />
        <ContactSection />
      </PageMotion>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
