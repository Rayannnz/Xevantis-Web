import type {
  Resource,
  ResourceFilters,
  ResourceIndustry,
  ResourceService,
  ResourceType,
} from "./types";

export type {
  Article,
  ArticleBlock,
  Author,
  Resource,
  ResourceFilters,
  ResourceIcon,
  ResourceIndustry,
  ResourceService,
  ResourceType,
} from "./types";

export const RESOURCE_TYPES: readonly ResourceType[] = [
  "Blog",
  "Playbook",
  "Benchmark",
  "Interview",
  "White paper",
];

export const RESOURCE_SERVICES: readonly ResourceService[] = [
  "Customer support",
  "IT outsourcing",
  "Finance",
  "HR",
  "Sales & marketing",
];

export const RESOURCE_INDUSTRIES: readonly ResourceIndustry[] = [
  "Consumer goods",
  "Retail",
  "SaaS",
  "Healthcare",
  "Finance",
];

export const PAGE_SIZE = 9;

/**
 * Static registry, newest first. Server-safe by construction — icons are string
 * keys rather than React nodes, so the same objects feed the page metadata, the
 * JSON-LD and the client-side browser without dragging JSX into any of them.
 */
export const RESOURCES: readonly Resource[] = [
  {
    slug: "marcus-delgado-gen-ai-consumer-goods",
    title: "Marcus Delgado on the impact of Generative AI in consumer goods support",
    excerpt:
      "Six months after rolling out drafted replies across a 300-seat floor, Marcus talks handle time, hallucinations and the two queues he refuses to automate.",
    date: "2026-11-18",
    readTime: 12,
    type: "Interview",
    service: "Customer support",
    industry: "Consumer goods",
    art: "bg-[linear-gradient(140deg,var(--color-lilac-200),var(--color-blush-200))]",
    accent: "lilac",
    icon: "person",
    featured: "primary",
  },
  {
    slug: "home-furnishings-cx-playbook",
    title: "Transforming customer service in the home furnishings industry",
    excerpt:
      "Delivery windows, flat-pack damage and a 14-week lead time. How to build a support model around the three moments that decide the review.",
    date: "2026-11-02",
    readTime: 9,
    type: "Playbook",
    service: "Customer support",
    industry: "Retail",
    art: "bg-[linear-gradient(140deg,var(--color-mint-200),var(--color-sky-200))]",
    accent: "mint",
    icon: "chart",
    featured: "secondary",
  },
  {
    slug: "four-million-tickets-fcr",
    title: "What 4 million tickets taught us about first-contact resolution",
    excerpt:
      "We pulled two years of contacts across 40 pods. The single biggest lever on FCR was not tooling, and it was not headcount.",
    date: "2026-10-21",
    readTime: 7,
    type: "Benchmark",
    service: "Customer support",
    industry: "SaaS",
    art: "bg-[linear-gradient(140deg,var(--color-sun-200),var(--color-blush-100))]",
    accent: "sun",
    icon: "gauge",
    featured: "secondary",
  },
  {
    slug: "nearshore-it-squad-staffing",
    title: "How nearshore IT squads cut time-to-hire without cutting quality",
    excerpt:
      "Four hours of overlap changes what a squad can own. A look at the staffing maths behind a 21-day start.",
    date: "2026-10-14",
    readTime: 6,
    type: "Blog",
    service: "IT outsourcing",
    industry: "SaaS",
    art: "bg-[linear-gradient(140deg,var(--color-sky-200),var(--color-lilac-100))]",
    accent: "sky",
    icon: "users",
    featured: "secondary",
  },
  {
    slug: "finance-close-outsourcing-playbook",
    title: "A 30-day playbook for outsourcing month-end close",
    excerpt:
      "Reconciliations first, judgement last. The handover order that keeps your controller sleeping through the first close.",
    date: "2026-10-07",
    readTime: 11,
    type: "Playbook",
    service: "Finance",
    industry: "Finance",
    art: "bg-[linear-gradient(140deg,var(--color-mint-100),var(--color-sun-200))]",
    accent: "mint",
    icon: "ledger",
  },
  {
    slug: "hr-shared-services-benchmark",
    title: "HR shared services: cost, quality and cycle-time benchmarks",
    excerpt:
      "Case cost, first-touch rate and time-to-close across 28 shared service desks, split by headcount band.",
    date: "2026-09-28",
    readTime: 8,
    type: "Benchmark",
    service: "HR",
    industry: "Healthcare",
    art: "bg-[linear-gradient(140deg,var(--color-blush-200),var(--color-lilac-100))]",
    accent: "blush",
    icon: "gauge",
  },
  {
    slug: "sales-ops-outsourcing-white-paper",
    title: "White paper: building a sales ops pod that actually books pipeline",
    excerpt:
      "Routing, enrichment and CRM hygiene are not admin. A costed model for the pod that sits behind quota.",
    date: "2026-09-19",
    readTime: 16,
    type: "White paper",
    service: "Sales & marketing",
    industry: "SaaS",
    art: "bg-[linear-gradient(140deg,var(--color-sun-100),var(--color-mint-200))]",
    accent: "sun",
    icon: "rocket",
  },
  {
    slug: "retail-peak-season-cx",
    title: "Peak season CX: surge staffing without training debt",
    excerpt:
      "Everyone hires for November. Fewer plan for the January queue those hires leave behind.",
    date: "2026-09-11",
    readTime: 5,
    type: "Blog",
    service: "Customer support",
    industry: "Retail",
    art: "bg-[linear-gradient(140deg,var(--color-lilac-100),var(--color-sky-200))]",
    accent: "lilac",
    icon: "chat",
  },
  {
    slug: "ai-assisted-qa-interview",
    title: "Interview: how AI-assisted QA changed a 200-seat support floor",
    excerpt:
      "Scoring every contact instead of eight a month sounds like an upgrade. The team lead explains what it did to coaching.",
    date: "2026-09-03",
    readTime: 10,
    type: "Interview",
    service: "Customer support",
    industry: "Consumer goods",
    art: "bg-[linear-gradient(140deg,var(--color-blush-100),var(--color-sun-200))]",
    accent: "blush",
    icon: "beaker",
  },
  {
    slug: "it-outsourcing-sla-playbook",
    title: "Playbook: writing SLAs your IT outsourcing partner can actually hit",
    excerpt:
      "Nine clauses that look reasonable on paper and quietly guarantee a breach. Plus the wording we use instead.",
    date: "2026-08-26",
    readTime: 9,
    type: "Playbook",
    service: "IT outsourcing",
    industry: "Finance",
    art: "bg-[linear-gradient(140deg,var(--color-sky-100),var(--color-mint-200))]",
    accent: "sky",
    icon: "layers",
  },
  {
    slug: "healthcare-admin-outsourcing",
    title: "Admin outsourcing for healthcare: compliance without the bottleneck",
    excerpt:
      "Where the audit trail has to stay in-house, where it does not, and how to draw that line before procurement does.",
    date: "2026-08-18",
    readTime: 6,
    type: "Blog",
    service: "HR",
    industry: "Healthcare",
    art: "bg-[linear-gradient(140deg,var(--color-mint-200),var(--color-blush-100))]",
    accent: "mint",
    icon: "shield",
  },
  {
    slug: "ar-collections-benchmark",
    title: "Accounts receivable: DSO benchmarks from 40 finance pods",
    excerpt:
      "Median DSO, dispute rates and the collections cadence that separates the top quartile from everyone else.",
    date: "2026-08-09",
    readTime: 7,
    type: "Benchmark",
    service: "Finance",
    industry: "Finance",
    art: "bg-[linear-gradient(140deg,var(--color-sun-200),var(--color-lilac-100))]",
    accent: "sun",
    icon: "chart",
  },
  {
    slug: "demand-gen-outsourcing-white-paper",
    title: "White paper: when to outsource demand gen vs keep it in-house",
    excerpt:
      "A decision framework built on channel maturity and feedback loop length, with the break-even maths for both routes.",
    date: "2026-08-01",
    readTime: 14,
    type: "White paper",
    service: "Sales & marketing",
    industry: "Retail",
    art: "bg-[linear-gradient(140deg,var(--color-lilac-200),var(--color-mint-100))]",
    accent: "lilac",
    icon: "globe",
  },
  {
    slug: "saas-onboarding-cx-playbook",
    title: "SaaS onboarding support: a playbook for first-90-day retention",
    excerpt:
      "The churn signal shows up in week two and nobody is watching the queue it arrives in. How to staff that window.",
    date: "2026-07-22",
    readTime: 10,
    type: "Playbook",
    service: "Customer support",
    industry: "SaaS",
    art: "bg-[linear-gradient(140deg,var(--color-blush-200),var(--color-sky-100))]",
    accent: "blush",
    icon: "route",
  },
  {
    slug: "payroll-outsourcing-checklist",
    title: "Payroll outsourcing checklist: what to hand off in week one",
    excerpt:
      "Twenty-two items, ordered by how badly each one hurts when it is discovered in month three instead.",
    date: "2026-07-14",
    readTime: 5,
    type: "Blog",
    service: "HR",
    industry: "Consumer goods",
    art: "bg-[linear-gradient(140deg,var(--color-mint-100),var(--color-lilac-200))]",
    accent: "mint",
    icon: "ledger",
  },
];

/**
 * `Resource.date` is a bare ISO day, which `new Date` reads as UTC midnight.
 * Formatting that without pinning the zone renders the previous day for anyone
 * west of Greenwich, so the zone is fixed rather than left to the runtime.
 */
const DATE_FORMAT = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export const formatDate = (iso: string) => DATE_FORMAT.format(new Date(iso));

export const RESOURCE_SLUGS = RESOURCES.map((r) => r.slug);

export const getResource = (slug: string): Resource | undefined =>
  RESOURCES.find((r) => r.slug === slug);

/**
 * Three companion pieces for the foot of an article: same service outranks
 * same format, and everything else falls back to publication order. `sort` is
 * stable, so equally-scored pieces stay newest-first without a tiebreaker.
 */
export function getRelatedResources(current: Resource, limit = 3): Resource[] {
  const score = (r: Resource) =>
    (r.service === current.service ? 2 : 0) + (r.type === current.type ? 1 : 0);

  return RESOURCES.filter((r) => r.slug !== current.slug)
    .slice()
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit);
}

export function getFeatured(): {
  primary: Resource | undefined;
  secondary: Resource[];
} {
  const primary = RESOURCES.find((r) => r.featured === "primary");
  const secondary = RESOURCES.filter((r) => r.featured === "secondary");
  return { primary, secondary };
}

/** Latest N for the homepage Insights strip. */
export function getLatestResources(limit = 3): Resource[] {
  return RESOURCES.slice(0, limit);
}

export function filterResources(
  filters: ResourceFilters,
  list: readonly Resource[] = RESOURCES,
): Resource[] {
  const q = filters.query.trim().toLowerCase();

  return list.filter((resource) => {
    if (filters.type && resource.type !== filters.type) return false;
    if (filters.service && resource.service !== filters.service) return false;
    if (filters.industry && resource.industry !== filters.industry) return false;
    if (!q) return true;
    return (
      resource.title.toLowerCase().includes(q) ||
      resource.excerpt.toLowerCase().includes(q) ||
      resource.type.toLowerCase().includes(q) ||
      resource.service.toLowerCase().includes(q) ||
      resource.industry.toLowerCase().includes(q)
    );
  });
}

/**
 * Per-type tallies for the filter chips, counted against everything *except*
 * the type filter. A chip reading "Playbook 4" has to mean "4 more results if
 * you press this", which it only does if the current type is ignored.
 */
export function countByType(
  filters: ResourceFilters,
  list: readonly Resource[] = RESOURCES,
): Record<ResourceType | "", number> {
  const scoped = filterResources({ ...filters, type: "" }, list);

  const counts = { "": scoped.length } as Record<ResourceType | "", number>;
  for (const type of RESOURCE_TYPES) {
    counts[type] = scoped.filter((r) => r.type === type).length;
  }
  return counts;
}

export function paginateResources(
  list: readonly Resource[],
  page: number,
  pageSize = PAGE_SIZE,
): { items: Resource[]; totalPages: number; page: number } {
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    totalPages,
    page: safePage,
  };
}
