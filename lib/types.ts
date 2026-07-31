import type { ReactNode } from "react";

/** The five brand pastels. Pastels carry meaning, so the union is closed. */
export type Accent = "sun" | "mint" | "lilac" | "blush" | "sky";

/** Section washes add ink, paper and the aurora gradient to the pastels. */
export type Tint = Accent | "paper" | "ink" | "aurora";

export interface NavLink {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  heading: string;
  /** Background of the heading's icon tile. */
  accent: Accent;
  icon: ReactNode;
  links: NavLink[];
}

export interface Service {
  title: string;
  body: string;
  accent: Accent;
  icon: ReactNode;
}

export interface LaunchStep {
  title: string;
  detail: string;
  accent: Accent;
}

export interface ProcessStep {
  title: string;
  detail: string;
}

export interface Testimonial {
  title: string;
  quote: string;
  role: string;
  meta: string;
  initials: string;
  /** Card surface tint; the first card keeps the default sky wash. */
  surface: string;
  avatar: string;
}

/** One line on the hero day sheet. */
export interface OpsEvent {
  /** 24-hour clock, as written on the sheet. */
  time: string;
  label: string;
  /** What happened to it: "Booked", "Sent", "Escalated". */
  status: string;
  /** Marks the one item that needed the practice — drawn in the accent. */
  flagged?: boolean;
}

/** One cell of the hero proof rail. Figures are strings, not numbers, because
 *  the rail states facts rather than animating them. */
export interface ProofCell {
  figure: string;
  label: string;
}

/** A span of whole hours on a 24-hour clock. `to` is exclusive. */
export interface HourRange {
  from: number;
  to: number;
}

export interface Coverage {
  /** Rendered next to the band, e.g. "ET". */
  timezone: string;
  /** The hours the band draws, whether covered or not. */
  band: HourRange;
  /** Answered live by the named specialist. */
  live: HourRange;
  /** Covered, but by the shared out-of-hours desk. */
  extended: HourRange;
}

export interface Stat {
  value: number;
  suffix?: string;
  decimals?: number;
  /** Rendered after the animated figure, e.g. the "/5" in "4.8/5". */
  trailing?: string;
  label: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}
