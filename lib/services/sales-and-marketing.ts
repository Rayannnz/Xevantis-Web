import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const salesAndMarketing: ServiceContent = {
  slug: "sales-and-marketing",
  name: "Sales & Marketing",
  accent: "sun",
  eyebrow: "Sales & Marketing",
  summary:
    "Outsourced SDRs, lead qualification, CRM hygiene and campaign operations — measured in qualified pipeline, not activity.",
  trustLabel: "Building pipeline for",

  sections: {
    benefits: {
      title: "What an outsourced sales engine should produce.",
      body: "Four numbers we agree before starting. Meetings booked is the vanity metric of this industry, so it is deliberately not the headline.",
    },
    process: {
      title: "From ICP definition to booked meetings.",
      body: "Six phases over about five weeks. Nobody dials until the target list and the qualification criteria are agreed in writing.",
    },
    tech: {
      title: "Sales engagement and operations tooling.",
      body: "We work in your CRM and your sequencer. Data enrichment and dialler costs are transparent rather than marked up.",
    },
    why: {
      title: "Why these teams are not a lead-gen agency.",
      body: "Most outsourced SDR contracts are priced per meeting, which produces exactly the meetings you would expect.",
    },
    cases: {
      title: "Pipeline we have built.",
      body: "Three programmes measured on accepted opportunities and closed revenue, not on activity counts.",
    },
    faq: {
      title: "Quality, ownership and how we are measured.",
      body: "The questions that separate a sales partner from a dialling service.",
    },
  },

  hero: {
    title: "Pipeline built by people your sales team respects.",
    highlight: "sales-accepted opportunities",
    body: "Outsourced SDRs, inbound qualification and campaign operations run inside your CRM, measured on sales-accepted opportunities rather than dials or meetings booked. Your reps stop prospecting and start closing.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Two sales pods opening this quarter",
    chips: [
      { value: "78%", label: "Meetings accepted by sales as qualified" },
      { value: "5 wks", label: "From kick-off to first booked meeting" },
      { value: "-44%", label: "Cost per qualified opportunity" },
    ],
    figure: "pipeline",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The part of selling your closers should not be doing.",
    body: "A good account executive spends about a third of their week prospecting, and does it worse than a specialist would. Separating the two roles is standard practice — the difficulty is that hiring, training and managing SDRs is a full operation in itself.",
    panels: [
      {
        heading: "What it is",
        body: "A sales development pod — SDRs, a team lead and a sales operations analyst — running outbound, inbound qualification and CRM hygiene in your systems.",
      },
      {
        heading: "Who it's for",
        body: "B2B companies with an average contract value above roughly £8,000, a defined ideal customer profile, and closers who are currently doing their own prospecting.",
      },
      {
        heading: "The business case",
        body: "More qualified pipeline per closer, a lower cost per opportunity than in-house SDRs, and no recruitment or ramp risk on a role with notoriously high turnover.",
      },
      {
        heading: "Why us",
        body: "We are measured on sales-accepted opportunities, agreed with your sales leadership. Meeting count is a leading indicator we track internally, never the target.",
      },
    ],
    figure: "network",
  },

  included: {
    eyebrow: "Scope",
    title: "Targeting, outreach, qualification and the data underneath.",
    body: "One monthly rate per pod. Data enrichment, sequencing tools and dialler costs are passed through at cost with the invoices attached.",
    items: [
      "Ideal customer profile definition and account tiering",
      "Target list building, enrichment and verification",
      "Multi-channel outbound: email, phone, LinkedIn and video",
      "Sequence design, copy testing and cadence optimisation",
      "Inbound lead qualification and speed-to-lead response",
      "Discovery calls and qualification to an agreed framework",
      "Meeting booking, confirmation and no-show recovery",
      "CRM hygiene: deduplication, enrichment and stage discipline",
      "Lead scoring and routing rules",
      "Campaign operations and marketing automation execution",
      "Competitive and objection intelligence fed back to marketing",
      "Weekly pipeline reviews with your sales leadership",
    ],
    note: "Target lists, sequences, call recordings and CRM data are yours. Everything is built in your systems under your accounts, so nothing needs recovering if the engagement ends.",
    figure: "layers",
  },

  benefits: [
    {
      title: "Meetings your closers actually want",
      body: "Qualification criteria are agreed with your sales leadership in week one and enforced by the team lead. An unaccepted meeting counts against us, which is what keeps the bar where your reps want it.",
      metric: { value: 78, suffix: "%", label: "Of booked meetings accepted as qualified by sales" },
      link: { label: "How qualification is agreed", href: "#process" },
      figure: "dashboard",
    },
    {
      title: "Closers back to closing",
      body: "A third of an account executive's week goes on prospecting they were not hired for and are rarely good at. Returning that time is usually worth more than the pod costs.",
      metric: { value: 12, suffix: " hrs", label: "Weekly selling time returned per closer" },
      link: { label: "Talk about your team shape", href: "#contact" },
      figure: "pulse",
    },
    {
      title: "Inbound answered in minutes, not days",
      body: "Speed to lead is the single most reliable predictor of conversion on inbound, and almost every company is slower than it believes. Coverage across timezones means enquiries are worked when they arrive.",
      metric: { value: 6, suffix: " min", label: "Median inbound response time" },
      link: { label: "See the coverage model", href: "#why-us" },
      figure: "network",
    },
    {
      title: "A CRM that stops lying to you",
      body: "A sales operations analyst on every pod maintains data hygiene, stage discipline and routing. Forecast quality is downstream of data quality, and no amount of reporting fixes a dirty pipeline.",
      metric: { value: 44, suffix: "%", label: "Lower cost per qualified opportunity" },
      link: { label: "See what's included", href: "#whats-included" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Define",
      duration: "Week 1",
      body: "Ideal customer profile, account tiers and — most importantly — the written qualification criteria your sales leadership will accept. This document is what the engagement is measured against.",
    },
    {
      title: "Build the list",
      duration: "Week 1–2",
      body: "Target accounts and contacts sourced, enriched and verified. We reject more data than we keep; dialling a bad list is the fastest way to burn a domain and a team's morale.",
    },
    {
      title: "Message",
      duration: "Week 2–3",
      body: "Sequences, call frameworks and objection handling built from your win-loss patterns, reviewed by your sales leadership before anything sends. Domain warming runs in parallel.",
    },
    {
      title: "Recruit & train",
      duration: "Week 2–4",
      body: "SDRs matched to your market and language, interviewed by you. Product certification, live call simulation and a graded readiness gate before any real prospect is contacted.",
    },
    {
      title: "Launch",
      duration: "Week 5",
      body: "A ramped start on one segment with every call reviewed, widening as acceptance rates hold. First meetings typically land in week five.",
    },
    {
      title: "Optimise",
      duration: "Weekly",
      body: "Weekly pipeline review with your sales leadership covering acceptance rate, segment performance and message testing. Underperforming segments are cut rather than defended.",
    },
  ],

  tech: [
    { name: "Salesforce", category: "CRM" },
    { name: "HubSpot", category: "CRM" },
    { name: "Microsoft Dynamics", category: "CRM" },
    { name: "Outreach", category: "Sales engagement" },
    { name: "Salesloft", category: "Sales engagement" },
    { name: "Apollo", category: "Prospecting" },
    { name: "ZoomInfo", category: "Data" },
    { name: "Clearbit", category: "Enrichment" },
    { name: "LinkedIn Sales Navigator", category: "Social selling" },
    { name: "Aircall", category: "Dialler" },
    { name: "Gong", category: "Conversation intelligence" },
    { name: "Chili Piper", category: "Meeting routing" },
    { name: "Marketo", category: "Marketing automation" },
    { name: "Pardot", category: "Marketing automation" },
    { name: "Looker Studio", category: "Reporting" },
    { name: "Vidyard", category: "Video prospecting" },
  ],

  differentiators: [
    {
      title: "Measured on accepted opportunities",
      body: "Not on dials, emails or meetings booked. Per-meeting pricing is why the industry has a reputation for filling calendars with prospects who were never going to buy.",
    },
    {
      title: "Your sales leadership sets the bar",
      body: "Qualification criteria are written down in week one and owned by your VP of Sales. When a meeting is rejected we investigate it, and repeated rejections change the targeting.",
    },
    {
      title: "Named SDRs you interview",
      body: "Dedicated to your account, not splitting time across four clients. Product knowledge compounds, and prospects can hear the difference within thirty seconds.",
    },
    {
      title: "Sales operations included",
      body: "An analyst on every pod keeps CRM data, routing and stage discipline clean. Most outsourced SDR programmes quietly degrade the CRM they run in.",
    },
    {
      title: "Transparent tooling costs",
      body: "Data, sequencer and dialler costs pass through at cost with the invoices attached. Marking up enrichment data is a common and unnecessary margin.",
    },
    {
      title: "Intelligence flows back",
      body: "Objections, competitor mentions and disqualification reasons are reported to marketing monthly. The team hears your market's real objections before anyone else does.",
    },
  ],

  cases: [
    {
      industry: "Enterprise software",
      title: "Freeing eight closers from their own prospecting",
      challenge:
        "Account executives spending a third of their week prospecting, hitting quota inconsistently, and two resignations citing workload.",
      solution:
        "A six-SDR pod covering outbound for the mid-market segment, with qualification criteria written by the VP of Sales and enforced at the team lead level.",
      results: [
        { value: 78, suffix: "%", label: "Meeting acceptance rate" },
        { value: 2.3, decimals: 1, suffix: "x", label: "Qualified pipeline per closer" },
        { value: 12, suffix: " hrs", label: "Weekly selling time returned per rep" },
      ],
      accent: "sun",
      figure: "network",
    },
    {
      industry: "Industrial equipment",
      title: "Answering inbound before the competition did",
      challenge:
        "High-value inbound enquiries arriving outside office hours and being worked the next morning, by which time prospects had contacted two competitors.",
      solution:
        "Extended-hours qualification cover from two hubs with a six-minute response target, routing straight into the regional rep's calendar.",
      results: [
        { value: 6, suffix: " min", label: "Median inbound response time" },
        { value: 41, suffix: "%", label: "Increase in inbound conversion" },
        { value: 19, suffix: "%", label: "More first-to-respond wins" },
      ],
      accent: "sky",
      figure: "pulse",
    },
    {
      industry: "Professional services",
      title: "Cutting cost per opportunity by killing two segments",
      challenge:
        "An outbound programme spread across five verticals with a rising cost per opportunity and no view of which segment was producing revenue.",
      solution:
        "Segment-level tracking through to closed-won revealed two verticals producing meetings but no closes. Budget moved to the three that converted.",
      results: [
        { value: 44, suffix: "%", label: "Lower cost per qualified opportunity" },
        { value: 5, label: "Segments reduced to three" },
        { value: 1.9, decimals: 1, suffix: "x", label: "Revenue from the same spend" },
      ],
      accent: "mint",
      figure: "dashboard",
    },
  ],

  quotes: [
    {
      quote:
        "The first thing they did was make our VP of Sales write down what qualified meant. Nobody had ever asked us that before, including our own SDR team.",
      name: "Patrick Devane",
      role: "Chief Revenue Officer",
      company: "Gridworks",
      initials: "PD",
      rating: 5,
    },
    {
      quote:
        "They told us to stop targeting two verticals that were producing meetings. It cost them volume and made us money.",
      name: "Sinead O'Halloran",
      role: "Sales Director",
      company: "Northwind",
      initials: "SO",
      rating: 5,
    },
    {
      quote:
        "Our reps stopped complaining about lead quality within about six weeks. If you have run an SDR team you know how rare that is.",
      name: "Wes Tanaka",
      role: "VP Sales",
      company: "Vertex Pay",
      initials: "WT",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "Are you paid per meeting?",
      answer:
        "No. A fixed monthly rate per pod, measured on sales-accepted opportunities. Per-meeting pricing is precisely why outsourced sales development has the reputation it does.",
    },
    {
      question: "How do you define a qualified meeting?",
      answer:
        "Your sales leadership defines it in week one and signs the document. We enforce it at team-lead level, and every rejected meeting is investigated and fed back into targeting.",
    },
    {
      question: "Will the SDRs work under our brand?",
      answer:
        "Yes — your email domain, your CRM, your brand. They are dedicated to your account only, so their product knowledge builds rather than resetting between clients.",
    },
    {
      question: "How long until we see meetings?",
      answer:
        "First meetings typically land in week five. Weeks one to four cover list building, message development, domain warming and training. Starting earlier just burns the domain and the list.",
    },
    {
      question: "What contract values does this work for?",
      answer:
        "Generally an average contract value above about £8,000. Below that the economics of a human SDR rarely work, and we will tell you that rather than take the engagement.",
    },
    {
      question: "Who owns the data and sequences?",
      answer:
        "You do. Target lists, sequences, call recordings and CRM records live in your systems under your accounts throughout. There is nothing to transfer at the end.",
    },
    {
      question: "How do you protect our domain reputation?",
      answer:
        "Separate sending domains, staged warming, strict volume ramps and continuous deliverability monitoring. We would rather send less than damage the domain your marketing team relies on.",
    },
    {
      question: "Can you handle inbound as well as outbound?",
      answer:
        "Yes, and inbound qualification usually produces the faster return. Speed to lead is the most reliable conversion lever in B2B and almost every company underestimates their own response time.",
    },
    {
      question: "What about compliance — GDPR, CAN-SPAM, cold calling rules?",
      answer:
        "Lawful basis is documented per market, suppression lists are maintained, and opt-outs are honoured across all channels. Your DPO reviews the approach before any outreach begins.",
    },
    {
      question: "Can the team sell in other languages?",
      answer:
        "Yes — native speakers across English, Spanish, Portuguese, French, German, Italian and Dutch as standard. Multi-market programmes run one qualification standard across all languages.",
    },
    {
      question: "Do you do the marketing side too?",
      answer:
        "Campaign operations, marketing automation execution and lead routing are included. Paid media strategy and creative production sit with our marketing teams under a separate scope.",
    },
    {
      question: "What is the minimum term?",
      answer:
        "Six months. The first five weeks produce no meetings by design, so a three-month engagement would end just as the programme reached steady state. After six months it is month-to-month.",
    },
  ],

  related: [
    "customer-service",
    "live-chat-outsourcing",
    "ecommerce-bpo",
    "admin-support",
    "small-business",
    "nearshore-bpo",
  ],

  cta: {
    title: "Get a pipeline model before you commit.",
    body: "Tell us your ICP, average contract value and current conversion rates. We will come back within one business day with a realistic opportunity forecast and what it would cost.",
  },

  seo: {
    title: "Sales & Marketing Outsourcing | Outsourced SDR & Lead Qualification — Valentisys",
    description:
      "Dedicated SDR pods running outbound, inbound qualification and CRM hygiene in your systems. Measured on sales-accepted opportunities, not meetings booked. 78% acceptance rate.",
  },
};
