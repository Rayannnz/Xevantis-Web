import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const ecommerceBpo: ServiceContent = {
  slug: "ecommerce-bpo",
  name: "Online Store Support",
  accent: "blush",
  eyebrow: "Online Store",
  summary:
    "Order handling, shipping questions, returns and marketplace listings for local businesses that also sell online — with holiday cover booked in August, not November.",
  trustLabel: "Handling the online side for",

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
      title: "Why these operations hold through December.",
      body: "Peak failures are almost never surprises. They are capacity decisions made too late to recruit and train against.",
    },
    cases: {
      title: "Peaks we have run.",
      body: "Three local businesses measured on backlog, shipping questions removed, and what happened to their marketplace accounts.",
    },
    faq: {
      title: "Peak planning, marketplaces and returns.",
      body: "The operational questions specific to running an ecommerce back office.",
    },
  },

  hero: {
    title: "The online side of a local business, handled.",
    highlight: "contracted in August",
    body: "Order handling, \"where is my package\" questions, returns and marketplace listings, from someone who knows your products — with holiday cover contracted in August, trained by October, and working in the first week that matters.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Holiday capacity being reserved for the next season now",
    chips: [
      { value: "0 hrs", label: "Holiday backlog across the accounts we run" },
      { value: "-34%", label: "Shipping questions after the fixes" },
      { value: "4x", label: "Volume absorbed without hiring" },
    ],
    figure: "pulse",
  },

  overview: {
    eyebrow: "Service overview",
    title: "Four months of the year decide the other eight.",
    body: "For a business that sells online alongside a storefront, a handful of weeks decides the year. A backlog in the second week of December produces refund demands, marketplace penalties and one-star reviews that suppress sales for a year. Almost all of it is a staffing decision made in September rather than in June.",
    panels: [
      {
        heading: "What it is",
        body: "A named person covering order questions, shipping issues, returns and marketplace listings, with pre-trained extra cover reserved for your busiest weeks.",
      },
      {
        heading: "Who it's for",
        body: "Independent pharmacies shipping orders, optical and veterinary practices selling products, local retailers running a Shopify store, and medical supply businesses selling on marketplaces.",
      },
      {
        heading: "The business case",
        body: "No holiday backlog, fewer shipping questions reaching your counter staff, faster returns, and marketplace metrics that stay inside policy thresholds.",
      },
      {
        heading: "Why us",
        body: "Extra holiday cover comes from people already trained on your products in October — not temps meeting your catalog for the first time in November.",
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
      "Shipping-status questions and proactive delivery-issue outreach",
      "Returns, refunds and exchange processing to your policy",
      "Carrier liaison, claims and lost-parcel investigation",
      "Marketplace account management: Amazon, eBay, Etsy and others",
      "Marketplace case handling, A-to-z claims and appeals",
      "Product listing creation, enrichment and catalog maintenance",
      "Review and rating monitoring with response handling",
      "Fraud screening and chargeback dispute preparation",
      "Peak forecasting, surge planning and capacity reservation",
      "Self-service deflection design for the top contact drivers",
    ],
    note: "We work in your platform, your helpdesk and your marketplace seller accounts as authorized users. Account ownership, review history and seller ratings always stay in your name.",
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
      body: "\"Where is my order\" is almost always the single biggest source of messages, and most of it is avoidable with automatic shipping updates and a better status page. Removing it is cheaper than staffing it.",
      metric: { value: 34, suffix: "%", label: "Median reduction in shipping-status messages" },
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
      body: "The steady-state cover sized for normal trading, plus the saved responses, returns rules and marketplace templates it will work from.",
    },
    {
      title: "Peak plan",
      duration: "Quarter ahead",
      body: "Surge headcount forecast from your growth plan and last year's curve, contracted in advance with capacity reserved from the same hub. This happens in August, not October.",
    },
    {
      title: "Peak training",
      duration: "6 weeks before",
      body: "Surge staff trained on your catalog, policies and systems well before the season, with a graded readiness gate. They start peak week one already productive.",
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
    { name: "WooCommerce", category: "Commerce platform" },
    { name: "Square Online", category: "Commerce platform" },
    { name: "Amazon Seller Central", category: "Marketplace" },
    { name: "eBay Seller Hub", category: "Marketplace" },
    { name: "Etsy", category: "Marketplace" },
    { name: "Walmart Marketplace", category: "Marketplace" },
    { name: "ShipStation", category: "Shipping" },
    { name: "Gorgias", category: "Store help desk" },
    { name: "Zendesk", category: "Help desk" },
    { name: "Klaviyo", category: "Customer messaging" },
    { name: "Loop Returns", category: "Returns" },
    { name: "Stripe", category: "Payments" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Looker Studio", category: "Reporting" },
  ],

  differentiators: [
    {
      title: "Peak contracted in advance",
      body: "Surge capacity is reserved and priced a quarter ahead. Providers who quote peak in October are quoting agency labor, and you pay for that in both cost and quality.",
    },
    {
      title: "Surge staff trained on your catalog",
      body: "Holiday staff train on your products six weeks before the season. They are productive in the first busy week rather than learning your returns policy during it.",
    },
    {
      title: "We reduce contacts, not just handle them",
      body: "Contact driver analysis comes before headcount. Roughly a third of shipping-status messages can be removed entirely, and removing them is cheaper for you than staffing them is profitable for us.",
    },
    {
      title: "Marketplace-literate",
      body: "Amazon and eBay policy thresholds, appeal processes and case handling are specific skills. Missing a response window can cost you a channel, and generalist support teams miss them.",
    },
    {
      title: "Your seller accounts stay yours",
      body: "We operate as authorized users on your accounts. Ratings, review history and account standing are never held by us, so changing supplier never costs you a channel.",
    },
    {
      title: "A written post-mortem every January",
      body: "What to deflect, automate or staff differently next year, with the data behind each recommendation. Peak improvement compounds only if someone writes it down.",
    },
  ],

  cases: [
    {
      industry: "Optical retailer · Brooklyn, NY",
      title: "A December with no backlog for the first time",
      challenge:
        "A three-store optical business whose online frame orders rose sixfold through the holidays, with the previous season producing a nine-day email backlog and a wave of chargebacks in January.",
      solution:
        "Holiday cover contracted in August and trained in October, proactive shipping messages on the two carriers causing most complaints, and the returns policy simplified before the season rather than during it.",
      results: [
        { value: 0, suffix: " hrs", label: "Backlog at any point in the season" },
        { value: 6, suffix: "x", label: "Volume absorbed" },
        { value: 71, suffix: "%", label: "Fewer January chargebacks" },
      ],
      accent: "blush",
      figure: "pulse",
    },
    {
      industry: "Medical supply business · Queens, NY",
      title: "Recovering an Amazon account from policy warnings",
      challenge:
        "A family-run supplier whose response times had drifted past the 24-hour policy window, with a defect rate approaching suspension across three marketplaces and no idea which products were causing it.",
      solution:
        "Dedicated marketplace case handling inside a 12-hour internal target, systematic appeal preparation, and root-cause work on the two products generating most of the defects.",
      results: [
        { value: 100, suffix: "%", label: "Cases answered within the policy window" },
        { value: 0.4, decimals: 1, suffix: "%", label: "Defect rate, from 2.1%" },
        { value: 3, label: "Marketplace accounts restored to good standing" },
      ],
      accent: "sun",
      figure: "network",
    },
    {
      industry: "Independent pharmacy · Bronx, NY",
      title: "Cutting shipping questions by a third",
      challenge:
        "\"Where is my order\" making up 44% of all online contact volume, with counter staff interrupting patient service to copy tracking numbers from one system into another.",
      solution:
        "Automatic shipping updates at three points, a rebuilt order status page, and proactive messages on delayed shipments — all identified by analyzing what people were actually asking about.",
      results: [
        { value: 34, suffix: "%", label: "Fewer shipping questions" },
        { value: 21, suffix: "%", label: "Lower total online contact volume" },
        { value: 4.8, decimals: 1, suffix: "/5", label: "Customer rating through the season" },
      ],
      accent: "sky",
      figure: "dashboard",
    },
  ],

  quotes: [
    {
      quote:
        "They made us book the holiday cover in August. It felt early, and it was the reason December was boring for once.",
      name: "Owner",
      role: "Three-store optical retailer",
      company: "Brooklyn, NY",
      initials: "OW",
      rating: 5,
    },
    {
      quote:
        "Our Amazon account was two weeks from suspension. They handled the appeals and then fixed the two products causing it.",
      name: "Operations Manager",
      role: "Family-run medical supply business",
      company: "Queens, NY",
      initials: "OM",
      rating: 5,
    },
    {
      quote:
        "A third of our online messages were people asking where their package was. They told us to fix the status page instead of paying for more hours.",
      name: "Pharmacist-in-Charge",
      role: "Independent pharmacy",
      company: "Bronx, NY",
      initials: "PC",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "When should we start planning peak?",
      answer:
        "A full quarter ahead. Surge capacity is reserved in August for a November peak, with training six weeks before the season. Anyone quoting you peak capacity in October is quoting agency labor.",
    },
    {
      question: "Will peak staff know our products?",
      answer:
        "Yes. Yes. Holiday staff complete product, policy and systems training with a sign-off before the season starts.",
    },
    {
      question: "Can you manage our marketplace accounts?",
      answer:
        "Yes — Amazon, eBay, Etsy, Walmart and others. Case handling, appeals, listing maintenance and metric monitoring, always as authorized users on your accounts rather than as the account owner.",
    },
    {
      question: "Who owns the seller accounts?",
      answer:
        "You do, always. Ratings, review history and account standing stay in your name. Changing supplier should never risk a sales channel, and under this model it cannot.",
    },
    {
      question: "How do you cut down shipping questions?",
      answer:
        "Proactive delivery exception messaging, better tracking pages and automated milestone updates. Contact driver analysis identifies which of the three will move your volume most before we quote headcount.",
    },
    {
      question: "Can you handle returns processing?",
      answer:
        "Yes, to your policy — authorization, tracking, inspection liaison with your warehouse, refund or exchange processing, and carrier claims for lost returns.",
    },
    {
      question: "What about fraud and chargebacks?",
      answer:
        "Manual fraud review on flagged orders and chargeback dispute preparation with evidence packs. Representment success depends almost entirely on evidence quality and speed.",
    },
    {
      question: "Which platforms do you work in?",
      answer:
        "Shopify, BigCommerce, Magento, WooCommerce and custom stacks, with Gorgias, Zendesk or your existing helpdesk. We work in your systems under your licenses.",
    },
    {
      question: "How does peak pricing work?",
      answer:
        "Surge capacity is contracted in advance at a rate agreed a quarter ahead, so the cost is known before the season. Late surge requests are possible but cost more and train less.",
    },
    {
      question: "Can you cover 24/7 through peak?",
      answer:
        "Yes. Round-the-clock cover is available through the busiest weeks, which is when an overnight backlog does the most damage to next-day expectations.",
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
    title: "Plan the holidays while there is still time.",
    body: "Send us last season's message volumes and order data. We will come back with a list of what to fix, a forecast of what you will need, and what it costs to reserve the cover now.",
  },

  seo: {
    title: "Online Store Support for Local Businesses & Pharmacies — Xevantis",
    description:
      "Order handling, shipping questions, returns and Amazon and eBay marketplace management for pharmacies, optical and veterinary practices and local retailers across the US. Holiday cover booked a quarter ahead. Zero backlog, 34% fewer shipping questions.",
  },
};
