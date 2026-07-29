/**
 * Runnable check for the resource filter/count/paginate helpers.
 * Run: npx tsx lib/resources/self-check.ts
 */
import assert from "node:assert/strict";
import {
  countByType,
  filterResources,
  formatDate,
  paginateResources,
  RESOURCES,
  PAGE_SIZE,
} from "./index";

const NO_FILTERS = { type: "", service: "", industry: "", query: "" } as const;

const blogs = filterResources({ ...NO_FILTERS, type: "Blog" });
assert.ok(blogs.length > 0);
assert.ok(blogs.every((r) => r.type === "Blog"));

const searched = filterResources({ ...NO_FILTERS, query: "generative ai" });
assert.equal(searched.length, 1);
assert.match(searched[0].title, /Generative AI/i);

// Search reaches the dek, not just the headline.
assert.ok(
  filterResources({ ...NO_FILTERS, query: "flat-pack" }).length === 1,
  "excerpts should be searchable",
);

const empty = filterResources({
  ...NO_FILTERS,
  type: "White paper",
  service: "HR",
  industry: "SaaS",
});
assert.equal(empty.length, 0);

// Chip counts ignore the active type, so pressing a chip lands on that count.
const counts = countByType({ ...NO_FILTERS, type: "Interview" });
assert.equal(counts[""], RESOURCES.length);
assert.equal(counts.Blog, blogs.length);

const scopedCounts = countByType({ ...NO_FILTERS, service: "Finance" });
assert.equal(
  scopedCounts[""],
  filterResources({ ...NO_FILTERS, service: "Finance" }).length,
);

const { items, totalPages, page } = paginateResources(RESOURCES, 99);
assert.equal(page, totalPages);
assert.ok(items.length <= PAGE_SIZE);
assert.ok(items.length > 0);

// The UTC pin: without it this renders as the 17th anywhere west of Greenwich.
assert.equal(formatDate("2026-11-18"), "18 Nov 2026");

console.log("lib/resources self-check ok");
