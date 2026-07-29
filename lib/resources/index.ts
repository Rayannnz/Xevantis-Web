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
  "Medical & dental",
  "Pharmacy",
  "Legal",
  "Engineering",
  "Accounting",
  "Real estate",
  "Corporate offices",
  "Local services",
];

export const PAGE_SIZE = 9;

/**
 * Static registry, newest first. Server-safe by construction — icons are string
 * keys rather than React nodes, so the same objects feed the page metadata, the
 * JSON-LD and the client-side browser without dragging JSX into any of them.
 *
 * Two rules hold this list together and are easy to break by accident:
 *
 * 1. New York is the local-SEO surface, so titles and deks name the borough or
 *    the state where it is true. The services themselves are nationwide, and
 *    every body says so — a reader in Ohio should recognize their own problem
 *    in a piece about Queens, not conclude we do not cover them.
 * 2. Coverage is spread evenly across `RESOURCE_SERVICES` — three per service.
 *    A library that is all one topic ranks for one topic.
 *
 * Length stays a multiple of three so the three-column grid never ends on an
 * orphan row.
 */
export const RESOURCES: readonly Resource[] = [
  {
    slug: "nyc-dental-practice-missed-calls",
    title: "What a missed call costs a New York dental practice",
    excerpt:
      "We logged inbound calls at eleven practices across Brooklyn, Queens and Nassau County for six weeks. Roughly one in four new-patient calls never reached a person.",
    date: "2026-07-27",
    readTime: 9,
    type: "Benchmark",
    service: "Customer support",
    industry: "Medical & dental",
    art: "bg-[linear-gradient(140deg,var(--color-lilac-200),var(--color-blush-200))]",
    accent: "lilac",
    icon: "gauge",
    featured: "primary",
  },
  {
    slug: "law-firm-intake-new-york",
    title: "Legal intake in New York: the call that decides whether you get the case",
    excerpt:
      "Someone who needs a lawyer calls three firms in ten minutes. A playbook for answering first, screening conflicts, and not sounding like a call center.",
    date: "2026-07-20",
    readTime: 11,
    type: "Playbook",
    service: "Customer support",
    industry: "Legal",
    art: "bg-[linear-gradient(140deg,var(--color-mint-200),var(--color-sky-200))]",
    accent: "mint",
    icon: "chat",
    featured: "secondary",
  },
  {
    slug: "local-seo-nyc-service-business",
    title: "Local SEO for New York service businesses: eight things that move the map",
    excerpt:
      "Ranking in the local pack for \"dentist near me\" in a five-borough market is a different job from ranking a website. Here is the order to do it in.",
    date: "2026-07-13",
    readTime: 13,
    type: "White paper",
    service: "Sales & marketing",
    industry: "Local services",
    art: "bg-[linear-gradient(140deg,var(--color-sun-200),var(--color-blush-100))]",
    accent: "sun",
    icon: "globe",
    featured: "secondary",
  },
  {
    slug: "hipaa-it-checklist-small-practice",
    title: "A plain-English HIPAA IT checklist for a small medical practice",
    excerpt:
      "Nineteen controls a four-provider clinic can actually implement, and the four that auditors ask about first. Written against the NY practices we support.",
    date: "2026-07-06",
    readTime: 12,
    type: "Playbook",
    service: "IT outsourcing",
    industry: "Medical & dental",
    art: "bg-[linear-gradient(140deg,var(--color-sky-200),var(--color-lilac-100))]",
    accent: "sky",
    icon: "shield",
    featured: "secondary",
  },
  {
    slug: "nyc-accounting-firm-busy-season",
    title: "How New York accounting firms staff January through April",
    excerpt:
      "Busy season is not a surprise, but most small firms staff it like one. What five NYC-area practices did differently, and what it cost them.",
    date: "2026-06-25",
    readTime: 10,
    type: "Playbook",
    service: "Finance",
    industry: "Accounting",
    art: "bg-[linear-gradient(140deg,var(--color-mint-100),var(--color-sun-200))]",
    accent: "mint",
    icon: "ledger",
  },
  {
    slug: "nyc-small-business-hiring-rules",
    title: "Hiring in New York City: the rules a 12-person office keeps tripping over",
    excerpt:
      "Salary transparency, the Fair Chance Act, paid safe and sick leave, and the automated-hiring-tool audit. What actually applies at your headcount.",
    date: "2026-06-18",
    readTime: 11,
    type: "White paper",
    service: "HR",
    industry: "Local services",
    art: "bg-[linear-gradient(140deg,var(--color-blush-200),var(--color-lilac-100))]",
    accent: "blush",
    icon: "shield",
  },
  {
    slug: "pharmacy-ai-phone-system",
    title: "Should an independent pharmacy put AI on the phone?",
    excerpt:
      "Refill requests are the one call an automated system genuinely handles well. The three others it should never touch — and what the counter actually needs.",
    date: "2026-06-09",
    readTime: 8,
    type: "Blog",
    service: "Customer support",
    industry: "Pharmacy",
    art: "bg-[linear-gradient(140deg,var(--color-lilac-100),var(--color-sky-200))]",
    accent: "lilac",
    icon: "beaker",
  },
  {
    slug: "dental-insurance-ar-benchmark",
    title: "Dental insurance AR: aging benchmarks from 30 practices",
    excerpt:
      "Median days in AR, the share of claims over 90 days, and the one weekly habit that separated the top third from everyone else.",
    date: "2026-05-28",
    readTime: 8,
    type: "Benchmark",
    service: "Finance",
    industry: "Medical & dental",
    art: "bg-[linear-gradient(140deg,var(--color-sun-200),var(--color-lilac-100))]",
    accent: "sun",
    icon: "chart",
  },
  {
    slug: "nyc-office-it-support-costs",
    title: "What IT support really costs a 20-person New York office",
    excerpt:
      "Break-fix, a local managed provider, a full-time hire, or a remote team. Four routes priced out against the same 20-seat office.",
    date: "2026-05-19",
    readTime: 9,
    type: "Benchmark",
    service: "IT outsourcing",
    industry: "Corporate offices",
    art: "bg-[linear-gradient(140deg,var(--color-sky-100),var(--color-mint-200))]",
    accent: "sky",
    icon: "gauge",
  },
  {
    slug: "google-business-profile-law-firm",
    title: "Reviews and the Google Business Profile: a benchmark across NYC law firms",
    excerpt:
      "Review count, response rate and photo freshness across 60 Manhattan and Brooklyn firms, mapped against where each one ranked in the local pack.",
    date: "2026-05-08",
    readTime: 7,
    type: "Benchmark",
    service: "Sales & marketing",
    industry: "Legal",
    art: "bg-[linear-gradient(140deg,var(--color-lilac-200),var(--color-mint-100))]",
    accent: "lilac",
    icon: "chart",
  },
  {
    slug: "pharmacy-technician-hiring-nyc",
    title: "Interview: hiring and keeping pharmacy technicians in New York",
    excerpt:
      "Time-to-fill, turnover and the wage band independents are competing against. Plus the tasks worth moving off the technician's plate first.",
    date: "2026-04-29",
    readTime: 9,
    type: "Interview",
    service: "HR",
    industry: "Pharmacy",
    art: "bg-[linear-gradient(140deg,var(--color-mint-200),var(--color-blush-100))]",
    accent: "mint",
    icon: "users",
  },
  {
    slug: "engineering-firm-file-management",
    title: "Interview: CAD files, remote staff and a three-person office",
    excerpt:
      "Structural and MEP firms outgrow a shared drive faster than they expect. What to move, what to leave, and how to keep drawings loading over a home connection.",
    date: "2026-04-17",
    readTime: 8,
    type: "Interview",
    service: "IT outsourcing",
    industry: "Engineering",
    art: "bg-[linear-gradient(140deg,var(--color-blush-100),var(--color-sun-200))]",
    accent: "blush",
    icon: "layers",
  },
  {
    slug: "real-estate-lead-response-nyc",
    title: "Lead response time at New York real estate agencies",
    excerpt:
      "We timed replies to 200 portal inquiries across NYC and Westchester brokerages. The median was 4 hours 11 minutes. The listings that converted answered in under five.",
    date: "2026-04-06",
    readTime: 7,
    type: "Blog",
    service: "Sales & marketing",
    industry: "Real estate",
    art: "bg-[linear-gradient(140deg,var(--color-blush-200),var(--color-sky-100))]",
    accent: "blush",
    icon: "route",
  },
  {
    slug: "brokerage-commission-accounting",
    title: "Commission accounting for a New York brokerage, without the spreadsheet",
    excerpt:
      "Splits, referral fees, agent draws and 1099s. Why the month-end that breaks is almost always the one with a co-broke in it.",
    date: "2026-03-24",
    readTime: 10,
    type: "Blog",
    service: "Finance",
    industry: "Real estate",
    art: "bg-[linear-gradient(140deg,var(--color-mint-100),var(--color-lilac-200))]",
    accent: "mint",
    icon: "ledger",
  },
  {
    slug: "nys-paid-leave-small-employer",
    title: "New York paid leave for small employers, in plain English",
    excerpt:
      "Paid Family Leave, statutory disability, NYC safe and sick time and the new prenatal leave — which apply at your headcount, and who pays for each.",
    date: "2026-03-11",
    readTime: 9,
    type: "Blog",
    service: "HR",
    industry: "Corporate offices",
    art: "bg-[linear-gradient(140deg,var(--color-sky-200),var(--color-blush-100))]",
    accent: "sky",
    icon: "person",
  },
];

/**
 * `Resource.date` is a bare ISO day, which `new Date` reads as UTC midnight.
 * Formatting that without pinning the zone renders the previous day for anyone
 * west of UTC, so the zone is fixed rather than left to the runtime.
 */
const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
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
