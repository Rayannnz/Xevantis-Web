import type { Metadata } from "next";
import { getFeatured, RESOURCES } from "@/lib/resources";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBand } from "@/components/sections/CtaBand";
import { ResourceHero } from "@/components/resources/ResourceHero";
import { FeaturedResources } from "@/components/resources/FeaturedResources";
import { ResourceBrowser } from "@/components/resources/ResourceBrowser";

const TITLE = "Resources | Insights for building better teams — Valentisys";
const DESCRIPTION =
  "Playbooks, benchmarks and interviews on outsourcing, CX and the operating models that keep named teams shipping.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: absoluteUrl("/resources") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/resources"),
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Valentisys Resources",
  description: DESCRIPTION,
  url: absoluteUrl("/resources"),
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: RESOURCES.length,
    itemListElement: RESOURCES.map((resource, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: resource.title,
      description: resource.excerpt,
    })),
  },
};

export default function ResourcesPage() {
  const { primary, secondary } = getFeatured();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main id="main" tabIndex={-1}>
        <ResourceHero />
        {primary ? (
          <FeaturedResources primary={primary} secondary={secondary} />
        ) : null}
        <ResourceBrowser resources={RESOURCES} />
        <CtaBand />
      </main>

      <Footer />
    </>
  );
}
