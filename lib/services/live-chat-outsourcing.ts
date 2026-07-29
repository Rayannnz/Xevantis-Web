import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const liveChatOutsourcing: ServiceContent = {
  slug: "live-chat-outsourcing",
  name: "Website Chat & Text",
  accent: "sky",
  eyebrow: "Chat & Text",
  summary:
    "Website chat and text messaging answered in under thirty seconds, including the evenings and weekends when people actually look for a dentist or a lawyer.",
  trustLabel: "Answering website chat for",

  sections: {
    benefits: {
      title: "What always-on chat is actually worth.",
      body: "Chat is the only channel that answers a question and books the appointment. These four outcomes cover both halves, and both are baselined before we start.",
    },
    process: {
      title: "Live in ten days, tuned over four weeks.",
      body: "Six phases. Chat ramps faster than phone because the training surface is narrower — but getting the coverage hours right takes a month of real traffic.",
    },
    tech: {
      title: "Chat and texting platforms.",
      body: "We work in your widget under your own account. Where you have no platform yet, we set one up in your name.",
    },
    why: {
      title: "Why this beats a cheap chat vendor or a bot.",
      body: "Chat quality collapses in two predictable ways: too many conversations at once, and people who cannot answer anything without saying they will pass it on.",
    },
    cases: {
      title: "Chat we run.",
      body: "Three deployments measured on response time, appointments booked, and what happened to the phone queue afterwards.",
    },
    faq: {
      title: "Coverage, quality and what they are allowed to say.",
      body: "The operational questions that decide whether website chat helps or embarrasses you.",
    },
  },

  hero: {
    title: "Chat answered in under thirty seconds, at 9pm on a Sunday.",
    highlight: "capped at three conversations",
    body: "Trained specialists covering your website chat and text messages, scheduled against when your site is actually busy and capped at three conversations each so quality holds. Trained to answer and book, not to apologize and take a message.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Covering practices and firms in all 50 states",
    chips: [
      { value: "24 sec", label: "Median first response, all hours" },
      { value: "+19%", label: "More inquiries that become appointments" },
      { value: "3", label: "Concurrent chats maximum, per person" },
    ],
    figure: "pulse",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The channel that answers the question and books the appointment.",
    body: "Someone opening chat on your site at 9pm has a specific question — do you take my insurance, do you handle this kind of case, how much is a consultation. Answer within thirty seconds and a good share of them book; answer tomorrow morning and they have already found someone else.",
    panels: [
      {
        heading: "What it is",
        body: "Named specialists covering your website chat and text messages to agreed response times, working from your own scripts and your own schedule.",
      },
      {
        heading: "Who it's for",
        body: "Medical and dental practices, law firms, real estate agencies, pharmacies and any local business whose website gets visitors after the office closes.",
      },
      {
        heading: "The business case",
        body: "More inquiries turning into booked appointments, fewer calls arriving at the front desk, and coverage at hours no staffing schedule would justify.",
      },
      {
        heading: "Why us",
        body: "We cap it at three conversations at once. Most chat vendors run six or eight to hit a price point, and every quality problem in this channel traces back to that number.",
      },
    ],
    figure: "network",
  },

  included: {
    eyebrow: "Scope",
    title: "Cover, conversion and the quality controls between them.",
    body: "One monthly rate per seat. Concurrency caps, QA and reporting are contractual rather than best-effort.",
    items: [
      "Website chat cover on desktop and mobile, up to 24/7",
      "Text message conversations from your own business number",
      "Appointment booking straight into your schedule",
      "Insurance, fee and \"do you handle this?\" questions to your script",
      "New patient and new client intake through chat",
      "Proactive chat on your service and location pages",
      "Google Business Profile messages and Facebook messages",
      "Chatbot triage design with a clean handover to a person",
      "Written response library, authored and kept current",
      "Quality scoring with concurrency compliance tracked",
      "Traffic forecasting and shift scheduling from your own data",
      "Monthly reporting on chats, bookings and calls avoided",
    ],
    note: "Transcripts, saved responses and your knowledge base stay in your platform under your own account. We add no widget of our own and take nothing outside your systems.",
    figure: "pipeline",
  },

  benefits: [
    {
      title: "Answered before the visitor gives up",
      body: "People leave a chat after about forty seconds of waiting. Staffing against your actual hourly traffic rather than an average is what keeps the median under half a minute at 9pm as well as at 2pm.",
      metric: { value: 24, suffix: " sec", label: "Median first response across all hours" },
      link: { label: "How scheduling works", href: "#process" },
      figure: "dashboard",
    },
    {
      title: "Inquiries that become appointments",
      body: "Someone asking whether you take their insurance has one question standing between them and booking. Answering it in the moment is worth more than any campaign aimed at the same person a day later.",
      metric: { value: 19, suffix: "%", label: "More chat inquiries that become appointments" },
      link: { label: "See the case studies", href: "#work" },
      figure: "pulse",
    },
    {
      title: "Calls that never reach the front desk",
      body: "Chat intercepts the routine questions before they become phone calls, at roughly a fifth of the cost. The benefit usually shows up in your phone queue rather than in the chat report.",
      metric: { value: 26, suffix: "%", label: "Median reduction in inbound call volume" },
      link: { label: "Talk about your mix", href: "#contact" },
      figure: "network",
    },
    {
      title: "Quality that survives the volume",
      body: "Three conversations at once is the point where quality stays intact. Vendors running six or eight are buying a lower price with your patients' experience, and it is visible in the transcripts.",
      metric: { value: 3, label: "Concurrent conversations maximum, contractually" },
      link: { label: "Why concurrency matters", href: "#why-us" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Traffic analysis",
      duration: "Days 1–3",
      body: "Chat volume by hour and day, current response times, where people give up and which pages conversations start on. The schedule is built from this rather than from a standard shift pattern.",
    },
    {
      title: "Write the answers",
      duration: "Days 3–5",
      body: "Saved responses, your insurance and fee positions, escalation rules, and the boundary between answering and booking. Proactive trigger rules are agreed at the same time.",
    },
    {
      title: "Find your people",
      duration: "Days 2–6",
      body: "Specialists screened for written fluency and typing accuracy — a different assessment from speaking. You interview every finalist and hold the veto.",
    },
    {
      title: "Train",
      duration: "Days 6–10",
      body: "Your practice, your tone, your scheduling software, and simulated sessions at full concurrency. The sign-off includes a live typing assessment, because chat quality is partly mechanical.",
    },
    {
      title: "Go live",
      duration: "Day 10",
      body: "A ramped start during your busiest hours with every transcript reviewed, widening to full coverage as quality holds.",
    },
    {
      title: "Tune",
      duration: "Weeks 2–6",
      body: "The schedule adjusted against real arrival patterns, proactive triggers tested against a control, and saved responses rewritten based on what people actually reply to.",
    },
  ],

  tech: [
    { name: "Podium", category: "Chat & texting" },
    { name: "Weave", category: "Practice chat & texting" },
    { name: "Birdeye", category: "Chat & reviews" },
    { name: "LiveChat", category: "Chat platform" },
    { name: "Tidio", category: "Chat platform" },
    { name: "Intercom", category: "Chat platform" },
    { name: "HubSpot", category: "CRM & chat" },
    { name: "Google Business Profile", category: "Messaging" },
    { name: "Meta Messenger", category: "Messaging" },
    { name: "Open Dental", category: "Dental scheduling" },
    { name: "Athenahealth", category: "Medical scheduling" },
    { name: "Clio", category: "Legal intake" },
    { name: "Follow Up Boss", category: "Real estate CRM" },
    { name: "Calendly", category: "Booking" },
    { name: "WordPress", category: "Website" },
    { name: "Google Analytics 4", category: "Conversion tracking" },
  ],

  differentiators: [
    {
      title: "Concurrency capped at three",
      body: "Written into the contract and tracked in QA. Every quality complaint we have ever inherited from another chat vendor traced back to agents running six or more conversations at once.",
    },
    {
      title: "Scheduled to your actual traffic",
      body: "Coverage is built from your own hourly data, not a standard shift pattern. That is why the median response holds on a Sunday evening as well as on a Tuesday afternoon.",
    },
    {
      title: "Trained to answer, not to pass it on",
      body: "They learn your insurance position, your fees and your matter or treatment types, with defined authority to book. A chat that ends in \"someone will call you\" is a chat that failed, and we report that rate.",
    },
    {
      title: "Bookings measured, not claimed",
      body: "Chats that end in a booked appointment are tracked in your own scheduling software. The number is yours to verify rather than ours to assert.",
    },
    {
      title: "Bots kept in their place",
      body: "We will build a triage bot for genuine routing and simple lookups. We will not put one in front of a patient with a problem, and if yours is doing that we will show you what it costs.",
    },
    {
      title: "Your platform, your transcripts",
      body: "We work in your widget under your own account. No third-party chat tool appears on your site and no transcript leaves your systems.",
    },
  ],

  cases: [
    {
      industry: "Dental practice · Forest Hills, Queens, NY",
      title: "Covering the hours people actually look for a dentist",
      challenge:
        "Forty percent of chat requests arriving between 6pm and midnight, when the practice was closed and the widget showed a contact form. Nobody had ever read most of them.",
      solution:
        "Evening and weekend cover scheduled against the practice's own hourly traffic, with specialists able to answer insurance questions and book straight into the schedule rather than promise a callback.",
      results: [
        { value: 24, suffix: " sec", label: "Median evening response" },
        { value: 23, suffix: "%", label: "More appointments booked in chat" },
        { value: 40, suffix: "%", label: "Of chat volume previously unanswered" },
      ],
      accent: "sky",
      figure: "pulse",
    },
    {
      industry: "Family law firm · Manhattan, NY",
      title: "Proactive chat on the pages that mattered",
      challenge:
        "Long dwell times on the firm's practice-area pages and almost no inquiries from them. People were reading carefully and leaving without contacting anyone.",
      solution:
        "Proactive chat on the practice-area and fee pages tested against a control, with specialists able to explain the consultation process and the fee structure directly rather than deflecting to a form.",
      results: [
        { value: 19, suffix: "%", label: "More inquiries that became consultations" },
        { value: 31, suffix: "%", label: "Fewer visitors leaving those pages without contact" },
        { value: 4.9, decimals: 1, suffix: "/5", label: "Chat satisfaction score" },
      ],
      accent: "blush",
      figure: "dashboard",
    },
    {
      industry: "Independent pharmacy · Brooklyn, NY",
      title: "Taking a quarter of the calls out of the queue",
      challenge:
        "A phone-first counter with long hold times, where most calls turned out to be refill status and hours questions answerable in two lines of text.",
      solution:
        "Chat and text introduced on the site and the Google listing, staffed to intercept the exact question types the call analysis had identified as most common.",
      results: [
        { value: 26, suffix: "%", label: "Reduction in inbound call volume" },
        { value: 5, suffix: "x", label: "Cheaper per contact than the phone" },
        { value: 3.1, decimals: 1, suffix: " min", label: "Average handling time in chat" },
      ],
      accent: "mint",
      figure: "network",
    },
  ],

  quotes: [
    {
      quote:
        "Forty percent of our chat had never been read by anyone. We only found that out because they looked at our hourly traffic before quoting us.",
      name: "Practice Manager",
      role: "Dental practice",
      company: "Forest Hills, Queens, NY",
      initials: "PM",
      rating: 5,
    },
    {
      quote:
        "Our last vendor ran eight chats per person. The transcripts were embarrassing. Three makes an enormous difference and it is in the contract.",
      name: "Partner",
      role: "Family law firm",
      company: "Manhattan, NY",
      initials: "PT",
      rating: 5,
    },
    {
      quote:
        "They counted the chats that ended in a booked appointment, in our own software. Every previous supplier just sent us a number.",
      name: "Pharmacist-in-Charge",
      role: "Independent pharmacy",
      company: "Brooklyn, NY",
      initials: "PC",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How many chats does each person handle at once?",
      answer:
        "A maximum of three, written into the contract and tracked in quality review. Higher concurrency is how vendors reach a lower price, and your patients and clients can see it in every transcript.",
    },
    {
      question: "How fast can chat go live?",
      answer:
        "Ten days from a signed scope. Chat ramps faster than phone cover because the training surface is narrower, though the schedule usually takes a further four weeks to settle against real traffic.",
    },
    {
      question: "Can you cover evenings and weekends?",
      answer:
        "Yes, up to 24/7. Evenings and Sundays are often where the largest return sits, because that is when people search for a dentist or a lawyer and it is the window no office schedule would justify staffing.",
    },
    {
      question: "Can they book appointments, or only answer questions?",
      answer:
        "Both, within limits you set. They work in your scheduling software with defined authority — which appointment types, which providers, how far ahead — agreed with you before they start.",
    },
    {
      question: "Are they allowed to give clinical or legal advice?",
      answer:
        "No, and the line is written into the training. They explain what you do, what you charge, which insurance you take and when you are available. Anything clinical or case-specific goes to you, and they say so plainly rather than guessing.",
    },
    {
      question: "Do you use chatbots?",
      answer:
        "For routing and simple lookups where they genuinely help, yes. We will not put a bot in front of someone with a problem, and if your current one is doing that we will show you what it is costing.",
    },
    {
      question: "Which platform do we need?",
      answer:
        "Yours. We work in Podium, Weave, Birdeye, LiveChat, Tidio, Intercom and others under your own account. Where you have no platform, we set one up in your name rather than ours.",
    },
    {
      question: "How do you measure the impact?",
      answer:
        "Chats that end in a booked appointment, counted in your own scheduling software, plus what happens to your phone volume. Proactive triggers get tested against a control so the lift is verifiable rather than asserted.",
    },
    {
      question: "Do you cover Spanish?",
      answer:
        "Yes, bilingual English and Spanish as standard, with other languages on notice. Chat staff are screened for written fluency specifically, which is a different assessment from speaking a language.",
    },
    {
      question: "What about HIPAA?",
      answer:
        "We sign a business associate agreement, and chat is configured so that patient information is handled inside your own platform under least-privilege access. Anything that should not be discussed over web chat is escalated to a call instead.",
    },
    {
      question: "Is chat cheaper than answering the phone?",
      answer:
        "Substantially — typically around a fifth of the cost per contact, because of concurrency and shorter handling times. The larger saving is usually the calls that never get made at all.",
    },
    {
      question: "What is the minimum commitment?",
      answer:
        "Three months, then month-to-month with 30 days' notice. The schedule needs about six weeks against live traffic to settle, so a shorter term would end before it was properly tuned.",
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
    body: "Send us a month of website chat volume by hour. We will show you where the gaps are, what they are worth, and what covering them would cost.",
  },

  seo: {
    title: "Website Chat & Text Answering for Local Businesses — Xevantis",
    description:
      "Live website chat and text messaging for dental and medical practices, law firms, pharmacies and local businesses across the US. Answered in 24 seconds including evenings and weekends, capped at three conversations per person.",
  },
};
