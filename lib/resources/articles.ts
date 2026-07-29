import type { Article, Author } from "./types";

/**
 * Article bodies, keyed by resource slug.
 *
 * Deliberately a separate module from the catalog in `index.ts`. The browser
 * on `/resources` is a client component and imports `RESOURCES`; if the bodies
 * lived on those objects, every word of all fifteen articles would ship in the
 * client bundle to render a grid of headlines. Only the detail route imports
 * this file, and only on the server.
 *
 * Figures throughout are Xevantis' own delivery data, framed as such. Client
 * businesses are described by size and neighborhood, never named — these are
 * small practices whose staff would be identifiable from a name and a metric.
 *
 * New York is the local-SEO angle, so the reporting is drawn from the metro.
 * Every piece still has to be useful to a reader in Boise, because that is who
 * the services are actually sold to: name the state when the rule is a New York
 * rule, and say so plainly when the pattern is national.
 */

const NADIA: Author = {
  name: "Nadia Reyes",
  role: "Head of Client Operations",
  initials: "NR",
  accent: "lilac",
};

const PRIYA: Author = {
  name: "Priya Raghavan",
  role: "Delivery Lead, Bookkeeping & Billing",
  initials: "PR",
  accent: "mint",
};

const TOM: Author = {
  name: "Tom Okonkwo",
  role: "Principal, IT & Security",
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
  role: "Head of Growth Services",
  initials: "DF",
  accent: "sun",
};

const AOIFE: Author = {
  name: "Aoife Brennan",
  role: "Quality & Training Lead",
  initials: "AB",
  accent: "mint",
};

export const ARTICLES: Record<string, Article> = {
  "nyc-dental-practice-missed-calls": {
    standfirst:
      "For six weeks we logged every inbound call at eleven dental practices across Brooklyn, Queens and Nassau County. Roughly one in four calls from someone who had never been a patient never reached a human being.",
    author: NADIA,
    body: [
      {
        kind: "para",
        text: "The practices ranged from two chairs to nine, and every one of them believed their phone coverage was fine. That is the normal answer, and it is not dishonest — the front desk is genuinely answering calls all day. What nobody can see from behind the desk is the call that rang four times while they were seating a patient, and then stopped.",
      },
      {
        kind: "para",
        text: "So we counted. Call logs from the practice phone system, matched against the schedule and against new-patient records. Not a survey, not a mystery-shopper exercise: the actual traffic, over six weeks, at eleven real offices.",
      },
      { kind: "heading", text: "What the logs showed" },
      {
        kind: "figures",
        items: [
          { value: "26%", label: "New-patient calls not answered live" },
          { value: "61%", label: "Of those, no voicemail left" },
          { value: "11:40am", label: "Worst hour of the day, every practice" },
        ],
      },
      {
        kind: "para",
        text: "The second figure is the one that should worry an owner. A caller who leaves a voicemail is still your patient — you can call back. Six in ten did not leave one. Someone looking for a dentist has a list, and the list is Google's, and the next name on it is four blocks away.",
      },
      {
        kind: "para",
        text: "The third figure surprised us. We expected the worst coverage at lunch or after close. Instead it clustered late morning, when the schedule is at its densest and the same two people are checking in, seating, verifying insurance and answering the phone at once. The problem is not that nobody is there. It is that everybody is already doing something.",
      },
      {
        kind: "quote",
        text: "Nobody at the front desk decides to miss a call. They decide to finish checking in the patient standing in front of them, which is the correct decision, forty times a day.",
        attribution: "Nadia Reyes, Head of Client Operations",
      },
      { kind: "heading", text: "What a missed new-patient call is worth" },
      {
        kind: "para",
        text: "Practices we work with put first-year value of a new general-dentistry patient somewhere between $600 and $1,200, depending on payer mix and how much hygiene they retain. Take the low end. A practice getting forty new-patient calls a month and missing a quarter of them is losing ten conversations a month, of which maybe six would have booked. That is $3,600 a month walking to the practice down the block, from a phone that is technically working.",
      },
      {
        kind: "para",
        text: "None of this is specific to New York. The reason we ran it here is density: in a five-borough market the next practice is genuinely four blocks away, so the cost of a missed call shows up faster and larger than it does in a town with one dentist. The arithmetic is the same everywhere, it just takes longer to notice.",
      },
      { kind: "heading", text: "The four fixes, in the order they paid off" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Route overflow before it rings out. Not to voicemail — to a second person who can actually book. Three rings, then it moves. This alone recovered about two-thirds of the gap at every practice that tried it.",
          "Give the overflow person your schedule, not a message pad. A call that ends in a booked appointment is worth several times one that ends in \"the office will call you back.\"",
          "Text back every unanswered number within five minutes. Automated, one line, from the practice's own number. About a third of them replied.",
          "Stop asking the front desk to verify insurance during clinic hours. It is the single largest consumer of their attention in the 10am–noon window, and it is the easiest task to move off the desk entirely.",
        ],
      },
      {
        kind: "callout",
        title: "Measure this before you fix anything",
        text: "Almost every phone system a practice already owns will export a call log with ring duration and answer status. Pull ninety days. If more than one call in ten ends unanswered with no voicemail, you have the same problem these eleven practices had, and you now have the number to prove it to whoever controls the budget.",
      },
      {
        kind: "para",
        text: "The practices that closed the gap did not hire another front-desk person. Three of them added remote coverage for the two busiest hours a day, which is roughly a fifth of a full-time salary. One of them just changed the ring rules and got half the benefit for nothing.",
      },
    ],
    takeaways: [
      "Roughly a quarter of new-patient calls at the practices we logged never reached a person.",
      "Six in ten of those callers left no voicemail — that patient is simply gone.",
      "The worst coverage is late morning, when the desk is busiest, not after hours.",
      "Pull ninety days of your own call log before you spend a dollar on the problem.",
    ],
  },

  "law-firm-intake-new-york": {
    standfirst:
      "Someone who has just been injured, served, or fired calls three firms in ten minutes and retains whoever picks up and sounds competent. Here is how small firms staff that moment without sounding like a call center.",
    author: AOIFE,
    body: [
      {
        kind: "para",
        text: "Small-firm intake fails in a specific and predictable way. The phones are covered while everyone is in the office, and uncovered exactly when the attorneys are in court, at a deposition, or on the subway between the two. Which is to say: uncovered during business hours, on the days that are busiest, which are also the days that generate the most inbound calls.",
      },
      {
        kind: "para",
        text: "In New York that window is wider than most places. A Brooklyn personal injury firm with a morning calendar in Kings County Supreme is out of the office from 8:30 until early afternoon. An immigration practice with a Federal Plaza appearance loses a full morning. The intake calls do not pause.",
      },
      { kind: "heading", text: "Answer first, qualify second" },
      {
        kind: "para",
        text: "The instinct is to build a long screening script so nobody wastes an attorney's time. This is backwards. The screening matters, but it matters second. What decides retention is that a person answered, sounded like they worked at a law firm, and knew what to ask. Every additional minute before a human voice costs you more than any screening question saves.",
      },
      {
        kind: "figures",
        items: [
          { value: "< 30 sec", label: "Target time to a human voice" },
          { value: "3", label: "Firms a typical caller tries" },
          { value: "72%", label: "Of retained callers reached us on the first try" },
        ],
      },
      { kind: "heading", text: "What the intake person actually needs" },
      {
        kind: "list",
        items: [
          "Your matter types, in your words. \"Do you handle slip and falls?\" needs a yes or no in one second, not a transfer.",
          "A conflicts check they can run before the call ends. Names of every party, spelled, against your existing matter list. This is the single most common thing small firms forget to give an intake person, and it is the one that creates real exposure.",
          "The deadline questions for your practice areas. In New York a claim against a municipality carries a 90-day notice of claim requirement that has nothing to do with the underlying statute of limitations. An intake person who does not ask \"was this on city property?\" will cost you a case.",
          "A clear line they never cross. They gather facts and schedule consultations. They do not evaluate a claim, quote a fee, or say anything that sounds like advice. Write that line down and train against it.",
          "Direct calendar access. A consultation booked while the caller is still on the phone converts at roughly twice the rate of one arranged by callback.",
        ],
      },
      {
        kind: "quote",
        text: "The conflicts check is not paperwork. It is the reason your intake can be someone other than an attorney — and it is the first thing that gets skipped when nobody has written it into the script.",
        attribution: "Aoife Brennan, Quality & Training Lead",
      },
      { kind: "heading", text: "The script structure that works" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Firm name, their name, one open question: \"What's going on?\" Let them talk for ninety seconds without interrupting. Most callers have rehearsed this and will not continue properly if you cut in.",
          "Confirm you handle it. If you do not, say so immediately and refer out. A fast honest no earns more referrals than a slow maybe.",
          "Facts: date, parties, spellings, whether anything has been filed or served, whether they have spoken to another firm.",
          "Deadline triggers specific to your practice areas. Ask them all, every time, even when they seem irrelevant.",
          "Book the consultation on the call. Confirm by text and email before hanging up.",
        ],
      },
      {
        kind: "callout",
        title: "One rule for anyone answering your phone",
        text: "They may say what the firm does, when an attorney is available, and what happens next. They may not say whether a caller has a case. Put it in the training document in exactly those words, and check for it when you review recordings.",
      },
      {
        kind: "para",
        text: "None of the above is New York-specific except the deadline list. If you practice in another state, replace that section with your own notice requirements and the structure holds. The firms we support in Texas and Ohio run this same script with a different fourth step.",
      },
    ],
    takeaways: [
      "Speed to a human voice beats screening depth — answer first, qualify second.",
      "Give intake a conflicts check they can run live; it is what makes non-attorney intake safe.",
      "Train the deadline questions specific to your state, including notice-of-claim traps.",
      "Book the consultation on the call. Callbacks convert at roughly half the rate.",
    ],
  },

  "local-seo-nyc-service-business": {
    standfirst:
      "Ranking for \"dentist near me\" in a market with four hundred dentists inside three miles is a different job from ranking a website. This is the order we work in, and what each step is actually worth.",
    author: DANNY,
    body: [
      {
        kind: "para",
        text: "Local search has two surfaces and small businesses routinely spend their money on the wrong one. There is the map pack — the three businesses with pins above the regular results — and there are the classic blue links below it. For a service business the map pack is where nearly all of the phone calls come from, and it is governed by almost none of the things a web designer will sell you.",
      },
      {
        kind: "para",
        text: "The map pack weighs three broad things: relevance, distance and prominence. You cannot change distance. That is the whole game in a dense market — in Midtown you are competing against everyone within a few blocks, and no amount of content will make Google show you to someone standing in Astoria. What you can change is how completely you have described what you do, and how much independent evidence exists that you are real and busy.",
      },
      { kind: "heading", text: "The eight, in order" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Claim and complete the Google Business Profile. Every field. Categories are the single highest-leverage input and most businesses pick one when they qualify for four. A practice listed only as \"Dentist\" will not appear for \"emergency dentist\" or \"pediatric dentist.\"",
          "Fix name, address and phone consistency everywhere it appears. Suite numbers, \"St\" versus \"Street\", the old phone number on a 2019 directory listing. In New York this is worse than average because buildings get renamed and practices move within the same block.",
          "Get reviews on a schedule, not in bursts. Twenty reviews arriving in one week reads as purchased. Two a week forever outranks it.",
          "Reply to every review, including the good ones. Response rate is visible, cheap, and almost nobody does it.",
          "Add real photos monthly. Not stock. The interior, the staff, the street entrance. Profiles with recent photos measurably outperform dormant ones.",
          "Build one page per service and per neighborhood you actually serve — and only those. A \"root canals in Park Slope\" page is worth writing if you are in Park Slope. Forty borough pages written by an agency for a practice that serves one neighborhood is the fastest way to look like spam.",
          "Get listed where your industry is listed. For medical that is the insurance directories and hospital affiliations. For legal it is the bar association and the state directories. These carry far more weight than general business directories.",
          "Only then, the website itself: speed, mobile layout, a phone number that is tappable, and a booking path that takes under a minute.",
        ],
      },
      {
        kind: "figures",
        items: [
          { value: "1–2", label: "Weeks for profile work to show movement" },
          { value: "3–6", label: "Months before content work does" },
          { value: "8×", label: "Map pack calls vs organic, median local practice" },
        ],
      },
      { kind: "heading", text: "Why the order matters more than the list" },
      {
        kind: "para",
        text: "Steps one through five cost almost nothing and move the needle in weeks. Steps six through eight cost real money and take months. Most small businesses are sold step eight first, because a website is a thing an agency can hand over and invoice for. We have taken over accounts where a practice had spent five figures on a redesign while its Business Profile still listed the wrong hours.",
      },
      {
        kind: "quote",
        text: "If your hours are wrong on Google, nothing else you do this quarter matters. Fix that on a Tuesday afternoon before you commission anything.",
        attribution: "Danny Fitzgerald, Head of Growth Services",
      },
      { kind: "heading", text: "The New York-specific parts" },
      {
        kind: "list",
        items: [
          "Borough and neighborhood names are search terms in a way that city districts elsewhere are not. People search \"Brooklyn\" and \"Bay Ridge\", rarely \"New York City\".",
          "Subway proximity belongs in your description and on your location page. It is how New Yorkers evaluate whether they can get to you.",
          "Service-area radius is tiny. Three miles in Queens covers more prospective patients than thirty miles in most of the country, and Google knows it.",
          "Multi-location practices need a separate profile per address, each with its own phone number. Sharing one number across three locations flattens all three.",
        ],
      },
      {
        kind: "callout",
        title: "What we tell clients outside New York",
        text: "Everything above except the borough and subway points applies unchanged in any US market. In lower-density areas the map pack radius widens, which makes steps six and seven relatively more valuable and steps one through five no less essential.",
      },
      {
        kind: "para",
        text: "A last note on measurement. Google's own profile insights will tell you calls, direction requests and website clicks from the map listing, separated from everything else. That is the number to watch weekly. Rankings fluctuate by device and by the block the searcher is standing on; calls do not.",
      },
    ],
    takeaways: [
      "The map pack, not the blue links, is where a local service business gets its calls.",
      "Categories and address consistency are free, fast, and skipped by most businesses.",
      "Reviews should arrive steadily and every one should get a reply.",
      "Build the website last. It is the most expensive step and the slowest to pay back.",
    ],
  },

  "hipaa-it-checklist-small-practice": {
    standfirst:
      "Most HIPAA guidance is written for hospital systems. This is the version for a four-provider clinic with no IT staff, drawn from the security reviews we run for practices across the New York metro.",
    author: TOM,
    body: [
      {
        kind: "para",
        text: "The Security Rule is deliberately scalable — what is reasonable for a 400-bed hospital is not what is required of a four-provider practice. That scalability is genuinely good news, and it is also why small practices get stuck: the regulation tells you to be reasonable without telling you what reasonable looks like at your size.",
      },
      {
        kind: "para",
        text: "So here is what we implement, in the order we implement it, at practices between three and forty staff. It is not legal advice and it does not replace a risk analysis. It is the working list.",
      },
      { kind: "heading", text: "The four that get asked about first" },
      {
        kind: "list",
        ordered: true,
        items: [
          "A written risk analysis, dated within the last twelve months. This is the most-cited deficiency in enforcement actions by a wide margin, and it is a document, not a product. If you have bought security tools but never written this, you have the expensive part and not the required part.",
          "Signed business associate agreements with every vendor that touches patient information. Your practice management vendor, your billing company, your IT provider, your shredding company, your answering service. Keep them in one folder with renewal dates.",
          "Unique logins for every person. No shared front-desk account. This is the control that makes your audit log mean anything, and shared logins are still the norm at small practices.",
          "Encryption on every device that leaves the building, and on every device that does not. Full-disk encryption is built into current Windows and macOS and costs nothing to turn on.",
        ],
      },
      {
        kind: "figures",
        items: [
          { value: "12 mo", label: "Maximum age of a defensible risk analysis" },
          { value: "60 days", label: "Breach notification deadline to individuals" },
          { value: "6 yrs", label: "How long to retain policies and logs" },
        ],
      },
      { kind: "heading", text: "The rest of the list" },
      {
        kind: "list",
        items: [
          "Automatic screen lock at five minutes on every workstation, especially any screen visible from the waiting room.",
          "Multi-factor authentication on email, on remote access, and on the practice management system if it supports it.",
          "Backups that are tested. An untested backup is a belief, not a control. Restore one file monthly and write down that you did.",
          "One backup copy offline or otherwise out of reach of your network, because ransomware encrypts mapped drives.",
          "A documented offboarding step that disables accounts the same day someone leaves.",
          "Audit logging enabled in the record system, and someone who looks at it — even quarterly.",
          "Workforce security training annually, with a record of who attended.",
          "A written sanction policy for staff who violate procedures. Rarely used, always asked for.",
          "Email that does not send patient information unencrypted. Either a secure portal or an encryption gateway.",
          "A text messaging policy. Staff will text about patients on personal phones unless you give them something else.",
          "Physical safeguards: locked server closet, locked file room, a visitor log if the back office is accessible.",
          "Disposal procedures for paper and for drives, with certificates of destruction kept.",
          "A written incident response procedure naming who to call, in what order, on the day it happens.",
          "An inventory of every device and every system that stores or transmits patient information. You cannot protect what you have not listed.",
          "A vendor access review annually: who still has a login who should not.",
        ],
      },
      {
        kind: "quote",
        text: "The practices that struggle in an audit are almost never the ones with weak technology. They are the ones who did the work and never wrote it down.",
        attribution: "Tom Okonkwo, Principal, IT & Security",
      },
      { kind: "heading", text: "What New York adds on top" },
      {
        kind: "para",
        text: "HIPAA is the floor, not the ceiling. New York's SHIELD Act imposes its own reasonable-safeguards requirement covering the private information of any New York resident, which reaches further than health data and applies whether or not you are a covered entity. If you hold employee records, you are in scope. The practical effect for a small practice is that the same controls satisfy both, provided your written policies reference both.",
      },
      {
        kind: "callout",
        title: "The one-afternoon version",
        text: "If you do nothing else this quarter: turn on disk encryption everywhere, give every person their own login, enable multi-factor authentication on email, and date and sign a risk analysis. Those four take one afternoon with a competent technician and address the deficiencies that appear most often in enforcement.",
      },
      {
        kind: "para",
        text: "Practices outside New York should substitute their own state privacy statute for the SHIELD Act paragraph. Texas, California and Illinois each add requirements above the federal floor, and the pattern — state law reaching wider than health data — is now the norm rather than the exception.",
      },
    ],
    takeaways: [
      "A dated written risk analysis is the most-cited deficiency and the cheapest to fix.",
      "Shared front-desk logins make your audit trail worthless — issue unique accounts.",
      "Test a restore monthly and keep one backup copy out of reach of the network.",
      "New York's SHIELD Act reaches beyond health data; check your own state's equivalent.",
    ],
  },

  "nyc-accounting-firm-busy-season": {
    standfirst:
      "Busy season arrives on the same date every year, and small firms still staff it as an emergency. What five New York-area practices changed, what it cost, and what came back.",
    author: PRIYA,
    body: [
      {
        kind: "para",
        text: "The structural problem is simple. From late January to mid-April a small tax practice needs perhaps 60% more capacity than it needs in September. You cannot hire a full-time person for a ten-week peak, and the seasonal market for experienced preparers in the New York metro is thin and expensive — everybody wants the same people in the same weeks.",
      },
      {
        kind: "para",
        text: "So partners absorb it. They work sixty-hour weeks, review work they should have delegated, and spend March doing data entry at partner rates. Every firm we have worked with describes this as temporary and has done it for at least six years.",
      },
      { kind: "heading", text: "Separate the preparation from the judgment" },
      {
        kind: "para",
        text: "The single change that mattered most across all five practices was a taxonomy exercise done in November: go through last season's work and sort every task into what requires a licensed professional's judgment and what does not. The split is more lopsided than most partners expect.",
      },
      {
        kind: "figures",
        items: [
          { value: "~55%", label: "Of busy-season hours found to be non-judgment work" },
          { value: "9 wks", label: "Lead time needed to train seasonal support" },
          { value: "31%", label: "Median reduction in partner hours, season two" },
        ],
      },
      {
        kind: "para",
        text: "Non-judgment work means document chasing, organizer follow-up, source document intake and scanning, data entry into the tax software, rolling forward prior-year files, e-file confirmation tracking, extension processing, and the enormous volume of \"have you sent us your 1099 yet\" correspondence. None of it requires a CPA. All of it currently gets done by one.",
      },
      { kind: "heading", text: "The calendar that works" },
      {
        kind: "list",
        ordered: true,
        items: [
          "November: run the task taxonomy. Write down who does what, and what each task actually requires.",
          "Early December: document the non-judgment tasks properly. This is the step everybody skips and it is the step that determines whether the added capacity is useful or is a second job for the partner.",
          "Mid-December: bring on support and train them on last year's returns. Real files, closed engagements, no time pressure.",
          "January: run organizers and document intake entirely through the support layer. This is the ramp — by the time volume arrives they have done it for three weeks.",
          "February to April: preparers and partners touch only the work that needs them.",
          "Late April: keep a fraction of the capacity through the extension season instead of losing the trained person entirely.",
        ],
      },
      {
        kind: "quote",
        text: "The firms that fail at this hire in January. Nine weeks of lead time is not padding — it is the difference between capacity and a second full-time job for whoever is training them.",
        attribution: "Priya Raghavan, Delivery Lead, Bookkeeping & Billing",
      },
      { kind: "heading", text: "What it cost" },
      {
        kind: "para",
        text: "Across the five practices, the added seasonal support ran between $2,400 and $6,800 a month depending on hours and how much of it they kept year-round. Against that: partner hours down roughly a third in season two, and in three of the five firms, a measurable increase in returns completed — because the constraint had been partner attention, not demand.",
      },
      {
        kind: "callout",
        title: "The number that changed the argument",
        text: "One partner priced her own time at her realization rate and found she had spent 190 hours of a ten-week season on document chasing. At any reasonable billing rate that is a six-figure misallocation, and it made the seasonal-support decision take about four minutes.",
      },
      {
        kind: "para",
        text: "Nothing here is specific to New York except the labor market. If you are in a metro where experienced seasonal preparers are plentiful and cheap, hire them. In the New York area they are neither, which is why the firms we work with solved it by moving the non-judgment half of the work rather than by competing for the same scarce local hires.",
      },
    ],
    takeaways: [
      "Around 55% of busy-season hours at the firms we studied required no professional judgment.",
      "Hire and train by mid-December. January is too late to be useful.",
      "Document the tasks before you add the person, or you have created work, not capacity.",
      "Price your own hours at realization before deciding this is too expensive.",
    ],
  },

  "nyc-small-business-hiring-rules": {
    standfirst:
      "Salary ranges in the ad, the Fair Chance Act, paid safe and sick leave, and an audit requirement for automated hiring tools. A working guide to which New York City rules bite at which headcount — and how to stay clear of all of them.",
    author: SARAH,
    body: [
      {
        kind: "para",
        text: "New York City has among the most specific small-employer hiring rules in the country, and a great many of them start at four employees rather than the fifteen or fifty that federal law conditions people to expect. A twelve-person office is comfortably in scope for nearly everything below. This is a practical summary, not legal advice; where the stakes are real, have counsel review your process once rather than your postings forever.",
      },
      { kind: "heading", text: "Thresholds worth memorizing" },
      {
        kind: "figures",
        items: [
          { value: "4", label: "Employees: most NYC Human Rights Law duties attach" },
          { value: "5", label: "Employees: state retirement program enrollment duty" },
          { value: "100", label: "Employees: NYC paid sick leave rises to 56 hours" },
        ],
      },
      { kind: "heading", text: "The job posting itself" },
      {
        kind: "list",
        items: [
          "Every advertised position must state a good-faith minimum and maximum salary or hourly range. This covers internal promotions and transfer opportunities, not just external ads, and it applies to any role that can or will be performed in New York City.",
          "\"Competitive\" and \"depending on experience\" are not ranges. Neither is an open-ended \"$60,000 and up.\"",
          "The range has to be honest. A $50,000 to $250,000 posting is not compliant, because it is not good faith.",
          "Commission-only roles must say so; the range requirement applies to base compensation.",
        ],
      },
      { kind: "heading", text: "What you may not ask" },
      {
        kind: "list",
        items: [
          "Salary history. You may not ask, and you may not rely on it if you learn it. You may ask about salary expectations.",
          "Criminal history before a conditional offer. Under the Fair Chance Act the background check happens after the offer, and if you then want to withdraw, you owe the candidate a written Fair Chance analysis, a copy of the report, and at least five business days to respond.",
          "Anything that surfaces protected characteristics indirectly — graduation years, availability for \"family reasons\", citizenship beyond verifying work authorization.",
        ],
      },
      {
        kind: "quote",
        text: "The Fair Chance sequence is where small offices get caught. Not because they discriminate, but because somebody ran the background check with the application, which is the natural order and the wrong one.",
        attribution: "Sarah Whitfield, People Operations Lead",
      },
      { kind: "heading", text: "Automated hiring tools" },
      {
        kind: "para",
        text: "Local Law 144 covers automated employment decision tools — resume screeners and scoring software that substantially assist a hiring decision. If you use one, it needs an independent bias audit within the past year, a public summary of the results, and notice to candidates at least ten business days before use. Most twelve-person offices believe this does not apply to them and then discover their applicant tracking system has a ranking feature switched on by default.",
      },
      { kind: "heading", text: "Once they start" },
      {
        kind: "list",
        items: [
          "Written notice of pay rate and payday at hire, under the state Wage Theft Prevention Act, signed and retained.",
          "Paid safe and sick leave: 40 hours a year for employers under 100, accruing from day one.",
          "New York State Paid Family Leave, funded by employee payroll deduction, available at essentially every private employer with employees.",
          "Statutory short-term disability coverage, which is separate from Paid Family Leave and separately purchased.",
          "Retirement program enrollment if you have had five or more employees and do not already sponsor a plan.",
          "Written lactation accommodation and harassment prevention policies, plus annual interactive training for every employee.",
        ],
      },
      {
        kind: "callout",
        title: "The two-hour version",
        text: "Put a real salary range in every ad. Move the background check after the conditional offer. Switch off any automatic ranking in your applicant tracking system unless you have an audit. Those three cover the violations we see most often in offices under twenty people.",
      },
      {
        kind: "para",
        text: "For readers outside New York: about a third of this is now national in shape if not in detail. Pay transparency laws are in force in Colorado, California, Washington, Illinois and elsewhere; ban-the-box rules cover most large metros; and automated hiring tool regulation is being copied. If you hire remotely into any of those markets, the posting rules generally follow the location where the work can be performed, not where your office is.",
      },
    ],
    takeaways: [
      "Most NYC Human Rights Law obligations start at four employees, not fifteen.",
      "Salary ranges are required in every ad, including internal promotions.",
      "Background checks come after the conditional offer, with a written Fair Chance analysis.",
      "Check whether your applicant tracking system ranks candidates — that triggers an audit duty.",
    ],
  },

  "pharmacy-ai-phone-system": {
    standfirst:
      "Refill requests are the one pharmacy call an automated system genuinely handles well. The trouble is that they arrive on the same line as the three calls it must never touch.",
    author: NADIA,
    body: [
      {
        kind: "para",
        text: "Independent pharmacies get asked about this constantly, usually by a vendor, and the honest answer is narrower than either the sales pitch or the reflexive no. Automation is a good fit for one call type and a bad fit for the rest, and the entire question is whether you can separate them before they reach a human.",
      },
      { kind: "heading", text: "The call it handles well" },
      {
        kind: "para",
        text: "A refill request on an existing prescription is structured, high volume and low judgment. The caller has a number, the system has the record, and the outcome is binary. At the two-location independent we support in the Bronx, refill requests were 44% of inbound call volume and roughly 70% of the time counter staff spent on the phone, because each one interrupts whatever they were doing at the counter.",
      },
      {
        kind: "figures",
        items: [
          { value: "44%", label: "Of inbound calls that were refill requests" },
          { value: "~70%", label: "Of counter phone time those calls consumed" },
          { value: "31%", label: "Queue reduction after routing changes" },
        ],
      },
      { kind: "heading", text: "The three it must not touch" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Clinical questions. \"Can I take this with my blood pressure medication?\" is a pharmacist call, full stop. An automated system that answers it confidently is a liability event, and one that answers it vaguely has wasted the patient's time and eroded their trust in the whole system.",
          "Anything involving a controlled substance. Different rules, different verification, and a caller who may be testing your process.",
          "The distressed caller. Someone whose medication was denied, whose insurance changed, or who is calling about a family member in decline. These are exactly the calls where an independent pharmacy earns the loyalty it competes on, and exactly the ones a phone tree destroys.",
        ],
      },
      {
        kind: "quote",
        text: "You compete with a chain on the fact that a person who knows the patient picks up. Automating the front of that is a strange way to spend your only advantage.",
        attribution: "Nadia Reyes, Head of Client Operations",
      },
      { kind: "heading", text: "What we recommend instead" },
      {
        kind: "para",
        text: "Route rather than replace. A phone menu that offers refills as option one and a human as option two, with the human option reachable at any point by pressing zero or simply saying nothing. This captures the volume without putting a wall in front of the calls that matter. Critically, the timeout behavior should be to reach a person — most systems are configured to repeat the menu, which is how patients end up hanging up.",
      },
      {
        kind: "list",
        items: [
          "Refills: automated, with a callback only for exceptions like no refills remaining or a prior authorization issue.",
          "Everything else: a person, within thirty seconds, who can see the patient record.",
          "No menu deeper than one level. Every additional layer measurably increases abandonment among older patients, who are most of your volume.",
          "Publish a direct line to the pharmacist that does not go through the menu at all, and give it to prescribers.",
        ],
      },
      {
        kind: "callout",
        title: "The test before you buy",
        text: "Ask the vendor what the system does when it does not understand. If the answer is anything other than \"transfers to a person immediately,\" the demo will look better than the deployment. Then call your own pharmacy from a cell phone and try to reach a human while a menu is talking.",
      },
      {
        kind: "para",
        text: "The pharmacy above did not buy an AI system in the end. They moved refills to an automated line, added remote coverage for the two hours a day the counter was worst, and cut queue length by 31%. The pharmacist's assessment was that they had gotten most of the benefit and none of the risk, which is usually where this lands.",
      },
    ],
    takeaways: [
      "Refill requests are genuinely automatable and are often nearly half of call volume.",
      "Clinical questions, controlled substances and distressed callers must reach a person.",
      "Configure the timeout to reach a human, not to repeat the menu.",
      "Ask any vendor what happens when the system does not understand.",
    ],
  },

  "dental-insurance-ar-benchmark": {
    standfirst:
      "We pulled aging reports from thirty practices we do billing for, split by size and payer mix. The gap between the top third and the bottom third came down to one weekly habit.",
    author: PRIYA,
    body: [
      {
        kind: "para",
        text: "Days in accounts receivable is the metric dental practices quote and the one they most often compute differently from each other, so start with definitions: total AR divided by average daily net production, all payers, including patient balances. Every figure below uses that.",
      },
      {
        kind: "figures",
        items: [
          { value: "38 days", label: "Median AR across the thirty practices" },
          { value: "22 days", label: "Top third" },
          { value: "17%", label: "Median share of AR over 90 days" },
        ],
      },
      {
        kind: "para",
        text: "The distribution is wide and it is not explained by practice size. We had a two-chair practice at 19 days and a nine-operatory group at 61. It is also only weakly explained by payer mix — the heavy-PPO practices were slower on average, but the spread within each mix band was larger than the spread between bands.",
      },
      { kind: "heading", text: "What separated the top third" },
      {
        kind: "para",
        text: "One habit, present in nine of the ten fastest practices and in two of the ten slowest: somebody works the aging report on a fixed day every week, and that person is not the person who also runs the front desk during clinic hours.",
      },
      {
        kind: "quote",
        text: "Claims do not age because nobody knows how to follow up. They age because the person responsible is also seating patients, and the report is the only task in the building with no one standing in front of it.",
        attribution: "Priya Raghavan, Delivery Lead, Bookkeeping & Billing",
      },
      { kind: "heading", text: "The rest of the pattern" },
      {
        kind: "list",
        items: [
          "Claims submitted same-day, not batched weekly. Batching adds three to four days at the front of every claim's life and nobody notices, because it is invisible on the aging report.",
          "Attachments sent with the claim rather than after the request. Perio charting, radiographs and narratives supplied up front eliminated the most common denial reason in the sample.",
          "Eligibility verified before the appointment, not at check-in. Practices doing this had materially lower write-offs, not just faster AR.",
          "Denials worked within seven days. Past thirty, recovery rate drops sharply; past ninety, most practices are writing them off regardless of merit.",
          "Patient balances billed on a schedule with a real cadence — statement, statement, call, not four statements and silence.",
        ],
      },
      { kind: "heading", text: "The 90-day number" },
      {
        kind: "para",
        text: "Median share of AR over 90 days was 17%, and the top-third practices ran under 8%. This is the figure we would watch instead of headline AR days, because it is where the money actually dies. A practice at 38 days with 6% over 90 is healthy. A practice at 38 days with 28% over 90 has a fast-moving current book concealing a pile of dead claims, and its real problem is larger than the headline suggests.",
      },
      {
        kind: "callout",
        title: "The 90-minute weekly block",
        text: "Pick a day. Block ninety minutes. Work the over-60 bucket first, oldest first, and log every call. Practices that started this saw over-90 AR fall by roughly a third within two quarters, without any change in software or staffing.",
      },
      {
        kind: "para",
        text: "Sample is thirty practices we provide billing services to across New York, New Jersey and Connecticut, reporting periods within the last eighteen months. That is a real limitation: these are practices that had already decided to outsource billing, which is not a random sample of dental practices. Read the spread as directional rather than as a national norm.",
      },
    ],
    takeaways: [
      "Median AR was 38 days; the top third ran 22, and practice size did not explain the gap.",
      "The differentiator was a fixed weekly block worked by someone not covering the desk.",
      "Watch the over-90 share, not headline AR days — that is where money is lost.",
      "Send attachments with the claim, not after the denial.",
    ],
  },

  "nyc-office-it-support-costs": {
    standfirst:
      "Break-fix, a local managed provider, a full-time hire, or a remote team. Four routes priced against the same twenty-person Manhattan office, including the costs that do not appear on the invoice.",
    author: TOM,
    body: [
      {
        kind: "para",
        text: "The office in this comparison is real, anonymized, and typical: twenty-two staff across two floors of a Midtown building, Microsoft 365, a file server nobody wants to talk about, about forty devices including personal phones with work email, and one partner who has become the de facto IT person because he is the least afraid of it.",
      },
      { kind: "heading", text: "Route one: break-fix" },
      {
        kind: "para",
        text: "Call someone when it breaks. Manhattan hourly rates for on-site work run $150 to $225, with a two-hour minimum and, in practice, a two-to-three-day wait for anything not on fire. The annual invoice for an office this size lands somewhere between $9,000 and $18,000 depending on the year, which makes it look like the cheap option.",
      },
      {
        kind: "para",
        text: "It is not, and the reason is that break-fix has no incentive to prevent anything. There is no patching, no backup verification, no offboarding, and no inventory. The partner absorbs all of that. Price his hours at anything realistic and this route is the most expensive on the list.",
      },
      { kind: "heading", text: "Route two: a local managed provider" },
      {
        kind: "figures",
        items: [
          { value: "$125–$200", label: "Per user per month, NYC managed provider" },
          { value: "$33k–$53k", label: "Annual, 22 users" },
          { value: "4 hrs", label: "Typical contracted response, business hours" },
        ],
      },
      {
        kind: "para",
        text: "This buys monitoring, patching, backup, a help desk and someone accountable. It is the default answer and it is a reasonable one. The two things to check before signing: whether on-site visits are included or billed separately, and whether the contract covers project work or only support. Most disappointment with managed providers traces to one of those two lines.",
      },
      { kind: "heading", text: "Route three: hire someone" },
      {
        kind: "para",
        text: "A capable generalist IT administrator in New York costs $85,000 to $115,000 base, plus payroll taxes and benefits — call it $110,000 to $150,000 fully loaded. For twenty-two users that is dramatically more than managed service, and you have bought a single point of failure who takes vacations and eventually leaves. At around sixty to eighty users the arithmetic reverses and a hire starts making sense. Below forty it rarely does.",
      },
      { kind: "heading", text: "Route four: a remote team" },
      {
        kind: "para",
        text: "Named remote engineers covering help desk, patching, backups and user administration, with a local on-site technician retained for hardware. This is what we run for offices in this band. The economics sit below a local managed provider for equivalent coverage, and the meaningful difference is that you get named people rather than a ticket queue — the same engineer who set up your file permissions is the one who answers when they break.",
      },
      {
        kind: "quote",
        text: "The question is not which route is cheapest. It is which route has somebody whose job it is to notice that the backup stopped running in March.",
        attribution: "Tom Okonkwo, Principal, IT & Security",
      },
      { kind: "heading", text: "The costs nobody quotes" },
      {
        kind: "list",
        items: [
          "Downtime. Twenty-two people idle for two hours is roughly a week of one person's output, and it happens more than once a year on break-fix.",
          "Offboarding that does not happen. Every departed employee with a live account is an open door, and on break-fix nobody owns closing it.",
          "The partner's time. Almost always the largest hidden number, and never on any invoice.",
          "Software nobody cancelled. We routinely find 15–25% of licenses assigned to people who left.",
          "The file server. Every office in this band has one, none of them have a plan for it, and its failure is the event that turns an IT decision into a business continuity event.",
        ],
      },
      {
        kind: "callout",
        title: "Before you get quotes",
        text: "Count your licenses against your current staff list, and check when your backup last completed a verified restore. Those two answers will tell you more about your current arrangement than any proposal you receive, and both are free to obtain.",
      },
      {
        kind: "para",
        text: "Rates above are New York metro, which runs 20–35% above the national median for on-site labor. The structure of the comparison holds anywhere; scale the local-provider and hire figures to your market and the crossover point moves, but the ordering does not.",
      },
    ],
    takeaways: [
      "Break-fix looks cheapest on the invoice and is usually dearest once the partner's hours count.",
      "Managed service in NYC runs $125–$200 per user per month for a 22-person office.",
      "An in-house hire rarely makes sense below about sixty users.",
      "Check licenses against your staff list and verify a restore before requesting quotes.",
    ],
  },

  "google-business-profile-law-firm": {
    standfirst:
      "We scored the Google Business Profiles of sixty Manhattan and Brooklyn law firms against where each one appeared in the local pack. Three factors correlated. Most of the things firms spend money on did not.",
    author: DANNY,
    body: [
      {
        kind: "para",
        text: "Sixty firms, two to thirty attorneys, sampled across personal injury, immigration, family and estate practice. For each we recorded profile completeness, review count, average rating, review response rate, photo recency, category selection and post frequency, then checked local-pack position for four practice-relevant searches from three locations in each borough.",
      },
      {
        kind: "para",
        text: "This is correlation on a small sample, not a controlled experiment, and Google's ranking is not knowable from outside. Read it as where to look first, not as a formula.",
      },
      { kind: "heading", text: "What tracked with position" },
      {
        kind: "figures",
        items: [
          { value: "94%", label: "Review response rate, top-ranked firms" },
          { value: "41%", label: "Review response rate, everyone else" },
          { value: "3.1×", label: "Review count, top decile vs median" },
        ],
      },
      {
        kind: "list",
        ordered: true,
        items: [
          "Review response rate. The strongest and cheapest signal in the sample. Firms ranking in the top three replied to nearly every review; the rest replied to fewer than half. Responding costs nothing and almost nobody does it consistently.",
          "Review volume, and specifically recency. Firms with a steady trickle outranked firms with a larger total accumulated years ago. Twenty reviews in the last year beat eighty reviews from 2021.",
          "Category precision. Firms using a specific primary category — \"Personal injury attorney\" rather than \"Law firm\" — ranked better for the searches that matched it. A third of the sample was still set to the generic category.",
        ],
      },
      { kind: "heading", text: "What did not track" },
      {
        kind: "list",
        items: [
          "Average star rating, above about 4.2. A 4.9 did not beat a 4.5 with more reviews and more replies.",
          "Google Posts frequency. We found no relationship. Firms publishing weekly did no better than firms who had never posted.",
          "Website quality, as far as the local pack is concerned. Several visibly dated sites ranked well. Site quality matters enormously for conversion once someone clicks — it just does not appear to be what puts the pin on the map.",
          "Firm size. Two-attorney firms outranked twenty-attorney firms routinely.",
        ],
      },
      {
        kind: "quote",
        text: "The most expensive thing on a firm's marketing invoice was the least correlated with whether anyone found them on a map. The cheapest thing — replying to reviews — was the most.",
        attribution: "Danny Fitzgerald, Head of Growth Services",
      },
      { kind: "heading", text: "The ethics footnote that matters for lawyers" },
      {
        kind: "para",
        text: "Attorney advertising is regulated and review solicitation is a live issue. New York's rules restrict testimonials in specific ways, and a response that confirms a person was a client can itself raise confidentiality questions. The safe pattern most firms settle on: reply to every review, thank the reviewer, never confirm or deny an engagement, never discuss any matter, and direct anything substantive offline. Ask your ethics counsel once and write down the approved response templates.",
      },
      {
        kind: "callout",
        title: "The 30-day test",
        text: "Reply to every review you have, oldest to newest, using an approved template. Set your primary category to the most specific one that fits. Ask three recent satisfied clients for a review, then three more in a fortnight. Check your profile insights for calls at day one and day thirty. It costs nothing but the hour.",
      },
      {
        kind: "para",
        text: "Firms outside New York should substitute their own state bar's advertising rules, which vary considerably on testimonials. The ranking pattern itself is not local to New York — we have seen the same three factors dominate in every metro we have looked at.",
      },
    ],
    takeaways: [
      "Review response rate was the strongest correlate with local-pack position, and is free.",
      "Recent reviews outweigh a large old total — steady beats bursty.",
      "Set the most specific primary category; a third of firms were still on \"Law firm\".",
      "Check your state bar's advertising rules and pre-approve response templates.",
    ],
  },

  "pharmacy-technician-hiring-nyc": {
    standfirst:
      "Sarah Whitfield has staffed independent pharmacies across the five boroughs for six years. We asked her why the same three-week vacancy keeps happening, and what actually stops it.",
    author: SARAH,
    body: [
      {
        kind: "para",
        text: "Independent pharmacies in New York compete for technicians against chains, hospital systems and, increasingly, mail-order operations — all of which pay more and offer schedules an independent cannot match. The vacancy is not a recruiting failure. It is a structural wage gap, and the businesses that solve it mostly solve it by changing the job rather than by winning the bidding.",
      },
      { kind: "heading", text: "The numbers we see" },
      {
        kind: "figures",
        items: [
          { value: "34 days", label: "Median time to fill a technician role" },
          { value: "28%", label: "Annual turnover, independents in our sample" },
          { value: "$4–$7", label: "Hourly gap vs chain and hospital employers" },
        ],
      },
      {
        kind: "para",
        text: "Thirty-four days is the median and the tail is long — we have seen ninety. And the cost is not the recruiting; it is that during those thirty-four days the pharmacist is doing technician work, which means the pharmacist is not doing the clinical services that carry margin.",
      },
      { kind: "heading", text: "Why people leave" },
      {
        kind: "para",
        text: "In exit conversations, pay is cited but it is rarely first. First is almost always the phone. A technician hired to do intake, insurance and compounding spends a large share of the day answering refill calls, which is neither what they trained for nor what they enjoy, and it is the part of the job that makes the counter chaotic.",
      },
      {
        kind: "quote",
        text: "You cannot outbid a hospital system. You can offer a job where the person does the work they were trained to do, which turns out to be worth about two dollars an hour to most technicians.",
        attribution: "Sarah Whitfield, People Operations Lead",
      },
      { kind: "heading", text: "What works" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Move the phone off the counter. Refill calls and insurance follow-up are the two largest consumers of technician time and the two least connected to why they took the job. Independents that separated these saw turnover fall well before they changed wages.",
          "Publish a real schedule two weeks out and hold it. Unpredictability is the second complaint and costs nothing to fix.",
          "Pay for and protect the certification path. Sponsorship plus paid study time is a smaller expense than one vacancy and dramatically improves retention in the first two years.",
          "Hire from the neighborhood. Commute is a bigger factor in New York than in almost any other market — a technician who walks to work leaves for a smaller raise than one who takes two trains.",
          "Cross-train two people on every critical task. The reason a resignation becomes a crisis is that one person knew how to do prior authorizations.",
        ],
      },
      { kind: "heading", text: "On the wage gap itself" },
      {
        kind: "para",
        text: "Do not pretend it is not there. The independents that recruit best in our experience name it in the interview — we pay a dollar less than the chain down the street, here is what you get instead — and then are specific about the trade. Candidates who take that job knowingly stay. Candidates recruited on the implication that pay is competitive leave within the year when they discover it is not.",
      },
      {
        kind: "callout",
        title: "Before you post the role",
        text: "List every task the vacancy covers and mark which ones require a technician. If more than a third do not, you are recruiting for a job description that is part of why the last person left. Fix the description first — you may find you need a smaller role, filled faster.",
      },
      {
        kind: "para",
        text: "The commute point is genuinely New York-specific. Everything else in this piece we see equally in the independents we support in Pennsylvania and Ohio, where the wage gap is narrower but the phone problem is identical.",
      },
    ],
    takeaways: [
      "Median time to fill is 34 days, during which the pharmacist absorbs technician work.",
      "The phone, not pay, is the most-cited reason technicians leave independents.",
      "Certification sponsorship costs less than a single vacancy.",
      "Name the wage gap in the interview and be specific about the trade.",
    ],
  },

  "engineering-firm-file-management": {
    standfirst:
      "Tom Okonkwo has migrated a dozen small structural and MEP practices off the shared drive they outgrew. We asked what breaks first, and what he would do differently at a three-person firm.",
    author: TOM,
    body: [
      {
        kind: "para",
        text: "A small engineering practice has a file problem that a law firm or a clinic does not: the files are enormous, they are actively linked to each other, and two people editing the same model at once is a normal working day rather than an accident. Every generic \"just move it to the cloud\" answer breaks on one of those three facts.",
      },
      { kind: "heading", text: "What breaks first" },
      {
        kind: "para",
        text: "Linked references. A central building model or a set of externally referenced drawings depends on paths. Move the folder structure and the links break; sync the folder with a consumer file-sync tool and you get conflicted copies of a central model, which is worse than a break because nobody notices for a week.",
      },
      {
        kind: "figures",
        items: [
          { value: "2–8 GB", label: "Typical active project folder, small structural firm" },
          { value: "40–60 ms", label: "Latency above which model opens become painful" },
          { value: "3", label: "Copies of everything, one off-site, one offline" },
        ],
      },
      { kind: "heading", text: "The split that works" },
      {
        kind: "list",
        items: [
          "Active models stay on something fast and local to whoever is drawing — either an on-premise server with proper remote access, or a purpose-built cloud service for the specific software. Not a general file-sync product.",
          "Everything else — correspondence, submittals, calculations, PDFs, closed projects — moves to cloud storage. This is usually 80% of the volume and none of the difficulty.",
          "Archives go to cheap cold storage after project close, with a written retention period. Engineering records carry long statutory and insurance-driven retention; check yours before deleting anything.",
        ],
      },
      {
        kind: "quote",
        text: "The mistake is treating it as one problem. Active models and everything else have completely different requirements, and the firms that struggle are the ones that picked a single product for both.",
        attribution: "Tom Okonkwo, Principal, IT & Security",
      },
      { kind: "heading", text: "Remote staff and home connections" },
      {
        kind: "para",
        text: "The instinct is a VPN back to the office server. For large models over a residential connection this is usually miserable, because you are pulling gigabytes across a link designed for streaming. The pattern that works better is to move the workstation, not the file: a remote desktop session to a machine sitting next to the data, so only pixels cross the connection. It costs more per seat and it works at any distance, which for a firm with a drafter in another state is the whole argument.",
      },
      { kind: "heading", text: "At three people, specifically" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Do not buy a server. At this size the maintenance burden lands on whoever is least busy, which is a principal.",
          "Use the cloud service your primary design software vendor offers for active models. It is built for the linking behavior and it is one fewer thing to be responsible for.",
          "Put everything else in a single business cloud storage tenant with a folder structure you write down.",
          "Three copies, one off-site, one offline. Ransomware at a small engineering firm is a business-ending event, because the deliverable and the archive are the same asset.",
          "Test a restore of one project folder every quarter. Put it in the calendar with a name, because it will not otherwise happen.",
        ],
      },
      {
        kind: "callout",
        title: "The question that reveals the state of things",
        text: "Ask whoever knows most about your files: if the office flooded tonight, what would we have tomorrow morning, and how long would it take to draw with it? If the answer takes more than a minute to produce, that is the project.",
      },
      {
        kind: "para",
        text: "The New York angle here is mostly about office space — firms in the metro are paying enough per square foot that hybrid work is not optional, which forces the remote-access question earlier than it arrives elsewhere. The technical answer does not change with geography.",
      },
    ],
    takeaways: [
      "Active models and everything else are different problems — do not buy one product for both.",
      "Consumer file-sync tools create conflicted copies of central models. Avoid them entirely.",
      "Move the workstation, not the file, for remote staff on residential connections.",
      "Three copies, one off-site, one offline, with a quarterly test restore in the calendar.",
    ],
  },

  "real-estate-lead-response-nyc": {
    standfirst:
      "We timed replies to 200 portal inquiries sent to brokerages across New York City and Westchester. The median response took four hours and eleven minutes. The listings that converted answered in under five.",
    author: DANNY,
    body: [
      {
        kind: "para",
        text: "The inquiries were ordinary: a real prospective renter or buyer profile, sent through the major listing portals during business hours on weekdays, spread across two hundred distinct listings from two-agent shops to fifty-agent brokerages. We recorded time to first meaningful response, by any channel.",
      },
      {
        kind: "figures",
        items: [
          { value: "4h 11m", label: "Median time to first response" },
          { value: "23%", label: "Never received any response at all" },
          { value: "11%", label: "Responded within five minutes" },
        ],
      },
      {
        kind: "para",
        text: "The 23% is the number that should stop a broker. Nearly a quarter of paid portal inquiries — leads with a direct acquisition cost — received nothing. Not a slow reply. Nothing.",
      },
      { kind: "heading", text: "Why five minutes is the threshold" },
      {
        kind: "para",
        text: "Portal inquiries are almost never exclusive. The same person is contacting four listings in one session, often from a phone on a train. Whoever replies while they are still looking at listings has a conversation. Whoever replies four hours later is interrupting someone's evening about a property they have already stopped thinking about, and increasingly one they have already seen with someone else.",
      },
      {
        kind: "quote",
        text: "Nobody in this business believes their response time is four hours. Every broker we showed this to guessed under thirty minutes, and every one of them was wrong about their own listings.",
        attribution: "Danny Fitzgerald, Head of Growth Services",
      },
      { kind: "heading", text: "What the fast ones had in common" },
      {
        kind: "list",
        items: [
          "Someone whose actual job is to answer, rather than a rotation among agents who are showing property. Agents cannot answer inquiries in under five minutes because they are in an apartment with a client, which is where you want them.",
          "A first response that asks one question and offers two specific viewing times. Not \"thanks for your interest, an agent will contact you.\"",
          "Text as the default channel. Response rates to a text were multiples of email in our sample.",
          "Automatic acknowledgment within seconds, followed by a human within five minutes. The acknowledgment buys the window; it does not substitute for the human.",
          "Coverage extending past 6pm and across weekends, when a large share of rental inquiry volume in this market actually arrives.",
        ],
      },
      { kind: "heading", text: "The New York particulars" },
      {
        kind: "para",
        text: "Rental volume dominates and moves faster here than almost anywhere in the country — a good listing in a desirable neighborhood can be gone in forty-eight hours, which compresses the entire response window. And the recent shift in who pays the broker fee has made the first conversation more consequential: prospects now ask about fee structure immediately, and a vague answer costs the appointment. Whoever answers first needs to be able to answer that question precisely.",
      },
      {
        kind: "callout",
        title: "Measure your own",
        text: "Have someone who is not in your CRM send inquiries to six of your live listings on a Tuesday afternoon. Log what comes back and when. It takes twenty minutes and it is the only reliable way to find out, because your CRM records when the lead was worked, not when the prospect heard from a person.",
      },
      {
        kind: "para",
        text: "Outside New York the response window is wider — in most markets we have looked at, under an hour is competitive rather than under five minutes. The failure mode is identical everywhere: a quarter of paid leads get no reply, because the people responsible for replying are out doing the job.",
      },
    ],
    takeaways: [
      "Median response was 4h 11m and 23% of paid portal inquiries got no reply at all.",
      "Agents showing property cannot be your response mechanism — the roles conflict.",
      "Text beats email substantially; offer two specific times in the first message.",
      "Send test inquiries to your own listings; your CRM will not tell you the truth.",
    ],
  },

  "brokerage-commission-accounting": {
    standfirst:
      "Splits, referral fees, agent draws and 1099s. The month-end that breaks at a small brokerage is almost always the one with a co-broke in it — and the spreadsheet is usually the reason.",
    author: PRIYA,
    body: [
      {
        kind: "para",
        text: "Commission accounting is straightforward until it is not, and the point where it stops being straightforward is entirely predictable. One agent, one listing, one closing, one split: a spreadsheet handles it. Add a co-broke with a referral fee, an agent on a graduated split who just crossed a threshold mid-transaction, and a team lead taking an override, and you now have a calculation that four people will do four different ways.",
      },
      { kind: "heading", text: "Where the money actually goes wrong" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Gross versus net referral fees. Whether the referral comes off the top or off the brokerage's share changes agent pay materially, and half the brokerages we take on have never written down which one their agreements mean.",
          "Graduated splits crossing mid-year. An agent moving from 70/30 to 80/20 at a production threshold raises the question of whether the deal that crossed it is paid at the old or new rate. There is a right answer — it is whatever the agreement says — and frequently the agreement does not say.",
          "Team overrides layered on top of house splits, applied in the wrong order, producing a number that is close enough to look right.",
          "Agent draws and advances recovered against future commissions, tracked in a separate spreadsheet nobody reconciles until year end.",
          "Escrow and trust funds kept in the same mental bucket as operating money. In New York this is not merely untidy; commingling is a licensing matter.",
        ],
      },
      {
        kind: "figures",
        items: [
          { value: "3–5", label: "Adjusting entries per month, typical small brokerage" },
          { value: "~40%", label: "Of those traced to co-broke or referral treatment" },
          { value: "Jan", label: "When draw balances are usually discovered" },
        ],
      },
      {
        kind: "quote",
        text: "Nobody discovers a commission error in the month it happens. They discover it in January when the 1099 does not match what the agent believes they earned, and by then it is a relationship problem rather than a bookkeeping one.",
        attribution: "Priya Raghavan, Delivery Lead, Bookkeeping & Billing",
      },
      { kind: "heading", text: "What to fix, in order" },
      {
        kind: "list",
        ordered: true,
        items: [
          "Write down the calculation order. Gross commission, then off-the-top items, then house split, then team override, then agent deductions. One page, agreed by the principal, applied identically every time.",
          "State the referral treatment explicitly in the independent contractor agreement. If existing agreements are silent, amend them rather than continuing to decide case by case.",
          "Separate trust from operating completely — different accounts, different reconciliations, no transfers without documentation.",
          "Track draws in the ledger as advances against commission, not in a side spreadsheet. They are receivable balances and they belong on the books.",
          "Reconcile agent commission statements monthly and send them monthly. An agent who sees their number every month will not dispute the 1099.",
        ],
      },
      {
        kind: "callout",
        title: "The test for whether you have a problem",
        text: "Take last quarter's most complicated closing — the one with a referral and a co-broke — and have two people calculate the agent's payout independently from the agreement alone. If they disagree, the spreadsheet has been carrying an undocumented decision, and it will carry it until January.",
      },
      {
        kind: "para",
        text: "New York adds the escrow point, where the rules on trust accounts and record retention are strict and enforced against the broker personally rather than the entity. Elsewhere the trust rules differ in detail but not in kind. Everything else in this piece is national — commission arithmetic does not vary by state, only the discipline around it does.",
      },
    ],
    takeaways: [
      "The calculation order must be written down once and applied identically every time.",
      "Referral fee treatment — off the top or off the house share — belongs in the agreement.",
      "Track draws in the ledger as advances, never in a side spreadsheet.",
      "Send agents a monthly commission statement and the 1099 will never be a dispute.",
    ],
  },

  "nys-paid-leave-small-employer": {
    standfirst:
      "Paid Family Leave, statutory disability, New York City safe and sick time, and paid prenatal leave. Four separate programs, four separate funding models, and one very common assumption that they are the same thing.",
    author: SARAH,
    body: [
      {
        kind: "para",
        text: "Small employers in New York routinely tell us they \"have paid leave covered,\" meaning they have one of these. There are four, they cover different events, they are funded differently, and an employee can be entitled to more than one for the same absence. This is the plain-English map; it is not legal advice, and the details change more often than any other area we advise on.",
      },
      { kind: "heading", text: "1. Paid Family Leave" },
      {
        kind: "list",
        items: [
          "Covers bonding with a new child, caring for a family member with a serious health condition, and certain military family needs. It does not cover the employee's own illness.",
          "Funded by employee payroll deduction, not by you. This is the single most common misunderstanding — it is an insurance benefit your employees pay for through a rider on your disability policy.",
          "Applies to essentially every private employer with employees in New York, with no headcount minimum.",
          "Job protection and continued health insurance during leave are part of the benefit.",
        ],
      },
      { kind: "heading", text: "2. Statutory short-term disability" },
      {
        kind: "list",
        items: [
          "Covers the employee's own off-the-job illness or injury, including pregnancy-related disability.",
          "A separate policy, separately purchased, though usually written alongside Paid Family Leave by the same carrier.",
          "The benefit level is low and has been for a long time. Many employers supplement it; none are required to.",
          "An employee cannot collect both this and Paid Family Leave simultaneously, but may use them sequentially — disability for the birth recovery, then Paid Family Leave for bonding.",
        ],
      },
      { kind: "heading", text: "3. Paid safe and sick leave" },
      {
        kind: "figures",
        items: [
          { value: "40 hrs", label: "Annual entitlement, employers under 100" },
          { value: "56 hrs", label: "Employers with 100 or more" },
          { value: "Day 1", label: "When accrual begins" },
        ],
      },
      {
        kind: "list",
        items: [
          "Usable for the employee's own illness, a family member's illness, and safe time related to domestic violence, stalking or human trafficking.",
          "Accrues from the first day of employment and carries over, subject to annual use caps.",
          "You may not require a doctor's note for absences under three consecutive workdays.",
          "There is a written policy requirement and a requirement to show accrued and used balances on the pay statement. The pay statement point is the one small employers miss.",
        ],
      },
      { kind: "heading", text: "4. Paid prenatal leave" },
      {
        kind: "para",
        text: "New York has added a separate paid prenatal leave entitlement — additional hours specifically for pregnancy-related medical appointments, distinct from and on top of sick leave. It is paid by the employer, it does not require exhausting sick time first, and it is the newest of the four, which makes it the one most likely to be missing from a policy handbook written before it existed.",
      },
      {
        kind: "quote",
        text: "The compliance failure is almost never refusing leave. It is a handbook written three years ago, a pay statement missing an accrual balance, and a manager who told someone to bring a note for one sick day.",
        attribution: "Sarah Whitfield, People Operations Lead",
      },
      {
        kind: "callout",
        title: "The annual half-day",
        text: "Once a year, check four things: that your handbook names all four programs, that your Paid Family Leave deduction rate matches the current year's rate, that sick leave accrual appears on pay statements, and that your prenatal leave policy exists. That is the whole exercise, and it is where nearly every problem we are asked to fix would have been caught.",
      },
      {
        kind: "para",
        text: "For readers elsewhere: paid family leave programs now operate in a dozen states with different funding models — some employer-funded, some employee-funded, some split — and paid sick leave mandates are near-universal in major metros. The structural lesson travels even where the specifics do not. These are separate programs that stack, and assuming one policy covers all of them is how small employers get caught.",
      },
    ],
    takeaways: [
      "Four separate programs, and an employee may be entitled to more than one for the same event.",
      "Paid Family Leave is funded by employee deduction, not by the employer.",
      "Sick leave accrual balances must appear on the pay statement.",
      "Paid prenatal leave is newest and most often missing from older handbooks.",
    ],
  },
};

export const getArticle = (slug: string): Article | undefined => ARTICLES[slug];
