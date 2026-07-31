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

export interface ProcessStep {
  title: string;
  detail: string;
  /** Where the step lands in the 14-day launch, e.g. "Days 2–3". */
  day?: string;
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
