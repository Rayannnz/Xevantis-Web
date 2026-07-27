# Valentisys — Design System & Website

A dependency-free design system and marketing site for a BPO + software agency.
Plain HTML, CSS and vanilla JS — no build step, no framework, no runtime packages.

```
index.html              Landing page (the system, assembled)
design-system.html      Living style guide: foundations, components, motion
assets/
  css/
    tokens.css          Design tokens — load FIRST
    base.css            Reset, element defaults, typography, layout, utilities
    animations.css      Keyframes + all motion classes and reveal hooks
    components.css      Buttons, cards, nav, forms, carousel, footer…
  js/
    motion.js           Motion engine (reveal, split text, parallax, tilt, counters)
    site.js             Behaviour (nav, drawer, accordion, carousel, tabs, forms)
  img/
    logo-valentisys.png Primary lockup, 900×240, transparent
    logo-mark.png       Square mark, 256×256
    favicon.png         64×64
logo/                   Original supplied artwork (source of truth, not shipped)
```

## Run it

Open `index.html` directly, or serve the folder to exercise everything:

```bash
python -m http.server 8000
```

Then visit <http://127.0.0.1:8000/index.html>.

## Load order

Tokens must come first, components last — later layers read variables defined earlier.

```html
<link rel="stylesheet" href="assets/css/tokens.css">
<link rel="stylesheet" href="assets/css/base.css">
<link rel="stylesheet" href="assets/css/animations.css">
<link rel="stylesheet" href="assets/css/components.css">

<script src="assets/js/motion.js" defer></script>
<script src="assets/js/site.js" defer></script>
```

The `<script>document.documentElement.classList.add("js")</script>` line in `<head>`
is required. Scroll-reveal only hides content when JS is present to reveal it again —
without that flag, `[data-reveal]` elements render visible instead of blank.

## Token architecture

Three layers, one direction of dependency:

1. **Primitives** — raw values (`--ink-900`, `--sun-300`, `--space-6`, `--dur-slow`).
2. **Semantic** — intent (`--color-text`, `--color-surface`, `--color-accent`).
3. **Component** — per-component knobs (`--btn-height-md`, `--card-radius`).

Components read only from layers 2 and 3. That is why any section can be flipped
to a dark surface with a single attribute:

```html
<section data-scheme="dark" data-tint="ink"> … </section>
```

Section washes: `data-tint="sun | mint | lilac | blush | sky | paper | ink | aurora"`.

## Motion

All motion is declarative. Add the attribute; `motion.js` wires the observer or
listener and writes CSS custom properties. Timing and easing live in `animations.css`.

| Hook | Effect |
| --- | --- |
| `data-reveal="up\|fade\|scale\|left\|right\|blur\|clip\|pop"` | Scroll entrance |
| `data-delay="200"` | Per-element delay, ms |
| `data-stagger="110"` | On a parent — children inherit incrementing delays |
| `data-split="words\|chars"` | Headline splits and rises out of a mask |
| `data-parallax="-0.15"` | Scroll-linked Y offset |
| `data-marquee` | Clones the track for a seamless loop; hover pauses |
| `data-tilt="8"` | 3D pointer tilt (fine pointers only) |
| `data-spotlight` | Pointer-following glow |
| `data-magnetic="0.3"` | Cursor attraction with spring return |
| `data-count="1200" data-suffix="+"` | Count-up on entry |
| `.anim-float / .anim-blob / .anim-spin / .anim-aurora / .anim-sheen` | Ambient loops |

Injecting markup after load? Re-scan with `VMotion.refresh()`.

### Reliability notes

Three failure modes are handled explicitly, because each one silently breaks a
scroll-reveal system in production:

- **Never-composited pages.** `IntersectionObserver` only reports what it samples on
  a rendered frame. A boot-time sweep reveals anything already above the trigger line.
- **Skipped elements.** A jump past an element (anchor link, restored scroll, scrollbar
  drag) can miss every observer sample. A passive scroll sweep catches those.
- **No JS.** `html:not(.js)` forces all revealed states visible.

`prefers-reduced-motion: reduce` disables every transition, loop and parallax, and
forces revealed content visible. Test with it on — the page must be fully usable.

## Behaviour hooks (`site.js`)

`data-menu` / `data-menu-trigger` / `data-menu-panel` · `data-burger` + `data-drawer` ·
`data-accordion` (add `="multi"` for many open) · `data-carousel` + `data-carousel-track`
/`-prev`/`-next`/`-dots`, optional `data-autoplay="6000"` · `data-tabs` ·
`data-demo-form="toast message"` · `data-copy="value"` · `data-spy` (scroll spy) ·
`data-year` (auto year).

Keyboard support is built in: arrow/Home/End in accordion and tabs, Escape closes
the drawer and mega menu and returns focus to the trigger.

## Brand

Name: **Valentisys**. Logo colours sampled from the supplied artwork and exposed as
`--brand-violet` `#8250F0`, `--brand-violet-light` `#A98BF5`, `--brand-indigo` `#3C1E96`,
`--brand-navy` `#1E1450`, plus `--grad-brand`.

The wordmark is navy, so the full lockup goes on light surfaces only. On ink, pair
`logo-mark.png` with live text — see the Logo section of `design-system.html`.

The UI palette (Ink, Sun, Mint, Lilac, Blush, Sky) sits on the same violet hue family
as the mark, so the logo does not clash. If you want the site repainted violet-primary
to match the logo more literally, that is a change to the Sun/Lilac semantic
assignments in `tokens.css` — the component layer would not need to change.

## Fonts

Plus Jakarta Sans (display), Inter (body), Caveat (hand accent), JetBrains Mono (code),
loaded from Google Fonts. Every stack has a system fallback, so the pages degrade
cleanly offline. To self-host, drop the files in `assets/fonts/`, add `@font-face`
rules, and delete the two `<link>` tags in each page's `<head>`.

## Accessibility

WCAG 2.1 AA targets: 2px lilac focus ring on every interactive element (`outline: none`
appears nowhere), ink-on-paper body copy, pastels used as backgrounds only, 38px
minimum target size, skip link, split headings keep an `aria-label` with the original
text while per-word spans are `aria-hidden`.
