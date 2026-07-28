import type {
  Resource,
  ResourceFilters,
  ResourceIndustry,
  ResourceService,
  ResourceType,
} from "./types";

export type {
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
 * Static resources registry. Server-only — icons are string keys so this
 * stays free of React nodes and never reaches the client bundle as JSX.
 */
export const RESOURCES: readonly Resource[] = [
  {
    slug: "marcus-delgado-gen-ai-consumer-goods",
    title: "Marcus Delgado on the impact of Generative AI in consumer goods support",
    date: "18 Nov 2026",
    type: "Interview",
    service: "Customer support",
    industry: "Consumer goods",
    art: "bg-[linear-gradient(140deg,var(--color-lilac-200),var(--color-blush-200))]",
    icon: "person",
    featured: "primary",
  },
  {
    slug: "home-furnishings-cx-playbook",
    title: "Transforming customer service in the home furnishings industry",
    date: "02 Nov 2026",
    type: "Playbook",
    service: "Customer support",
    industry: "Retail",
    art: "bg-[linear-gradient(140deg,var(--color-mint-200),var(--color-sky-200))]",
    icon: "chart",
    featured: "secondary",
  },
  {
    slug: "four-million-tickets-fcr",
    title: "What 4 million tickets taught us about first-contact resolution",
    date: "21 Oct 2026",
    type: "Benchmark",
    service: "Customer support",
    industry: "SaaS",
    art: "bg-[linear-gradient(140deg,var(--color-sun-200),var(--color-blush-100))]",
    icon: "ledger",
    featured: "secondary",
  },
  {
    slug: "nearshore-it-squad-staffing",
    title: "How nearshore IT squads cut time-to-hire without cutting quality",
    date: "14 Oct 2026",
    type: "Blog",
    service: "IT outsourcing",
    industry: "SaaS",
    art: "bg-[linear-gradient(140deg,var(--color-sky-200),var(--color-lilac-100))]",
    icon: "users",
  },
  {
    slug: "finance-close-outsourcing-playbook",
    title: "A 30-day playbook for outsourcing month-end close",
    date: "07 Oct 2026",
    type: "Playbook",
    service: "Finance",
    industry: "Finance",
    art: "bg-[linear-gradient(140deg,var(--color-mint-100),var(--color-sun-200))]",
    icon: "ledger",
  },
  {
    slug: "hr-shared-services-benchmark",
    title: "HR shared services: cost, quality and cycle-time benchmarks",
    date: "28 Sep 2026",
    type: "Benchmark",
    service: "HR",
    industry: "Healthcare",
    art: "bg-[linear-gradient(140deg,var(--color-blush-200),var(--color-lilac-100))]",
    icon: "gauge",
  },
  {
    slug: "sales-ops-outsourcing-white-paper",
    title: "White paper: building a sales ops pod that actually books pipeline",
    date: "19 Sep 2026",
    type: "White paper",
    service: "Sales & marketing",
    industry: "SaaS",
    art: "bg-[linear-gradient(140deg,var(--color-sun-100),var(--color-mint-200))]",
    icon: "rocket",
  },
  {
    slug: "retail-peak-season-cx",
    title: "Peak season CX: surge staffing without training debt",
    date: "11 Sep 2026",
    type: "Blog",
    service: "Customer support",
    industry: "Retail",
    art: "bg-[linear-gradient(140deg,var(--color-lilac-100),var(--color-sky-200))]",
    icon: "chat",
  },
  {
    slug: "ai-assisted-qa-interview",
    title: "Interview: how AI-assisted QA changed a 200-seat support floor",
    date: "03 Sep 2026",
    type: "Interview",
    service: "Customer support",
    industry: "Consumer goods",
    art: "bg-[linear-gradient(140deg,var(--color-blush-100),var(--color-sun-200))]",
    icon: "beaker",
  },
  {
    slug: "it-outsourcing-sla-playbook",
    title: "Playbook: writing SLAs your IT outsourcing partner can actually hit",
    date: "26 Aug 2026",
    type: "Playbook",
    service: "IT outsourcing",
    industry: "Finance",
    art: "bg-[linear-gradient(140deg,var(--color-sky-100),var(--color-mint-200))]",
    icon: "layers",
  },
  {
    slug: "healthcare-admin-outsourcing",
    title: "Admin outsourcing for healthcare: compliance without the bottleneck",
    date: "18 Aug 2026",
    type: "Blog",
    service: "HR",
    industry: "Healthcare",
    art: "bg-[linear-gradient(140deg,var(--color-mint-200),var(--color-blush-100))]",
    icon: "globe",
  },
  {
    slug: "ar-collections-benchmark",
    title: "Accounts receivable: DSO benchmarks from 40 finance pods",
    date: "09 Aug 2026",
    type: "Benchmark",
    service: "Finance",
    industry: "Finance",
    art: "bg-[linear-gradient(140deg,var(--color-sun-200),var(--color-lilac-100))]",
    icon: "chart",
  },
  {
    slug: "demand-gen-outsourcing-white-paper",
    title: "White paper: when to outsource demand gen vs keep it in-house",
    date: "01 Aug 2026",
    type: "White paper",
    service: "Sales & marketing",
    industry: "Retail",
    art: "bg-[linear-gradient(140deg,var(--color-lilac-200),var(--color-mint-100))]",
    icon: "rocket",
  },
  {
    slug: "saas-onboarding-cx-playbook",
    title: "SaaS onboarding support: a playbook for first-90-day retention",
    date: "22 Jul 2026",
    type: "Playbook",
    service: "Customer support",
    industry: "SaaS",
    art: "bg-[linear-gradient(140deg,var(--color-blush-200),var(--color-sky-100))]",
    icon: "users",
  },
  {
    slug: "payroll-outsourcing-checklist",
    title: "Payroll outsourcing checklist: what to hand off in week one",
    date: "14 Jul 2026",
    type: "Blog",
    service: "HR",
    industry: "Consumer goods",
    art: "bg-[linear-gradient(140deg,var(--color-mint-100),var(--color-lilac-200))]",
    icon: "ledger",
  },
];

export function getFeatured(): {
  primary: Resource | undefined;
  secondary: Resource[];
} {
  const primary = RESOURCES.find((r) => r.featured === "primary");
  const secondary = RESOURCES.filter((r) => r.featured === "secondary");
  return { primary, secondary };
}

/** Latest N resources for the homepage Insights strip. */
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
      resource.type.toLowerCase().includes(q) ||
      resource.service.toLowerCase().includes(q) ||
      resource.industry.toLowerCase().includes(q)
    );
  });
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
