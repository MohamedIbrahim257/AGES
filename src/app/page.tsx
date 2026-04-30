import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PageMotion } from "@/components/motion/PageMotion";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MissionVision } from "@/components/sections/MissionVision";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Services } from "@/components/sections/Services";
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
    "Study abroad from Dubai with ICEF-accredited consultants: university admissions, student visa support, scholarships for international students, and global destinations including UK, USA, Canada & Europe.",
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
        "International education agency in Dubai offering study abroad counselling, university admissions, student visa support, and scholarships guidance for UAE students.",
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
        <WhyChooseUs />
        <Services />
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
