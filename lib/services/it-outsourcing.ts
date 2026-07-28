import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const itOutsourcing: ServiceContent = {
  slug: "it-outsourcing",
  name: "IT Outsourcing",
  accent: "sky",
  eyebrow: "IT Outsourcing",
  summary:
    "Service desk, infrastructure monitoring and application support run by a named team in your tooling, on your service levels.",
  trustLabel: "Running IT operations for",

  sections: {
    benefits: {
      title: "What changes once IT stops firefighting.",
      body: "Four outcomes we baseline before transition and report weekly against. Ticket volume is only one of them, and rarely the most valuable.",
    },
    process: {
      title: "From estate audit to a team on the rota.",
      body: "Six phases over roughly three weeks. The knowledge capture phase is the one that decides whether month four is calm or expensive.",
    },
    tech: {
      title: "We work in your stack.",
      body: "No proprietary platform to license and no forced migration. These are the tools our engineers operate in daily.",
    },
    why: {
      title: "Why IT directors keep the team past the pilot.",
      body: "Managed IT has a reputation for ticket-closing over problem-solving. The commercial model is usually why, so we changed it.",
    },
    cases: {
      title: "Estates we run.",
      body: "Three engagements measured on resolution time, repeat-incident rate, and the cost of a follow-the-sun rota.",
    },
    faq: {
      title: "Coverage, security and control.",
      body: "The questions a CIO asks before handing over any part of the estate.",
    },
  },

  hero: {
    title: "IT operations run by a team you interviewed.",
    highlight: "fixing the cause",
    body: "Service desk, infrastructure monitoring, application support and endpoint management from named engineers working in your tooling. We are paid to reduce tickets, which means fixing the cause rather than closing the symptom.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Two IT pods opening for Q1 onboarding",
    chips: [
      { value: "8 min", label: "Median first response, P1 incidents" },
      { value: "-29%", label: "Ticket volume after two quarters" },
      { value: "24/7", label: "Cover from six delivery hubs" },
    ],
    figure: "network",
  },

  overview: {
    eyebrow: "Service overview",
    title: "Closing tickets faster is not the same as having fewer.",
    body: "Most managed IT contracts are priced per ticket or per seat, so nobody is rewarded for removing the reason people raise them. Ours is priced per team, which is why problem management is in the scope rather than sold as a project.",
    panels: [
      {
        heading: "What it is",
        body: "A dedicated IT pod — service desk analysts, infrastructure and application engineers, and a service delivery manager — working your estate to agreed service levels.",
      },
      {
        heading: "Who it's for",
        body: "Companies with 100–5,000 staff whose internal IT team is absorbed by day-to-day support, and groups needing follow-the-sun cover without staffing three shifts.",
      },
      {
        heading: "The business case",
        body: "Round-the-clock cover at a fraction of three in-house shifts, plus a falling ticket rate as recurring causes get engineered out rather than absorbed.",
      },
      {
        heading: "Why us",
        body: "Problem management is contractual. Every month we report the top five recurring incident causes and what we did about them.",
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
      "Asset inventory, licence tracking and renewal alerts",
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
      body: "Every recurring incident gets a root cause and a permanent fix, reported monthly. Because the pod is priced per team rather than per ticket, removing work is in our interest as well as yours.",
      metric: { value: 29, suffix: "%", label: "Median reduction in ticket volume at six months" },
      link: { label: "How problem management works", href: "#why-us" },
      figure: "dashboard",
    },
    {
      title: "Round-the-clock cover without three shifts",
      body: "Six delivery hubs make genuine 24/7 staffing affordable, rostered against your real incident curve. Weekend and overnight incidents stop waiting for someone's alarm to go off.",
      metric: { value: 3, suffix: "x", label: "Cheaper than staffing three in-house shifts" },
      link: { label: "Talk through coverage", href: "#contact" },
      figure: "network",
    },
    {
      title: "An estate that is finally documented",
      body: "Knowledge capture is a scoped phase, not an afterthought. Runbooks and asset records get written as the pod learns the estate, which is also what protects you if you ever move supplier.",
      metric: { value: 100, suffix: "%", label: "Of supported services with a maintained runbook" },
      link: { label: "See the transition", href: "#process" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Estate audit",
      duration: "Week 1",
      body: "Asset inventory, ticket history, monitoring coverage and the applications nobody has documented. We report what is unsupported or out of warranty before anything else is agreed.",
    },
    {
      title: "Service design",
      duration: "Week 1–2",
      body: "Severity definitions, response and resolution targets, escalation matrix and the boundary between us and your internal team. Ambiguity here is where managed IT relationships fail.",
    },
    {
      title: "Knowledge capture",
      duration: "Week 2–3",
      body: "Shadowing your current team, writing runbooks for the top fifty recurring issues, and recording the tribal knowledge that currently lives in two people's heads.",
    },
    {
      title: "Onboard the pod",
      duration: "Week 2–3",
      body: "Named engineers matched to the estate, tooling access provisioned, and a graded readiness check. Nobody takes a live ticket before passing it.",
    },
    {
      title: "Go live",
      duration: "Week 3",
      body: "A ramped start on a subset of queues with your team shadowing, moving to full scope as resolution quality holds. The service delivery manager is on shift throughout the first fortnight.",
    },
    {
      title: "Run & reduce",
      duration: "Ongoing",
      body: "Weekly service reviews, monthly problem management reporting on the top five recurring causes, and a continuous improvement backlog owned by the pod.",
    },
  ],

  tech: [
    { name: "ServiceNow", category: "ITSM" },
    { name: "Jira Service Management", category: "ITSM" },
    { name: "Freshservice", category: "ITSM" },
    { name: "Zendesk", category: "Ticketing" },
    { name: "Microsoft Intune", category: "Endpoint management" },
    { name: "Jamf", category: "Apple management" },
    { name: "Microsoft 365", category: "Productivity" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Active Directory", category: "Identity" },
    { name: "Okta", category: "Identity" },
    { name: "Datadog", category: "Monitoring" },
    { name: "Nagios", category: "Infrastructure monitoring" },
    { name: "AWS", category: "Cloud" },
    { name: "Microsoft Azure", category: "Cloud" },
    { name: "VMware", category: "Virtualisation" },
    { name: "Veeam", category: "Backup" },
    { name: "CrowdStrike", category: "Endpoint security" },
    { name: "Cisco Meraki", category: "Networking" },
  ],

  differentiators: [
    {
      title: "Priced per team, not per ticket",
      body: "A per-ticket contract gives a supplier every reason to leave the cause in place. Ours gives us the opposite incentive, and the monthly problem report proves we act on it.",
    },
    {
      title: "You interview every engineer",
      body: "Named analysts and engineers assigned to your estate, not a shared queue. You meet every finalist and hold the veto before anyone joins.",
    },
    {
      title: "Documentation as we go",
      body: "Runbooks and knowledge articles are written during knowledge capture and maintained monthly. An estate only we understand is a failure of the engagement.",
    },
    {
      title: "Security built into the service",
      body: "Vulnerability triage, patch compliance and access review are part of the monthly reporting rather than a separate security retainer.",
    },
    {
      title: "Genuine follow-the-sun",
      body: "Six hubs across Asia, Eastern Europe and Latin America. Overnight cover means engineers on shift, not an on-call phone in a different timezone.",
    },
    {
      title: "Month-to-month after month three",
      body: "No multi-year lock-in. Three months to learn an estate properly, then staying should be a decision you make each month.",
    },
  ],

  cases: [
    {
      industry: "Manufacturing",
      title: "Follow-the-sun cover across nine sites",
      challenge:
        "Plants running three shifts across four timezones, with an IT team available only during UK office hours and production stoppages waiting until morning.",
      solution:
        "A twelve-person pod rostered against actual incident volume by hour, with site-specific runbooks written during a three-week knowledge capture phase.",
      results: [
        { value: 8, suffix: " min", label: "Median P1 first response" },
        { value: 71, suffix: "%", label: "Fewer production stoppages over 4 hours" },
        { value: 34, suffix: "%", label: "Lower cost than in-house shift cover" },
      ],
      accent: "sky",
      figure: "network",
    },
    {
      industry: "Professional services",
      title: "Cutting ticket volume by fixing three root causes",
      challenge:
        "Eleven thousand tickets a quarter and an internal team with no capacity to look at why the same issues kept returning.",
      solution:
        "Problem management on the top recurring clusters found three causes — a VPN profile, a printer driver policy and a licence sync — accounting for 38% of all tickets.",
      results: [
        { value: 38, suffix: "%", label: "Of ticket volume traced to 3 causes" },
        { value: 31, suffix: "%", label: "Reduction in total tickets" },
        { value: 2, suffix: " FTE", label: "Internal capacity returned" },
      ],
      accent: "mint",
      figure: "dashboard",
    },
    {
      industry: "Healthcare",
      title: "Taking over an estate with no documentation",
      challenge:
        "An incumbent supplier exiting with 30 days' notice, no runbooks, and two clinical applications only one departing engineer understood.",
      solution:
        "Accelerated knowledge capture running in parallel with a shadow rota, prioritising the clinical systems, with the pod live before the incumbent's last day.",
      results: [
        { value: 30, suffix: " days", label: "To full service transfer" },
        { value: 0, label: "Clinical system outages during handover" },
        { value: 180, suffix: "+", label: "Runbooks written in the first quarter" },
      ],
      accent: "lilac",
      figure: "layers",
    },
  ],

  quotes: [
    {
      quote:
        "The monthly problem report is the part I did not expect. They keep finding reasons to have less work, which is not how our last supplier behaved.",
      name: "Alan Forsythe",
      role: "IT Director",
      company: "Peakline",
      initials: "AF",
      rating: 5,
    },
    {
      quote:
        "Our incumbent left with 30 days' notice and no documentation. Valentisys were live before the last engineer walked out.",
      name: "Marisa Colton",
      role: "Head of Technology",
      company: "Aurora Health",
      initials: "MC",
      rating: 5,
    },
    {
      quote:
        "Three shifts of cover for a third of what staffing it here would have cost. The business case wrote itself.",
      name: "Devan Raju",
      role: "CIO",
      company: "Gridworks",
      initials: "DR",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How quickly can a team take over?",
      answer:
        "Three weeks for a typical estate. Where an incumbent is exiting at short notice we have transferred in 30 days, running an accelerated knowledge capture in parallel with a shadow rota.",
    },
    {
      question: "Do we keep our own ITSM tooling?",
      answer:
        "Yes. We work in your ServiceNow, Jira Service Management, Freshservice or Zendesk under your licences. There is no proprietary platform to adopt and your ticket data never leaves your tenancy.",
    },
    {
      question: "What service levels do you commit to?",
      answer:
        "Response and resolution targets by severity, agreed in service design and contractual. P1 response is typically 15 minutes with an 8-minute median in practice, reported weekly against actuals.",
    },
    {
      question: "Can you provide 24/7 cover?",
      answer:
        "Yes, rostered against your real incident curve rather than a standard shift pattern. Six hubs make genuine round-the-clock staffing affordable rather than an on-call compromise.",
    },
    {
      question: "How do you handle security and access?",
      answer:
        "ISO 27001 certified and SOC 2 Type II audited, with least-privilege access, managed devices, session recording where required and quarterly access reviews. We can work within your VDI where data classification demands it.",
    },
    {
      question: "What is the boundary with our internal team?",
      answer:
        "Defined in service design and written down: which queues, which systems, which decisions. Ambiguity about who owns what is the most common reason managed IT relationships deteriorate.",
    },
    {
      question: "Do you take over vendor management?",
      answer:
        "Yes, including escalation to your software and hardware vendors under your support contracts. Contract negotiation and renewal decisions stay with you; we provide the usage data behind them.",
    },
    {
      question: "What happens if performance drops?",
      answer:
        "Service levels carry defined remedies. In practice the weekly service review catches drift long before a threshold is breached, which is exactly why the cadence is weekly rather than monthly.",
    },
    {
      question: "Do you cover cybersecurity?",
      answer:
        "Vulnerability triage, patch compliance, endpoint security operations and posture reporting are included. Penetration testing and incident response retainers are separate specialist engagements we can coordinate.",
    },
    {
      question: "What if we want to bring IT back in-house?",
      answer:
        "The runbooks, knowledge base and asset records are yours and current, because they are maintained monthly rather than written at exit. We run a paid shadowing period with your new hires at no uplift.",
    },
    {
      question: "Is there a minimum term?",
      answer:
        "Three months, then month-to-month with 30 days' notice. Three months reflects how long it takes to learn an estate properly; below that neither side gets value.",
    },
    {
      question: "How is it priced?",
      answer:
        "A fixed monthly rate per pod by size and skill mix, never per ticket or per device. You see the rate card during the estate audit, before any commitment.",
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
    title: "Get an estate audit and a rota this month.",
    body: "Tell us the estate, the ticket volume and the cover you need. We will come back within one business day with a pod shape, service levels and a price.",
  },

  seo: {
    title: "IT Outsourcing | Managed Service Desk & Infrastructure Support — Valentisys",
    description:
      "Dedicated IT pods covering service desk, infrastructure monitoring, endpoint management and problem management. 24/7 cover, priced per team not per ticket, live in three weeks.",
  },
};
