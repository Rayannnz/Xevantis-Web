import type { ServiceContent } from "./types";
import { CONTACT_HREF, SECONDARY_CTA } from "./shared";

/**
 * A decision guide rather than a service line, so the shared sections are used
 * for comparison content: `benefits` are the four decision factors, `process`
 * is how to run the decision, and `cases` are companies that chose differently.
 */
export const hrVsPeoGuide: ServiceContent = {
  slug: "hr-vs-peo-guide",
  name: "HR vs PEO Guide",
  accent: "sky",
  eyebrow: "Decision Guide",
  summary:
    "A straight comparison of HR outsourcing and a PEO — what each costs, what you give up, and how to tell which one your business needs.",
  trustLabel: "Written from transitions we have run for",

  sections: {
    benefits: {
      title: "The four factors the decision actually turns on.",
      body: "Almost every HR-versus-PEO decision comes down to these. Price is on the list, but it is rarely the one that decides it.",
    },
    process: {
      title: "How to run the decision in six weeks.",
      body: "A sequence that produces a defensible recommendation rather than a preference. Most of the work is establishing your true current cost.",
    },
    tech: {
      title: "What each model does to your systems.",
      body: "A frequently overlooked difference: one model keeps your HR stack, the other largely replaces it.",
    },
    why: {
      title: "Why take this comparison seriously.",
      body: "We sell HR outsourcing, which is a reason to read this critically. Here is why we think it is still the honest comparison.",
    },
    cases: {
      title: "Three companies, three different answers.",
      body: "Two chose a PEO, one chose HR outsourcing, and one later switched. What drove each decision.",
    },
    faq: {
      title: "The detail behind the comparison.",
      body: "Co-employment, liability, benefits, exit costs and the questions PEO sales teams tend not to lead with.",
    },
  },

  hero: {
    title: "HR outsourcing or a PEO? It depends on four things.",
    highlight: "we will say so",
    body: "A PEO is the right answer for a good number of companies, and we do not sell one. Where the model fits you better than ours does, we will say so — this guide exists to make that decision quickly rather than after a nine-month contract.",
    primaryCta: { label: "Get a side-by-side model", href: CONTACT_HREF },
    secondaryCta: SECONDARY_CTA,
    trust: "Comparison models prepared within one business day",
    chips: [
      { value: "4", label: "Factors the decision usually turns on" },
      { value: "6 wks", label: "To a defensible recommendation" },
      { value: "0", label: "PEO products we sell" },
    ],
    figure: "layers",
  },

  overview: {
    eyebrow: "The difference in one page",
    title: "One is a service. The other is a co-employer.",
    body: "HR outsourcing means a provider administers HR while you stay the sole employer. A PEO enters co-employment: your staff are employed jointly, on the PEO's employment infrastructure, using its benefits and its insurance. Everything else — cost, control, compliance, exit difficulty — follows from that single structural difference.",
    panels: [
      {
        heading: "HR outsourcing",
        body: "You remain the sole employer. The provider runs administration, coordination and advice inside your systems. You keep contracts, benefits, culture and every decision.",
      },
      {
        heading: "A PEO",
        body: "Co-employment. Staff sit on the PEO's employment infrastructure, get the PEO's benefits and insurance, and the PEO shares defined employment liability with you.",
      },
      {
        heading: "Where a PEO wins",
        body: "Small headcounts wanting big-company benefits, US companies needing multi-state compliance without entities, and businesses with no HR capability at all.",
      },
      {
        heading: "Where outsourcing wins",
        body: "Companies over roughly 100 staff, employers who care about their own culture and contracts, and anyone who wants to keep hiring and exit decisions entirely internal.",
      },
    ],
    figure: "network",
  },

  included: {
    eyebrow: "The comparison",
    title: "What changes when you sign with a PEO.",
    body: "None of these are hidden — but they are rarely the opening slide. Each one is worth checking against how your business actually runs.",
    items: [
      "Your employees are co-employed by the PEO, not solely by you",
      "Employment contracts are typically reissued on the PEO's terms",
      "Benefits move to the PEO's master plans, and change if you leave",
      "Workers' compensation and liability insurance sit with the PEO",
      "Payroll runs on the PEO's platform, under the PEO's tax IDs",
      "Your HRIS is often replaced by the PEO's system",
      "Pricing is commonly a percentage of payroll rather than a fixed fee",
      "Costs rise automatically with headcount and salary inflation",
      "Exiting means re-establishing benefits, insurance and payroll from scratch",
      "Handbook and policy control usually moves to the PEO's templates",
      "Some hiring and termination processes require PEO approval",
      "Historic HR and payroll data may be harder to extract on exit",
    ],
    note: "None of this makes a PEO the wrong choice. For a 40-person US company that wants Fortune 500 health plans and has no HR function, it is often clearly the right one. It is a trade, and it should be made deliberately.",
    figure: "pipeline",
  },

  benefits: [
    {
      title: "Cost, once you model it properly",
      body: "PEO pricing is usually a percentage of payroll, so it scales with salary inflation and headcount whether or not the service changes. Outsourcing is normally a fixed fee. The crossover point is typically somewhere between 80 and 150 employees.",
      metric: { value: 120, label: "Typical headcount where fixed-fee outsourcing overtakes a PEO" },
      link: { label: "See how to model it", href: "#process" },
      figure: "dashboard",
    },
    {
      title: "Control over hiring and exits",
      body: "Under co-employment some decisions require PEO agreement, and its risk appetite is not necessarily yours. If your business needs to move quickly on hiring or handle exits its own way, that friction matters more than the price difference.",
      metric: { value: 100, suffix: "%", label: "Of decisions retained under HR outsourcing" },
      link: { label: "How HR outsourcing works", href: "/services/hr-outsourcing" },
      figure: "network",
    },
    {
      title: "Benefits: better plans, or your plans",
      body: "A PEO pools employees to buy health and insurance benefits a smaller employer could not access alone. That is a genuine advantage, particularly in the US — and it reverses on exit, when you have to source cover again from a standing start.",
      metric: { value: 3, suffix: " mo", label: "Typical lead time to re-establish benefits after a PEO exit" },
      link: { label: "Read the exit questions", href: "#faq" },
      figure: "layers",
    },
    {
      title: "How hard it is to leave",
      body: "This is the factor most often skipped and most often regretted. Unwinding co-employment means new contracts, new benefits, new insurance, new payroll and a data extraction negotiation. Ask about it before signing, not afterwards.",
      metric: { value: 6, suffix: " mo", label: "Typical time to fully unwind a PEO arrangement" },
      link: { label: "Talk it through with us", href: CONTACT_HREF },
      figure: "pulse",
    },
  ],

  process: [
    {
      title: "Establish your true current cost",
      duration: "Week 1",
      body: "HR salaries, payroll processing, benefits brokerage, insurance, software licences and the management time absorbed by HR admin. Most companies underestimate this by a third, which distorts every comparison that follows.",
    },
    {
      title: "Define what you will not give up",
      duration: "Week 1",
      body: "Contracts, handbook, benefits design, hiring speed, exit process, HRIS. Write the list before speaking to any provider — it is much harder to hold once you are in a sales process.",
    },
    {
      title: "Model both options at three horizons",
      duration: "Week 2–3",
      body: "Today's headcount, plus your two-year and five-year plans. Percentage-of-payroll pricing and fixed-fee pricing diverge sharply over time, and the decision should be made on the trajectory rather than year one.",
    },
    {
      title: "Test the edge cases",
      duration: "Week 3–4",
      body: "Ask both models how they handle a dismissal, a restructure, an acquisition and a bad-leaver dispute. The answers separate the options far more clearly than the pricing does.",
    },
    {
      title: "Price the exit",
      duration: "Week 4–5",
      body: "Get the exit terms, notice period, data extraction process and benefits transition in writing from any PEO before signing. If the exit is vague, that is itself the finding.",
    },
    {
      title: "Decide and sequence",
      duration: "Week 5–6",
      body: "Make the call against the four factors, then plan the transition around a benefits renewal or tax year boundary. Timing the switch badly can cost more than choosing the wrong model.",
    },
  ],

  tech: [
    { name: "Workday", category: "HRIS — kept under outsourcing" },
    { name: "BambooHR", category: "HRIS — kept under outsourcing" },
    { name: "HiBob", category: "HRIS — kept under outsourcing" },
    { name: "Personio", category: "HRIS — kept under outsourcing" },
    { name: "Greenhouse", category: "ATS — kept under outsourcing" },
    { name: "Workable", category: "ATS — kept under outsourcing" },
    { name: "TriNet", category: "PEO platform" },
    { name: "Justworks", category: "PEO platform" },
    { name: "Insperity", category: "PEO platform" },
    { name: "ADP TotalSource", category: "PEO platform" },
    { name: "Deel", category: "EOR & global payroll" },
    { name: "Remote", category: "EOR & global payroll" },
    { name: "Gusto", category: "Payroll" },
    { name: "Sage Payroll", category: "Payroll" },
  ],

  differentiators: [
    {
      title: "We do sell one side of this",
      body: "We provide HR outsourcing and we do not provide a PEO. Read the comparison with that in mind — and check the claims, because they are all verifiable.",
    },
    {
      title: "We tell clients to use a PEO",
      body: "Several times a year we recommend a PEO and lose the engagement. For a small US company with no HR function and a need for competitive health plans, it is usually the right answer.",
    },
    {
      title: "Built from real transitions",
      body: "This guide comes from companies we have moved onto outsourcing, and from several we have helped exit a PEO. The exit friction described here is observed rather than theoretical.",
    },
    {
      title: "The exit question comes first",
      body: "Most comparisons lead with monthly cost. We lead with how hard the arrangement is to leave, because that is the factor clients most often tell us they wish they had weighted higher.",
    },
    {
      title: "No referral fees either way",
      body: "We take no commission from PEOs, brokers or software vendors. Our recommendation carries no commercial interest beyond our own service, which we have declared.",
    },
    {
      title: "A model, not a brochure",
      body: "We will build you a side-by-side cost model at three headcount horizons using your real numbers, and you keep it whether or not you engage us.",
    },
  ],

  cases: [
    {
      industry: "US technology, 45 staff",
      title: "Chose a PEO — and it was the right call",
      challenge:
        "A 45-person company across six states, no HR function, and health plan quotes far worse than employees were used to at larger employers.",
      solution:
        "We recommended a PEO. Multi-state compliance, workers' compensation and pooled benefits genuinely outweighed the loss of control at that size, and we said so.",
      results: [
        { value: 6, label: "States covered without entities" },
        { value: 31, suffix: "%", label: "Better benefit value than standalone quotes" },
        { value: 0, label: "Engagements won by us" },
      ],
      accent: "sky",
      figure: "network",
    },
    {
      industry: "UK logistics, 480 staff",
      title: "Left a PEO after the percentage caught up",
      challenge:
        "Payroll costs rising with headcount and wage inflation, meaning the PEO fee grew 40% in two years while the service delivered stayed identical.",
      solution:
        "A fixed-fee HR outsourcing and payroll arrangement, sequenced around the benefits renewal date, with a six-month unwind of the co-employment structure.",
      results: [
        { value: 42, suffix: "%", label: "Lower annual HR and payroll cost" },
        { value: 6, suffix: " mo", label: "To fully unwind co-employment" },
        { value: 100, suffix: "%", label: "Of contracts reissued on their own terms" },
      ],
      accent: "mint",
      figure: "dashboard",
    },
    {
      industry: "Healthcare services, 210 staff",
      title: "Kept the PEO but moved payroll out",
      challenge:
        "Happy with the PEO's benefits and insurance, frustrated by payroll errors and an inability to get answers on statutory filing.",
      solution:
        "A hybrid: benefits and insurance stayed with the PEO, payroll processing moved to a dedicated pod. Not every decision has to be all or nothing.",
      results: [
        { value: 99.98, decimals: 2, suffix: "%", label: "Payslip accuracy after transition" },
        { value: 0, label: "Change to employee benefits" },
        { value: 3, suffix: " mo", label: "Transition time" },
      ],
      accent: "lilac",
      figure: "layers",
    },
  ],

  quotes: [
    {
      quote:
        "They told us to sign with a PEO and walked away from the deal. Three years later, when we outgrew it, they were the first call we made.",
      name: "Jordan Feltz",
      role: "Chief Executive",
      company: "Duonode",
      initials: "JF",
      rating: 5,
    },
    {
      quote:
        "Nobody had explained that the fee was a percentage of payroll. Our costs rose 40% in two years for exactly the same service.",
      name: "Elaine Murdoch",
      role: "Finance Director",
      company: "Peakline",
      initials: "EM",
      rating: 5,
    },
    {
      quote:
        "The exit questions in this guide are the ones I wish someone had made me ask before we signed the first time.",
      name: "Samir Haddad",
      role: "HR Director",
      company: "Gridworks",
      initials: "SH",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "What exactly is co-employment?",
      answer:
        "A legal arrangement where the PEO and your company are both employers of record for defined purposes. The PEO handles payroll, tax, benefits and some compliance; you direct the day-to-day work. Employment liability is shared according to the contract.",
    },
    {
      question: "Is a PEO cheaper than HR outsourcing?",
      answer:
        "At small headcounts, usually yes, especially in the US where pooled benefits carry real value. Because PEO pricing is typically a percentage of payroll, fixed-fee outsourcing tends to overtake it somewhere between 80 and 150 employees.",
    },
    {
      question: "Do we lose control of hiring and firing with a PEO?",
      answer:
        "Not entirely, but some decisions require PEO agreement because it shares the liability. Its risk appetite may be more conservative than yours. Ask any PEO to walk you through a contested dismissal before you sign.",
    },
    {
      question: "What happens to our employee benefits if we leave a PEO?",
      answer:
        "They end, because they were the PEO's plans. You need to source and implement replacement cover, which typically takes about three months and should be timed around a renewal date rather than a contract end date.",
    },
    {
      question: "Does a PEO reduce our employment liability?",
      answer:
        "It shares some of it, within the limits of the contract — usually payroll tax, workers' compensation and certain statutory obligations. It does not remove liability for how you actually treat your people.",
    },
    {
      question: "Which is better for multi-country employment?",
      answer:
        "Often neither — that is usually an employer of record question, which is a different product again. A PEO is generally a US structure; outside the US the equivalents work differently and should be assessed per market.",
    },
    {
      question: "Can we keep our own HR system with a PEO?",
      answer:
        "Sometimes, but most PEOs prefer their own platform and pricing often assumes it. Ask specifically, because losing your HRIS also means losing the reporting and integrations built around it.",
    },
    {
      question: "How long does it take to exit a PEO?",
      answer:
        "About six months in the cases we have handled. New contracts, new benefits, new insurance, new payroll and a data extraction negotiation, ideally sequenced around a benefits renewal.",
    },
    {
      question: "Can we use both?",
      answer:
        "Yes, and it is underused. One of our clients kept the PEO's benefits and insurance while moving payroll to a dedicated pod. The decision does not have to be all or nothing.",
    },
    {
      question: "What should we ask a PEO before signing?",
      answer:
        "How the fee changes with salary inflation; who decides on a contested dismissal; what happens to benefits on exit; how historic data is extracted and in what format; and what the notice period actually is.",
    },
    {
      question: "Are you biased?",
      answer:
        "We sell HR outsourcing and no PEO product, so yes, we have an interest. We disclose it, we take no referral fees either way, and we recommend a PEO several times a year — including in one of the case studies above.",
    },
    {
      question: "Can you just build us the comparison?",
      answer:
        "Yes. Send your headcount, payroll cost, current HR spend and two-year plan, and we will build a side-by-side model at three horizons within a business day. You keep it regardless of what you decide.",
    },
  ],

  related: [
    "hr-outsourcing",
    "payroll-outsourcing",
    "hr-for-retail",
    "small-business",
    "finance-outsourcing",
    "admin-support",
  ],

  cta: {
    title: "Get the model built with your numbers.",
    body: "Send your headcount, payroll cost and two-year plan. We will build the side-by-side comparison at three horizons within one business day — including the cases where our answer is a PEO.",
  },

  seo: {
    title: "HR Outsourcing vs PEO | Cost, Control & Exit Comparison — Valentisys",
    description:
      "A straight comparison of HR outsourcing and a PEO: co-employment, cost at scale, control over hiring and exits, benefits, and what leaving actually involves. Written by a provider who sells one side and says so.",
  },
};
