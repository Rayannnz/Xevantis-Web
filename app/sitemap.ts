import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/lib/services";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

/**
 * Service pages carry the commercial intent, so they sit above the marketing
 * shell in priority. `lastModified` is build time — these are static pages
 * regenerated on deploy, so the deploy is the modification.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...SERVICE_SLUGS.map((slug) => ({
      url: absoluteUrl(`/services/${slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
