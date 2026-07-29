"use client";

import { useDeferredValue, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  countByType,
  filterResources,
  paginateResources,
  PAGE_SIZE,
  RESOURCE_INDUSTRIES,
  RESOURCE_SERVICES,
  RESOURCE_TYPES,
  type Resource,
  type ResourceFilters,
} from "@/lib/resources";
import { cn } from "@/lib/utils";
import { Container, Section } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useReveal } from "@/hooks/useReveal";
import { ResourceCard } from "./ResourceCard";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** One spring for every sliding indicator, so chips and pages feel identical. */
const SLIDE = { type: "spring", stiffness: 420, damping: 38 } as const;

const EMPTY_FILTERS: ResourceFilters = {
  type: "",
  service: "",
  industry: "",
  query: "",
};

const FIELD = cn(
  "h-[44px] w-full rounded-pill border border-ink-900/10 bg-paper-000 px-[1.1rem] text-sm text-ink-900",
  "placeholder:text-ink-400",
  "[transition:border-color_180ms_ease,box-shadow_280ms_var(--ease-out-expo)]",
  "hover:border-ink-300",
  "focus-visible:border-ink-900 focus-visible:shadow-focus-sun focus-visible:outline-none",
);

const SELECT = cn(
  FIELD,
  "cursor-pointer appearance-none bg-[length:12px] bg-[right_1.1rem_center] bg-no-repeat pr-[2.5rem]",
  "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none' stroke='%2355515f' stroke-width='1.6'%3E%3Cpath d='M2.5 4.5 6 8l3.5-3.5'/%3E%3C/svg%3E\")]",
);

/**
 * Cards cascade in on entry and reshuffle when the filters change.
 *
 * The stagger is capped so a full page never takes longer to land than the
 * first row did — an uncapped `index * delay` puts the last card most of a
 * second behind the first, which reads as lag rather than choreography.
 */
const card: Variants = {
  hidden: { opacity: 0, y: 26 },
  shown: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: EASE_OUT_EXPO,
      delay: Math.min(index, 8) * 0.055,
    },
  }),
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: "linear" } },
};

function pageWindow(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "…")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  if (start > 2) pages.push("…");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push("…");
  pages.push(total);
  return pages;
}

export function ResourceBrowser({ resources }: { resources: readonly Resource[] }) {
  const [filters, setFilters] = useState<ResourceFilters>(EMPTY_FILTERS);
  const [page, setPage] = useState(1);

  const deferredQuery = useDeferredValue(filters.query);
  const reducedMotion = usePrefersReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const { ref: revealRef, shown } = useReveal<HTMLUListElement>();

  const applied = { ...filters, query: deferredQuery };
  const filtered = filterResources(applied, resources);
  const counts = countByType(applied, resources);
  const { items, totalPages, page: safePage } = paginateResources(
    filtered,
    page,
    PAGE_SIZE,
  );

  const isFiltered =
    filters.type !== "" ||
    filters.service !== "" ||
    filters.industry !== "" ||
    filters.query !== "";

  /**
   * Deferred to after the commit, never fired straight from the handler.
   *
   * `popLayout` yanks the outgoing cards out of flow the instant the state
   * changes, so a scroll started in the handler is still animating when the
   * document collapses under it — the browser clamps the target and drops you
   * in the blank space past the end of a page that has since grown back.
   * Running it in the effect means the new rows are already measured.
   */
  const scrollPending = useRef(false);

  useEffect(() => {
    if (!scrollPending.current) return;
    scrollPending.current = false;
    gridRef.current?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [page, filters, reducedMotion]);

  /**
   * The toolbar is sticky but the results are not, so filtering from halfway
   * down leaves you staring at whitespace where a list of fifteen used to be.
   * Only pulls back when the grid has actually scrolled off the top, which
   * also makes it a no-op for every keystroke after the first.
   */
  const update = <K extends keyof ResourceFilters>(
    key: K,
    value: ResourceFilters[K],
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
    if ((gridRef.current?.getBoundingClientRect().top ?? 0) < 0) {
      scrollPending.current = true;
    }
  };

  /** Paging below the fold leaves you staring at a footer, so always walk up. */
  const goToPage = (next: number) => {
    scrollPending.current = true;
    setPage(next);
  };

  return (
    <Section tight>
      <Container width="wide">
        <div
          className={cn(
            // Sticky only where the selects sit on one row. Stacked, the bar is
            // ~200px — a fifth of a phone screen parked over the results it is
            // meant to filter, so below 721px it scrolls away like normal.
            // Offset clears the floating header pill (76px bar + its 16px inset).
            "min-[721px]:sticky min-[721px]:top-[calc(var(--header-height)+0.75rem)] z-20 mb-8",
            "rounded-2xl border border-ink-900/[0.08] p-3",
            "bg-[rgb(253_251_247/0.82)] shadow-sm",
            "backdrop-blur-[18px] backdrop-saturate-[160%]",
          )}
        >
          <div
            role="group"
            aria-label="Filter by type"
            className="flex gap-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <TypeChip
              label="All"
              count={counts[""]}
              active={filters.type === ""}
              onSelect={() => update("type", "")}
            />
            {RESOURCE_TYPES.map((type) => (
              <TypeChip
                key={type}
                label={type}
                count={counts[type]}
                active={filters.type === type}
                onSelect={() => update("type", type)}
              />
            ))}
          </div>

          <div className="mt-2 grid gap-2 min-[721px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)]">
            <select
              className={SELECT}
              value={filters.service}
              aria-label="Filter by service"
              onChange={(e) =>
                update("service", e.target.value as ResourceFilters["service"])
              }
            >
              <option value="">All services</option>
              {RESOURCE_SERVICES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <select
              className={SELECT}
              value={filters.industry}
              aria-label="Filter by industry"
              onChange={(e) =>
                update("industry", e.target.value as ResourceFilters["industry"])
              }
            >
              <option value="">All industries</option>
              {RESOURCE_INDUSTRIES.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>

            <div className="relative">
              <input
                type="search"
                className={cn(FIELD, "pr-11")}
                placeholder="Search playbooks, benchmarks, interviews…"
                value={filters.query}
                aria-label="Search resources"
                onChange={(e) => update("query", e.target.value)}
              />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                aria-hidden
                className="pointer-events-none absolute right-4 top-1/2 size-[1.05rem] -translate-y-1/2 text-ink-400"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6 flex min-h-[38px] flex-wrap items-center justify-between gap-3">
          {/* The figure re-mounts on its key so each new count drops in, but the
              sentence around it is plain markup. Wrapping the whole line in an
              AnimatePresence let a fast sequence of keystrokes exit one count
              before the next entered, and the reader lost the result count
              entirely — the same trap `useReveal` guards the reveals against. */}
          <p aria-live="polite" className="text-sm text-ink-500">
            <motion.strong
              key={filtered.length}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, ease: EASE_OUT_EXPO }}
              className="inline-block font-display font-bold text-ink-900 [font-variant-numeric:tabular-nums]"
            >
              {filtered.length}
            </motion.strong>{" "}
            {filtered.length === 1 ? "piece" : "pieces"}
            {isFiltered ? " match your filters" : " in the library"}
          </p>

          <AnimatePresence initial={false}>
            {isFiltered ? (
              <motion.button
                type="button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.24, ease: EASE_OUT_EXPO }}
                onClick={() => {
                  setFilters(EMPTY_FILTERS);
                  setPage(1);
                }}
                className={cn(
                  "inline-flex h-[34px] cursor-pointer items-center gap-2 rounded-pill",
                  "border border-ink-900/15 px-[0.9rem] text-sm font-semibold text-ink-700",
                  "[transition:background-color_180ms_ease,border-color_180ms_ease,color_180ms_ease]",
                  "hover:border-ink-900 hover:bg-ink-900 hover:text-paper-050",
                )}
              >
                Clear filters
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  aria-hidden
                  className="size-[0.85em]"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </motion.button>
            ) : null}
          </AnimatePresence>
        </div>

        <div ref={gridRef} className="scroll-mt-[calc(var(--header-height)+8rem)]">
          {items.length === 0 ? (
            <EmptyState
              onClear={() => {
                setFilters(EMPTY_FILTERS);
                setPage(1);
              }}
            />
          ) : (
            <ul
              ref={revealRef}
              // One column then three. PAGE_SIZE and the catalog length are
              // both multiples of three, so an unfiltered page always fills
              // square (3 x 3, then 3 x 2). A two-column step would break that
              // on every page. A narrow filter can still return an off-multiple
              // count, which no fixed column choice can prevent.
              className="grid grid-cols-1 gap-x-6 gap-y-10 min-[961px]:grid-cols-3"
            >
              {/* popLayout pulls exiting cards out of flow so the survivors
                  close the gap immediately instead of after the fade. */}
              <AnimatePresence mode="popLayout" initial={false}>
                {items.map((resource, index) => (
                  <motion.li
                    key={resource.slug}
                    // Position only: a size-animating layout would rubber-band
                    // the art panel's aspect ratio on every reshuffle.
                    layout="position"
                    custom={index}
                    variants={card}
                    initial="hidden"
                    animate={shown ? "shown" : "hidden"}
                    exit="exit"
                    className="flex"
                  >
                    <ResourceCard resource={resource} />
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>

        {totalPages > 1 ? (
          <nav
            aria-label="Resource pages"
            className="mt-14 flex flex-wrap items-center justify-center gap-1.5"
          >
            <PageArrow
              label="Previous page"
              disabled={safePage === 1}
              onClick={() => goToPage(safePage - 1)}
            >
              <ArrowLeft width={16} height={16} />
            </PageArrow>

            {pageWindow(safePage, totalPages).map((entry, index) =>
              entry === "…" ? (
                <span
                  key={`ellipsis-${index}`}
                  aria-hidden
                  className="px-1 text-sm text-ink-400"
                >
                  …
                </span>
              ) : (
                <button
                  key={entry}
                  type="button"
                  aria-label={`Page ${entry}`}
                  aria-current={entry === safePage ? "page" : undefined}
                  onClick={() => goToPage(entry)}
                  className={cn(
                    "relative isolate grid size-9 cursor-pointer place-items-center rounded-full",
                    "font-display text-sm font-semibold transition-colors duration-[180ms] ease-out-quad",
                    "before:absolute before:inset-0 before:-z-10 before:rounded-full before:content-['']",
                    "before:bg-ink-900/0 before:transition-colors before:duration-[180ms]",
                    entry === safePage
                      ? "text-paper-050"
                      : "text-ink-700 hover:before:bg-ink-900/[0.06]",
                  )}
                >
                  {entry === safePage ? (
                    <motion.span
                      layoutId="resource-page-pill"
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full bg-ink-900"
                      transition={SLIDE}
                    />
                  ) : null}
                  {entry}
                </button>
              ),
            )}

            <PageArrow
              label="Next page"
              disabled={safePage === totalPages}
              onClick={() => goToPage(safePage + 1)}
            >
              <ArrowRight width={16} height={16} />
            </PageArrow>
          </nav>
        ) : null}
      </Container>
    </Section>
  );
}

function TypeChip({
  label,
  count,
  active,
  onSelect,
}: {
  label: string;
  count: number;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onSelect}
      className={cn(
        "relative isolate inline-flex h-[38px] shrink-0 cursor-pointer items-center gap-2",
        "rounded-pill px-[0.95rem] font-display text-sm font-semibold whitespace-nowrap",
        "transition-colors duration-[180ms] ease-out-quad",
        // The hover tint lives on ::before so the sliding pill, which is a
        // sibling at -z-10, is never painted over by the button's own fill.
        "before:absolute before:inset-0 before:-z-10 before:rounded-pill before:content-['']",
        "before:bg-ink-900/0 before:transition-colors before:duration-[180ms]",
        active
          ? "text-paper-050"
          : "text-ink-600 hover:text-ink-900 hover:before:bg-ink-900/[0.06]",
      )}
    >
      {active ? (
        <motion.span
          layoutId="resource-type-pill"
          aria-hidden
          className="absolute inset-0 -z-10 rounded-pill bg-ink-900"
          transition={SLIDE}
        />
      ) : null}

      <span>{label}</span>
      <span
        className={cn(
          "text-2xs [font-variant-numeric:tabular-nums]",
          active ? "text-paper-050/65" : "text-ink-400",
        )}
      >
        {count}
      </span>
    </button>
  );
}

function PageArrow({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "grid size-9 cursor-pointer place-items-center rounded-full text-ink-700",
        "transition-colors duration-[180ms] ease-out-quad hover:bg-ink-900/[0.06]",
        "disabled:pointer-events-none disabled:opacity-30",
      )}
    >
      {children}
    </button>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      className={cn(
        "grid justify-items-center gap-4 rounded-2xl border-2 border-dashed border-ink-900/15",
        "px-6 py-[clamp(3rem,2rem+5vw,5rem)] text-center",
      )}
    >
      <span
        aria-hidden
        className="grid size-16 animate-float place-items-center rounded-blob bg-sun-200 text-ink-900"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          className="size-7"
        >
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4M9 11h4" />
        </svg>
      </span>

      <p className="max-w-[38ch] text-base text-ink-500">
        Nothing matches that combination yet. Widen a filter, or clear them and
        browse the whole library.
      </p>

      <Button variant="sticker" size="sm" onClick={onClear}>
        <ButtonLabel>Clear filters</ButtonLabel>
      </Button>
    </motion.div>
  );
}
