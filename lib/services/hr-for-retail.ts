import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const hrForRetail: ServiceContent = {
  slug: "hr-for-retail",
  name: "HR for Multi-Location Businesses",
  accent: "sun",
  eyebrow: "Multi-Location HR",
  summary:
    "HR built for turnover, seasonal swings and shift work across several locations — hiring without your site managers doing the paperwork.",
  trustLabel: "Staffing and supporting location teams for",

  sections: {
    benefits: {
      title: "What multi-location HR done properly returns.",
      body: "Four numbers baselined per location before we start. Turnover is the one everyone quotes; time to fill is usually the one costing you money today.",
    },
    process: {
      title: "From a location audit to a hiring process that works.",
      body: "Six phases over about three weeks, sequenced so seasonal hiring is running before the season that needs it.",
    },
    tech: {
      title: "Systems built for shift work.",
      body: "Multi-location HR fails on scheduling and compliance far more often than on policy. These are the tools that address both.",
    },
    why: {
      title: "Why your site managers stop doing HR admin.",
      body: "A location manager spending eight hours a week on hiring paperwork is the most expensive HR administrator in the business.",
    },
    cases: {
      title: "Businesses we support.",
      body: "Three multi-location businesses measured on time to fill, seasonal ramp, and the exposure sitting in incomplete records.",
    },
    faq: {
      title: "Volume, seasonality and keeping control across sites.",
      body: "The questions specific to running HR for an hourly workforce spread across several locations.",
    },
  },

  hero: {
    title: "HR that keeps every location staffed.",
    highlight: "back to running their location",
    body: "Hiring, onboarding, shift compliance and a helpdesk your staff can reach, built for an hourly workforce across several sites — so your managers get back to running their location instead of chasing references and I-9 checks.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Onboarding multi-location businesses ahead of the busy season",
    chips: [
      { value: "9 days", label: "Median time to fill a vacancy" },
      { value: "8 hrs", label: "Weekly time returned per location manager" },
      { value: "100%", label: "I-9 records complete" },
    ],
    figure: "network",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The HR problems several locations create that one does not.",
    body: "An hourly workforce turns over a third or more every year, swells for a season, and sits across sites where the only person available to do HR admin is a manager who should be running the place. Generic HR support is not built for any of that.",
    panels: [
      {
        heading: "What it is",
        body: "A team built around hourly hiring and shift work: a recruiting coordinator, an HR advisor and a compliance specialist, working across every one of your locations.",
      },
      {
        heading: "Who it's for",
        body: "Multi-location practices and local businesses from 2 to 30 sites — dental and medical groups, pharmacy chains, veterinary groups, salons, restaurants and local retail with hourly staff and seasonal swings.",
      },
      {
        heading: "The business case",
        body: "Faster time to fill, fewer understaffed shifts, complete compliance records, and managers returned to running their location rather than doing paperwork.",
      },
      {
        heading: "Why us",
        body: "Seasonal hiring is planned and staffed in advance, so a busy season that needs forty extra people is a plan rather than a scramble in October.",
      },
    ],
    figure: "pipeline",
  },

  included: {
    eyebrow: "Scope",
    title: "Hiring, onboarding, compliance and cover.",
    body: "One monthly rate by location count and headcount. Seasonal cover is planned into it rather than quoted at the last minute.",
    items: [
      "Vacancy posting across job boards and local channels",
      "Application screening and phone pre-screening",
      "Interview scheduling coordinated directly with your location managers",
      "I-9, reference and age verification administration",
      "Offer letters, contracts and starter pack issue",
      "Onboarding coordination and first-week induction tracking",
      "Seasonal hiring planned and delivered ahead of the season",
      "Hours, break and minor-employment compliance monitoring",
      "Absence, sick leave and shift-swap administration",
      "Employee helpdesk covering pay, PTO and shift questions",
      "Employee matter administration and documentation across sites",
      "Departure processing, exit interviews and turnover reporting by location",
    ],
    note: "You remain the sole employer throughout — this is HR support, not a PEO. Your managers keep every hiring decision; we remove the administration around it.",
    figure: "layers",
  },

  benefits: [
    {
      title: "Vacancies filled before the schedule breaks",
      body: "A slow hire is an unstaffed shift, which is lost revenue and an overtime bill in the same week. Same-day candidate contact and coordinated scheduling are what take days out of the process.",
      metric: { value: 9, suffix: " days", label: "Median time to fill a vacancy" },
      link: { label: "See the hiring process", href: "#process" },
      figure: "pipeline",
    },
    {
      title: "Managers back to running their location",
      body: "Managers routinely lose a full day a week to hiring admin and staff questions. That is the most expensive HR administration in the business, done by the person who should be running the place.",
      metric: { value: 8, suffix: " hrs", label: "Weekly time returned per location manager" },
      link: { label: "Talk about your locations", href: "#contact" },
      figure: "dashboard",
    },
    {
      title: "A busy season that is planned, not improvised",
      body: "Seasonal hiring starts on a schedule with cover reserved in advance. Businesses that begin in October are already paying for it in agency premiums by November.",
      metric: { value: 40, suffix: "+", label: "Seasonal hires delivered in a single season" },
      link: { label: "See the case study", href: "#work" },
      figure: "network",
    },
    {
      title: "Compliance records that survive an inspection",
      body: "I-9, license and hours-worked records are exactly where multi-location exposure sits. Central record-keeping with expiry monitoring closes the gap that a filing cabinet at each site always leaves.",
      metric: { value: 100, suffix: "%", label: "I-9 documentation complete and in date" },
      link: { label: "How compliance is tracked", href: "#whats-included" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Location audit",
      duration: "Week 1",
      body: "Turnover and time to fill by site, seasonal patterns, manager time spent on HR, and a records check. The variation between your best and worst location is usually the most useful finding.",
    },
    {
      title: "Design the hiring process",
      duration: "Week 1–2",
      body: "Standard role templates, screening criteria, the right channels per location, and interview scheduling that fits around opening hours rather than office ones.",
    },
    {
      title: "Find your coordinator",
      duration: "Week 1–2",
      body: "A coordinator experienced in hourly hiring, plus an HR advisor and a compliance specialist. You interview every finalist and hold the veto.",
    },
    {
      title: "Pilot region",
      duration: "Week 2–3",
      body: "Live at one or two locations first, with those managers giving direct feedback. Rolling out everywhere without testing the manager experience is how this gets quietly ignored.",
    },
    {
      title: "Roll out",
      duration: "Week 3–6",
      body: "A few locations at a time, with the team growing as sites come on. Fixing the compliance records runs in parallel with live hiring rather than waiting for it.",
    },
    {
      title: "Run & plan peak",
      duration: "Ongoing",
      body: "Weekly hiring reporting by location, monthly turnover analysis, and seasonal planning that begins a full quarter ahead rather than in the month it starts.",
    },
  ],

  tech: [
    { name: "Gusto", category: "HR & payroll" },
    { name: "BambooHR", category: "HR system" },
    { name: "Rippling", category: "HR & payroll" },
    { name: "Homebase", category: "Scheduling & time" },
    { name: "Deputy", category: "Scheduling" },
    { name: "When I Work", category: "Shift management" },
    { name: "Workable", category: "Applicant tracking" },
    { name: "Indeed", category: "Job posting" },
    { name: "ZipRecruiter", category: "Job posting" },
    { name: "Sterling", category: "Background checks" },
    { name: "Checkr", category: "I-9 & background verification" },
    { name: "DocuSign", category: "E-signature" },
    { name: "Google Workspace", category: "Email & files" },
    { name: "Microsoft 365", category: "Email & files" },
    { name: "Podium", category: "Candidate texting" },
    { name: "Power BI", category: "Location-level reporting" },
  ],

  differentiators: [
    {
      title: "Built for hourly hiring, not adapted to it",
      body: "Coordinators who run hourly recruiting all day, with screening and scheduling designed for a hundred applications rather than for a handful of professional hires.",
    },
    {
      title: "Seasonal cover reserved in advance",
      body: "Busy-season hiring is planned a quarter ahead with cover held. Businesses that start planning in October pay agency premiums in November.",
    },
    {
      title: "Your managers are the customer",
      body: "We pilot at one or two locations and change the process on their feedback before rolling out. A process managers work around is worse than no process at all.",
    },
    {
      title: "Compliance in one place",
      body: "I-9, license and hours-worked records held and monitored centrally with expiry alerting. A filing cabinet at each site is where multi-location exposure always accumulates.",
    },
    {
      title: "Candidate contact where candidates are",
      body: "Hourly candidates reply to a text within minutes and to email rarely. Channel choice is a large part of why time to fill drops as much as it does.",
    },
    {
      title: "Never a co-employer",
      body: "You stay the sole employer. Your managers keep every hiring and exit decision; we remove the administration, not the authority.",
    },
  ],

  cases: [
    {
      industry: "Pharmacy chain · Bronx & Queens, NY · 5 locations",
      title: "Forty seasonal hires across five locations",
      challenge:
        "A flu and vaccine season needing forty extra technicians and clerks, previously handled by each pharmacist-in-charge personally and topped up with agency staff at a substantial premium.",
      solution:
        "Seasonal planning from August, one central screening process with candidates contacted by text, and interview slots arranged around each location's actual quiet hours.",
      results: [
        { value: 40, suffix: "+", label: "Seasonal hires delivered" },
        { value: 61, suffix: "%", label: "Lower cost than agency staffing" },
        { value: 100, suffix: "%", label: "Locations fully staffed by the first week" },
      ],
      accent: "sun",
      figure: "network",
    },
    {
      industry: "Veterinary group · Long Island, NY · 6 locations",
      title: "Cutting time to fill from 26 days to nine",
      challenge:
        "Persistent understaffing across six hospitals, with vet tech vacancies taking nearly a month to fill and practice managers covering shifts themselves.",
      solution:
        "Same-day candidate contact by text, screening handled centrally, and interviews scheduled around clinic hours rather than around head-office hours.",
      results: [
        { value: 9, suffix: " days", label: "Time to fill, from 26" },
        { value: 43, suffix: "%", label: "Fewer unstaffed shifts" },
        { value: 8, suffix: " hrs", label: "Weekly manager time returned" },
      ],
      accent: "blush",
      figure: "pipeline",
    },
    {
      industry: "Restaurant group · Brooklyn, NY · 9 locations",
      title: "Closing an I-9 gap across nine sites",
      challenge:
        "I-9 documentation kept in a filing cabinet at each location, incomplete or expired for an estimated 15% of staff, with no central view and an inspection possible at any time.",
      solution:
        "Central digital verification and record-keeping, a full remediation program location by location, and automatic alerting before any document lapsed.",
      results: [
        { value: 100, suffix: "%", label: "Documentation complete and in date" },
        { value: 9, label: "Locations remediated in 6 weeks" },
        { value: 0, label: "Findings at the subsequent review" },
      ],
      accent: "mint",
      figure: "layers",
    },
  ],

  quotes: [
    {
      quote:
        "They piloted at two locations and let our pharmacists tear the process apart before rolling it out. That is why the managers actually use it.",
      name: "Owner",
      role: "Five-location pharmacy chain",
      company: "Bronx & Queens, NY",
      initials: "OW",
      rating: 5,
    },
    {
      quote:
        "Forty seasonal hires and every location was staffed in the first week. The year before we were still recruiting in December.",
      name: "Regional Manager",
      role: "Six-hospital veterinary group",
      company: "Long Island, NY",
      initials: "RM",
      rating: 5,
    },
    {
      quote:
        "Fifteen percent of our I-9 records were incomplete and nobody knew. Six weeks later it was a hundred percent.",
      name: "Operating Partner",
      role: "Nine-location restaurant group",
      company: "Brooklyn, NY",
      initials: "OP",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How do you handle seasonal peaks?",
      answer:
        "Planning starts a quarter ahead with cover reserved. Businesses that begin hiring in the month they need the staff end up paying agency premiums for the shortfall.",
    },
    {
      question: "Do our managers still choose who they hire?",
      answer:
        "Always. We source, screen, schedule and administer; the manager interviews and decides. We are removing the paperwork, not the authority, and the process is designed around that.",
    },
    {
      question: "How do you reach hourly candidates?",
      answer:
        "Text primarily, because reply times are minutes rather than days. Email-first recruiting is a large part of why time to fill for hourly roles is usually worse than it needs to be.",
    },
    {
      question: "Can you handle I-9 and age verification?",
      answer:
        "Yes, including digital verification, central record-keeping and expiry alerting. A filing cabinet at each location is where compliance exposure almost always accumulates.",
    },
    {
      question: "How many locations can you support?",
      answer:
        "From two locations to about thirty. Rollout happens a few sites at a time after a pilot, with the team growing as locations come on rather than staffing for the end state on day one.",
    },
    {
      question: "Do you handle hours and break compliance?",
      answer:
        "We monitor and report against your rules from scheduling data, and flag problems for your managers to resolve. Building the schedule itself stays with your managers, who own the operating decisions.",
    },
    {
      question: "Is this a PEO arrangement?",
      answer:
        "No. You remain the sole employer, on your contracts. This is HR outsourcing as a service. If you want the comparison, our HR vs PEO guide covers it in detail.",
    },
    {
      question: "How do you reduce turnover?",
      answer:
        "Partly through better onboarding and faster answers to staff questions, but mostly by reporting turnover by location so you can see where the problem actually is. It is almost always concentrated in one or two sites.",
    },
    {
      question: "Can you cover the hours our locations are open?",
      answer:
        "Yes, including evenings and weekends. Your managers need HR support when they are working, which is precisely when an office-hours HR arrangement is not available.",
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
    title: "Get a location-level audit before the season.",
    body: "Send us your location list, turnover and time to fill. We will show you where the variation is, what the busy season will require, and what it would cost to staff it properly.",
  },

  seo: {
    title: "Multi-Location HR & Hourly Hiring for Local Businesses — Xevantis",
    description:
      "HR built for turnover, seasonal swings and shift work across several locations — pharmacy chains, dental and veterinary groups, restaurants and local retail across the US. Nine-day time to fill and centralized I-9 compliance at every site.",
  },
};
