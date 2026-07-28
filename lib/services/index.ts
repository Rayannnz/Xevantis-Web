import type { ServiceContent, ServiceSummary } from "./types";

import { itOutsourcing } from "./it-outsourcing";
import { financeAndAccounting } from "./finance-and-accounting";
import { financeOutsourcing } from "./finance-outsourcing";
import { salesAndMarketing } from "./sales-and-marketing";
import { customerService } from "./customer-service";
import { liveChatOutsourcing } from "./live-chat-outsourcing";
import { adminSupport } from "./admin-support";
import { legalProcessOutsourcing } from "./legal-process-outsourcing";
import { hrOutsourcing } from "./hr-outsourcing";
import { payrollOutsourcing } from "./payroll-outsourcing";
import { hrVsPeoGuide } from "./hr-vs-peo-guide";
import { hrForRetail } from "./hr-for-retail";
import { smallBusiness } from "./small-business";
import { ecommerceBpo } from "./ecommerce-bpo";
import { nearshoreBpo } from "./nearshore-bpo";
import { maDealFlow } from "./ma-deal-flow";

/**
 * The BPO solutions registry.
 *
 * Everything here is server-side: route files read it for content and
 * metadata, and the shell reads it for navigation. None of it reaches the
 * browser bundle, so importing all sixteen data files costs nothing at
 * runtime — every page is static.
 */

/**
 * Grouping drives the header mega menu, the mobile drawer and the solutions
 * index, so a new solution appears in all three by being added here once.
 * The headings match the four columns the mega menu was designed around.
 */
export const SERVICE_GROUPS: { heading: string; services: readonly ServiceContent[] }[] = [
  {
    heading: "Core functions",
    services: [itOutsourcing, financeAndAccounting, financeOutsourcing, salesAndMarketing],
  },
  {
    heading: "Customer & admin",
    services: [customerService, liveChatOutsourcing, adminSupport, legalProcessOutsourcing],
  },
  {
    heading: "HR & payroll",
    services: [hrOutsourcing, payrollOutsourcing, hrVsPeoGuide, hrForRetail],
  },
  {
    heading: "Models & sectors",
    services: [smallBusiness, ecommerceBpo, nearshoreBpo, maDealFlow],
  },
];

export const SERVICES: readonly ServiceContent[] = SERVICE_GROUPS.flatMap(
  (group) => group.services,
);

const BY_SLUG = new Map(SERVICES.map((service) => [service.slug, service]));

export const SERVICE_SLUGS: readonly string[] = SERVICES.map((service) => service.slug);

export function getService(slug: string): ServiceContent | undefined {
  return BY_SLUG.get(slug);
}

const toSummary = (service: ServiceContent): ServiceSummary => ({
  slug: service.slug,
  name: service.name,
  summary: service.summary,
  eyebrow: service.eyebrow,
  accent: service.accent,
});

export const SERVICE_SUMMARIES: readonly ServiceSummary[] = SERVICES.map(toSummary);

/** Same grouping, reduced to what a card needs. */
export const SERVICE_SUMMARY_GROUPS = SERVICE_GROUPS.map((group) => ({
  heading: group.heading,
  services: group.services.map(toSummary),
}));

/**
 * Resolves a solution's `related` slugs to summaries.
 *
 * Unknown slugs are dropped rather than thrown on — a typo in a content file
 * should cost one card, not the whole page. Capped at six so the grid fills
 * cleanly at one, two or three columns.
 */
export function getRelated(service: ServiceContent, limit = 6): ServiceSummary[] {
  return service.related
    .filter((slug) => slug !== service.slug)
    .map((slug) => BY_SLUG.get(slug))
    .filter((found): found is ServiceContent => found !== undefined)
    .slice(0, limit)
    .map(toSummary);
}
