import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const financeOutsourcing: ServiceContent = {
  slug: "finance-outsourcing",
  name: "Finance Outsourcing",
  accent: "lilac",
  eyebrow: "Finance Function",
  summary:
    "A complete finance function — reporting, FP&A, treasury and a fractional controller — for companies not ready to hire one.",
  trustLabel: "Acting as the finance function for",

  sections: {
    benefits: {
      title: "What a full finance function changes.",
      body: "Transactional outsourcing lowers cost. A finance function changes decisions, which is a different and larger return.",
    },
    process: {
      title: "From diagnostic to a board pack you trust.",
      body: "Six phases. The first produces a written assessment of your finance operation that is yours regardless of what you do next.",
    },
    tech: {
      title: "Reporting, planning and treasury tooling.",
      body: "We implement what the size of the business justifies — which is usually less software than vendors would like.",
    },
    why: {
      title: "Why this beats hiring a finance director too early.",
      body: "A first senior finance hire is a six-figure bet made at the point you have least information about what you need.",
    },
    cases: {
      title: "Finance functions we run.",
      body: "Three companies at different stages: pre-Series B, post-acquisition, and one preparing for a sale.",
    },
    faq: {
      title: "Seniority, independence and scope.",
      body: "What a fractional finance function can and cannot do, stated plainly.",
    },
  },

  hero: {
    title: "A finance function, not just a ledger.",
    highlight: "before you can justify",
    body: "Management reporting, FP&A, cash forecasting and a fractional controller or CFO — the senior finance capability most companies need well before you can justify a six-figure permanent hire.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Fractional controllers available from January",
    chips: [
      { value: "Day 5", label: "Board pack in your inbox each month" },
      { value: "13 wk", label: "Rolling cash forecast, updated weekly" },
      { value: "1/3", label: "Cost of an equivalent permanent hire" },
    ],
    figure: "pulse",
  },

  overview: {
    eyebrow: "Service overview",
    title: "Everything above the ledger, staffed properly.",
    body: "Bookkeeping tells you what happened. A finance function tells you what it means and what to do about it. Most growing companies buy the first, need the second, and bridge the gap with a founder doing spreadsheets on Sunday.",
    panels: [
      {
        heading: "What it is",
        body: "A layered team: a fractional controller or CFO, a management accountant and an analyst, delivering reporting, planning and treasury alongside your existing bookkeeping.",
      },
      {
        heading: "Who it's for",
        body: "Companies between $2.5m and $95m revenue, private equity portfolio businesses needing tighter reporting, and groups whose finance leadership left mid-cycle.",
      },
      {
        heading: "The business case",
        body: "Senior finance judgment at roughly a third of a permanent hire's cost, available immediately, with no severance exposure if the shape of the need changes.",
      },
      {
        heading: "Why us",
        body: "The fractional controller is supported by a full pod, so you get senior judgment without paying senior rates for the work underneath it.",
      },
    ],
    figure: "layers",
  },

  included: {
    eyebrow: "Scope",
    title: "Reporting, planning, cash and the conversations around them.",
    body: "One monthly rate by pod shape. Board attendance, lender reporting and investor support are inside it rather than billed hourly.",
    items: [
      "Monthly management accounts with commentary and variance analysis",
      "Board pack preparation and attendance at board meetings",
      "Annual budgeting and quarterly reforecasting",
      "Rolling 13-week cash flow forecast, updated weekly",
      "Unit economics, margin analysis and pricing support",
      "KPI framework design and performance dashboards",
      "Treasury: banking relationships, facilities and covenant tracking",
      "Lender and investor reporting packs",
      "Business partnering with department heads on their budgets",
      "Financial modeling for scenarios, funding and investment cases",
      "Audit management and year-end coordination",
      "Finance process, systems and controls improvement",
    ],
    note: "Where you already have bookkeeping in place — internal or outsourced — we work above it. Where you do not, our Finance & Accounting pod handles the transactional layer under the same contract.",
    figure: "dashboard",
  },

  benefits: [
    {
      title: "Numbers early enough to act on",
      body: "Management accounts with real commentary by working day five, not a rough figure at the end of the following month. Late reporting is only useful for filing; early reporting changes the quarter it describes.",
      metric: { value: 5, suffix: " days", label: "Working days to management accounts with commentary" },
      link: { label: "See the reporting cycle", href: "#process" },
      figure: "dashboard",
    },
    {
      title: "Cash visibility thirteen weeks out",
      body: "A rolling weekly forecast built from receipts and commitments rather than from the annual budget. Most cash crises were visible eight weeks earlier to anyone modeling it properly.",
      metric: { value: 13, suffix: " wks", label: "Rolling cash forecast horizon, updated weekly" },
      link: { label: "How treasury is handled", href: "#whats-included" },
      figure: "pulse",
    },
    {
      title: "Senior judgment without the permanent hire",
      body: "A controller or CFO in the room for pricing, funding and investment decisions, at roughly a third of the loaded cost. You can scale the seniority up or down as the business changes.",
      metric: { value: 33, suffix: "%", label: "Of an equivalent permanent hire's loaded cost" },
      link: { label: "Talk about the right shape", href: "#contact" },
      figure: "network",
    },
    {
      title: "A business that is easier to fund",
      body: "Lenders and investors respond to clean reporting, defensible forecasts and quick answers in diligence. Finance quality is not usually why a deal happens, but it is often why one stalls.",
      metric: { value: 4, suffix: " wks", label: "Median diligence response time saved at raise" },
      link: { label: "See the case studies", href: "#work" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Diagnostic",
      duration: "Week 1–2",
      body: "A review of your reporting, controls, systems and cash process, delivered as a written assessment with prioritized recommendations. It is yours whether or not you engage us further.",
    },
    {
      title: "Shape the function",
      duration: "Week 2–3",
      body: "We propose the seniority mix and cadence the business actually needs — often less than expected — and where your existing people should sit within it.",
    },
    {
      title: "Reporting foundation",
      duration: "Week 3–6",
      body: "Chart of accounts review, KPI definitions, board pack template and the management accounts format, agreed with you and your investors before the first cycle runs.",
    },
    {
      title: "First cycle",
      duration: "Month 2",
      body: "The first full close, board pack and cash forecast produced under the new format, with your existing team involved so nothing depends on a single handover conversation.",
    },
    {
      title: "Planning",
      duration: "Month 2–3",
      body: "Budget or reforecast built bottom-up with department heads, plus a scenario model for the two or three decisions actually facing the business this year.",
    },
    {
      title: "Run & advise",
      duration: "Ongoing",
      body: "Monthly reporting and board attendance, weekly cash review, and quarterly reforecasting — with the controller available between cycles for the decisions that do not wait.",
    },
  ],

  tech: [
    { name: "NetSuite", category: "ERP" },
    { name: "Xero", category: "Accounting" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Sage Intacct", category: "Accounting" },
    { name: "Fathom", category: "Reporting" },
    { name: "Power BI", category: "Dashboards" },
    { name: "Looker Studio", category: "Dashboards" },
    { name: "Causal", category: "Financial modeling" },
    { name: "Anaplan", category: "Planning" },
    { name: "Float", category: "Cash forecasting" },
    { name: "Excel", category: "Modeling" },
    { name: "Google Sheets", category: "Collaboration" },
    { name: "Stripe", category: "Revenue data" },
    { name: "Snowflake", category: "Warehouse" },
    { name: "BlackLine", category: "Reconciliation" },
    { name: "Coupa", category: "Spend management" },
  ],

  differentiators: [
    {
      title: "Senior people, genuinely",
      body: "Fractional controllers and CFOs with fifteen years or more, most with sector-specific experience. You meet them before engaging and they stay on your account.",
    },
    {
      title: "Layered so you are not overpaying",
      body: "The controller does controller work; an analyst does the analysis underneath. Paying senior rates for schedule preparation is the most common waste in fractional finance.",
    },
    {
      title: "In the room for the decisions",
      body: "Board meetings, lender calls and pricing discussions are included rather than billed hourly. A finance function that only reports is a reporting service.",
    },
    {
      title: "Independent of your auditors",
      body: "We hold no audit relationship and take no commission from software or lenders. Recommendations carry no commercial interest of ours.",
    },
    {
      title: "Built to be replaced",
      body: "When you are ready for a permanent finance director, we will write the role, sit on the panel and hand over. Several of our best references are companies that outgrew us.",
    },
    {
      title: "One contract with the transactional layer",
      body: "Where you need bookkeeping too, the same contract covers it. No boundary disputes between the people preparing the numbers and the people explaining them.",
    },
  ],

  cases: [
    {
      industry: "SaaS",
      title: "Getting reporting investor-ready before a Series B",
      challenge:
        "Reporting on a cash basis, no cohort or unit economics, and a lead investor asking for metrics the company could not produce.",
      solution:
        "Revenue recognized properly, a cohort and unit economics model built from source data, and a monthly board pack rebuilt around the metrics the round would be judged on.",
      results: [
        { value: 5, suffix: " days", label: "To board pack, from 6 weeks" },
        { value: 3, suffix: " wks", label: "Diligence completed, from a projected 8" },
        { value: 24, prefix: "$", suffix: "m", label: "Round closed" },
      ],
      accent: "lilac",
      figure: "dashboard",
    },
    {
      industry: "Manufacturing",
      title: "Covering a finance director exit mid-year",
      challenge:
        "A finance director leaving four weeks before year end, with covenant reporting due and no internal successor.",
      solution:
        "A fractional controller in place within eight days, year-end and covenant reporting delivered on time, and a permanent recruitment process run in parallel.",
      results: [
        { value: 8, suffix: " days", label: "To a controller in place" },
        { value: 100, suffix: "%", label: "Covenant deadlines met" },
        { value: 5, suffix: " mo", label: "Bridge until the permanent hire started" },
      ],
      accent: "sky",
      figure: "pipeline",
    },
    {
      industry: "Consumer goods",
      title: "Finding the products that were losing money",
      challenge:
        "Growing revenue with flat profit, and a costing model that allocated overhead evenly across a range of 140 SKUs.",
      solution:
        "Activity-based costing rebuilt from production and logistics data, revealing that 22 SKUs consumed 60% of handling cost while contributing 9% of margin.",
      results: [
        { value: 22, label: "SKUs identified as loss-making" },
        { value: 6.1, decimals: 1, suffix: " pts", label: "Gross margin improvement" },
        { value: 13, suffix: " wks", label: "From engagement to decision" },
      ],
      accent: "mint",
      figure: "layers",
    },
  ],

  quotes: [
    {
      quote:
        "We were about to hire a finance director we could not really afford. Two years later we did hire one, and by then we knew exactly what the role needed to be.",
      name: "Gareth Mullan",
      role: "Chief Executive",
      company: "Solstice",
      initials: "GM",
      rating: 5,
    },
    {
      quote:
        "Our lead investor said the diligence pack was the cleanest they had seen from a company our size. That was entirely down to six months of preparation.",
      name: "Amelie Rousseau",
      role: "Founder",
      company: "Vertex Pay",
      initials: "AR",
      rating: 5,
    },
    {
      quote:
        "The thirteen-week cash forecast showed us a problem in March that we would have found in May. That is the whole value proposition.",
      name: "Nigel Braithwaite",
      role: "CEO",
      company: "Gridworks",
      initials: "NB",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How is this different from Finance & Accounting outsourcing?",
      answer:
        "Finance & Accounting covers the transactional layer — invoices, reconciliations, close. Finance Outsourcing is everything above it: reporting, planning, cash, treasury and senior judgment. Many clients take both under one contract.",
    },
    {
      question: "How senior are the fractional controllers?",
      answer:
        "Fifteen years or more, typically former financial controllers or finance directors, most with sector-specific background. You meet them before engaging and they stay on your account rather than rotating.",
    },
    {
      question: "How many days a month do we get?",
      answer:
        "Shaped to the business, commonly two to six controller days plus a management accountant and analyst underneath. We size it during the diagnostic and adjust as the business changes.",
    },
    {
      question: "Will they attend our board meetings?",
      answer:
        "Yes, board attendance and lender calls are included in the monthly rate. A finance function that only produces documents is a reporting service, which is not what this is.",
    },
    {
      question: "Can you work alongside our existing bookkeeper or accountant?",
      answer:
        "Yes, and often we do. We work above the transactional layer wherever it sits. Where the current arrangement is the constraint, we will say so during the diagnostic rather than quietly work around it.",
    },
    {
      question: "Do you help with fundraising?",
      answer:
        "We build the model, prepare the data room and answer financial diligence. We do not act as a corporate finance advisor or take a success fee — that is a different regulated role and we will introduce you to one.",
    },
    {
      question: "What if we want to hire a permanent finance leader?",
      answer:
        "We will write the role, sit on the interview panel and hand over properly. Several of our strongest references are companies that outgrew the arrangement, which is the intended outcome.",
    },
    {
      question: "Can you help a private equity portfolio company?",
      answer:
        "Yes. Portfolio reporting, covenant tracking, 100-day plans and integration reporting are common engagements. We work to the sponsor's reporting requirements from the first cycle.",
    },
    {
      question: "What does the diagnostic cost?",
      answer:
        "A fixed fee, typically two weeks of work, producing a written assessment of reporting, controls, systems and cash with prioritized recommendations. You keep it regardless of what you do next.",
    },
    {
      question: "Are you independent of our auditors and lenders?",
      answer:
        "Completely. We hold no audit relationship and take no commission from software vendors, lenders or brokers. Any recommendation we make carries no commercial interest of ours.",
    },
    {
      question: "What is the minimum term?",
      answer:
        "Three months after the diagnostic, then month-to-month with 30 days' notice. Three months covers a full reporting cycle plus a reforecast, which is the minimum to judge the arrangement.",
    },
    {
      question: "Which sectors do you know well?",
      answer:
        "SaaS and subscription, manufacturing and distribution, professional services, consumer goods and healthcare. We will tell you if your sector is outside our depth rather than learn on your time.",
    },
  ],

  related: [
    "finance-and-accounting",
    "ma-deal-flow",
    "payroll-outsourcing",
    "small-business",
    "it-outsourcing",
    "admin-support",
  ],

  cta: {
    title: "Start with a diagnostic, not a contract.",
    body: "Two weeks, a fixed fee, and a written assessment of your finance operation with prioritized recommendations. Yours to keep and act on with or without us.",
  },

  seo: {
    title: "Finance Outsourcing | Fractional CFO, FP&A & Reporting — Xevantis",
    description:
      "A complete outsourced finance function: management reporting, FP&A, 13-week cash forecasting, treasury and a fractional controller or CFO at a third of a permanent hire's cost.",
  },
};
