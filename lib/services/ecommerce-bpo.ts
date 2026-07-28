import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const ecommerceBpo: ServiceContent = {
  slug: "ecommerce-bpo",
  name: "Ecommerce BPO",
  accent: "blush",
  eyebrow: "Ecommerce",
  summary:
    "Support, order operations, returns and marketplace management built for peak — with surge capacity contracted before Black Friday, not during it.",
  trustLabel: "Handling peak season for",

  sections: {
    benefits: {
      title: "What peak-ready operations are worth.",
      body: "Four numbers baselined against last year's peak. Cost per contact matters, but the ones that move revenue are further down the list.",
    },
    process: {
      title: "From peak post-mortem to a staffed plan.",
      body: "Six phases. We start by reading what went wrong last November, because that is where the whole plan comes from.",
    },
    tech: {
      title: "The commerce and support stack.",
      body: "We work in your platform and your helpdesk. Marketplace tooling and carrier portals included.",
    },
    why: {
      title: "Why these operations hold through Black Friday.",
      body: "Peak failures are almost never surprises. They are capacity decisions made too late to recruit and train against.",
    },
    cases: {
      title: "Peaks we have run.",
      body: "Three retailers measured on backlog, WISMO deflection, and what happened to marketplace account health.",
    },
    faq: {
      title: "Peak planning, marketplaces and returns.",
      body: "The operational questions specific to running an ecommerce back office.",
    },
  },

  hero: {
    title: "An ecommerce operation that survives its own peak.",
    highlight: "contracted in August",
    body: "Customer support, order operations, returns and marketplace management from a team that knows your catalogue — with surge capacity contracted in August, trained by October, and working in peak week one.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Peak capacity being reserved for the next season now",
    chips: [
      { value: "0 hrs", label: "Peak backlog across managed accounts" },
      { value: "-34%", label: "WISMO contacts after deflection work" },
      { value: "4x", label: "Volume absorbed without new recruitment" },
    ],
    figure: "pulse",
  },

  overview: {
    eyebrow: "Service overview",
    title: "Four months of the year decide the other eight.",
    body: "Ecommerce operations are judged on a handful of weeks. A backlog in peak week two produces refund demands, marketplace penalties and reviews that suppress conversion for a year. Almost all of it is a staffing decision made in September rather than in June.",
    panels: [
      {
        heading: "What it is",
        body: "An ecommerce pod covering support, order operations, returns and marketplace administration, with pre-trained surge capacity reserved for your peak.",
      },
      {
        heading: "Who it's for",
        body: "Direct-to-consumer brands, multi-channel retailers and marketplace sellers processing from a few thousand to several hundred thousand orders a month.",
      },
      {
        heading: "The business case",
        body: "No peak backlog, fewer WISMO contacts, faster returns processing and marketplace metrics that stay inside policy thresholds.",
      },
      {
        heading: "Why us",
        body: "Surge staff come from the same delivery hub and are trained on your catalogue before peak — not agency temps meeting your product in November.",
      },
    ],
    figure: "network",
  },

  included: {
    eyebrow: "Scope",
    title: "Everything between the order and the resolved return.",
    body: "One monthly rate with peak capacity contracted separately and in advance, so the price is known before the season rather than negotiated during it.",
    items: [
      "Customer support across email, chat, phone and social",
      "Order management, amendments and exception handling",
      "WISMO handling and proactive delivery-issue outreach",
      "Returns, refunds and exchange processing to your policy",
      "Carrier liaison, claims and lost-parcel investigation",
      "Marketplace account management: Amazon, eBay, Etsy and others",
      "Marketplace case handling, A-to-z claims and appeals",
      "Product listing creation, enrichment and catalogue maintenance",
      "Review and rating monitoring with response handling",
      "Fraud screening and chargeback dispute preparation",
      "Peak forecasting, surge planning and capacity reservation",
      "Self-service deflection design for the top contact drivers",
    ],
    note: "We work in your platform, your helpdesk and your marketplace seller accounts as authorised users. Account ownership, review history and seller ratings always stay in your name.",
    figure: "pipeline",
  },

  benefits: [
    {
      title: "A peak with no backlog at all",
      body: "Capacity is reserved and trained before the season rather than recruited into it. A backlog in peak week two is what generates the refund demands and one-star reviews that suppress conversion into spring.",
      metric: { value: 0, suffix: " hrs", label: "Peak backlog across managed accounts" },
      link: { label: "See the peak plan", href: "#process" },
      figure: "pulse",
    },
    {
      title: "Fewer people asking where their order is",
      body: "WISMO is typically the largest single contact driver and most of it is avoidable through proactive delivery messaging and better tracking pages. Deflecting it is cheaper than staffing it.",
      metric: { value: 34, suffix: "%", label: "Median reduction in WISMO contact volume" },
      link: { label: "How deflection works", href: "#whats-included" },
      figure: "dashboard",
    },
    {
      title: "Marketplace metrics that stay inside policy",
      body: "Amazon and eBay suspend accounts on response times and defect rates, not on intent. Systematic case handling inside the response windows is what keeps a channel from disappearing overnight.",
      metric: { value: 100, suffix: "%", label: "Of managed accounts held within policy thresholds" },
      link: { label: "Talk about your channels", href: "#contact" },
      figure: "network",
    },
    {
      title: "Returns processed before the refund demand",
      body: "Slow returns generate a second contact, a chargeback risk and a negative review from a customer who has already decided. Same-day processing turns a return into a retained customer more often than not.",
      metric: { value: 24, suffix: " hrs", label: "Median return-to-refund processing time" },
      link: { label: "See the case studies", href: "#work" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Peak post-mortem",
      duration: "Week 1",
      body: "Last season's contact volumes by hour, backlog points, refund reasons and marketplace metrics. Almost every peak failure was visible in the previous year's data, and this is where the plan comes from.",
    },
    {
      title: "Contact driver analysis",
      duration: "Week 1–2",
      body: "The top ten reasons customers contact you, ranked by volume and cost. We separate what should be handled from what should be deflected before quoting any headcount.",
    },
    {
      title: "Base team design",
      duration: "Week 2–3",
      body: "The steady-state pod sized for normal trading, plus the macro library, returns rules and marketplace response templates it will work from.",
    },
    {
      title: "Peak plan",
      duration: "Quarter ahead",
      body: "Surge headcount forecast from your growth plan and last year's curve, contracted in advance with capacity reserved from the same hub. This happens in August, not October.",
    },
    {
      title: "Peak training",
      duration: "6 weeks before",
      body: "Surge staff trained on your catalogue, policies and systems well before the season, with a graded readiness gate. They start peak week one already productive.",
    },
    {
      title: "Run & debrief",
      duration: "Ongoing",
      body: "Daily reporting through peak, then a written post-mortem in January covering what to deflect, automate or staff differently next year.",
    },
  ],

  tech: [
    { name: "Shopify", category: "Commerce platform" },
    { name: "BigCommerce", category: "Commerce platform" },
    { name: "Magento", category: "Commerce platform" },
    { name: "WooCommerce", category: "Commerce platform" },
    { name: "Amazon Seller Central", category: "Marketplace" },
    { name: "eBay Seller Hub", category: "Marketplace" },
    { name: "ChannelAdvisor", category: "Marketplace management" },
    { name: "Linnworks", category: "Order management" },
    { name: "Gorgias", category: "Ecommerce helpdesk" },
    { name: "Zendesk", category: "Helpdesk" },
    { name: "Klaviyo", category: "Customer messaging" },
    { name: "ShipStation", category: "Fulfilment" },
    { name: "Loop Returns", category: "Returns" },
    { name: "Signifyd", category: "Fraud screening" },
    { name: "NetSuite", category: "ERP" },
    { name: "Looker Studio", category: "Reporting" },
  ],

  differentiators: [
    {
      title: "Peak contracted in advance",
      body: "Surge capacity is reserved and priced a quarter ahead. Providers who quote peak in October are quoting agency labour, and you pay for that in both cost and quality.",
    },
    {
      title: "Surge staff trained on your catalogue",
      body: "Peak hires come from the same delivery hub and train six weeks before the season. They are productive in peak week one rather than learning your returns policy during it.",
    },
    {
      title: "We reduce contacts, not just handle them",
      body: "Contact driver analysis comes before headcount. Roughly a third of WISMO volume can be deflected, and deflecting it is cheaper for you than staffing it is profitable for us.",
    },
    {
      title: "Marketplace-literate",
      body: "Amazon and eBay policy thresholds, appeal processes and case handling are specific skills. Missing a response window can cost you a channel, and generalist support teams miss them.",
    },
    {
      title: "Your seller accounts stay yours",
      body: "We operate as authorised users on your accounts. Ratings, review history and account standing are never held by us, so changing supplier never costs you a channel.",
    },
    {
      title: "A written post-mortem every January",
      body: "What to deflect, automate or staff differently next year, with the data behind each recommendation. Peak improvement compounds only if someone writes it down.",
    },
  ],

  cases: [
    {
      industry: "Fashion DTC",
      title: "A Black Friday with no backlog for the first time",
      challenge:
        "Order volume rising sixfold through peak, with the previous season producing a nine-day support backlog and a surge of chargebacks in January.",
      solution:
        "Surge capacity contracted in August and trained in October, proactive delivery messaging on the two carriers causing most WISMO, and returns rules simplified before the season.",
      results: [
        { value: 0, suffix: " hrs", label: "Backlog at any point in peak" },
        { value: 6, suffix: "x", label: "Volume absorbed" },
        { value: 71, suffix: "%", label: "Fewer January chargebacks" },
      ],
      accent: "blush",
      figure: "pulse",
    },
    {
      industry: "Home goods marketplace seller",
      title: "Recovering an Amazon account from policy warnings",
      challenge:
        "Response times drifting past the 24-hour policy window and a defect rate approaching suspension thresholds across three marketplaces.",
      solution:
        "Dedicated marketplace case handling inside a 12-hour internal target, systematic A-to-z appeal preparation, and root-cause work on the two SKUs generating most defects.",
      results: [
        { value: 100, suffix: "%", label: "Cases answered within policy window" },
        { value: 0.4, decimals: 1, suffix: "%", label: "Defect rate, from 2.1%" },
        { value: 3, label: "Marketplace accounts restored to good standing" },
      ],
      accent: "sun",
      figure: "network",
    },
    {
      industry: "Electronics retail",
      title: "Cutting WISMO by a third without touching support",
      challenge:
        "Where-is-my-order contacts making up 44% of all support volume, with agents copying tracking numbers from one system into another.",
      solution:
        "Proactive delivery exception messaging, a rebuilt tracking page, and automated updates at three shipment milestones — all identified during contact driver analysis.",
      results: [
        { value: 34, suffix: "%", label: "Reduction in WISMO contacts" },
        { value: 21, suffix: "%", label: "Lower total support volume" },
        { value: 4.8, decimals: 1, suffix: "/5", label: "CSAT through peak" },
      ],
      accent: "sky",
      figure: "dashboard",
    },
  ],

  quotes: [
    {
      quote:
        "They made us contract peak capacity in August. It felt early and it was the reason November was boring.",
      name: "Erin Maddox",
      role: "Head of Ecommerce",
      company: "Lumen Retail",
      initials: "EM",
      rating: 5,
    },
    {
      quote:
        "Our Amazon account was two weeks from suspension. They handled the appeals and fixed the two SKUs causing it.",
      name: "Vikram Anand",
      role: "Marketplace Director",
      company: "Duonode",
      initials: "VA",
      rating: 5,
    },
    {
      quote:
        "A third of our support volume was people asking where their parcel was. They told us to fix the tracking page instead of hiring more agents.",
      name: "Lotte Jansen",
      role: "Customer Experience Lead",
      company: "Solstice",
      initials: "LJ",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "When should we start planning peak?",
      answer:
        "A full quarter ahead. Surge capacity is reserved in August for a November peak, with training six weeks before the season. Anyone quoting you peak capacity in October is quoting agency labour.",
    },
    {
      question: "Will peak staff know our products?",
      answer:
        "Yes. Surge staff come from the same delivery hub and complete catalogue, policy and systems training with a graded readiness gate before the season starts.",
    },
    {
      question: "Can you manage our marketplace accounts?",
      answer:
        "Yes — Amazon, eBay, Etsy, Walmart and others. Case handling, appeals, listing maintenance and metric monitoring, always as authorised users on your accounts rather than as the account owner.",
    },
    {
      question: "Who owns the seller accounts?",
      answer:
        "You do, always. Ratings, review history and account standing stay in your name. Changing supplier should never risk a sales channel, and under this model it cannot.",
    },
    {
      question: "How do you reduce WISMO?",
      answer:
        "Proactive delivery exception messaging, better tracking pages and automated milestone updates. Contact driver analysis identifies which of the three will move your volume most before we quote headcount.",
    },
    {
      question: "Can you handle returns processing?",
      answer:
        "Yes, to your policy — authorisation, tracking, inspection liaison with your warehouse, refund or exchange processing, and carrier claims for lost returns.",
    },
    {
      question: "What about fraud and chargebacks?",
      answer:
        "Manual fraud review on flagged orders and chargeback dispute preparation with evidence packs. Representment success depends almost entirely on evidence quality and speed.",
    },
    {
      question: "Which platforms do you work in?",
      answer:
        "Shopify, BigCommerce, Magento, WooCommerce and custom stacks, with Gorgias, Zendesk or your existing helpdesk. We work in your systems under your licences.",
    },
    {
      question: "How does peak pricing work?",
      answer:
        "Surge capacity is contracted in advance at a rate agreed a quarter ahead, so the cost is known before the season. Late surge requests are possible but cost more and train less.",
    },
    {
      question: "Can you cover 24/7 through peak?",
      answer:
        "Yes. Six delivery hubs allow genuine round-the-clock cover during peak weeks, which is when overnight backlog does the most damage to next-day expectations.",
    },
    {
      question: "Do you support multiple languages?",
      answer:
        "Yes — English, Spanish, Portuguese, French, German, Italian, Dutch and Polish as standard. Multi-market sellers run one quality standard across all languages.",
    },
    {
      question: "What is the minimum commitment?",
      answer:
        "Three months for the base team, then month-to-month with 30 days' notice. Peak surge is contracted separately for the season and reserved in advance.",
    },
  ],

  related: [
    "customer-service",
    "live-chat-outsourcing",
    "admin-support",
    "small-business",
    "sales-and-marketing",
    "nearshore-bpo",
  ],

  cta: {
    title: "Plan the next peak while there is still time.",
    body: "Send us last season's contact volumes and order data. We will come back with a deflection plan, a surge forecast and what it costs to reserve the capacity now.",
  },

  seo: {
    title: "Ecommerce BPO | Peak Support, Order Ops & Marketplace Management — Valentisys",
    description:
      "Ecommerce support, returns, order operations and marketplace management with surge capacity contracted a quarter ahead. Zero peak backlog, 34% WISMO reduction.",
  },
};
