import type { Accent } from "@/lib/types";

/** Resource type taxonomy for filters and badges. */
export type ResourceType =
  | "Blog"
  | "Playbook"
  | "Benchmark"
  | "Interview"
  | "White paper";

export type ResourceService =
  | "Customer support"
  | "IT outsourcing"
  | "Finance"
  | "HR"
  | "Sales & marketing";

export type ResourceIndustry =
  | "Consumer goods"
  | "Retail"
  | "SaaS"
  | "Healthcare"
  | "Finance";

/** Icon key resolved to an SVG in `ResourceArtIcon`. */
export type ResourceIcon =
  | "person"
  | "chart"
  | "ledger"
  | "chat"
  | "beaker"
  | "rocket"
  | "layers"
  | "gauge"
  | "globe"
  | "users"
  | "route"
  | "shield";

export interface Resource {
  slug: string;
  title: string;
  /** One-sentence dek. Without it a card is a headline floating on a gradient. */
  excerpt: string;
  /** ISO date. Formatted for display by `formatDate` so `<time>` stays valid. */
  date: string;
  /** Minutes, rendered as "8 min read". */
  readTime: number;
  type: ResourceType;
  service: ResourceService;
  industry: ResourceIndustry;
  /** Gradient utility class for the art panel. */
  art: string;
  /**
   * UI colour, paired with `art` by hand rather than derived from it. The
   * gradient is artwork and can mix two ramps; the accent drives chrome that
   * has to stay legible on paper (badges, hover glow), so it names one ramp.
   */
  accent: Accent;
  /** Chooses the illustrated scene painted over `art`. */
  icon: ResourceIcon;
  /**
   * Optional photograph, which replaces the illustrated scene wherever the
   * panel is large. Drop a file in `public/resources/` and point `src` at it
   * (`/resources/<slug>.jpg`); nothing else needs to change, and any resource
   * left without one keeps its scene. Local paths only — a remote host would
   * need `images.remotePatterns` in `next.config.ts`.
   */
  image?: { src: string; alt: string };
  /** Featured band: `"primary"` is the large tile, `"secondary"` stacks beside it. */
  featured?: "primary" | "secondary";
}

export interface Author {
  name: string;
  role: string;
  /** Monogram for the byline chip. */
  initials: string;
  accent: Accent;
}

/**
 * Article bodies as data, for the same reason `ServiceContent` is: no
 * `ReactNode` anywhere, so the whole detail page stays a server component and
 * the same object feeds `generateMetadata` and the JSON-LD.
 */
export type ArticleBlock =
  | { kind: "para"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "list"; ordered?: boolean; items: string[] }
  | { kind: "quote"; text: string; attribution: string }
  | { kind: "figures"; items: { value: string; label: string }[] }
  | { kind: "callout"; title: string; text: string };

export interface Article {
  /** Opening paragraph, set larger than the body. */
  standfirst: string;
  author: Author;
  body: ArticleBlock[];
  /** Closing summary. Rendered as a bordered list under the body. */
  takeaways: string[];
}

export interface ResourceFilters {
  type: ResourceType | "";
  service: ResourceService | "";
  industry: ResourceIndustry | "";
  query: string;
}
