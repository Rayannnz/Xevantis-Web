/**
 * Runnable check for the service registry and the card counts the grids
 * depend on.
 * Run: npx tsx lib/services/self-check.ts
 */
import assert from "node:assert/strict";
import { SERVICES, SERVICE_GROUPS, SERVICE_SLUGS, getRelated, getService } from "./index";

assert.equal(SERVICES.length, 16);
assert.equal(new Set(SERVICE_SLUGS).size, 16, "slugs must be unique");

// Every `related` slug has to resolve, or a page silently loses a card.
for (const service of SERVICES) {
  for (const slug of service.related) {
    assert.ok(getService(slug), `${service.slug} points at unknown slug ${slug}`);
  }
}

/**
 * Card counts, which are layout contracts rather than editorial preferences.
 * Each grid below steps through column counts that divide its item count
 * exactly, so no section ever ends on a part-filled row. Change a count here
 * and you have to change the matching grid in `components/service/`.
 */
for (const service of SERVICES) {
  const where = service.slug;

  // WhyChooseUs: 2 then 3 columns.
  assert.equal(service.differentiators.length, 6, `${where} differentiators`);

  // TechStack: 2 then 4 columns.
  assert.equal(service.tech.length, 16, `${where} tech`);

  // CaseStudies: 1 then 3 columns.
  assert.equal(service.cases.length, 3, `${where} cases`);

  // WhatsIncluded: 2 columns.
  assert.equal(service.included.items.length % 2, 0, `${where} included items`);

  // ServiceOverview renders exactly four panels in two columns.
  assert.equal(service.overview.panels.length, 4, `${where} overview panels`);

  // RelatedServices: 2 then 3 columns, so six after self-filtering.
  assert.equal(getRelated(service).length, 6, `${where} related`);
}

// The mega menu is built for four headed columns of four.
assert.equal(SERVICE_GROUPS.length, 4);
for (const group of SERVICE_GROUPS) {
  assert.equal(group.services.length, 4, `${group.heading} should hold 4 services`);
}

// A hero highlight that is not a substring of the body is silently dropped, so
// it reads as a missing underline rather than as an error.
for (const service of SERVICES) {
  const { highlight, body } = service.hero;
  if (highlight) {
    assert.ok(body.includes(highlight), `${service.slug} highlight not in hero body`);
  }
}

console.log("lib/services self-check ok");
