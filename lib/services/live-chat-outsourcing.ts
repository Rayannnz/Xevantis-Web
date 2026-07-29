import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const liveChatOutsourcing: ServiceContent = {
  slug: "live-chat-outsourcing",
  name: "Live Chat Outsourcing",
  accent: "sky",
  eyebrow: "Live Chat",
  summary:
    "24/7 chat cover staffed to your traffic curve — answering in under thirty seconds and converting the visitors who would otherwise leave.",
  trustLabel: "Answering chat around the clock for",

  sections: {
    benefits: {
      title: "What always-on chat is actually worth.",
      body: "Chat is the only support channel that also sells. These four outcomes cover both halves, and both are baselined before we start.",
    },
    process: {
      title: "Live in ten days, tuned over four weeks.",
      body: "Six phases. Chat ramps faster than voice because the training surface is narrower — but concurrency discipline takes a month to settle.",
    },
    tech: {
      title: "Chat platforms and the routing behind them.",
      body: "We work in your widget under your licenses. Where you have no platform yet, we implement one you own.",
    },
    why: {
      title: "Why this beats an offshore chat vendor or a bot.",
      body: "Chat quality collapses in two predictable ways: too many concurrent conversations, and agents who cannot answer without escalating.",
    },
    cases: {
      title: "Chat programs we run.",
      body: "Three deployments measured on response time, conversion assist, and what happened to phone volume afterwards.",
    },
    faq: {
      title: "Concurrency, coverage and conversion.",
      body: "The operational questions that decide whether outsourced chat helps or embarrasses you.",
    },
  },

  hero: {
    title: "Chat answered in under thirty seconds, at 3am.",
    highlight: "capped at three conversations",
    body: "Dedicated chat specialists rostered against your real traffic curve, capped at three conversations each so quality holds. Trained to resolve and, where it fits, to sell — not to apologize and open a ticket.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Chat pods available for the next peak cycle",
    chips: [
      { value: "24 sec", label: "Median first response, all hours" },
      { value: "+19%", label: "Conversion among chat-engaged visitors" },
      { value: "3", label: "Concurrent chats maximum, per agent" },
    ],
    figure: "pulse",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The channel that answers questions and closes sales.",
    body: "A visitor who opens chat is telling you they have an objection worth resolving. Answer within thirty seconds and a good share of them buy; answer in four minutes and they have gone. Chat is the only channel where support performance is directly a revenue number.",
    panels: [
      {
        heading: "What it is",
        body: "A chat pod — specialists, a team lead and a quality analyst — covering your live chat and messaging channels to agreed response and concurrency limits.",
      },
      {
        heading: "Who it's for",
        body: "E-commerce, travel, insurance, education and considered-purchase B2C, plus SaaS teams where pre-sales questions arrive through the widget.",
      },
      {
        heading: "The business case",
        body: "Higher conversion among engaged visitors, deflected phone and email volume, and coverage at hours no in-house schedule would justify.",
      },
      {
        heading: "Why us",
        body: "We cap concurrency at three. Most chat vendors run six or eight to hit a price point, and every quality problem in the channel traces back to that number.",
      },
    ],
    figure: "network",
  },

  included: {
    eyebrow: "Scope",
    title: "Cover, conversion and the quality controls between them.",
    body: "One monthly rate per seat. Concurrency caps, QA and reporting are contractual rather than best-effort.",
    items: [
      "Live chat cover on web and mobile, up to 24/7/365",
      "Proactive chat triggers on high-intent pages",
      "Pre-sales questions, product guidance and objection handling",
      "Order status, delivery and returns queries",
      "Technical troubleshooting to tier two",
      "WhatsApp, Messenger and in-app messaging channels",
      "Lead capture and qualified handover to your sales team",
      "Chatbot triage design with clean escalation to a human",
      "Canned response library authoring and maintenance",
      "Quality assurance scoring with concurrency compliance tracking",
      "Traffic-curve forecasting and shift rostering",
      "Conversion and deflection reporting against a baseline",
    ],
    note: "Chat transcripts, canned responses and the knowledge base stay in your platform under your accounts. We add no widget of our own and take no data outside your stack.",
    figure: "pipeline",
  },

  benefits: [
    {
      title: "Answered before the visitor gives up",
      body: "Abandonment climbs sharply after about forty seconds of waiting. Staffing to the traffic curve rather than to an average is what keeps the median response under half a minute at every hour.",
      metric: { value: 24, suffix: " sec", label: "Median first response across all hours" },
      link: { label: "How rostering works", href: "#process" },
      figure: "pulse",
    },
    {
      title: "Conversion among the visitors who ask",
      body: "Someone opening chat on a checkout or pricing page has a specific objection. Resolving it in the moment is worth more than any retargeting campaign aimed at the same person a day later.",
      metric: { value: 19, suffix: "%", label: "Lift in conversion among chat-engaged visitors" },
      link: { label: "See the case studies", href: "#work" },
      figure: "dashboard",
    },
    {
      title: "Phone and email volume that quietly drops",
      body: "Chat intercepts questions before they become calls, at roughly a fifth of the cost per contact. The saving usually shows up in the phone queue rather than in the chat report.",
      metric: { value: 26, suffix: "%", label: "Median reduction in inbound call volume" },
      link: { label: "Talk about your channel mix", href: "#contact" },
      figure: "network",
    },
    {
      title: "Quality that survives the volume",
      body: "Three concurrent conversations is the point where response quality stays intact. Vendors running six or eight are buying a lower price with your customer's experience, and it is visible in the transcripts.",
      metric: { value: 3, label: "Concurrent conversations maximum, contractually" },
      link: { label: "Why concurrency matters", href: "#why-us" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Traffic analysis",
      duration: "Days 1–3",
      body: "Chat volume by hour and day, current response times, abandonment points and the pages where conversations start. The roster is built from this rather than from a standard shift pattern.",
    },
    {
      title: "Playbook design",
      duration: "Days 3–5",
      body: "Canned responses, objection handling, escalation rules and the boundary between resolving and handing to sales. Proactive trigger rules are agreed at the same time.",
    },
    {
      title: "Recruit",
      duration: "Days 2–6",
      body: "Chat specialists screened for written fluency and typing accuracy in your market's language. You interview every finalist and hold the veto.",
    },
    {
      title: "Train",
      duration: "Days 6–10",
      body: "Product certification, tone calibration and simulated chat sessions at full concurrency. The readiness gate includes a live-typing assessment, because chat quality is partly mechanical.",
    },
    {
      title: "Go live",
      duration: "Day 10",
      body: "A ramped start during your busiest hours with every transcript reviewed, widening to full coverage as quality scores hold.",
    },
    {
      title: "Tune",
      duration: "Weeks 2–6",
      body: "Roster adjusted against actual arrival patterns, proactive triggers tested against a control, and canned responses rewritten based on what customers actually reply to.",
    },
  ],

  tech: [
    { name: "Intercom", category: "Chat platform" },
    { name: "Zendesk Chat", category: "Chat platform" },
    { name: "LiveChat", category: "Chat platform" },
    { name: "Tidio", category: "Chat platform" },
    { name: "Gorgias", category: "E-commerce chat" },
    { name: "Drift", category: "Conversational sales" },
    { name: "HubSpot", category: "CRM & chat" },
    { name: "Salesforce", category: "CRM" },
    { name: "WhatsApp Business", category: "Messaging" },
    { name: "Meta Messenger", category: "Messaging" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Klaus", category: "Quality assurance" },
    { name: "Assembled", category: "Workforce management" },
    { name: "Guru", category: "Knowledge base" },
    { name: "Looker Studio", category: "Reporting" },
    { name: "Google Analytics 4", category: "Conversion tracking" },
  ],

  differentiators: [
    {
      title: "Concurrency capped at three",
      body: "Written into the contract and tracked in QA. Every quality complaint we have ever inherited from another chat vendor traced back to agents running six or more conversations at once.",
    },
    {
      title: "Rostered to your traffic curve",
      body: "Coverage is built from your hourly arrival data, not from a standard shift pattern. That is why the median response holds at 3am as well as at 3pm.",
    },
    {
      title: "Trained to resolve, not to escalate",
      body: "Agents get product certification and decision authority within defined limits. A chat that ends in a ticket is a chat that failed, and we report that rate.",
    },
    {
      title: "Conversion measured, not claimed",
      body: "Chat-engaged conversion is tracked against a non-engaged baseline in your analytics. The number is yours to verify rather than ours to assert.",
    },
    {
      title: "Bots kept in their place",
      body: "We will design a triage bot for genuine routing and simple lookups. We will not put one in front of a customer with a complaint, and we will tell you when yours is doing that.",
    },
    {
      title: "Your platform, your transcripts",
      body: "We work in your widget under your licenses. No third-party chat tool appears on your site and no transcript data leaves your stack.",
    },
  ],

  cases: [
    {
      industry: "Online travel",
      title: "Covering the hours bookings actually happen",
      challenge:
        "Forty percent of chat requests arriving between 8pm and 2am, when the in-house team was offline and the widget showed an email form.",
      solution:
        "Overnight cover from two hubs staffed against the hourly booking curve, with agents trained to complete bookings rather than route them to the morning.",
      results: [
        { value: 24, suffix: " sec", label: "Median overnight response" },
        { value: 23, suffix: "%", label: "More bookings completed in chat" },
        { value: 40, suffix: "%", label: "Of chat volume previously unanswered" },
      ],
      accent: "sky",
      figure: "pulse",
    },
    {
      industry: "Consumer electronics",
      title: "Proactive chat on the pages that mattered",
      challenge:
        "A high-value product range with heavy comparison traffic, long dwell times and a checkout abandonment rate nobody could explain.",
      solution:
        "Proactive triggers on comparison and basket pages tested against a control, with agents equipped to answer specification and compatibility questions directly.",
      results: [
        { value: 19, suffix: "%", label: "Lift in conversion among engaged visitors" },
        { value: 31, suffix: "%", label: "Lower basket abandonment on triggered pages" },
        { value: 4.9, decimals: 1, suffix: "/5", label: "Chat satisfaction score" },
      ],
      accent: "blush",
      figure: "dashboard",
    },
    {
      industry: "Insurance",
      title: "Taking a quarter of the calls out of the phone queue",
      challenge:
        "A phone-first operation with long hold times, where most calls turned out to be policy questions answerable in two minutes.",
      solution:
        "Chat introduced on policy and claims pages with clear promotion, staffed to intercept the query types the call analysis had identified as most common.",
      results: [
        { value: 26, suffix: "%", label: "Reduction in inbound call volume" },
        { value: 5, suffix: "x", label: "Cheaper per contact than voice" },
        { value: 3.1, decimals: 1, suffix: " min", label: "Average handle time in chat" },
      ],
      accent: "mint",
      figure: "network",
    },
  ],

  quotes: [
    {
      quote:
        "Forty percent of our chat traffic had never been answered by anyone. We only found that out because they analyzed the hourly curve before quoting.",
      name: "Delphine Mercier",
      role: "Head of Digital",
      company: "Solstice",
      initials: "DM",
      rating: 5,
    },
    {
      quote:
        "Our last vendor ran eight chats per agent. The transcripts were embarrassing. Three makes an enormous difference and it is in the contract.",
      name: "Ryan Kavanagh",
      role: "Customer Director",
      company: "Lumen Retail",
      initials: "RK",
      rating: 5,
    },
    {
      quote:
        "They measured chat conversion against a control group in our own analytics. Every previous supplier just sent us a number.",
      name: "Tanvi Sharma",
      role: "Ecommerce Manager",
      company: "Duonode",
      initials: "TS",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How many chats does each agent handle at once?",
      answer:
        "A maximum of three, written into the contract and tracked in quality assurance. Higher concurrency is how vendors reach a lower price, and it is visible to your customers in every transcript.",
    },
    {
      question: "How fast can chat go live?",
      answer:
        "Ten days from a signed scope. Chat ramps faster than voice because the training surface is narrower, though the roster typically takes a further four weeks to settle against real arrival patterns.",
    },
    {
      question: "Can you cover overnight and weekends?",
      answer:
        "Yes, up to 24/7/365 from six delivery hubs. Overnight is often where the largest return sits, because it is the window in-house teams almost never justify staffing.",
    },
    {
      question: "Will agents be able to sell, or only support?",
      answer:
        "Both, within limits you set. Agents are certified on the product range and given defined decision authority — discount limits, delivery promises and returns handling — agreed with you up front.",
    },
    {
      question: "Do you use chatbots?",
      answer:
        "For routing and simple lookups where they genuinely help, yes. We will not put a bot in front of a customer with a complaint, and if your current bot is doing that we will show you what it is costing.",
    },
    {
      question: "Which platform do we need?",
      answer:
        "Yours. We work in Intercom, Zendesk, LiveChat, Gorgias, Drift, Tidio and others under your licenses. Where you have no platform, we implement one in your name rather than ours.",
    },
    {
      question: "How do you measure conversion impact?",
      answer:
        "Chat-engaged conversion against a non-engaged baseline in your own analytics, with proactive triggers tested against a control group. The figure is yours to verify independently.",
    },
    {
      question: "What languages can you cover?",
      answer:
        "English, Spanish, Portuguese, French, German, Italian, Dutch, Polish and others on notice. Chat is screened for written fluency specifically, which is a different assessment from spoken language.",
    },
    {
      question: "How do you handle peak traffic?",
      answer:
        "Rosters are forecast from your historic curve with surge capacity from the same hub available on 30 days' notice. For known events — sales, launches — we staff up in advance rather than reactively.",
    },
    {
      question: "What happens to conversations we should handle?",
      answer:
        "A defined escalation model routes complaints, technical tier three and anything reputational to your team through an agreed channel within a set window, with full transcript context attached.",
    },
    {
      question: "Is chat cheaper than phone support?",
      answer:
        "Substantially — typically around a fifth of the cost per contact, because of concurrency and shorter handle times. The larger saving is usually the calls that never get made at all.",
    },
    {
      question: "What is the minimum commitment?",
      answer:
        "Three months, then month-to-month with 30 days' notice. The roster needs about six weeks against live traffic to settle, so a shorter term would end before it was properly tuned.",
    },
  ],

  related: [
    "customer-service",
    "ecommerce-bpo",
    "sales-and-marketing",
    "admin-support",
    "small-business",
    "nearshore-bpo",
  ],

  cta: {
    title: "Find out what your unanswered chat is costing.",
    body: "Send us a month of chat volume by hour. We will show you where the gaps are, what they are worth, and what covering them would cost.",
  },

  seo: {
    title: "Live Chat Outsourcing | 24/7 Chat Support & Conversion — Xevantis",
    description:
      "Dedicated live chat teams rostered to your traffic curve, capped at three concurrent conversations. 24-second median response, 19% conversion lift among engaged visitors.",
  },
};
