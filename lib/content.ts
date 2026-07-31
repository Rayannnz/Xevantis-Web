import { SERVICE_GROUPS } from "./services";
import type {
  FooterColumn,
  NavLink,
  ProcessStep,
  Stat,
  Testimonial,
} from "./types";

export const PRIMARY_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/#contact" },
];

/**
 * Solution groups are derived from the service registry, so a new service
 * appears in the mega menu, the drawer and the services index by being added
 * in one place.
 *
 * Links in the shared shell (header, drawer, footer) are root-relative rather
 * than bare hashes: a bare `#services` resolves against whatever route is
 * current, so it would break the moment the shell renders on a second route.
 */
export const SOLUTION_GROUPS: { heading: string; links: NavLink[] }[] =
  SERVICE_GROUPS.map((group) => ({
    heading: group.heading,
    links: group.services.map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
    })),
  }));

/** Flattened for the drawer, so nothing in the mega menu is unreachable on touch. */
export const ALL_SOLUTIONS: NavLink[] = SOLUTION_GROUPS.flatMap(
  (group) => group.links,
);

export const WHY_SWITCH: string[] = [
  "The same named person every day — not whoever picks up the phone.",
  "Start at one seat, or half of one. No minimum team size.",
  "Month-to-month after month three. No multi-year contract, ever.",
];

/**
 * Five steps, written for an owner-operator rather than a procurement team:
 * the reader is usually the person who currently does this work themselves.
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "We sit with you for a morning and learn how the office actually runs",
    detail:
      "Which calls matter, what your software is, who signs off on what, and the dozen situations your front desk handles by instinct because nobody ever wrote them down.",
    day: "Day 1",
  },
  {
    title: "We write the playbook you never had time to write",
    detail:
      "Intake scripts, scheduling rules, insurance and billing steps, escalation paths — documented before anyone is hired, and yours to keep whether you stay with us or not.",
    day: "Days 2–3",
  },
  {
    title: "We shortlist people who have worked in your industry",
    detail:
      "Two candidates within 96 hours, screened for the specifics — dental insurance verification, legal intake, prior-authorization calls. You interview both and hold the veto.",
    day: "Day 4",
  },
  {
    title: "They train on your systems before they touch a real patient or client",
    detail:
      "Two weeks in your practice management or case software, live call practice against your scripts, and a readiness check you sign off on.",
    day: "Days 5–13",
  },
  {
    title: "Go live, then a standing weekly call with the person who runs it",
    detail:
      "No account managers who have never seen your queue. Add or drop a seat with 30 days' notice, no penalty and no renegotiation.",
    day: "Day 14",
  },
];

export const SURGE_MOMENTS: string[] = [
  "Flu and vaccine season",
  "Open enrollment",
  "Tax season",
  "Spring home-buying season",
  "Staff PTO and leave",
  "Back-to-school physicals",
  "A sudden resignation",
  "Snow days and closures",
];

export const STATS: Stat[] = [
  {
    value: 240,
    suffix: "+",
    label: "Local US businesses running on Xevantis teams today",
  },
  {
    value: 4.8,
    decimals: 1,
    trailing: "/5",
    label: "Average client rating across every managed account",
  },
  {
    value: 34,
    suffix: "%",
    label: "Median saving against hiring the same role locally",
  },
  {
    value: 14,
    suffix: " days",
    label: "From signed scope to a trained person answering your phone",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    title: "Our front desk finally gets to look patients in the eye",
    quote:
      "Two people were answering phones and checking in patients at the same time, badly. Xevantis took the calls and the insurance verification. Same two staff, no more waiting room backlog, and we stopped losing new-patient calls to voicemail.",
    role: "Practice Manager",
    meta: "Family dental practice · Queens, NY · 4 providers",
    initials: "PM",
    surface: "bg-sky-050",
    avatar: "bg-sun-300",
  },
  {
    title: "Every new-client call gets answered now",
    quote:
      "We are a six-attorney firm. Intake calls used to hit voicemail whenever we were in court, and people who need a lawyer call the next name on the list. Their intake specialist knows our matter types and screens conflicts before it reaches us.",
    role: "Managing Partner",
    meta: "Personal injury firm · Brooklyn, NY · 6 attorneys",
    initials: "MP",
    surface: "bg-mint-050",
    avatar: "bg-mint-300",
  },
  {
    title: "They pushed back when our process was the problem",
    quote:
      "Three weeks in they told us our refill callback workflow was creating half its own volume, and showed the numbers. Nobody we have hired before has done that. We changed it and the queue dropped by a third.",
    role: "Pharmacist-in-Charge",
    meta: "Independent pharmacy · 2 locations · Bronx, NY",
    initials: "PC",
    surface: "bg-lilac-050",
    avatar: "bg-lilac-300",
  },
  {
    title: "Bookkeeping and the website came from the same contract",
    quote:
      "We needed month-end cleaned up and a project portal our clients could actually log into. Getting both from one team meant nobody could blame the other one. The portal shipped in the same quarter the books got current.",
    role: "Principal",
    meta: "Structural engineering firm · Long Island City, NY · 18 staff",
    initials: "PE",
    surface: "bg-blush-050",
    avatar: "bg-blush-300",
  },
];

/**
 * The tools a small practice or firm actually runs, not the enterprise stack.
 * These are what a prospect scans for their own software before they call.
 */
export const INTEGRATIONS: string[][] = [
  ["Dentrix", "Open Dental", "Athenahealth", "eClinicalWorks", "Clio", "MyCase", "QuickBooks", "Xero"],
  ["Salesforce", "HubSpot", "Google Workspace", "Microsoft 365", "RingCentral", "Follow Up Boss", "Gusto", "Square"],
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      { label: "Small business support", href: "/services/small-business" },
      { label: "Front desk & customer calls", href: "/services/customer-service" },
      { label: "Bookkeeping & accounting", href: "/services/finance-and-accounting" },
      { label: "IT support", href: "/services/it-outsourcing" },
      { label: "All BPO solutions", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/" },
      { label: "Who we work with", href: "/#proof" },
      { label: "Insights", href: "/resources" },
      { label: "Careers", href: "/" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Design system", href: "/design-system" },
      { label: "Playbooks", href: "/resources" },
      { label: "Benchmarks", href: "/resources" },
      { label: "Security", href: "/" },
      { label: "Status", href: "/" },
    ],
  },
];

export const COMPLIANCE_BADGES = [
  "HIPAA compliant",
  "SOC 2 Type II",
  "CCPA & state privacy ready",
  "PCI DSS",
];
