import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const payrollOutsourcing: ServiceContent = {
  slug: "payroll-outsourcing",
  name: "Payroll Outsourcing",
  accent: "mint",
  eyebrow: "Payroll",
  summary:
    "Payroll, tax filings and year-end run to a published calendar — including the state and city rules a small office keeps getting caught by.",
  trustLabel: "Paying people accurately at",

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
    body: "Processing, tax filings and year-end run to a published calendar by a named person — with two parallel cycles matched against your current output before we take responsibility for anything.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Onboarding for the new tax year now, in all 50 states",
    chips: [
      { value: "99.98%", label: "Pay stub accuracy across the payrolls we run" },
      { value: "0", label: "Missed pay dates since 2019" },
      { value: "50", label: "States covered, plus local filings" },
    ],
    figure: "pipeline",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The process where being nearly right is not enough.",
    body: "Payroll is the one function where a small error becomes a personal problem for a member of your staff and a regulatory one for you, in the same week. It is also, in most small offices, run by one person with no written backup and no cover.",
    panels: [
      {
        heading: "What it is",
        body: "A named payroll specialist and a compliance reviewer running your cycles end to end on a published calendar, in your own payroll software.",
      },
      {
        heading: "Who it's for",
        body: "Practices, firms and offices from 5 to 500 staff — particularly anywhere payroll currently depends on one person with no documented backup, which is most of them.",
      },
      {
        heading: "The business case",
        body: "The key-person risk removed, filings on time, fewer staff questions, and a written process that survives somebody resigning in the middle of a cycle.",
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
      "Gross-to-net calculation across all pay types",
      "Federal, state and local tax withholding and deposits",
      "401(k), benefits and pre-tax deduction administration",
      "Pay stub production and secure distribution",
      "Payment file preparation for your approval and release",
      "Quarterly filings: 941, state withholding and unemployment",
      "Year-end processing, W-2s and 1099s",
      "New hires, terminations and mid-cycle change processing",
      "New hire state reporting and garnishment administration",
      "Staff payroll question handling and resolution",
      "Paid leave administration: sick, family and state programs",
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
      body: "Federal, state and local submissions are tracked on the same calendar as the payroll cycle, with confirmations evidenced. Filing penalties are entirely avoidable and almost always caused by a process gap rather than a knowledge one.",
      metric: { value: 100, suffix: "%", label: "Tax filings submitted on time" },
      link: { label: "See state coverage", href: "#faq" },
      figure: "network",
    },
  ],

  process: [
    {
      title: "Payroll audit",
      duration: "Week 1",
      body: "Pay types, staff groups, 401(k) plans, benefits, past errors and what is actually written down. We report where the process depends on one person's memory, which is usually the real risk.",
    },
    {
      title: "Calendar & controls",
      duration: "Week 1–2",
      body: "A published cycle calendar with cut-offs, the approval matrix, variance thresholds and the separation between preparation and payment release, agreed with your finance team.",
    },
    {
      title: "Setup & data migration",
      duration: "Week 2–3",
      body: "System configuration, pay type mapping and employee data validation. Every discrepancy between systems is resolved before a parallel run begins rather than during one.",
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
      body: "They take primary responsibility with you reviewing before release, easing to spot checks once two live cycles have run clean. Monthly reporting on accuracy, questions and filing status.",
    },
  ],

  tech: [
    { name: "Gusto", category: "Payroll" },
    { name: "ADP", category: "Payroll" },
    { name: "Paychex", category: "Payroll" },
    { name: "Rippling", category: "Payroll" },
    { name: "Paylocity", category: "Payroll" },
    { name: "QuickBooks Payroll", category: "Payroll" },
    { name: "Xero Payroll", category: "Payroll" },
    { name: "Homebase", category: "Time & scheduling" },
    { name: "When I Work", category: "Time & scheduling" },
    { name: "Deputy", category: "Time & scheduling" },
    { name: "Guideline", category: "401(k)" },
    { name: "Fidelity", category: "401(k)" },
    { name: "BambooHR", category: "HR system" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Xero", category: "Accounting" },
    { name: "Excel", category: "Reporting" },
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
      industry: "Medical group · NY, NJ & CT",
      title: "Three states, three sets of rules, one calendar",
      challenge:
        "A 90-person group with staff across three states, each with its own withholding, leave and pay-statement requirements. Payroll was run in three places and nobody had a consolidated view of employment cost.",
      solution:
        "One specialist running all three states to a single published calendar, with the state-specific requirements written into the checklist rather than remembered — including the New York accrual balances that must appear on the pay statement.",
      results: [
        { value: 3, label: "States on one calendar" },
        { value: 90, label: "Staff paid every cycle" },
        { value: 31, suffix: "%", label: "Lower total payroll cost" },
      ],
      accent: "mint",
      figure: "network",
    },
    {
      industry: "Engineering firm · Long Island, NY",
      title: "Removing a twenty-year single point of failure",
      challenge:
        "An office manager retiring after twenty-two years, with the entire payroll process in her head and no trained successor anywhere in the firm.",
      solution:
        "A knowledge capture program alongside her final four months, two parallel cycles run before she left, and every exception she had been quietly carrying written down.",
      results: [
        { value: 2, label: "Clean parallel cycles before handover" },
        { value: 0, label: "Errors in the first live cycle" },
        { value: 148, label: "Undocumented exceptions captured" },
      ],
      accent: "sky",
      figure: "layers",
    },
    {
      industry: "Home care agency · Bronx, NY",
      title: "Weekly payroll for a workforce that changes constantly",
      challenge:
        "Two hundred hourly aides on weekly pay with high turnover, variable hours across multiple clients, and a persistent error rate producing roughly forty off-cycle corrections a month.",
      solution:
        "Automated hours import with validation rules, week-on-week variance checking, and a same-day route for a member of staff to get a pay question answered.",
      results: [
        { value: 99.98, decimals: 2, suffix: "%", label: "Pay stub accuracy" },
        { value: 3, label: "Off-cycle corrections monthly, from 40" },
        { value: 62, suffix: "%", label: "Fewer payroll questions" },
      ],
      accent: "sun",
      figure: "dashboard",
    },
  ],

  quotes: [
    {
      quote:
        "They refused to go live until two parallel cycles reconciled exactly. Our previous provider went live on trust and it took four months to recover.",
      name: "Practice Administrator",
      role: "Medical group, 90 staff",
      company: "NY, NJ & CT",
      initials: "PA",
      rating: 5,
    },
    {
      quote:
        "Our office manager retired after twenty-two years. Everything she knew is written down now, which is worth more to me than the cost saving.",
      name: "Principal",
      role: "Engineering firm",
      company: "Long Island, NY",
      initials: "PR",
      rating: 5,
    },
    {
      quote:
        "Forty corrections a month down to three. Our aides stopped assuming their pay stub would be wrong, which changed how they talk about working here.",
      name: "Agency Director",
      role: "Licensed home care agency",
      company: "Bronx, NY",
      initials: "AD",
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
        "Your authorized signatories, always. We prepare, reconcile and evidence the payment file; you approve and release it. Nobody here ever holds payment authority on your account.",
    },
    {
      question: "Which states do you cover?",
      answer:
        "All fifty, plus the local filings that catch people out — New York City and Yonkers withholding, state paid family leave programs, and local occupational taxes. If you have staff in a state with an unusual requirement, we will tell you before we quote rather than learn it on your payroll.",
    },
    {
      question: "Who is liable if there is an error?",
      answer:
        "Errors caused by our processing are corrected at our cost, including any off-cycle payment charges and penalty exposure, as set out in the contract. Errors from data supplied late or incorrectly are handled differently, and the boundary is defined up front.",
    },
    {
      question: "Do you handle the tax filings?",
      answer:
        "Yes — federal 941s and deposits, state withholding and unemployment, and local filings, all tracked on the same calendar as the pay cycle with submission confirmations kept. Year-end W-2s and 1099s are included.",
    },
    {
      question: "Can you run weekly and biweekly payrolls?",
      answer:
        "Yes, including mixed-frequency populations. High-frequency payrolls with variable hours benefit most from automated validation, because that is where manual error rates are highest.",
    },
    {
      question: "Do you answer payroll questions from our staff?",
      answer:
        "Yes, directly with your staff if you prefer, or routed through you. It is included and reported monthly — a recurring question usually points at a process gap worth fixing rather than at a confused employee.",
    },
    {
      question: "How is payroll data protected?",
      answer:
        "SOC 2 Type II audited, with segregated access, encrypted pay stub distribution, managed devices and quarterly access review. Everyone touching payroll data is under a signed confidentiality agreement.",
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
        "A monthly rate by headcount band and pay frequency, with an addition where you have staff in several states. Filing, year-end and answering your staff's questions are included, so the quoted figure is what you pay.",
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
    title: "Payroll Outsourcing for Small Businesses | All 50 States — Xevantis",
    description:
      "Managed payroll, tax filings and year-end for practices, firms and local offices across the US, with two parallel cycles before go-live, 99.98% pay stub accuracy and no missed pay dates since 2019. You always release the payment.",
  },
};
