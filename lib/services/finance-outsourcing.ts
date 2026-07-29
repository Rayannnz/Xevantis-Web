import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const financeOutsourcing: ServiceContent = {
  slug: "finance-outsourcing",
  name: "Finance Outsourcing",
  accent: "lilac",
  eyebrow: "Finance Function",
  summary:
    "A finance function you cannot yet justify hiring — monthly reporting, cash forecasting and a fractional controller who tells you what the numbers mean.",
  trustLabel: "Acting as the finance function for",

  sections: {
    benefits: {
      title: "What a full finance function changes.",
      body: "Transactional outsourcing lowers cost. A finance function changes decisions, which is a different and larger return.",
    },
    process: {
      title: "From diagnostic to numbers you actually trust.",
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
      body: "Three businesses at different stages: one opening a second location, one whose bookkeeper left mid-year, and one preparing to sell the practice.",
    },
    faq: {
      title: "Seniority, independence and scope.",
      body: "What a fractional finance function can and cannot do, stated plainly.",
    },
  },

  hero: {
    title: "A finance person, not just a bookkeeper.",
    highlight: "before they can justify",
    body: "Monthly reporting that means something, cash forecasting, pricing and profitability work, and a fractional controller on the end of the phone — the senior finance help most practices need long before they can justify a six-figure hire.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Fractional controllers available from January",
    chips: [
      { value: "Day 5", label: "Numbers in your inbox every month" },
      { value: "13 wk", label: "Rolling cash forecast, updated weekly" },
      { value: "1/3", label: "Cost of the equivalent permanent hire" },
    ],
    figure: "pulse",
  },

  overview: {
    eyebrow: "Service overview",
    title: "Everything above the ledger, staffed properly.",
    body: "Bookkeeping tells you what happened. A finance function tells you what it means and what to do about it — which provider is actually profitable, whether the second location works, what next quarter's cash looks like. Most owners buy the first, need the second, and bridge the gap with a spreadsheet on a Sunday.",
    panels: [
      {
        heading: "What it is",
        body: "A fractional controller supported by an accountant and an analyst, delivering monthly reporting, forecasting and profitability work alongside whoever does your bookkeeping.",
      },
      {
        heading: "Who it's for",
        body: "Practices and firms roughly $2m to $50m in revenue: multi-location clinics and dental groups, growing law and engineering firms, agencies opening a second office, and any owner whose bookkeeper just resigned.",
      },
      {
        heading: "The business case",
        body: "Senior finance judgment at roughly a third of a permanent hire, available immediately, with no severance exposure if what you need changes shape in a year.",
      },
      {
        heading: "Why us",
        body: "The controller is supported by a small team, so you get senior judgment without paying senior rates for the spreadsheet work underneath it.",
      },
    ],
    figure: "layers",
  },

  included: {
    eyebrow: "Scope",
    title: "Reporting, planning, cash and the conversations around them.",
    body: "One monthly rate by shape. Partner meetings, bank calls and lender reporting are inside it rather than billed hourly.",
    items: [
      "Monthly accounts with plain-English commentary and variance analysis",
      "A partner or owner meeting each month, attended in person or by video",
      "Annual budgeting and quarterly reforecasting",
      "Rolling 13-week cash forecast, updated weekly",
      "Profitability by location, provider, service line or matter type",
      "Pricing and fee schedule analysis",
      "A short dashboard of the numbers you should actually watch",
      "Banking relationships, line of credit and covenant tracking",
      "Lender and landlord reporting packs",
      "Modeling for a second location, an equipment purchase or a hire",
      "Year-end coordination with your CPA",
      "Practice valuation support and preparation for a sale",
    ],
    note: "Where you already have bookkeeping — in-house or outsourced — we work above it. Where you do not, our Bookkeeping & Accounting service handles that layer under the same contract, so nobody can blame the other one.",
    figure: "dashboard",
  },

  benefits: [
    {
      title: "Numbers early enough to act on",
      body: "Accounts with real commentary by working day five, not a rough figure at the end of the following month. Late numbers are only useful for filing a tax return; early numbers change the quarter they describe.",
      metric: { value: 5, suffix: " days", label: "Working days to monthly accounts with commentary" },
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
      body: "A controller in the room for pricing, a new location, an equipment purchase or a partner buy-in, at roughly a third of the loaded cost of hiring one. Scale it up or down as the practice changes.",
      metric: { value: 33, suffix: "%", label: "Of an equivalent permanent hire's loaded cost" },
      link: { label: "Talk about the right shape", href: "#contact" },
      figure: "network",
    },
    {
      title: "A business that is easier to borrow against — or sell",
      body: "Banks and buyers respond to clean reporting, defensible forecasts and quick answers to their questions. Finance quality is rarely why a deal happens, but it is very often why one stalls.",
      metric: { value: 4, suffix: " wks", label: "Median time saved answering a lender or buyer" },
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
      body: "Chart of accounts review, the handful of numbers worth watching, and the format of the monthly report, agreed with you and your CPA before the first cycle runs.",
    },
    {
      title: "First cycle",
      duration: "Month 2",
      body: "The first full close, monthly report and cash forecast produced in the new format, with your existing people involved so nothing depends on a single handover conversation.",
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
    { name: "QuickBooks", category: "Accounting" },
    { name: "Xero", category: "Accounting" },
    { name: "Sage Intacct", category: "Accounting" },
    { name: "Fathom", category: "Reporting" },
    { name: "Float", category: "Cash forecasting" },
    { name: "Looker Studio", category: "Dashboards" },
    { name: "Power BI", category: "Dashboards" },
    { name: "Excel", category: "Modeling" },
    { name: "Google Sheets", category: "Collaboration" },
    { name: "Open Dental", category: "Dental production data" },
    { name: "Athenahealth", category: "Medical production data" },
    { name: "Clio", category: "Legal billing data" },
    { name: "Deltek", category: "Project accounting" },
    { name: "Bill.com", category: "Bill pay" },
    { name: "Square", category: "Payments" },
    { name: "Stripe", category: "Payments" },
  ],

  differentiators: [
    {
      title: "Senior people, genuinely",
      body: "Fractional controllers with fifteen years or more, most with direct experience of practices and firms your size. You meet them before engaging and they stay on your account.",
    },
    {
      title: "Layered so you are not overpaying",
      body: "The controller does controller work; an analyst does the spreadsheet work underneath. Paying senior rates for schedule preparation is the most common waste in fractional finance.",
    },
    {
      title: "In the room for the decisions",
      body: "Your monthly owner or partner meeting, bank calls and pricing discussions are included rather than billed hourly. A finance function that only reports is a reporting service.",
    },
    {
      title: "No commission, from anyone",
      body: "We hold no audit relationship, take no referral fee from software vendors or lenders, and do not sell you anything else. Recommendations carry no commercial interest of ours.",
    },
    {
      title: "Built to be replaced",
      body: "When you are ready for a permanent controller, we will write the role, sit on the panel and hand over. Several of our best references are practices that outgrew us.",
    },
    {
      title: "One contract with the bookkeeping",
      body: "Where you need the transactional layer too, the same contract covers it. No arguments between the people preparing the numbers and the person explaining them.",
    },
  ],

  cases: [
    {
      industry: "Dental group · Brooklyn, NY",
      title: "Deciding whether the third location actually worked",
      challenge:
        "Two profitable offices and a third opened eighteen months earlier that the owner suspected was losing money, with overhead allocated evenly across all three and no way to see which was true.",
      solution:
        "Costs rebuilt by location from source data, provider-level profitability, and a monthly report that showed each office standing on its own — including the shared costs the third office had been quietly carrying for the other two.",
      results: [
        { value: 5, suffix: " days", label: "To monthly numbers, from 6 weeks" },
        { value: 3, label: "Locations reported separately for the first time" },
        { value: 118, prefix: "$", suffix: "k", label: "Annual loss identified and closed" },
      ],
      accent: "lilac",
      figure: "dashboard",
    },
    {
      industry: "Engineering firm · Westchester County, NY",
      title: "Covering a controller exit mid-year",
      challenge:
        "A firm's only finance person resigning four weeks before year end, with a bank covenant to report on, a line of credit to renew and nobody internally who could do either.",
      solution:
        "A fractional controller in place within eight days, year-end and covenant reporting delivered on time, and a permanent recruitment process run in parallel rather than in a panic.",
      results: [
        { value: 8, suffix: " days", label: "To a controller in place" },
        { value: 100, suffix: "%", label: "Covenant deadlines met" },
        { value: 5, suffix: " mo", label: "Bridge until the permanent hire started" },
      ],
      accent: "sky",
      figure: "pipeline",
    },
    {
      industry: "Multi-specialty practice · Long Island, NY",
      title: "Finding the services that were losing money",
      challenge:
        "Growing revenue with flat profit, and a payer mix where reimbursement varied enormously by service line while overhead was spread evenly across all of them.",
      solution:
        "Costing rebuilt from scheduling and staffing data, revealing that four service lines consumed 60% of clinical time while contributing 9% of margin — two were repriced, one renegotiated, one dropped.",
      results: [
        { value: 4, label: "Service lines identified as loss-making" },
        { value: 6.1, decimals: 1, suffix: " pts", label: "Margin improvement" },
        { value: 13, suffix: " wks", label: "From engagement to decision" },
      ],
      accent: "mint",
      figure: "layers",
    },
  ],

  quotes: [
    {
      quote:
        "We were about to hire a controller we could not really afford. Two years later we did hire one, and by then we knew exactly what the role needed to be.",
      name: "Practice Owner",
      role: "Three-location dental group",
      company: "Brooklyn, NY",
      initials: "PO",
      rating: 5,
    },
    {
      quote:
        "Our controller resigned a month before year end. They had someone in place in eight days and our bank never knew anything had happened.",
      name: "Principal",
      role: "Engineering firm",
      company: "Westchester County, NY",
      initials: "PR",
      rating: 5,
    },
    {
      quote:
        "The thirteen-week cash forecast showed us a problem in March that we would have found in May. That is the whole thing, really.",
      name: "Managing Physician",
      role: "Multi-specialty practice",
      company: "Long Island, NY",
      initials: "MD",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How is this different from your bookkeeping service?",
      answer:
        "Bookkeeping covers the transactional layer — bills, claims, reconciliations, the close. This is everything above it: what the numbers mean, what next quarter's cash looks like, and whether the decision you are weighing actually works. Many clients take both under one contract.",
    },
    {
      question: "How senior are the fractional controllers?",
      answer:
        "Fifteen years or more, typically former controllers or finance directors, most with direct experience of practices and firms your size. You meet them before engaging and they stay on your account rather than rotating.",
    },
    {
      question: "How many days a month do we get?",
      answer:
        "Shaped to the business, commonly two to six controller days plus an accountant and analyst underneath. We size it during the diagnostic and adjust as things change.",
    },
    {
      question: "Will they actually meet with us?",
      answer:
        "Yes — a monthly owner or partner meeting, plus bank calls, are included in the rate. A finance function that only emails you a report is a reporting service, which is not what this is.",
    },
    {
      question: "Can you work alongside our existing bookkeeper or CPA?",
      answer:
        "Yes, and often we do. We work above the transactional layer wherever it sits, and we make your CPA's year-end faster and cheaper. Where the current arrangement is the actual constraint, we will say so rather than quietly work around it.",
    },
    {
      question: "Can you help us open a second location?",
      answer:
        "This is one of the most common reasons owners call us. We model the fit-out, the ramp, the staffing and the cash gap, and we will tell you if the numbers do not work — which is sometimes the answer.",
    },
    {
      question: "Can you help us get a loan or a line of credit?",
      answer:
        "We build the model, prepare what the bank asks for and answer their questions. We do not broker the loan or take a fee from a lender, which is a different role and one where the incentives get muddy.",
    },
    {
      question: "What if we want to sell the practice?",
      answer:
        "We prepare the financials a buyer will actually diligence, usually starting twelve to eighteen months out because that is how far back they will look. We are not brokers and take no success fee; we will introduce you to one if you want.",
    },
    {
      question: "What if we want to hire a permanent controller?",
      answer:
        "We will write the role, sit on the interview panel and hand over properly. Several of our strongest references are practices that outgrew the arrangement, which is the intended outcome.",
    },
    {
      question: "What does the diagnostic cost?",
      answer:
        "A fixed fee, typically two weeks of work, producing a written assessment of your reporting, controls, systems and cash with prioritized recommendations. You keep it regardless of what you do next.",
    },
    {
      question: "What is the minimum term?",
      answer:
        "Three months after the diagnostic, then month-to-month with 30 days' notice. Three months covers a full reporting cycle plus a reforecast, which is the minimum needed to judge the arrangement fairly.",
    },
    {
      question: "Which industries do you know well?",
      answer:
        "Medical and dental practices, pharmacies, law firms, engineering and architecture practices, accounting firms and real estate agencies. We will tell you if your industry is outside our depth rather than learn on your time.",
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
    title: "Fractional Controller & CFO for Small Businesses — Xevantis",
    description:
      "An outsourced finance function for practices and firms across the US: monthly reporting with commentary, 13-week cash forecasting, profitability by location or service line, and a fractional controller at a third of a permanent hire's cost.",
  },
};
