import type { Article, Author } from "./types";

/**
 * Article bodies, keyed by resource slug.
 *
 * Deliberately a separate module from the catalogue in `index.ts`. The browser
 * on `/resources` is a client component and imports `RESOURCES`; if the bodies
 * lived on those objects, every word of all fifteen articles would ship in the
 * client bundle to render a grid of headlines. Only the detail route imports
 * this file, and only on the server.
 *
 * Figures throughout are Valentisys' own delivery data, framed as such.
 */

const MARCUS: Author = {
  name: "Marcus Delgado",
  role: "Head of CX Transformation",
  initials: "MD",
  accent: "lilac",
};

const PRIYA: Author = {
  name: "Priya Raghavan",
  role: "Delivery Lead, Finance Operations",
  initials: "PR",
  accent: "mint",
};

const TOM: Author = {
  name: "Tom Okonkwo",
  role: "Principal, IT Outsourcing",
  initials: "TO",
  accent: "sky",
};

const SARAH: Author = {
  name: "Sarah Whitfield",
  role: "People Operations Lead",
  initials: "SW",
  accent: "blush",
};

const DANNY: Author = {
  name: "Danny Fitzgerald",
  role: "Head of Revenue Operations",
  initials: "DF",
  accent: "sun",
};

const AOIFE: Author = {
  name: "Aoife Brennan",
  role: "Quality & Enablement Lead",
  initials: "AB",
  accent: "mint",
};

export const ARTICLES: Record<string, Article> = {
  "marcus-delgado-gen-ai-consumer-goods": {
    standfirst:
      "Six months after rolling drafted replies out across a 300-seat consumer goods floor, Marcus Delgado sat down to talk about what actually changed — and about the two queues he still refuses to automate.",
    author: MARCUS,
    body: [
      {
        kind: "para",
        text: "We did not start with a model. We started with a transcript review: two thousand contacts, read by four people, sorted into what the agent had to decide and what the agent merely had to type. That split turned out to be the whole project. Roughly 60% of the words leaving our floor were assembly — pulling an order status, restating a returns window, formatting a courier reference. None of it needed judgement. All of it took time.",
      },
      { kind: "heading", text: "What we automated first" },
      {
        kind: "para",
        text: "Drafting, not sending. The model proposes a reply, the agent edits and sends. That sounds like a half-measure and it is the entire point: the agent stays accountable for the message, so the quality bar does not quietly move. We measured the edit rate obsessively in the first eight weeks, because a draft nobody edits is either very good or nobody is reading it.",
      },
      {
        kind: "figures",
        items: [
          { value: "38%", label: "Drop in average handle time" },
          { value: "71%", label: "Drafts sent with edits" },
          { value: "4.8", label: "CSAT, unchanged from baseline" },
        ],
      },
      {
        kind: "para",
        text: "The CSAT number is the one I care about. Handle time is easy to move and easy to move badly — you can always get faster by being worse. Holding satisfaction flat while cutting more than a third of the handling time is the result that made the case internally.",
      },
      {
        kind: "quote",
        text: "The moment you let the model send unsupervised, you have not automated the work. You have transferred it to whoever handles the complaint.",
        attribution: "Marcus Delgado",
      },
      { kind: "heading", text: "The two queues we left alone" },
      {
        kind: "para",
        text: "Product safety and bereavement. Both are low volume, both are high consequence, and both are conversations where a fluent, confident, slightly wrong answer is far worse than a slow one. Safety contacts carry regulatory weight and need a named person on the file. Bereavement contacts need someone who can hear what is not being said and step outside the script entirely.",
      },
      {
        kind: "callout",
        title: "The rule we settled on",
        text: "If a wrong answer costs more than a slow answer, a person writes it. That single sentence has resolved more automation arguments than any scoring matrix we tried.",
      },
      { kind: "heading", text: "What surprised us" },
      {
        kind: "list",
        items: [
          "Hallucinations were not the failure mode. Overconfidence in tone was — drafts that sounded certain about a delivery date the system had not actually confirmed.",
          "Senior agents edited more than new ones, not less. They knew what was missing.",
          "Coverage of long-tail languages improved more than volume languages, because that was where our macros had always been thinnest.",
          "Training time for new starters went up, not down. They now have to learn the work and learn when the draft is wrong.",
        ],
      },
      {
        kind: "para",
        text: "That last point is the one most teams underestimate. You are not removing expertise from the floor; you are moving it earlier. The agent who can spot a plausible-but-wrong draft is doing a harder job than the agent who was copying a macro, and the onboarding has to reflect that.",
      },
    ],
    takeaways: [
      "Separate assembly from judgement before you evaluate a single model.",
      "Draft-and-edit keeps accountability on the floor where it belongs.",
      "Watch satisfaction, not handle time — speed is the easy metric to fake.",
      "Budget more onboarding, not less: spotting a wrong draft is a senior skill.",
    ],
  },

  "home-furnishings-cx-playbook": {
    standfirst:
      "Delivery windows, flat-pack damage and a fourteen-week lead time. Home furnishings support lives or dies on three moments — here is how to staff around them.",
    author: AOIFE,
    body: [
      {
        kind: "para",
        text: "Furniture is the only retail category where the customer waits a quarter of a year and then has to be physically present to receive the thing they bought. That structure, not the product, dictates the support model. Contacts do not arrive evenly; they cluster hard around three points, and a rota built on average weekly volume will be wrong at all three.",
      },
      { kind: "heading", text: "The three moments" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Week two after order — the confirmation gap. The excitement has faded, nothing has arrived, and the customer wants proof the order is real.",
          "The delivery window — a 48-hour band where contact volume runs four to six times baseline and patience is at its lowest.",
          "First 72 hours after delivery — damage, missing fixings, and assembly. Almost every review is written in this window.",
        ],
      },
      {
        kind: "para",
        text: "Across the furnishings programmes we run, those three bands account for the large majority of contacts and nearly all of the negative sentiment. The quiet weeks between them are quiet precisely because nothing is happening — which is also why proactive contact in week two removes work rather than creating it.",
      },
      {
        kind: "figures",
        items: [
          { value: "3", label: "Moments that generate most contacts" },
          { value: "5×", label: "Peak volume in the delivery window" },
          { value: "72h", label: "Where the reviews get written" },
        ],
      },
      { kind: "heading", text: "Staff the window, not the week" },
      {
        kind: "para",
        text: "The instinct is to smooth the rota. Resist it. Delivery windows are known in advance — they are on the manifest — so the volume is forecastable to the day. We build the rota off the delivery schedule rather than off last month's contact volume, and the difference in queue times during peak bands is substantial.",
      },
      {
        kind: "quote",
        text: "You already know when the customer is going to be anxious. It is written on the delivery manifest. Staff to that, not to an average.",
        attribution: "Aoife Brennan",
      },
      { kind: "heading", text: "Give the desk authority over the fix" },
      {
        kind: "para",
        text: "The single biggest determinant of resolution time in this category is whether the agent can dispatch a replacement part without a second approval. A missing bag of dowels becomes a two-week saga when it needs a manager, a supplier ticket and a courier booking. Give the desk a capped budget for parts and small goodwill, and the same problem closes on first contact.",
      },
      {
        kind: "callout",
        title: "Set the cap deliberately",
        text: "Make the parts-and-goodwill cap high enough to cover the genuinely common fixes, and audit weekly rather than approving individually. Approval queues cost more in handling time than the occasional over-generous credit costs in cash.",
      },
      { kind: "heading", text: "Write the damage flow first" },
      {
        kind: "para",
        text: "Damage is the contact type with the widest quality spread between a good desk and a poor one, because it needs photographs, a judgement about repairability and a decision the customer will accept. Build that flow before anything else: what to ask for, what qualifies for replacement versus part, and who decides. Everything else in furnishings support is comparatively mechanical.",
      },
    ],
    takeaways: [
      "Build the rota from the delivery manifest, not from average weekly volume.",
      "Proactive contact in week two removes more work than it creates.",
      "A capped parts budget on the desk beats an approval queue every time.",
      "Design the damage flow first — it has the widest quality spread.",
    ],
  },

  "four-million-tickets-fcr": {
    standfirst:
      "We pulled two years of contacts across forty pods to find out what actually moves first-contact resolution. The biggest lever was not tooling, and it was not headcount.",
    author: AOIFE,
    body: [
      {
        kind: "para",
        text: "First-contact resolution is the metric everyone reports and few define the same way. Before any of the numbers below meant anything we had to settle the definition: a contact is resolved on first contact if no further inbound contact on the same issue arrives within seven days. Not 'the agent marked it closed'. That change alone moved our measured FCR down by a double-digit margin and made every subsequent comparison honest.",
      },
      { kind: "heading", text: "What we found" },
      {
        kind: "figures",
        items: [
          { value: "7d", label: "Re-contact window in our definition" },
          { value: "40", label: "Delivery pods in the sample" },
          { value: "#1", label: "Lever: decision authority" },
        ],
      },
      {
        kind: "para",
        text: "Ranked by correlation with FCR, the strongest single factor across the sample was how much the agent was allowed to decide without escalating. Pods where agents could issue refunds, credits and replacements up to a meaningful threshold resolved materially more contacts first time than pods with equivalent tooling, equivalent tenure and tighter authority.",
      },
      {
        kind: "list",
        items: [
          "Decision authority — the widest effect, and the cheapest to change.",
          "Tenure on the specific account, not tenure in support generally.",
          "Whether the knowledge base was written by the pod or handed to it.",
          "Channel: asynchronous channels resolved worse, largely because clarification costs a full round trip.",
        ],
      },
      { kind: "heading", text: "The tooling result" },
      {
        kind: "para",
        text: "Tooling mattered, but less than the industry conversation suggests, and mostly through one mechanism: whether the agent could see the customer's order and account state on one screen. Pods that had to alt-tab between systems lost time and lost context. Beyond that consolidation, additional tooling showed sharply diminishing returns.",
      },
      {
        kind: "quote",
        text: "We kept looking for a tooling answer because tooling is procurable. The answer was a permissions matrix somebody wrote in 2019 and nobody had revisited.",
        attribution: "Aoife Brennan",
      },
      { kind: "heading", text: "The re-contact trap" },
      {
        kind: "para",
        text: "A caution on optimising this metric directly. FCR can be improved by making it harder to come back — burying the contact route, stretching response times on follow-ups, closing tickets aggressively. All three show up as an improvement. All three are worse for the customer. Pair FCR with re-contact rate and satisfaction, and treat any movement in FCR that is not matched in those two as a measurement artefact rather than a win.",
      },
      {
        kind: "callout",
        title: "Before you benchmark",
        text: "Publish your FCR definition alongside the number. A figure quoted without the re-contact window is not comparable to anyone else's, including your own from last year.",
      },
    ],
    takeaways: [
      "Define FCR by re-contact within a fixed window, not by agent disposition.",
      "Decision authority outranked tooling, tenure and channel in our sample.",
      "One-screen account context is the tooling change that pays; the rest tails off.",
      "Always pair FCR with re-contact rate — the metric is easy to game.",
    ],
  },

  "nearshore-it-squad-staffing": {
    standfirst:
      "Four hours of overlap changes what a squad can own. A look at the staffing maths behind a twenty-one-day start.",
    author: TOM,
    body: [
      {
        kind: "para",
        text: "The nearshore argument is usually made on cost and it is the least interesting version of the argument. The thing that actually changes delivery is overlap: how many hours a day your squad and their squad are both awake and both working. Below about three hours, the team can execute but cannot design. Above four, they can own a problem end to end.",
      },
      { kind: "heading", text: "Why overlap decides ownership" },
      {
        kind: "para",
        text: "Design work is conversational. It needs the whiteboard argument, the half-formed objection, the 'wait, what happens if the payment fails here'. None of that survives being written down and answered eighteen hours later. What survives asynchronous handover is well-specified execution — and a team that only ever receives well-specified execution never develops the context to specify anything itself.",
      },
      {
        kind: "figures",
        items: [
          { value: "4h", label: "Overlap where ownership becomes viable" },
          { value: "21d", label: "Typical time to a working squad" },
          { value: "0", label: "Handover documents in a same-day loop" },
        ],
      },
      {
        kind: "quote",
        text: "Offshore squads get told what to build. Nearshore squads get to argue about it. That argument is where the engineering actually happens.",
        attribution: "Tom Okonkwo",
      },
      { kind: "heading", text: "The twenty-one day maths" },
      {
        kind: "para",
        text: "A twenty-one day start is not a recruiting claim, it is a bench claim. It works because the people already exist — in a delivery hub, on an adjacent engagement, with the language and the stack already verified. What takes the three weeks is context, not hiring: repository access, domain walkthroughs, a first shipped change, and the security paperwork that nobody enjoys but nobody can skip.",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Days 1–5: access, environments, and a guided tour of the codebase with someone who knows why it looks like that.",
          "Days 6–12: paired work on real tickets, deliberately small, deliberately shipped.",
          "Days 13–21: the squad takes a thin slice end to end, including the on-call for what they shipped.",
        ],
      },
      { kind: "heading", text: "What to check before you sign" },
      {
        kind: "para",
        text: "Ask who specifically is starting, not how many. Ask whether they are on another engagement this month. Ask what happens when one of them leaves — whether you get a named replacement with a handover, or a ticket in a queue. The difference between a squad and a staffing line item is entirely in those answers.",
      },
      {
        kind: "callout",
        title: "The overlap test",
        text: "Count the hours where both teams are contractually working, not the hours where someone could theoretically join a call. Goodwill overlap disappears the moment the engagement gets difficult.",
      },
    ],
    takeaways: [
      "Overlap hours, not hourly rate, determine what a squad can own.",
      "Below three hours of overlap you get execution; above four you get design.",
      "A three-week start is a bench claim — ask who specifically is joining.",
      "Measure contractual overlap, not the goodwill kind.",
    ],
  },

  "finance-close-outsourcing-playbook": {
    standfirst:
      "Reconciliations first, judgement last. The handover order that keeps your controller sleeping through the first outsourced close.",
    author: PRIYA,
    body: [
      {
        kind: "para",
        text: "Most failed finance handovers fail in the same way: everything moves at once, on a month boundary, and the first close under the new arrangement is also the first time anyone has tested it. The fix is unglamorous. Move the work in the order of how mechanical it is, and never let a close be the first run of a process.",
      },
      { kind: "heading", text: "Order the handover by judgement, not by volume" },
      {
        kind: "para",
        text: "The temptation is to move the biggest queues first, because that is where the cost sits. Move the most mechanical first instead. Bank and card reconciliations have a right answer that can be checked by anyone; accruals and provisions do not. Building trust on work with a verifiable output means that when you do hand over judgement, both sides already know the quality baseline.",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Bank, card and intercompany reconciliations — mechanical, verifiable, high volume.",
          "Accounts payable and receivable processing, including the exception queues.",
          "Fixed assets, prepayments and standard recurring journals.",
          "Accruals and provisions, run in parallel for two closes before transfer.",
          "Flux commentary and management reporting, last and only with a named reviewer.",
        ],
      },
      {
        kind: "figures",
        items: [
          { value: "2", label: "Parallel closes before judgement moves" },
          { value: "30d", label: "Typical transition for stages one to three" },
          { value: "1", label: "Named reviewer, retained in-house throughout" },
        ],
      },
      { kind: "heading", text: "Run the first close twice" },
      {
        kind: "para",
        text: "Parallel running is expensive and everyone tries to skip it. Do not. For the two closes either side of a judgement handover, both teams produce the output and the numbers are compared line by line before anything is filed. The variances you find are almost never arithmetic — they are differences in assumption that would otherwise have surfaced in an audit.",
      },
      {
        kind: "quote",
        text: "Every variance we found in parallel running was an assumption nobody had written down. That is the actual deliverable of the exercise.",
        attribution: "Priya Raghavan",
      },
      { kind: "heading", text: "What stays in-house" },
      {
        kind: "para",
        text: "The final review and sign-off, always. Not because the outsourced team cannot do it, but because accountability for the numbers has to sit with someone who is accountable for the business. Keep a controller who reads the flux commentary and can challenge it. An arrangement where nobody in-house can interrogate the close is not an outsourcing arrangement, it is an abdication.",
      },
      {
        kind: "callout",
        title: "Document the assumptions before day one",
        text: "Write down every materiality threshold, cut-off convention and estimation method currently living in someone's head. This is the single highest-value week of work in the entire transition, and it is always the one that gets compressed.",
      },
    ],
    takeaways: [
      "Sequence the handover by how mechanical the work is, not how large it is.",
      "Run two parallel closes either side of any judgement transfer.",
      "Variances in parallel running are undocumented assumptions — capture them.",
      "Final review and sign-off stay in-house, permanently.",
    ],
  },

  "hr-shared-services-benchmark": {
    standfirst:
      "Case cost, first-touch rate and time-to-close across twenty-eight shared service desks, split by headcount band.",
    author: SARAH,
    body: [
      {
        kind: "para",
        text: "HR shared services benchmarks are unusually hard to compare, because the scope hiding behind the phrase varies enormously. A desk that handles payroll queries, absence and policy questions is not doing the same job as one that also runs onboarding, right-to-work checks and case management. Every figure below is scoped to the first definition, and we have said so wherever a desk in our sample sat outside it.",
      },
      { kind: "heading", text: "Case cost by band" },
      {
        kind: "para",
        text: "Cost per case falls steeply up to roughly two thousand employees served and then flattens. That shape is consistent across the sample and it matters for planning: the efficiency argument for consolidating two small desks is strong, and the argument for consolidating two large ones is mostly about consistency rather than cost.",
      },
      {
        kind: "figures",
        items: [
          { value: "2k", label: "Employees served where cost curve flattens" },
          { value: "28", label: "Desks in the sample" },
          { value: "3", label: "Headcount bands compared" },
        ],
      },
      { kind: "heading", text: "First-touch rate is the quality signal" },
      {
        kind: "para",
        text: "Of the measures we collected, first-touch resolution correlated most closely with employee satisfaction — more closely than time-to-close, which surprised us. The reading is intuitive on reflection: an employee asking about their parental leave entitlement wants an answer, and a fast acknowledgement followed by a three-day wait scores worse than a slower single reply that actually resolves the question.",
      },
      {
        kind: "quote",
        text: "Acknowledgement is not service. We have watched desks optimise their first-response SLA into the ground while satisfaction went nowhere.",
        attribution: "Sarah Whitfield",
      },
      { kind: "heading", text: "Where the desks diverged most" },
      {
        kind: "list",
        items: [
          "Policy interpretation. Desks with a written escalation path to an HR business partner resolved faster than desks where agents guessed or deflected.",
          "Payroll adjacency. Desks that could see payroll data resolved pay queries at first touch; desks that had to refer them did not.",
          "Case categorisation. Sprawling taxonomies produced worse reporting and no better routing than compact ones.",
          "Language coverage in multi-country desks, which drove more variance in satisfaction than any staffing ratio.",
        ],
      },
      {
        kind: "callout",
        title: "Comparing your own numbers",
        text: "Before benchmarking, list what your desk actually handles and strip out anything the comparison set does not. Most published HR shared services figures are not like-for-like, and the scope difference is usually larger than the performance difference.",
      },
    ],
    takeaways: [
      "Scope your desk before comparing anything — most benchmarks are not like-for-like.",
      "Cost per case flattens around two thousand employees served.",
      "First-touch resolution tracks satisfaction better than time-to-close.",
      "Visibility of payroll data is the single biggest resolution unlock.",
    ],
  },

  "sales-ops-outsourcing-white-paper": {
    standfirst:
      "Routing, enrichment and CRM hygiene are not admin. A costed model for the pod that sits behind quota — and the point at which building it in-house stops making sense.",
    author: DANNY,
    body: [
      {
        kind: "para",
        text: "Sales operations gets treated as overhead because its output is legible only when it fails. Nobody praises a routing rule that worked. Everybody notices the enterprise lead that sat unassigned over a weekend. This paper sets out what the function actually costs, what it returns, and where the build-versus-outsource line sits for a mid-market revenue organisation.",
      },
      { kind: "heading", text: "What the pod actually does" },
      {
        kind: "list",
        items: [
          "Lead routing and territory logic, including the exception handling nobody documents.",
          "Enrichment and deduplication, run continuously rather than in quarterly clean-up sprints.",
          "CRM hygiene: stage discipline, close-date realism, and the field-level validation that makes forecasting possible.",
          "Quote and contract support, where the cost of an error is measured in legal review hours.",
          "Reporting maintenance — the dashboards that quietly break when someone renames a field.",
        ],
      },
      { kind: "heading", text: "The cost of not having one" },
      {
        kind: "para",
        text: "The expensive failure is not the missed lead. It is the forecast that was wrong because stage definitions drifted, and the quarter that was planned against it. When we audit revenue organisations without a dedicated ops function, the recurring pattern is that account executives are doing ops work badly, in time they would otherwise spend selling, and the resulting data is trusted more than it deserves to be.",
      },
      {
        kind: "figures",
        items: [
          { value: "~20%", label: "AE time typically lost to ops work" },
          { value: "2–3", label: "Headcount where a dedicated pod pays back" },
          { value: "1", label: "Owner needed in-house, always" },
        ],
      },
      {
        kind: "quote",
        text: "You are already paying for sales operations. You are paying for it at account executive rates, and getting it done by people who would rather be selling.",
        attribution: "Danny Fitzgerald",
      },
      { kind: "heading", text: "Build or outsource" },
      {
        kind: "para",
        text: "Build when your routing logic is a genuine competitive asset, when your CRM is heavily customised in ways that take months to learn, or when the function is large enough to offer a career path. Outsource when the work is real but sub-scale — when you need two people's worth of capability and one person's worth of budget, and when hiring a single ops manager would leave you with a single point of failure and no cover.",
      },
      {
        kind: "callout",
        title: "The one role to keep",
        text: "Whatever you outsource, retain someone in-house who owns the definitions — what a qualified lead is, what each stage means, when a deal is closed. Those are commercial decisions. Everything downstream of them is operational and can sit with a pod.",
      },
      { kind: "heading", text: "How to measure it" },
      {
        kind: "para",
        text: "Do not measure a sales ops pod on ticket volume; it rewards the wrong behaviour. Measure it on forecast accuracy, on time-to-first-touch for inbound leads, and on the proportion of pipeline with clean, complete records. Those three tell you whether the function is doing its job, and none of them can be inflated by working harder on the wrong things.",
      },
    ],
    takeaways: [
      "Sales ops is already being paid for — usually at account executive rates.",
      "A dedicated pod typically pays back around two to three headcount of demand.",
      "Keep definition ownership in-house; outsource everything downstream of it.",
      "Measure forecast accuracy and time-to-first-touch, never ticket volume.",
    ],
  },

  "retail-peak-season-cx": {
    standfirst:
      "Everyone hires for November. Fewer plan for the January queue those hires leave behind.",
    author: AOIFE,
    body: [
      {
        kind: "para",
        text: "Peak staffing is a solved problem in the narrow sense — you can always find bodies for November. The unsolved problem is what those bodies know, and what happens to the contacts they handled once they have gone. Training debt is the backlog of poorly-resolved contacts that comes back as re-contacts, returns disputes and refund escalations in the new year.",
      },
      { kind: "heading", text: "Where the debt comes from" },
      {
        kind: "list",
        items: [
          "Compressed training, where a two-week induction becomes three days because the volume has already started.",
          "Macro dependence, which gets a new starter productive quickly and leaves them helpless the moment a contact is slightly unusual.",
          "Absent escalation cover, so a temporary agent guesses rather than waits.",
          "No feedback loop — the agent has left before anyone reviews the contacts they mishandled.",
        ],
      },
      { kind: "heading", text: "What actually works" },
      {
        kind: "para",
        text: "Split the queue rather than the training. Route the genuinely simple contact types — order status, delivery windows, straightforward returns — to seasonal staff with a tight, well-drilled scope, and keep everything else with the permanent team. A narrow scope taught properly beats a broad scope taught badly, and it makes the seasonal cohort productive faster.",
      },
      {
        kind: "figures",
        items: [
          { value: "3", label: "Contact types is a workable seasonal scope" },
          { value: "Jan", label: "When peak's shortcuts arrive" },
          { value: "1:8", label: "Escalation cover ratio we aim for at peak" },
        ],
      },
      {
        kind: "quote",
        text: "A temporary agent who is excellent at three things is worth more than one who is vaguely aware of thirty.",
        attribution: "Aoife Brennan",
      },
      { kind: "heading", text: "Staff the exit, not just the entrance" },
      {
        kind: "para",
        text: "Plan the January team before you plan the November one. Someone has to own the contacts that come back, and that someone should be permanent, briefed on what the seasonal scope was, and resourced for a queue that is smaller in volume but heavier per contact. Budget for it in the peak plan, because it is a cost of peak whether or not you account for it there.",
      },
    ],
    takeaways: [
      "Narrow the seasonal scope instead of compressing the seasonal training.",
      "Keep escalation cover staffed — guessing is what creates the January queue.",
      "Plan and fund the post-peak team as part of the peak budget.",
    ],
  },

  "ai-assisted-qa-interview": {
    standfirst:
      "Scoring every contact instead of eight a month sounds like a straightforward upgrade. The team lead who ran it explains what it did to coaching — and to trust.",
    author: AOIFE,
    body: [
      {
        kind: "para",
        text: "Traditional quality assurance samples. A reviewer scores six to ten contacts per agent per month, which for a busy agent is well under one percent of their work. Every coaching conversation therefore starts with a caveat: this is what we happened to look at. Moving to full coverage removes the caveat, and that turns out to change the conversation more than the scores do.",
      },
      { kind: "heading", text: "What changed immediately" },
      {
        kind: "para",
        text: "Disputes about representativeness disappeared. Under sampling, a poor score could always be explained away as a bad day or an unlucky pick, and often that explanation was correct. With every contact scored, patterns are visible and arguments move on to what to do about them. Coaching sessions got shorter and more specific almost overnight.",
      },
      {
        kind: "figures",
        items: [
          { value: "<1%", label: "Coverage under manual sampling" },
          { value: "100%", label: "Coverage after the change" },
          { value: "200", label: "Seats on the floor" },
        ],
      },
      {
        kind: "quote",
        text: "We stopped arguing about whether the sample was fair and started arguing about the actual behaviour. That is a much better argument to be having.",
        attribution: "Aoife Brennan",
      },
      { kind: "heading", text: "What went wrong first" },
      {
        kind: "para",
        text: "We published scores before we had calibrated them, and the floor lost confidence in the system within a fortnight. Automated scoring is harsh on things it can measure — greeting present, hold procedure followed — and blind to things it cannot, like an agent who defuses a genuinely angry customer through tone alone. Agents noticed the gap immediately, and they were right to.",
      },
      {
        kind: "list",
        items: [
          "Calibrate against human reviewers on a large sample before anyone sees a score.",
          "Publish what the system cannot assess, explicitly, so nobody has to guess.",
          "Keep a human review of any contact where the automated score would trigger a formal process.",
          "Let agents challenge a score, and track how often challenges succeed — that is your accuracy signal.",
        ],
      },
      { kind: "heading", text: "Where it earned its place" },
      {
        kind: "para",
        text: "Not in performance management, which is where most people expect. In finding process faults. Full coverage surfaces the contact types that go wrong systematically, across every agent, which is nearly always a broken policy or a missing permission rather than a training problem. We fixed more by rewriting three refund rules than by coaching anybody.",
      },
      {
        kind: "callout",
        title: "The framing that made it land",
        text: "We introduced it as a way to find out what the floor is being set up to fail at, not as a way to find out who is failing. That framing was not spin — it is where the value actually was.",
      },
    ],
    takeaways: [
      "Full coverage ends the argument about whether the sample was fair.",
      "Calibrate against human reviewers before publishing a single score.",
      "State plainly what the system cannot judge; agents will spot it anyway.",
      "The real return is finding broken processes, not ranking people.",
    ],
  },

  "it-outsourcing-sla-playbook": {
    standfirst:
      "Nine clauses that look reasonable on paper and quietly guarantee a breach — plus the wording we use instead.",
    author: TOM,
    body: [
      {
        kind: "para",
        text: "An unhittable service level does not protect you. It produces monthly credit arguments, a supplier who has priced the penalty into the rate, and a relationship where nobody raises a problem early because every problem is now contractual. The clauses below are the ones we most often find doing that damage.",
      },
      { kind: "heading", text: "Response time without a definition of response" },
      {
        kind: "para",
        text: "If 'response' is not defined, it becomes an automated acknowledgement, which serves nobody. Define it as the first substantive human contact that either resolves the issue or states what is being done and by whom. That is harder to hit and worth infinitely more.",
      },
      { kind: "heading", text: "Resolution clocks that ignore the customer" },
      {
        kind: "para",
        text: "A resolution target that keeps running while the supplier waits on your team is a target you will breach on your own behalf. Every clock needs a documented pause condition, and every pause needs to be visible in the ticket so it can be audited later rather than argued about.",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Severity defined by the supplier rather than by business impact — always ends in disputes.",
          "Availability measured as an annual percentage, which permits a single catastrophic outage.",
          "No exclusion for changes you requested and approved.",
          "Penalties large enough that the supplier's incentive becomes concealment.",
          "Coverage windows that do not match your actual business hours across regions.",
          "A single blended target across wildly different service types.",
          "No named escalation contact, only a queue.",
          "Reporting produced solely by the supplier, with no shared source of truth.",
          "No mechanism to revise targets as the service scope changes.",
        ],
      },
      {
        kind: "quote",
        text: "If the penalty is big enough to hurt, the supplier stops telling you about problems early. You have bought silence, at a premium.",
        attribution: "Tom Okonkwo",
      },
      { kind: "heading", text: "Write the severity matrix together" },
      {
        kind: "para",
        text: "Severity should be a function of business impact — how many users, which process, whether there is a workaround — and it should be agreed jointly before signature, with worked examples. Ten real incidents from last year, classified by both parties, will expose more disagreement than any amount of clause drafting.",
      },
      {
        kind: "figures",
        items: [
          { value: "10", label: "Historic incidents to classify jointly" },
          { value: "2", label: "Parties who must agree severity" },
          { value: "0", label: "Blended targets across unlike services" },
        ],
      },
      {
        kind: "callout",
        title: "The test we apply",
        text: "Ask the supplier to model last quarter's actual incidents against the proposed service levels. If they cannot, the targets are not measurable. If they can and the result is a large credit, one of you has misunderstood the scope — and it is far cheaper to discover that now.",
      },
    ],
    takeaways: [
      "Define response as substantive human contact, not acknowledgement.",
      "Every resolution clock needs an auditable pause condition.",
      "Agree severity by business impact, using real historic incidents.",
      "Model the proposed targets against last quarter before signing.",
    ],
  },

  "healthcare-admin-outsourcing": {
    standfirst:
      "Where the audit trail has to stay in-house, where it does not, and how to draw that line before procurement draws it for you.",
    author: SARAH,
    body: [
      {
        kind: "para",
        text: "Healthcare administration attracts a blanket answer — that none of it can be outsourced because all of it is sensitive. That is not true, and the blanket answer is expensive. The useful question is narrower: for each process, who must be able to evidence what was done, to whom, and how quickly.",
      },
      { kind: "heading", text: "Three questions per process" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Does this process touch identifiable patient data, or only administrative metadata about an appointment or an invoice?",
          "If a regulator asked for the audit trail tomorrow, who produces it, and can they produce it without the supplier's cooperation?",
          "Does a mistake here affect care, or only cost?",
        ],
      },
      {
        kind: "para",
        text: "Processes that touch no identifiable data, produce an audit trail you hold, and carry only cost risk are straightforwardly outsourceable — scheduling logistics, invoice processing, supplier queries, records indexing under the right controls. Processes that fail any of the three need a much more deliberate design, and some should simply stay put.",
      },
      {
        kind: "figures",
        items: [
          { value: "3", label: "Questions that decide the boundary" },
          { value: "1", label: "Audit trail, held by you" },
          { value: "0", label: "Care decisions delegated" },
        ],
      },
      {
        kind: "quote",
        text: "Nobody has ever been criticised for holding their own audit trail. Plenty have been criticised for discovering they could not produce one.",
        attribution: "Sarah Whitfield",
      },
      { kind: "heading", text: "Design for the audit, not the incident" },
      {
        kind: "para",
        text: "The common design error is planning for a breach and not for an inspection. Breaches are rare and dramatic; audits are routine and unforgiving. Make sure logging, access records and change history live in systems you control, so that producing evidence does not depend on a supplier relationship that may have ended.",
      },
      {
        kind: "callout",
        title: "Do this before procurement starts",
        text: "Map every process against the three questions and get clinical governance to sign the map. Procurement will otherwise draw the boundary on commercial grounds, and unpicking that later costs far more than the mapping exercise.",
      },
    ],
    takeaways: [
      "Blanket 'nothing can be outsourced' is expensive and usually wrong.",
      "Decide per process: identifiable data, audit ownership, care impact.",
      "Keep logging and access records in systems you control.",
      "Map and sign the boundary before procurement, not after.",
    ],
  },

  "ar-collections-benchmark": {
    standfirst:
      "Median days sales outstanding, dispute rates and the collections cadence that separates the top quartile from everyone else.",
    author: PRIYA,
    body: [
      {
        kind: "para",
        text: "Days sales outstanding is a lagging, noisy measure that mixes together how you sell, who you sell to and how well you collect. Read alone it says little. Read alongside dispute rate and contact cadence, it starts to explain itself — and in our sample the top quartile differed from the median in cadence far more than in anything else.",
      },
      { kind: "heading", text: "Cadence beats escalation" },
      {
        kind: "para",
        text: "The top quartile made contact earlier and more regularly, and escalated later. That combination is counterintuitive if you think of collections as pressure. It makes sense if you think of it as administration: most late invoices are late because of a missing purchase order number, a wrong billing address or an approver on leave. Early, frequent, friendly contact finds those. Escalation does not.",
      },
      {
        kind: "figures",
        items: [
          { value: "Q1", label: "Top quartile contacts earliest" },
          { value: "40", label: "Finance pods in the sample" },
          { value: "2×", label: "Dispute rate gap, median to bottom quartile" },
        ],
      },
      { kind: "heading", text: "Disputes are an invoicing problem" },
      {
        kind: "para",
        text: "Dispute rate correlated most strongly with invoice accuracy and with whether the invoice carried the reference the customer's accounts payable system required. Pods that fixed their invoice template saw disputes fall without changing anything about collections at all. It is the cheapest intervention available and it is consistently deprioritised because it belongs to somebody else's team.",
      },
      {
        kind: "quote",
        text: "Half the collections work we inherit is not collections. It is re-issuing invoices that were never going to be payable as sent.",
        attribution: "Priya Raghavan",
      },
      { kind: "heading", text: "What to measure instead of DSO alone" },
      {
        kind: "list",
        items: [
          "Percentage of invoices paid without any contact — the cleanest signal of billing quality.",
          "Time from invoice issue to first query, which tells you how fast problems surface.",
          "Dispute rate by root cause, not by value.",
          "Promise-to-pay kept rate, which predicts collectability better than ageing does.",
        ],
      },
      {
        kind: "callout",
        title: "Start with the template",
        text: "Before restructuring a collections function, take ten disputed invoices and read them as your customer's accounts payable clerk would. In most engagements this exercise finds a fixable formatting problem within an hour.",
      },
    ],
    takeaways: [
      "Cadence — early and regular — separates the top quartile, not escalation.",
      "Most disputes originate in the invoice, not in the collections process.",
      "Track paid-without-contact rate as your billing quality measure.",
      "Promise-to-pay kept rate predicts collectability better than ageing.",
    ],
  },

  "demand-gen-outsourcing-white-paper": {
    standfirst:
      "A decision framework built on channel maturity and feedback-loop length, with the break-even maths for both routes.",
    author: DANNY,
    body: [
      {
        kind: "para",
        text: "The build-versus-outsource question in demand generation is usually argued on cost per lead, which is the wrong axis. The right axis is how quickly the channel tells you whether you were right. Fast feedback loops reward in-house iteration; slow ones reward bought expertise, because the cost of learning slowly is much higher than the cost of the retainer.",
      },
      { kind: "heading", text: "The two variables" },
      {
        kind: "para",
        text: "Channel maturity is how well understood the channel is inside your organisation — whether you have a working model of what performs and why. Feedback-loop length is how long between spending money and knowing whether it worked. Paid search on a self-serve product might be days. Field marketing into enterprise accounts might be three quarters.",
      },
      {
        kind: "list",
        items: [
          "Mature channel, fast loop: keep in-house. You will out-iterate any agency and the work is largely operational.",
          "Immature channel, fast loop: outsource to learn, with an explicit knowledge-transfer clause and a fixed review point.",
          "Mature channel, slow loop: keep in-house, because the institutional memory is the asset and it walks out with a retainer.",
          "Immature channel, slow loop: outsource, and expect to pay for expertise rather than execution. This is where agencies genuinely earn their fee.",
        ],
      },
      {
        kind: "figures",
        items: [
          { value: "2", label: "Variables in the framework" },
          { value: "4", label: "Resulting quadrants, each with a default" },
          { value: "1", label: "In-house owner of the model, always" },
        ],
      },
      {
        kind: "quote",
        text: "Outsource the channels you do not yet understand and the loops you cannot afford to learn slowly. Keep the ones where iteration speed is the whole advantage.",
        attribution: "Danny Fitzgerald",
      },
      { kind: "heading", text: "The break-even that actually matters" },
      {
        kind: "para",
        text: "Comparing a retainer against a salary understates the in-house cost by a wide margin, because it omits the learning period. A new in-house hire in an unfamiliar channel spends a meaningful stretch producing below-market results while they build the model. Price that period honestly — as months of underperforming spend, not just as salary — and the break-even moves considerably.",
      },
      { kind: "heading", text: "Write the transfer clause first" },
      {
        kind: "para",
        text: "If you are outsourcing to learn, the deliverable is the model, not the leads. Specify what you receive: the audience definitions, the creative testing history, the attribution logic, the list of things tried that did not work. That last one is the most valuable and the one least likely to be handed over unless you asked for it in writing.",
      },
      {
        kind: "callout",
        title: "The failure list",
        text: "Ask for a documented record of what was tested and did not work, delivered quarterly. It is the cheapest institutional memory you will ever buy, and agencies rarely refuse when it is in the contract from the start.",
      },
    ],
    takeaways: [
      "Decide on channel maturity and feedback-loop length, not cost per lead.",
      "Fast loops in mature channels belong in-house; slow immature ones do not.",
      "Price the in-house learning period as underperforming spend, not salary.",
      "Contract for the model and the failure list, not just the leads.",
    ],
  },

  "saas-onboarding-cx-playbook": {
    standfirst:
      "The churn signal shows up in week two and nobody is watching the queue it arrives in. How to staff that window.",
    author: MARCUS,
    body: [
      {
        kind: "para",
        text: "Retention teams generally start paying attention at renewal, or at the first drop in usage. Both are late. In the SaaS onboarding programmes we run, the contacts that predict churn arrive in the second week of the account's life, and they usually arrive in the general support queue looking like ordinary questions.",
      },
      { kind: "heading", text: "What the signal looks like" },
      {
        kind: "para",
        text: "It is rarely a complaint. It is a question that reveals the customer has not achieved the thing they bought the product for — asking how to export something the product does not export, or how to connect a system that was never in scope. The contact gets answered correctly and closed, the satisfaction score is fine, and the account is already in trouble.",
      },
      {
        kind: "list",
        items: [
          "Questions that reveal a mismatch between what was sold and what was bought.",
          "Repeated basic setup questions from a second or third user on the same account.",
          "Any contact where the answer is genuinely 'the product does not do that'.",
          "Silence from an account that asked several questions in week one and then stopped.",
        ],
      },
      {
        kind: "figures",
        items: [
          { value: "Wk 2", label: "When the churn signal arrives" },
          { value: "90d", label: "Window that decides renewal" },
          { value: "4", label: "Signal types worth tagging" },
        ],
      },
      {
        kind: "quote",
        text: "The contact was answered correctly and closed within SLA. It was also the moment we lost the account, and nothing in our reporting said so.",
        attribution: "Marcus Delgado",
      },
      { kind: "heading", text: "Staffing the window" },
      {
        kind: "para",
        text: "Route new accounts to a named subset of the desk for their first ninety days. Not a separate team — a tagged queue with the same people, so they see the same account more than once and can recognise the second and third contact for what it is. Pattern recognition across contacts is the entire mechanism, and it does not survive round-robin routing.",
      },
      { kind: "heading", text: "Close the loop to the account team" },
      {
        kind: "para",
        text: "Tagging the signal is worthless if nothing happens downstream. Agree in advance what each tag triggers: who is notified, within what window, and what they do. The most common failure we see is a beautifully tagged dataset that no one has agreed to act on, which is worse than not tagging at all because it creates the impression of coverage.",
      },
      {
        kind: "callout",
        title: "Route by account age",
        text: "A tagged first-ninety-days queue costs nothing to set up and is the single highest-return change available to most SaaS support desks. Continuity of agent is what makes the signal visible.",
      },
    ],
    takeaways: [
      "Churn signals arrive in week two, disguised as ordinary questions.",
      "Route new accounts to a tagged queue so agents see them more than once.",
      "Tag the four signal types and agree what each one triggers downstream.",
      "A correctly answered contact can still be the moment you lose the account.",
    ],
  },

  "payroll-outsourcing-checklist": {
    standfirst:
      "Twenty-two items, ordered by how badly each one hurts when it is discovered in month three instead of week one.",
    author: SARAH,
    body: [
      {
        kind: "para",
        text: "Payroll is unforgiving in a way most outsourced functions are not: the deadline is legal, the error is visible to every employee, and there is no version of 'we will fix it next cycle' that anybody accepts. This checklist is ordered by pain on late discovery rather than by process sequence, because that is the order in which these things actually cost you.",
      },
      { kind: "heading", text: "Hand over in week one" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Every non-standard contract — anything with bespoke allowances, notice terms or bonus mechanics.",
          "Historic corrections still in flight, including anything owed to a leaver.",
          "The full statutory calendar for every jurisdiction in scope, with filing owners named.",
          "Salary sacrifice and benefit arrangements, with their effective dates.",
          "Any employee on a legacy scheme that no longer applies to new starters.",
          "Court orders, attachments of earnings and any deduction with a legal basis.",
        ],
      },
      {
        kind: "para",
        text: "Those six are first because each one is invisible in a standard data extract and catastrophic when missed. A bespoke bonus mechanic that nobody documented will run correctly for two cycles on inherited logic and then fail silently when the logic is rebuilt.",
      },
      {
        kind: "figures",
        items: [
          { value: "6", label: "Items that must move in week one" },
          { value: "2", label: "Parallel cycles before cutover" },
          { value: "0", label: "Acceptable late filings" },
        ],
      },
      { kind: "heading", text: "Hand over before first live cycle" },
      {
        kind: "list",
        items: [
          "Starter, leaver and change workflows, including who is authorised to approve each.",
          "Pension enrolment and re-enrolment logic with assessment dates.",
          "Expense and mileage policies where they affect taxable pay.",
          "Absence and statutory pay rules, especially any enhancement above statutory minimum.",
          "The approval chain for the payroll run itself, with named deputies.",
          "Bank file formats, submission windows and the failure procedure.",
        ],
      },
      {
        kind: "quote",
        text: "Every payroll disaster I have seen was documented somewhere. It was documented in the head of someone who was on annual leave.",
        attribution: "Sarah Whitfield",
      },
      { kind: "heading", text: "Run parallel, then cut over" },
      {
        kind: "para",
        text: "Two full parallel cycles, reconciled to the penny at employee level rather than in aggregate. Aggregate reconciliation hides offsetting errors — two employees wrong in opposite directions net to zero and look perfect. Employee-level comparison is more work and it is the only version that finds anything.",
      },
      {
        kind: "callout",
        title: "Name the deputy",
        text: "For every approval in the payroll chain, name a deputy and test that they can actually complete the step. Payroll deadlines do not move for annual leave, and this is the single most common cause of a late first run.",
      },
    ],
    takeaways: [
      "Move the undocumented exceptions first — they fail silently, later.",
      "Reconcile parallel runs at employee level; aggregates hide offsetting errors.",
      "Name and test a deputy for every approval in the chain.",
      "Two full parallel cycles before cutover, without exception.",
    ],
  },
};

export const getArticle = (slug: string): Article | undefined => ARTICLES[slug];
