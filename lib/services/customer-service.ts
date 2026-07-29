import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const customerService: ServiceContent = {
  slug: "customer-service",
  name: "Front Desk & Customer Calls",
  accent: "blush",
  eyebrow: "Front Desk & Calls",
  summary:
    "New-patient calls, appointment scheduling, reminders and client intake — answered live by the same named person every day, priced per seat.",
  trustLabel: "Answering the phone for",

  sections: {
    benefits: {
      title: "What answering the phone properly is worth.",
      body: "Four numbers we baseline before we start and report weekly after. Cost per call is only one of them, and it is rarely the one that matters.",
    },
    process: {
      title: "Fourteen days from first call to answering yours.",
      body: "Six phases. The training and its sign-off take the longest, because nobody who has not passed a live practice call should be speaking to your patients.",
    },
    tech: {
      title: "Your scheduling software, your phone number, your records.",
      body: "We work inside what you already run. No platform to license from us and nothing to migrate.",
    },
    why: {
      title: "Why patients and clients cannot tell.",
      body: "Answering services have a bad reputation for three specific reasons: scripts, rotating strangers, and being measured on call length. We built the model against all three.",
    },
    cases: {
      title: "Front desks we cover.",
      body: "Three offices judged on calls answered live, appointments booked, and the work that came off the front desk entirely.",
    },
    faq: {
      title: "Quality, coverage and control.",
      body: "What separates a real front desk extension from an answering service.",
    },
  },

  hero: {
    title: "Every call answered by someone who knows your practice.",
    highlight: "the same person every day",
    body: "New-patient calls, scheduling, reminders, insurance questions and client intake — handled by the same person every day, working in your software under your practice's name. Priced per seat, so nobody here benefits from your phone ringing more.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Onboarding now — 11 seats left this quarter",
    chips: [
      { value: "96%", label: "Of calls answered live, not by voicemail" },
      { value: "14 days", label: "From signed scope to answering your phone" },
      { value: "1", label: "Named person, not a rotating pool" },
    ],
    figure: "pulse",
  },

  overview: {
    eyebrow: "Service overview",
    title: "Answering the call, then booking the appointment.",
    body: "An answering service takes a message. That is not what a missed new-patient call needs — it needs someone who can open your schedule and put them in it while they are still on the phone. That is the whole difference, and it is why we are priced per seat rather than per message.",
    panels: [
      {
        heading: "What it is",
        body: "A named person — or two, or half of one — working your phones, your inbox and your scheduling software under your practice's name, to hours you set.",
      },
      {
        heading: "Who it's for",
        body: "Medical and dental practices, pharmacies, law firms, engineering and accounting offices, real estate agencies and any local business whose front desk is doing three jobs at once.",
      },
      {
        heading: "The business case",
        body: "Fewer new-patient calls lost to voicemail, a front desk that can look at the person in front of them, and a fuller schedule without a second full-time hire.",
      },
      {
        heading: "Why us",
        body: "You interview whoever we put on it, they stay on your account, and the monthly report tells you which calls you are still missing and why.",
      },
    ],
    figure: "network",
  },

  included: {
    eyebrow: "Scope",
    title: "The person, the scripts and the loop that keeps improving them.",
    body: "Call quality review, schedule coverage and the monthly missed-call report are inside the service, not priced as extras.",
    items: [
      "Inbound calls answered live under your practice's name",
      "New-patient and new-client intake, with your screening questions",
      "Appointment scheduling, rescheduling and cancellation backfill",
      "Confirmation and reminder calls, texts and emails",
      "Insurance and eligibility questions, to your escalation rules",
      "Overflow cover when your desk is already on a call",
      "After-hours, lunch-hour and Saturday coverage",
      "Email and web form follow-up within your response window",
      "Google and review-site responses, to your approved wording",
      "Recall and reactivation calls to lapsed patients or clients",
      "Call recording review against a rubric agreed with you",
      "Bilingual coverage — English and Spanish as standard",
    ],
    note: "Your call scripts, intake questions and process documentation are yours and stay with you. We work in your scheduling software under your own accounts, on your own phone number, throughout.",
    figure: "pipeline",
  },

  benefits: [
    {
      title: "New-patient calls that stop going to voicemail",
      body: "Around a quarter of first-time calls at the practices we have measured never reached a person, and six in ten of those callers left no message. Someone answering is the entire fix.",
      metric: { value: 96, suffix: "%", label: "Of calls answered live rather than by voicemail" },
      link: { label: "How the coverage works", href: "#whats-included" },
      figure: "pulse",
    },
    {
      title: "A schedule that fills itself back in",
      body: "Cancellations get backfilled from a waitlist the same day rather than becoming an empty chair. Recall and reactivation calls happen on a cadence instead of when someone finds a spare hour.",
      metric: { value: 22, suffix: "%", label: "Median fall in unfilled appointment slots" },
      link: { label: "See what's covered", href: "#whats-included" },
      figure: "dashboard",
    },
    {
      title: "Cover for the hours that actually hurt",
      body: "Late morning, lunch, after close and Saturdays — scheduled against when your phone genuinely rings rather than a standard shift. Nobody has to choose between the caller and the patient at the desk.",
      metric: { value: 42, suffix: " sec", label: "Median time to answer, across covered hours" },
      link: { label: "Talk about coverage", href: "#contact" },
      figure: "network",
    },
    {
      title: "Cheaper than the hire, without rushing anyone",
      body: "A seat costs a fraction of a full-time front desk salary with benefits, and you can take a half seat if that is genuinely what you need. Call length informs staffing here; it is never an individual's target.",
      metric: { value: 34, suffix: "%", label: "Median saving against a local front-desk hire" },
      link: { label: "How quality is measured", href: "#why-us" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "A morning in your office",
      duration: "Days 1–3",
      body: "We sit with your front desk: which calls matter, how you take a new patient or client, what you say about insurance and fees, and the twenty situations your desk handles by instinct.",
    },
    {
      title: "Write the scripts you never had",
      duration: "Days 3–6",
      body: "Intake questions, scheduling rules, escalation paths and the response templates — written before anyone is hired, and yours to keep whether you stay with us or not.",
    },
    {
      title: "Find your person",
      duration: "Days 4–8",
      body: "Two candidates within 96 hours, screened for your industry specifically — dental insurance, legal intake, prior authorizations. You interview both and hold the veto.",
    },
    {
      title: "Training",
      duration: "Days 8–14",
      body: "Your scheduling software, your scripts, live practice calls and a sign-off you approve. Nobody speaks to a real patient or client before passing it, which is not negotiable.",
    },
    {
      title: "Go live",
      duration: "Day 14",
      body: "A ramped start on overflow only, with your delivery lead listening and every call reviewed. Full coverage follows once quality holds for a week.",
    },
    {
      title: "Run & improve",
      duration: "Ongoing",
      body: "A standing weekly call, a monthly report on which calls you are still missing and why, and a short list of changes worth making to the scripts.",
    },
  ],

  tech: [
    { name: "Dentrix", category: "Dental scheduling" },
    { name: "Open Dental", category: "Dental scheduling" },
    { name: "Athenahealth", category: "Medical scheduling" },
    { name: "eClinicalWorks", category: "Medical records" },
    { name: "Clio", category: "Legal intake" },
    { name: "MyCase", category: "Legal intake" },
    { name: "Follow Up Boss", category: "Real estate CRM" },
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "RingCentral", category: "Phone system" },
    { name: "Dialpad", category: "Phone system" },
    { name: "Weave", category: "Practice phones" },
    { name: "Google Workspace", category: "Email & calendar" },
    { name: "Microsoft 365", category: "Email & calendar" },
    { name: "Calendly", category: "Booking" },
    { name: "Podium", category: "Texting & reviews" },
  ],

  differentiators: [
    {
      title: "A named person, not a pool",
      body: "The same voice every day, on your account only. Patients and clients start recognizing them within a fortnight, which is the entire difference from an answering service.",
    },
    {
      title: "No scripts read word for word",
      body: "They learn your practice and your policies, then have a conversation. Call length informs how we staff; it never appears on an individual's scorecard.",
    },
    {
      title: "Priced per seat, not per call",
      body: "Charging per call gives a supplier a quiet interest in your phone ringing more. Ours does the opposite, and the monthly report on missed calls proves we act on it.",
    },
    {
      title: "Someone listens to the calls",
      body: "Recordings sampled against a rubric agreed with you, with coaching logged. Call quality that is nobody's specific job drifts within two quarters, in every office we have inherited.",
    },
    {
      title: "You interview them first",
      body: "Every finalist meets you before starting and you can say no. If they ever leave your account you hear it that day, not at the next review.",
    },
    {
      title: "Start at one seat, or half of one",
      body: "No minimum team size and no setup fee. Plenty of our offices start with two hours of lunch cover and grow from there — or decide that is all they needed.",
    },
  ],

  cases: [
    {
      industry: "Dental practice · Astoria, Queens, NY",
      title: "Four chairs, two staff and a quarter of calls lost",
      challenge:
        "A four-provider family practice where the same two people checked in patients, seated them and answered the phone. Ninety days of call logs showed 27% of new-patient calls never reached anyone, most of them between 10am and noon.",
      solution:
        "One named seat covering the two worst hours a day plus lunch, with direct access to the schedule so callers were booked on the call rather than promised a callback.",
      results: [
        { value: 27, suffix: "%", label: "Missed new-patient calls, down to 3%" },
        { value: 19, label: "Extra new patients booked per month" },
        { value: 0.4, decimals: 1, suffix: " FTE", label: "Cost of the fix" },
      ],
      accent: "blush",
      figure: "pulse",
    },
    {
      industry: "Personal injury firm · Brooklyn, NY",
      title: "Intake calls arriving while everyone was in court",
      challenge:
        "A six-attorney firm losing new-client calls every morning its team was at Kings County Supreme. Callers who reach voicemail call the next firm on the list, and the firm had no way of knowing how many.",
      solution:
        "A trained intake specialist covering court hours, running the firm's conflicts check live and booking consultations straight into the calendar, with matter-type screening agreed with the partners.",
      results: [
        { value: 100, suffix: "%", label: "Of court-hours calls answered live" },
        { value: 2, suffix: "x", label: "Consultations booked vs callback attempts" },
        { value: 0, label: "Conflicts missed at intake" },
      ],
      accent: "sky",
      figure: "dashboard",
    },
    {
      industry: "Real estate agency · Westchester County, NY",
      title: "Portal inquiries answered in minutes, not hours",
      challenge:
        "A twelve-agent brokerage where portal leads were routed to whichever agent was on rotation — all of whom were out showing property. Median response time was over four hours and about a fifth got no reply at all.",
      solution:
        "A dedicated response seat covering evenings and weekends, replying by text within five minutes with two specific viewing times and the fee structure stated plainly.",
      results: [
        { value: 4, suffix: " min", label: "Median response, down from 4h 20m" },
        { value: 21, suffix: "%", label: "Of leads previously unanswered, now 0%" },
        { value: 38, suffix: "%", label: "More viewings booked per 100 inquiries" },
      ],
      accent: "mint",
      figure: "network",
    },
  ],

  quotes: [
    {
      quote:
        "My front desk can look at the patient in front of them now. That is the whole review, really.",
      name: "Practice Manager",
      role: "Four-provider dental practice",
      company: "Astoria, Queens, NY",
      initials: "PM",
      rating: 5,
    },
    {
      quote:
        "The monthly report tells us which calls we are still missing and why. Our old answering service sent us a count of messages taken.",
      name: "Managing Partner",
      role: "Six-attorney personal injury firm",
      company: "Brooklyn, NY",
      initials: "MP",
      rating: 5,
    },
    {
      quote:
        "She knows our patients by name and knows which insurance questions to escalate. Nobody has ever asked whether she sits in the office.",
      name: "Office Administrator",
      role: "Multi-specialty medical practice",
      company: "Westchester County, NY",
      initials: "OA",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How fast can someone start answering our phone?",
      answer:
        "Fourteen days from a signed scope. Two candidates within 96 hours, six days of training on your software and scripts, and a sign-off you approve before anyone takes a live call.",
    },
    {
      question: "Will patients or clients know it isn't someone in the office?",
      answer:
        "Only if you tell them. They answer under your practice's name, on your own phone number, in your scheduling software, with your greeting. It is the same person every day, which is why callers stop noticing within a fortnight.",
    },
    {
      question: "Do they read from a script?",
      answer:
        "No. They learn your practice, your policies and your fee or insurance position, then hold a conversation. Written scripts exist for intake accuracy and for anything with legal or clinical weight, but the words are not dictated line by line.",
    },
    {
      question: "How do we know the calls are being handled well?",
      answer:
        "Calls are recorded and sampled against a rubric we agree with you, reviewed weekly with coaching logged. You get calls answered, time to answer, appointments booked and missed calls on a monthly report — and you can listen to any call yourself.",
    },
    {
      question: "What hours can you cover?",
      answer:
        "Whatever your office needs, including lunch cover, evenings, Saturdays and the late-morning rush. Coverage is scheduled against when your phone actually rings, which we work out from your own call log.",
    },
    {
      question: "Do you offer Spanish?",
      answer:
        "Yes, bilingual English and Spanish as standard. Other languages on notice — always native speakers, never machine translation.",
    },
    {
      question: "Do we have to change our scheduling software or phone system?",
      answer:
        "No. We work inside your Dentrix, Open Dental, Athenahealth, Clio or CRM under your own logins, on your existing phone number. Nothing migrates and no patient or client data leaves your systems.",
    },
    {
      question: "What happens when a call needs one of us?",
      answer:
        "Escalation rules agreed in week one: which calls transfer immediately, which get a same-day message, and who they reach. Anything clinical, legal or upset goes to a named person by an agreed route within a set time.",
    },
    {
      question: "Are you HIPAA compliant?",
      answer:
        "Yes, and we sign a business associate agreement before anyone touches a schedule. Access is restricted and logged, devices are managed, and calls involving patient information are handled under the same controls as your own staff.",
    },
    {
      question: "Can you add cover for a busy stretch?",
      answer:
        "Yes, with 30 days' notice — flu season, open enrollment, tax season, or somebody's leave. Extra cover comes from people already trained on your account, not from temps meeting your practice for the first time.",
    },
    {
      question: "What if we only need a few hours a day?",
      answer:
        "That is a normal way to start. Plenty of our offices begin with lunch and late-morning cover only. There is no minimum team size and no setup fee.",
    },
    {
      question: "How is it priced?",
      answer:
        "A monthly rate per seat, by hours and coverage — never per call or per message. Charging per call would give us a reason to want your phone ringing more, which is the opposite of what you are buying.",
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
    title: "Get a coverage plan and a price this week.",
    body: "Tell us your hours, your software and what your front desk is drowning in. We will come back within one business day with who would cover it, when they would start and a monthly price.",
  },

  seo: {
    title: "Front Desk & Call Answering for Medical, Dental & Legal Offices — Xevantis",
    description:
      "Live call answering, appointment scheduling and client intake for clinics, dental practices, pharmacies, law firms and local offices across the US. A named person in your own software, working in 14 days. Priced per seat, never per call.",
  },
};
