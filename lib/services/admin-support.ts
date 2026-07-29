import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const adminSupport: ServiceContent = {
  slug: "admin-support",
  name: "Admin Support",
  accent: "mint",
  eyebrow: "Admin Support",
  summary:
    "Insurance verification, prior authorizations, records requests, scheduling and data entry — the paperwork that quietly eats your staff's day.",
  trustLabel: "Handling the paperwork for",

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
      body: "The difference between an assistant and a real admin function is documentation, cover when someone is sick, and somebody checking the work.",
    },
    cases: {
      title: "Offices we take the paperwork off.",
      body: "Three engagements measured on turnaround, error rate, and the hours handed back to people who should be seeing patients or clients.",
    },
    faq: {
      title: "Scope, security and how work reaches us.",
      body: "The practical questions about handing routine paperwork to someone who does not sit at your front desk.",
    },
  },

  hero: {
    title: "The paperwork that quietly eats your staff's week.",
    highlight: "stop doing rather than move",
    body: "Insurance verification, prior authorizations, records requests, intake forms, scheduling and data entry — handled by a named person to a turnaround you can promise. We start by finding the tasks you should stop doing rather than move.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Seats available from next month, anywhere in the US",
    chips: [
      { value: "4 hrs", label: "Standard turnaround on routine work" },
      { value: "99.6%", label: "Accuracy across the queues we run" },
      { value: "14 hrs", label: "Weekly staff time returned, per office" },
    ],
    figure: "pipeline",
  },

  overview: {
    eyebrow: "Service overview",
    title: "Work nobody owns, done by someone who does.",
    body: "In a small office the paperwork lands on whoever has a free minute, which usually means the front desk, the office manager, or the owner at 9pm. It never appears in a budget line, so it never gets examined — and it compounds quietly for years.",
    panels: [
      {
        heading: "What it is",
        body: "A named person, or a small team, working a documented queue inside your own practice management or case software to agreed turnaround times.",
      },
      {
        heading: "Who it's for",
        body: "Clinics buried in insurance verification and prior authorizations, firms in records requests and document prep, pharmacies in refill paperwork, offices in data entry and scheduling.",
      },
      {
        heading: "The business case",
        body: "Your clinical and licensed staff returned to the work only they can do, for a fraction of what their hours cost, with a turnaround that is actually measured.",
      },
      {
        heading: "Why us",
        body: "We document the process before staffing it, and tell you which tasks should stop entirely. Some of what we take on, we hand back automated.",
      },
    ],
    figure: "network",
  },

  included: {
    eyebrow: "Scope",
    title: "The routine work, with a service level attached.",
    body: "One monthly rate per pod, priced by team size rather than task count. Process documentation and quality checking are inside it.",
    items: [
      "Insurance eligibility and benefits verification before the visit",
      "Prior authorization submission and follow-up",
      "New patient and new client intake paperwork",
      "Medical and legal records requests, tracking and release",
      "Data entry, validation and cleanup in your own system",
      "Chart, matter and file preparation ahead of the day",
      "Proposal, engagement letter and contract prep from your templates",
      "Calendar management, scheduling and travel booking",
      "Inbox triage and drafting routine correspondence",
      "Vendor and referral source administration",
      "Recurring report compilation on a fixed schedule",
      "Written procedures and improvement proposals as we go",
    ],
    note: "The written procedures, templates and checklists we build are yours, delivered as we go rather than in a final handover week. We work in your own systems under your own logins throughout.",
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
      title: "Licensed people doing licensed work",
      body: "Hygienists stop chasing benefits, paralegals stop indexing records and the owner stops doing data entry at 9pm. The hours returned are worth several times what the seat costs.",
      metric: { value: 14, suffix: " hrs", label: "Weekly staff time returned, office average" },
      link: { label: "Talk about your task mix", href: "#contact" },
      figure: "dashboard",
    },
    {
      title: "Accuracy that is checked rather than assumed",
      body: "A sampling review against a written standard, with errors traced to cause and the checklist updated. Front-desk paperwork is almost never quality-checked, which is why its error rate is invisible until a claim is denied.",
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
      body: "We log what your staff actually spend time on, with volumes and handling times. The output includes what should stop or be automated, not only what should transfer.",
    },
    {
      title: "Write the procedures",
      duration: "Days 4–7",
      body: "Written steps, quality checklists, turnaround targets and how work reaches us. Where a task depends on judgment nobody has written down, we capture that explicitly.",
    },
    {
      title: "Find your person",
      duration: "Days 3–8",
      body: "Matched to your systems and your industry — dental benefits, prior authorizations, legal records. You interview every finalist and hold the veto before anyone touches your queue.",
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
    { name: "Dentrix", category: "Dental practice" },
    { name: "Open Dental", category: "Dental practice" },
    { name: "Athenahealth", category: "Medical records" },
    { name: "eClinicalWorks", category: "Medical records" },
    { name: "Availity", category: "Eligibility & claims" },
    { name: "CoverMyMeds", category: "Prior authorization" },
    { name: "Clio", category: "Legal practice" },
    { name: "MyCase", category: "Legal practice" },
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "Microsoft 365", category: "Email & files" },
    { name: "Google Workspace", category: "Email & files" },
    { name: "DocuSign", category: "E-signature" },
    { name: "SharePoint", category: "Document storage" },
    { name: "Calendly", category: "Scheduling" },
    { name: "Power Automate", category: "Workflow automation" },
  ],

  differentiators: [
    {
      title: "Written down before it is staffed",
      body: "Every task gets a written procedure and a checklist before anyone works it. Undocumented paperwork is exactly how everything ends up trapped in one person's head again.",
    },
    {
      title: "We look for work to remove",
      body: "The audit reports duplication and obsolete steps first. Roughly a fifth of what we assess should not be done by anyone, and saying so costs us billable seats.",
    },
    {
      title: "Cover, not a single assistant",
      body: "Somebody is trained as backup from week one, so PTO, sick days and busy weeks are absorbed. A lone virtual assistant is a single point of failure with a personal calendar.",
    },
    {
      title: "Quality is actually sampled",
      body: "A written standard with sampling review and root-cause coaching. Most front-desk paperwork has no measured error rate at all, which is not the same as having none.",
    },
    {
      title: "Named people you interview",
      body: "The same person every day, learning your systems and your preferences. Marketplace assistants relearn your office every time you get a different one.",
    },
    {
      title: "Automation handed back",
      body: "Where a task is genuinely repeatable, our automation team can remove it entirely — and we will propose that even though it reduces the pod.",
    },
  ],

  cases: [
    {
      industry: "Orthopedic practice · Bronx, NY",
      title: "Prior authorizations that stopped delaying surgery",
      challenge:
        "A five-provider practice where prior authorizations were handled by whoever was free, in gaps between patients. Average submission-to-approval ran eleven days and three surgeries a month were being rescheduled because of it.",
      solution:
        "One dedicated seat doing nothing but authorizations and eligibility, with a written payer-by-payer procedure and a daily follow-up cadence on anything outstanding.",
      results: [
        { value: 11, suffix: " days", label: "Authorization turnaround, down to 4" },
        { value: 0, label: "Surgeries rescheduled for authorization since" },
        { value: 9, suffix: " hrs", label: "Weekly clinical staff time returned" },
      ],
      accent: "mint",
      figure: "pipeline",
    },
    {
      industry: "Immigration law firm · Jackson Heights, Queens, NY",
      title: "Document prep for a practice built on paperwork",
      challenge:
        "Two attorneys and one paralegal handling filings where the volume of forms, exhibits and translations was the bottleneck. The paralegal spent most of her week assembling packets rather than on substantive work.",
      solution:
        "A trained document specialist assembling filing packets to a written checklist per matter type, with the paralegal reviewing rather than building, and everything tracked to filing deadlines.",
      results: [
        { value: 22, suffix: " hrs", label: "Weekly paralegal time returned" },
        { value: 2, suffix: " hrs", label: "Turnaround on a standard packet" },
        { value: 0, label: "Filing deadlines missed in 14 months" },
      ],
      accent: "lilac",
      figure: "network",
    },
    {
      industry: "Independent pharmacy · Bronx, NY",
      title: "A cleanup that removed the work permanently",
      challenge:
        "A patient database with 40% duplicate or incomplete records, generating constant manual correction and a steady trickle of failed insurance submissions.",
      solution:
        "A one-off cleanse and de-duplication, then validation rules at the point of entry so the errors stopped being created — which reduced the ongoing seat to a half.",
      results: [
        { value: 99.6, decimals: 1, suffix: "%", label: "Record accuracy after cleanup" },
        { value: 0.5, decimals: 1, label: "Ongoing seats needed, down from 1.5" },
        { value: 71, suffix: "%", label: "Fewer downstream corrections" },
      ],
      accent: "sky",
      figure: "dashboard",
    },
  ],

  quotes: [
    {
      quote:
        "Their audit told us 18% of what we were about to hand over should just stop happening. That conversation cost them seats and bought them a lot of trust.",
      name: "Practice Administrator",
      role: "Five-provider orthopedic practice",
      company: "Bronx, NY",
      initials: "PA",
      rating: 5,
    },
    {
      quote:
        "My paralegal stopped assembling packets and went back to being a paralegal. Nobody had to work harder for that to happen.",
      name: "Partner",
      role: "Two-attorney immigration firm",
      company: "Jackson Heights, Queens, NY",
      initials: "PT",
      rating: 5,
    },
    {
      quote:
        "They automated part of their own scope and cut our bill. I did not expect that from someone paid by the seat.",
      name: "Pharmacist-in-Charge",
      role: "Independent pharmacy, two locations",
      company: "Bronx, NY",
      initials: "PC",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "What kinds of paperwork can you take on?",
      answer:
        "Anything routine and rule-based: eligibility and benefits verification, prior authorizations, records requests, intake forms, data entry, scheduling, document prep and inbox triage. If a task depends on judgment we cannot capture, we will say so during the audit.",
    },
    {
      question: "How does work reach the team?",
      answer:
        "Through what you already use — a shared inbox, a task list, or direct access to your practice management or case software. The route is agreed up front and is deliberately the one your staff already work in.",
    },
    {
      question: "How quickly can someone start?",
      answer:
        "About fourteen days from a signed scope, including the task audit and a shadowing period. A single straightforward process — just eligibility verification, say — can start in ten.",
    },
    {
      question: "Is this the same as hiring a virtual assistant?",
      answer:
        "No. You get written procedures, quality sampling, trained backup cover and someone accountable for turnaround. A lone assistant from a marketplace has none of those and disappears when they are sick.",
    },
    {
      question: "Will it be the same person every time?",
      answer:
        "Yes. A named person on your queue, whom you interview before they start, plus a trained backup for their time off. You hear that day if anyone leaves your account.",
    },
    {
      question: "How do you access our systems safely?",
      answer:
        "Named user accounts you control, with the minimum permissions the work needs, on managed devices, reviewed quarterly. Where a clinic requires it we work inside your own remote desktop environment.",
    },
    {
      question: "Are you HIPAA compliant?",
      answer:
        "Yes, and we sign a business associate agreement before anyone opens a chart. Access is least-privilege and logged, and everyone handling patient information is trained and under a signed confidentiality agreement.",
    },
    {
      question: "What turnaround do you commit to?",
      answer:
        "Four hours for routine work during covered hours, and an agreed date for larger pieces. Both are reported weekly against what actually happened rather than described as an aspiration.",
    },
    {
      question: "What if our volume is seasonal?",
      answer:
        "Seats flex with 30 days' notice in either direction — flu season, open enrollment, tax season. Extra cover comes from people already trained on your procedures, not from temps.",
    },
    {
      question: "How is quality checked?",
      answer:
        "Sampling against a written standard, with errors traced to root cause and the procedure updated so the same mistake does not recur. Accuracy is reported weekly alongside volume and turnaround.",
    },
    {
      question: "Can some of this just be automated?",
      answer:
        "Often, yes — and we propose it even though it reduces our own seats. Where a task is genuinely repeatable, removing it is worth more to you than having it done cheaply.",
    },
    {
      question: "How is it priced?",
      answer:
        "A flat monthly rate per seat, never per task or per claim. Volume bands are agreed up front with a published rate card for changes, and you can take a half seat if that is what the work needs.",
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
    body: "Four days, a fixed fee, and a written report on what your staff actually spend their time on — including what should stop entirely. Yours to act on with or without us.",
  },

  seo: {
    title: "Medical, Dental & Legal Admin Support Outsourcing — Xevantis",
    description:
      "Insurance verification, prior authorizations, records requests, intake and data entry for clinics, dental practices, pharmacies and law firms across the US. Four-hour turnaround, 99.6% accuracy, HIPAA compliant.",
  },
};
