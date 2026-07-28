import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const financeAndAccounting: ServiceContent = {
  slug: "finance-and-accounting",
  name: "Finance & Accounting",
  accent: "mint",
  eyebrow: "Finance & Accounting",
  summary:
    "Accounts payable, receivable, reconciliations and month-end close, run by qualified accountants in your ledger.",
  trustLabel: "Closing the books for",

  sections: {
    benefits: {
      title: "What a properly staffed finance back office returns.",
      body: "Four numbers we baseline before transition. Cost per invoice is the easiest to move; the other three are worth more.",
    },
    process: {
      title: "From process capture to a clean close.",
      body: "Six phases over about three weeks. Parallel running through one full close is non-negotiable, because month-end is where errors surface.",
    },
    tech: {
      title: "Your ledger, your controls.",
      body: "We work inside your accounting stack under your approval limits. Nothing is re-keyed into a system of ours.",
    },
    why: {
      title: "Why finance directors stop worrying about the close.",
      body: "Transactional finance is outsourced badly more often than almost anything else, usually because the controls were an afterthought.",
    },
    cases: {
      title: "Finance functions we run.",
      body: "Three engagements measured on days to close, invoice accuracy, and the working capital released by chasing receivables properly.",
    },
    faq: {
      title: "Controls, qualifications and segregation of duties.",
      body: "The questions your auditor will ask about this arrangement, answered in advance.",
    },
  },

  hero: {
    title: "A five-day close, every month, without heroics.",
    highlight: "qualified accountants",
    body: "Accounts payable, receivable, bank reconciliation and month-end close run by qualified accountants working directly in your ledger — under your approval limits, with segregation of duties your auditor will recognise.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Finance pods onboarding for the new financial year",
    chips: [
      { value: "5 days", label: "Median time to close the month" },
      { value: "99.7%", label: "Invoice processing accuracy" },
      { value: "-42%", label: "Cost per transaction processed" },
    ],
    figure: "dashboard",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The transactional half of finance, done properly.",
    body: "Every finance team has the same problem: the qualified people you hired for analysis spend three weeks a month on processing and chasing. Moving the transactional work does not reduce the finance function — it is what finally lets it do the job it was hired for.",
    panels: [
      {
        heading: "What it is",
        body: "A finance pod of qualified accountants and transaction processors with a team lead, working your ledger to your policies and your approval matrix.",
      },
      {
        heading: "Who it's for",
        body: "Companies processing meaningful transaction volume: multi-entity groups, businesses with high supplier counts, and finance teams whose close consistently runs past day ten.",
      },
      {
        heading: "The business case",
        body: "A faster close, fewer processing errors, working capital released from overdue receivables, and senior finance time returned to analysis and control.",
      },
      {
        heading: "Why us",
        body: "Segregation of duties is designed in from day one. We process and reconcile; approval and payment release always stay with your people.",
      },
    ],
    figure: "pipeline",
  },

  included: {
    eyebrow: "Scope",
    title: "Purchase to pay, order to cash, and the close.",
    body: "One monthly rate covers the processing and the controls around it. Reconciliation and reporting are not billed as extras.",
    items: [
      "Accounts payable: invoice capture, coding, matching and query resolution",
      "Supplier statement reconciliation and payment run preparation",
      "Accounts receivable: invoicing, allocation and credit control",
      "Collections calling and disputed-invoice management",
      "Bank, credit card and intercompany reconciliations",
      "Expense claim processing and policy compliance checking",
      "Fixed asset register and depreciation schedules",
      "Prepayments, accruals and journal preparation",
      "Month-end close checklist execution and balance sheet reconciliations",
      "Management accounts pack preparation to your template",
      "VAT and sales tax return preparation for review",
      "Audit schedule preparation and auditor query support",
    ],
    note: "Approval and payment release always stay with your team. We prepare, reconcile and evidence; your named approvers authorise. That separation is written into the process design.",
    figure: "layers",
  },

  benefits: [
    {
      title: "A close that finishes when it should",
      body: "A documented close checklist with owners and daily cut-off points, worked by a team whose only job that week is the close. Reporting deadlines stop depending on two people cancelling their evenings.",
      metric: { value: 5, suffix: " days", label: "Median working days to close, down from 12" },
      link: { label: "See the close process", href: "#process" },
      figure: "dashboard",
    },
    {
      title: "Fewer errors reaching the ledger",
      body: "Three-way matching, duplicate detection and a sampling review by a qualified accountant before posting. Errors caught pre-posting cost minutes; errors found at audit cost a great deal more.",
      metric: { value: 99.7, decimals: 1, suffix: "%", label: "Invoice processing accuracy" },
      link: { label: "How quality is checked", href: "#whats-included" },
      figure: "pulse",
    },
    {
      title: "Cash collected rather than aged",
      body: "Systematic credit control with a documented chase cycle and disputes escalated the day they are raised. Most overdue receivables are not disputes — they are invoices nobody had time to chase.",
      metric: { value: 14, suffix: " days", label: "Median reduction in days sales outstanding" },
      link: { label: "Talk about your ledger", href: "#contact" },
      figure: "network",
    },
    {
      title: "Senior finance time back for analysis",
      body: "Your qualified staff stop coding invoices and chasing statements. That is usually the difference between a finance team that reports history and one that influences the next quarter.",
      metric: { value: 42, suffix: "%", label: "Lower cost per transaction processed" },
      link: { label: "See how the pod is staffed", href: "#why-us" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Process capture",
      duration: "Week 1",
      body: "We document how purchase-to-pay and order-to-cash actually run today, including the workarounds. Volume, supplier counts, approval limits and exception rates become the baseline.",
    },
    {
      title: "Controls design",
      duration: "Week 1–2",
      body: "Segregation of duties, approval matrix, evidence requirements and the boundary between preparation and authorisation — reviewed with your financial controller and, where relevant, your auditor.",
    },
    {
      title: "Recruit",
      duration: "Week 1–2",
      body: "Qualified and part-qualified accountants matched to your systems and sector. You interview every finalist and hold the veto before anyone is assigned.",
    },
    {
      title: "Train & parallel run",
      duration: "Week 2–3",
      body: "Systems access, chart of accounts, coding rules and policy training, then a parallel run through one full close with your team checking every output.",
    },
    {
      title: "Go live",
      duration: "Week 3–4",
      body: "The pod takes primary responsibility with your controller reviewing before posting, easing to sampling review once accuracy holds for two consecutive cycles.",
    },
    {
      title: "Run & improve",
      duration: "Ongoing",
      body: "Weekly performance reporting, monthly close retrospectives, and a continuous improvement backlog — usually starting with the suppliers generating the most queries.",
    },
  ],

  tech: [
    { name: "NetSuite", category: "ERP" },
    { name: "SAP", category: "ERP" },
    { name: "Microsoft Dynamics", category: "ERP" },
    { name: "Xero", category: "Accounting" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Sage", category: "Accounting" },
    { name: "Oracle Fusion", category: "ERP" },
    { name: "Bill.com", category: "Payables" },
    { name: "Coupa", category: "Procure to pay" },
    { name: "Tipalti", category: "Payables automation" },
    { name: "Chaser", category: "Credit control" },
    { name: "Expensify", category: "Expenses" },
    { name: "Concur", category: "Travel & expense" },
    { name: "BlackLine", category: "Reconciliation" },
    { name: "Excel", category: "Analysis" },
    { name: "Power BI", category: "Reporting" },
  ],

  differentiators: [
    {
      title: "Qualified accountants, not data entry",
      body: "Every pod includes ACCA, CIMA or CPA-qualified staff reviewing before posting. Coding decisions get made by someone who understands the accounting treatment.",
    },
    {
      title: "Segregation of duties by design",
      body: "We prepare and reconcile; your team approves and releases payment. The separation is built into the process design and evidenced for your auditor.",
    },
    {
      title: "Parallel run through a full close",
      body: "We never take primary responsibility until we have matched your team's output across an entire close cycle. It costs us a month and removes the risk entirely.",
    },
    {
      title: "Your ledger, your controls",
      body: "Work happens in your ERP under your approval limits. No shadow ledger, no re-keying, and no reconciliation between our system and yours.",
    },
    {
      title: "Audit-ready evidence",
      body: "Reconciliations, checklists and approvals are evidenced as they happen. Audit schedule preparation is part of the service rather than a seasonal scramble.",
    },
    {
      title: "You interview everyone",
      body: "Named accountants assigned to your ledger, not a rotating pool. You meet every finalist and are told immediately if anyone leaves the account.",
    },
  ],

  cases: [
    {
      industry: "Multi-site hospitality",
      title: "Twelve-day close down to five, across nine entities",
      challenge:
        "Nine legal entities, inconsistent coding across sites, and a close that finished on day twelve — leaving the board pack perpetually late.",
      solution:
        "A standardised chart of accounts and coding ruleset, a documented close checklist with daily cut-offs, and a seven-person pod owning reconciliations and journals.",
      results: [
        { value: 5, suffix: " days", label: "Working days to close" },
        { value: 9, label: "Entities on one close calendar" },
        { value: 38, suffix: "%", label: "Lower finance operating cost" },
      ],
      accent: "mint",
      figure: "pipeline",
    },
    {
      industry: "Wholesale distribution",
      title: "Releasing £2.4m from an aged ledger",
      challenge:
        "Receivables averaging 68 days with no systematic chase cycle, and disputes that sat unlogged until a customer stopped paying entirely.",
      solution:
        "A documented chase cycle by ageing bucket, same-day dispute logging with escalation to account managers, and weekly ledger reviews with the commercial team.",
      results: [
        { value: 2.4, decimals: 1, prefix: "£", suffix: "m", label: "Working capital released" },
        { value: 22, suffix: " days", label: "Reduction in days sales outstanding" },
        { value: 91, suffix: "%", label: "Disputes logged within 24 hours" },
      ],
      accent: "sun",
      figure: "dashboard",
    },
    {
      industry: "Construction",
      title: "Forty thousand invoices a year, matched properly",
      challenge:
        "High supplier counts, frequent part-deliveries and a payables team so far behind that duplicate payments were being discovered months later.",
      solution:
        "Three-way matching with tolerance rules agreed with procurement, duplicate detection before posting, and a supplier statement reconciliation cycle that had never existed.",
      results: [
        { value: 99.7, decimals: 1, suffix: "%", label: "Processing accuracy" },
        { value: 0, label: "Duplicate payments since go-live" },
        { value: 47, suffix: "%", label: "Lower cost per invoice" },
      ],
      accent: "sky",
      figure: "layers",
    },
  ],

  quotes: [
    {
      quote:
        "They insisted on running parallel through a full close before taking anything over. Our previous provider went live on day one and we spent six months cleaning up.",
      name: "Rosalind Kerr",
      role: "Financial Controller",
      company: "Northwind",
      initials: "RK",
      rating: 5,
    },
    {
      quote:
        "Our auditors asked how segregation of duties worked with an outsourced team. The answer was already documented, which impressed them more than it impressed me.",
      name: "Tobias Lehmann",
      role: "Finance Director",
      company: "Peakline",
      initials: "TL",
      rating: 5,
    },
    {
      quote:
        "Two point four million in cash that was sitting in the ledger because nobody had time to pick up the phone.",
      name: "Yvonne Achebe",
      role: "Head of Finance",
      company: "Duonode",
      initials: "YA",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Will the team be qualified accountants?",
      answer:
        "Every pod includes ACCA, CIMA or CPA-qualified staff who review before posting, supported by trained transaction processors. You see the qualifications of every person on the shortlist.",
    },
    {
      question: "How is segregation of duties maintained?",
      answer:
        "We prepare, reconcile and evidence; your named approvers authorise and release payment. The pod never has payment release rights. The control design is documented and shared with your auditor.",
    },
    {
      question: "Do you work in our accounting system?",
      answer:
        "Yes. NetSuite, SAP, Dynamics, Xero, QuickBooks, Sage, Oracle and others, under your licences and your user permissions. There is no shadow ledger and nothing is re-keyed.",
    },
    {
      question: "How long until the team is running the close?",
      answer:
        "Three to four weeks. We parallel run through one complete close cycle with your team checking every output before taking primary responsibility — that month is included, not billed as a project.",
    },
    {
      question: "What will our auditors think?",
      answer:
        "In our experience they focus on control design and evidence, both of which are stronger under this model than in most in-house teams. We will join an audit planning call to walk through the process.",
    },
    {
      question: "Can you handle multi-entity and multi-currency?",
      answer:
        "Yes, including intercompany reconciliation, consolidation support and FX revaluation. Multi-entity groups are where the close-time improvement is usually largest.",
    },
    {
      question: "Do you prepare statutory accounts and tax returns?",
      answer:
        "We prepare VAT and sales tax returns and audit schedules for your review. Statutory accounts filing and tax advisory stay with your accountants — we provide the underlying schedules.",
    },
    {
      question: "How is data protected?",
      answer:
        "ISO 27001 certified and SOC 2 Type II audited, with clean-desk floors, managed devices, restricted access and DLP. Financial data stays within your systems throughout.",
    },
    {
      question: "What happens at year end or during audit?",
      answer:
        "Audit schedule preparation and auditor query response are inside the scope. Where year-end needs additional capacity, we add it from the same hub at the published rate card.",
    },
    {
      question: "Can you take over from our current provider?",
      answer:
        "Yes. We run a parallel period at our own cost so the transition never depends on the outgoing provider's cooperation, which is rarely forthcoming.",
    },
    {
      question: "What is the minimum term?",
      answer:
        "Three months, then month-to-month with 30 days' notice. The first month is largely parallel running, so a shorter engagement would end before the pod took real responsibility.",
    },
    {
      question: "How is it priced?",
      answer:
        "A fixed monthly rate per pod by size and qualification mix, not per invoice. Volume bands are agreed up front with a published rate card for changes, so a busy quarter never produces a surprise invoice.",
    },
  ],

  related: [
    "finance-outsourcing",
    "payroll-outsourcing",
    "admin-support",
    "it-outsourcing",
    "small-business",
    "ma-deal-flow",
  ],

  cta: {
    title: "Get a close calendar and a price this week.",
    body: "Tell us your transaction volumes, entities and current close timeline. We will come back within one business day with a pod shape, a controls design and a cost per transaction.",
  },

  seo: {
    title: "Finance & Accounting Outsourcing | AP, AR & Month-End Close — Valentisys",
    description:
      "Qualified accountants running accounts payable, receivable, reconciliations and month-end close in your ledger. Five-day close, 99.7% accuracy, segregation of duties by design.",
  },
};
