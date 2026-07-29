import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const nearshoreBpo: ServiceContent = {
  slug: "nearshore-bpo",
  name: "Nearshore Teams",
  accent: "sky",
  eyebrow: "Nearshore",
  summary:
    "Teams in Latin America on your own business hours — same-day overlap, neutral English, native Spanish, and a real saving against hiring locally.",
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
      body: "Three practices that chose a nearshore hub for the overlap, for Spanish, or for both.",
    },
    faq: {
      title: "Locations, cost and when offshore is better.",
      body: "Including the cases where we would recommend an offshore hub instead.",
    },
  },

  hero: {
    title: "A team that works your hours, not the other side of them.",
    highlight: "seven to eight hours of daily overlap",
    body: "Delivery hubs in Mexico, Colombia and Costa Rica sitting in or beside US time zones — seven to eight hours of daily overlap, neutral English, native Spanish, and a genuine saving against hiring the same person locally.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Nearshore capacity available in four hubs",
    chips: [
      { value: "7 hrs", label: "Median daily overlap with your office hours" },
      { value: "-46%", label: "Versus hiring the same role locally" },
      { value: "4", label: "Hubs, all within 2 hours of US time" },
    ],
    figure: "network",
  },

  overview: {
    eyebrow: "Delivery model",
    title: "A delivery model, not a service line.",
    body: "Nearshore is a choice about where your person sits, not what they do. Any of our services can be delivered from a nearshore hub — the question is whether same-day overlap is worth the premium over a further-away location, and for anything involving a live phone call it clearly is.",
    panels: [
      {
        heading: "What it is",
        body: "Dedicated people in Mexico, Colombia or Costa Rica covering your front desk, admin, bookkeeping or IT to the same standards as anywhere else we deliver.",
      },
      {
        heading: "Who it's for",
        body: "US practices and firms where the work involves talking to patients or clients live, where Spanish matters, or where you simply want to reach your person during your own working day.",
      },
      {
        heading: "The business case",
        body: "Roughly 40–55% below the cost of hiring locally, with the collaboration intact — and none of the overnight handover losses that eat the savings from a further-away hub.",
      },
      {
        heading: "Why us",
        body: "We run further-offshore hubs too, so we have no reason to push you nearshore. Where the work genuinely suits an overnight location, we will recommend that instead and it will cost you less.",
      },
    ],
    figure: "layers",
  },

  included: {
    eyebrow: "Coverage",
    title: "Any service, delivered from a nearshore hub.",
    body: "The delivery model changes; the operating model does not. Same recruitment, training, quality and security standards in every location.",
    items: [
      "Front desk and patient or client calls, live during your hours",
      "Website chat and text cover with full working-day overlap",
      "Insurance verification, prior authorizations and records requests",
      "Bookkeeping, billing and collections",
      "IT help desk and device support",
      "Lead response and appointment setting",
      "Native Spanish delivery, alongside neutral English",
      "Bilingual voice teams for practices with Spanish-speaking patients",
      "HIPAA-compliant handling with signed business associate agreements",
      "Same-day escalation to a person you can actually reach",
      "Nearshore and further-offshore blends where the work allows",
      "One contract, one report, one delivery lead across hubs",
    ],
    note: "Every hub sits within two hours of US Central time, which is what makes a live transfer to your office possible at all. That single fact decides the location question for anything involving a phone.",
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
      body: "Native Spanish with neutral English, which is exactly the combination a practice with Spanish-speaking patients spends months failing to hire locally. It is often the reason a client chooses nearshore over anywhere cheaper.",
      metric: { value: 2, label: "Languages delivered natively, English and Spanish" },
      link: { label: "Talk about your patients", href: "#contact" },
      figure: "pulse",
    },
    {
      title: "A real saving, honestly stated",
      body: "Nearshore is not the cheapest option and we will not pretend otherwise. It is typically 40–55% below hiring locally and 15–25% above an overnight hub — the question is what same-day overlap is worth for your particular work.",
      metric: { value: 46, suffix: "%", label: "Median saving versus a local hire" },
      link: { label: "When offshore is better", href: "#faq" },
      figure: "dashboard",
    },
    {
      title: "A live transfer to your own office",
      body: "When a caller needs the office, the call goes through rather than becoming a message. That is only possible when the person answering is awake during your clinic hours, which is the whole argument for nearshore.",
      metric: { value: 2, suffix: " hrs", label: "Maximum time difference from US Central" },
      link: { label: "See how it works", href: "#why-us" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Location assessment",
      duration: "Week 1",
      body: "Your office hours, whether Spanish matters, and how much of the work involves talking to someone live. We recommend a hub — sometimes a cheaper overnight one — with the reasoning written down.",
    },
    {
      title: "Cost modeling",
      duration: "Week 1",
      body: "A side-by-side comparison of a local hire, a nearshore seat and an overnight seat for your specific work, including the handover cost that overnight arrangements leave out of the headline figure.",
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
    { name: "RingCentral", category: "Phone system" },
    { name: "Dialpad", category: "Phone system" },
    { name: "Weave", category: "Practice phones" },
    { name: "Podium", category: "Chat & texting" },
    { name: "Open Dental", category: "Dental practice" },
    { name: "Athenahealth", category: "Medical records" },
    { name: "Clio", category: "Legal practice" },
    { name: "Follow Up Boss", category: "Real estate CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "Salesforce", category: "CRM" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Xero", category: "Accounting" },
    { name: "Microsoft 365", category: "Email & files" },
    { name: "Google Workspace", category: "Email & files" },
    { name: "Slack", category: "Collaboration" },
    { name: "Microsoft Teams", category: "Collaboration" },
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
      title: "HIPAA handled properly, wherever they sit",
      body: "Signed business associate agreements, least-privilege access, managed devices and training, identical in every hub. Location changes the time zone, not the controls.",
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
      industry: "Medical practice Â· Bronx, NY",
      title: "BogotÃ¡ over Manila, because patients call at 11am",
      challenge:
        "A five-provider practice where every insurance question needed a live transfer to the office. An earlier overnight arrangement had produced a next-day cycle on anything the remote team could not answer alone.",
      solution:
        "A BogotÃ¡ seat with seven hours of daily overlap, able to transfer a call to the office in real time and join the practice's Monday huddle rather than read the notes afterwards.",
      results: [
        { value: 7, suffix: " hrs", label: "Daily overlap with the practice" },
        { value: 63, suffix: "%", label: "Faster resolution on transferred calls" },
        { value: 41, suffix: "%", label: "Saving versus a local hire" },
      ],
      accent: "sky",
      figure: "network",
    },
    {
      industry: "Dental practice Â· Jackson Heights, Queens, NY",
      title: "A Spanish-speaking front desk the practice could not hire",
      challenge:
        "A practice where roughly 60% of patients preferred Spanish, competing for bilingual front-desk staff against every other business in the neighborhood and losing.",
      solution:
        "A Mexico City seat with native Spanish and neutral English, trained on the practice's insurance position and scheduling software, covering the phone in whichever language the caller opened with.",
      results: [
        { value: 60, suffix: "%", label: "Of calls handled in the patient's own language" },
        { value: 0, suffix: " wks", label: "Spent recruiting locally for the role" },
        { value: 38, suffix: "%", label: "Saving versus a bilingual local hire" },
      ],
      accent: "mint",
      figure: "layers",
    },
    {
      industry: "Veterinary group Â· Long Island, NY",
      title: "A blend that beat either option alone",
      challenge:
        "High overnight email and web-form volume plus a smaller daytime phone need, where a nearshore team alone cost more than the overnight work justified and an overnight team alone could not take the calls.",
      solution:
        "Phone cover from Costa Rica during clinic hours, overnight email handled from a further hub, run as one arrangement with one delivery lead and one report.",
      results: [
        { value: 24, suffix: "/7", label: "Coverage across two hubs" },
        { value: 29, suffix: "%", label: "Cheaper than nearshore alone" },
        { value: 4.8, decimals: 1, suffix: "/5", label: "Client rating across both" },
      ],
      accent: "sun",
      figure: "pipeline",
    },
  ],

  quotes: [
    {
      quote:
        "They quoted us a cheaper overnight option and then told us why it would not work for phone calls. We chose nearshore knowing exactly what we were paying for.",
      name: "Practice Administrator",
      role: "Five-provider medical practice",
      company: "Bronx, NY",
      initials: "PA",
      rating: 5,
    },
    {
      quote:
        "We spent eight months trying to hire a bilingual front desk person in this neighborhood. This solved it in three weeks and the saving was almost incidental.",
      name: "Practice Owner",
      role: "Dental practice",
      company: "Jackson Heights, Queens, NY",
      initials: "PO",
      rating: 5,
    },
    {
      quote:
        "She is on our Monday morning call. That single fact is the difference between a vendor and someone who works here.",
      name: "Hospital Manager",
      role: "Veterinary group, three sites",
      company: "Long Island, NY",
      initials: "HM",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Where are your nearshore hubs?",
      answer:
        "Mexico City, Bogotá, San José and Guadalajara, all within two hours of US Central time. We also operate further-offshore hubs in Manila and Bengaluru, which we recommend where the work genuinely suits them and which cost you less.",
    },
    {
      question: "How much overlap will we actually get?",
      answer:
        "Six to eight hours of shared working day, typically seven. Every hub sits inside or within two hours of US Central, so a 2pm call reaches a person who has been working since morning rather than someone starting their night shift.",
    },
    {
      question: "How much does nearshore cost compared to offshore?",
      answer:
        "Typically 15–25% more than an overnight hub and 40–55% less than hiring the same person locally. We model all three so the trade-off is explicit rather than assumed.",
    },
    {
      question: "When would you recommend offshore instead?",
      answer:
        "High-volume asynchronous work with low escalation needs — overnight email queues, back-office processing, data operations. Where the overlap adds little, paying the nearshore premium is money spent on nothing.",
    },
    {
      question: "What languages can nearshore hubs deliver?",
      answer:
        "Native Spanish and neutral English as standard, plus Portuguese where you need it. Other languages are usually better served from a different hub and we will say so rather than stretch.",
    },
    {
      question: "Is this HIPAA compliant?",
      answer:
        "Yes. We sign a business associate agreement before anyone touches patient information, and the access controls, device management and training are identical to any other hub. Nearshore does not change the compliance position, only the time zone.",
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
        "A monthly rate per seat by hub, service and language, shown alongside what a local hire and an overnight seat would cost. The premium you are paying for the overlap is visible rather than buried.",
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
    title: "Get all three options priced.",
    body: "Tell us what the work is, whether Spanish matters and how much of it is live. We will price a local hire, a nearshore seat and an overnight seat side by side — including the cases where we recommend the cheaper option.",
  },

  seo: {
    title: "Nearshore Teams in Latin America for US Small Businesses — Xevantis",
    description:
      "Nearshore teams in Mexico, Colombia and Costa Rica for US practices and firms: seven hours of daily overlap, native Spanish, neutral English, HIPAA-compliant handling and 46% savings against hiring locally.",
  },
};
