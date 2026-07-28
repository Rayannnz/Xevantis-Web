import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const maDealFlow: ServiceContent = {
  slug: "ma-deal-flow",
  name: "M&A Deal Flow",
  accent: "lilac",
  eyebrow: "M&A Support",
  summary:
    "Target screening, data room preparation, diligence support and post-merger integration operations — capacity that flexes with your pipeline.",
  trustLabel: "Supporting deal teams at",

  sections: {
    benefits: {
      title: "What deal support capacity actually changes.",
      body: "Four outcomes measured across live mandates. Fee saving matters, but deal teams tell us throughput and speed matter more.",
    },
    process: {
      title: "How a mandate runs with support attached.",
      body: "Six phases mapped to a deal's own timeline. The engagement flexes because pipelines do.",
    },
    tech: {
      title: "Deal and diligence platforms.",
      body: "We work in your virtual data room and your pipeline tools, under your confidentiality and access controls.",
    },
    why: {
      title: "Why deal teams keep the capacity on retainer.",
      body: "M&A workload is spiky in a way that permanent headcount handles badly and advisers handle expensively.",
    },
    cases: {
      title: "Mandates we have supported.",
      body: "Three engagements: a buy-side screening programme, a sell-side data room, and a post-merger integration nobody had staffed.",
    },
    faq: {
      title: "Confidentiality, conflicts and scope.",
      body: "The questions a corporate development director asks before letting anyone near a live deal.",
    },
  },

  hero: {
    title: "Deal capacity that flexes with your pipeline.",
    highlight: "not at adviser rates",
    body: "Target screening, data room preparation, diligence support and integration operations, staffed by analysts under your direction — the volume work of a deal handled properly, and not at adviser rates.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Deal support teams available for Q1 mandates",
    chips: [
      { value: "3x", label: "Targets screened per analyst month" },
      { value: "-58%", label: "Versus adviser rates for the same work" },
      { value: "72 hrs", label: "To scale a team for a live deal" },
    ],
    figure: "network",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The volume work around a deal, done at the right cost.",
    body: "Corporate development teams are small and their workload arrives in bursts. When a deal goes live, the screening, document indexing, diligence tracking and integration planning either falls on two overworked people or goes to advisers at several hundred pounds an hour.",
    panels: [
      {
        heading: "What it is",
        body: "A deal support pod — analysts, a research lead and a project coordinator — working your pipeline and live mandates under your direction and your confidentiality regime.",
      },
      {
        heading: "Who it's for",
        body: "Corporate development teams, private equity and family offices, buy-and-build platforms, and companies making their first acquisitions without an internal deal function.",
      },
      {
        heading: "The business case",
        body: "More targets screened per month, diligence that runs to schedule, and adviser fees reserved for judgement work rather than document handling.",
      },
      {
        heading: "Why us",
        body: "We are not advisers and take no success fee. Our interest is in the work being done well, not in the deal completing.",
      },
    ],
    figure: "pipeline",
  },

  included: {
    eyebrow: "Scope",
    title: "Origination through to integration.",
    body: "One retained rate for pipeline work, with deal-specific surge capacity priced per mandate. Capacity scales inside 72 hours when something goes live.",
    items: [
      "Target universe mapping and market landscaping",
      "Screening against your investment criteria with scored longlists",
      "Company profiles, financial summaries and ownership research",
      "Pipeline tracking, CRM maintenance and outreach administration",
      "Financial model population and comparables analysis support",
      "Virtual data room setup, indexing and permissioning",
      "Sell-side document collection, redaction and preparation",
      "Diligence request list tracking and response coordination",
      "Q&A log management across workstreams and advisers",
      "Integration planning: workstream trackers and synergy logs",
      "Post-merger operational support across finance, HR and IT",
      "Deal calendar management and completion checklist tracking",
    ],
    note: "We work under your NDA and your confidentiality regime, in your data room and your systems. Analysts are ring-fenced to a single client where the mandate requires it, and conflicts are checked before assignment.",
    figure: "layers",
  },

  benefits: [
    {
      title: "More of the market actually screened",
      body: "Most buy-side pipelines are limited by analyst hours rather than by opportunity. Adding screening capacity widens the funnel, which is where proprietary deals come from rather than from auctions.",
      metric: { value: 3, suffix: "x", label: "Targets screened per analyst month" },
      link: { label: "See the screening process", href: "#process" },
      figure: "dashboard",
    },
    {
      title: "Diligence that runs to the timetable",
      body: "Deals slip on document collection and Q&A coordination far more often than on findings. Dedicated tracking keeps every workstream visible and every outstanding request owned.",
      metric: { value: 94, suffix: "%", label: "Of supported deals meeting the diligence timetable" },
      link: { label: "How diligence is tracked", href: "#whats-included" },
      figure: "pipeline",
    },
    {
      title: "Adviser fees spent on judgement",
      body: "Document indexing and request-list chasing do not need a corporate finance associate's rate. Moving the volume work leaves the adviser budget for the negotiation and structuring that earns it.",
      metric: { value: 58, suffix: "%", label: "Lower than adviser rates for equivalent work" },
      link: { label: "Talk about your pipeline", href: "#contact" },
      figure: "layers",
    },
    {
      title: "Integration that starts before completion",
      body: "The first hundred days are usually planned in the fortnight after signing, by people already exhausted. Standing capacity means workstream trackers and synergy logs exist before completion rather than after it.",
      metric: { value: 72, suffix: " hrs", label: "To scale a team when a deal goes live" },
      link: { label: "See the integration case", href: "#work" },
      figure: "network",
    },
  ],

  process: [
    {
      title: "Mandate scoping",
      duration: "Week 1",
      body: "Investment criteria, sector focus, deal size and the shape of your existing team. Conflict checks run before any analyst is assigned to a live pipeline.",
    },
    {
      title: "Pipeline build",
      duration: "Ongoing",
      body: "Target universe mapping and scored screening against your criteria, delivered as longlists with reasoning. You decide what advances; we never filter on judgement you have not delegated.",
    },
    {
      title: "Pre-diligence preparation",
      duration: "On mandate",
      body: "Company profiles, financial summaries and ownership research on shortlisted targets, plus the request list built before the process opens rather than during it.",
    },
    {
      title: "Diligence support",
      duration: "Live deal",
      body: "Data room indexing, request tracking, Q&A log management and workstream coordination across your advisers. Capacity scales within 72 hours of a deal going live.",
    },
    {
      title: "Signing to completion",
      duration: "Live deal",
      body: "Completion checklist tracking, condition monitoring and document coordination. Deals slip at this stage more often than anyone expects, almost always on administration.",
    },
    {
      title: "Integration",
      duration: "Post-completion",
      body: "Workstream trackers, synergy logs and operational support across finance, HR and IT — with our own service pods available where the integration needs actual capacity rather than a plan.",
    },
  ],

  tech: [
    { name: "Datasite", category: "Virtual data room" },
    { name: "Intralinks", category: "Virtual data room" },
    { name: "Ansarada", category: "Virtual data room" },
    { name: "SharePoint", category: "Document management" },
    { name: "DealCloud", category: "Deal CRM" },
    { name: "Affinity", category: "Relationship intelligence" },
    { name: "Salesforce", category: "Pipeline tracking" },
    { name: "PitchBook", category: "Market data" },
    { name: "Capital IQ", category: "Financial data" },
    { name: "Companies House", category: "Filings research" },
    { name: "Excel", category: "Modelling" },
    { name: "Power BI", category: "Reporting" },
    { name: "Smartsheet", category: "Integration tracking" },
    { name: "Asana", category: "Workstream management" },
  ],

  differentiators: [
    {
      title: "No success fee, ever",
      body: "We are not advisers and take no percentage of a completed deal. Our interest is in the work being accurate, which is a materially different incentive from wanting the deal to close.",
    },
    {
      title: "Capacity inside 72 hours",
      body: "Pipeline work runs on a retained pod; live deals scale from the same bench within three days. That is the whole point of retaining capacity rather than hiring for it.",
    },
    {
      title: "Conflicts checked and ring-fenced",
      body: "Analysts are conflict-checked before assignment and ring-fenced to a single client where a mandate requires it. Sector-adjacent work is declined rather than managed with a policy.",
    },
    {
      title: "We do not exercise your judgement",
      body: "Screening is scored against criteria you set, with the reasoning shown. Analysts do not silently filter out targets on judgement you have not explicitly delegated.",
    },
    {
      title: "Integration capacity, not just plans",
      body: "Where an integration needs finance, HR or IT operations rather than a workstream tracker, our service pods deliver it under the same contract.",
    },
    {
      title: "Confidentiality treated as the product",
      body: "Segregated secure floors, no removable media, session logging and named-analyst access. In deal work, one leak ends the relationship and possibly the deal.",
    },
  ],

  cases: [
    {
      industry: "Buy-and-build platform",
      title: "Tripling screened targets without adding headcount",
      challenge:
        "A two-person corporate development team screening around fifteen targets a month, capped entirely by analyst hours rather than by market size.",
      solution:
        "A three-analyst pod running scored screening against the investment criteria, delivering longlists with reasoning while the internal team focused on approaches.",
      results: [
        { value: 47, label: "Targets screened monthly, from 15" },
        { value: 4, label: "Proprietary deals originated in year one" },
        { value: 58, suffix: "%", label: "Lower cost than adviser screening" },
      ],
      accent: "lilac",
      figure: "dashboard",
    },
    {
      industry: "Founder-led sale",
      title: "A data room ready three weeks early",
      challenge:
        "A first-time seller with fifteen years of documents in shared drives, no index and a process launching in six weeks.",
      solution:
        "Systematic collection, redaction, indexing and permissioning into a structured data room, with the request list anticipated from typical buyer diligence in the sector.",
      results: [
        { value: 3, suffix: " wks", label: "Ahead of the process launch" },
        { value: 4200, label: "Documents indexed and permissioned" },
        { value: 11, suffix: " days", label: "Median buyer Q&A turnaround" },
      ],
      accent: "sky",
      figure: "layers",
    },
    {
      industry: "Industrial services",
      title: "Integration operations nobody had staffed",
      challenge:
        "A completed acquisition with a hundred-day plan on paper and no operational capacity to execute it across finance, HR and IT.",
      solution:
        "Workstream tracking plus actual delivery capacity: a finance pod for ledger consolidation, an HR pod for contract harmonisation, and IT support for systems migration.",
      results: [
        { value: 100, suffix: " days", label: "Plan delivered on schedule" },
        { value: 3, label: "Workstreams staffed operationally" },
        { value: 72, suffix: "%", label: "Of identified synergies realised in year one" },
      ],
      accent: "mint",
      figure: "network",
    },
  ],

  quotes: [
    {
      quote:
        "They take no success fee, which means when an analyst flags something ugly in diligence there is no incentive to soften it.",
      name: "Charles Okonjo",
      role: "Corporate Development Director",
      company: "Peakline",
      initials: "CO",
      rating: 5,
    },
    {
      quote:
        "Fifteen years of documents in shared drives, and a properly indexed data room three weeks before we launched. That changed the whole process.",
      name: "Margot Deveaux",
      role: "Founder",
      company: "Solstice",
      initials: "MD",
      rating: 5,
    },
    {
      quote:
        "Everyone sells you an integration plan. They actually staffed the ledger consolidation, which is the part that was going to fail.",
      name: "Ian Cartwright",
      role: "Group CFO",
      company: "Northwind",
      initials: "IC",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Are you a corporate finance adviser?",
      answer:
        "No. We provide analytical and operational capacity under your direction. Valuation opinions, negotiation and regulated advice come from your advisers — we do the volume work around them and take no success fee.",
    },
    {
      question: "How do you handle confidentiality?",
      answer:
        "Work runs under your NDA in segregated secure facilities, with no removable media, full session logging and named-analyst access. Analysts are ring-fenced to a single client where the mandate requires it.",
    },
    {
      question: "How do you manage conflicts of interest?",
      answer:
        "Conflict checks before any analyst is assigned, repeated when new mandates open. Where a sector overlap exists we decline the second engagement rather than manage it with a policy document.",
    },
    {
      question: "How quickly can you scale for a live deal?",
      answer:
        "Within 72 hours from the retained bench. That responsiveness is the reason to retain pipeline capacity rather than try to hire against a deal that has already gone live.",
    },
    {
      question: "Can you support both buy-side and sell-side?",
      answer:
        "Yes, though never on the same transaction. Buy-side work skews toward screening and diligence tracking; sell-side toward data room preparation and Q&A management.",
    },
    {
      question: "Do your analysts build the financial model?",
      answer:
        "They populate and maintain models to your structure and assumptions, and prepare comparables analysis. The assumptions and the judgement stay with your team, and we do not vary that.",
    },
    {
      question: "Which data rooms do you work in?",
      answer:
        "Datasite, Intralinks, Ansarada, SharePoint and others, always under your administration and permissioning. We are granted access as users; you retain control of the room.",
    },
    {
      question: "Can you help after completion?",
      answer:
        "Yes, and this is where most value is left on the table. Workstream tracking plus actual operational capacity — finance, HR and IT pods — under the same contract.",
    },
    {
      question: "What size deals do you support?",
      answer:
        "Typically £5m to £500m enterprise value. Below that the process rarely justifies dedicated support; above it, deal teams usually have their own capacity and want us on integration instead.",
    },
    {
      question: "How is it priced?",
      answer:
        "A monthly retainer for pipeline work, with deal-specific surge priced per mandate. Never a success fee and never hourly, which are the two models that misalign incentives in deal support.",
    },
    {
      question: "What is the minimum commitment?",
      answer:
        "Three months for retained pipeline work, then month-to-month with 30 days' notice. Single-mandate engagements are possible but priced higher, because reserved capacity is what makes the 72-hour scale-up work.",
    },
    {
      question: "Do you sign our NDA or use your own?",
      answer:
        "Yours, always, plus individual confidentiality undertakings from every analyst assigned. We have never asked a client to accept our paper on a live transaction.",
    },
  ],

  related: [
    "finance-outsourcing",
    "legal-process-outsourcing",
    "finance-and-accounting",
    "hr-outsourcing",
    "it-outsourcing",
    "admin-support",
  ],

  cta: {
    title: "Put capacity behind the pipeline.",
    body: "Tell us your investment criteria and how many targets you are screening today. We will show you what a pod would add to the funnel and what it costs.",
  },

  seo: {
    title: "M&A Deal Flow Support | Screening, Diligence & Integration — Valentisys",
    description:
      "Analytical and operational deal support: target screening, data room preparation, diligence tracking and post-merger integration. No success fee, capacity scales in 72 hours.",
  },
};
