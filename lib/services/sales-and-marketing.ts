import type { ServiceContent } from "./types";
import { PRIMARY_CTA, SECONDARY_CTA } from "./shared";

export const salesAndMarketing: ServiceContent = {
  slug: "sales-and-marketing",
  name: "Sales & Marketing",
  accent: "sun",
  eyebrow: "Sales & Marketing",
  summary:
    "Local SEO, Google Business Profile, reviews, lead response and reactivation campaigns — measured in booked appointments, not impressions.",
  trustLabel: "Bringing new business to",

  sections: {
    benefits: {
      title: "What local marketing should actually produce.",
      body: "Four numbers we agree before starting. Impressions and followers are the vanity metrics of this industry, so neither is the headline.",
    },
    process: {
      title: "From an audit of what you have to booked appointments.",
      body: "Six phases over about five weeks. Nothing gets built until the free fixes are done, because a website redesign will not save a profile with the wrong hours.",
    },
    tech: {
      title: "The tools that actually move a local business.",
      body: "We work in your own accounts and hand back everything we build. No agency-owned profiles you cannot access.",
    },
    why: {
      title: "Why this is not a marketing agency retainer.",
      body: "Most local marketing is sold as a monthly package of activity. Activity is not the product — a full schedule is.",
    },
    cases: {
      title: "Practices we have grown.",
      body: "Three engagements measured on calls, booked appointments and revenue, not on rankings or reach.",
    },
    faq: {
      title: "Ownership, measurement and what we will not do.",
      body: "The questions that separate a growth partner from someone selling you a website.",
    },
  },

  hero: {
    title: "More of the right calls, from three miles away.",
    highlight: "booked appointments",
    body: "Local SEO, Google Business Profile, review generation, fast lead response and reactivation campaigns — run in your own accounts and measured in booked appointments rather than impressions. We start with the free fixes, because most practices have not done them.",
    primaryCta: PRIMARY_CTA,
    secondaryCta: SECONDARY_CTA,
    trust: "Working with practices and firms in all 50 states",
    chips: [
      { value: "8x", label: "Map pack calls vs organic, median practice" },
      { value: "1–2 wks", label: "Before profile work starts moving" },
      { value: "0", label: "Accounts we hold hostage at the end" },
    ],
    figure: "pipeline",
  },

  overview: {
    eyebrow: "Service overview",
    title: "The map pack, not the marketing plan.",
    body: "For a local service business, nearly all the phone calls come from the three businesses with pins above the search results. That surface is governed by almost none of the things a marketing agency will sell you, and by several things that cost nothing and take an afternoon.",
    panels: [
      {
        heading: "What it is",
        body: "A named specialist running your local search presence, your reviews, your inbound response and your reactivation campaigns, in your own accounts.",
      },
      {
        heading: "Who it's for",
        body: "Medical and dental practices, pharmacies, law firms, engineering and accounting practices, real estate agencies and local service businesses that need more of the right calls.",
      },
      {
        heading: "The business case",
        body: "More new-patient and new-client calls from the same catchment, faster replies to the ones you already get, and lapsed patients brought back without a discount.",
      },
      {
        heading: "Why us",
        body: "We are measured on booked appointments, agreed with you in week one. Rankings and reach are things we track internally, never the target.",
      },
    ],
    figure: "network",
  },

  included: {
    eyebrow: "Scope",
    title: "Getting found, getting answered, getting booked.",
    body: "One monthly rate. Ad spend and any paid tools pass through at cost with the invoices attached — we do not take a percentage of your media budget.",
    items: [
      "Google Business Profile: claim, complete, categories and ongoing posts",
      "Name, address and phone consistency across every directory",
      "Review generation on a steady cadence, and a reply to every review",
      "Local landing pages for the services and neighborhoods you actually serve",
      "Industry directory listings — insurance panels, bar association, trade bodies",
      "Website speed, mobile layout and a booking path under a minute",
      "Inbound lead response within minutes, by text and phone",
      "Reactivation and recall campaigns to lapsed patients and clients",
      "Referral source tracking and thank-you follow-up",
      "Paid search management where the economics justify it",
      "Monthly reporting on calls and booked appointments, not impressions",
      "Competitive check on the practices ranking above you",
    ],
    note: "Every profile, page, listing and ad account is created in your name, under your login. If you leave, nothing needs recovering — a surprising number of local businesses discover too late that their agency owns their Google profile.",
    figure: "layers",
  },

  benefits: [
    {
      title: "Calls from people three blocks away",
      body: "The map pack is where a local practice gets its phone calls, and the inputs that move it are mostly free: complete categories, consistent listings, steady reviews and a reply to each one.",
      metric: { value: 8, suffix: "x", label: "Map pack calls vs organic, median local practice" },
      link: { label: "How the order works", href: "#process" },
      figure: "dashboard",
    },
    {
      title: "Inquiries answered before they call someone else",
      body: "Speed to reply is the most reliable predictor of whether a lead converts, and almost every business is slower than it believes. We measure your real response time before we quote you anything.",
      metric: { value: 5, suffix: " min", label: "Target response to a web or portal inquiry" },
      link: { label: "See the coverage model", href: "#why-us" },
      figure: "pulse",
    },
    {
      title: "Reviews that arrive steadily",
      body: "Twenty reviews in one week reads as purchased; two a week forever outranks it. Every review gets a reply, which is the cheapest signal available and the one almost nobody does consistently.",
      metric: { value: 94, suffix: "%", label: "Review response rate we run accounts at" },
      link: { label: "See what's included", href: "#whats-included" },
      figure: "network",
    },
    {
      title: "Patients and clients who already know you",
      body: "Recall and reactivation is the cheapest growth a practice has and the first thing to lapse when the front desk is busy. It runs on a schedule here rather than when somebody finds a spare hour.",
      metric: { value: 22, suffix: "%", label: "Median lift in reactivated patients per quarter" },
      link: { label: "Talk about your catchment", href: "#contact" },
      figure: "layers",
    },
  ],

  process: [
    {
      title: "Audit",
      duration: "Week 1",
      body: "Your profile, listings, reviews, site speed and — most importantly — your actual response time, measured by sending real inquiries to your own listings. You get the written findings whether or not you engage us.",
    },
    {
      title: "Fix the free things",
      duration: "Week 1–2",
      body: "Categories, hours, address consistency, unanswered reviews, a tappable phone number. This costs nothing and moves the needle in a fortnight, which is why it happens before anything is commissioned.",
    },
    {
      title: "Agree what counts",
      duration: "Week 2",
      body: "The number we are measured on, written down: booked appointments, retained matters, signed engagements. Whatever your business actually counts, not a proxy for it.",
    },
    {
      title: "Build",
      duration: "Week 2–4",
      body: "Local landing pages for the services and neighborhoods that are genuinely yours, industry directory listings, review requests, and the response process. All in your own accounts.",
    },
    {
      title: "Launch",
      duration: "Week 5",
      body: "Campaigns live, response cover in place, and call tracking connected so we can tell a map pack call from a referral. Profile work is usually already showing by now.",
    },
    {
      title: "Optimize",
      duration: "Monthly",
      body: "A monthly review covering calls, booked appointments and cost per new patient or client. Channels that produce activity but not bookings get cut rather than defended.",
    },
  ],

  tech: [
    { name: "Google Business Profile", category: "Local search" },
    { name: "Google Search Console", category: "Search" },
    { name: "Google Ads", category: "Paid search" },
    { name: "Bing Places", category: "Local search" },
    { name: "Yelp", category: "Directories" },
    { name: "Healthgrades", category: "Medical directories" },
    { name: "Zocdoc", category: "Medical booking" },
    { name: "Avvo", category: "Legal directories" },
    { name: "Podium", category: "Reviews & texting" },
    { name: "Birdeye", category: "Reviews" },
    { name: "CallRail", category: "Call tracking" },
    { name: "HubSpot", category: "CRM" },
    { name: "Follow Up Boss", category: "Real estate CRM" },
    { name: "Mailchimp", category: "Email campaigns" },
    { name: "WordPress", category: "Website" },
    { name: "Looker Studio", category: "Reporting" },
  ],

  differentiators: [
    {
      title: "Measured on booked appointments",
      body: "Not on impressions, rankings or followers. A practice with better rankings and the same number of patients has bought nothing, and we would rather say so than invoice for it.",
    },
    {
      title: "The free fixes come first",
      body: "Categories, hours, listings and review replies cost nothing and move the needle in weeks. We have taken over accounts where a practice spent five figures on a redesign while its profile listed the wrong hours.",
    },
    {
      title: "Everything is in your name",
      body: "Your Google profile, your ad account, your website, your call tracking. Agencies that hold the login have a client who cannot leave, which is a business model rather than a service.",
    },
    {
      title: "Ad spend at cost",
      body: "Media budget passes through with the invoices attached. Taking a percentage of ad spend gives an agency a reason to recommend more of it, which is the opposite of what you want.",
    },
    {
      title: "We know your industry's rules",
      body: "Attorney advertising rules, medical and dental review restrictions, and what a state bar or board will take issue with. We will tell you when something that works elsewhere is not available to you.",
    },
    {
      title: "We will tell you to stop",
      body: "If paid search does not work at your case value, or a channel is producing calls that never book, we say so. It costs us scope and it is the reason clients stay.",
    },
  ],

  cases: [
    {
      industry: "Dental practice · Park Slope, Brooklyn, NY",
      title: "The five-figure redesign that had not fixed the hours",
      challenge:
        "A three-provider practice that had spent $14,000 on a new website and seen no change in new patients. Its Google Business Profile listed pre-pandemic hours, one category, and had 31 unanswered reviews.",
      solution:
        "Categories corrected and expanded, hours fixed, every review answered over ten days, a steady review request cadence, and two neighborhood pages for the areas the practice genuinely serves.",
      results: [
        { value: 3, suffix: " wks", label: "Until map pack calls measurably rose" },
        { value: 62, suffix: "%", label: "More calls from the profile listing" },
        { value: 0, prefix: "$", label: "Spent on the fixes that caused it" },
      ],
      accent: "sun",
      figure: "network",
    },
    {
      industry: "Real estate agency · Westchester County, NY",
      title: "Answering inquiries before the competition did",
      challenge:
        "A twelve-agent brokerage where portal inquiries went to whichever agent was on rotation — all of whom were out showing property. Median response was over four hours and about a fifth got no reply at all.",
      solution:
        "Dedicated response cover across evenings and weekends, replying by text within five minutes with two specific viewing times, plus tracking that separated portal leads from referrals for the first time.",
      results: [
        { value: 4, suffix: " min", label: "Median response, down from 4h 20m" },
        { value: 38, suffix: "%", label: "More viewings booked per 100 inquiries" },
        { value: 21, suffix: "%", label: "Of leads previously unanswered, now 0%" },
      ],
      accent: "sky",
      figure: "pulse",
    },
    {
      industry: "Personal injury firm · Queens, NY",
      title: "Cutting cost per case by killing two channels",
      challenge:
        "A firm spending across paid search, two legal directories and a lead broker, with a rising cost per signed case and no view of which source produced the cases that actually settled.",
      solution:
        "Call tracking by source through to signed retainer revealed the lead broker and one directory produced consultations but almost no retained matters. Budget moved to the two channels that converted.",
      results: [
        { value: 44, suffix: "%", label: "Lower cost per signed case" },
        { value: 4, label: "Channels reduced to two" },
        { value: 1.9, decimals: 1, suffix: "x", label: "Retained matters from the same spend" },
      ],
      accent: "mint",
      figure: "dashboard",
    },
  ],

  quotes: [
    {
      quote:
        "The first thing they did was fix our hours on Google and answer three years of reviews. That was free and it did more than the website we had just paid for.",
      name: "Practice Owner",
      role: "Three-provider dental practice",
      company: "Park Slope, Brooklyn, NY",
      initials: "PO",
      rating: 5,
    },
    {
      quote:
        "They told us to stop paying for two lead sources that were producing consultations. It cost them scope and made us money.",
      name: "Managing Partner",
      role: "Personal injury firm",
      company: "Queens, NY",
      initials: "MP",
      rating: 5,
    },
    {
      quote:
        "Every account is in our name. Our last agency would not give us the login to our own Google profile, which is how we ended up here.",
      name: "Broker-Owner",
      role: "Twelve-agent brokerage",
      company: "Westchester County, NY",
      initials: "BO",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "How is this different from an SEO agency?",
      answer:
        "We are measured on booked appointments rather than rankings, we do the free profile and listing work before anything is commissioned, and every account is created in your name. Rankings that do not produce calls are not a result.",
    },
    {
      question: "How long before we see anything?",
      answer:
        "Profile and listing fixes typically show within one to two weeks. Content and landing pages take three to six months. Anyone promising rankings in thirty days is describing something that does not survive an algorithm update.",
    },
    {
      question: "Who owns the Google profile and the website?",
      answer:
        "You do, always. Everything is created under your login and stays there. If you leave us there is nothing to transfer and nothing to negotiate — a surprising number of local businesses find out too late that this is not standard.",
    },
    {
      question: "Do you take a percentage of ad spend?",
      answer:
        "No. Media passes through at cost with the invoices attached. Charging a percentage gives an agency a direct interest in recommending more spend, which is not an incentive you want on your side of the table.",
    },
    {
      question: "We are a law firm — what about attorney advertising rules?",
      answer:
        "We work within your state bar's rules, which vary considerably on testimonials and review solicitation. Response templates get pre-approved by your ethics counsel once, and we will flag anything that works elsewhere but is not available to you.",
    },
    {
      question: "Can you get us reviews?",
      answer:
        "We build the request into your existing follow-up so they arrive steadily from real patients and clients. We do not buy reviews, incentivize them, or filter out unhappy customers before asking — all three are against platform rules and increasingly detectable.",
    },
    {
      question: "Do you do paid search?",
      answer:
        "Where the economics justify it. For a high-value case type it usually does; for a routine appointment at typical local prices it often does not, and we will show you that arithmetic before you spend anything.",
    },
    {
      question: "Do you build websites?",
      answer:
        "Yes, but rarely first. Site work is the most expensive step and the slowest to pay back, and a new site on a broken profile changes nothing. We will usually spend a quarter on the free work before recommending it.",
    },
    {
      question: "We have several locations. Does that change anything?",
      answer:
        "Yes. Each location needs its own profile and its own phone number — sharing one number across three offices flattens all three. Multi-location practices are one of the more common things we are brought in to untangle.",
    },
    {
      question: "How do you know a call came from your work?",
      answer:
        "Call tracking by source, connected to whether the call ended in a booked appointment. That is what monthly reporting is built on, rather than a chart of impressions.",
    },
    {
      question: "Do you work outside New York?",
      answer:
        "Yes, across all fifty states. Much of our published research is drawn from the New York metro because that is where our densest client base is, but the method is identical anywhere — in lower-density markets the search radius widens and content work becomes relatively more valuable.",
    },
    {
      question: "What is the minimum term?",
      answer:
        "Three months. The first weeks are audit and free fixes, so a shorter engagement would end before the paid work had a chance to show. After three months it is month-to-month with 30 days' notice.",
    },
  ],

  related: [
    "customer-service",
    "live-chat-outsourcing",
    "small-business",
    "admin-support",
    "ecommerce-bpo",
    "it-outsourcing",
  ],

  cta: {
    title: "Get an audit before you commit to anything.",
    body: "We will check your profile, your listings, your reviews and your real response time, and send you the written findings within a week. Yours to act on with or without us.",
  },

  seo: {
    title: "Local SEO & Digital Marketing for Small Businesses — Xevantis",
    description:
      "Local SEO, Google Business Profile, reviews, fast lead response and reactivation for dental and medical practices, law firms, pharmacies and local businesses across the US. Measured in booked appointments. Every account stays in your name.",
  },
};
