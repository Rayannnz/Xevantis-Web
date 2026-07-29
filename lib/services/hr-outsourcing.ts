import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const hrOutsourcing: ServiceContent = {
  slug: "hr-outsourcing",
  name: "HR Outsourcing",
  accent: "blush",
  eyebrow: "HR Outsourcing",
  summary:
    "Hiring paperwork, onboarding, an HR helpdesk your staff can actually reach, and the compliance a small office keeps forgetting — you stay the employer.",
  trustLabel: "Running HR for",

  sections: {
    benefits: {
      title: "What an HR function should give you back.",
      body: "Four outcomes baselined before we start. Administrative cost is the easiest to move; hiring speed and getting the paperwork right are worth more.",
    },
    process: {
      title: "From an HR audit to a helpdesk answering your staff.",
      body: "Six phases over about three weeks. The policy and compliance review usually surfaces more than anyone expects, particularly in New York.",
    },
    tech: {
      title: "Your systems, your records.",
      body: "We work inside whatever you already run. Employee records never move into a platform of ours.",
    },
    why: {
      title: "Why owners keep the employer relationship.",
      body: "The alternative — a PEO — takes on co-employment and, with it, a good deal of your control over your own staff.",
    },
    cases: {
      title: "Offices we support.",
      body: "Three engagements measured on time to hire, compliance gaps closed, and the hours returned to whoever was doing HR alongside their real job.",
    },
    faq: {
      title: "Control, liability and where the boundary sits.",
      body: "The questions that determine whether outsourced HR helps or creates a second problem.",
    },
  },

  hero: {
    title: "HR paperwork handled. Every decision about your staff stays yours.",
    highlight: "never as a co-employer",
    body: "Hiring coordination, onboarding, employee records, a helpdesk your staff can reach, and the state and city compliance a small office keeps missing — delivered as a service, never as a co-employer. Your people stay your people.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Onboarding offices from 5 to 100 staff, in all 50 states",
    chips: [
      { value: "-38%", label: "Time and cost of HR admin" },
      { value: "18 days", label: "Median time to hire" },
      { value: "4 hrs", label: "Staff helpdesk response" },
    ],
    figure: "network",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The paperwork two-thirds of HR.",
    body: "Most small offices have no HR person at all — they have an office manager who does HR alongside four other jobs. The result is not usually bad judgment; it is a handbook three years out of date, hiring that loses candidates to delay, and a pay statement missing a required accrual balance.",
    panels: [
      {
        heading: "What it is",
        body: "A named coordinator and a qualified HR advisor running your hiring paperwork, onboarding, records and staff helpdesk in whatever systems you already use.",
      },
      {
        heading: "Who it's for",
        body: "Practices and firms from 5 to 100 staff with no dedicated HR person, multi-location offices, and any business whose hiring is outrunning whoever currently coordinates it.",
      },
      {
        heading: "The business case",
        body: "Lower administrative load, faster hiring, compliance that is actually current, and your office manager back on the job she was hired for.",
      },
      {
        heading: "Why us",
        body: "This is HR support, not a PEO. We never become a co-employer, so you keep the employment relationship, the culture and every decision about your own staff.",
      },
    ],
    figure: "layers",
  },

  included: {
    eyebrow: "Scope",
    title: "The administration, the helpdesk and the records behind both.",
    body: "One monthly rate per pod. Compliance monitoring and reporting are inside it rather than sold as an annual review.",
    items: [
      "Job description drafting and vacancy posting across channels",
      "Applicant screening, scheduling and candidate communication",
      "Reference, I-9 and background check administration",
      "Offer letters, contracts and onboarding pack preparation",
      "Onboarding and induction coordination across locations",
      "Employee helpdesk for policy, PTO, benefits and payroll questions",
      "HRIS record maintenance and data quality management",
      "Absence, leave and working-time tracking",
      "Employee relations casework administration and documentation",
      "Performance review cycle coordination and chasing",
      "Policy and handbook maintenance with legislative updates",
      "Offboarding, exit interviews and leaver administration",
    ],
    note: "You remain the sole employer and the data controller throughout. We administer, coordinate and advise; hiring, disciplinary and termination decisions are always made by your managers.",
    figure: "pipeline",
  },

  benefits: [
    {
      title: "Hiring that stops losing people to delay",
      body: "Most declined offers trace back to a slow process rather than to money. Dedicated coordination removes the scheduling gaps where a good hygienist or paralegal accepts somewhere else.",
      metric: { value: 18, suffix: " days", label: "Median time to hire, down from 34" },
      link: { label: "See the hiring scope", href: "#whats-included" },
      figure: "pipeline",
    },
    {
      title: "Staff who get answers the same day",
      body: "A four-hour response means the owner stops being the first line for every PTO and benefits question. It is a small change that returns a surprising amount of time to whoever runs the place.",
      metric: { value: 4, suffix: " hrs", label: "Median staff helpdesk response" },
      link: { label: "How the helpdesk works", href: "#process" },
      figure: "pulse",
    },
    {
      title: "Documented properly the first time",
      body: "Employment disputes at small businesses go wrong on documentation, not usually on the decision. A written record from the first conversation is the cheapest risk reduction available to an office your size.",
      metric: { value: 100, suffix: "%", label: "Of employee matters with a complete written trail" },
      link: { label: "Talk about your situation", href: "#contact" },
      figure: "layers",
    },
    {
      title: "Your office manager back on her actual job",
      body: "In a small office HR is somebody's fifth responsibility, which is why the handbook is out of date. Returning that time is usually worth more than the seat costs.",
      metric: { value: 38, suffix: "%", label: "Reduction in time and cost of HR admin" },
      link: { label: "See the case studies", href: "#work" },
      figure: "dashboard",
    },
  ],

  process: [
    {
      title: "HR audit",
      duration: "Week 1",
      body: "Headcount, hiring volume, query patterns, case history and current administrative load. We also review policies and statutory documentation, which usually surfaces gaps nobody had time to check.",
    },
    {
      title: "Process & compliance design",
      duration: "Week 1–2",
      body: "Documented procedures for each administrative flow, the escalation boundary to your HR leadership, and a data protection design reviewed by your privacy team.",
    },
    {
      title: "Recruit",
      duration: "Week 1–2",
      body: "HR coordinators and advisors matched to your jurisdiction and sector, SHRM-certified or equivalent where the role requires it. You interview every finalist and hold the veto.",
    },
    {
      title: "Train & shadow",
      duration: "Week 2–3",
      body: "HRIS access, policy training and a shadowing period on live queries and vacancies with your team reviewing every output before it reaches an employee.",
    },
    {
      title: "Go live",
      duration: "Week 3",
      body: "A phased start — usually helpdesk and recruitment coordination first, casework administration later — with the team lead reviewing everything during the ramp.",
    },
    {
      title: "Run & advise",
      duration: "Ongoing",
      body: "Weekly reporting on hiring, query volumes and case status, plus a monthly review covering trends worth acting on — the departments generating the most queries usually have a management problem.",
    },
  ],

  tech: [
    { name: "Gusto", category: "HR & payroll" },
    { name: "BambooHR", category: "HR system" },
    { name: "Rippling", category: "HR & payroll" },
    { name: "ADP", category: "HR & payroll" },
    { name: "Paychex", category: "HR & payroll" },
    { name: "Justworks", category: "HR & benefits" },
    { name: "Workable", category: "Applicant tracking" },
    { name: "Indeed", category: "Job posting" },
    { name: "ZipRecruiter", category: "Job posting" },
    { name: "DocuSign", category: "E-signature" },
    { name: "Sterling", category: "Background checks" },
    { name: "Checkr", category: "Background checks" },
    { name: "Google Workspace", category: "Email & files" },
    { name: "Microsoft 365", category: "Email & files" },
    { name: "Homebase", category: "Time & scheduling" },
    { name: "Excel", category: "Reporting" },
  ],

  differentiators: [
    {
      title: "Never a co-employer",
      body: "We provide a service; we do not enter co-employment. You keep the employment relationship, the culture and every hiring and exit decision. That is the core difference from a PEO.",
    },
    {
      title: "A qualified HR advisor, not just a coordinator",
      body: "SHRM-certified advisors handle anything involving an employee matter. Documenting a disciplinary conversation by someone without HR training is a risk rather than a saving.",
    },
    {
      title: "Documentation as standard",
      body: "Every employee matter carries a complete written trail from the first conversation. Small employers lose these disputes on documentation, not on the underlying decision.",
    },
    {
      title: "Your systems, your data",
      body: "We work inside whatever you already run. Employee records never move into a platform of ours, which means nothing to untangle if you stop using us.",
    },
    {
      title: "We flag what you cannot see",
      body: "Query and issue patterns are reported monthly. When one supervisor generates most of the complaints, that is information you want rather than a workload to absorb quietly.",
    },
    {
      title: "You interview everyone",
      body: "HR staff handle sensitive matters, so you meet every finalist and hold the veto. You are told immediately if anyone leaves the account.",
    },
  ],

  cases: [
    {
      industry: "Dental group · Brooklyn & Queens, NY",
      title: "Halving time to hire across four offices",
      challenge:
        "Constant hygienist and front-desk hiring across four locations, coordinated by each office manager between patients. Candidates in a tight New York market accepted elsewhere while interviews were being scheduled.",
      solution:
        "One coordinator handling every posting, same-day candidate contact and interview scheduling across all four offices, leaving managers only the interviews themselves.",
      results: [
        { value: 18, suffix: " days", label: "Time to hire, from 34" },
        { value: 27, suffix: "%", label: "Fewer declined offers" },
        { value: 4, label: "Offices on one hiring process" },
      ],
      accent: "blush",
      figure: "pipeline",
    },
    {
      industry: "Accounting firm · Manhattan, NY",
      title: "An office manager doing HR for 60 people",
      challenge:
        "One office manager absorbing every PTO question, onboarding pack and benefits query for 60 staff, alongside running the office. Nothing was wrong exactly, but nothing was current either.",
      solution:
        "A coordinator taking the helpdesk, onboarding and records, with a qualified HR advisor on call for anything involving an employee matter — and the office manager back on the office.",
      results: [
        { value: 4, suffix: " hrs", label: "Staff helpdesk response time" },
        { value: 71, suffix: "%", label: "Of questions resolved without her" },
        { value: 38, suffix: "%", label: "Lower cost of HR administration" },
      ],
      accent: "lilac",
      figure: "network",
    },
    {
      industry: "Home care agency · Bronx, NY",
      title: "Getting the paperwork ready before the inspection",
      challenge:
        "A regulated workforce where I-9s, background checks and training certificates were incomplete across roughly a fifth of staff, with a state inspection scheduled in eight weeks.",
      solution:
        "A full records audit, systematic remediation with a daily chase cycle, and ongoing expiry monitoring so a certification is flagged before rather than after it lapses.",
      results: [
        { value: 100, suffix: "%", label: "Compliance documentation complete" },
        { value: 0, label: "Findings at inspection" },
        { value: 340, label: "Records remediated in 6 weeks" },
      ],
      accent: "mint",
      figure: "layers",
    },
  ],

  quotes: [
    {
      quote:
        "We looked at a PEO and realized we would be handing over control of our own hiring. This gave us the relief without the co-employment.",
      name: "Practice Owner",
      role: "Four-location dental group",
      company: "Brooklyn & Queens, NY",
      initials: "PO",
      rating: 5,
    },
    {
      quote:
        "The monthly report showed one supervisor generating 40% of our staff complaints. We had a management problem, not an HR problem.",
      name: "Managing Partner",
      role: "Accounting firm, 60 staff",
      company: "Manhattan, NY",
      initials: "MP",
      rating: 5,
    },
    {
      quote:
        "Our inspection came back with zero findings. Six weeks earlier a fifth of our records were incomplete and nobody here knew it.",
      name: "Agency Director",
      role: "Licensed home care agency",
      company: "Bronx, NY",
      initials: "AD",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Do you become our staff's employer?",
      answer:
        "No. This is HR support, not a PEO. You remain the sole employer, on your own contracts, with your culture and your decisions. We provide the administration, coordination and advice as a service.",
    },
    {
      question: "How is this different from a PEO?",
      answer:
        "A PEO enters co-employment, puts your staff on its own employment infrastructure and takes on some employment liability — in exchange for a good deal of your control. We have written a detailed comparison in our HR vs PEO guide.",
    },
    {
      question: "Who makes disciplinary and firing decisions?",
      answer:
        "You do, always. We run the process, prepare the documentation, make sure the required steps happen in the right order, and advise where asked. We never make or communicate the decision itself.",
    },
    {
      question: "Are your HR people qualified?",
      answer:
        "Advisors are SHRM-certified, supported by trained coordinators. Anything involving an employee matter is only handled by a qualified advisor, never by coordination staff.",
    },
    {
      question: "Do we need an HR system?",
      answer:
        "No. We work in whatever you have — Gusto, BambooHR, Rippling, ADP, Paychex, or a folder structure and a spreadsheet. If it is the latter, we will tell you when it is genuinely time to change and when it is not.",
    },
    {
      question: "Do you know New York employment rules?",
      answer:
        "Yes, including the ones that bite at four employees rather than fifteen: salary ranges in postings, the Fair Chance Act sequence, paid safe and sick leave accruals on the pay statement, Paid Family Leave and paid prenatal leave. We support offices in other states too and match advisors to the jurisdiction.",
    },
    {
      question: "How do you protect employee data?",
      answer:
        "Records stay in your own systems under least-privilege access, on managed devices, reviewed quarterly. We sign confidentiality agreements covering everyone who touches an employee file.",
    },
    {
      question: "Can you help us actually hire, not just administer it?",
      answer:
        "Posting, screening, scheduling and offer administration are included. Specialist search for a hard-to-fill clinical or senior role is a separate engagement, priced differently and only where we genuinely have depth.",
    },
    {
      question: "How quickly can someone start?",
      answer:
        "About three weeks, including the HR audit, writing the procedures and a shadowing period. The helpdesk and hiring coordination usually go live first, with employee matters following.",
    },
    {
      question: "What happens to whoever currently does this?",
      answer:
        "In our experience they get their actual job back. We take the coordination and paperwork; the judgment work, the relationships and the decisions stay in the building where they belong.",
    },
    {
      question: "Do you give employment law advice?",
      answer:
        "We advise on process and good practice. Formal legal advice comes from your employment counsel, and we prepare the documentation and timeline they need — which is usually where their bill actually comes from.",
    },
    {
      question: "What is the minimum term?",
      answer:
        "Three months, then month-to-month with 30 days' notice. Three months covers a full hiring cycle, which is the minimum needed to judge the arrangement fairly.",
    },
  ],

  related: [
    "payroll-outsourcing",
    "hr-vs-peo-guide",
    "hr-for-retail",
    "admin-support",
    "finance-and-accounting",
    "small-business",
  ],

  cta: {
    title: "Start with an HR audit.",
    body: "One week, a fixed fee, and a written report on your admin load, your handbook, and the state and city requirements you are currently missing. Yours to act on with or without us.",
  },

  seo: {
    title: "HR Support for Small Businesses | Hiring, Onboarding & Compliance — Xevantis",
    description:
      "Outsourced HR for practices and firms under 100 staff: hiring coordination, onboarding, records, a staff helpdesk and state and city compliance. Never a co-employer — you keep every decision about your own people.",
  },
};
