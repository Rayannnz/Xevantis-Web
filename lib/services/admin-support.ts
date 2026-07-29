import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const adminSupport: ServiceContent = {
  slug: "admin-support",
  name: "Admin Support",
  accent: "mint",
  eyebrow: "Admin Support",
  summary:
    "Order management, data operations, scheduling and executive assistance — the invisible work that decides how much your team gets done.",
  trustLabel: "Running back-office administration for",

  sections: {
    benefits: {
      title: "What happens when the admin stops piling up.",
      body: "Administrative drag is rarely measured, which is why it grows. These four are what we baseline before transition.",
    },
    process: {
      title: "From task audit to a team running your queue.",
      body: "Six phases over about two weeks. The task audit almost always finds work that should be eliminated rather than moved.",
    },
    tech: {
      title: "Your systems, your access, your data.",
      body: "We operate in the tools your team already uses. Nothing is re-keyed into a platform of ours.",
    },
    why: {
      title: "Why this is not a virtual assistant marketplace.",
      body: "The difference between an assistant and an administrative operation is documentation, cover and quality control.",
    },
    cases: {
      title: "Operations we run.",
      body: "Three programs measured on turnaround time, error rate, and the senior hours returned to people who cost more.",
    },
    faq: {
      title: "Scope, security and how tasks reach us.",
      body: "The practical questions about handing routine work to a team you do not sit beside.",
    },
  },

  hero: {
    title: "The admin that quietly eats your team's week.",
    highlight: "eliminate rather than move",
    body: "Order processing, data operations, scheduling, document handling and executive assistance, run by a named team to documented service levels. We start by finding the tasks you should eliminate rather than move.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Admin pods available from next month",
    chips: [
      { value: "4 hrs", label: "Standard task turnaround" },
      { value: "99.6%", label: "Data accuracy across managed queues" },
      { value: "14 hrs", label: "Weekly senior time returned, per client" },
    ],
    figure: "pipeline",
  },

  overview: {
    eyebrow: "Service overview",
    title: "Work nobody owns, done by someone who does.",
    body: "Administrative work spreads to whoever has capacity, which means it lands on people who are expensive and not especially good at it. It rarely appears in a budget line, so it never gets examined — and it compounds quietly for years.",
    panels: [
      {
        heading: "What it is",
        body: "A dedicated admin pod — coordinators, data specialists and a team lead — working a documented queue in your systems to agreed turnaround times.",
      },
      {
        heading: "Who it's for",
        body: "Operations, sales and executive teams drowning in coordination: order processing, CRM upkeep, scheduling, document preparation and reporting.",
      },
      {
        heading: "The business case",
        body: "Senior and commercial staff returned to the work they were hired for, at a fraction of what their time costs, with turnaround times that are actually measured.",
      },
      {
        heading: "Why us",
        body: "We document the process before staffing it, and report the tasks worth automating away. Some of what we take on, we hand back automated.",
      },
    ],
    figure: "network",
  },

  included: {
    eyebrow: "Scope",
    title: "The routine work, with a service level attached.",
    body: "One monthly rate per pod, priced by team size rather than task count. Process documentation and quality checking are inside it.",
    items: [
      "Order entry, processing and exception handling",
      "Quote, proposal and contract preparation from templates",
      "Data entry, validation, cleansing and enrichment",
      "CRM and system record maintenance",
      "Document processing, indexing and records management",
      "Calendar management, meeting scheduling and travel booking",
      "Inbox triage and correspondence drafting",
      "Supplier and customer onboarding administration",
      "Report compilation and distribution on a fixed cadence",
      "Research, list building and market data gathering",
      "Event and logistics coordination",
      "Process documentation and continuous improvement proposals",
    ],
    note: "Process documentation, templates and checklists built during the engagement are your intellectual property, delivered as we go rather than in a final handover week.",
    figure: "layers",
  },

  benefits: [
    {
      title: "Turnaround you can actually promise",
      body: "Standard tasks returned within four hours and larger pieces to a scheduled date agreed at intake. Internal admin has no service level, which is precisely why it becomes a bottleneck nobody can plan around.",
      metric: { value: 4, suffix: " hrs", label: "Median turnaround on standard tasks" },
      link: { label: "See how tasks are handled", href: "#process" },
      figure: "pulse",
    },
    {
      title: "Expensive people doing expensive work",
      body: "Sales staff stop building quotes, operations managers stop keying orders and executives stop rearranging their own diaries. The hours returned are worth several times what the pod costs.",
      metric: { value: 14, suffix: " hrs", label: "Weekly senior time returned, client average" },
      link: { label: "Talk about your task mix", href: "#contact" },
      figure: "dashboard",
    },
    {
      title: "Accuracy that is checked rather than assumed",
      body: "A sampling review against a documented standard, with errors traced to cause and the checklist updated. Internal admin is almost never quality-checked, which is why its error rate is invisible.",
      metric: { value: 99.6, decimals: 1, suffix: "%", label: "Data accuracy across managed queues" },
      link: { label: "How quality works", href: "#whats-included" },
      figure: "layers",
    },
    {
      title: "Work that disappears rather than moves",
      body: "The task audit routinely finds duplication, obsolete reports and steps that exist because someone once asked. We report those first, because moving pointless work offshore just makes it cheaper to be pointless.",
      metric: { value: 18, suffix: "%", label: "Of audited tasks eliminated rather than transferred" },
      link: { label: "See the task audit", href: "#process" },
      figure: "network",
    },
  ],

  process: [
    {
      title: "Task audit",
      duration: "Days 1–4",
      body: "We log what your team actually spends time on, with volumes and handling times. The output includes what should be eliminated or automated, not only what should transfer.",
    },
    {
      title: "Process design",
      duration: "Days 4–7",
      body: "Documented procedures, quality checklists, turnaround targets and the intake route. Where a task depends on undocumented judgment, we capture that explicitly.",
    },
    {
      title: "Recruit",
      duration: "Days 3–8",
      body: "Coordinators and specialists matched to your systems and sector. You interview every finalist and hold the veto before anyone is assigned to your queue.",
    },
    {
      title: "Train & shadow",
      duration: "Days 8–12",
      body: "Systems access, procedure training and a shadowing period on live tasks with your team checking every output before it is used.",
    },
    {
      title: "Go live",
      duration: "Day 14",
      body: "A ramped start on the highest-volume task types with full checking, widening as accuracy holds for two consecutive weeks.",
    },
    {
      title: "Run & improve",
      duration: "Ongoing",
      body: "Weekly reporting on volumes, turnaround and accuracy, plus a standing improvement backlog. Anything requested repeatedly becomes a template or an automation proposal.",
    },
  ],

  tech: [
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "NetSuite", category: "ERP" },
    { name: "SAP", category: "ERP" },
    { name: "Microsoft 365", category: "Productivity" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Zendesk", category: "Ticketing" },
    { name: "Asana", category: "Task management" },
    { name: "Monday.com", category: "Work management" },
    { name: "Airtable", category: "Operations data" },
    { name: "DocuSign", category: "E-signature" },
    { name: "SharePoint", category: "Document management" },
    { name: "Calendly", category: "Scheduling" },
    { name: "Power Automate", category: "Workflow automation" },
    { name: "Looker Studio", category: "Reporting" },
  ],

  differentiators: [
    {
      title: "Documented before it is staffed",
      body: "Every task gets a written procedure and a quality checklist before anyone works it. Undocumented admin is exactly how knowledge ends up trapped in one person's head again.",
    },
    {
      title: "We look for work to remove",
      body: "The task audit reports duplication and obsolete steps first. Roughly a fifth of what we assess should not be done by anyone, and saying so costs us billable seats.",
    },
    {
      title: "Cover, not a single assistant",
      body: "A pod means PTO, sick days and peaks are absorbed. A single virtual assistant is a single point of failure with a personal calendar.",
    },
    {
      title: "Quality is sampled",
      body: "A documented standard with sampling review and root-cause coaching. Most internal admin has no measured error rate at all, which is not the same as having none.",
    },
    {
      title: "Named people you interview",
      body: "The same coordinators every day, learning your systems and your preferences. Marketplace assistants relearn your business every time you get a different one.",
    },
    {
      title: "Automation handed back",
      body: "Where a task is genuinely repeatable, our automation team can remove it entirely — and we will propose that even though it reduces the pod.",
    },
  ],

  cases: [
    {
      industry: "Wholesale",
      title: "Order processing that stopped losing a day",
      challenge:
        "Orders arriving by email and phone, keyed by sales staff between customer calls, with a 24-hour lag before anything reached the warehouse.",
      solution:
        "A documented intake process with a four-hour turnaround target, worked by a five-person pod, with exception rules agreed so only genuine problems reached the sales team.",
      results: [
        { value: 4, suffix: " hrs", label: "Order-to-warehouse turnaround" },
        { value: 62, suffix: "%", label: "Fewer order entry errors" },
        { value: 16, suffix: " hrs", label: "Weekly selling time returned per rep" },
      ],
      accent: "mint",
      figure: "pipeline",
    },
    {
      industry: "Professional services",
      title: "Executive support across four timezones",
      challenge:
        "Six partners coordinating their own diaries, travel and document preparation, losing roughly a day a week each to it.",
      solution:
        "A three-person coordination pod with overlapping shifts covering all four timezones, plus template systems for the document types produced most often.",
      results: [
        { value: 6, suffix: " hrs", label: "Weekly time returned per partner" },
        { value: 4, label: "Timezones covered continuously" },
        { value: 2, suffix: " hrs", label: "Turnaround on document preparation" },
      ],
      accent: "lilac",
      figure: "network",
    },
    {
      industry: "Healthcare services",
      title: "A data cleanse that removed the work permanently",
      challenge:
        "A referral database with 40% duplicate or incomplete records, generating constant manual correction downstream.",
      solution:
        "A one-off cleanse and de-duplication, then validation rules at the point of entry so the errors stopped being created — reducing the ongoing pod by two seats.",
      results: [
        { value: 99.6, decimals: 1, suffix: "%", label: "Record accuracy after cleanse" },
        { value: 2, label: "Ongoing seats no longer needed" },
        { value: 71, suffix: "%", label: "Reduction in downstream corrections" },
      ],
      accent: "sky",
      figure: "dashboard",
    },
  ],

  quotes: [
    {
      quote:
        "Their audit told us 18% of what we were about to outsource should just stop happening. That conversation cost them seats and bought them a lot of trust.",
      name: "Marcus Delaney",
      role: "Operations Director",
      company: "Northwind",
      initials: "MD",
      rating: 5,
    },
    {
      quote:
        "Our sales team stopped keying orders between calls. Revenue per rep went up and nobody had to work harder.",
      name: "Priya Venkatesan",
      role: "Head of Commercial",
      company: "Peakline",
      initials: "PV",
      rating: 5,
    },
    {
      quote:
        "They automated part of their own scope and reduced our bill. I did not expect that from a supplier paid by the seat.",
      name: "Oliver Brandt",
      role: "Chief Operating Officer",
      company: "Aurora Health",
      initials: "OB",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "What kinds of task can you take on?",
      answer:
        "Anything routine, rule-based and documentable: order processing, data work, scheduling, document preparation, research, reporting and inbox triage. If a task depends on judgment we cannot capture, we will say so during the audit.",
    },
    {
      question: "How do tasks reach the team?",
      answer:
        "Through your existing systems — a shared inbox, a ticket queue, a project tool or direct system access. The intake route is agreed in process design and is deliberately the same one your team already uses.",
    },
    {
      question: "How quickly does a pod go live?",
      answer:
        "About fourteen days from a signed scope, including the task audit and a shadowing period. Straightforward single-process engagements can go live in ten.",
    },
    {
      question: "Is this the same as hiring a virtual assistant?",
      answer:
        "No. A pod has documented procedures, quality sampling, PTO and sick cover and a team lead accountable for turnaround. A single assistant has none of those and is a single point of failure.",
    },
    {
      question: "Will the same people work on our account?",
      answer:
        "Yes. Named coordinators dedicated to your queue, whom you interview before they join. You are told immediately if anyone leaves the account.",
    },
    {
      question: "How do you handle access to our systems?",
      answer:
        "Named user accounts under your control with least-privilege permissions, managed devices and access reviewed quarterly. We can work within a VDI where data classification requires it.",
    },
    {
      question: "What are the turnaround commitments?",
      answer:
        "Four hours for standard tasks during covered hours, with scheduled dates for larger pieces agreed at intake. Both are reported weekly against actuals rather than described as targets.",
    },
    {
      question: "What if the work is seasonal?",
      answer:
        "Pods flex with 30 days' notice in either direction. For known peaks we add pre-trained capacity from the same hub, so surge staff already know your procedures.",
    },
    {
      question: "Do you work in our timezone?",
      answer:
        "Yes. Pods are staffed from the hub giving the overlap you need, with a minimum of four hours of live overlap and often full coverage of your working day.",
    },
    {
      question: "How is quality checked?",
      answer:
        "Sampling against a documented standard, with errors traced to root cause and the procedure updated. Accuracy is reported weekly alongside volume and turnaround.",
    },
    {
      question: "Can you automate some of this work?",
      answer:
        "Often, yes — and we propose it even though it reduces the pod. Where a task is genuinely repeatable, removing it is worth more to you than having it done cheaply.",
    },
    {
      question: "How is it priced?",
      answer:
        "A fixed monthly rate per pod by size and skill mix, never per task. Volume bands are agreed up front with a published rate card for changes.",
    },
  ],

  related: [
    "customer-service",
    "finance-and-accounting",
    "ecommerce-bpo",
    "it-outsourcing",
    "small-business",
    "legal-process-outsourcing",
  ],

  cta: {
    title: "Start with a task audit, not a contract.",
    body: "Four days, a fixed fee, and a written report on what your team spends time on — including what should be eliminated. Yours to act on with or without us.",
  },

  seo: {
    title: "Admin Support Outsourcing | Back-Office & Data Operations — Xevantis",
    description:
      "Dedicated admin pods for order processing, data operations, scheduling and executive support. Four-hour turnaround, 99.6% accuracy, documented procedures you own.",
  },
};
