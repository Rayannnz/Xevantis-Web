import type { Accent } from "@/lib/types";

/**
 * Service page content is plain data — no ReactNode anywhere.
 *
 * That is what lets every section render as a server component: the data files
 * are importable from `page.tsx` without pulling React into the module graph,
 * and the same objects feed `generateMetadata` and the JSON-LD block.
 */

/** Which generated artwork a section renders. See `ServiceFigure`. */
export type FigureVariant =
  | "dashboard"
  | "network"
  | "layers"
  | "pipeline"
  | "pulse";

export interface CtaLink {
  label: string;
  href: string;
}

/** Heading pair for a list-driven section. */
export interface SectionCopy {
  title: string;
  body: string;
}

export interface Metric {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

/** A floating card pinned to the hero artwork. */
export interface HeroChip {
  label: string;
  value: string;
}

export interface ServiceHeroContent {
  /** Rendered word-by-word, so keep it to a single sentence. */
  title: string;
  /** Substring of `body` to underline. Must appear verbatim, or it is ignored. */
  highlight?: string;
  body: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  /** The trust line under the buttons. */
  trust: string;
  chips: [HeroChip, HeroChip, HeroChip];
  figure: FigureVariant;
}

/** One of the four "what / who / why" panels in the overview. */
export interface OverviewPanel {
  heading: string;
  body: string;
}

export interface ServiceOverviewContent {
  eyebrow: string;
  title: string;
  body: string;
  panels: [OverviewPanel, OverviewPanel, OverviewPanel, OverviewPanel];
  figure: FigureVariant;
}

export interface IncludedContent {
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
  /** Small reassurance under the checklist. */
  note: string;
  figure: FigureVariant;
}

export interface Benefit {
  title: string;
  body: string;
  metric: Metric;
  link: CtaLink;
  figure: FigureVariant;
}

export interface ProcessPhase {
  title: string;
  body: string;
  /** Rough duration, shown as a chip on the step card. */
  duration: string;
}

export interface TechItem {
  name: string;
  category: string;
}

export interface Differentiator {
  title: string;
  body: string;
}

export interface CaseStudy {
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: [Metric, Metric, Metric];
  accent: Accent;
  figure: FigureVariant;
}

export interface ServiceQuote {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
}

export interface Faq {
  question: string;
  answer: string;
}

/** The subset a card needs — related-services grids and the services index. */
export interface ServiceSummary {
  slug: string;
  name: string;
  summary: string;
  eyebrow: string;
  accent: Accent;
}

export interface ServiceContent {
  /** URL segment. Must match the folder under `app/services/`. */
  slug: string;
  /** Display name, e.g. "Web Development". */
  name: string;
  /** Ramp step used for tiles, washes and glows across the page. */
  accent: Accent;
  /** Small tracked label above the hero heading. */
  eyebrow: string;
  /** One-line summary — powers the related-services cards and the index grid. */
  summary: string;

  /** Line above the client logo strip. */
  trustLabel: string;

  /**
   * Headings for the sections that are otherwise driven by lists.
   *
   * The eyebrows are shared across every service (see `SECTION_EYEBROWS`) so
   * the design language holds, while the heading and standfirst are written
   * per service so no two pages read the same.
   */
  sections: {
    benefits: SectionCopy;
    process: SectionCopy;
    tech: SectionCopy;
    why: SectionCopy;
    cases: SectionCopy;
    faq: SectionCopy;
  };

  hero: ServiceHeroContent;
  overview: ServiceOverviewContent;
  included: IncludedContent;
  benefits: [Benefit, Benefit, Benefit, Benefit];
  process: ProcessPhase[];
  tech: TechItem[];
  differentiators: Differentiator[];
  cases: CaseStudy[];
  quotes: ServiceQuote[];
  faqs: Faq[];
  /** Slugs of the services shown at the foot of the page. */
  related: string[];
  cta: { title: string; body: string };

  seo: {
    title: string;
    description: string;
  };
}
