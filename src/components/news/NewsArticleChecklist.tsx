import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BookOpen,
  CalendarClock,
  ClipboardPenLine,
  ClipboardX,
  Clock,
  Copy,
  EyeOff,
  FileWarning,
  GraduationCap,
  HeartPulse,
  Home,
  MessageSquare,
  ShieldCheck,
  Stethoscope,
  Wallet,
} from "lucide-react";
import type { NewsChecklistIcon, NewsChecklistItem } from "@/data/content";

const checklistIconMap: Record<NewsChecklistIcon, LucideIcon> = {
  passport: BookOpen,
  acceptance: GraduationCap,
  finances: Wallet,
  insurance: HeartPulse,
  medical: Stethoscope,
  clearance: ShieldCheck,
  application: ClipboardPenLine,
  interview: MessageSquare,
  "incomplete-docs": FileWarning,
  outdated: CalendarClock,
  inconsistent: AlertTriangle,
  "incorrect-forms": ClipboardX,
  late: Clock,
  "ignoring-guidelines": EyeOff,
  "home-ties": Home,
  "generic-statements": Copy,
};

const accentRing = [
  "bg-[var(--accent-soft)] ring-[rgba(37,99,235,0.2)] text-[var(--accent-mid)]",
  "bg-purple-50 ring-purple-200/60 text-purple-700",
  "bg-sky-50 ring-sky-200/60 text-sky-700",
  "bg-emerald-50 ring-emerald-200/60 text-emerald-700",
  "bg-amber-50 ring-amber-200/60 text-amber-800",
  "bg-rose-50 ring-rose-200/60 text-rose-700",
  "bg-[var(--accent-soft)] ring-[rgba(37,99,235,0.2)] text-[var(--accent-mid)]",
  "bg-purple-50 ring-purple-200/60 text-purple-700",
  "bg-sky-50 ring-sky-200/60 text-sky-700",
  "bg-emerald-50 ring-emerald-200/60 text-emerald-700",
] as const;

type Props = {
  items: NewsChecklistItem[];
  itemLabel?: string;
};

export function NewsArticleChecklist({ items, itemLabel = "Step" }: Props) {
  return (
    <ol className="mt-8 list-none space-y-3">
      {items.map((item, index) => {
        const Icon = checklistIconMap[item.icon];
        const ring = accentRing[index % accentRing.length];

        return (
          <li
            key={item.label}
            className="surface-card-lg flex items-center gap-4 rounded-2xl p-4 ring-1 ring-[rgba(6,21,38,0.06)] sm:p-5"
          >
            <span
              className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${ring}`}
            >
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                {itemLabel} {index + 1}
              </span>
              <p className="mt-0.5 text-base font-semibold leading-snug text-[var(--heading)]">{item.label}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
