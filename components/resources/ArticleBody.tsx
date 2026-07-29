import type { ArticleBlock } from "@/lib/resources";
import type { Accent } from "@/lib/types";
import { ACCENT_TILE, ACCENT_WASH } from "@/lib/accent-classes";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { QuoteMark } from "@/components/icons";

/**
 * Renders the typed block list from `lib/resources/articles.ts`.
 *
 * The measure is capped at 68ch to match the prose elsewhere in the codebase;
 * pull quotes and figure rows deliberately break out of it, which is what makes
 * a long read scan as an article rather than a wall.
 */
const MEASURE = "max-w-[68ch]";

export function ArticleBody({
  blocks,
  accent,
}: {
  blocks: ArticleBlock[];
  accent: Accent;
}) {
  return (
    <div className="grid gap-6">
      {blocks.map((block, index) => (
        <Block key={index} block={block} accent={accent} />
      ))}
    </div>
  );
}

function Block({ block, accent }: { block: ArticleBlock; accent: Accent }) {
  switch (block.kind) {
    case "heading":
      return (
        <Reveal
          as="h2"
          variant="fade"
          className={cn(
            MEASURE,
            "mt-6 font-display text-2xl font-bold leading-snug tracking-tighter",
          )}
        >
          {block.text}
        </Reveal>
      );

    case "para":
      return (
        <Reveal as="p" variant="fade" className={cn(MEASURE, "text-lg text-ink-700")}>
          {block.text}
        </Reveal>
      );

    case "list":
      return (
        <Reveal variant="fade" className={MEASURE}>
          <ListBlock
            ordered={block.ordered}
            items={block.items}
            accent={accent}
          />
        </Reveal>
      );

    case "quote":
      return (
        <Reveal variant="scale" className="my-4">
          <figure
            className={cn(
              "relative overflow-hidden rounded-2xl p-[var(--card-padding)]",
              "border border-ink-900/10",
              ACCENT_WASH[accent],
            )}
          >
            <QuoteMark
              aria-hidden
              className="absolute -right-2 -top-3 size-24 text-ink-900/10"
            />
            <blockquote className="relative max-w-[52ch] font-display text-xl font-bold leading-snug tracking-tight">
              {block.text}
            </blockquote>
            <figcaption className="relative mt-4 text-sm font-semibold text-ink-500">
              — {block.attribution}
            </figcaption>
          </figure>
        </Reveal>
      );

    case "figures":
      return (
        <Reveal
          variant="fade"
          className="my-4 grid gap-4 min-[561px]:grid-cols-3"
        >
          {block.items.map((figure) => (
            <div
              key={figure.label}
              className="rounded-xl border border-ink-900/10 bg-paper-000 p-5"
            >
              <div className="font-display text-3xl font-extrabold leading-none tracking-tighter">
                {figure.value}
              </div>
              <div className="mt-2 text-sm text-ink-500">{figure.label}</div>
            </div>
          ))}
        </Reveal>
      );

    case "callout":
      return (
        <Reveal variant="fade" className={cn(MEASURE, "my-4")}>
          <aside
            className={cn(
              "rounded-xl border-2 border-ink-900 bg-paper-000 p-[var(--card-padding)]",
              "shadow-sticker",
            )}
          >
            <h3 className="mb-2 flex items-center gap-2 font-display text-base font-bold tracking-tight">
              <span
                aria-hidden
                className={cn("size-3 shrink-0 rounded-full", ACCENT_TILE[accent])}
              />
              {block.title}
            </h3>
            <p className="text-base text-ink-600">{block.text}</p>
          </aside>
        </Reveal>
      );
  }
}

function ListBlock({
  ordered,
  items,
  accent,
}: {
  ordered?: boolean;
  items: string[];
  accent: Accent;
}) {
  const content = items.map((item, index) => (
    <li key={item} className="flex gap-3 text-lg text-ink-700">
      <span
        aria-hidden
        className={cn(
          "mt-[0.45em] grid shrink-0 place-items-center rounded-full font-display text-2xs font-bold text-ink-900",
          ordered ? "size-[1.4em] text-[0.62em]" : "size-[0.55em]",
          ACCENT_TILE[accent],
        )}
      >
        {ordered ? index + 1 : null}
      </span>
      <span>{item}</span>
    </li>
  ));

  return ordered ? (
    <ol className="grid gap-3">{content}</ol>
  ) : (
    <ul className="grid gap-3">{content}</ul>
  );
}
