# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on :3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint (flat config, next/core-web-vitals + next/typescript)
npx tsc --noEmit # type check — there is no `typecheck` script
```

There is no test suite and no test runner installed. The `/design-system` route is the visual regression surface: it renders every token ramp, component variant and motion primitive on one page, so check changes to `app/globals.css` or `components/ui/*` there.

## Project

Marketing site for **Xevantis**, a BPO + software agency. Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4, framer-motion. Every page is static and there is no database, no auth and no API routes — the one piece of server work is the `/get-started` lead form's server action.

Environment variables (see `.env.example`): `NEXT_PUBLIC_SITE_URL` (falls back to `https://xevantis.com`; set it per deploy or preview canonicals point at production), and for the lead form `RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL`.

Naming trap: the brand is **Xevantis** in all copy. The repo folder is still `Valentysis` and the logo asset is still `public/img/logo-valentisys.png` — both are pre-rebrand leftovers, not the brand.

## Architecture

### Content is data, rendering is layout

Service pages are driven entirely by typed data objects, never by JSX in content files.

- `lib/services/types.ts` — `ServiceContent`, the shape every service must satisfy. Deliberately contains **no `ReactNode`**: that is what keeps the whole service page tree renderable as server components and lets the same object feed `generateMetadata` and the JSON-LD.
- `lib/services/<slug>.ts` — 16 files, ~370 lines each, one `ServiceContent` export apiece.
- `lib/services/index.ts` — the registry. `SERVICE_GROUPS` (four headed columns) is the single source that drives the header mega menu, mobile drawer, `/services` index and `sitemap.ts`.
- `lib/services/shared.ts` — constants shared across all pages (`SECTION_EYEBROWS`, `PRIMARY_CTA`, `CONTACT_HREF`). Design decisions live here; content decisions live in the per-service file.
- `components/service/ServicePage.tsx` — the one composition all 16 routes render. Section order is fixed because the paper/ink tint alternation depends on it; pages differ through data only.

Routes are hand-written folders (`app/services/<slug>/page.tsx`), not a `[slug]` dynamic segment. Each is ~11 lines: import the data module, `export const metadata = serviceMetadata(x)`, render `<ServicePage service={x} related={getRelated(x)} />`.

**Adding a service** = new `lib/services/<slug>.ts` + add it to a group in `SERVICE_GROUPS` + new route folder. Navigation, the index grid, related-service cards and the sitemap all follow automatically.

Homepage/shell content lives in `lib/content.ts` with types in `lib/types.ts`. Those types *do* carry `ReactNode` (icons), so they are client-side content, distinct from the service data model.

### The lead form is the only server-side path

Every "Get started" CTA — header, mega menu, mobile drawer, hero, `CtaBand` — points at `/get-started`. The in-page `#contact` anchors ("Book a scoping call", "Talk about your books") still scroll to the CTA band on the page they are on; they are a different, deliberate pattern.

- `lib/leads/index.ts` — the quote model and the parser. Client-safe on purpose: the form renders the figure and the action recomputes it, so both read one module. **`MIN_HOURLY_RATE` is $6 and nothing may quote below it** — the parser rejects a lower rate with a message, and `quote()` clamps regardless, because it runs on raw `FormData`. Deliberately imports nothing from `lib/services`, so the client bundle stays free of the 16 data files; the page passes the solutions dropdown down as plain strings.
- `lib/leads/actions.ts` — `"use server"`. Validates, then POSTs to Resend's REST API (`fetch`, not the `resend` package — one endpoint, native, and the dependency list is short on purpose). `reply_to` is the lead's address so sales can just hit reply. Every visitor string is HTML-escaped into the message body and length-capped in the parser. A missing key or a Resend error returns a failure the visitor can act on — never a silent success.
- `lib/leads/self-check.ts` — `npx tsx lib/leads/self-check.ts`. Guards the floor and the arithmetic.
- `components/get-started/GetStartedForm.tsx` — the one client component. Works without JS; the live estimate is the only thing that needs it.

### Design tokens live in CSS, not a Tailwind config

There is no `tailwind.config.*`. Tailwind v4 is configured CSS-first in `app/globals.css` via `@theme static` — color ramps, fluid type scale, containers, radii, shadows, easings and keyframe animations are all tokens there, exposed as ordinary utilities (`bg-sun-300`, `text-hero`, `max-w-page`, `rounded-pill`, `shadow-sticker`, `ease-out-expo`, `animate-float`). `static` is required: it keeps every step in the output for the ramps the design-system page renders dynamically.

Never hardcode a hex or a duration in a component — add or reuse a token. Multi-stop gradients and pseudo-element textures that Tailwind cannot express are `@utility` blocks in the same file (`noise`, `bg-aurora`, `sheen`, `marquee-mask`).

### Accents

`Accent` (`lib/types.ts`) is a closed union of five brand pastels: `sun | mint | lilac | blush | sky`. A service picks one and the whole page follows. Tailwind cannot see `bg-${accent}-300`, so every accent-driven surface resolves through a literal lookup in `lib/accent-classes.ts` (`ACCENT_TILE`, `ACCENT_WASH`, `ACCENT_TEXT`, `ACCENT_ORB`, `ACCENT_GLOW`, `ACCENT_EDGE`). Add a new surface by adding a map there, not by interpolating class names.

### Server-first, with motion quarantined

Only ~22 files carry `"use client"` — everything else is a server component. Interactivity is isolated in `components/motion/`, `components/ui/` and `hooks/`. When adding a section, keep it a server component and reach for an existing client primitive (`Reveal`, `SplitWords`, `Counter`, `Tilt`, `Parallax`) rather than making the section itself a client component.

Motion accessibility is handled in two places and both matter: the `prefers-reduced-motion` block in `globals.css` kills CSS animation, and `MotionProvider` (`reducedMotion="user"`) kills framer-motion's JS-driven animation.

`useReveal` pairs framer's `useInView` with a shared scroll/resize/font-load sweep (`lib/viewport-watch.ts`). The sweep exists because content that only appears if an animation ran is content that can disappear — background tabs, anchor jumps and late document growth all strand plain IntersectionObserver reveals at opacity 0. Preserve that safety net.

### Page shell

`app/layout.tsx` holds only fonts, the skip link, `ScrollProgress`, `MotionProvider` and `ToastProvider`. **`Header` and `Footer` are not in the root layout** — every page composes them itself around `<main id="main" tabIndex={-1}>` (the `tabIndex` is what makes the skip link move focus). `/design-system` swaps in `DocsHeader` instead.

### SEO

`lib/seo.ts` owns `SITE_URL`, `serviceMetadata()` and `serviceJsonLd()` (Service + FAQPage + BreadcrumbList in one array). The JSON-LD script is injected inside `ServicePage`, not in the route, so a page cannot ship markup without its schema. `app/sitemap.ts` and `app/robots.ts` derive from `SERVICE_SLUGS`.

## Conventions

- `@/*` resolves to the repo root (`@/lib/...`, `@/components/...`).
- `cn()` from `lib/utils.ts` (clsx + tailwind-merge) for every conditional class list.
- Icons are hand-drawn 2px-outline SVGs in `components/icons/index.tsx`, sized by the caller. `lucide-react` is in `package.json` but unused — do not introduce it; its geometry does not match the sticker family.
- Comments in this codebase explain *why* a non-obvious choice was made (the 16px reveal slide, `overflow-x: hidden` on `<html>`, `@theme static`). Match that: skip narration, keep the reasoning that would otherwise be re-litigated.
- Copy is **US English** and specific ("Named specialists, not a rotating pool"): `optimize`, `program`, `center`, `license`, `catalog`, `judgment`, `advisor`, `PTO` (not "holiday"), `schedule` (not "rota"). Dates render `en-US` via `formatDate`. The design-system page documents voice rules — e.g. never say "resources" about people.

## Cursor rule: `.cursor/rules/ponytail.mdc` (always applies)

Lazy senior dev mode — lazy means efficient, not careless. Before writing code, stop at the first rung that holds: does it need building at all; does it already exist here (reuse the helper/pattern); does the stdlib or a native platform feature cover it; does an installed dependency solve it; can it be one line; only then write the minimum that works.

Rules: no unrequested abstractions, no new dependency if avoidable, deletion over addition, fewest files, shortest working diff — but only after tracing the real flow, since a small change in the wrong place is a second bug. Fix bugs at the shared function, not per caller. Mark deliberate corner-cuts with a `ponytail:` comment naming the ceiling and upgrade path.

Not lazy about: understanding the problem, input validation at trust boundaries, error handling, security, accessibility, and anything explicitly requested. Non-trivial logic leaves one runnable check behind — the smallest thing that fails if the logic breaks, no frameworks or fixtures.
