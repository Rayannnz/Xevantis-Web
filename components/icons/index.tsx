import type { SVGProps } from "react";

/**
 * The original artwork, preserved path-for-path.
 *
 * These are hand-drawn to the brand's 2px-outline sticker family and do not
 * map cleanly onto Lucide's geometry, so swapping them for a library set would
 * change the design. Centralizing them here removes the duplication instead —
 * the arrow alone appeared six times in the source markup.
 *
 * Sizing is deliberately left to the caller: buttons size their icon in `em`,
 * cards in px.
 */
type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.2} aria-hidden {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.2} aria-hidden {...props}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.2} aria-hidden {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <path d="M2.5 4.5 6 8l3.5-3.5" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.4} aria-hidden {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="m12 2 3 6.6 7 .8-5.2 4.7 1.5 7L12 17.6 5.7 21l1.5-7L2 9.4l7-.8Z" />
    </svg>
  );
}

/* ---------- Mega-menu column headings ---------- */

export function ListLines(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden {...props}>
      <path d="M4 7h16M4 12h10M4 17h13" />
    </svg>
  );
}

export function LifeRing(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden {...props}>
      <path d="M21 12a9 9 0 1 1-3.2-6.9" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}

export function Person(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" aria-hidden {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5S20 17 20 21" />
    </svg>
  );
}

export function Squares(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </svg>
  );
}

/* ---------- Service cards ---------- */

export function Headset(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <path d="M4 18v-6a8 8 0 0 1 16 0v6" />
      <path d="M4 15h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm16 0h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Z" />
    </svg>
  );
}

export function Ledger(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18M8 14h5" />
    </svg>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <path d="M12 3 4 7v6c0 4.5 3.4 7.6 8 8.6 4.6-1 8-4.1 8-8.6V7l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Brackets(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <path d="m9 8-5 4 5 4M15 8l5 4-5 4" />
    </svg>
  );
}

/** SurgeShield lockup — a shield with a Sun-filled bolt knocked into it. */
export function ShieldBolt(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-ink-900)"
      strokeWidth={1.6}
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M12 3 4 7v6c0 4.5 3.4 7.6 8 8.6 4.6-1 8-4.1 8-8.6V7l-8-4Z" />
      <path d="m13 8-4 5h3l-1 4 4-5h-3l1-4Z" fill="var(--color-sun-400)" stroke="none" />
    </svg>
  );
}

/* ---------- Client logo marks ---------- */

export function MarkCircle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

export function MarkSquare(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
    </svg>
  );
}

export function MarkTriangle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2 22 20H2Z" />
    </svg>
  );
}

export function MarkSparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2 15 9l7 3-7 3-3 7-3-7-7-3 7-3Z" />
    </svg>
  );
}

export function MarkEye(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0Zm4 0a4 4 0 0 0 8 0Z" />
    </svg>
  );
}

export function MarkZigzag(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M3 18 9 6l6 12 6-12" />
    </svg>
  );
}

export function MarkDuo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <circle cx="8" cy="12" r="5" />
      <circle cx="16" cy="12" r="5" />
    </svg>
  );
}

/* ---------- Editorial artwork ---------- */

export function BarChart(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-900)" strokeWidth={1.2} aria-hidden {...props}>
      <path d="M3 20h18M6 20V10M11 20V5M16 20v-8M21 20v-4" />
    </svg>
  );
}

export function PersonOutline(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-900)" strokeWidth={1.2} aria-hidden {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5S20 17 20 21" />
    </svg>
  );
}

export function LedgerOutline(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-900)" strokeWidth={1.2} aria-hidden {...props}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18M8 14h6" />
    </svg>
  );
}

/* ---------- Service pages: process phases ---------- */

export function Compass(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5Z" />
    </svg>
  );
}

export function Route(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H14a3.5 3.5 0 0 1 0 7h-4a3.5 3.5 0 0 0 0 7h5.5" />
    </svg>
  );
}

export function PenNib(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <path d="M4 20 9 9l6-5 5 5-5 6-11 5Z" />
      <path d="m9 9 6 6" />
      <circle cx="12" cy="12" r="1.6" />
    </svg>
  );
}

export function Beaker(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <path d="M9 3v6L4.5 17A2.5 2.5 0 0 0 6.7 21h10.6a2.5 2.5 0 0 0 2.2-4L15 9V3" />
      <path d="M8 3h8M7.2 14h9.6" />
    </svg>
  );
}

export function Rocket(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <path d="M12 2c3.4 2.3 5 5.8 5 9.4L14.5 15h-5L7 11.4C7 7.8 8.6 4.3 12 2Z" />
      <path d="M9.5 15 8 20l4-2 4 2-1.5-5" />
      <circle cx="12" cy="10" r="1.8" />
    </svg>
  );
}

/* ---------- Service pages: differentiators ---------- */

export function Users(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.7} aria-hidden {...props}>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M3 20c0-3.3 2.7-5.4 6-5.4S15 16.7 15 20" />
      <path d="M16 5.4A3.4 3.4 0 0 1 16 12M17.5 14.9c2.1.7 3.5 2.4 3.5 5.1" />
    </svg>
  );
}

export function Cycle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <path d="M20 12a8 8 0 0 1-13.7 5.6M4 12a8 8 0 0 1 13.7-5.6" />
      <path d="M17 3v4h-4M7 21v-4h4" />
    </svg>
  );
}

export function Chat(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <path d="M20 15a3 3 0 0 1-3 3H9l-5 3V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3Z" />
      <path d="M8.5 9h7M8.5 12.5h4" />
    </svg>
  );
}

export function Lock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <rect x="4" y="10" width="16" height="11" rx="3" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14.5v2.5" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" />
    </svg>
  );
}

export function Layers(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <path d="m12 3 9 4.6-9 4.6-9-4.6Z" />
      <path d="m3.6 12 8.4 4.3 8.4-4.3M3.6 16.5 12 20.8l8.4-4.3" />
    </svg>
  );
}

export function Gauge(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.8} aria-hidden {...props}>
      <path d="M4 18a9 9 0 1 1 16 0" />
      <path d="m12 14 4-4" />
      <circle cx="12" cy="15" r="1.6" />
    </svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.7} aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9.5h17M3.5 14.5h17" />
      <path d="M12 3c-2.4 2.4-3.6 5.4-3.6 9s1.2 6.6 3.6 9c2.4-2.4 3.6-5.4 3.6-9S14.4 5.4 12 3Z" />
    </svg>
  );
}

/** Opening quotation mark, set solid. Decorative only. */
export function QuoteMark(props: IconProps) {
  return (
    <svg viewBox="0 0 32 24" fill="currentColor" aria-hidden {...props}>
      <path d="M0 24V13.4C0 6.4 3.9 1.9 11.4 0l1.5 3.9C8.4 5.4 6 8 5.8 11.6H12V24Zm19 0V13.4C19 6.4 22.9 1.9 30.4 0l1.5 3.9c-4.5 1.5-6.9 4.1-7.1 7.7H31V24Z" />
    </svg>
  );
}

/* ---------- Social ---------- */

export function LinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 21V8.6h3.5V21Zm6.3 0V8.6h3.36v1.7c.55-.97 1.8-1.98 3.7-1.98 2.6 0 4.44 1.7 4.44 5.36V21h-3.5v-5.9c0-1.6-.6-2.7-2-2.7-1.1 0-1.7.74-2 1.45-.1.26-.13.62-.13.98V21Z" />
    </svg>
  );
}

export function X(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L4.7 21H1.5l7.5-8.6L1.2 3h6.6l4.5 5.6Zm-1.1 16h1.8L7.7 4.9H5.8Z" />
    </svg>
  );
}

export function YouTube(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.7 2 12 2 12s0 3.3.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15.3 22 12 22 12s0-3.3-.4-4.8ZM10 15V9l5.2 3Z" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
