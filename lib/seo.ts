import type { Metadata } from "next";
import type { ServiceContent } from "./services/types";
import type { Article, Resource } from "./resources/types";

/**
 * Absolute origin for canonicals, OpenGraph and JSON-LD.
 *
 * Set `NEXT_PUBLIC_SITE_URL` per environment (preview deploys included) —
 * without it every canonical on a preview would point at production.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://xevantis.com"
).replace(/\/$/, "");

export const SITE_NAME = "Xevantis";

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Metadata for one service page. Title/description come from the data file. */
export function serviceMetadata(service: ServiceContent): Metadata {
  const url = absoluteUrl(`/services/${service.slug}`);
  const { title, description } = service.seo;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Metadata for one article. `article` OpenGraph, unlike the page-level pages. */
export function articleMetadata(resource: Resource): Metadata {
  const url = absoluteUrl(`/resources/${resource.slug}`);
  const title = `${resource.title} — ${SITE_NAME}`;

  return {
    title,
    description: resource.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: SITE_NAME,
      title,
      description: resource.excerpt,
      publishedTime: resource.date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: resource.excerpt,
    },
  };
}

/** Schema.org `BlogPosting` plus a breadcrumb back through the library. */
export function articleJsonLd(resource: Resource, article: Article) {
  const url = absoluteUrl(`/resources/${resource.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: resource.title,
      description: resource.excerpt,
      url,
      datePublished: resource.date,
      // No editing history is tracked, so publication is the last known change.
      dateModified: resource.date,
      articleSection: resource.type,
      keywords: [resource.service, resource.industry, resource.type],
      author: {
        "@type": "Person",
        name: article.author.name,
        jobTitle: article.author.role,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: absoluteUrl("/img/logo-valentisys.png"),
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Resources",
          item: absoluteUrl("/resources"),
        },
        { "@type": "ListItem", position: 3, name: resource.title, item: url },
      ],
    },
  ];
}

/**
 * Schema.org `Service`, wired to the organization and the FAQ block.
 *
 * Returned as an array so one `<script>` carries both graphs — Google reads a
 * top-level array fine, and it keeps the page to a single injected node.
 */
export function serviceJsonLd(service: ServiceContent) {
  const url = absoluteUrl(`/services/${service.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.name,
      description: service.seo.description,
      url,
      serviceType: service.name,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: absoluteUrl("/img/logo-valentisys.png"),
      },
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.name} engagements`,
        itemListElement: service.included.items.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "BPO Solutions",
          item: absoluteUrl("/services"),
        },
        { "@type": "ListItem", position: 3, name: service.name, item: url },
      ],
    },
  ];
}
