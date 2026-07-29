import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const maDealFlow: ServiceContent = {
  slug: "ma-deal-flow",
  name: "Practice Acquisitions & Sales",
  accent: "lilac",
  eyebrow: "Buying & Selling",
  summary:
    "Buying a second location, selling your practice, or bringing in a partner — the diligence, the numbers and the integration work, without advisor rates.",
  trustLabel: "Supporting owners buying and selling at",

  sections: {
    benefits: {
      title: "What proper support changes about a deal.",
      body: "Four outcomes measured across the transactions we have worked on. Fee saving matters, but owners tell us the speed and the sleep matter more.",
    },
    process: {
      title: "How a transaction runs with support attached.",
      body: "Six phases mapped to the deal's own timeline. It flexes, because deals do — most take longer than anyone expects and then move in a week.",
    },
    tech: {
      title: "The systems a transaction runs through.",
      body: "We work in your data room, your accounting software and your practice management system, under your own access controls.",
    },
    why: {
      title: "Why owners keep this rather than paying a firm hourly.",
      body: "Transaction work is spiky in a way a small practice handles badly and an advisory firm handles expensively.",
    },
    cases: {
      title: "Deals we have supported.",
      body: "Three transactions: a dentist buying a second location, a firm preparing to sell, and a partner buy-in nobody had modeled properly.",
    },
    faq: {
      title: "Confidentiality, scope and what we are not.",
      body: "The questions an owner asks before letting anyone near their own numbers.",
    },
  },

  hero: {
    title: "Buying, selling or bringing in a partner — done properly.",
    highlight: "a fraction of what a firm charges",
    body: "Target screening, financial diligence, data room preparation and the integration work after closing — handled by analysts working under your direction and your attorney's, at a fraction of what a firm charges for the same hours.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Supporting owners and small groups across the US",
    chips: [
      { value: "3x", label: "Targets properly reviewed per analyst month" },
      { value: "-58%", label: "Versus advisory rates for the same work" },
      { value: "72 hrs", label: "To put a team on a live deal" },
    ],
    figure: "network",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The volume work of a transaction, at the right price.",
    body: "Most of a small-practice transaction is not advice. It is assembling three years of financials, normalizing the owner's compensation, reading forty leases and contracts, and building a model that survives a buyer's questions. Owners either do this themselves at midnight or pay a firm several hundred dollars an hour to do it.",
    panels: [
      {
        heading: "What it is",
        body: "Analysts working under your direction — and alongside your broker, attorney and CPA — on screening, diligence, data room preparation and post-closing integration.",
      },
      {
        heading: "Who it's for",
        body: "Dentists and physicians buying a second location, owners preparing to sell or retire, firms bringing in an equity partner, and small groups acquiring their way to three or four sites.",
      },
      {
        heading: "The business case",
        body: "More targets properly reviewed, faster answers to a buyer's questions, and the volume work at roughly 40% of advisory rates — with your advisors kept for the judgment you are actually paying them for.",
      },
      {
        heading: "Why us",
        body: "We are not brokers, we take no success fee and we have no interest in whether the deal closes. That is an unusual thing to be able to say in this market.",
      },
    ],
    figure: "pipeline",
  },

  included: {
    eyebrow: "Scope",
    title: "Before the deal, during it, and the part everybody forgets.",
    body: "A monthly rate or a per-deal fee. Post-closing integration is inside the scope, because it is where most small acquisitions actually go wrong.",
    items: [
      "Target identification and screening against your written criteria",
      "Financial review: three years normalized, owner compensation added back",
      "Production, payer mix and patient or client retention analysis",
      "Lease, vendor and equipment contract review and abstraction",
      "Staffing cost review and post-closing headcount modeling",
      "Valuation modeling and sensitivity on the numbers that move it",
      "Data room preparation and buyer question tracking on a sale",
      "Diligence request list management, chased daily",
      "Working capital and holdback calculation support",
      "Post-closing systems consolidation planning",
      "Chart, file and record migration coordination",
      "The first ninety days: staffing, scheduling and billing integration",
    ],
    note: "We are not brokers, attorneys, CPAs or investment bankers, and we do not act as any of them. We do the analytical and administrative work under your direction and theirs. Every opinion, valuation and signature stays with the licensed advisors you have engaged.",
    figure: "layers",
  },

  benefits: [
    {
      title: "More targets actually reviewed",
      body: "Most owners look at two or three practices, because reviewing one properly takes a weekend. Screening capacity is what turns a search into a choice rather than a decision between whatever came along.",
      metric: { value: 3, suffix: "x", label: "Targets properly reviewed per analyst month" },
      link: { label: "See the screening scope", href: "#whats-included" },
      figure: "network",
    },
    {
      title: "Buyer questions answered the same week",
      body: "On a sale, the deals that stall are the ones where a buyer waits eleven days for a schedule. Someone whose actual job is the request list is the difference between a four-month close and an eight-month one.",
      metric: { value: 48, suffix: " hrs", label: "Median turnaround on a diligence request" },
      link: { label: "How a sale runs", href: "#process" },
      figure: "pipeline",
    },
    {
      title: "The volume work at the right rate",
      body: "Abstracting forty leases and normalizing three years of financials is not judgment work. Paying an advisory firm's hourly rate for it is the single largest avoidable cost in a small transaction.",
      metric: { value: 58, suffix: "%", label: "Below advisory rates for equivalent hours" },
      link: { label: "Talk about your deal", href: "#contact" },
      figure: "dashboard",
    },
    {
      title: "An integration somebody actually planned",
      body: "Small acquisitions rarely fail at closing. They fail in month three, when two practice management systems, two fee schedules and two staff cultures turn out not to have been anybody's job.",
      metric: { value: 90, suffix: " days", label: "Integration plan, written before you close" },
      link: { label: "See the case studies", href: "#work" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Define what you are looking for",
      duration: "Week 1",
      body: "Size, location, payer or client mix, what you will and will not take on, and — most usefully — what you would walk away from. Written down, because criteria that stay in your head bend once you are tired of looking.",
    },
    {
      title: "Screen",
      duration: "Ongoing",
      body: "Targets reviewed against those criteria with a short written summary each, so you spend your time on the three worth visiting rather than the thirty that were never going to work.",
    },
    {
      title: "Financial diligence",
      duration: "3–6 weeks",
      body: "Three years normalized, owner compensation added back honestly, production and retention analyzed, and anything your CPA or attorney should look at flagged for them specifically.",
    },
    {
      title: "Contracts and leases",
      duration: "2–4 weeks",
      body: "Every lease, equipment agreement, vendor and payer contract abstracted into a summary — including the auto-renewals and change-of-control clauses that surprise people at closing.",
    },
    {
      title: "Close support",
      duration: "As needed",
      body: "Request lists chased daily, working capital and holdback schedules prepared, and one tracked list so nothing sits waiting on someone who did not know it was theirs.",
    },
    {
      title: "The first ninety days",
      duration: "Post-closing",
      body: "Systems, fee schedules, staffing and billing integrated to a plan written before closing rather than improvised after it. This is the phase that decides whether the deal was a good one.",
    },
  ],

  tech: [
    { name: "QuickBooks", category: "Accounting" },
    { name: "Xero", category: "Accounting" },
    { name: "Open Dental", category: "Dental production data" },
    { name: "Dentrix", category: "Dental production data" },
    { name: "Athenahealth", category: "Medical production data" },
    { name: "Clio", category: "Legal billing data" },
    { name: "DocuSign", category: "E-signature" },
    { name: "SharePoint", category: "Data room" },
    { name: "Dropbox", category: "Data room" },
    { name: "Excel", category: "Modeling" },
    { name: "Google Sheets", category: "Collaboration" },
    { name: "Adobe Acrobat", category: "Document review" },
    { name: "Smartsheet", category: "Request tracking" },
    { name: "Asana", category: "Integration planning" },
    { name: "Microsoft 365", category: "Email & files" },
    { name: "Power BI", category: "Reporting" },
  ],

  differentiators: [
    {
      title: "No success fee, ever",
      body: "We are paid the same whether you buy, sell or walk away. A broker paid on closing has a view about whether you should close, and it is worth knowing whose advice carries that.",
    },
    {
      title: "We work under your advisors",
      body: "Your attorney, CPA and broker keep every opinion and every signature. We do the analytical and administrative work they would otherwise bill you for at three times the rate.",
    },
    {
      title: "The integration is in scope",
      body: "Most support ends at closing, which is exactly when a small acquisition starts being difficult. The ninety-day plan is written before you sign, not after.",
    },
    {
      title: "We will tell you to walk",
      body: "When the numbers do not support the price, or retention analysis says the patients belong to the departing owner rather than to the practice, we say so plainly. It costs us the engagement often enough.",
    },
    {
      title: "Confidentiality that holds",
      body: "Named analysts under signed confidentiality agreements, ring-fenced to your search, working in your own data room. Nobody working on your deal is working for a competing buyer.",
    },
    {
      title: "Capacity that matches a deal's shape",
      body: "Nothing for two months and then everything in ten days is how transactions actually run. We scale within 72 hours and stand down without penalty.",
    },
  ],

  cases: [
    {
      industry: "Dental practice · Brooklyn, NY",
      title: "The second location that did not add up",
      challenge:
        "An owner with a successful Park Slope practice under contract on a second location, working from the seller's summary numbers and a broker's projection.",
      solution:
        "Three years normalized properly, plus a retention analysis showing 41% of the target's production came from patients of a hygienist who had already given notice. The offer was restructured with a holdback tied to retention.",
      results: [
        { value: 41, suffix: "%", label: "Of production tied to a departing staff member" },
        { value: 190, prefix: "$", suffix: "k", label: "Reduction in agreed price" },
        { value: 12, suffix: " mo", label: "Retention holdback negotiated" },
      ],
      accent: "lilac",
      figure: "dashboard",
    },
    {
      industry: "Accounting firm · Long Island, NY",
      title: "Preparing a sale eighteen months out",
      challenge:
        "Two partners planning to retire in two years, with books that mixed personal and business expenses, no written client agreements, and a client list concentrated in a handful of relationships.",
      solution:
        "Financials cleaned and normalized over eighteen months, client agreements papered, and the concentration risk addressed by deliberately broadening the base before going to market.",
      results: [
        { value: 18, suffix: " mo", label: "Preparation before going to market" },
        { value: 3, suffix: " wks", label: "Diligence completed, from a projected 8" },
        { value: 0, label: "Price reductions during diligence" },
      ],
      accent: "sky",
      figure: "pipeline",
    },
    {
      industry: "Medical practice · Westchester County, NY",
      title: "A partner buy-in nobody had modeled",
      challenge:
        "Three physicians bringing in a fourth as an equity partner, working from a valuation someone had produced on a napkin, with no agreement on how the buy-in would actually be funded.",
      solution:
        "A proper valuation with sensitivity on the assumptions that moved it, three funding structures modeled against each partner's tax position, and the cash impact on the practice shown month by month.",
      results: [
        { value: 3, label: "Funding structures modeled and compared" },
        { value: 13, suffix: " wks", label: "From engagement to signed agreement" },
        { value: 0, label: "Partners who felt the number was arbitrary" },
      ],
      accent: "mint",
      figure: "layers",
    },
  ],

  quotes: [
    {
      quote:
        "They found that 41% of the practice I was buying walked out the door with the hygienist. My broker had not looked, and had no reason to.",
      name: "Practice Owner",
      role: "Dental practice, two locations",
      company: "Brooklyn, NY",
      initials: "PO",
      rating: 5,
    },
    {
      quote:
        "We started eighteen months before going to market. Diligence took three weeks and the buyer never asked for a reduction. That is not luck.",
      name: "Retiring Partner",
      role: "Accounting firm",
      company: "Long Island, NY",
      initials: "RP",
      rating: 5,
    },
    {
      quote:
        "Nobody was paid depending on whether we did the deal. After talking to three brokers, that was the thing that made me trust the numbers.",
      name: "Managing Physician",
      role: "Medical practice",
      company: "Westchester County, NY",
      initials: "MD",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Are you brokers?",
      answer:
        "No, and it is the most important thing on this page. We do not list practices, do not introduce buyers or sellers, and take no success fee. We are paid the same whether you close or walk away.",
    },
    {
      question: "Do you replace our attorney or CPA?",
      answer:
        "No. They keep every legal opinion, every tax position and every signature. We do the analytical and administrative work underneath, which is usually most of their bill and the least of their value.",
    },
    {
      question: "Do you value the practice?",
      answer:
        "We build the model and show you what the price implies about growth, retention and margin. A formal valuation for a bank, a court or a tax filing needs a credentialed appraiser, and we will tell you when you need one.",
    },
    {
      question: "How quickly can you start on a live deal?",
      answer:
        "72 hours to put analysts on a deal already in motion. Screening engagements start within a week. Where a diligence period is already running, we take the request list first.",
    },
    {
      question: "How is confidentiality handled?",
      answer:
        "Signed confidentiality agreements, named analysts ring-fenced to your search only, work performed in your own data room, and access reviewed at each stage. Nobody working on your deal works for a competing buyer.",
    },
    {
      question: "How far ahead should we start if we want to sell?",
      answer:
        "Twelve to eighteen months, because that is how far back a buyer will look at your financials. Owners who start six weeks before listing are usually the ones who take a price reduction during diligence.",
    },
    {
      question: "What size deals do you work on?",
      answer:
        "Typically $500,000 to $30m in value. Below that the process rarely justifies dedicated support and we will say so; above it, buyers usually have their own teams and want us on integration instead.",
    },
    {
      question: "Do you help after the deal closes?",
      answer:
        "Yes, and this is where we are most useful. Systems consolidation, fee schedule alignment, record migration and the first ninety days of billing are what actually determine whether the acquisition worked.",
    },
    {
      question: "Can you review a deal we already have under contract?",
      answer:
        "Yes, and we would much rather see it before you sign. Where a contract is already executed we will tell you plainly what we find, including when the answer is that you have agreed to pay too much.",
    },
    {
      question: "What if we decide not to proceed?",
      answer:
        "That is a good outcome and we bill the same. A significant share of the screening work we do ends in a recommendation not to buy, which is rather the point of doing it.",
    },
    {
      question: "Do you work outside New York?",
      answer:
        "Yes, across the US. State-specific matters — professional corporation rules, corporate practice of medicine, dental service organization structures — go to your attorney in that state, and we will flag when they need to.",
    },
    {
      question: "How is it priced?",
      answer:
        "A monthly retainer for an ongoing search, or a fixed fee per transaction. Never a percentage of deal value and never contingent on closing, both of which would put our interest on the wrong side of your decision.",
    },
  ],

  related: [
    "finance-outsourcing",
    "finance-and-accounting",
    "legal-process-outsourcing",
    "small-business",
    "it-outsourcing",
    "hr-outsourcing",
  ],

  cta: {
    title: "Have the numbers looked at before you sign.",
    body: "Send us what you have — the seller's summary, the broker's package, or just the asking price. We will tell you within a week what we would want to see next, and whether it looks like a deal worth doing.",
  },

  seo: {
    title: "Practice Acquisition & Sale Support | Diligence Without Advisor Rates — Xevantis",
    description:
      "Financial diligence, screening, data room preparation and post-closing integration for owners buying or selling a practice or firm in the US. No success fee, no broker interest — 58% below advisory rates.",
  },
};
