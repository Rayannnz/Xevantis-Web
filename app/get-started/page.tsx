import type { Metadata } from "next";
import { SERVICE_SUMMARY_GROUPS } from "@/lib/services";
import { MIN_HOURLY_RATE, usd } from "@/lib/leads";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container, Eyebrow, PillGlass, PulseDot, TextLink } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { GetStartedForm } from "@/components/get-started/GetStartedForm";

const TITLE = `Get started — build your team from ${usd(MIN_HOURLY_RATE)}/hour | ${SITE_NAME}`;
const DESCRIPTION = `Tell us what you need covered and we'll come back within one business day with who we'd put on it, when they'd start and what it costs a month. Rates start at ${usd(MIN_HOURLY_RATE)} an hour.`;

/** Sales owns this inbox; the form posts to it and the page links it directly. */
const SALES_EMAIL = "Sales@xevantis.com";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/get-started") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/get-started"),
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Get started with Xevantis",
    description: DESCRIPTION,
    url: absoluteUrl("/get-started"),
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      email: SALES_EMAIL,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SALES_EMAIL,
        areaServed: "US",
        availableLanguage: "English",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Get started",
        item: absoluteUrl("/get-started"),
      },
    ],
  },
];

/** The registry, reduced to what a <select> needs. Names only — no icons, no JSX. */
const SERVICE_OPTION_GROUPS = SERVICE_SUMMARY_GROUPS.map((group) => ({
  heading: group.heading,
  options: group.services.map((service) => service.name),
}));

const NEXT_STEPS = [
  {
    title: "We read it, not a bot",
    detail: "Within one business day, from the delivery lead who would run your account.",
  },
  {
    title: "A 20-minute scoping call",
    detail: "Your volumes, your systems, the hours that actually need covering.",
  },
  {
    title: "Named people, a start date, a monthly number",
    detail: "You meet them before you commit. Most accounts start inside two weeks.",
  },
];

export default function GetStartedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main id="main" tabIndex={-1}>
        <section className="noise relative isolate animate-aurora overflow-clip bg-aurora pb-[clamp(2.5rem,2rem+3vw,4rem)] pt-[calc(var(--header-height)+clamp(2.5rem,2rem+4vw,5rem))]">
          <Container width="wide">
            <Reveal as="span" className="inline-block">
              <Eyebrow>Get started</Eyebrow>
            </Reveal>

            <SplitWords
              text="Tell us what needs covering."
              stagger={55}
              className="mt-3 max-w-[16ch] font-display text-hero font-extrabold tracking-tighter"
            />

            <Reveal as="p" delay={220} className="mt-5 max-w-[56ch] text-lg text-ink-700">
              Three short steps. You&rsquo;ll see a monthly ballpark as you fill it in, and
              one reply lands within one business day with who we&rsquo;d put on it and when
              they&rsquo;d start.
            </Reveal>

            <Reveal delay={320} className="mt-7 flex flex-wrap items-center gap-3">
              <PillGlass>
                <PulseDot />
                Rates start at {usd(MIN_HOURLY_RATE)}/hour
              </PillGlass>
              <PillGlass>No contract to read first</PillGlass>
              <PillGlass>Most accounts start in 2 weeks</PillGlass>
            </Reveal>
          </Container>
        </section>

        <section className="py-[var(--section-y-tight)]">
          <Container width="wide">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
              <GetStartedForm serviceGroups={SERVICE_OPTION_GROUPS} />

              {/* Supporting copy, so it follows the form on small screens. */}
              <aside className="grid gap-6 lg:sticky lg:top-[calc(var(--header-height)+1.5rem)]">
                <div className="rounded-lg border border-ink-900/10 bg-paper-000 p-[var(--card-padding)] shadow-sm">
                  <h2 className="font-display text-sm font-bold uppercase tracking-widest text-ink-400">
                    What happens next
                  </h2>
                  <ol className="mt-5 grid gap-5">
                    {NEXT_STEPS.map((step, index) => (
                      <li key={step.title} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-[0.15rem] grid size-6 shrink-0 place-items-center rounded-full bg-ink-900 font-display text-2xs font-bold text-paper-050"
                        >
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-display text-sm font-semibold">{step.title}</p>
                          <p className="mt-1 text-sm text-ink-500">{step.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-lg bg-ink-900 p-[var(--card-padding)] text-paper-050">
                  <h2 className="font-display text-lg font-bold tracking-tight">
                    Rather just write to us?
                  </h2>
                  <p className="mt-2 text-sm text-paper-050/70">
                    The form goes to the same inbox. Either way a person reads it.
                  </p>
                  <TextLink
                    href={`mailto:${SALES_EMAIL}`}
                    className="mt-4 text-paper-050 hover:text-sun-300"
                  >
                    {SALES_EMAIL}
                  </TextLink>
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
