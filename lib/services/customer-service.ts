import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const customerService: ServiceContent = {
  slug: "customer-service",
  name: "Customer Service",
  accent: "blush",
  eyebrow: "Customer Service",
  summary:
    "Voice, email, social and ticket support from named specialists trained on your product — priced per seat, never per contact.",
  trustLabel: "Handling customer conversations for",

  sections: {
    benefits: {
      title: "What a support programme should move.",
      body: "Four numbers baselined before transition and reported weekly after it. Cost per contact is only one, and rarely the most valuable.",
    },
    process: {
      title: "Fourteen days from scope to live.",
      body: "Six phases. The academy and its readiness gate take the most time, because an agent who has not passed a live simulation should not meet a customer.",
    },
    tech: {
      title: "Your helpdesk, your telephony, your data.",
      body: "We operate in your stack. No proprietary platform, no forced migration and no per-seat licence from us.",
    },
    why: {
      title: "Why satisfaction goes up rather than down.",
      body: "Outsourced support has a bad reputation for three specific reasons: scripts, rotation and handle-time targets. We built the model against all three.",
    },
    cases: {
      title: "Programmes we run.",
      body: "Three operations judged on satisfaction, resolution time, and contact volume that stopped existing at all.",
    },
    faq: {
      title: "Quality, coverage and control.",
      body: "The questions that separate a support partner from a call centre.",
    },
  },

  hero: {
    title: "Support that reduces the reason people contact you.",
    highlight: "the same people every day",
    body: "Named specialists on voice, email, social and tickets — the same people every day, trained on your product rather than a script. Priced per seat, so nobody here benefits from you having more contacts.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "CX pods onboarding now — 11 seats left this quarter",
    chips: [
      { value: "4.8/5", label: "Average CSAT across managed programmes" },
      { value: "14 days", label: "Signed scope to a trained team live" },
      { value: "24/7", label: "Coverage from six delivery hubs" },
    ],
    figure: "pulse",
  },

  overview: {
    eyebrow: "Service overview",
    title: "Handling contacts well, then having fewer of them.",
    body: "Every support operation can be judged two ways: how well it handles volume, and whether volume is falling. Most providers are paid per contact, so only the first ever improves. Ours is priced per seat, which is why the second one does too.",
    panels: [
      {
        heading: "What it is",
        body: "A dedicated CX pod — agents, a team lead and a quality analyst — working your channels in your helpdesk to service levels you set.",
      },
      {
        heading: "Who it's for",
        body: "Companies where support is part of the product experience: subscription businesses, marketplaces, fintech, retail, gaming and software.",
      },
      {
        heading: "The business case",
        body: "Lower cost per contact, higher satisfaction, and a falling contact rate as the drivers behind the tickets get reported and fixed rather than absorbed.",
      },
      {
        heading: "Why us",
        body: "You interview every agent, they stay on your account, and the monthly voice-of-customer report tells you what your product should fix next.",
      },
    ],
    figure: "network",
  },

  included: {
    eyebrow: "Scope",
    title: "The team, the tooling discipline and the feedback loop.",
    body: "Quality assurance, workforce management and voice-of-customer reporting are inside the service, not priced as extras.",
    items: [
      "Voice support: inbound, outbound and scheduled callbacks",
      "Email and ticket handling with tiered escalation",
      "Social media and app store review responses",
      "Technical support and troubleshooting to tier two",
      "Order, billing and account administration",
      "Complaint handling and resolution to your policy",
      "Knowledge base authoring and macro library maintenance",
      "Quality assurance scoring against a calibrated rubric",
      "Workforce management: forecasting, rostering and adherence",
      "Voice-of-customer reporting into your product backlog",
      "Escalation paths and surge cover for incidents",
      "Multilingual coverage across six delivery hubs",
    ],
    note: "Knowledge base content, macros, QA rubrics and process documentation are your IP and stay with you. We work in your helpdesk under your accounts throughout.",
    figure: "pipeline",
  },

  benefits: [
    {
      title: "Satisfaction that rises after transition",
      body: "Named specialists who stay on your account build genuine product knowledge, and customers respond to that more than to any process change. Scripts and rotation are why outsourced support usually costs a point of CSAT.",
      metric: { value: 4.8, decimals: 1, suffix: "/5", label: "Average CSAT across managed programmes" },
      link: { label: "How agents are trained", href: "#process" },
      figure: "pulse",
    },
    {
      title: "Contact volume that falls over time",
      body: "Each pod reports the top drivers behind its tickets into your product backlog monthly, with the contact cost attached to each one. Priced per seat, we have every reason to help you need fewer of them.",
      metric: { value: 22, suffix: "%", label: "Median fall in contact rate per active customer" },
      link: { label: "See the feedback loop", href: "#whats-included" },
      figure: "dashboard",
    },
    {
      title: "Cover that matches when customers write",
      body: "Six hubs make genuine follow-the-sun staffing possible, rostered against your real contact curve rather than a standard shift pattern. Weekend and overnight queues stop becoming Monday's backlog.",
      metric: { value: 42, suffix: " sec", label: "Median first response on live channels" },
      link: { label: "Talk about coverage", href: "#contact" },
      figure: "network",
    },
    {
      title: "Cost down, without rushing conversations",
      body: "The saving comes from better tooling, tighter macros and fewer repeat contacts. Handle time is a capacity planning input here, never an individual agent target.",
      metric: { value: 34, suffix: "%", label: "Median reduction in cost per resolved contact" },
      link: { label: "How quality is measured", href: "#why-us" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Immersion",
      duration: "Days 1–3",
      body: "A delivery lead runs a two-day immersion: ticket taxonomy, escalation paths, tone of voice, systems access and the twenty edge cases that actually cause churn.",
    },
    {
      title: "Toolkit design",
      duration: "Days 3–6",
      body: "Macros, QA rubric, knowledge base, routing rules and reporting schema, built before a single agent is hired and handed to you as your intellectual property.",
    },
    {
      title: "Recruit",
      duration: "Days 4–8",
      body: "A shortlist within 96 hours from a 40,000-strong talent pool, screened for your channels and languages. You interview every finalist and hold the veto.",
    },
    {
      title: "Academy",
      duration: "Days 8–14",
      body: "Product certification, live call simulation, shadowing and a graded readiness gate. Nobody touches a real customer before passing it, which is not negotiable.",
    },
    {
      title: "Go live",
      duration: "Day 14",
      body: "A ramped start on a subset of volume with the team lead on shift and every interaction reviewed. Full volume follows once quality scores hold for a week.",
    },
    {
      title: "Run & reduce",
      duration: "Ongoing",
      body: "Weekly performance reviews, monthly business reviews, and a standing voice-of-customer report naming the contact drivers worth engineering out.",
    },
  ],

  tech: [
    { name: "Zendesk", category: "Helpdesk" },
    { name: "Intercom", category: "Messaging" },
    { name: "Freshdesk", category: "Helpdesk" },
    { name: "Salesforce Service Cloud", category: "Service platform" },
    { name: "Gorgias", category: "E-commerce support" },
    { name: "HubSpot Service Hub", category: "Service platform" },
    { name: "Twilio", category: "Telephony" },
    { name: "Genesys", category: "Contact centre" },
    { name: "Five9", category: "Cloud contact centre" },
    { name: "Talkdesk", category: "Voice platform" },
    { name: "Klaus", category: "Quality assurance" },
    { name: "Assembled", category: "Workforce management" },
    { name: "Guru", category: "Knowledge base" },
    { name: "Jira", category: "Escalation" },
    { name: "Looker Studio", category: "Reporting" },
    { name: "Slack", category: "Escalation channel" },
  ],

  differentiators: [
    {
      title: "Named specialists, not a pool",
      body: "The same people every day, on your account only. Product knowledge compounds, and customers can tell the difference within a single interaction.",
    },
    {
      title: "No scripts",
      body: "Agents are trained on your product and your policy, then trusted to have a conversation. Handle time informs rostering; it never appears on an individual's scorecard.",
    },
    {
      title: "Priced per seat, not per contact",
      body: "A per-contact contract gives a supplier a quiet interest in your customers struggling. Ours does the opposite, and the monthly deflection report proves we act on it.",
    },
    {
      title: "Quality analysts on every pod",
      body: "Calibrated sampling with root-cause coaching, reported weekly. Quality that is nobody's specific job drifts within two quarters, in every operation we have inherited.",
    },
    {
      title: "You interview everyone",
      body: "Every finalist meets you before joining and you can say no. You are told immediately if anyone leaves the account, not at the next monthly review.",
    },
    {
      title: "Month-to-month after month three",
      body: "No multi-year lock-in. Three months to become genuinely productive, then staying should be a choice you make each month rather than a contract you are inside.",
    },
  ],

  cases: [
    {
      industry: "E-commerce",
      title: "Fifteen thousand tickets a month, without the fire drill",
      challenge:
        "Seasonal swings of 400% and a support team that spent every peak in backlog, with satisfaction falling each fourth quarter.",
      solution:
        "A core pod with pre-trained surge capacity from the same hub, a rebuilt macro library, and self-service deflection for the three highest-volume order queries.",
      results: [
        { value: 4.7, decimals: 1, suffix: "/5", label: "CSAT held through peak" },
        { value: 31, suffix: "%", label: "Lower cost per resolved contact" },
        { value: 0, suffix: " hrs", label: "Peak backlog at any point" },
      ],
      accent: "blush",
      figure: "pulse",
    },
    {
      industry: "Subscription software",
      title: "Turning the ticket queue into a product backlog",
      challenge:
        "Support answering the same defect questions for months, because nothing quantified what those questions were costing.",
      solution:
        "Monthly voice-of-customer reporting attaching contact cost to each recurring driver, presented directly to the product team rather than filtered through an account manager.",
      results: [
        { value: 41, label: "Recurring drivers fixed in a year" },
        { value: 27, suffix: "%", label: "Reduction in total ticket volume" },
        { value: 4.9, decimals: 1, suffix: "/5", label: "CSAT after two quarters" },
      ],
      accent: "sky",
      figure: "dashboard",
    },
    {
      industry: "Financial services",
      title: "Multilingual support across nine markets",
      challenge:
        "Expansion into six new markets with no local language cover and a regulatory requirement for auditable response times.",
      solution:
        "Native-speaker pods across three hubs on a single shared quality rubric, with response-time evidence generated automatically from the helpdesk for compliance.",
      results: [
        { value: 9, label: "Languages covered" },
        { value: 100, suffix: "%", label: "Regulatory response deadlines met" },
        { value: 4.8, decimals: 1, suffix: "/5", label: "CSAT, consistent across markets" },
      ],
      accent: "mint",
      figure: "network",
    },
  ],

  quotes: [
    {
      quote:
        "Supporting fifteen thousand tickets a month stopped being a fire drill and became routine. That is the whole review, really.",
      name: "Hannah Prescott",
      role: "Head of Customer Operations",
      company: "Lumen Retail",
      initials: "HP",
      rating: 5,
    },
    {
      quote:
        "The monthly report tells us what to fix and what it is costing us. Our previous provider sent us a chart of ticket volumes.",
      name: "Callum Reyes",
      role: "Director of Support",
      company: "Gridworks",
      initials: "CR",
      rating: 5,
    },
    {
      quote:
        "The team is technically excellent, but what stands out is how quickly they push back when our process is the problem.",
      name: "Ines Almeida",
      role: "VP of Support",
      company: "Solstice",
      initials: "IA",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How fast can a support team go live?",
      answer:
        "Fourteen days from a signed scope. Shortlists within 96 hours, six days of academy training, and a graded readiness gate before anyone handles a live customer.",
    },
    {
      question: "Will our customers know support is outsourced?",
      answer:
        "Only if you tell them. Agents work under your brand, in your helpdesk, on your email domain, with your tone of voice. They are dedicated to your account and know your product properly.",
    },
    {
      question: "Do you use scripts?",
      answer:
        "No. Agents are trained on your product and policy and then trusted to hold a conversation. Macros exist for accuracy and speed, but the words are not dictated line by line.",
    },
    {
      question: "How do you measure quality?",
      answer:
        "A dedicated quality analyst samples interactions against a rubric calibrated with your team, scored weekly with coaching actions logged. CSAT, first-contact resolution and response time sit alongside it on your dashboard.",
    },
    {
      question: "What coverage can you provide?",
      answer:
        "Anything up to 24/7/365, rostered against your actual contact curve. Six hubs across Asia, Eastern Europe and Latin America make genuine follow-the-sun staffing possible.",
    },
    {
      question: "Which languages do you support?",
      answer:
        "English, Spanish, Portuguese, French, German, Italian, Dutch, Polish, Tagalog and Mandarin as standard, with others on notice. Native speakers, never machine translation.",
    },
    {
      question: "Do we keep our own helpdesk?",
      answer:
        "Yes. We work in your Zendesk, Intercom, Freshdesk or Service Cloud under your licences. There is no proprietary platform to adopt and no customer data leaving your stack.",
    },
    {
      question: "How does escalation to our team work?",
      answer:
        "A tiered model agreed during immersion, with defined criteria and response windows per tier. Anything reputational or legal routes to a named contact through an agreed channel within a set time.",
    },
    {
      question: "What happens during an incident or outage?",
      answer:
        "A crisis playbook agreed up front: holding responses go out within the response window, surge staff are pulled onto the queue, and your incident lead gets situation reports on a fixed cadence.",
    },
    {
      question: "Can you scale for seasonal peaks?",
      answer:
        "Yes, with 30 days' notice. Surge staff come from the same delivery hub pre-trained on your process, so peak capacity is not agency temps meeting your product for the first time.",
    },
    {
      question: "How is data protected?",
      answer:
        "ISO 27001 certified and SOC 2 Type II audited, with clean-desk floors, managed devices, restricted access and DLP. GDPR, PCI DSS and HIPAA controls are layered on where your data requires them.",
    },
    {
      question: "What is the commercial model?",
      answer:
        "A monthly rate per seat by channel mix and language, never per contact. Charging per contact would give us a reason to want more of them, which is the opposite of what you are buying.",
    },
  ],

  related: [
    "live-chat-outsourcing",
    "ecommerce-bpo",
    "admin-support",
    "sales-and-marketing",
    "nearshore-bpo",
    "it-outsourcing",
  ],

  cta: {
    title: "Get a CX model and a price this week.",
    body: "Tell us your volumes, channels and the service levels you need. We will come back within one business day with a team shape, a transition plan and a cost per resolved contact.",
  },

  seo: {
    title: "Customer Service Outsourcing | Dedicated CX Pods — Valentisys",
    description:
      "Voice, email, social and ticket support from named specialists trained on your product. 4.8/5 average CSAT, live in 14 days, priced per seat rather than per contact.",
  },
};
