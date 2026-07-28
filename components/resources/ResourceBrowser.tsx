"use client";

import { useDeferredValue, useState } from "react";
import {
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
import { ArrowRight } from "@/components/icons";
import { ResourceCard } from "./ResourceCard";

const FIELD = cn(
  "h-[48px] w-full rounded-pill border border-ink-900/10 bg-paper-000 px-[1.15rem] text-base text-ink-900",
  "placeholder:text-ink-400",
  "[transition:border-color_180ms_ease,box-shadow_280ms_var(--ease-out-expo)]",
  "hover:border-ink-300",
  "focus-visible:border-ink-900 focus-visible:shadow-focus-sun focus-visible:outline-none",
);

const SELECT = cn(
  FIELD,
  "appearance-none bg-[length:14px] bg-[right_1.15rem_center] bg-no-repeat pr-[2.6rem]",
  "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none' stroke='%2355515f' stroke-width='1.6'%3E%3Cpath d='M2.5 4.5 6 8l3.5-3.5'/%3E%3C/svg%3E\")]",
);

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
  const [filters, setFilters] = useState<ResourceFilters>({
    type: "",
    service: "",
    industry: "",
    query: "",
  });
  const [page, setPage] = useState(1);
  const deferredQuery = useDeferredValue(filters.query);

  const filtered = filterResources(
    { ...filters, query: deferredQuery },
    resources,
  );
  const { items, totalPages, page: safePage } = paginateResources(
    filtered,
    page,
    PAGE_SIZE,
  );

  const update = <K extends keyof ResourceFilters>(key: K, value: ResourceFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  return (
    <Section tight>
      <Container width="wide">
        <div
          className={cn(
            "mb-10 grid gap-3",
            "min-[721px]:grid-cols-2",
            "min-[1101px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)]",
          )}
        >
          <label className="grid gap-[0.35rem]">
            <span className="sr-only">Type</span>
            <select
              className={SELECT}
              value={filters.type}
              aria-label="Filter by type"
              onChange={(e) =>
                update("type", e.target.value as ResourceFilters["type"])
              }
            >
              <option value="">Type</option>
              {RESOURCE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-[0.35rem]">
            <span className="sr-only">Service</span>
            <select
              className={SELECT}
              value={filters.service}
              aria-label="Filter by service"
              onChange={(e) =>
                update("service", e.target.value as ResourceFilters["service"])
              }
            >
              <option value="">Service</option>
              {RESOURCE_SERVICES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-[0.35rem]">
            <span className="sr-only">Industry</span>
            <select
              className={SELECT}
              value={filters.industry}
              aria-label="Filter by industry"
              onChange={(e) =>
                update("industry", e.target.value as ResourceFilters["industry"])
              }
            >
              <option value="">Industry</option>
              {RESOURCE_INDUSTRIES.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </label>

          <label className="relative grid gap-[0.35rem]">
            <span className="sr-only">Search</span>
            <input
              type="search"
              className={cn(FIELD, "pr-11")}
              placeholder="Search"
              value={filters.query}
              aria-label="Search resources"
              onChange={(e) => update("query", e.target.value)}
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden
              className="pointer-events-none absolute right-4 top-1/2 size-[1.1rem] -translate-y-1/2 text-ink-400"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" strokeLinecap="round" />
            </svg>
          </label>
        </div>

        {items.length === 0 ? (
          <p className="py-16 text-center text-ink-500">
            No resources match those filters. Clear a filter or try another search.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 min-[621px]:grid-cols-2 min-[961px]:grid-cols-3">
            {items.map((resource) => (
              <li key={resource.slug} className="flex">
                <ResourceCard resource={resource} />
              </li>
            ))}
          </ul>
        )}

        {filtered.length > 0 ? (
          <nav
            aria-label="Resource pages"
            className="mt-12 flex flex-wrap items-center justify-center gap-1.5"
          >
            {pageWindow(safePage, totalPages).map((entry, index) =>
              entry === "…" ? (
                <span
                  key={`ellipsis-${index}`}
                  className="px-2 text-sm text-ink-400"
                  aria-hidden
                >
                  …
                </span>
              ) : (
                <button
                  key={entry}
                  type="button"
                  aria-label={`Page ${entry}`}
                  aria-current={entry === safePage ? "page" : undefined}
                  onClick={() => setPage(entry)}
                  className={cn(
                    "grid size-9 place-items-center rounded-full text-sm font-semibold",
                    "[transition:background-color_180ms_ease,color_180ms_ease]",
                    entry === safePage
                      ? "bg-ink-900 text-paper-050"
                      : "text-ink-700 hover:bg-ink-900/5",
                  )}
                >
                  {entry}
                </button>
              ),
            )}

            {safePage < totalPages ? (
              <button
                type="button"
                aria-label="Next page"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="ml-1 grid size-9 place-items-center rounded-full text-ink-700 hover:bg-ink-900/5"
              >
                <ArrowRight width={16} height={16} />
              </button>
            ) : null}
          </nav>
        ) : null}
      </Container>
    </Section>
  );
}
