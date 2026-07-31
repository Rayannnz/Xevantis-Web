import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Accent, Tint } from "@/lib/types";
import { Reveal } from "@/components/motion/Reveal";

/* ==========================================================================
   LAYOUT
   ========================================================================== */

type ContainerWidth = "narrow" | "page" | "wide";

const WIDTHS: Record<ContainerWidth, string> = {
  narrow: "max-w-narrow",
  page: "max-w-page",
  wide: "max-w-wide",
};

export function Container({
  width = "page",
  className,
  children,
}: {
  width?: ContainerWidth;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full px-[var(--gutter)]", WIDTHS[width], className)}>
      {children}
    </div>
  );
}

/**
 * Section washes.
 *
 * The five accent tints collapse to one quiet field. Alternating five pastel
 * bands down a page turns section order into a color sequence the reader has
 * to decode; the rhythm is now paper → field → ink, and emphasis is spent on
 * the ink band rather than spread across every section.
 */
const TINTS: Record<Tint, string> = {
  sun: "bg-paper-100",
  mint: "bg-paper-100",
  lilac: "bg-paper-100",
  blush: "bg-paper-100",
  sky: "bg-paper-100",
  paper: "bg-paper-050",
  ink: "bg-ink-900",
  aurora: "bg-aurora",
};

export function Section({
  id,
  tint,
  tight = false,
  flushTop = false,
  className,
  children,
}: {
  id?: string;
  tint?: Tint;
  tight?: boolean;
  flushTop?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        tight ? "py-[var(--section-y-tight)]" : "py-[var(--section-y)]",
        flushTop && "pt-0",
        tint && TINTS[tint],
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHead({
  align = "start",
  className,
  children,
}: {
  align?: "start" | "center" | "split";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mb-[clamp(2.5rem,2rem+2vw,4rem)] grid gap-4",
        align === "center" && "mx-auto max-w-[720px] justify-items-center text-center",
        align === "start" && "max-w-[720px]",
        align === "split" &&
          "gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ==========================================================================
   TYPOGRAPHY
   ========================================================================== */

/** Section heading ramp — h2 defaults from the original base stylesheet. */
export const headingClass =
  "font-display text-4xl font-bold leading-snug tracking-tighter";

/** Standfirst under a heading. Exported as a string too, so a `Reveal` can
 *  render the paragraph itself without nesting one <p> inside another. */
export const leadClass = "text-lg text-ink-500";

export function Lead({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <p className={cn(leadClass, className)}>{children}</p>;
}

/** The small tracked label above a section heading. */
export function Eyebrow({
  centered = false,
  className,
  children,
}: {
  centered?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-ink-500",
        !centered &&
          "before:h-[2px] before:w-[22px] before:rounded-pill before:bg-current before:opacity-45 before:content-['']",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Handwritten accent — used sparingly, at most once per section. */
export function Hand({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span className={cn("font-hand text-[1.35em] font-bold leading-[0.9] tracking-[0]", className)}>
      {children}
    </span>
  );
}

/* ==========================================================================
   BADGE
   ========================================================================== */

type BadgeTone = Accent | "ink" | "outline" | "default";

const BADGE_TONES: Record<BadgeTone, string> = {
  default: "bg-ink-050",
  sun: "bg-ink-100",
  mint: "bg-ink-100",
  lilac: "bg-ink-100",
  blush: "bg-ink-100",
  sky: "bg-ink-100",
  ink: "bg-ink-900 text-paper-050",
  outline: "border border-ink-900 bg-transparent",
};

export function Badge({
  tone = "default",
  className,
  children,
}: {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-[30px] items-center gap-[0.45rem] rounded-pill px-3",
        "font-display text-xs font-semibold tracking-wide whitespace-nowrap text-ink-900",
        BADGE_TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Glass pill — only ever placed over a gradient or imagery. */
export function PillGlass({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-[38px] items-center gap-[0.55rem] rounded-pill pl-[0.9rem] pr-[1.1rem]",
        "border border-white/90 bg-white/70 shadow-sm backdrop-blur-[14px] backdrop-saturate-[140%]",
        "text-sm font-medium",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Availability dot with an expanding ring. */
export function PulseDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative size-[9px] shrink-0 rounded-full bg-signal-success",
        "after:absolute after:inset-0 after:rounded-full after:bg-inherit after:content-['']",
        "after:animate-pulse-ring",
        className,
      )}
    />
  );
}

/* ==========================================================================
   TEXT LINK
   ========================================================================== */

export function TextLink({
  href,
  className,
  children,
  ...rest
}: { href: string; className?: string; children: ReactNode } & Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "className" | "children"
>) {
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex items-center gap-[0.4rem] font-semibold text-ink-900",
        // Underline wipes in from the left and out to the right.
        "after:absolute after:-bottom-[3px] after:left-0 after:h-[2px] after:w-full after:rounded-[2px]",
        "after:origin-[100%_50%] after:scale-x-0 after:bg-current after:content-['']",
        "after:transition-transform after:duration-[280ms] after:ease-out-expo",
        "hover:after:origin-[0_50%] hover:after:scale-x-100",
        "[&>svg]:size-[1em] [&>svg]:transition-transform [&>svg]:duration-[280ms] [&>svg]:ease-out-expo",
        "hover:[&>svg]:translate-x-[2px] hover:[&>svg]:-translate-y-[2px]",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

/* ==========================================================================
   INDEX RAIL
   ========================================================================== */

/**
 * Hairline divider that draws itself in from the left as it enters view.
 *
 * The one piece of signature motion in the system. It is a `scaleX` on a 1px
 * element, so it composites on its own layer and costs nothing to animate —
 * and because the hidden state is `scaleX(0)` rather than `opacity: 0`, a rule
 * that never animates is invisible rather than a stranded blank strip.
 */
export function HairRule({
  delay = 0,
  className,
}: {
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal
      variant="rule"
      delay={delay}
      aria-hidden
      className={cn("h-px w-full origin-left bg-ink-900/12", className)}
    />
  );
}

/**
 * The section marker: position in the page, then what the section is.
 *
 * Numbering is only honest because the homepage is a sequence a visitor walks
 * in order — it is not applied to grids or card sets, where the order carries
 * nothing. Stacks beside the content on desktop, runs inline above it on
 * narrow screens where a side rail would eat the text column.
 */
export function IndexRail({
  index,
  label,
  className,
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        "min-[821px]:grid min-[821px]:content-start min-[821px]:gap-[0.7rem] min-[821px]:pt-[0.6rem]",
        className,
      )}
    >
      <span className="font-mono text-xs font-medium tabular-nums tracking-widest text-lilac-500">
        {index}
      </span>
      <HairRule delay={120} className="w-9 shrink-0 min-[821px]:w-full" />
      <span className="font-mono text-2xs uppercase tracking-widest text-ink-400">
        {label}
      </span>
    </div>
  );
}

/* ==========================================================================
   DIVIDERS
   ========================================================================== */

export function Wave({ fill = "var(--color-sun-100)" }: { fill?: string }) {
  return (
    <div aria-hidden className="relative block h-[clamp(48px,6vw,96px)] w-full leading-[0]">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="size-full">
        <path d="M0 40c180 46 340 46 540 12s420-54 640-12 260 40 260 40V0H0Z" fill={fill} />
      </svg>
    </div>
  );
}

/** The signature multicolor band, drifting on a 22s loop. */
export function Ribbon() {
  return (
    <div
      aria-hidden
      className={cn(
        "noise relative h-[clamp(90px,12vw,150px)] bg-aurora animate-ribbon",
        "rounded-[0_0_50%_50%/0_0_100%_100%]",
      )}
    />
  );
}
