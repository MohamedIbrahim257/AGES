/** Site-wide contact — keep aligned with live business details */
export const SITE = {
  name: "AGES Global Dubai",
  legalName: "AGES Global",
  logoSrc: "/images/ages-logooo.png",
  url: "https://www.agesglobaldubai.com",
  calendlyUrl: "https://calendly.com/dubaiages/30-minute-meeting",
  email: "ages.dubai@agesglobal.ae",
  phoneDisplay: "+971 527 713 606",
  phoneTel: "+971527713606",
  /** WhatsApp number digits only, no + */
  whatsappDigits: "971586130484",
  whatsappDisplay: "+971 586 130 484",
  addressLine: "Dubai",
  city: "Dubai",
  country: "United Arab Emirates",
  partnershipsEmail: "international@agesglobal.ae",
  hrEmail: "hr@agesglobal.ae",
  /** Add full profile URLs when available; links hidden when href is empty */
  social: [
    { label: "Facebook", href: "https://www.facebook.com/share/1H4CJqA39K/" },
    { label: "Instagram", href: "https://www.instagram.com/ageseducation?igsh=MWkwa3BlbHprdHRncg==" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/alphatechedu/" },
  ] as const,
  icef: {
    profileUrl: "https://www.icef.com/agency/0010J00001vXDGeQAO",
    badgeSrc: "https://icef-api-production.s3.eu-central-1.amazonaws.com/ias_material/0010J00001vXDGeQAO_badge.png",
    badgeAlt: "ICEF Agency Status — verify AGES Global accreditation",
  },
} as const;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${SITE.whatsappDigits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
