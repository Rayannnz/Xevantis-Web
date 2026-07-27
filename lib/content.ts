/* ==========================================================================
   VALENTISYS — SITE CONTENT
   All marketing copy lives here so pages stay structural. Swap this file for
   a CMS query and no component needs to change.

   NOTE: this is placeholder copy carried over from the static build. The
   testimonials, customer logos, statistics and certification badges are
   invented for layout purposes and must be replaced with real, verifiable
   claims before this goes to production.
   ========================================================================== */

import type { IconName } from "@/components/ui/Icon";

export type Accent = "sun" | "mint" | "lilac" | "blush" | "sky";

export const nav = {
  solutions: [
    {
      title: "Customer Experience",
      body: "Omnichannel support squads across voice, chat, email and social.",
      icon: "headset" as IconName,
      accent: "blush" as Accent,
      href: "#services",
    },
    {
      title: "Back Office & Ops",
      body: "Claims, billing, order management and data operations.",
      icon: "lines" as IconName,
      accent: "mint" as Accent,
      href: "#services",
    },
    {
      title: "Software Engineering",
      body: "Product pods: web, mobile, data platforms and integrations.",
      icon: "code" as IconName,
      accent: "lilac" as Accent,
      href: "#services",
    },
    {
      title: "Trust & Safety",
      body: "Moderation, fraud review and policy enforcement at scale.",
      icon: "shield" as IconName,
      accent: "sky" as Accent,
      href: "#services",
    },
  ],
  primary: [
    { label: "How it works", href: "#process" },
    { label: "Scale", href: "#scale" },
    { label: "Customers", href: "#proof" },
    { label: "Design system", href: "/design-system" },
  ],
  drawer: [
    { label: "Solutions", href: "#services" },
    { label: "How it works", href: "#process" },
    { label: "Scale", href: "#scale" },
    { label: "Customers", href: "#proof" },
    { label: "Insights", href: "#insights" },
    { label: "Design system", href: "/design-system" },
  ],
};

export const customerLogos: Array<{ name: string; icon: IconName }> = [
  { name: "Northwind", icon: "logoCircle" },
  { name: "Aurora Health", icon: "logoSquare" },
  { name: "Peakline", icon: "logoTriangle" },
  { name: "Lumen Retail", icon: "logoSpark" },
  { name: "Gridworks", icon: "logoGrid" },
  { name: "Solstice", icon: "logoArch" },
  { name: "Vertex Pay", icon: "logoZig" },
  { name: "Duonode", icon: "logoDuo" },
];

export const launchSteps = [
  { n: "1", accent: "sun", title: "Scope", body: "Volumes, tooling, SLAs, edge cases." },
  { n: "2", accent: "mint", title: "Recruit", body: "Shortlist in 96 hours, you interview." },
  { n: "3", accent: "lilac", title: "Train", body: "Your playbook, our academy, live sims." },
  { n: "4", accent: "blush", title: "Go live", body: "Weekly QBR-grade reporting from day one." },
] as const;

export const services: Array<{
  title: string;
  body: string;
  icon: IconName;
  accent: Accent;
}> = [
  {
    title: "Customer Support",
    body: "Voice, chat, email, social and app-store replies — staffed by people who know your product, not a script.",
    icon: "headsetFull",
    accent: "sky",
  },
  {
    title: "Back Office",
    body: "Order management, claims, billing exceptions and data ops — the invisible work that decides your margin.",
    icon: "window",
    accent: "blush",
  },
  {
    title: "Trust & Safety",
    body: "Content moderation, fraud review and policy enforcement, with wellbeing programmes built into the roster.",
    icon: "shield",
    accent: "lilac",
  },
  {
    title: "Software Pods",
    body: "Full-stack, mobile and data engineers who ship inside your repo, your sprint, your definition of done.",
    icon: "code",
    accent: "mint",
  },
];

export const integrations = [
  ["Zendesk", "Intercom", "Salesforce", "HubSpot", "Shopify", "Slack", "Stripe", "Jira"],
  ["Twilio", "Genesys", "Freshdesk", "NetSuite", "Snowflake", "Linear", "GitHub", "Notion"],
];

export const processSteps = [
  {
    title: "We learn your product, tools and support workflows",
    body: "A delivery lead runs a two-day immersion: ticket taxonomy, escalation paths, tone of voice, systems access and the twenty edge cases that actually cause churn.",
  },
  {
    title: "We design a customised toolkit for your offer & team",
    body: "Macros, QA rubric, knowledge base, routing rules and reporting schema — all built before a single agent is hired, then handed to you as your IP.",
  },
  {
    title: "We recruit and assemble your dream team",
    body: "Shortlist within 96 hours from a 40,000-strong talent pool. You interview every finalist and hold the veto — nobody joins your pod without your yes.",
  },
  {
    title: "Your pod trains on your product, platform and playbooks",
    body: "Two weeks of academy: product certification, live call simulation, shadowing and a graded readiness gate. Nobody touches a real customer before passing it.",
  },
  {
    title: "Go live & scale on a weekly check-in cadence",
    body: "Weekly performance reviews, monthly business reviews, and a shared dashboard you can open any time. Add or remove seats with 30 days' notice.",
  },
];

export const surgeScenarios = [
  "Holiday seasons",
  "Sporting events",
  "Product launches",
  "Brand campaigns",
  "Tax & renewal season",
  "Back-to-school",
  "Crisis management",
  "Weather events",
];

export const stats = [
  { value: 150, suffix: "+", label: "Customers scaling with Valentisys pods today" },
  { value: 4.8, decimals: 1, after: "/5", label: "Average CSAT across all managed programmes" },
  { value: 38, suffix: "%", label: "Median cost reduction in the first two quarters" },
  { value: 14, suffix: " days", label: "From signed scope to a fully trained team going live" },
];

export const testimonials: Array<{
  title: string;
  quote: string;
  role: string;
  meta: string;
  initials: string;
  accent: Accent;
  surface: string;
}> = [
  {
    title: "The best BPO partner we've worked with",
    quote:
      "With a good transition, we were able to sit our contact centre team almost 100% quality and cost accuracy. Supporting fifteen thousand tickets a month stopped being a fire drill and became a routine.",
    role: "Head of Customer Ops",
    meta: "Industry: E-commerce · 300–1,000 staff",
    initials: "HP",
    accent: "sun",
    surface: "var(--sky-050)",
  },
  {
    title: "Consistently delivering excellent outcomes",
    quote:
      "Thanks to ready-set-and-adapt certified products, no more than 30 disputed ambiguities. The team is technically brilliant, but what stands out is how fast they push back when our process is the problem.",
    role: "VP of Support",
    meta: "Industry: Gaming · 1,000+ staff",
    initials: "VP",
    accent: "mint",
    surface: "var(--mint-050)",
  },
  {
    title: "A partner with exceptional understanding of our culture",
    quote:
      "Valentisys embedded strategic decisions to significantly reduce failure response times. The team's ability to scale to customers from diverse linguistic backgrounds makes the workflow seamless.",
    role: "Customer Support Manager",
    meta: "Industry: Fintech · 100–300 staff",
    initials: "CS",
    accent: "lilac",
    surface: "var(--lilac-050)",
  },
  {
    title: "Engineering and support finally in one room",
    quote:
      "Bugs surfaced by the support pod get fixed by the same vendor's engineers in the same sprint. Our backlog of “known issues customers keep writing about” went from 47 to 6 in a quarter.",
    role: "CTO",
    meta: "Industry: SaaS · 100–300 staff",
    initials: "CT",
    accent: "blush",
    surface: "var(--blush-050)",
  },
];

export const posts: Array<{
  date: string;
  kind: string;
  title: string;
  art: "1" | "2" | "3";
  icon: IconName;
}> = [
  {
    date: "18 Nov 2026",
    kind: "Interview",
    title: "Marcus Delgado on the impact of Generative AI in consumer goods support",
    art: "1",
    icon: "person",
  },
  {
    date: "02 Nov 2026",
    kind: "Playbook",
    title: "Transforming customer service in the home furnishings industry",
    art: "2",
    icon: "bars",
  },
  {
    date: "21 Oct 2026",
    kind: "Benchmark",
    title: "What 4 million tickets taught us about first-contact resolution",
    art: "3",
    icon: "window",
  },
];

export const footerColumns = [
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

export const certifications = ["ISO 27001", "SOC 2 Type II", "GDPR ready", "PCI DSS"];
