import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const payrollOutsourcing: ServiceContent = {
  slug: "payroll-outsourcing",
  name: "Payroll Outsourcing",
  accent: "mint",
  eyebrow: "Payroll",
  summary:
    "Multi-country payroll processing, statutory filing and year-end — run to a published calendar, with a parallel run before you commit.",
  trustLabel: "Paying people accurately for",

  sections: {
    benefits: {
      title: "What payroll should stop costing you.",
      body: "Payroll is judged almost entirely on errors and lateness. These four are what we baseline and report against every cycle.",
    },
    process: {
      title: "Parallel run first, always.",
      body: "Six phases over about six weeks. Two parallel cycles are non-negotiable — payroll is the one process where a bad go-live is unrecoverable.",
    },
    tech: {
      title: "Payroll platforms and the systems around them.",
      body: "We run yours, or implement one in your name. Employee data stays inside your controller responsibilities either way.",
    },
    why: {
      title: "Why nobody on this account has missed a pay date.",
      body: "Payroll errors are rarely calculation mistakes. They are handover failures, missed cut-offs and a single person with all the knowledge.",
    },
    cases: {
      title: "Payrolls we run.",
      body: "Three engagements measured on accuracy, filing compliance, and the risk removed from a single-person dependency.",
    },
    faq: {
      title: "Accuracy, liability and coverage.",
      body: "The questions to ask before moving something as unforgiving as payroll.",
    },
  },

  hero: {
    title: "Payroll that has never missed a pay date.",
    highlight: "two parallel cycles",
    body: "Multi-country processing, statutory filing and year-end run to a published calendar by a named team — with two parallel cycles matched against your current output before we take responsibility for anything.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Onboarding for the new tax year now",
    chips: [
      { value: "99.98%", label: "Pay stub accuracy across managed payrolls" },
      { value: "0", label: "Missed pay dates since 2019" },
      { value: "23", label: "Countries covered" },
    ],
    figure: "pipeline",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The process where being nearly right is not enough.",
    body: "Payroll is the only back-office function where a small error becomes a personal problem for an employee and a regulatory one for you, in the same week. It is also, in most companies, run by one person with no documented backup.",
    panels: [
      {
        heading: "What it is",
        body: "A payroll pod — processors, a qualified payroll manager and a compliance reviewer — running your cycles end to end on a published calendar.",
      },
      {
        heading: "Who it's for",
        body: "Companies from 50 to 20,000 employees, multi-country groups, and any business where payroll currently depends on one individual with no cover.",
      },
      {
        heading: "The business case",
        body: "Removal of key-person risk, accurate and on-time filing, fewer employee queries, and a documented process that survives someone resigning.",
      },
      {
        heading: "Why us",
        body: "Two full parallel cycles before we take responsibility. It costs us two months and removes essentially all of the transition risk from you.",
      },
    ],
    figure: "layers",
  },

  included: {
    eyebrow: "Scope",
    title: "Gross to net, filing to year-end.",
    body: "One monthly rate by headcount band. Statutory filing, year-end and employee query handling are inside it rather than billed as extras.",
    items: [
      "Payroll data collection, validation and variance checking",
      "Gross-to-net calculation across all pay elements",
      "Statutory deductions, 401(k) and auto-enrollment administration",
      "Benefits, pre-tax deductions and expense processing",
      "Pay stub production and secure distribution",
      "Payment file preparation for your approval and release",
      "Statutory filing: RTI, FPS, EPS and local equivalents",
      "Year-end processing, P60s, P11Ds and local equivalents",
      "Starters, leavers and mid-cycle change processing",
      "Employee payroll query handling and resolution",
      "Payroll reconciliation to the general ledger",
      "Statutory absence: sick leave, FMLA and parental leave",
    ],
    note: "Payment release always stays with your authorized signatories. We prepare, reconcile and evidence the payment file; your team approves and releases it. That separation is never varied.",
    figure: "network",
  },

  benefits: [
    {
      title: "Pay dates that hold, without exception",
      body: "A published calendar with cut-offs, a named processor and a named reviewer for every cycle, and documented cover. Since 2019 we have not missed a pay date on any managed payroll.",
      metric: { value: 0, label: "Missed pay dates across all managed payrolls since 2019" },
      link: { label: "See the cycle calendar", href: "#process" },
      figure: "pulse",
    },
    {
      title: "Errors caught before the pay stub, not after",
      body: "Variance checking against the prior cycle flags anything unusual before calculation completes. A payroll error found afterwards costs an off-cycle payment, an apology and a great deal of trust.",
      metric: { value: 99.98, decimals: 2, suffix: "%", label: "Pay stub accuracy across managed payrolls" },
      link: { label: "How checking works", href: "#whats-included" },
      figure: "dashboard",
    },
    {
      title: "Key-person risk removed",
      body: "In most companies payroll runs on one person's undocumented knowledge. Every process here is written down and every cycle has a trained second, so a resignation stops being an emergency.",
      metric: { value: 100, suffix: "%", label: "Of processes documented with a named backup" },
      link: { label: "Talk about your current cover", href: "#contact" },
      figure: "layers",
    },
    {
      title: "Filing that is never late",
      body: "Statutory submissions are tracked on the same calendar as the payroll cycle, with confirmation evidenced. Filing penalties are entirely avoidable and almost always caused by a process gap rather than a knowledge one.",
      metric: { value: 100, suffix: "%", label: "Statutory filings submitted on time" },
      link: { label: "See coverage by country", href: "#faq" },
      figure: "network",
    },
  ],

  process: [
    {
      title: "Payroll audit",
      duration: "Week 1",
      body: "Pay elements, populations, 401(k) plans, benefits, historic errors and current documentation. We report where the process depends on undocumented knowledge, which is usually the real risk.",
    },
    {
      title: "Calendar & controls",
      duration: "Week 1–2",
      body: "A published cycle calendar with cut-offs, the approval matrix, variance thresholds and the separation between preparation and payment release, agreed with your finance team.",
    },
    {
      title: "Setup & data migration",
      duration: "Week 2–3",
      body: "System configuration, pay element mapping and employee data validation. Every discrepancy between systems is resolved before a parallel run begins rather than during one.",
    },
    {
      title: "First parallel run",
      duration: "Week 4",
      body: "We process a complete cycle alongside your current payroll and reconcile to the penny. Any variance is investigated and explained before proceeding.",
    },
    {
      title: "Second parallel run",
      duration: "Week 5",
      body: "A second full cycle, including a starter, a leaver and a mid-cycle change. Two clean parallels are the condition for go-live; we will not shorten this.",
    },
    {
      title: "Go live & run",
      duration: "Week 6 onward",
      body: "The pod takes primary responsibility with your payroll manager reviewing before release, easing to sampling once two live cycles have run clean. Monthly reporting on accuracy, queries and filing status.",
    },
  ],

  tech: [
    { name: "ADP", category: "Payroll platform" },
    { name: "Sage Payroll", category: "Payroll platform" },
    { name: "Workday Payroll", category: "Payroll platform" },
    { name: "Dayforce", category: "Payroll platform" },
    { name: "Xero Payroll", category: "Payroll platform" },
    { name: "Deel", category: "Global payroll" },
    { name: "Papaya Global", category: "Global payroll" },
    { name: "ADP", category: "US payroll" },
    { name: "Paychex", category: "US payroll" },
    { name: "Gusto", category: "US payroll" },
    { name: "Fidelity", category: "401(k)" },
    { name: "Empower", category: "401(k)" },
    { name: "BambooHR", category: "HRIS" },
    { name: "NetSuite", category: "General ledger" },
    { name: "Power BI", category: "Reporting" },
  ],

  differentiators: [
    {
      title: "Two parallel cycles, always",
      body: "We never take responsibility until two complete cycles have reconciled to the penny against your current payroll, including a starter, a leaver and a mid-cycle change.",
    },
    {
      title: "Named processor and named reviewer",
      body: "Every cycle has both, plus a documented backup for each. No cycle is ever run and checked by the same person.",
    },
    {
      title: "Payment release stays with you",
      body: "We prepare, reconcile and evidence the payment file. Your authorized signatories approve and release it. That separation is written into the process and never varied.",
    },
    {
      title: "Qualified payroll managers",
      body: "CIPP-qualified or local equivalent on every pod, not only processors. Statutory treatment questions get answered by someone accountable for the answer.",
    },
    {
      title: "Documented, so it survives people",
      body: "Every pay element, scheme and exception is written down and maintained. The single biggest payroll risk in most companies is one person's memory.",
    },
    {
      title: "One team across countries",
      body: "Twenty-three countries under one calendar, one reporting pack and one point of contact — rather than a different local provider and a different format for each market.",
    },
  ],

  cases: [
    {
      industry: "Retail",
      title: "Nine thousand employees across four countries, one calendar",
      challenge:
        "Four local payroll providers, four reporting formats, four sets of deadlines, and no consolidated view of employment cost until six weeks after month end.",
      solution:
        "Consolidation onto one pod running all four countries to a single published calendar, with a unified reporting pack reconciled to the general ledger each cycle.",
      results: [
        { value: 4, label: "Countries on one calendar" },
        { value: 9000, label: "Employees paid monthly" },
        { value: 31, suffix: "%", label: "Lower total payroll operating cost" },
      ],
      accent: "mint",
      figure: "network",
    },
    {
      industry: "Manufacturing",
      title: "Removing a twenty-year single point of failure",
      challenge:
        "A payroll manager retiring after twenty-two years, with most of the process undocumented and no trained successor anywhere in the business.",
      solution:
        "A knowledge capture program run alongside her final four months, two parallel cycles before her departure, and full documentation of every exception she had been carrying.",
      results: [
        { value: 2, label: "Clean parallel cycles before handover" },
        { value: 0, label: "Errors in the first live cycle" },
        { value: 148, label: "Undocumented exceptions captured" },
      ],
      accent: "sky",
      figure: "layers",
    },
    {
      industry: "Hospitality",
      title: "Weekly payroll for a workforce that changes constantly",
      challenge:
        "Two thousand hourly staff on weekly pay with high turnover, variable hours and a persistent error rate causing roughly forty off-cycle corrections a month.",
      solution:
        "Automated hours import with validation rules, variance checking against the prior week, and a same-day query resolution route for employees.",
      results: [
        { value: 99.98, decimals: 2, suffix: "%", label: "Pay stub accuracy" },
        { value: 3, label: "Off-cycle corrections monthly, from 40" },
        { value: 62, suffix: "%", label: "Fewer payroll queries" },
      ],
      accent: "sun",
      figure: "dashboard",
    },
  ],

  quotes: [
    {
      quote:
        "They refused to go live until two parallel cycles reconciled exactly. Our previous provider went live on trust and it took four months to recover.",
      name: "Diane Whitlock",
      role: "Finance Director",
      company: "Northwind",
      initials: "DW",
      rating: 5,
    },
    {
      quote:
        "Our payroll manager retired after twenty-two years. Everything she knew is now written down, which is worth more than the cost saving.",
      name: "Krzysztof Nowak",
      role: "Head of Shared Services",
      company: "Peakline",
      initials: "KN",
      rating: 5,
    },
    {
      quote:
        "Forty off-cycle corrections a month down to three. Our staff stopped assuming their pay stub would be wrong.",
      name: "Marcia Fontaine",
      role: "People Director",
      company: "Duonode",
      initials: "MF",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How do you guarantee we will not have a bad first cycle?",
      answer:
        "Two complete parallel runs reconciled to the penny against your current payroll, including a starter, a leaver and a mid-cycle change. We will not shorten this, even when a client asks us to.",
    },
    {
      question: "Who releases the payment?",
      answer:
        "Your authorized signatories, always. We prepare, reconcile and evidence the payment file; your team approves and releases. The pod never holds payment authority.",
    },
    {
      question: "Which countries do you cover?",
      answer:
        "Twenty-three, including the US, Canada, Mexico, Ireland, most of Western Europe, Poland, India, the Philippines, Australia and several Latin American markets. We will decline a market rather than learn it on your payroll.",
    },
    {
      question: "Who is liable if there is an error?",
      answer:
        "Errors caused by our processing are corrected at our cost, including any off-cycle payment charges and penalty exposure, as set out in the contract. Errors from data supplied late or incorrectly are handled differently, and the boundary is defined up front.",
    },
    {
      question: "Do you handle statutory filing?",
      answer:
        "Yes — RTI, FPS, EPS and local equivalents, tracked on the same calendar as the cycle with submission confirmations evidenced. Year-end, P60s and P11Ds are included.",
    },
    {
      question: "Can you run weekly and biweekly payrolls?",
      answer:
        "Yes, including mixed-frequency populations. High-frequency payrolls with variable hours benefit most from automated validation, because that is where manual error rates are highest.",
    },
    {
      question: "Do you handle employee payroll queries?",
      answer:
        "Yes, directly with employees where you prefer, or routed through your HR team. Query resolution is included and reported monthly — recurring query themes usually point at a process gap worth fixing.",
    },
    {
      question: "How is payroll data protected?",
      answer:
        "You remain data controller; we process under a DPA reviewed by your privacy team. ISO 27001 certified and SOC 2 Type II audited, with segregated access, encrypted pay stub distribution and quarterly access review.",
    },
    {
      question: "Can you work in our existing payroll software?",
      answer:
        "Yes, under your licenses. Where you have no system or the current one is the constraint, we will implement one in your name — never in ours, so you are never locked to us by the platform.",
    },
    {
      question: "How long does transition take?",
      answer:
        "About six weeks, driven by the two parallel cycles rather than by setup. Where a tax year boundary is involved, we usually recommend timing go-live around it.",
    },
    {
      question: "What happens at year end?",
      answer:
        "Year-end processing, statutory documents and reconciliation are inside the monthly rate. Additional capacity for year-end comes from the same hub at no uplift.",
    },
    {
      question: "How is it priced?",
      answer:
        "A monthly rate by headcount band and pay frequency, with country coverage priced per market. Filing, year-end and query handling are included, so the quoted figure is what you pay.",
    },
  ],

  related: [
    "hr-outsourcing",
    "hr-vs-peo-guide",
    "finance-and-accounting",
    "hr-for-retail",
    "finance-outsourcing",
    "small-business",
  ],

  cta: {
    title: "Get a payroll audit before you move anything.",
    body: "One week, a fixed fee, and a written report on your pay elements, exceptions, documentation gaps and key-person risk. Yours whether or not you transition.",
  },

  seo: {
    title: "Payroll Outsourcing | Multi-Country Payroll & Statutory Filing — Xevantis",
    description:
      "Managed payroll across 23 countries with two parallel cycles before go-live, 99.98% pay stub accuracy and no missed pay dates since 2019. Payment release always stays with you.",
  },
};
