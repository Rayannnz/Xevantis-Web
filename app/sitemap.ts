import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/lib/services";
import { RESOURCES } from "@/lib/resources";
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
    {
      url: absoluteUrl("/resources"),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    // Articles carry their own publication date — unlike the static shell,
    // these genuinely were modified when they were written.
    ...RESOURCES.map((resource) => ({
      url: absoluteUrl(`/resources/${resource.slug}`),
      lastModified: new Date(resource.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
