import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const nearshoreBpo: ServiceContent = {
  slug: "nearshore-bpo",
  name: "Nearshore BPO",
  accent: "sky",
  eyebrow: "Nearshore",
  summary:
    "Teams in Latin America and Eastern Europe — full working-day overlap, cultural proximity and accent-neutral voice, at a real cost saving.",
  trustLabel: "Delivering nearshore teams for",

  sections: {
    benefits: {
      title: "What you buy with nearshore over offshore.",
      body: "Nearshore costs more than offshore. These four are what the difference buys, and whether it is worth it depends entirely on the work.",
    },
    process: {
      title: "From location decision to a team live.",
      body: "Six phases over about three weeks. The first decision — which hub — is the one that determines everything downstream.",
    },
    tech: {
      title: "Delivery infrastructure across the hubs.",
      body: "The same platforms and controls in every location, so a multi-hub program runs one standard rather than three.",
    },
    why: {
      title: "Why the overlap changes how the team works.",
      body: "A team that shares your working day participates in your business. A team that does not, processes tickets from it.",
    },
    cases: {
      title: "Nearshore programs we run.",
      body: "Three engagements chosen for overlap, language, or a data residency requirement that ruled offshore out.",
    },
    faq: {
      title: "Locations, cost and when offshore is better.",
      body: "Including the cases where we would recommend an offshore hub instead.",
    },
  },

  hero: {
    title: "Teams that share your working day.",
    highlight: "in the meeting, not after it",
    body: "Delivery hubs in Latin America and Eastern Europe giving six to eight hours of daily overlap with North America and Western Europe. Your team is in the meeting, not after it — at a genuine saving over local hiring.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Nearshore capacity available in four hubs",
    chips: [
      { value: "7 hrs", label: "Median daily working-hours overlap" },
      { value: "-46%", label: "Versus equivalent onshore cost" },
      { value: "4", label: "Nearshore hubs, two continents" },
    ],
    figure: "network",
  },

  overview: {
    eyebrow: "Delivery model",
    title: "A delivery model, not a service line.",
    body: "Nearshore is a choice about where your team sits, not what it does. Any of our services can be delivered from a nearshore hub — the question is whether the overlap and cultural proximity are worth the premium over an offshore location, and for some work they clearly are.",
    panels: [
      {
        heading: "What it is",
        body: "Dedicated teams in Mexico, Colombia, Poland or Romania, delivering support, back office, finance, IT or engineering work with your services and standards.",
      },
      {
        heading: "Who it's for",
        body: "Companies in North America and Western Europe where the work needs live collaboration, native or near-native language, or data residency inside specific jurisdictions.",
      },
      {
        heading: "The business case",
        body: "Roughly 40–55% below onshore cost with most of the collaboration benefits intact — and materially fewer of the handover losses that eat offshore savings.",
      },
      {
        heading: "Why us",
        body: "We run offshore hubs too, so we have no reason to push you nearshore. Where the work suits an offshore location, we will recommend that instead.",
      },
    ],
    figure: "layers",
  },

  included: {
    eyebrow: "Coverage",
    title: "Any service, delivered from a nearshore hub.",
    body: "The delivery model changes; the operating model does not. Same recruitment, training, quality and security standards in every location.",
    items: [
      "Customer service across voice, email, chat and social",
      "Live chat cover with full working-day overlap",
      "Back-office and administrative operations",
      "Finance and accounting processing",
      "IT service desk and infrastructure support",
      "Sales development and lead qualification",
      "Trust, safety and content moderation",
      "Spanish, Portuguese, English, Polish, German and Romanian delivery",
      "Accent-neutral voice teams for North American programs",
      "GDPR-resident delivery from EU hubs",
      "Nearshore and offshore blended models where cost allows",
      "One contract, one reporting pack, one delivery lead across hubs",
    ],
    note: "Poland and Romania are EU member states, so delivery from those hubs keeps personal data inside the EU without a transfer mechanism. That alone decides the location question for some regulated clients.",
    figure: "pipeline",
  },

  benefits: [
    {
      title: "Overlap that removes the handover",
      body: "Six to eight hours of shared working day means questions are asked and answered the same hour. Offshore models lose a meaningful share of their saving to the daily handover and the twenty-four-hour question cycle.",
      metric: { value: 7, suffix: " hrs", label: "Median daily working-hours overlap" },
      link: { label: "See the hub map", href: "#faq" },
      figure: "network",
    },
    {
      title: "Language that fits the market",
      body: "Latin American hubs give native Spanish and Portuguese with accent-neutral English for North American voice programs. European hubs cover German, Polish and Romanian alongside strong English.",
      metric: { value: 6, label: "Languages delivered natively across nearshore hubs" },
      link: { label: "Talk about your markets", href: "#contact" },
      figure: "pulse",
    },
    {
      title: "A real saving, honestly stated",
      body: "Nearshore is not the cheapest option and we will not pretend otherwise. It is typically 40–55% below onshore and 15–25% above offshore — the question is what the overlap is worth for your particular work.",
      metric: { value: 46, suffix: "%", label: "Median saving versus equivalent onshore cost" },
      link: { label: "When offshore is better", href: "#faq" },
      figure: "dashboard",
    },
    {
      title: "Data that stays where it must",
      body: "Poland and Romania are EU member states, so EU personal data never leaves the bloc. For regulated clients this decides the location question before cost is even discussed.",
      metric: { value: 2, label: "EU-resident delivery hubs" },
      link: { label: "See the compliance position", href: "#why-us" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Location assessment",
      duration: "Week 1",
      body: "Your timezone, languages, data residency requirements and the collaboration intensity of the work. We recommend a hub — sometimes an offshore one — with the reasoning written down.",
    },
    {
      title: "Cost modeling",
      duration: "Week 1",
      body: "A side-by-side comparison of onshore, nearshore and offshore for your specific scope, including the handover cost that offshore models usually leave out of the headline figure.",
    },
    {
      title: "Scope & design",
      duration: "Week 1–2",
      body: "Process documentation, service levels and quality standards — identical to what we would design for any hub. The location does not change the operating model.",
    },
    {
      title: "Recruit",
      duration: "Week 1–2",
      body: "Shortlist within 96 hours from the chosen hub's talent pool, screened for language and domain. You interview every finalist and hold the veto.",
    },
    {
      title: "Train",
      duration: "Week 2–3",
      body: "Product certification, simulation and a graded readiness gate, run on your schedule — which is possible precisely because the overlap allows live training sessions.",
    },
    {
      title: "Go live & run",
      duration: "Week 3 onward",
      body: "Ramped start with the team lead on shift, then weekly performance reviews held during your working day rather than summarized into an overnight email.",
    },
  ],

  tech: [
    { name: "Zendesk", category: "Helpdesk" },
    { name: "Salesforce", category: "CRM" },
    { name: "Intercom", category: "Messaging" },
    { name: "Genesys", category: "Contact center" },
    { name: "Five9", category: "Cloud contact center" },
    { name: "NetSuite", category: "ERP" },
    { name: "ServiceNow", category: "ITSM" },
    { name: "Slack", category: "Collaboration" },
    { name: "Microsoft Teams", category: "Collaboration" },
    { name: "Assembled", category: "Workforce management" },
    { name: "Klaus", category: "Quality assurance" },
    { name: "Okta", category: "Identity" },
    { name: "CrowdStrike", category: "Endpoint security" },
    { name: "Looker Studio", category: "Reporting" },
  ],

  differentiators: [
    {
      title: "We run offshore too",
      body: "Six hubs across three regions means we have no commercial reason to push you nearshore. Where the work suits an offshore location, that is what we recommend and quote.",
    },
    {
      title: "Honest about the premium",
      body: "Nearshore costs 15–25% more than offshore. We state that up front and model both, because a saving you did not understand is a renegotiation waiting to happen.",
    },
    {
      title: "EU-resident where it matters",
      body: "Poland and Romania keep EU personal data inside the EU with no transfer mechanism required. For some regulated clients that ends the location discussion immediately.",
    },
    {
      title: "Accent-neutral voice",
      body: "Latin American hubs are screened specifically for accent neutrality on North American voice programs, which is a different assessment from general English fluency.",
    },
    {
      title: "One standard across hubs",
      body: "Same recruitment, training, quality sampling and security controls in every location. A blended nearshore-offshore program runs one operating model, not two.",
    },
    {
      title: "Reviews in your working day",
      body: "Weekly performance reviews happen live rather than arriving as an overnight summary. That is most of what the overlap actually buys you.",
    },
  ],

  cases: [
    {
      industry: "US healthcare technology",
      title: "Colombia over Manila, for the overlap",
      challenge:
        "A technical support program requiring constant escalation to a US engineering team, where an offshore trial had produced a 24-hour question cycle.",
      solution:
        "A Bogotá pod with seven hours of daily overlap, joining the same stand-ups as the engineering team and escalating in real time rather than by ticket.",
      results: [
        { value: 7, suffix: " hrs", label: "Daily overlap with US engineering" },
        { value: 63, suffix: "%", label: "Faster escalation resolution" },
        { value: 41, suffix: "%", label: "Saving versus US-based team" },
      ],
      accent: "sky",
      figure: "network",
    },
    {
      industry: "German financial services",
      title: "An EU hub because the data could not leave",
      challenge:
        "Customer service requiring German language and processing of EU personal data, where any non-EU location added a transfer mechanism their privacy team would not accept.",
      solution:
        "A Kraków pod delivering German and English support entirely within the EU, with data residency documented for the client's regulator.",
      results: [
        { value: 100, suffix: "%", label: "Data processing within the EU" },
        { value: 0, label: "Transfer mechanisms required" },
        { value: 38, suffix: "%", label: "Saving versus German-based team" },
      ],
      accent: "mint",
      figure: "layers",
    },
    {
      industry: "US retail",
      title: "A blend that beat both options alone",
      challenge:
        "High volume overnight email and chat with a smaller daytime voice program needing accent-neutral English, where either location alone was the wrong answer.",
      solution:
        "Voice from Mexico City for daytime overlap and accent neutrality, asynchronous email from Manila overnight, run as one program with one delivery lead.",
      results: [
        { value: 24, suffix: "/7", label: "Coverage across two hubs" },
        { value: 29, suffix: "%", label: "Cheaper than nearshore alone" },
        { value: 4.8, decimals: 1, suffix: "/5", label: "CSAT across both hubs" },
      ],
      accent: "sun",
      figure: "pipeline",
    },
  ],

  quotes: [
    {
      quote:
        "They quoted us an offshore option that was cheaper and told us why it would not work for this particular program. Then we chose nearshore knowing exactly what we were paying for.",
      name: "Grant Whitmore",
      role: "VP Customer Operations",
      company: "Aurora Health",
      initials: "GW",
      rating: 5,
    },
    {
      quote:
        "Our privacy team ruled out every non-EU location in the first meeting. Kraków solved a compliance problem, and the cost saving was almost incidental.",
      name: "Annika Lorenz",
      role: "Head of Service",
      company: "Vertex Pay",
      initials: "AL",
      rating: 5,
    },
    {
      quote:
        "The team joins our stand-up. That single fact is the difference between a supplier and a part of the department.",
      name: "Hector Salinas",
      role: "Director of Support",
      company: "Gridworks",
      initials: "HS",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Where are your nearshore hubs?",
      answer:
        "Mexico City and Bogotá serving North America, and Kraków and Bucharest serving Western Europe. We also operate offshore hubs in Manila and Bengaluru, which we recommend where the work suits them.",
    },
    {
      question: "How much overlap will we actually get?",
      answer:
        "Six to eight hours of shared working day, typically seven. Latin American hubs align closely with US time zones; Polish and Romanian hubs are within an hour or two of most of Western Europe.",
    },
    {
      question: "How much does nearshore cost compared to offshore?",
      answer:
        "Typically 15–25% more than an offshore hub and 40–55% less than onshore. We model all three for your scope so the trade-off is explicit rather than assumed.",
    },
    {
      question: "When would you recommend offshore instead?",
      answer:
        "High-volume asynchronous work with low escalation needs — overnight email queues, back-office processing, data operations. Where the overlap adds little, paying the nearshore premium is money spent on nothing.",
    },
    {
      question: "What languages can nearshore hubs deliver?",
      answer:
        "Native Spanish and Portuguese plus accent-neutral English from Latin America; Polish, Romanian, German and strong English from Europe. Other languages are usually better served from a different hub.",
    },
    {
      question: "Does nearshore solve GDPR data residency?",
      answer:
        "Poland and Romania are EU member states, so EU personal data stays inside the EU with no transfer mechanism needed. Mexico and Colombia are third countries and require standard contractual clauses.",
    },
    {
      question: "Which services can be delivered nearshore?",
      answer:
        "All of them — customer service, chat, back office, finance, IT, sales development and moderation. Nearshore is a location choice, not a restricted service catalog.",
    },
    {
      question: "Can we blend nearshore and offshore?",
      answer:
        "Yes, and it is often the best answer. Daytime collaborative work nearshore, overnight asynchronous volume offshore, run as one program with one delivery lead and one reporting pack.",
    },
    {
      question: "Is the quality standard the same across hubs?",
      answer:
        "Identical. Same recruitment process, training academy, quality rubric and security controls in every location. Where scores differ between hubs, that is a management issue we address rather than a location characteristic.",
    },
    {
      question: "How quickly can a nearshore team start?",
      answer:
        "About three weeks, the same as any hub. Shortlists within 96 hours, then training and a graded readiness gate before anyone works live.",
    },
    {
      question: "What about accent for voice programs?",
      answer:
        "Latin American hubs are screened specifically for accent neutrality on North American voice work, which is assessed separately from general English fluency and is a genuine differentiator of the region.",
    },
    {
      question: "How is it priced?",
      answer:
        "A monthly rate per seat by hub, service and language. The hub rate card is shown alongside the offshore and onshore comparison, so the premium you are paying is visible rather than buried.",
    },
  ],

  related: [
    "customer-service",
    "live-chat-outsourcing",
    "it-outsourcing",
    "admin-support",
    "ecommerce-bpo",
    "sales-and-marketing",
  ],

  cta: {
    title: "Get all three locations modeled.",
    body: "Tell us the scope, the languages and the collaboration the work needs. We will model onshore, nearshore and offshore side by side — including the cases where we recommend the cheaper option.",
  },

  seo: {
    title: "Nearshore BPO | LatAm & Eastern Europe Delivery Teams — Xevantis",
    description:
      "Nearshore teams in Mexico, Colombia, Poland and Romania with seven hours of daily overlap, native Spanish and Portuguese, EU data residency and 46% savings versus onshore.",
  },
};
