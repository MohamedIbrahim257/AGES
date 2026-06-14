import { Mail } from "lucide-react";
import { ChatAssistantPanel } from "@/components/ChatAssistantPanel";
import { contactSectionCopy } from "@/data/content";
import { SITE, whatsappHref } from "@/lib/site";

export function ContactSection() {
  const whatsappPlain = whatsappHref(
    `Hello ${SITE.name}, I'd like to speak with an advisor about studying abroad.`,
  );

  const socialWithLinks = SITE.social.filter((s) => s.href.trim().length > 0);

  return (
    <section id="contact" data-animate="section" className="section-shell-white">
      <div className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--heading)] md:text-4xl">
              {contactSectionCopy.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--body-muted)]">{contactSectionCopy.lead}</p>

            <a
              href={whatsappPlain}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#20bd5a] md:w-fit"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>

            <div className="surface-card-lg mt-10 rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-mid)]">Address</p>
              <p className="mt-2 text-sm text-[var(--body-muted)]">
                {SITE.city}, {SITE.country}
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--heading)]">
                <a
                  href={whatsappPlain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 hover:text-[var(--accent-mid)]"
                >
                  WhatsApp: {SITE.whatsappDisplay}
                </a>
                <a href={`mailto:${SITE.email}`} className="focus-ring inline-flex items-center gap-2 hover:text-[var(--accent-mid)]">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  Email: {SITE.email}
                </a>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-[var(--heading)]">{contactSectionCopy.socialLead}</p>
              {socialWithLinks.length > 0 ? (
                <ul className="mt-3 flex flex-wrap gap-4 text-sm font-medium text-[var(--accent-mid)]">
                  {socialWithLinks.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} className="focus-ring hover:text-[var(--heading)]" target="_blank" rel="noopener noreferrer">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-[var(--body-muted)]">
                  {SITE.social.map((s) => s.label).join(" · ")}
                </p>
              )}
            </div>
          </div>

          <ChatAssistantPanel />
        </div>
      </div>
    </section>
  );
}
