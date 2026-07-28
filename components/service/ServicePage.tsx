import type { ServiceContent, ServiceSummary } from "@/lib/services/types";
import { CONTACT_HREF, SECTION_EYEBROWS } from "@/lib/services/shared";
import { serviceJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceHero } from "./ServiceHero";
import { TrustedBy } from "./TrustedBy";
import { ServiceOverview } from "./ServiceOverview";
import { WhatsIncluded } from "./WhatsIncluded";
import { Benefits } from "./Benefits";
import { ProcessTimeline } from "./ProcessTimeline";
import { TechStack } from "./TechStack";
import { WhyChooseUs } from "./WhyChooseUs";
import { CaseStudies } from "./CaseStudies";
import { ServiceQuotes } from "./ServiceQuotes";
import { ServiceFaq } from "./ServiceFaq";
import { RelatedServices } from "./RelatedServices";
import { ServiceCta } from "./ServiceCta";

/**
 * The one composition every service route renders.
 *
 * Section order is fixed on purpose — the tint alternation (paper, ink, paper,
 * ink) is what gives the page its rhythm, and it only works if the two dark
 * bands stay where they are. Individual pages vary through their data, not
 * through their layout.
 */
export function ServicePage({
  service,
  related,
}: {
  service: ServiceContent;
  related: readonly ServiceSummary[];
}) {
  const { accent, sections } = service;

  return (
    <>
      {/* Structured data. Injected here rather than in the route so a page
          cannot ship markup without its schema. */}
      <script
        type="application/ld+json"
        // The payload is authored in-repo, never user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service)) }}
      />

      <Header />

      <main id="main" tabIndex={-1}>
        <ServiceHero service={service} />

        <TrustedBy label={service.trustLabel} />

        <ServiceOverview overview={service.overview} accent={accent} />

        <WhatsIncluded included={service.included} accent={accent} />

        <Benefits
          benefits={service.benefits}
          accent={accent}
          eyebrow={SECTION_EYEBROWS.benefits}
          title={sections.benefits.title}
          body={sections.benefits.body}
        />

        <ProcessTimeline
          phases={service.process}
          accent={accent}
          eyebrow={SECTION_EYEBROWS.process}
          title={sections.process.title}
          body={sections.process.body}
        />

        <TechStack
          tech={service.tech}
          accent={accent}
          eyebrow={SECTION_EYEBROWS.tech}
          title={sections.tech.title}
          body={sections.tech.body}
        />

        <WhyChooseUs
          differentiators={service.differentiators}
          accent={accent}
          eyebrow={SECTION_EYEBROWS.why}
          title={sections.why.title}
          body={sections.why.body}
        />

        <CaseStudies
          cases={service.cases}
          eyebrow={SECTION_EYEBROWS.cases}
          title={sections.cases.title}
          body={sections.cases.body}
          contactHref={CONTACT_HREF}
        />

        <ServiceQuotes
          quotes={service.quotes}
          accent={accent}
          eyebrow={SECTION_EYEBROWS.quotes}
        />

        <ServiceFaq
          faqs={service.faqs}
          eyebrow={SECTION_EYEBROWS.faq}
          title={sections.faq.title}
          body={sections.faq.body}
          contactHref={CONTACT_HREF}
        />

        <RelatedServices
          items={related}
          eyebrow={SECTION_EYEBROWS.related}
          title="Solutions that pair well with this one."
        />

        <ServiceCta
          title={service.cta.title}
          body={service.cta.body}
          accent={accent}
          eyebrow={SECTION_EYEBROWS.cta}
          primaryCta={service.hero.primaryCta}
          secondaryCta={{ label: "Browse all services", href: "/services" }}
        />
      </main>

      <Footer />
    </>
  );
}
