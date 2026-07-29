import Link from "next/link";
import type { Resource } from "@/lib/resources";
import { cn } from "@/lib/utils";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import {
  ArtChip,
  CARD_TITLE_LINK,
  ResourceArt,
  ResourceMeta,
  STRETCHED,
} from "./ResourceCard";

export function FeaturedResources({
  primary,
  secondary,
}: {
  primary: Resource;
  secondary: Resource[];
}) {
  return (
    <section className="pb-[clamp(2rem,1.5rem+2vw,3.5rem)]">
      <Container width="wide">
        <Reveal
          variant="fade"
          className="mb-8 flex items-center gap-4 min-[901px]:mb-10"
        >
          <Eyebrow>Featured</Eyebrow>
          {/* The rule grows out of the label rather than sitting under it. */}
          <span
            aria-hidden
            className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-ink-200),transparent)]"
          />
        </Reveal>

        <div
          className={cn(
            "grid gap-10",
            "min-[901px]:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] min-[901px]:items-stretch",
          )}
        >
          <FeaturedPrimary resource={primary} />

          <ol className="flex flex-col justify-center border-ink-900/10 min-[901px]:border-l min-[901px]:pl-10">
            {secondary.map((resource, index) => (
              <FeaturedSecondary
                key={resource.slug}
                resource={resource}
                index={index}
              />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function FeaturedPrimary({ resource }: { resource: Resource }) {
  return (
    <article className="group relative flex h-full flex-col gap-5">
      <Reveal
        variant="clip"
        className="relative min-[901px]:flex-1 min-[901px]:[&>div]:h-full"
      >
        <ResourceArt
          resource={resource}
          className="aspect-[16/10] min-[901px]:aspect-auto min-[901px]:min-h-[19rem]"
        />
        <ArtChip className="left-4 top-4">{resource.type}</ArtChip>
        <ArtChip className="right-4 top-4 normal-case tracking-normal">
          {resource.readTime} min read
        </ArtChip>
      </Reveal>

      <Reveal delay={120} className="grid gap-3">
        <ResourceMeta resource={resource} />
        <h2 className="font-display text-2xl font-bold leading-[1.15] tracking-tighter text-balance text-ink-900 min-[901px]:text-3xl">
          <Link
            href={`/resources/${resource.slug}`}
            className={cn(STRETCHED, CARD_TITLE_LINK)}
          >
            {resource.title}
          </Link>
        </h2>
        <p className="max-w-[58ch] text-base text-ink-500">{resource.excerpt}</p>
      </Reveal>
    </article>
  );
}

function FeaturedSecondary({
  resource,
  index,
}: {
  resource: Resource;
  index: number;
}) {
  return (
    <Reveal
      as="li"
      variant="right"
      delay={index * 110}
      className={cn(
        "group relative grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4",
        "border-t border-ink-900/10 py-5 first:border-t-0 first:pt-0 last:pb-0",
        "min-[901px]:gap-5",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "font-display text-sm font-extrabold tabular-nums text-ink-300",
          "transition-colors duration-[280ms] ease-out-quad group-hover:text-ink-900",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="grid gap-1.5">
        <h3 className="font-display text-lg font-bold leading-[1.3] tracking-tight text-balance text-ink-900">
          <Link
            href={`/resources/${resource.slug}`}
            className={cn(STRETCHED, CARD_TITLE_LINK)}
          >
            {resource.title}
          </Link>
        </h3>
        <ResourceMeta resource={resource} className="gap-2">
          <span>{resource.type}</span>
        </ResourceMeta>
      </div>

      <ResourceArt
        resource={resource}
        compact
        className="size-[5rem] shrink-0 rounded-lg min-[901px]:size-[6rem]"
      />
    </Reveal>
  );
}
