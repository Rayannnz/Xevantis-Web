import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const financeAndAccounting: ServiceContent = {
  slug: "finance-and-accounting",
  name: "Finance & Accounting",
  accent: "mint",
  eyebrow: "Finance & Accounting",
  summary:
    "Bookkeeping, insurance claims, billing, collections and month-end close, run by qualified accountants working in your QuickBooks or Xero.",
  trustLabel: "Keeping the books for",

  sections: {
    benefits: {
      title: "What proper bookkeeping actually returns.",
      body: "Four numbers we baseline before we start. Cost per invoice is the easiest to move; the other three are worth more.",
    },
    process: {
      title: "From a look at your books to a clean close.",
      body: "Six phases over about three weeks. Running alongside your current setup through one full month-end is non-negotiable, because that is where the errors surface.",
    },
    tech: {
      title: "Your books, your controls.",
      body: "We work inside the accounting software you already run, under your approval limits. Nothing gets re-keyed into a system of ours.",
    },
    why: {
      title: "Why owners stop dreading month-end.",
      body: "Small-business bookkeeping goes wrong more often than almost anything else, usually because nobody set up the controls before handing over the login.",
    },
    cases: {
      title: "Books we keep.",
      body: "Three engagements measured on days to close, claim accuracy, and the cash released by chasing receivables properly.",
    },
    faq: {
      title: "Controls, qualifications and who signs the checks.",
      body: "The questions your CPA will ask about this arrangement, answered in advance.",
    },
  },

  hero: {
    title: "Books that are current on the fifth, every month.",
    highlight: "qualified accountants",
    body: "Bookkeeping, insurance claims and billing, collections, reconciliation and month-end close, run by qualified accountants working directly in your QuickBooks or Xero — under your approval limits, with the separation of duties your CPA will recognize.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Onboarding now for the new tax year",
    chips: [
      { value: "5 days", label: "Median time to close the month" },
      { value: "99.7%", label: "Claim and invoice accuracy" },
      { value: "-42%", label: "Cost against a local bookkeeper" },
    ],
    figure: "dashboard",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The bookkeeping half of the business, done properly.",
    body: "Most small practices have the same problem: the owner or office manager does the books in the evenings, and it shows up as a close that lands three weeks late and a receivables ledger nobody has looked at. Moving the transactional work is what finally lets your own people do the job they were hired for.",
    panels: [
      {
        heading: "What it is",
        body: "Qualified accountants and billing specialists working in your own accounting and practice software, to your policies and your approval limits.",
      },
      {
        heading: "Who it's for",
        body: "Medical and dental practices with insurance AR, pharmacies, law firms with trust accounting, engineering firms billing by project, and any local business whose books are perpetually a month behind.",
      },
      {
        heading: "The business case",
        body: "Current books, fewer denied claims, cash collected instead of aged, and your own staff back on patients and clients rather than statements.",
      },
      {
        heading: "Why us",
        body: "Separation of duties is designed in from day one. We prepare and reconcile; approving payments and signing checks always stays with you.",
      },
    ],
    figure: "pipeline",
  },

  included: {
    eyebrow: "Scope",
    title: "Money in, money out, and the close.",
    body: "One monthly rate covers the processing and the controls around it. Reconciliation and reporting are not billed as extras.",
    items: [
      "Bills in: capture, coding, matching and vendor query resolution",
      "Vendor statement reconciliation and payment run preparation",
      "Insurance claim submission, denial follow-up and appeals",
      "Patient and client invoicing, statements and payment allocation",
      "Collections calling and disputed-balance management",
      "Bank, credit card and merchant account reconciliation",
      "Attorney trust and escrow account reconciliation",
      "Expense and reimbursement processing against your policy",
      "Prepayments, accruals and journal entries",
      "Month-end close checklist and balance sheet reconciliation",
      "Monthly reporting pack in the format you actually read",
      "Sales tax return preparation and year-end schedules for your CPA",
    ],
    note: "Approving payments and signing checks always stays with you. We prepare, reconcile and evidence; you authorize. That separation is written into the process before anyone gets a login.",
    figure: "layers",
  },

  benefits: [
    {
      title: "A close that finishes when it should",
      body: "A written close checklist with owners and daily cut-offs, worked by someone whose actual job that week is the close. It stops depending on the owner canceling two evenings.",
      metric: { value: 5, suffix: " days", label: "Median working days to close, down from 12" },
      link: { label: "See the close process", href: "#process" },
      figure: "dashboard",
    },
    {
      title: "Fewer errors and fewer denials",
      body: "Matching, duplicate detection and a review by a qualified accountant before anything posts. An error caught before posting costs minutes; a claim denied for a coding mistake costs a month.",
      metric: { value: 99.7, decimals: 1, suffix: "%", label: "Claim and invoice accuracy" },
      link: { label: "How quality is checked", href: "#whats-included" },
      figure: "pulse",
    },
    {
      title: "Cash collected rather than aged",
      body: "A written chase cycle by aging bucket, with denials and disputes worked the week they land. Most overdue balances are not disputes — they are claims and invoices nobody had ninety minutes to chase.",
      metric: { value: 14, suffix: " days", label: "Median reduction in days in receivables" },
      link: { label: "Talk about your books", href: "#contact" },
      figure: "network",
    },
    {
      title: "Your own people back on the work that pays",
      body: "The office manager stops coding bills and chasing statements at 9pm. That is usually the difference between knowing what last month cost and finding out in March.",
      metric: { value: 42, suffix: "%", label: "Lower cost than a local bookkeeper" },
      link: { label: "See how the team is staffed", href: "#why-us" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Look at the books",
      duration: "Week 1",
      body: "We document how money actually moves through your practice today, including the workarounds. Volumes, payer mix, approval limits and where things currently go wrong become the baseline.",
    },
    {
      title: "Set the controls",
      duration: "Week 1–2",
      body: "Who prepares, who approves, what evidence gets kept, and the line between the two — reviewed with you and, where you want it, with your CPA before anyone gets a login.",
    },
    {
      title: "Find your accountant",
      duration: "Week 1–2",
      body: "Qualified and part-qualified accountants matched to your software and your industry — dental insurance AR, legal trust accounting, project billing. You interview every finalist.",
    },
    {
      title: "Train & run alongside",
      duration: "Week 2–3",
      body: "Access, chart of accounts, coding rules and policy training, then one full month-end run alongside your current setup with you checking every output.",
    },
    {
      title: "Go live",
      duration: "Week 3–4",
      body: "They take primary responsibility with you reviewing before anything posts, easing to spot checks once accuracy holds for two consecutive months.",
    },
    {
      title: "Run & improve",
      duration: "Ongoing",
      body: "Weekly reporting, a monthly close review, and a short improvement list — usually starting with whichever payer or vendor generates the most queries.",
    },
  ],

  tech: [
    { name: "QuickBooks", category: "Accounting" },
    { name: "Xero", category: "Accounting" },
    { name: "Sage", category: "Accounting" },
    { name: "Bill.com", category: "Bill pay" },
    { name: "Dentrix", category: "Dental billing" },
    { name: "Open Dental", category: "Dental billing" },
    { name: "Athenahealth", category: "Medical billing" },
    { name: "Availity", category: "Claims & eligibility" },
    { name: "Clio", category: "Legal billing & trust" },
    { name: "Deltek", category: "Project accounting" },
    { name: "Gusto", category: "Payroll" },
    { name: "Expensify", category: "Expenses" },
    { name: "Square", category: "Payments" },
    { name: "Stripe", category: "Payments" },
    { name: "Excel", category: "Analysis" },
    { name: "Power BI", category: "Reporting" },
  ],

  differentiators: [
    {
      title: "Qualified accountants, not data entry",
      body: "Every account has CPA or equivalently qualified staff reviewing before anything posts. Coding decisions get made by someone who understands the treatment, not someone matching a description.",
    },
    {
      title: "You still sign the checks",
      body: "We prepare and reconcile; you approve and release payment. Nobody here ever has payment rights on your account, and that separation is written down before we start.",
    },
    {
      title: "One full month running alongside",
      body: "We never take primary responsibility until we have matched your existing output across an entire month-end. It costs us a month and removes the risk entirely.",
    },
    {
      title: "Your software, your controls",
      body: "Work happens in your QuickBooks, Xero or practice software under your own limits. No second set of books, no re-keying, nothing to reconcile between our system and yours.",
    },
    {
      title: "Ready for your CPA",
      body: "Reconciliations, checklists and approvals are evidenced as they happen, and year-end schedules are prepared as part of the service rather than as a January scramble.",
    },
    {
      title: "You interview them",
      body: "A named accountant on your books, not a rotating pool. You meet every finalist and hear that day if they ever leave your account.",
    },
  ],

  cases: [
    {
      industry: "Dental group · Nassau County, NY",
      title: "Three locations, one close, and an AR nobody was working",
      challenge:
        "Three offices on separate books with inconsistent coding, a close that landed around day twenty, and 31% of insurance AR sitting past 90 days because the person responsible was also running the front desk.",
      solution:
        "One consistent chart of accounts across all three locations, a written close checklist with daily cut-offs, and a dedicated 90-minute weekly block worked against the aging report by someone with no desk duties.",
      results: [
        { value: 5, suffix: " days", label: "Working days to close, down from 20" },
        { value: 31, suffix: "%", label: "AR over 90 days, down to 7%" },
        { value: 38, suffix: "%", label: "Lower cost than the local bookkeeper" },
      ],
      accent: "mint",
      figure: "pipeline",
    },
    {
      industry: "Law firm · Manhattan, NY",
      title: "Trust accounting a partner could stop losing sleep over",
      challenge:
        "A twelve-attorney firm reconciling its escrow account quarterly, by hand, in a spreadsheet — with the managing partner personally on the hook for any error under state rules.",
      solution:
        "Monthly three-way trust reconciliation to the day, client ledger balances maintained separately from operating funds, and an evidence file the firm's CPA could open without asking a question.",
      results: [
        { value: 12, label: "Monthly trust reconciliations, up from 4 a year" },
        { value: 0, label: "Unexplained trust differences since" },
        { value: 26, suffix: " hrs", label: "Partner hours returned per quarter" },
      ],
      accent: "sun",
      figure: "dashboard",
    },
    {
      industry: "Engineering firm · Long Island City, NY",
      title: "Project billing that finally went out on time",
      challenge:
        "An 18-person structural practice billing by percentage of completion, where invoices went out whenever a principal found an evening. Median time from milestone to invoice was 34 days, and receivables ran past 70.",
      solution:
        "A fixed billing calendar tied to project milestones, invoices prepared for one-click principal approval, and a written chase cycle starting the day a balance ages past terms.",
      results: [
        { value: 34, suffix: " days", label: "Milestone-to-invoice, down to 3" },
        { value: 24, suffix: " days", label: "Reduction in days in receivables" },
        { value: 99.7, decimals: 1, suffix: "%", label: "Invoice accuracy" },
      ],
      accent: "sky",
      figure: "layers",
    },
  ],

  quotes: [
    {
      quote:
        "They insisted on running a full month alongside us before taking anything over. Our last bookkeeper started on day one and we spent six months cleaning up.",
      name: "Practice Owner",
      role: "Three-location dental group",
      company: "Nassau County, NY",
      initials: "PO",
      rating: 5,
    },
    {
      quote:
        "My CPA asked how the separation of duties worked with someone remote. The answer was already written down, which impressed him more than it impressed me.",
      name: "Managing Partner",
      role: "Twelve-attorney law firm",
      company: "Manhattan, NY",
      initials: "MP",
      rating: 5,
    },
    {
      quote:
        "Sixty thousand dollars was sitting in aged receivables because nobody here had ninety minutes a week to pick up the phone.",
      name: "Principal",
      role: "Structural engineering firm",
      company: "Long Island City, NY",
      initials: "PR",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Are they actually qualified accountants?",
      answer:
        "Every account has CPA or equivalently qualified staff reviewing before anything posts, supported by trained billing and processing specialists. You see the qualifications of everyone on the shortlist and you interview them.",
    },
    {
      question: "Who approves payments?",
      answer:
        "You do, always. We prepare, reconcile and evidence; your named approvers authorize and release. Nobody here ever holds payment rights on your account, and the control design is written down and shareable with your CPA.",
    },
    {
      question: "Do we have to change accounting software?",
      answer:
        "No. QuickBooks, Xero, Sage, or the billing side of Dentrix, Open Dental, Athenahealth or Clio — under your own licenses and permissions. There is no second set of books and nothing gets re-keyed.",
    },
    {
      question: "How long until they are running the close?",
      answer:
        "Three to four weeks. We run one complete month-end alongside your current setup, with you checking every output, before taking primary responsibility. That month is included, not billed as a project.",
    },
    {
      question: "What will our CPA think?",
      answer:
        "In our experience they care about control design and evidence, both of which are usually stronger under this model than what a small office was doing before. We will join a call with them to walk through it.",
    },
    {
      question: "Can you handle insurance billing and denials?",
      answer:
        "Yes — submission, denial follow-up and appeals for medical and dental practices, worked to a written cadence rather than when someone finds time. This is usually where the fastest return shows up.",
    },
    {
      question: "Can you handle attorney trust accounts?",
      answer:
        "Yes, with monthly three-way reconciliation and client ledgers kept strictly separate from operating funds. Given that trust rules are enforced against the attorney personally, this is one of the few areas we will not take on informally.",
    },
    {
      question: "Do you file our taxes?",
      answer:
        "We prepare sales tax returns and the year-end schedules your CPA needs. Filing the return and giving tax advice stays with your CPA — we make their job faster and cheaper by handing over clean books.",
    },
    {
      question: "Are you HIPAA compliant?",
      answer:
        "Yes, and we sign a business associate agreement before touching a claim. Access is least-privilege and logged, and financial data stays inside your own systems throughout.",
    },
    {
      question: "Can you take over from our current bookkeeper?",
      answer:
        "Yes, and we run the overlap month at our own cost so the transition never depends on the outgoing bookkeeper's cooperation, which is rarely forthcoming.",
    },
    {
      question: "What is the minimum term?",
      answer:
        "Three months, then month-to-month with 30 days' notice. The first month is largely running alongside, so anything shorter would end before we had taken real responsibility.",
    },
    {
      question: "How is it priced?",
      answer:
        "A flat monthly rate by transaction volume and qualification mix — never per invoice or per claim. Bands are agreed up front with a published rate card for changes, so a busy quarter never produces a surprise bill.",
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
    body: "Tell us your software, roughly how many transactions a month, and when your books were last current. We will come back within one business day with who would run it, how the controls would work and a monthly price.",
  },

  seo: {
    title: "Bookkeeping & Medical Billing for Small Practices — Xevantis",
    description:
      "Qualified accountants running bookkeeping, insurance claims, billing, collections and month-end close in your own QuickBooks or Xero. For clinics, dental practices, law firms and local businesses across the US. Five-day close, 99.7% accuracy.",
  },
};
