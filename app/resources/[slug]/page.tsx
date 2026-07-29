import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getRelatedResources,
  getResource,
  RESOURCE_SLUGS,
} from "@/lib/resources";
import { getArticle } from "@/lib/resources/articles";
import { articleMetadata } from "@/lib/seo";
import { ArticlePage } from "@/components/resources/ArticlePage";

/**
 * A dynamic segment rather than fifteen hand-written folders.
 *
 * Service routes are written out by hand because each carries a ~370-line
 * content module and its own metadata call. Articles share one shape and one
 * composition, so `generateStaticParams` prerenders the same fifteen pages
 * from the registry with none of the duplication.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return RESOURCE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);

  return resource ? articleMetadata(resource) : {};
}

export default async function ResourceArticleRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  const article = resource ? getArticle(slug) : undefined;

  // A catalogue entry with no body would otherwise render an empty article.
  if (!resource || !article) notFound();

  return (
    <ArticlePage
      resource={resource}
      article={article}
      related={getRelatedResources(resource)}
    />
  );
}
