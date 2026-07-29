import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SERVICE_SUMMARY_GROUPS } from "@/lib/services";
import { ACCENT_GLOW, ACCENT_TILE } from "@/lib/accent-classes";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Container,
  Eyebrow,
  headingClass,
  leadClass,
  Section,
} from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { TrustedBy } from "@/components/service/TrustedBy";
import { ServiceCta } from "@/components/service/ServiceCta";
import { ArrowRight } from "@/components/icons";

const TITLE = "BPO Solutions | Sixteen Ways to Take Work Off Your Desk — Xevantis";
const DESCRIPTION =
  "Front desk, admin, bookkeeping, IT, HR and payroll support for clinics, dental practices, pharmacies, law firms, engineering and accounting practices and real estate agencies across the United States. Named people, working in 14 days.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/services") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/services"),
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

/** ItemList so the index is eligible as a services hub in search results. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Xevantis BPO solutions for small and local businesses",
  itemListElement: SERVICE_SUMMARY_GROUPS.flatMap((group) => group.services).map(
    (service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: absoluteUrl(`/services/${service.slug}`),
    }),
  ),
};

export default function ServicesIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main id="main" tabIndex={-1}>
        <section className="relative overflow-clip pb-[clamp(2rem,1rem+3vw,4rem)] pt-[calc(var(--header-height)+clamp(2.5rem,2rem+4vw,6rem))]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[-5%] top-[-10%] -z-10 h-[130%] select-none"
          >
            <div className="absolute -left-32 -top-24 size-[30rem] animate-blob rounded-blob bg-lilac-200 opacity-70 blur-[46px]" />
            <div className="absolute -right-40 top-[16rem] size-[24rem] animate-blob rounded-blob bg-sun-200 opacity-70 blur-[52px] [animation-delay:-6s]" />
          </div>

          <Container width="wide">
            <div className="max-w-[720px]">
              <Reveal as="span" className="inline-block">
                <Eyebrow>What we run for you</Eyebrow>
              </Reveal>

              <SplitWords
                as="h1"
                text="Sixteen BPO solutions. One person you call."
                stagger={45}
                className="mt-4 font-display text-hero font-extrabold tracking-tighter"
              />

              <Reveal as="p" delay={200} className="mt-6 max-w-[56ch] text-lg text-ink-500">
                Built for practices and firms with 3 to 100 people, anywhere in the
                United States. Take one service or take six — you interview whoever we
                put on it, you get a weekly call, and terms go month-to-month after the
                first quarter.
              </Reveal>

              <Reveal delay={300} className="mt-8 flex flex-wrap gap-3">
                <Button href="#contact" size="lg" magnetic={0.3}>
                  <ButtonLabel>Talk to someone today</ButtonLabel>
                  <ArrowRight />
                </Button>
                <Button href="/#process" variant="secondary" size="lg">
                  <ButtonLabel>See how we work</ButtonLabel>
                </Button>
              </Reveal>
            </div>
          </Container>
        </section>

        <TrustedBy label="The businesses we run this for" />

        {SERVICE_SUMMARY_GROUPS.map((group, groupIndex) => (
          <Section
            key={group.heading}
            tint={groupIndex % 2 === 1 ? "paper" : undefined}
            tight
          >
            <Container width="wide">
              <Reveal
                as="h2"
                className={cn(headingClass, "mb-3 text-3xl")}
              >
                {group.heading}
              </Reveal>
              <Reveal as="p" delay={100} className={cn(leadClass, "mb-10 max-w-[52ch]")}>
                {GROUP_BLURBS[group.heading]}
              </Reveal>

              {/* Four per group, so the grid stops at two columns — a third
                  column would leave every group with a 3 + 1 orphan row. */}
              <ul className="grid gap-4 min-[641px]:grid-cols-2">
                {group.services.map((service, index) => (
                  <Reveal as="li" key={service.slug} delay={index * 80} className="flex">
                    <Link
                      href={`/services/${service.slug}`}
                      className={cn(
                        "group flex w-full flex-col gap-4 rounded-xl border border-ink-900/10 bg-paper-000",
                        "p-[var(--card-padding)]",
                        "[transition:transform_480ms_var(--ease-out-expo),box-shadow_480ms_var(--ease-out-expo),border-color_280ms_ease]",
                        "hover:-translate-y-[6px] hover:border-transparent",
                        ACCENT_GLOW[service.accent],
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "inline-flex w-fit items-center rounded-pill px-[0.7rem] py-[0.25rem]",
                          "font-display text-2xs font-bold uppercase tracking-widest text-ink-900",
                          ACCENT_TILE[service.accent],
                        )}
                      >
                        {service.eyebrow}
                      </span>

                      <h3 className="font-display text-xl font-bold leading-snug tracking-tight">
                        {service.name}
                      </h3>
                      <p className="text-base text-ink-500">{service.summary}</p>

                      <span className="mt-auto inline-flex items-center gap-2 pt-2 font-display text-sm font-semibold">
                        Explore service
                        <ArrowRight
                          aria-hidden
                          className="size-4 transition-transform duration-[280ms] ease-out-expo group-hover:translate-x-1"
                        />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </Container>
          </Section>
        ))}

        <ServiceCta
          title="Tell us what's eating your week."
          body="One reply within a business day with who we'd put on it, when they'd start and what it costs per month. No sales sequence, and no obligation to take the shape we propose."
          accent="lilac"
          eyebrow="Start the conversation"
          primaryCta={{ label: "Book a scoping call", href: "#contact" }}
          secondaryCta={{ label: "Back to home", href: "/" }}
        />
      </main>

      <Footer />
    </>
  );
}

/** Standfirst per group. Keyed by heading so the registry stays the source of order. */
const GROUP_BLURBS: Record<string, string> = {
  "Core functions":
    "The technology, the books and the phone that brings in new business — run by named people working inside the software you already have.",
  "Customer & admin":
    "Every call from a patient or client, and every piece of paperwork behind it, handled the way your office already handles it.",
  "HR & payroll":
    "Hiring, onboarding and payroll without co-employment. You stay the employer, and every decision about your staff stays yours.",
  "Models & sectors":
    "Shaped around how you actually buy — by how small you are, by your industry, or by where you want the team to sit.",
};

