import type {
  FooterColumn,
  LaunchStep,
  NavLink,
  ProcessStep,
  Stat,
  Testimonial,
} from "./types";

export const PRIMARY_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Resources", href: "/#insights" },
  { label: "Contact", href: "/#contact" },
];

/**
 * Every solution link points at the services section for now — there are no
 * per-service pages yet. Repoint each href when they exist.
 *
 * Links in the shared shell (header, drawer, footer) are root-relative rather
 * than bare hashes: a bare `#services` resolves against whatever route is
 * current, so it would break the moment the shell renders on a second route.
 */
export const SOLUTION_GROUPS: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Core functions",
    links: [
      { label: "IT Outsourcing", href: "/#services" },
      { label: "Finance & Accounting", href: "/#services" },
      { label: "Finance Outsourcing", href: "/#services" },
      { label: "Sales & Marketing", href: "/#services" },
    ],
  },
  {
    heading: "Customer & admin",
    links: [
      { label: "Customer Service", href: "/#services" },
      { label: "Live Chat Outsourcing", href: "/#services" },
      { label: "Admin Support", href: "/#services" },
      { label: "Legal Process Outsourcing", href: "/#services" },
    ],
  },
  {
    heading: "HR & payroll",
    links: [
      { label: "HR Outsourcing", href: "/#services" },
      { label: "Payroll Outsourcing", href: "/#services" },
      { label: "HR vs PEO Guide", href: "/#services" },
      { label: "HR for Retail", href: "/#services" },
    ],
  },
  {
    heading: "Models & sectors",
    links: [
      { label: "Small Business", href: "/#services" },
      { label: "Ecommerce BPO", href: "/#services" },
      { label: "Nearshore BPO", href: "/#services" },
      { label: "M&A Deal Flow", href: "/#services" },
    ],
  },
];

/** Flattened for the drawer, so nothing in the mega menu is unreachable on touch. */
export const ALL_SOLUTIONS: NavLink[] = SOLUTION_GROUPS.flatMap(
  (group) => group.links,
);

export const LAUNCH_STEPS: LaunchStep[] = [
  { title: "Scope", detail: "Volumes, tooling, SLAs, edge cases.", accent: "sun" },
  { title: "Recruit", detail: "Shortlist in 96 hours, you interview.", accent: "mint" },
  { title: "Train", detail: "Your playbook, our academy, live sims.", accent: "lilac" },
  { title: "Go live", detail: "Weekly QBR-grade reporting from day one.", accent: "blush" },
];

export const WHY_SWITCH: string[] = [
  "Named specialists, not a rotating pool — you keep the same people.",
  "Engineers and CX in one contract, so fixes ship instead of queueing.",
  "Month-to-month after month three. No 3-year lock-in, ever.",
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "We learn your product, tools and support workflows",
    detail:
      "A delivery lead runs a two-day immersion: ticket taxonomy, escalation paths, tone of voice, systems access and the twenty edge cases that actually cause churn.",
  },
  {
    title: "We design a customised toolkit for your offer & team",
    detail:
      "Macros, QA rubric, knowledge base, routing rules and reporting schema — all built before a single agent is hired, then handed to you as your IP.",
  },
  {
    title: "We recruit and assemble your dream team",
    detail:
      "Shortlist within 96 hours from a 40,000-strong talent pool. You interview every finalist and hold the veto — nobody joins your pod without your yes.",
  },
  {
    title: "Your pod trains on your product, platform and playbooks",
    detail:
      "Two weeks of academy: product certification, live call simulation, shadowing and a graded readiness gate. Nobody touches a real customer before passing it.",
  },
  {
    title: "Go live & scale on a weekly check-in cadence",
    detail:
      "Weekly performance reviews, monthly business reviews, and a shared dashboard you can open any time. Add or remove seats with 30 days' notice.",
  },
];

export const SURGE_MOMENTS: string[] = [
  "Holiday seasons",
  "Sporting events",
  "Product launches",
  "Brand campaigns",
  "Tax & renewal season",
  "Back-to-school",
  "Crisis management",
  "Weather events",
];

export const STATS: Stat[] = [
  {
    value: 150,
    suffix: "+",
    label: "Customers scaling with Valentisys pods today",
  },
  {
    value: 4.8,
    decimals: 1,
    trailing: "/5",
    label: "Average CSAT across all managed programmes",
  },
  {
    value: 38,
    suffix: "%",
    label: "Median cost reduction in the first two quarters",
  },
  {
    value: 14,
    suffix: " days",
    label: "From signed scope to a fully trained team going live",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    title: "The best BPO partner we've worked with",
    quote:
      "With a good transition, we were able to sit our contact centre team almost 100% quality and cost accuracy. Supporting fifteen thousand tickets a month stopped being a fire drill and became a routine.",
    role: "Head of Customer Ops",
    meta: "Industry: E-commerce · 300–1,000 staff",
    initials: "HP",
    surface: "bg-sky-050",
    avatar: "bg-sun-300",
  },
  {
    title: "Consistently delivering excellent outcomes",
    quote:
      "Thanks to ready-set-and-adapt certified products, no more than 30 disputed ambiguities. The team is technically brilliant, but what stands out is how fast they push back when our process is the problem.",
    role: "VP of Support",
    meta: "Industry: Gaming · 1,000+ staff",
    initials: "VP",
    surface: "bg-mint-050",
    avatar: "bg-mint-300",
  },
  {
    title: "A partner with exceptional understanding of our culture",
    quote:
      "Valentisys embedded strategic decisions to significantly reduce failure response times. The team's ability to scale to customers from diverse linguistic backgrounds makes the workflow seamless.",
    role: "Customer Support Manager",
    meta: "Industry: Fintech · 100–300 staff",
    initials: "CS",
    surface: "bg-lilac-050",
    avatar: "bg-lilac-300",
  },
  {
    title: "Engineering and support finally in one room",
    quote:
      'Bugs surfaced by the support pod get fixed by the same vendor\'s engineers in the same sprint. Our backlog of "known issues customers keep writing about" went from 47 to 6 in a quarter.',
    role: "CTO",
    meta: "Industry: SaaS · 100–300 staff",
    initials: "CT",
    surface: "bg-blush-050",
    avatar: "bg-blush-300",
  },
];

export const INTEGRATIONS: string[][] = [
  ["Zendesk", "Intercom", "Salesforce", "HubSpot", "Shopify", "Slack", "Stripe", "Jira"],
  ["Twilio", "Genesys", "Freshdesk", "NetSuite", "Snowflake", "Linear", "GitHub", "Notion"],
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Customer support", href: "/#services" },
      { label: "Back office", href: "/#services" },
      { label: "Trust & safety", href: "/#services" },
      { label: "Software pods", href: "/#services" },
      { label: "Digital operations", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/" },
      { label: "Customers", href: "/#proof" },
      { label: "Insights", href: "/#insights" },
      { label: "Careers", href: "/" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Design system", href: "/design-system" },
      { label: "Playbooks", href: "/#insights" },
      { label: "Benchmarks", href: "/#insights" },
      { label: "Security", href: "/" },
      { label: "Status", href: "/" },
    ],
  },
];

export const COMPLIANCE_BADGES = [
  "ISO 27001",
  "SOC 2 Type II",
  "GDPR ready",
  "PCI DSS",
];
