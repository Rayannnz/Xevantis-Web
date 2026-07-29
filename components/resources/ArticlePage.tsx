import Link from "next/link";
import type { Article, Resource } from "@/lib/resources";
import { articleJsonLd } from "@/lib/seo";
import type { Accent } from "@/lib/types";
import { ACCENT_TILE } from "@/lib/accent-classes";
import { cn } from "@/lib/utils";
import { Container, Eyebrow, Section, Badge } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { ArrowLeft, ArrowRight, Check } from "@/components/icons";
import { ArticleBody } from "./ArticleBody";
import { ResourceArt, ResourceCard, ResourceMeta } from "./ResourceCard";

/**
 * The one composition every article route renders.
 *
 * The JSON-LD is injected here rather than in the route for the same reason
 * `ServicePage` does it: a page cannot then ship without its schema.
 */
export function ArticlePage({
  resource,
  article,
  related,
}: {
  resource: Resource;
  article: Article;
  related: Resource[];
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(resource, article)),
        }}
      />

      <Header />

      <main id="main" tabIndex={-1}>
        <ArticleHero resource={resource} article={article} />

        <Section tight flushTop>
          <Container width="page">
            <ArticleBody blocks={article.body} accent={resource.accent} />
            <Takeaways items={article.takeaways} accent={resource.accent} />
          </Container>
        </Section>

        {related.length > 0 ? <Related resources={related} /> : null}

        <CtaBand />
      </main>

      <Footer />
    </>
  );
}

function ArticleHero({
  resource,
  article,
}: {
  resource: Resource;
  article: Article;
}) {
  return (
    <section className="relative overflow-clip pb-[clamp(2rem,1.5rem+2vw,3rem)] pt-[calc(var(--header-height)+clamp(2rem,1.5rem+3vw,4rem))]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-5%] top-[-20%] -z-10 h-[120%] select-none"
      >
        <div className="absolute -left-40 -top-20 size-[26rem] animate-blob rounded-blob bg-lilac-200 opacity-45 blur-[54px]" />
        <div className="absolute -right-44 top-[8rem] size-[22rem] animate-blob rounded-blob bg-sun-200 opacity-45 blur-[58px] [animation-delay:-7s]" />
      </div>

      <Container width="page">
        <Reveal as="span" variant="fade" className="inline-block">
          <Link
            href="/resources"
            className={cn(
              "inline-flex items-center gap-2 text-sm font-semibold text-ink-500",
              "transition-colors duration-[180ms] ease-out-quad hover:text-ink-900",
              "[&>svg]:size-[1em] [&>svg]:transition-transform [&>svg]:duration-[280ms] [&>svg]:ease-out-expo",
              "hover:[&>svg]:-translate-x-[3px]",
            )}
          >
            <ArrowLeft />
            All resources
          </Link>
        </Reveal>

        <Reveal variant="fade" delay={80} className="mt-6 flex flex-wrap items-center gap-3">
          <Badge tone={resource.accent}>{resource.type}</Badge>
          <ResourceMeta resource={resource}>
            <span>{resource.service}</span>
          </ResourceMeta>
        </Reveal>

        <SplitWords
          as="h1"
          text={resource.title}
          stagger={38}
          className="mt-4 max-w-[20ch] font-display text-4xl font-extrabold tracking-tighter"
        />

        <Reveal as="p" delay={200} className="mt-5 max-w-[62ch] text-xl text-ink-500">
          {article.standfirst}
        </Reveal>

        <Reveal delay={280} className="mt-8 flex items-center gap-3">
          <span
            aria-hidden
            className={cn(
              "grid size-11 shrink-0 place-items-center rounded-full",
              "font-display text-sm font-bold text-ink-900",
              ACCENT_TILE[article.author.accent],
            )}
          >
            {article.author.initials}
          </span>
          <span className="grid">
            <span className="font-display text-base font-bold tracking-tight">
              {article.author.name}
            </span>
            <span className="text-sm text-ink-500">{article.author.role}</span>
          </span>
        </Reveal>

        <Reveal variant="clip" delay={200} className="mt-10">
          <ResourceArt
            resource={resource}
            className="aspect-[16/9] min-[721px]:aspect-[21/8]"
          />
        </Reveal>
      </Container>
    </section>
  );
}

function Takeaways({ items, accent }: { items: string[]; accent: Accent }) {
  return (
    <Reveal
      variant="scale"
      className="mt-14 max-w-[68ch] rounded-2xl border-2 border-ink-900 bg-paper-000 p-[var(--card-padding)] shadow-sticker-lg"
    >
      <Eyebrow className="mb-4">The short version</Eyebrow>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base text-ink-700">
            <span
              aria-hidden
              className={cn(
                "mt-[0.15em] grid size-5 shrink-0 place-items-center rounded-full text-ink-900",
                "[&>svg]:size-3",
                ACCENT_TILE[accent],
              )}
            >
              <Check />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function Related({ resources }: { resources: Resource[] }) {
  return (
    <Section tint="paper">
      <Container width="wide">
        <Reveal variant="fade" className="mb-10 flex items-center gap-4">
          <Eyebrow>Keep reading</Eyebrow>
          <span
            aria-hidden
            className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-ink-200),transparent)]"
          />
        </Reveal>

        {/* Always three companion pieces, so one column then three. */}
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 min-[961px]:grid-cols-3">
          {resources.map((resource, index) => (
            <Reveal as="li" key={resource.slug} delay={index * 110} className="flex">
              <ResourceCard resource={resource} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          <Button href="/resources" variant="secondary">
            <ButtonLabel>Browse the whole library</ButtonLabel>
            <ArrowRight />
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
