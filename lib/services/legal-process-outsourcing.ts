import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const legalProcessOutsourcing: ServiceContent = {
  slug: "legal-process-outsourcing",
  name: "Paralegal & Legal Support",
  accent: "lilac",
  eyebrow: "Legal Support",
  summary:
    "Paralegal support, document preparation, records requests, discovery review and billing for small law firms — supervised by you, always.",
  trustLabel: "Supporting law firms like",

  sections: {
    benefits: {
      title: "What proper support changes at a small firm.",
      body: "Four outcomes baselined against your current turnaround and what you currently pay a contract paralegal before anything transfers.",
    },
    process: {
      title: "From a look at your matters to a trained paralegal.",
      body: "Six phases over about three weeks. Conflict checking and the supervision structure come before any file is opened.",
    },
    tech: {
      title: "Your case management, your document system.",
      body: "We work in your Clio, MyCase or Filevine under your own licenses, inside your retention and confidentiality rules.",
    },
    why: {
      title: "Why partners keep the support past the trial.",
      body: "Legal support fails on two things: work that has to be redone, and a supervision arrangement nobody wrote down until it was questioned.",
    },
    cases: {
      title: "Firms we support.",
      body: "Three engagements measured on turnaround, hours returned to attorneys, and the contract-paralegal spend they replaced.",
    },
    faq: {
      title: "Supervision, confidentiality and the unauthorized-practice line.",
      body: "The questions your state bar would ask about this arrangement, answered directly.",
    },
  },

  hero: {
    title: "Paralegal capacity without another salary on the books.",
    highlight: "under your supervision",
    body: "Trained paralegals and legal assistants handling document preparation, records requests, discovery review, intake and billing — under your supervision, inside your case management system, at a fraction of what a local contract paralegal costs.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Working with firms from 2 to 40 attorneys, in all 50 states",
    chips: [
      { value: "-64%", label: "Versus a local contract paralegal rate" },
      { value: "24 hrs", label: "Standard document turnaround" },
      { value: "98.9%", label: "Accuracy on sampled work" },
    ],
    figure: "layers",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The volume work that should never reach an attorney's rate.",
    body: "A large share of a small firm's week is high-volume and low-variance: records requests, medical chronologies, discovery indexing, filing packets, billing entries. It absorbs the paralegal you have, and when it overflows it lands on an attorney billing several hundred dollars an hour.",
    panels: [
      {
        heading: "What it is",
        body: "Trained paralegals and legal assistants working to your procedures, under your attorneys' supervision, inside your own case management system.",
      },
      {
        heading: "Who it's for",
        body: "Firms from two to forty attorneys — personal injury, immigration, family, estate planning, real estate and small commercial practices where the paperwork is the bottleneck.",
      },
      {
        heading: "The business case",
        body: "Volume work at roughly a third of a local contract paralegal rate, faster turnaround for clients, and your attorneys back on the work only they can bill for.",
      },
      {
        heading: "Why us",
        body: "The supervision structure and the line against unauthorized practice are designed with you and written down before any file opens — not worked out after someone asks.",
      },
    ],
    figure: "pipeline",
  },

  included: {
    eyebrow: "Scope",
    title: "Documents, discovery and the administration around them.",
    body: "One monthly rate per seat. Conflict checking, supervision protocols and quality sampling are inside it rather than billed separately.",
    items: [
      "Document preparation and filing packets to your checklist",
      "Medical records requests, tracking and chronology preparation",
      "Discovery indexing, Bates numbering and privilege logs",
      "First-pass document review under attorney supervision",
      "Demand letter preparation from your templates",
      "Deposition summaries and exhibit preparation",
      "Client intake, conflicts checking and matter opening",
      "Court calendar and deadline docketing",
      "Legal research and memo drafting for attorney review",
      "Contract abstraction and lease or agreement summaries",
      "Time entry, prebill preparation and client billing",
      "Quality sampling by a senior reviewer before anything goes back to you",
    ],
    note: "All work is performed under the supervision of your attorneys. We prepare, organize and summarize; legal advice, strategy and every filing signature stay with your firm. That line is written into the engagement before anyone gets a login.",
    figure: "network",
  },

  benefits: [
    {
      title: "Volume work at the right rate",
      body: "A medical chronology assembled by a contract paralegal at $65 an hour and the same chronology assembled to the same standard are the same deliverable at very different prices. That is where a small firm's margin actually is.",
      metric: { value: 64, suffix: "%", label: "Lower than a local contract paralegal rate" },
      link: { label: "See what transfers well", href: "#whats-included" },
      figure: "dashboard",
    },
    {
      title: "Files that stop waiting on paperwork",
      body: "A 24-hour turnaround on standard documents means a case moves when the attorney decides it should, not when someone finds an afternoon. Client complaints at small firms are overwhelmingly about pace.",
      metric: { value: 24, suffix: " hrs", label: "Standard document turnaround" },
      link: { label: "How the queue is run", href: "#process" },
      figure: "pipeline",
    },
    {
      title: "Accuracy you can evidence",
      body: "Output is sampled by a senior reviewer before it comes back to you, with accuracy tracked per person and per matter type. In document work, being able to produce that figure on demand is itself worth something.",
      metric: { value: 98.9, decimals: 1, suffix: "%", label: "Accuracy on sampled work" },
      link: { label: "How quality is controlled", href: "#why-us" },
      figure: "pulse",
    },
    {
      title: "Attorneys on the work that bills",
      body: "Partners at small firms spend a striking share of their week on work a trained paralegal should be doing. Returning those hours is usually worth several times what the seat costs.",
      metric: { value: 17, suffix: " hrs", label: "Weekly attorney time returned" },
      link: { label: "Talk about your matter mix", href: "#contact" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Matter scoping",
      duration: "Week 1",
      body: "Volumes, matter types, current turnaround and what you currently spend on contract help. We identify what transfers well and, equally, what should stay with your own people.",
    },
    {
      title: "Supervision structure",
      duration: "Week 1",
      body: "Who supervises, what may and may not be done without an attorney, confidentiality handling and conflict checking — designed with you and written down before any file opens.",
    },
    {
      title: "Capture your procedures",
      duration: "Week 1–2",
      body: "Your checklists for each matter type, your templates, your deadlines and your filing preferences. Where a procedure only exists in a partner's head, writing it down is itself valuable.",
    },
    {
      title: "Find your paralegal",
      duration: "Week 1–2",
      body: "Trained paralegals matched to your practice areas and conflict-checked before assignment. You interview every finalist and hold the veto.",
    },
    {
      title: "Calibration",
      duration: "Week 2–3",
      body: "They work a sample set in parallel with your own staff until the output matches. Nothing goes on a real file until it does.",
    },
    {
      title: "Run & report",
      duration: "Ongoing",
      body: "Weekly reporting on volumes, turnaround and accuracy — plus which matter types are consuming the most time, which is usually a useful pricing input.",
    },
  ],

  tech: [
    { name: "Clio", category: "Case management" },
    { name: "MyCase", category: "Case management" },
    { name: "Filevine", category: "Case management" },
    { name: "Smokeball", category: "Case management" },
    { name: "PracticePanther", category: "Case management" },
    { name: "NetDocuments", category: "Documents" },
    { name: "SharePoint", category: "Documents" },
    { name: "Dropbox", category: "Documents" },
    { name: "Everlaw", category: "Discovery" },
    { name: "Adobe Acrobat", category: "Document prep" },
    { name: "Westlaw", category: "Legal research" },
    { name: "LexisNexis", category: "Legal research" },
    { name: "PACER", category: "Federal filing" },
    { name: "NYSCEF", category: "New York e-filing" },
    { name: "QuickBooks", category: "Firm accounting" },
    { name: "Microsoft 365", category: "Email & files" },
  ],

  differentiators: [
    {
      title: "Trained paralegals, named and conflict-checked",
      body: "Experienced paralegals matched to your practice areas and conflict-checked before assignment. You see every résumé and interview every finalist.",
    },
    {
      title: "The supervision line is written first",
      body: "What may be done without an attorney, and what may never be, is agreed and documented before the first file opens. An arrangement nobody examined in advance is one that fails when someone examines it.",
    },
    {
      title: "Calibration before any real file",
      body: "They work in parallel with your own staff until output matches. Nothing touches a live matter during calibration, which typically takes two weeks.",
    },
    {
      title: "Senior sampling on everything",
      body: "A senior reviewer samples work before it comes back to you, with accuracy tracked per person. Volume document work without sampling is how a missing exhibit reaches a judge.",
    },
    {
      title: "We say what should stay with you",
      body: "Advice, strategy, anything requiring judgment about a client's case, and every signature. Scoping identifies that explicitly rather than quietly absorbing it.",
    },
    {
      title: "Never billed by the hour",
      body: "A flat monthly rate per seat. Hourly billing on support work gives a provider the same incentive problem your own clients complain about, and we would rather not have it.",
    },
  ],

  cases: [
    {
      industry: "Personal injury firm · Brooklyn, NY",
      title: "Medical chronologies that stopped taking six weeks",
      challenge:
        "A six-attorney firm where records requests and chronologies were handled by one paralegal alongside everything else. Median time from retainer to a complete chronology was 41 days, and demand letters went out late as a result.",
      solution:
        "A dedicated seat doing records requests and chronologies to a written checklist, with daily follow-up on outstanding providers and the firm's own paralegal reviewing rather than assembling.",
      results: [
        { value: 41, suffix: " days", label: "Retainer to chronology, down to 12" },
        { value: 22, suffix: " hrs", label: "Weekly paralegal time returned" },
        { value: 64, suffix: "%", label: "Below the contract paralegal rate" },
      ],
      accent: "lilac",
      figure: "pipeline",
    },
    {
      industry: "Immigration practice · Jackson Heights, Queens, NY",
      title: "Filing packets assembled to a checklist, every time",
      challenge:
        "Two attorneys handling high-volume filings where the forms, exhibits and translations were the bottleneck. Deadlines were met only because a partner regularly worked Sundays.",
      solution:
        "A trained legal assistant assembling packets per matter type to a written checklist, tracked against filing deadlines, with an attorney reviewing and signing everything before submission.",
      results: [
        { value: 2, suffix: " hrs", label: "Turnaround on a standard packet" },
        { value: 0, label: "Filing deadlines missed in 14 months" },
        { value: 0, label: "Sundays worked by a partner since" },
      ],
      accent: "sky",
      figure: "layers",
    },
    {
      industry: "Estate planning firm · Long Island, NY",
      title: "Billing that finally went out on the first",
      challenge:
        "A four-attorney firm where time entry happened at month end from memory, prebills sat unreviewed and invoices went out around the twentieth. Realization was well below what the work was worth.",
      solution:
        "Daily time entry from attorney notes, prebills prepared for one-click review, and invoices out on the first — plus a written collections follow-up starting the day a balance ages past terms.",
      results: [
        { value: 20, suffix: "th", label: "Invoice date, moved to the 1st" },
        { value: 18, suffix: "%", label: "Increase in realization" },
        { value: 31, suffix: " days", label: "Reduction in time to collect" },
      ],
      accent: "mint",
      figure: "network",
    },
  ],

  quotes: [
    {
      quote:
        "They wrote down the supervision structure with me before opening a single file. Two previous services wanted to work that out later, which is exactly the wrong order.",
      name: "Managing Partner",
      role: "Six-attorney personal injury firm",
      company: "Brooklyn, NY",
      initials: "MP",
      rating: 5,
    },
    {
      quote:
        "I have not worked a Sunday assembling a filing packet in over a year. That change alone justified it.",
      name: "Partner",
      role: "Two-attorney immigration practice",
      company: "Jackson Heights, Queens, NY",
      initials: "PT",
      rating: 5,
    },
    {
      quote:
        "Our invoices go out on the first now. It turns out our collections problem was really a billing problem, which nobody here had time to notice.",
      name: "Principal",
      role: "Four-attorney estate planning firm",
      company: "Long Island, NY",
      initials: "PR",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Are they qualified paralegals?",
      answer:
        "Experienced paralegals and legal assistants, matched to your practice areas, many with certification. You see every résumé and interview every finalist before they are assigned to your firm.",
    },
    {
      question: "How does supervision work if they are not in our office?",
      answer:
        "Exactly as it does for a remote paralegal you employed directly. A named attorney supervises, reviews the work, and signs everything. The structure is documented before the first file opens so it stands up if anyone asks.",
    },
    {
      question: "Is there any risk of unauthorized practice of law?",
      answer:
        "The line is written into the engagement in plain terms: they prepare, organize and summarize. They do not give legal advice, do not sign filings, do not set strategy and do not tell a client what their case is worth. Everything goes to your attorney.",
    },
    {
      question: "How do you handle conflicts?",
      answer:
        "Conflict checking runs before anyone is assigned and repeats when new matters open. Where a practice area requires it, a paralegal is ring-fenced to your firm only.",
    },
    {
      question: "Do you know New York procedure?",
      answer:
        "Yes, including NYSCEF e-filing, notice of claim deadlines against municipalities and the local rules that catch out-of-state help. We also support firms in Texas, Florida, Ohio and elsewhere, and we match people to the jurisdiction rather than assume it transfers.",
    },
    {
      question: "How is client confidentiality protected?",
      answer:
        "Signed confidentiality agreements, least-privilege access under your own logins, managed devices, no removable media and full session logging. Work happens inside your case management system, never in one of ours.",
    },
    {
      question: "How do you guarantee quality?",
      answer:
        "Calibration against your own staff before any live file, then continuous senior sampling with accuracy tracked per person. Both the method and the figures are available to you at any time.",
    },
    {
      question: "Can you scale up for a big case?",
      answer:
        "Yes. We have staffed document review teams of twenty within three weeks, with calibration run daily during ramp-up rather than only at the start.",
    },
    {
      question: "How quickly can someone start?",
      answer:
        "About three weeks, including the supervision structure, capturing your procedures and calibration. An urgent document review can compress to two.",
    },
    {
      question: "Will this replace our paralegal?",
      answer:
        "Usually not — it changes what they do. The firms that get the most from this move assembly work off their own paralegal so that person reviews, handles clients and does the work that needed someone in the building.",
    },
    {
      question: "What reporting do we get?",
      answer:
        "Weekly volumes, turnaround and accuracy, plus which matter types consume the most time. That last one is frequently the most useful thing on the report for pricing your work.",
    },
    {
      question: "How is it priced?",
      answer:
        "A flat monthly rate per seat for ongoing support, or a per-matter rate for a defined document review. Never hourly — that is the pricing model that creates the incentive problem in legal services in the first place.",
    },
  ],

  related: [
    "admin-support",
    "customer-service",
    "finance-and-accounting",
    "small-business",
    "it-outsourcing",
    "ma-deal-flow",
  ],

  cta: {
    title: "Find out what your volume legal work should cost.",
    body: "Send us your matter mix and what you currently spend on contract help. We will show you what transfers well, what should stay with your own people, and the difference.",
  },

  seo: {
    title: "Paralegal Support & Legal Outsourcing for Small Law Firms — Xevantis",
    description:
      "Trained paralegals handling document preparation, records requests, chronologies, discovery and billing for small US law firms, under your supervision and in your own case management system. 64% below contract paralegal rates.",
  },
};
