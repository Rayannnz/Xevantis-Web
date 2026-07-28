import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const legalProcessOutsourcing: ServiceContent = {
  slug: "legal-process-outsourcing",
  name: "Legal Process Outsourcing",
  accent: "lilac",
  eyebrow: "Legal Process",
  summary:
    "Contract review, document review, paralegal support and compliance administration by qualified lawyers, under your supervision and privilege.",
  trustLabel: "Supporting legal teams at",

  sections: {
    benefits: {
      title: "What legal support at the right cost level changes.",
      body: "Four outcomes baselined against your current turnaround and external counsel spend before anything transfers.",
    },
    process: {
      title: "From matter scoping to a team on your playbook.",
      body: "Six phases over about three weeks. Conflict checking and privilege design come before any document is opened.",
    },
    tech: {
      title: "Contract, review and eDiscovery platforms.",
      body: "We work in your systems under your licences, inside your document retention and privilege boundaries.",
    },
    why: {
      title: "Why general counsel keep the team on the panel.",
      body: "Legal outsourcing fails on two things: quality that needs re-reviewing, and privilege arrangements that do not survive scrutiny.",
    },
    cases: {
      title: "Matters we support.",
      body: "Three engagements measured on turnaround, external counsel spend displaced, and review accuracy on sampled sets.",
    },
    faq: {
      title: "Privilege, supervision and qualification.",
      body: "The questions your general counsel and your regulator will ask, answered directly.",
    },
  },

  hero: {
    title: "Legal capacity without external counsel rates.",
    highlight: "under your supervision",
    body: "Qualified lawyers and paralegals handling contract review, document review and compliance administration under your supervision and inside your privilege arrangements — at a fraction of what a firm charges for the same work.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Legal pods available for Q1 matters",
    chips: [
      { value: "-64%", label: "Versus external counsel hourly rates" },
      { value: "24 hrs", label: "Standard contract review turnaround" },
      { value: "98.9%", label: "Accuracy on sampled review sets" },
    ],
    figure: "layers",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The volume work that should never reach a partner's rate card.",
    body: "A large share of in-house legal work is high-volume and low-variance: NDAs, standard-form contracts, first-pass document review, compliance registers. It absorbs a legal team's week and, when it overflows, it goes to a firm at several hundred pounds an hour.",
    panels: [
      {
        heading: "What it is",
        body: "A legal pod of qualified lawyers and paralegals working to your playbook, under your in-house supervision, inside your systems and your privilege structure.",
      },
      {
        heading: "Who it's for",
        body: "In-house legal teams with high contract volume, companies in litigation or investigation with document review at scale, and regulated businesses with heavy compliance administration.",
      },
      {
        heading: "The business case",
        body: "Volume work at roughly a third of external counsel rates, faster turnaround for the business, and your own lawyers freed for the matters that need judgement.",
      },
      {
        heading: "Why us",
        body: "Privilege and supervision are designed with your general counsel before any matter opens, and documented so the arrangement stands up when it is examined.",
      },
    ],
    figure: "pipeline",
  },

  included: {
    eyebrow: "Scope",
    title: "Review, drafting and the compliance administration around them.",
    body: "One monthly rate per pod. Conflict checking, supervision protocols and quality sampling are inside it rather than billed as matter management.",
    items: [
      "Contract review against your playbook with deviation reporting",
      "NDA, MSA and standard-form drafting and negotiation support",
      "Contract abstraction, summarisation and obligation extraction",
      "Contract lifecycle management data entry and renewals tracking",
      "First-pass document review for litigation and investigations",
      "Privilege and responsiveness coding under supervision",
      "Legal research and memoranda preparation",
      "Regulatory horizon scanning and change summaries",
      "Compliance register maintenance and policy administration",
      "Due diligence document review for transactions",
      "Litigation support: bundling, chronologies and disclosure logs",
      "Quality sampling by a senior reviewer before any output is released",
    ],
    note: "All work is performed under the supervision of your qualified in-house lawyers. We prepare and review; legal advice and final sign-off always remain with your team or your instructed firm.",
    figure: "network",
  },

  benefits: [
    {
      title: "Volume work at the right rate",
      body: "An NDA reviewed by a firm and an NDA reviewed against your playbook are the same task at very different prices. Moving the low-variance volume is where legal budgets have most room without any loss of quality.",
      metric: { value: 64, suffix: "%", label: "Lower than equivalent external counsel rates" },
      link: { label: "See what transfers well", href: "#whats-included" },
      figure: "dashboard",
    },
    {
      title: "Contracts that stop blocking the business",
      body: "A 24-hour standard review turnaround means sales stops waiting a fortnight for a redline. Legal's reputation inside a company is set almost entirely by how long the queue is.",
      metric: { value: 24, suffix: " hrs", label: "Standard contract review turnaround" },
      link: { label: "How the queue is run", href: "#process" },
      figure: "pipeline",
    },
    {
      title: "Review accuracy you can evidence",
      body: "Every reviewer's output is sampled by a senior lawyer before release, with accuracy tracked per person and per matter. In document review, an accuracy figure you can produce on demand is itself a deliverable.",
      metric: { value: 98.9, decimals: 1, suffix: "%", label: "Accuracy on sampled review sets" },
      link: { label: "How quality is controlled", href: "#why-us" },
      figure: "pulse",
    },
    {
      title: "Your lawyers on the matters that need them",
      body: "In-house counsel spend a striking share of their week on standard-form contracts. Returning that time is what lets a small legal team act as a business partner rather than a bottleneck.",
      metric: { value: 17, suffix: " hrs", label: "Weekly in-house counsel time returned" },
      link: { label: "Talk about your matter mix", href: "#contact" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Matter scoping",
      duration: "Week 1",
      body: "Volume, matter types, current turnaround and external counsel spend by category. We identify what should transfer and, equally, what should stay with your firm.",
    },
    {
      title: "Privilege & supervision design",
      duration: "Week 1",
      body: "Supervision structure, privilege arrangements, conflict checking and data handling, designed with your general counsel and documented before any matter opens.",
    },
    {
      title: "Playbook capture",
      duration: "Week 1–2",
      body: "Your negotiation positions, fallback clauses, escalation thresholds and approval limits, written into a working playbook. Where positions are unwritten, capturing them is itself valuable.",
    },
    {
      title: "Recruit",
      duration: "Week 1–2",
      body: "Qualified lawyers and paralegals matched to your jurisdiction and matter types, conflict-checked. You interview every finalist and hold the veto.",
    },
    {
      title: "Calibration",
      duration: "Week 2–3",
      body: "The pod reviews a sample set in parallel with your team until agreement rates hold. Nothing is released to the business until calibration passes.",
    },
    {
      title: "Run & report",
      duration: "Ongoing",
      body: "Weekly reporting on volumes, turnaround, deviation patterns and accuracy — including which clauses the business most often gets pushed on, which is useful commercial intelligence.",
    },
  ],

  tech: [
    { name: "Ironclad", category: "Contract lifecycle" },
    { name: "DocuSign CLM", category: "Contract lifecycle" },
    { name: "Icertis", category: "Contract lifecycle" },
    { name: "Relativity", category: "eDiscovery" },
    { name: "Everlaw", category: "eDiscovery" },
    { name: "Disco", category: "eDiscovery" },
    { name: "Luminance", category: "Contract analysis" },
    { name: "Kira", category: "Document analysis" },
    { name: "HighQ", category: "Legal collaboration" },
    { name: "SharePoint", category: "Document management" },
    { name: "iManage", category: "Document management" },
    { name: "LexisNexis", category: "Legal research" },
    { name: "Westlaw", category: "Legal research" },
    { name: "Jira", category: "Matter tracking" },
    { name: "Power BI", category: "Reporting" },
  ],

  differentiators: [
    {
      title: "Qualified lawyers, named and conflict-checked",
      body: "Admitted lawyers and experienced paralegals, matched to your jurisdiction, conflict-checked before assignment. You see every qualification and interview every finalist.",
    },
    {
      title: "Privilege designed with your GC",
      body: "The supervision and privilege structure is agreed and documented before the first matter opens. An arrangement that has not been examined in advance is one that fails when it is.",
    },
    {
      title: "Calibration before release",
      body: "The pod reviews in parallel with your team until agreement rates hold. Nothing reaches the business during calibration, which typically takes a fortnight.",
    },
    {
      title: "Senior sampling on every output",
      body: "A senior lawyer samples work before release, with accuracy tracked per reviewer. Volume review without sampling is how a disclosure error reaches a court.",
    },
    {
      title: "We say what should stay with your firm",
      body: "Advisory work, contentious strategy and anything requiring a regulated opinion belongs with counsel. Scoping identifies that explicitly rather than quietly absorbing it.",
    },
    {
      title: "Commercial intelligence from the queue",
      body: "Deviation reporting shows which clauses your counterparties push on most. That is a pricing and playbook input your legal team rarely has time to compile.",
    },
  ],

  cases: [
    {
      industry: "Enterprise software",
      title: "Clearing a contract queue the sales team had stopped trusting",
      challenge:
        "A two-lawyer in-house team facing 340 contracts a quarter, with sales routinely waiting two weeks and escalating to the CEO to jump the queue.",
      solution:
        "A four-person pod on a captured playbook handling standard-form review, escalating only genuine deviations, with a 24-hour turnaround commitment.",
      results: [
        { value: 24, suffix: " hrs", label: "Standard review turnaround, from 11 days" },
        { value: 81, suffix: "%", label: "Of contracts closed without in-house involvement" },
        { value: 17, suffix: " hrs", label: "Weekly counsel time returned" },
      ],
      accent: "lilac",
      figure: "pipeline",
    },
    {
      industry: "Financial services",
      title: "First-pass review across 1.2 million documents",
      challenge:
        "A regulatory investigation requiring responsiveness and privilege coding at a volume that would have cost seven figures at firm rates.",
      solution:
        "A twenty-two-reviewer pod under instructing-firm supervision, with daily calibration sessions and 5% senior sampling throughout the review.",
      results: [
        { value: 1.2, decimals: 1, suffix: "m", label: "Documents reviewed" },
        { value: 98.9, decimals: 1, suffix: "%", label: "Accuracy on sampled sets" },
        { value: 2.9, decimals: 1, prefix: "£", suffix: "m", label: "Below the firm-rate estimate" },
      ],
      accent: "sky",
      figure: "layers",
    },
    {
      industry: "Healthcare",
      title: "Building a compliance register that had never existed",
      challenge:
        "Obligations spread across 900 supplier and clinical contracts, with no central record of renewal dates, notice periods or restrictive terms.",
      solution:
        "Systematic abstraction into a structured register with obligation extraction and renewal alerting, then ongoing maintenance as new contracts were signed.",
      results: [
        { value: 900, label: "Contracts abstracted" },
        { value: 41, label: "Auto-renewals identified before triggering" },
        { value: 380, prefix: "£", suffix: "k", label: "Annualised spend avoided" },
      ],
      accent: "mint",
      figure: "network",
    },
  ],

  quotes: [
    {
      quote:
        "They designed the privilege and supervision structure with me before opening a single document. Two previous vendors had wanted to work that out later.",
      name: "Fiona Halloran",
      role: "General Counsel",
      company: "Northwind",
      initials: "FH",
      rating: 5,
    },
    {
      quote:
        "Sales stopped escalating to the chief executive to get contracts reviewed. That change alone justified the engagement.",
      name: "Anand Krishnan",
      role: "Head of Legal",
      company: "Gridworks",
      initials: "AK",
      rating: 5,
    },
    {
      quote:
        "The deviation report told us which three clauses were costing us the most negotiation time. We changed the standard form and the queue shortened again.",
      name: "Beatrice Lindholm",
      role: "Legal Operations Manager",
      company: "Vertex Pay",
      initials: "BL",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Are your people qualified lawyers?",
      answer:
        "Pods are staffed with admitted lawyers and experienced paralegals, matched to the relevant jurisdiction and matter type. You see every qualification and interview every finalist before assignment.",
    },
    {
      question: "Does this arrangement preserve privilege?",
      answer:
        "The supervision and privilege structure is designed with your general counsel or instructing firm before any matter opens, and documented. Work is performed under your supervision, which is what preserves the position.",
    },
    {
      question: "Do you provide legal advice?",
      answer:
        "No. We prepare, review and abstract under supervision. Legal advice and final sign-off always remain with your qualified in-house team or your instructed firm — that boundary is written into the engagement.",
    },
    {
      question: "How do you handle conflicts of interest?",
      answer:
        "Conflict checking runs before any reviewer is assigned and is repeated when new matters open. Reviewers are ring-fenced to a single client where the matter type requires it.",
    },
    {
      question: "What jurisdictions can you cover?",
      answer:
        "Common law jurisdictions primarily — England and Wales, US, Ireland, Australia, India — with civil law coverage available for contract abstraction and translation-supported review. We will decline where we lack genuine depth.",
    },
    {
      question: "How do you guarantee review quality?",
      answer:
        "Calibration against your team before any release, then continuous senior sampling — typically 5% of output — with accuracy tracked per reviewer. Both the method and the figures are auditable.",
    },
    {
      question: "How is data security handled?",
      answer:
        "ISO 27001 certified and SOC 2 Type II audited, with segregated secure floors, no removable media, managed devices and full session logging. We work inside your document management system, not ours.",
    },
    {
      question: "Can you scale for a large review?",
      answer:
        "Yes. We have staffed reviews of over twenty reviewers within three weeks, with calibration run daily during ramp-up rather than only at the start.",
    },
    {
      question: "How quickly can a pod start?",
      answer:
        "About three weeks, including privilege design, playbook capture and calibration. Document review for an urgent matter can compress to two with your firm's cooperation on supervision.",
    },
    {
      question: "Will this replace our law firm?",
      answer:
        "For volume work, largely. For advisory, contentious strategy and regulated opinions, no — and we say so during scoping rather than absorbing work we should not be doing.",
    },
    {
      question: "What reporting do we get?",
      answer:
        "Weekly volumes, turnaround, accuracy and deviation patterns. The deviation report — which clauses counterparties push on most — is often the most commercially useful output.",
    },
    {
      question: "How is it priced?",
      answer:
        "A fixed monthly rate per pod for ongoing work, or a per-matter rate for defined document review projects. Never hourly, which is the pricing model that creates the incentive problem in legal services.",
    },
  ],

  related: [
    "admin-support",
    "ma-deal-flow",
    "finance-and-accounting",
    "hr-outsourcing",
    "it-outsourcing",
    "nearshore-bpo",
  ],

  cta: {
    title: "Find out what your volume legal work should cost.",
    body: "Send us your matter mix and last year's external counsel spend by category. We will show you what transfers well, what should stay with your firm, and the difference.",
  },

  seo: {
    title: "Legal Process Outsourcing | Contract & Document Review — Valentisys",
    description:
      "Qualified lawyers handling contract review, document review and compliance administration under your supervision and privilege. 64% below external counsel rates, 24-hour turnaround.",
  },
};
