/** Gulf Standard Time — office slots for online consultations */
export const BOOKING_TIMEZONE_LABEL = "Gulf Standard Time (GST, Dubai)";

export function dubaiTodayYmd(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dubai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function dubaiYmdParts(isoYmd: string): { y: number; m: number; d: number } | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoYmd);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
  return { y, m: mo, d };
}

export function compareYmd(a: string, b: string): number {
  return a.localeCompare(b);
}

/** Half-hour slots 09:00–17:30 GST */
export const HALF_HOUR_SLOTS: string[] = (() => {
  const out: string[] = [];
  const pad = (n: number) => String(n).padStart(2, "0");
  for (let h = 9; h <= 16; h++) {
    out.push(`${pad(h)}:00`, `${pad(h)}:30`);
  }
  out.push("17:00", "17:30");
  return out;
})();

export function formatYmdLong(isoYmd: string): string {
  const parts = dubaiYmdParts(isoYmd);
  if (!parts) return isoYmd;
  const { y, m, d } = parts;
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export type CalendarCell = { day: number; iso: string; disabled: boolean } | { day: null; iso: null; disabled: true };

export function buildMonthGrid(year: number, month1: number, minYmd: string): CalendarCell[] {
  const dim = new Date(year, month1, 0).getDate();
  const firstDow = new Date(year, month1 - 1, 1).getDay();
  const cells: CalendarCell[] = [];
  for (let i = 0; i < firstDow; i++) {
    cells.push({ day: null, iso: null, disabled: true });
  }
  for (let day = 1; day <= dim; day++) {
    const iso = `${year}-${String(month1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    cells.push({ day, iso, disabled: compareYmd(iso, minYmd) < 0 });
  }
  return cells;
}

export function parseYmdToMonthCursor(isoYmd: string): { year: number; month1: number } | null {
  const p = dubaiYmdParts(isoYmd);
  if (!p) return null;
  return { year: p.y, month1: p.m };
}
