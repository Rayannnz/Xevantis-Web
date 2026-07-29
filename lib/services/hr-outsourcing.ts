import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const hrOutsourcing: ServiceContent = {
  slug: "hr-outsourcing",
  name: "HR Outsourcing",
  accent: "blush",
  eyebrow: "HR Outsourcing",
  summary:
    "Recruitment administration, onboarding, employee relations support and an HR helpdesk — you keep the employer relationship and the decisions.",
  trustLabel: "Running HR operations for",

  sections: {
    benefits: {
      title: "What an HR operation should give you back.",
      body: "Four outcomes baselined before transition. Administrative cost is the easiest to move; time-to-hire and case handling are worth more.",
    },
    process: {
      title: "From HR audit to a helpdesk answering employees.",
      body: "Six phases over about three weeks. The policy and compliance review usually surfaces more than anyone expects.",
    },
    tech: {
      title: "Your HRIS, your records.",
      body: "We work inside your systems under your data controller responsibilities. Nothing moves into a platform of ours.",
    },
    why: {
      title: "Why HR directors keep the employer relationship.",
      body: "The alternative model — a PEO — takes on co-employment and, with it, a good deal of your control.",
    },
    cases: {
      title: "HR functions we support.",
      body: "Three engagements measured on time-to-hire, case resolution time, and the strategic hours returned to an HR team of two.",
    },
    faq: {
      title: "Control, liability and where the boundary sits.",
      body: "The questions that determine whether outsourced HR helps or creates a second problem.",
    },
  },

  hero: {
    title: "HR administration handled. Employment decisions stay yours.",
    highlight: "never a co-employer",
    body: "Recruitment coordination, onboarding, records, an employee helpdesk and employee relations casework support — delivered as a service, never as a co-employer. Your people remain your people, on your contracts.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "HR pods onboarding for the new year",
    chips: [
      { value: "-38%", label: "HR administrative cost" },
      { value: "18 days", label: "Median time to hire" },
      { value: "4 hrs", label: "Employee helpdesk response" },
    ],
    figure: "network",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The administrative two-thirds of HR.",
    body: "Most HR teams are small and spend the majority of their week on coordination: scheduling interviews, chasing references, issuing contracts, answering the same PTO question and maintaining records. None of it is the work an HR director was hired to do.",
    panels: [
      {
        heading: "What it is",
        body: "An HR pod — coordinators, an HR advisor and a team lead — running your recruitment administration, onboarding, records and employee helpdesk in your HRIS.",
      },
      {
        heading: "Who it's for",
        body: "Companies of 50–2,000 employees with a small HR team, multi-site operations, and businesses whose hiring volume is outrunning their coordination capacity.",
      },
      {
        heading: "The business case",
        body: "Lower administrative cost, faster hiring, consistent compliance, and your HR leadership returned to the work that actually affects retention.",
      },
      {
        heading: "Why us",
        body: "This is HR outsourcing, not a PEO. We never become a co-employer, so you keep the employment relationship, the culture and every decision.",
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
      title: "Hiring that stops losing candidates to delay",
      body: "Most offer declines trace back to a slow process rather than to money. Dedicated coordination removes the scheduling gaps where good candidates accept somewhere else.",
      metric: { value: 18, suffix: " days", label: "Median time to hire, down from 34" },
      link: { label: "See the recruitment scope", href: "#whats-included" },
      figure: "pipeline",
    },
    {
      title: "Employees who get answers the same day",
      body: "A four-hour helpdesk response means managers stop being the first line for PTO and policy questions. It is a small change that returns a surprising amount of management time.",
      metric: { value: 4, suffix: " hrs", label: "Median employee helpdesk response" },
      link: { label: "How the helpdesk works", href: "#process" },
      figure: "pulse",
    },
    {
      title: "Casework documented properly the first time",
      body: "Employee relations matters go wrong at tribunal because of documentation, not usually because of the decision. Consistent record-keeping from the first meeting is the cheapest risk reduction available.",
      metric: { value: 100, suffix: "%", label: "Of ER cases with a complete documented trail" },
      link: { label: "Talk about your case volume", href: "#contact" },
      figure: "layers",
    },
    {
      title: "HR leadership back on retention",
      body: "An HR team of two spends most of its week coordinating. Returning that time is what lets HR work on the things that change turnover instead of processing its consequences.",
      metric: { value: 38, suffix: "%", label: "Reduction in HR administrative cost" },
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
    { name: "Workday", category: "HRIS" },
    { name: "BambooHR", category: "HRIS" },
    { name: "HiBob", category: "HRIS" },
    { name: "SAP SuccessFactors", category: "HRIS" },
    { name: "Personio", category: "HRIS" },
    { name: "Greenhouse", category: "Applicant tracking" },
    { name: "Workable", category: "Applicant tracking" },
    { name: "Lever", category: "Applicant tracking" },
    { name: "LinkedIn Recruiter", category: "Sourcing" },
    { name: "DocuSign", category: "E-signature" },
    { name: "Sterling", category: "Background checks" },
    { name: "Culture Amp", category: "Engagement" },
    { name: "Zendesk", category: "Employee helpdesk" },
    { name: "Microsoft 365", category: "Productivity" },
    { name: "Power BI", category: "People analytics" },
  ],

  differentiators: [
    {
      title: "Never a co-employer",
      body: "We provide a service; we do not enter co-employment. You keep the employment relationship, the culture and every hiring and exit decision. That is the core difference from a PEO.",
    },
    {
      title: "Qualified HR advisors",
      body: "Pods include SHRM-certified advisors or the local equivalent, not only coordinators. Casework administration handled by someone without HR training is a risk rather than a saving.",
    },
    {
      title: "Documentation as standard",
      body: "Every employee relations matter carries a complete written trail from the first conversation. Most tribunal losses are documentation failures rather than decision failures.",
    },
    {
      title: "Your HRIS, your data",
      body: "We work inside your systems under your data controller responsibilities. Employee data never moves into a platform of ours, which keeps your privacy team's life simple.",
    },
    {
      title: "We flag the management problems",
      body: "Query and case patterns by department are reported monthly. When one team generates most of the cases, that is information you want rather than a workload to absorb.",
    },
    {
      title: "You interview everyone",
      body: "HR staff handle sensitive matters, so you meet every finalist and hold the veto. You are told immediately if anyone leaves the account.",
    },
  ],

  cases: [
    {
      industry: "Logistics",
      title: "Halving time to hire across eleven depots",
      challenge:
        "Constant driver and warehouse recruitment across eleven sites, coordinated by depot managers between operational duties, losing candidates to faster competitors.",
      solution:
        "Centralized recruitment coordination with same-day candidate contact and interview scheduling handled entirely by the pod, leaving managers only the interviews themselves.",
      results: [
        { value: 18, suffix: " days", label: "Time to hire, from 34" },
        { value: 27, suffix: "%", label: "Fewer offer declines" },
        { value: 11, label: "Sites on one coordinated process" },
      ],
      accent: "blush",
      figure: "pipeline",
    },
    {
      industry: "Technology",
      title: "An HR team of two supporting 600 people",
      challenge:
        "Two HR staff absorbed entirely by helpdesk queries and onboarding, with no capacity for the retention work the board kept asking about.",
      solution:
        "A four-person pod taking the helpdesk, onboarding and records, with the internal team retained for casework decisions and people strategy.",
      results: [
        { value: 4, suffix: " hrs", label: "Helpdesk response time" },
        { value: 71, suffix: "%", label: "Of queries resolved without internal HR" },
        { value: 38, suffix: "%", label: "Lower HR administrative cost" },
      ],
      accent: "lilac",
      figure: "network",
    },
    {
      industry: "Care services",
      title: "Getting compliance documentation audit-ready",
      challenge:
        "A regulated workforce where I-9, background check and training records were incomplete across roughly a fifth of employees ahead of an inspection.",
      solution:
        "A full records audit, systematic remediation with a chase cycle, and ongoing expiry monitoring with alerts before any certification lapsed.",
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
        "We looked at a PEO and realized we would be giving up control of our own hiring. This gave us the administrative relief without the co-employment.",
      name: "Rachel Osei-Bonsu",
      role: "HR Director",
      company: "Peakline",
      initials: "RO",
      rating: 5,
    },
    {
      quote:
        "The monthly report showed one department generating 40% of our employee relations cases. We had a management problem, not an HR problem.",
      name: "Stefan Vogel",
      role: "Chief People Officer",
      company: "Gridworks",
      initials: "SV",
      rating: 5,
    },
    {
      quote:
        "Our inspection came back with zero findings. Six weeks earlier a fifth of our records were incomplete.",
      name: "Aoife Brennan",
      role: "Head of People",
      company: "Aurora Health",
      initials: "AB",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Do you become our employees' employer?",
      answer:
        "No. This is HR outsourcing, not a PEO. You remain the sole employer, on your contracts, with your culture and your decisions. We provide administration, coordination and advice as a service.",
    },
    {
      question: "How is this different from a PEO?",
      answer:
        "A PEO enters co-employment, puts your staff on its own employment infrastructure and takes on some employment liability — in exchange for a good deal of your control. We have written a detailed comparison in our HR vs PEO guide.",
    },
    {
      question: "Who makes disciplinary and termination decisions?",
      answer:
        "Your managers, always. We administer the process, prepare documentation, ensure procedural steps are followed and advise where asked. We never make or communicate the decision itself.",
    },
    {
      question: "Are your HR staff qualified?",
      answer:
        "Advisors are SHRM-certified or hold the local equivalent, supported by trained coordinators. Employee relations matters are only handled by qualified advisors, never by coordination staff.",
    },
    {
      question: "Do you work in our HRIS?",
      answer:
        "Yes — Workday, BambooHR, HiBob, SuccessFactors, Personio and others, under your licenses and permissions. Employee data stays within your systems and your data controller responsibilities.",
    },
    {
      question: "How do you handle employee data protection?",
      answer:
        "You remain the data controller; we act as processor under a DPA reviewed by your privacy team. ISO 27001 certified and SOC 2 Type II audited, with least-privilege access and quarterly access review.",
    },
    {
      question: "Can you handle recruitment as well as administration?",
      answer:
        "Coordination, screening, scheduling and offer administration are included. Executive search and specialist headhunting are separate engagements we can run, priced differently.",
    },
    {
      question: "Which jurisdictions do you cover?",
      answer:
        "US, Canada, Mexico, Ireland, Australia and much of Western Europe, with local employment law support through partner counsel. We will tell you where our depth is thinner rather than improvise.",
    },
    {
      question: "How quickly can a pod start?",
      answer:
        "About three weeks, including the HR audit, process design and a shadowing period. Helpdesk and recruitment coordination usually go live first, with casework administration following.",
    },
    {
      question: "What happens to our internal HR team?",
      answer:
        "In our engagements they typically move onto retention, performance, organizational design and casework decisions. The pod handles coordination and administration, not the judgment work.",
    },
    {
      question: "Do you provide employment law advice?",
      answer:
        "We advise on process and best practice. Formal legal advice comes from your employment counsel, and we prepare the documentation and chronology they need — which is usually where the cost sits.",
    },
    {
      question: "What is the minimum term?",
      answer:
        "Three months, then month-to-month with 30 days' notice. Three months covers a full hiring and review cycle, which is the minimum needed to judge the arrangement fairly.",
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
    body: "One week, a fixed fee, and a written report on your administrative load, policy gaps and compliance documentation. Yours to act on with or without us.",
  },

  seo: {
    title: "HR Outsourcing | Recruitment, Onboarding & Employee Helpdesk — Xevantis",
    description:
      "Outsourced HR administration covering recruitment coordination, onboarding, records, employee helpdesk and ER casework support. Never a co-employer — you keep every decision.",
  },
};
