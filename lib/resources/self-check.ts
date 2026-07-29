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
  RESOURCE_SERVICES,
  RESOURCE_TYPES,
  PAGE_SIZE,
} from "./index";
import { ARTICLES } from "./articles";

const NO_FILTERS = { type: "", service: "", industry: "", query: "" } as const;

const blogs = filterResources({ ...NO_FILTERS, type: "Blog" });
assert.ok(blogs.length > 0);
assert.ok(blogs.every((r) => r.type === "Blog"));

const searched = filterResources({ ...NO_FILTERS, query: "commission accounting" });
assert.equal(searched.length, 1);
assert.match(searched[0].title, /commission accounting/i);

// Search reaches the dek, not just the headline.
assert.ok(
  filterResources({ ...NO_FILTERS, query: "Nassau County" }).length === 1,
  "excerpts should be searchable",
);

const empty = filterResources({
  ...NO_FILTERS,
  type: "White paper",
  service: "HR",
  industry: "Pharmacy",
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

// Coverage is the point of the library: every service and every format has to
// carry at least one piece, or a filter chip lands on an empty grid. The
// three-per-service split is what keeps the catalog from being all one topic.
for (const service of RESOURCE_SERVICES) {
  assert.equal(
    filterResources({ ...NO_FILTERS, service }).length,
    3,
    `expected 3 pieces for ${service}`,
  );
}
for (const type of RESOURCE_TYPES) {
  assert.ok(
    filterResources({ ...NO_FILTERS, type }).length > 0,
    `no pieces of type ${type}`,
  );
}

// Every catalog entry needs a body, and every body needs a catalog entry —
// a mismatch is a 404 on one side or an unreachable article on the other.
assert.deepEqual(
  RESOURCES.map((r) => r.slug).sort(),
  Object.keys(ARTICLES).sort(),
);

// The grid is three columns at its widest, so an off-multiple count leaves an
// orphan row on the last page.
assert.equal(RESOURCES.length % 3, 0, "resource count should fill a 3-col grid");

const { items, totalPages, page } = paginateResources(RESOURCES, 99);
assert.equal(page, totalPages);
assert.ok(items.length <= PAGE_SIZE);
assert.ok(items.length > 0);

// The UTC pin: without it this renders as the 26th anywhere west of UTC.
assert.equal(formatDate("2026-07-27"), "Jul 27, 2026");

console.log("lib/resources self-check ok");
