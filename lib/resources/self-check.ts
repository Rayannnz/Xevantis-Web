/**
 * Runnable check for resource filter/paginate helpers.
 * Run: npx tsx lib/resources/self-check.ts
 */
import assert from "node:assert/strict";
import {
  filterResources,
  paginateResources,
  RESOURCES,
  PAGE_SIZE,
} from "./index";

const blogs = filterResources({
  type: "Blog",
  service: "",
  industry: "",
  query: "",
});
assert.ok(blogs.length > 0);
assert.ok(blogs.every((r) => r.type === "Blog"));

const searched = filterResources({
  type: "",
  service: "",
  industry: "",
  query: "generative ai",
});
assert.equal(searched.length, 1);
assert.match(searched[0].title, /Generative AI/i);

const empty = filterResources({
  type: "White paper",
  service: "HR",
  industry: "SaaS",
  query: "",
});
assert.equal(empty.length, 0);

const { items, totalPages, page } = paginateResources(RESOURCES, 99);
assert.equal(page, totalPages);
assert.ok(items.length <= PAGE_SIZE);
assert.ok(items.length > 0);

console.log("lib/resources self-check ok");
