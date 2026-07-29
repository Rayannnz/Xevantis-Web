import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const hrForRetail: ServiceContent = {
  slug: "hr-for-retail",
  name: "HR for Retail",
  accent: "sun",
  eyebrow: "Retail HR",
  summary:
    "HR built for high turnover, seasonal peaks and multi-site shift work — hiring at volume without store managers doing the paperwork.",
  trustLabel: "Staffing and supporting store teams for",

  sections: {
    benefits: {
      title: "What retail HR done properly returns.",
      body: "Four numbers baselined per store before transition. Turnover is the one everyone quotes; time-to-fill is usually the one costing you money today.",
    },
    process: {
      title: "From store audit to a hiring engine.",
      body: "Six phases over about three weeks, sequenced so peak recruitment is running before the season that needs it.",
    },
    tech: {
      title: "Systems built for shift work.",
      body: "Retail HR fails on scheduling and compliance more than on policy. These are the tools that address both.",
    },
    why: {
      title: "Why store managers stop doing HR admin.",
      body: "A store manager spending eight hours a week on recruitment paperwork is the most expensive HR administrator in the business.",
    },
    cases: {
      title: "Retail operations we support.",
      body: "Three chains measured on time-to-fill, seasonal ramp, and the compliance exposure sitting in incomplete records.",
    },
    faq: {
      title: "Volume, seasonality and multi-site control.",
      body: "The questions specific to running HR for a distributed hourly workforce.",
    },
  },

  hero: {
    title: "Retail HR that keeps the floor staffed.",
    highlight: "back on the sales floor",
    body: "Volume hiring, onboarding, shift compliance and an employee helpdesk built for a distributed hourly workforce — so your store managers get back on the sales floor instead of chasing references and I-9 checks.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Onboarding chains ahead of the peak season",
    chips: [
      { value: "9 days", label: "Median time to fill a store vacancy" },
      { value: "8 hrs", label: "Weekly time returned per store manager" },
      { value: "100%", label: "I-9 records complete" },
    ],
    figure: "network",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The HR problems retail has that other sectors do not.",
    body: "Retail turns over a third or more of its workforce every year, triples headcount for a quarter, and employs across dozens of sites where the only person available to do HR admin is a store manager who should be selling. Generic HR outsourcing is not built for any of that.",
    panels: [
      {
        heading: "What it is",
        body: "An HR pod built around volume hiring and shift work: recruitment coordinators, an HR advisor and a compliance specialist, working your ATS and HRIS across all sites.",
      },
      {
        heading: "Who it's for",
        body: "Multi-site retail, hospitality and quick-service chains from 10 to 500 locations, with hourly workforces and pronounced seasonal peaks.",
      },
      {
        heading: "The business case",
        body: "Faster time-to-fill, fewer understaffed shifts, complete compliance records, and store managers returned to trading rather than paperwork.",
      },
      {
        heading: "Why us",
        body: "Peak recruitment is planned and staffed in advance from the same delivery hub, so a Q4 that needs 900 hires is a plan rather than a scramble.",
      },
    ],
    figure: "pipeline",
  },

  included: {
    eyebrow: "Scope",
    title: "Hiring, onboarding, compliance and cover.",
    body: "One monthly rate by site count and headcount. Seasonal surge capacity is planned into it rather than quoted at the last minute.",
    items: [
      "Volume vacancy posting across job boards and local channels",
      "Application screening and telephone pre-screening at scale",
      "Interview scheduling coordinated directly with store managers",
      "I-9, reference and age verification administration",
      "Offer letters, contracts and starter pack issue",
      "Onboarding coordination and first-week induction tracking",
      "Seasonal peak recruitment planning and delivery",
      "Hours, break and minor-employment compliance monitoring",
      "Absence, sick leave and shift-swap administration",
      "Employee helpdesk covering pay, PTO and shift questions",
      "Employee relations casework administration across sites",
      "Leaver processing, exit interviews and turnover reporting by store",
    ],
    note: "You remain the sole employer throughout — this is HR outsourcing, not a PEO. Store managers keep every hiring decision; we remove the administration around it.",
    figure: "layers",
  },

  benefits: [
    {
      title: "Vacancies filled before the schedule breaks",
      body: "In retail a slow hire is an unstaffed shift, which is lost trade and an overtime bill. Same-day candidate contact and coordinated scheduling are what take days out of the process.",
      metric: { value: 9, suffix: " days", label: "Median time to fill a store vacancy" },
      link: { label: "See the hiring process", href: "#process" },
      figure: "pipeline",
    },
    {
      title: "Store managers back on the floor",
      body: "Managers routinely lose a full day a week to recruitment admin and HR queries. That is the most expensive HR administration in the business, performed by someone who should be trading.",
      metric: { value: 8, suffix: " hrs", label: "Weekly time returned per store manager" },
      link: { label: "Talk about your store count", href: "#contact" },
      figure: "dashboard",
    },
    {
      title: "A peak that is planned, not improvised",
      body: "Seasonal hiring starts on a schedule with capacity reserved in advance. Chains that begin peak recruitment in October are already paying for it in agency premiums by November.",
      metric: { value: 900, suffix: "+", label: "Seasonal hires delivered in a single peak" },
      link: { label: "See the peak case study", href: "#work" },
      figure: "network",
    },
    {
      title: "Compliance records that survive an inspection",
      body: "I-9, age verification and hours-worked records are exactly where distributed retail exposure sits. Central administration with expiry monitoring closes the gap that site-level filing always leaves.",
      metric: { value: 100, suffix: "%", label: "I-9 documentation complete and in date" },
      link: { label: "How compliance is tracked", href: "#whats-included" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Store audit",
      duration: "Week 1",
      body: "Turnover and time-to-fill by site, seasonal patterns, manager time spent on HR, and a records compliance check. The variation between your best and worst store is usually the most useful finding.",
    },
    {
      title: "Hiring engine design",
      duration: "Week 1–2",
      body: "Standardized role templates, screening criteria, channel mix per location and a scheduling process that fits around trading hours rather than office ones.",
    },
    {
      title: "Recruit the pod",
      duration: "Week 1–2",
      body: "Coordinators experienced in volume hourly recruitment, plus an HR advisor and a compliance specialist. You interview every finalist and hold the veto.",
    },
    {
      title: "Pilot region",
      duration: "Week 2–3",
      body: "Live in one region first, with store managers giving direct feedback. Rolling out to 200 sites without testing the manager experience is how these programs get rejected.",
    },
    {
      title: "Roll out",
      duration: "Week 3–6",
      body: "Region by region, with the pod scaling as sites come on. Compliance record remediation runs in parallel with live hiring rather than waiting for it.",
    },
    {
      title: "Run & plan peak",
      duration: "Ongoing",
      body: "Weekly hiring reporting by store, monthly turnover analysis, and peak planning that begins a full quarter before the season rather than in the month it starts.",
    },
  ],

  tech: [
    { name: "Workday", category: "HRIS" },
    { name: "BambooHR", category: "HRIS" },
    { name: "Personio", category: "HRIS" },
    { name: "Fourth", category: "Retail workforce" },
    { name: "Deputy", category: "Scheduling" },
    { name: "Planday", category: "Shift management" },
    { name: "Workable", category: "Applicant tracking" },
    { name: "Greenhouse", category: "Applicant tracking" },
    { name: "Indeed", category: "Job distribution" },
    { name: "Sterling", category: "Background checks" },
    { name: "Checkr", category: "I-9 & background verification" },
    { name: "DocuSign", category: "E-signature" },
    { name: "Zendesk", category: "Employee helpdesk" },
    { name: "WhatsApp Business", category: "Candidate contact" },
    { name: "Power BI", category: "Store-level reporting" },
  ],

  differentiators: [
    {
      title: "Built for volume, not adapted to it",
      body: "Coordinators who run hourly recruitment at scale, with screening and scheduling processes designed for hundreds of applications rather than a handful of professional hires.",
    },
    {
      title: "Peak capacity reserved in advance",
      body: "Seasonal surge is planned a quarter ahead with capacity held from the same hub. Chains that plan peak in October pay agency premiums in November.",
    },
    {
      title: "Store managers are the customer",
      body: "We pilot in one region and change the process based on manager feedback before rolling out. A program managers work around is worse than no program.",
    },
    {
      title: "Compliance centralized",
      body: "I-9, age verification and hours-worked records held and monitored centrally with expiry alerting. Site-level filing is where distributed retail exposure always accumulates.",
    },
    {
      title: "Candidate contact where candidates are",
      body: "Hourly candidates respond to text and WhatsApp within minutes and to email rarely. Channel choice is a large part of why time-to-fill drops.",
    },
    {
      title: "Never a co-employer",
      body: "You stay the sole employer. Store managers keep every hiring and exit decision; we remove the administration, not the authority.",
    },
  ],

  cases: [
    {
      industry: "Fashion retail",
      title: "Nine hundred seasonal hires across 140 stores",
      challenge:
        "A Q4 peak requiring 900 temporary staff, previously handled by store managers and agency labor at a substantial premium.",
      solution:
        "Peak planning from August, a centralized screening funnel with WhatsApp candidate contact, and interview slots coordinated around each store's trading pattern.",
      results: [
        { value: 900, suffix: "+", label: "Seasonal hires delivered" },
        { value: 61, suffix: "%", label: "Lower cost than agency labor" },
        { value: 100, suffix: "%", label: "Stores fully staffed by peak week one" },
      ],
      accent: "sun",
      figure: "network",
    },
    {
      industry: "Quick-service food",
      title: "Cutting time-to-fill from 26 days to nine",
      challenge:
        "Persistent understaffing across 80 sites, with vacancies taking nearly a month to fill and managers covering shifts themselves.",
      solution:
        "Same-day candidate contact by text, pre-screening handled centrally, and interview scheduling that fitted around trading hours rather than head-office hours.",
      results: [
        { value: 9, suffix: " days", label: "Time to fill, from 26" },
        { value: 43, suffix: "%", label: "Fewer unstaffed shifts" },
        { value: 8, suffix: " hrs", label: "Weekly manager time returned" },
      ],
      accent: "blush",
      figure: "pipeline",
    },
    {
      industry: "Convenience retail",
      title: "Closing an I-9 exposure across 210 sites",
      challenge:
        "I-9 documentation held in store, incomplete or expired for an estimated 15% of staff, ahead of a compliance review.",
      solution:
        "Central digital verification and record-holding, a full remediation program by region, and automated expiry alerting before any document lapsed.",
      results: [
        { value: 100, suffix: "%", label: "Documentation complete and in date" },
        { value: 210, label: "Sites remediated in 9 weeks" },
        { value: 0, label: "Findings at compliance review" },
      ],
      accent: "mint",
      figure: "layers",
    },
  ],

  quotes: [
    {
      quote:
        "They piloted in one region and let our store managers tear the process apart before rolling it out. That is why the managers actually use it.",
      name: "Denise Aroyo",
      role: "Retail Operations Director",
      company: "Lumen Retail",
      initials: "DA",
      rating: 5,
    },
    {
      quote:
        "Nine hundred seasonal hires and every store was staffed in peak week one. The year before we were still recruiting in December.",
      name: "Tom Ridley",
      role: "People Director",
      company: "Northwind",
      initials: "TR",
      rating: 5,
    },
    {
      quote:
        "Fifteen percent of our I-9 records were incomplete and nobody knew. Nine weeks later it was a hundred percent.",
      name: "Halima Yusuf",
      role: "Head of HR",
      company: "Duonode",
      initials: "HY",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How do you handle seasonal peaks?",
      answer:
        "Planning starts a quarter ahead with surge capacity reserved from the same delivery hub. Chains that begin peak recruitment in the month they need staff end up paying agency premiums for the shortfall.",
    },
    {
      question: "Do store managers still choose who they hire?",
      answer:
        "Always. We source, screen, schedule and administer; the manager interviews and decides. We are removing the paperwork, not the authority, and the process is designed around that.",
    },
    {
      question: "How do you reach hourly candidates?",
      answer:
        "Text and WhatsApp primarily, because response rates are minutes rather than days. Email-first recruitment is a large part of why time-to-fill in retail is usually worse than it needs to be.",
    },
    {
      question: "Can you handle I-9 and age verification?",
      answer:
        "Yes, including digital verification, central record holding and expiry alerting. Distributed site-level filing is where retail compliance exposure almost always accumulates.",
    },
    {
      question: "How many stores can you support?",
      answer:
        "We work with chains from 10 to 500 sites. Rollout is region by region after a pilot, with the pod scaling as sites come on rather than staffing for the end state on day one.",
    },
    {
      question: "Do you handle hours and break compliance?",
      answer:
        "We monitor and report against your rules from scheduling data, and flag breaches for your managers to resolve. Scheduling itself stays with your operations team, who own the trading decisions.",
    },
    {
      question: "Is this a PEO arrangement?",
      answer:
        "No. You remain the sole employer, on your contracts. This is HR outsourcing as a service. If you want the comparison, our HR vs PEO guide covers it in detail.",
    },
    {
      question: "How do you reduce turnover?",
      answer:
        "Partly through better onboarding and faster query resolution, but mostly by reporting turnover by store so you can see where the problem actually is. In most chains it is concentrated in a minority of sites.",
    },
    {
      question: "Can you cover the hours our stores trade?",
      answer:
        "Yes, including evenings and weekends. Store managers need HR support when they are working, which is precisely when a head-office HR team is not.",
    },
    {
      question: "How quickly can this start?",
      answer:
        "About three weeks to a live pilot region, then region-by-region rollout over the following month. Where a peak is approaching we sequence the rollout to cover the highest-volume regions first.",
    },
    {
      question: "What about employee relations casework?",
      answer:
        "Administration, documentation and advisory support are included, handled by qualified HR advisors. Decisions remain with your managers, and the documented trail is what protects you if a case escalates.",
    },
    {
      question: "How is it priced?",
      answer:
        "A monthly rate by site count and headcount band, with peak surge planned into the annual commitment rather than quoted reactively when you need it most.",
    },
  ],

  related: [
    "hr-outsourcing",
    "payroll-outsourcing",
    "hr-vs-peo-guide",
    "ecommerce-bpo",
    "customer-service",
    "admin-support",
  ],

  cta: {
    title: "Get a store-level audit before peak.",
    body: "Send us your site list, turnover and time-to-fill. We will show you where the variation is, what peak will require, and what it would cost to staff it properly.",
  },

  seo: {
    title: "HR for Retail | Volume Hiring & Multi-Site HR Support — Xevantis",
    description:
      "Retail HR built for high turnover, seasonal peaks and shift work. Nine-day time-to-fill, 900+ seasonal hires per peak, centralized I-9 compliance across every site.",
  },
};
