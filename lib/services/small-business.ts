import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const smallBusiness: ServiceContent = {
  slug: "small-business",
  name: "Small Business",
  accent: "sun",
  eyebrow: "Small Business",
  summary:
    "Help sized for a practice or firm under 100 people — part-time seats, a real minimum of one, and a contract you can leave in 30 days.",
  trustLabel: "Supporting local businesses like",

  sections: {
    benefits: {
      title: "What this gives a small practice or firm.",
      body: "For a business your size the value is coverage and capability — having someone competent at the thing, and having them when your one person is out.",
    },
    process: {
      title: "Working in ten days, without a procurement process.",
      body: "Six phases, deliberately light. A twelve-person office should not need a project plan to get help with its inbox.",
    },
    tech: {
      title: "The tools local businesses actually run.",
      body: "We work in what you already have. Nobody here will tell you to buy a platform you do not need.",
    },
    why: {
      title: "Why this is not a big contract cut down.",
      body: "Most providers serve a small practice with the same contract structure they use for a bank, which is why the experience is so poor.",
    },
    cases: {
      title: "Businesses we support.",
      body: "Three offices between 12 and 80 people, and what one or two seats actually changed.",
    },
    faq: {
      title: "Minimums, commitment and how small is too small.",
      body: "The practical questions, including where we would tell you not to bother yet.",
    },
  },

  hero: {
    title: "Help sized for the business you actually run.",
    highlight: "half a seat",
    body: "Front desk cover, admin, bookkeeping or IT from one seat upward — or half a seat if that is genuinely what you need. No ten-seat minimum, no procurement process, and 30 days' notice after the first quarter.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Taking on new local accounts this month, in all 50 states",
    chips: [
      { value: "1 seat", label: "Real minimum, part-time available" },
      { value: "10 days", label: "From first call to someone working" },
      { value: "30 days", label: "Notice period after month three" },
    ],
    figure: "network",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The help you need is smaller than most providers will sell.",
    body: "A twelve-person office usually needs about a seat and a half of front desk cover, a day a week of bookkeeping and someone to answer IT questions. Most providers will not quote below ten seats, so small businesses end up hiring one generalist who does all three badly.",
    panels: [
      {
        heading: "What it is",
        body: "Right-sized seats across front desk, admin, bookkeeping and IT — full-time, part-time or shared, under one contract and one person you call.",
      },
      {
        heading: "Who it's for",
        body: "Practices and firms from roughly 5 to 100 people: medical and dental clinics, pharmacies, law firms, engineering and accounting practices, real estate agencies and local service businesses.",
      },
      {
        heading: "The business case",
        body: "Real capability at part-time cost, cover when your one person is sick or on PTO, and no employment risk or recruiting cycle.",
      },
      {
        heading: "Why us",
        body: "The same recruiting, training and security standards we apply to every account — sized to what you actually need, and honest about when that is nothing yet.",
      },
    ],
    figure: "layers",
  },

  included: {
    eyebrow: "Scope",
    title: "Pick what you need. Change it monthly.",
    body: "Seats can be split across functions and adjusted each month. You are not buying a fixed shape for a year.",
    items: [
      "Front desk cover: calls, scheduling and intake",
      "Insurance verification and prior authorization follow-up",
      "Bookkeeping, invoicing and expense processing",
      "Billing, collections and payment chasing",
      "Calendar management and appointment reminders",
      "Inbox triage and routine correspondence",
      "Data entry and keeping your records current",
      "IT help desk and device support",
      "Review responses and social media monitoring",
      "Research, quotes and proposal preparation",
      "PTO and sick cover for your existing staff",
      "A named account lead who knows your business",
    ],
    note: "There is no setup fee, no minimum seat count above one, and no charge for the scoping call. If we think you do not need us yet, we will say so on that call.",
    figure: "pipeline",
  },

  benefits: [
    {
      title: "A specialist instead of a generalist",
      body: "Small offices hire one person to do the front desk, the paperwork and the books, and get someone competent at one of the three. Part-time seats let you buy real capability in each rather than an average across all of them.",
      metric: { value: 1, label: "Minimum seat, splittable across functions" },
      link: { label: "See what a seat covers", href: "#whats-included" },
      figure: "network",
    },
    {
      title: "Cover when your one person is away",
      body: "In a small office, one person's PTO is a whole function going offline for two weeks. A trained backup absorbs that without you noticing, which is often the first thing clients say they value.",
      metric: { value: 0, suffix: " days", label: "Coverage gaps from PTO or sick leave" },
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
      body: "A short written procedure for the main tasks — enough to be repeatable, not a manual nobody will read. We write it; you review it.",
    },
    {
      title: "Start working",
      duration: "Day 10",
      body: "A ramped first week with your review on everything, easing off as accuracy holds. Your account lead checks in daily through the first two weeks.",
    },
    {
      title: "Adjust monthly",
      duration: "Ongoing",
      body: "A monthly call to resize, reallocate or stop. Most clients change the shape at least twice in the first six months, and that is expected rather than a variation to negotiate.",
    },
  ],

  tech: [
    { name: "QuickBooks", category: "Accounting" },
    { name: "Xero", category: "Accounting" },
    { name: "Open Dental", category: "Dental practice" },
    { name: "Athenahealth", category: "Medical records" },
    { name: "Clio", category: "Legal practice" },
    { name: "Follow Up Boss", category: "Real estate CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "Google Workspace", category: "Email & calendar" },
    { name: "Microsoft 365", category: "Email & calendar" },
    { name: "RingCentral", category: "Phone system" },
    { name: "Weave", category: "Practice phones" },
    { name: "Gusto", category: "Payroll" },
    { name: "Calendly", category: "Scheduling" },
    { name: "Square", category: "Payments" },
    { name: "Stripe", category: "Payments" },
    { name: "Slack", category: "Communication" },
  ],

  differentiators: [
    {
      title: "One seat is a real minimum",
      body: "Not a ten-seat minimum with a small-business discount. We will quote half a seat where that is genuinely the right answer, and several of our accounts are exactly that.",
    },
    {
      title: "No procurement theater",
      body: "A scoping call, a one-page proposal and a start date. A twelve-person office should not need a statement of work and an implementation plan to get help with its inbox.",
    },
    {
      title: "The same standards everywhere",
      body: "The same recruiting, training, quality sampling and security controls we apply to a fifty-seat account. A small client gets a smaller team, not a lesser one.",
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
      body: "One person who knows your business, not a ticket queue. At this size, being able to send a message and get an answer matters more than a service catalog.",
    },
  ],

  cases: [
    {
      industry: "Chiropractic clinic · Staten Island, NY · 6 staff",
      title: "Half a seat that answered every call",
      challenge:
        "An owner returning missed calls between 8pm and 10pm, with new-patient inquiries going two days without a reply during busy weeks.",
      solution:
        "A half-time seat covering the phone during treatment hours and the inbox after close, with a written escalation route for anything genuinely needing the owner.",
      results: [
        { value: 2, suffix: " hrs", label: "Response time, from 2 days" },
        { value: 14, suffix: " hrs", label: "Weekly owner time returned" },
        { value: 0.5, decimals: 1, label: "Seats required" },
      ],
      accent: "sun",
      figure: "pulse",
    },
    {
      industry: "Accounting firm · Yonkers, NY · 32 staff",
      title: "Bookkeeping and collections for two days a week",
      challenge:
        "An office manager doing the firm's own books badly alongside four other roles, with the firm's receivables drifting past 70 days while it chased its clients' books instead.",
      solution:
        "A two-day-a-week seat covering invoicing, reconciliation and a written collections cycle, leaving the office manager to the job she was actually hired for.",
      results: [
        { value: 41, suffix: " days", label: "Days in receivables, from 70" },
        { value: 148, prefix: "$", suffix: "k", label: "Cash brought forward" },
        { value: 2, suffix: " days", label: "Per week of resource" },
      ],
      accent: "mint",
      figure: "dashboard",
    },
    {
      industry: "Architecture practice · Manhattan, NY · 80 staff",
      title: "IT cover without a first IT hire",
      challenge:
        "Growing past the point where the most technical associate could keep helping colleagues, but not large enough to justify a full-time IT salary in Manhattan.",
      solution:
        "A shared help desk seat covering devices, accounts and software vendor liaison, escalating to our infrastructure engineers for anything involving the file server or the network.",
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
      name: "Clinic Owner",
      role: "Chiropractic clinic, 6 staff",
      company: "Staten Island, NY",
      initials: "CO",
      rating: 5,
    },
    {
      quote:
        "On the first call they told us our volume did not justify a seat yet and to come back in six months. We came back in five.",
      name: "Managing Partner",
      role: "Accounting firm, 32 staff",
      company: "Yonkers, NY",
      initials: "MP",
      rating: 5,
    },
    {
      quote:
        "We have changed the shape three times in a year as the practice moved. Not once has it been a contract conversation.",
      name: "Office Manager",
      role: "Architecture practice, 80 staff",
      company: "Manhattan, NY",
      initials: "OM",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "What is the actual minimum?",
      answer:
        "One seat, and we will quote half a seat where that is genuinely right. Several of our small business accounts are part-time, and it is a normal arrangement rather than a favor.",
    },
    {
      question: "How small is too small?",
      answer:
        "If the work is under about ten hours a week, a seat is usually not worth it yet and we will say so on the scoping call. We would rather you came back in six months than churned in three.",
    },
    {
      question: "Can one person cover several functions?",
      answer:
        "Yes, and it is common — phones in the morning, insurance follow-up and bookkeeping in the afternoon, for example. We match candidates to your specific combination rather than to a job title.",
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
        "Same recruiting process, same training, same quality sampling, same security controls. The team is smaller; the standard is not different.",
    },
    {
      question: "What happens when we grow?",
      answer:
        "The seat grows with you, and the person usually stays. Several of our largest accounts started as one part-time seat, which is a good outcome for everyone.",
    },
    {
      question: "Will they work our hours?",
      answer:
        "Yes. We staff against your actual office hours, including a Saturday clinic or a late night before a deadline. You get overlap with your own team, not a handover email.",
    },
    {
      question: "How does security work at this size?",
      answer:
        "The same controls regardless of account size: managed devices, least-privilege access, SOC 2 Type II, and a signed business associate agreement wherever patient information is involved. A small client is not a lower security tier.",
    },
    {
      question: "Can we start with one thing and add more?",
      answer:
        "Yes, and most clients do. Phone cover first is common, then paperwork or bookkeeping once the relationship is established. Adding is a monthly call, not a new contract.",
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
    title: "Small Business Support | From One Seat, Any US State — Xevantis",
    description:
      "Right-sized support for practices and firms under 100 people: front desk, admin, bookkeeping and IT from one seat or less. For clinics, law firms, pharmacies and local offices. No ten-seat minimum, no setup fee, 30 days' notice.",
  },
};
