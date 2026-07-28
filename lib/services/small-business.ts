import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const smallBusiness: ServiceContent = {
  slug: "small-business",
  name: "Small Business",
  accent: "sun",
  eyebrow: "Small Business",
  summary:
    "Outsourcing sized for companies under 100 people — part-time seats, no enterprise minimums, and a contract you can leave in 30 days.",
  trustLabel: "Supporting growing businesses like",

  sections: {
    benefits: {
      title: "What outsourcing gives a small company.",
      body: "Different from what it gives an enterprise. For a small business the value is coverage and capability, not headcount arbitrage.",
    },
    process: {
      title: "Live in ten days, without a procurement process.",
      body: "Six phases. Deliberately lighter than our enterprise transitions, because a 40-person company should not need a project plan to hire help.",
    },
    tech: {
      title: "The tools small businesses actually use.",
      body: "We work in what you already have. Nobody here will tell you to buy an enterprise platform you do not need.",
    },
    why: {
      title: "Why this is not a scaled-down enterprise contract.",
      body: "Most BPOs serve small companies with the same contract structure they use for a bank, which is why the experience is so poor.",
    },
    cases: {
      title: "Businesses we support.",
      body: "Three companies between 12 and 80 people, and what one or two seats actually changed.",
    },
    faq: {
      title: "Minimums, commitment and how small is too small.",
      body: "The practical questions, including where we would tell you not to bother yet.",
    },
  },

  hero: {
    title: "Outsourcing that does not require you to be an enterprise.",
    highlight: "half a seat",
    body: "Support, admin, bookkeeping or IT cover from one seat upward — or half a seat if that is genuinely what you need. No enterprise minimums, no procurement process, and 30 days' notice after the first quarter.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Taking on small business accounts this month",
    chips: [
      { value: "1 seat", label: "Minimum engagement, part-time available" },
      { value: "10 days", label: "From first call to someone working" },
      { value: "30 days", label: "Notice period after month three" },
    ],
    figure: "network",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The help you need is smaller than most providers will sell.",
    body: "A 40-person company usually needs about a seat and a half of support, a day a week of bookkeeping and someone answering IT questions. Most outsourcing providers will not quote below ten seats, so small businesses end up hiring a generalist who does all three badly.",
    panels: [
      {
        heading: "What it is",
        body: "Right-sized seats across customer support, admin, bookkeeping and IT — full-time, part-time or shared, under one contract and one point of contact.",
      },
      {
        heading: "Who it's for",
        body: "Companies from roughly 5 to 100 employees: agencies, e-commerce brands, professional services firms, SaaS startups and local service businesses.",
      },
      {
        heading: "The business case",
        body: "Specialist capability at part-time cost, cover when your one person is ill or on holiday, and no employment risk or recruitment cycle.",
      },
      {
        heading: "Why us",
        body: "The same delivery model, quality standards and people as our enterprise accounts — just sized to what you actually need, and honest about when that is nothing.",
      },
    ],
    figure: "layers",
  },

  included: {
    eyebrow: "Scope",
    title: "Pick what you need. Change it monthly.",
    body: "Seats can be split across functions and adjusted each month. You are not buying a fixed shape for a year.",
    items: [
      "Customer support across email, chat and phone",
      "Order processing and fulfilment coordination",
      "Bookkeeping, invoicing and expense processing",
      "Credit control and payment chasing",
      "Diary management and appointment scheduling",
      "Inbox triage and correspondence handling",
      "Data entry, CRM upkeep and list building",
      "IT helpdesk and device support",
      "Social media monitoring and response",
      "Research, quotes and proposal preparation",
      "Holiday and sickness cover for your existing staff",
      "A named account lead who knows your business",
    ],
    note: "There is no setup fee, no minimum seat count above one, and no charge for the scoping call. If we think you do not need us yet, we will say so on that call.",
    figure: "pipeline",
  },

  benefits: [
    {
      title: "A specialist instead of a generalist",
      body: "Small companies hire one person to do support, admin and bookkeeping, and get someone competent at one of the three. Part-time seats let you buy actual capability in each rather than an average across all of them.",
      metric: { value: 1, label: "Minimum seat, splittable across functions" },
      link: { label: "See what a seat covers", href: "#whats-included" },
      figure: "network",
    },
    {
      title: "Cover when your one person is away",
      body: "In a small business, one person's holiday is a function going offline for a fortnight. A pod absorbs that without you noticing, which is often the first thing clients say they value.",
      metric: { value: 0, suffix: " days", label: "Coverage gaps from holiday or sickness" },
      link: { label: "How cover works", href: "#why-us" },
      figure: "pulse",
    },
    {
      title: "No employment risk to carry",
      body: "Hiring a permanent person at this size is a real bet: recruitment cost, ramp time, and a difficult conversation if it does not work. Seats scale down on 30 days' notice with none of that.",
      metric: { value: 30, suffix: " days", label: "Notice to reduce or stop, after month three" },
      link: { label: "Talk about the right size", href: "#contact" },
      figure: "layers",
    },
    {
      title: "Working within ten days",
      body: "No procurement, no statement of work negotiation, no implementation project. A scoping call, a shortlist you interview, a week of training, and someone is doing the work.",
      metric: { value: 10, suffix: " days", label: "From first call to someone working" },
      link: { label: "See the onboarding", href: "#process" },
      figure: "dashboard",
    },
  ],

  process: [
    {
      title: "Scoping call",
      duration: "Day 1",
      body: "Forty-five minutes on what is actually taking up your time. We will tell you on this call if we think you do not need us yet, which happens reasonably often.",
    },
    {
      title: "Right-size the seat",
      duration: "Days 1–2",
      body: "A written proposal: how much of a seat, which functions, what it costs. Usually smaller than clients expect, because most of the load is a few hours a day rather than a full-time role.",
    },
    {
      title: "Shortlist",
      duration: "Days 2–5",
      body: "Two or three candidates with the right skill mix for your combination of tasks. You interview them, and you can reject all of them without explanation.",
    },
    {
      title: "Document the basics",
      duration: "Days 5–8",
      body: "A lightweight process document for the main tasks — enough to be repeatable, not an enterprise procedure manual. We write it; you review it.",
    },
    {
      title: "Start working",
      duration: "Day 10",
      body: "A ramped first week with your review on everything, easing off as accuracy holds. Your account lead checks in daily through the first fortnight.",
    },
    {
      title: "Adjust monthly",
      duration: "Ongoing",
      body: "A monthly call to resize, reallocate or stop. Most clients change the shape at least twice in the first six months, and that is expected rather than a variation to negotiate.",
    },
  ],

  tech: [
    { name: "Xero", category: "Accounting" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Shopify", category: "E-commerce" },
    { name: "HubSpot", category: "CRM" },
    { name: "Pipedrive", category: "CRM" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Microsoft 365", category: "Productivity" },
    { name: "Zendesk", category: "Support" },
    { name: "Freshdesk", category: "Support" },
    { name: "Intercom", category: "Chat" },
    { name: "Slack", category: "Communication" },
    { name: "Asana", category: "Task management" },
    { name: "Trello", category: "Task management" },
    { name: "Calendly", category: "Scheduling" },
    { name: "Stripe", category: "Payments" },
    { name: "Notion", category: "Documentation" },
  ],

  differentiators: [
    {
      title: "One seat is a real minimum",
      body: "Not a ten-seat minimum with a small-business discount. We will quote half a seat where that is genuinely the right answer, and several of our accounts are exactly that.",
    },
    {
      title: "No procurement theatre",
      body: "A scoping call, a one-page proposal and a start date. A 40-person company should not need a statement of work and an implementation plan to get help with its inbox.",
    },
    {
      title: "Same standards as the enterprise accounts",
      body: "The same recruitment, training, quality sampling and security controls. Small clients get a smaller team, not a lesser one.",
    },
    {
      title: "We will tell you not to bother",
      body: "If your volume does not justify a seat yet, we say so on the scoping call. Selling a seat to a business that needs three hours a week helps nobody for long.",
    },
    {
      title: "Change it monthly",
      body: "Resize, reallocate across functions or stop, with 30 days' notice after the first quarter. Small businesses change shape quickly and the contract should not resist that.",
    },
    {
      title: "A named account lead",
      body: "One person who knows your business, not a ticket queue. At this size, being able to send a message and get an answer matters more than a service catalogue.",
    },
  ],

  cases: [
    {
      industry: "E-commerce, 14 staff",
      title: "Half a seat that handled every customer email",
      challenge:
        "A founder answering support emails between 9pm and midnight, with response times slipping to two days during promotions.",
      solution:
        "A half-time support seat covering the inbox and order queries, with a documented escalation route for anything genuinely needing the founder.",
      results: [
        { value: 2, suffix: " hrs", label: "Response time, from 2 days" },
        { value: 14, suffix: " hrs", label: "Weekly founder time returned" },
        { value: 0.5, decimals: 1, label: "Seats required" },
      ],
      accent: "sun",
      figure: "pulse",
    },
    {
      industry: "Design agency, 32 staff",
      title: "Bookkeeping and credit control for two days a week",
      challenge:
        "An office manager doing bookkeeping badly alongside four other roles, with receivables drifting past 70 days and no time to chase.",
      solution:
        "A two-day-a-week bookkeeping seat covering invoicing, reconciliation and a documented credit control cycle, leaving the office manager to her actual job.",
      results: [
        { value: 41, suffix: " days", label: "Days sales outstanding, from 70" },
        { value: 118, prefix: "£", suffix: "k", label: "Cash brought forward" },
        { value: 2, suffix: " days", label: "Per week of resource" },
      ],
      accent: "mint",
      figure: "dashboard",
    },
    {
      industry: "Professional services, 80 staff",
      title: "IT cover without a first IT hire",
      challenge:
        "Growing past the point where the most technical person could keep helping colleagues, but not big enough to justify a full-time IT hire.",
      solution:
        "A shared IT helpdesk seat covering device support, account administration and vendor liaison, with escalation to our infrastructure team when needed.",
      results: [
        { value: 1, label: "Seat, shared coverage" },
        { value: 45, suffix: " min", label: "Median response to staff requests" },
        { value: 62, suffix: "%", label: "Cheaper than a junior IT hire" },
      ],
      accent: "sky",
      figure: "network",
    },
  ],

  quotes: [
    {
      quote:
        "Every other provider wanted a ten-seat minimum. We needed half a person. They quoted half a person.",
      name: "Jamie Wren",
      role: "Founder",
      company: "Duonode",
      initials: "JW",
      rating: 5,
    },
    {
      quote:
        "On the first call they told us our volume did not justify a seat yet and to come back in six months. We came back in five.",
      name: "Nadia Sadiq",
      role: "Managing Director",
      company: "Solstice",
      initials: "NS",
      rating: 5,
    },
    {
      quote:
        "We have changed the shape three times in a year as the business moved. Not once has it been a contract conversation.",
      name: "Peter Lund",
      role: "Operations Lead",
      company: "Gridworks",
      initials: "PL",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "What is the actual minimum?",
      answer:
        "One seat, and we will quote half a seat where that is genuinely right. Several of our small business accounts are part-time, and it is a normal arrangement rather than a favour.",
    },
    {
      question: "How small is too small?",
      answer:
        "If the work is under about ten hours a week, a seat is usually not worth it yet and we will say so on the scoping call. We would rather you came back in six months than churned in three.",
    },
    {
      question: "Can one person cover several functions?",
      answer:
        "Yes, and it is common — support in the morning, bookkeeping in the afternoon, for example. We match candidates to your specific combination rather than to a job title.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fee, no recruitment fee and no charge for the scoping call or the proposal. You start paying when someone starts working.",
    },
    {
      question: "How quickly can someone start?",
      answer:
        "About ten days from the first call: two days to scope, three to shortlist and interview, three to document the basics, then a ramped first week.",
    },
    {
      question: "What if it does not work out?",
      answer:
        "Thirty days' notice after the first quarter, no exit fee. If a specific person is not right, we replace them at our cost — which is far less painful than the equivalent conversation with an employee.",
    },
    {
      question: "Do we get the same quality as your larger clients?",
      answer:
        "Same recruitment process, same training, same quality sampling, same security controls. The team is smaller; the standard is not different.",
    },
    {
      question: "What happens when we grow?",
      answer:
        "The seat grows with you, and the person usually stays. Several of our enterprise accounts started as one part-time seat, which is a good outcome for everyone.",
    },
    {
      question: "Will they work in our timezone?",
      answer:
        "Yes. We staff from the hub that overlaps your working day. For most small business accounts that means the same hours as your team, not a handover email.",
    },
    {
      question: "How does security work at this size?",
      answer:
        "The same controls as our enterprise accounts: managed devices, least-privilege access, ISO 27001 and SOC 2 Type II. Small clients are not a lower security tier.",
    },
    {
      question: "Can we start with one function and add more?",
      answer:
        "Yes, and most clients do. Support first is common, then admin or bookkeeping once the relationship is established. Adding is a monthly call, not a new contract.",
    },
    {
      question: "How is it priced?",
      answer:
        "A monthly rate per seat or fraction of a seat, by skill mix. No setup fee, no minimum term beyond the first three months, and no charge for the account lead's time.",
    },
  ],

  related: [
    "customer-service",
    "admin-support",
    "finance-and-accounting",
    "ecommerce-bpo",
    "it-outsourcing",
    "hr-outsourcing",
  ],

  cta: {
    title: "Book a scoping call. It costs nothing.",
    body: "Forty-five minutes on what is actually taking your time, and a one-page proposal after it. If the answer is that you do not need us yet, we will tell you on the call.",
  },

  seo: {
    title: "Outsourcing for Small Business | From One Seat — Valentisys",
    description:
      "Right-sized outsourcing for companies under 100 people: support, admin, bookkeeping and IT from one seat or less. No enterprise minimums, no setup fee, 30 days' notice.",
  },
};
