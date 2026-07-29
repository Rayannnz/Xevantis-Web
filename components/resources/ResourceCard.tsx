import Image from "next/image";
import Link from "next/link";
import type { Resource } from "@/lib/resources";
import { formatDate } from "@/lib/resources";
import { ACCENT_GLOW } from "@/lib/accent-classes";
import { cn } from "@/lib/utils";
import { ResourceArtIcon } from "./ResourceArtIcon";
import { ResourceScene } from "./ResourceScene";

/** Grid card at each breakpoint: three up, two up, then full bleed. */
const IMAGE_SIZES = "(min-width: 961px) 31vw, (min-width: 621px) 46vw, 92vw";

/**
 * The art panel, shared by every surface that shows a resource.
 *
 * All of the hover choreography lives here — the panel scales, the artwork
 * swells against it and the accent glow blooms underneath — so the featured
 * tile, the stacked list and the grid card stay in step without repeating the
 * classes. Callers own only the aspect ratio.
 *
 * Three ways to fill it, in order: a photograph if the resource has one, the
 * illustrated scene at any size worth drawing into, and a bare outline mark on
 * the `compact` thumbnails, where a full scene would collapse into mush.
 */
export function ResourceArt({
  resource,
  compact = false,
  className,
}: {
  resource: Resource;
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "sheen relative overflow-hidden rounded-xl",
        "transition-shadow duration-[480ms] ease-out-expo",
        ACCENT_GLOW[resource.accent],
        className,
      )}
    >
      <div
        className={cn(
          "relative grid size-full place-items-center",
          "transition-transform duration-[720ms] ease-out-expo group-hover:scale-[1.06]",
          resource.art,
        )}
      >
        {resource.image ? (
          <Image
            src={resource.image.src}
            alt={resource.image.alt}
            fill
            sizes={IMAGE_SIZES}
            className="object-cover"
          />
        ) : compact ? (
          <ResourceArtIcon
            name={resource.icon}
            size={38}
            className={cn(
              "text-ink-900/85 transition-transform duration-[720ms] ease-out-back",
              "group-hover:-rotate-[7deg] group-hover:scale-[1.1]",
            )}
          />
        ) : (
          <ResourceScene
            name={resource.icon}
            accent={resource.accent}
            className="size-full"
          />
        )}
      </div>
    </div>
  );
}

/** Compact glass chip, only ever placed over an art gradient. */
export function ArtChip({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute z-[2] inline-flex h-[28px] items-center rounded-pill px-[0.7rem]",
        "border border-white/90 bg-white/75 backdrop-blur-[14px] backdrop-saturate-[140%]",
        "font-display text-2xs font-bold uppercase tracking-widest text-ink-900",
        "transition-transform duration-[480ms] ease-out-back group-hover:-translate-y-[3px]",
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * Date · read time, plus whatever the caller appends. `<time>` carries the ISO
 * value that the en-GB display string throws away.
 */
export function ResourceMeta({
  resource,
  className,
  children,
}: {
  resource: Resource;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-ink-400",
        className,
      )}
    >
      <time dateTime={resource.date}>{formatDate(resource.date)}</time>
      <span aria-hidden>·</span>
      <span>{resource.readTime} min read</span>
      {children ? (
        <>
          <span aria-hidden>·</span>
          {children}
        </>
      ) : null}
    </div>
  );
}

/**
 * Stretched link: the anchor wraps only the headline, so its accessible name
 * is the headline rather than the date, read time and dek read out in one
 * breath — but its `::after` covers the positioned card, so the whole tile is
 * still a click target.
 */
export const STRETCHED = "after:absolute after:inset-0 after:content-['']";

/** Underline that wipes in when the card is hovered, matching `TextLink`. */
export const CARD_TITLE_LINK = cn(
  "relative bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat",
  "bg-[length:0%_2px] bg-[position:0_100%]",
  "transition-[background-size] duration-[320ms] ease-out-expo",
  "group-hover:bg-[length:100%_2px]",
);

export function ResourceCard({
  resource,
  className,
}: {
  resource: Resource;
  className?: string;
}) {
  return (
    <article className={cn("group relative flex w-full flex-col gap-4", className)}>
      <div className="relative">
        <ResourceArt resource={resource} className="aspect-[16/10]" />
        <ArtChip className="left-3 top-3">{resource.type}</ArtChip>
      </div>

      <div className="grid gap-2">
        <ResourceMeta resource={resource} />
        <h3 className="font-display text-lg font-bold leading-[1.3] tracking-tight text-balance text-ink-900">
          <Link
            href={`/resources/${resource.slug}`}
            className={cn(STRETCHED, CARD_TITLE_LINK)}
          >
            {resource.title}
          </Link>
        </h3>
        <p className="line-clamp-2 text-sm text-ink-500">{resource.excerpt}</p>
      </div>
    </article>
  );
}
