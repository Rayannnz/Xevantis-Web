import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const itOutsourcing: ServiceContent = {
  slug: "it-outsourcing",
  name: "IT Outsourcing",
  accent: "sky",
  eyebrow: "IT Outsourcing",
  summary:
    "Help desk, backups, security and the office network, run by named engineers who know your practice — for offices too small to hire their own IT person.",
  trustLabel: "Running IT for",

  sections: {
    benefits: {
      title: "What changes once IT stops firefighting.",
      body: "Four outcomes we baseline before transition and report weekly against. Ticket volume is only one of them, and rarely the most valuable.",
    },
    process: {
      title: "From a walkthrough of your office to a team on call.",
      body: "Six phases over roughly three weeks. Writing down how your office actually works is the phase that decides whether month four is calm or expensive.",
    },
    tech: {
      title: "We work in the software you already have.",
      body: "No platform to license and no forced migration. These are the tools our engineers work in every day, including the ones specific to clinics and firms.",
    },
    why: {
      title: "Why offices keep the team past the trial.",
      body: "Small-business IT has a reputation for closing tickets rather than solving problems. The way it is priced is usually why, so we changed it.",
    },
    cases: {
      title: "Offices we look after.",
      body: "Three engagements measured on response time, repeat problems, and what the alternative would have cost.",
    },
    faq: {
      title: "Coverage, security and control.",
      body: "What an owner or office manager asks before handing over the passwords.",
    },
  },

  hero: {
    title: "The IT department your office is too small to hire.",
    highlight: "fixing the cause",
    body: "Help desk, backups, patching, security and the network — from named engineers who learn your office and answer when you call. We are paid per team, not per ticket, which means fixing the cause rather than closing the symptom.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Onboarding offices from 5 to 100 staff, anywhere in the US",
    chips: [
      { value: "8 min", label: "Median response when something is down" },
      { value: "-29%", label: "Fewer problems after two quarters" },
      { value: "1", label: "Person you call, who knows your office" },
    ],
    figure: "network",
  },

  overview: {
    eyebrow: "Service overview",
    title: "Fixing things faster is not the same as having fewer things break.",
    body: "Most small-business IT is billed by the hour or by the visit, so nobody is rewarded for removing the reason you keep calling. Ours is a flat monthly rate, which is why finding root causes is in the scope rather than sold as a project.",
    panels: [
      {
        heading: "What it is",
        body: "Named engineers covering your help desk, devices, backups, network and security, plus one delivery lead who knows your office and answers the phone.",
      },
      {
        heading: "Who it's for",
        body: "Clinics, firms and offices from 5 to 100 staff — too big for whoever is least afraid of computers, too small to justify a $130k IT hire.",
      },
      {
        heading: "The business case",
        body: "Proper coverage for a fraction of an in-house salary, and fewer problems each quarter as recurring causes get engineered out instead of absorbed.",
      },
      {
        heading: "Why us",
        body: "Root-cause work is contractual. Every month we report the five things that keep breaking and what we did about them.",
      },
    ],
    figure: "layers",
  },

  included: {
    eyebrow: "Scope",
    title: "The desk, the estate and the problems behind both.",
    body: "One monthly rate per pod. Problem management, documentation and reporting are inside it, because they are the first things dropped when a contract is priced per ticket.",
    items: [
      "Tier 1–3 service desk across phone, chat, email and self-service",
      "Incident management to agreed severity and response levels",
      "Problem management with root-cause analysis and permanent fixes",
      "Endpoint management, patching and software deployment",
      "Identity, access and joiner-mover-leaver administration",
      "Infrastructure monitoring, alerting and capacity review",
      "Server, network and cloud environment administration",
      "Application support and vendor escalation management",
      "Backup verification and restore testing",
      "Security operations: vulnerability triage and posture reporting",
      "Asset inventory, license tracking and renewal alerts",
      "Knowledge base authoring and runbook maintenance",
    ],
    note: "Runbooks, knowledge base articles and process documentation are your intellectual property, delivered continuously rather than in a final handover week.",
    figure: "pipeline",
  },

  benefits: [
    {
      title: "Incidents answered before they escalate",
      body: "A P1 acknowledged in eight minutes rarely becomes an outage briefing. Follow-the-sun staffing means the overnight queue is worked overnight rather than becoming the morning backlog.",
      metric: { value: 8, suffix: " min", label: "Median first response on P1 incidents" },
      link: { label: "See the service levels", href: "#whats-included" },
      figure: "pulse",
    },
    {
      title: "Ticket volume that falls quarter on quarter",
      body: "Every recurring problem gets a root cause and a permanent fix, reported monthly. Because we are paid a flat rate rather than by the hour, removing work is in our interest as well as yours.",
      metric: { value: 29, suffix: "%", label: "Median reduction in ticket volume at six months" },
      link: { label: "How problem management works", href: "#why-us" },
      figure: "dashboard",
    },
    {
      title: "Coverage without a salary on the books",
      body: "Named engineers scheduled against when your office is actually open, including the Saturday clinic and the night before a filing deadline. No single point of failure who takes vacation.",
      metric: { value: 3, suffix: "x", label: "Cheaper than an in-house hire at this size" },
      link: { label: "Talk through coverage", href: "#contact" },
      figure: "network",
    },
    {
      title: "An office that is finally written down",
      body: "Documenting how your systems work is a scoped phase, not an afterthought. It gets written as the team learns your office, and it is also what protects you if you ever change providers.",
      metric: { value: 100, suffix: "%", label: "Of your systems with written instructions" },
      link: { label: "See the transition", href: "#process" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Office walkthrough",
      duration: "Week 1",
      body: "Every device, every login, every piece of software you pay for, and the machine in the closet nobody wants to discuss. We report what is unsupported or out of warranty before anything else is agreed.",
    },
    {
      title: "Agree the ground rules",
      duration: "Week 1–2",
      body: "What counts as urgent, how fast we answer, who we may call, and what we are allowed to change without asking. Ambiguity here is where these relationships fail.",
    },
    {
      title: "Write it down",
      duration: "Week 2–3",
      body: "Shadowing whoever currently handles this, writing instructions for the fifty things that go wrong most, and capturing what currently lives in one person's head.",
    },
    {
      title: "Onboard the team",
      duration: "Week 2–3",
      body: "Named engineers matched to your office and your industry's software, access provisioned, and a readiness check. Nobody touches a live problem before passing it.",
    },
    {
      title: "Go live",
      duration: "Week 3",
      body: "A ramped start on part of the workload with your people watching, moving to full scope as quality holds. Your delivery lead is reachable throughout the first two weeks.",
    },
    {
      title: "Run & reduce",
      duration: "Ongoing",
      body: "A standing weekly call, a monthly report on the five things that keep breaking, and an improvement list the team owns rather than you.",
    },
  ],

  tech: [
    { name: "Microsoft 365", category: "Email & files" },
    { name: "Google Workspace", category: "Email & files" },
    { name: "Freshservice", category: "Help desk" },
    { name: "Microsoft Intune", category: "Device management" },
    { name: "Jamf", category: "Apple management" },
    { name: "Datto", category: "Backup" },
    { name: "Veeam", category: "Backup" },
    { name: "SentinelOne", category: "Endpoint security" },
    { name: "Duo", category: "Multi-factor auth" },
    { name: "1Password", category: "Password management" },
    { name: "Ubiquiti", category: "Networking" },
    { name: "Cisco Meraki", category: "Networking" },
    { name: "Open Dental", category: "Dental practice" },
    { name: "Athenahealth", category: "Medical records" },
    { name: "Clio", category: "Legal practice" },
    { name: "Autodesk", category: "Engineering & CAD" },
  ],

  differentiators: [
    {
      title: "A flat monthly rate, not an hourly invoice",
      body: "Billing by the hour gives a provider every reason to leave the cause in place. A flat rate gives us the opposite incentive, and the monthly report proves we act on it.",
    },
    {
      title: "You interview every engineer",
      body: "Named engineers assigned to your office, not a rotating queue. You meet every finalist and hold the veto before anyone joins.",
    },
    {
      title: "Written down as we go",
      body: "Instructions and system records are written while we learn your office and kept current monthly. An office only we understand is a failure of the engagement.",
    },
    {
      title: "Security and compliance included",
      body: "Patch status, access review and — for clinics — the HIPAA controls that get asked about are part of the monthly report, not a separate security retainer.",
    },
    {
      title: "We know your industry's software",
      body: "Practice management, case management and CAD are not generic office IT. Engineers are matched to offices running the tools they already support.",
    },
    {
      title: "Month-to-month after month three",
      body: "No multi-year lock-in. Three months to learn an estate properly, then staying should be a decision you make each month.",
    },
  ],

  cases: [
    {
      industry: "Medical clinic · Queens, NY",
      title: "A ransomware scare, and the backup nobody had tested",
      challenge:
        "A six-provider primary care clinic hit by an encrypted workstation. The nightly backup had been failing silently since February, which nobody discovered until the day it was needed.",
      solution:
        "Contained and rebuilt in 36 hours from an older copy, then a rebuilt backup design with an offline copy, monthly test restores, and the HIPAA risk analysis the practice had never had written.",
      results: [
        { value: 36, suffix: " hrs", label: "From incident to fully operational" },
        { value: 0, label: "Patient records permanently lost" },
        { value: 12, suffix: " mo", label: "Verified restores since, all passing" },
      ],
      accent: "sky",
      figure: "network",
    },
    {
      industry: "Structural engineering · Long Island City, NY",
      title: "Twelve people, four home offices and a 6 GB model",
      challenge:
        "An 18-person firm running hybrid after a move, with drafters pulling large models across residential connections over a VPN. Model opens took twenty minutes and staff had started emailing copies to each other.",
      solution:
        "Active models moved to remote desktop sessions next to the data, everything else to cloud storage, and a written folder structure that ended the emailed-copy habit.",
      results: [
        { value: 20, suffix: " min", label: "Model open time, down to under 2" },
        { value: 4, label: "Home offices working at office speed" },
        { value: 0, label: "Version conflicts since the migration" },
      ],
      accent: "mint",
      figure: "dashboard",
    },
    {
      industry: "Law firm · Manhattan, NY",
      title: "The partner who had become the IT department",
      challenge:
        "A nine-attorney firm where one partner handled every password reset, new laptop and printer fault. He estimated six hours a week; his own time log said eleven.",
      solution:
        "A full inventory and cleanup, named engineers on the help desk, offboarding that actually disables accounts, and multi-factor authentication across the firm's email and case system.",
      results: [
        { value: 11, suffix: " hrs", label: "Partner time returned per week" },
        { value: 23, suffix: "%", label: "Of paid licenses assigned to former staff" },
        { value: 1, suffix: " day", label: "Offboarding, down from never" },
      ],
      accent: "lilac",
      figure: "layers",
    },
  ],

  quotes: [
    {
      quote:
        "The monthly report is the part I did not expect. They keep finding reasons for us to need them less, which is not how our last guy operated.",
      name: "Office Manager",
      role: "Six-provider primary care clinic",
      company: "Queens, NY",
      initials: "OM",
      rating: 5,
    },
    {
      quote:
        "We found out our backups had been failing for four months on the morning we needed them. That does not happen now, because somebody's actual job is to check.",
      name: "Practice Administrator",
      role: "Multi-site dental group",
      company: "Nassau County, NY",
      initials: "PA",
      rating: 5,
    },
    {
      quote:
        "I was the IT department and I bill at $550 an hour. Nobody at the firm could explain why that was a good arrangement.",
      name: "Managing Partner",
      role: "Nine-attorney law firm",
      company: "Manhattan, NY",
      initials: "MP",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How quickly can you take over?",
      answer:
        "Three weeks for a typical office. Where a current provider is leaving at short notice we have transferred in 30 days, running the documentation phase in parallel rather than after.",
    },
    {
      question: "Do we have to change any of our software?",
      answer:
        "No. We work in your practice management, case management, accounting or design software under your own licenses. There is no platform of ours to adopt and no migration you did not ask for.",
    },
    {
      question: "How fast do you answer when something is down?",
      answer:
        "Agreed up front and written into the contract. For anything that stops you seeing patients or clients the target is 15 minutes, with an 8-minute median in practice, reported to you weekly.",
    },
    {
      question: "Do you cover evenings and weekends?",
      answer:
        "We schedule against when your office is actually open, including Saturday clinics and the nights before filing deadlines. Round-the-clock cover is available where the work genuinely needs it rather than sold as standard.",
    },
    {
      question: "Are you HIPAA compliant?",
      answer:
        "Yes, and we sign a business associate agreement before touching anything. That includes the written risk analysis, access reviews, encryption and audit logging that get asked about first — and we will tell you which controls you are currently missing.",
    },
    {
      question: "What if we already have someone doing IT?",
      answer:
        "Common, and it works well. We take the routine load and the after-hours cover so your person does the work only they can do. The split gets written down in week two so nobody is guessing.",
    },
    {
      question: "Will you deal with our software vendors for us?",
      answer:
        "Yes, including chasing your practice management or case software vendor under your own support contract. Renewal and purchasing decisions stay yours; we give you the usage data behind them.",
    },
    {
      question: "What happens if the service slips?",
      answer:
        "The agreed targets carry defined remedies. In practice the standing weekly call catches drift long before a threshold is breached, which is exactly why it is weekly rather than quarterly.",
    },
    {
      question: "Do you handle security, or is that separate?",
      answer:
        "Patching, endpoint security, multi-factor authentication and access review are included. Penetration testing and a formal breach response retainer are separate specialist engagements we can arrange.",
    },
    {
      question: "What if we want to bring IT back in-house later?",
      answer:
        "The documentation, system records and inventory are yours and current, because they are maintained monthly rather than written on the way out. We will shadow your new hire for a month at no uplift.",
    },
    {
      question: "Is there a minimum term?",
      answer:
        "Three months, then month-to-month with 30 days' notice. Three months is how long it takes to learn an office properly; below that neither side gets value.",
    },
    {
      question: "How is it priced?",
      answer:
        "A flat monthly rate based on how many people and devices you have — never per ticket, per visit or per hour. You see the number during the walkthrough, before any commitment.",
    },
  ],

  related: [
    "admin-support",
    "customer-service",
    "finance-and-accounting",
    "nearshore-bpo",
    "small-business",
    "hr-outsourcing",
  ],

  cta: {
    title: "Get a walkthrough and a flat monthly number.",
    body: "Tell us how many people you have and what keeps breaking. We will come back within one business day with who would cover it, what they would fix first, and a price.",
  },

  seo: {
    title: "IT Support for Small Businesses & Medical Practices — Xevantis",
    description:
      "Outsourced IT for clinics, dental practices, law firms, engineering and accounting offices across the US. Help desk, backups, HIPAA-aware security and network support from named engineers. Flat monthly rate, live in three weeks.",
  },
};
