import type { Metadata } from "next";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PROCESS_STEPS } from "@/lib/content";
import { DocsHeader } from "@/components/layout/DocsHeader";
import {
  Badge,
  Container,
  Eyebrow,
  Hand,
  PillGlass,
  PulseDot,
  Ribbon,
  Section,
  TextLink,
  Wave,
} from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Card, CardBody, CardIcon, CardTitle } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { Marquee, MarqueeItem } from "@/components/ui/Marquee";
import { Counter, Meter } from "@/components/ui/Counter";
import { Tilt, Spotlight } from "@/components/ui/Tilt";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { MarkUnderline } from "@/components/motion/MarkUnderline";
import { DocsAside, RampStep, Swatch } from "@/components/design-system/interactive";
import { DemoForm } from "@/components/design-system/DemoForm";
import {
  Block,
  Code,
  DoDont,
  DoDontItem,
  Demo,
  Elev,
  MotionCard,
  Ramp,
  Rules,
  Swatches,
  TableScroll,
  Token,
  TypeRow,
  specTd,
  specTh,
  tok,
} from "@/components/design-system/primitives";
import {
  ArrowRight,
  ArrowUpRight,
  Brackets,
  Headset,
  MarkSparkle,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Valentisys — Design System",
  description:
    "Foundations, components and motion for the Valentisys BPO & software agency brand.",
};

const RAMPS = [
  {
    name: "Ink — text, borders, the brand's spine",
    steps: [
      { label: "900", token: "var(--ink-900)", bg: "var(--color-ink-900)", fg: "#fff" },
      { label: "700", token: "var(--ink-700)", bg: "var(--color-ink-700)", fg: "#fff" },
      { label: "500", token: "var(--ink-500)", bg: "var(--color-ink-500)", fg: "#fff" },
      { label: "300", token: "var(--ink-300)", bg: "var(--color-ink-300)" },
      { label: "100", token: "var(--ink-100)", bg: "var(--color-ink-100)" },
      { label: "paper", token: "var(--paper-100)", bg: "var(--color-paper-100)", border: true },
    ],
  },
  ...(
    [
      ["Sun — primary accent, CTA fills, highlights", "sun", [4, 5]],
      ["Mint — reliability, uptime, success", "mint", [5]],
      ["Lilac — intelligence, automation, AI", "lilac", [4, 5]],
      ["Blush — the human touch, CX, empathy", "blush", [5]],
      ["Sky — scale, infrastructure, data", "sky", [5]],
    ] as const
  ).map(([name, family, light]) => ({
    name,
    steps: ["050", "100", "200", "300", "400", "500"].map((step, index) => ({
      label: step,
      token: `var(--${family}-${step})`,
      bg: `var(--color-${family}-${step})`,
      fg: (light as readonly number[]).includes(index) ? "#fff" : undefined,
    })),
  })),
];

const MOTION_TOKENS: [string, string, string][] = [
  ["--dur-instant", "90ms", "Colour/opacity flips, hover tint"],
  ["--dur-fast", "180ms", "Buttons, links, focus rings"],
  ["--dur-base", "280ms", "Nav pills, tilt return, dropdowns"],
  ["--dur-slow", "480ms", "Card lift, accordion, drawer, liquid fill"],
  ["--dur-slower", "720ms", "Carousel travel, underline draw"],
  ["--dur-reveal", "900ms", "Scroll entrances only"],
  ["--ease-out-expo", "cubic-bezier(.16,1,.3,1)", "Default for anything entering"],
  ["--ease-out-back", "cubic-bezier(.34,1.56,.64,1)", "Small playful pops — icons, dots"],
  ["--ease-spring", "linear() spring", "Magnetic buttons returning home"],
  ["--stagger", "70ms", "Step between siblings in a group"],
];

const LAYOUT_TOKENS: [string, string, string][] = [
  ["--container-narrow", "780px", "Long-form copy, quotes"],
  ["--container-max", "1240px", "Default page content"],
  ["--container-wide", "1480px", "Hero, grids, marquees"],
  ["--space-section", "72 → 144px", "Section padding-block"],
  ["--space-gutter", "20 → 40px", "Container padding-inline"],
  [".grid--2/3/4", "—", "Collapses at 1024 / 860 / 620px"],
];

const A11Y: [string, string][] = [
  [
    "Contrast",
    "Body copy is ink-900 on paper (≈16:1). Muted text uses ink-500 (≈7:1). Pastels are backgrounds only — never text colour.",
  ],
  [
    "Focus",
    "2px lilac ring, 3px offset, on every interactive element. outline: none is not used anywhere in the system.",
  ],
  [
    "Motion",
    "prefers-reduced-motion disables all transitions, loops and parallax; revealed content is forced visible.",
  ],
  [
    "Keyboard",
    "Accordion and tabs support arrow/Home/End. Drawer and mega menu close on Escape and return focus to the trigger.",
  ],
  [
    "Semantics",
    "Split headings keep an aria-label with the original text; per-word spans are aria-hidden.",
  ],
  ["Targets", "Minimum 38×38px interactive area; primary CTAs are 48–58px tall."],
];

const SPACE_STEPS = [
  ["space-1 · 4", 4],
  ["space-2 · 8", 8],
  ["space-3 · 12", 12],
  ["space-4 · 16", 16],
  ["space-6 · 24", 24],
  ["space-8 · 32", 32],
  ["space-12 · 48", 48],
  ["space-16 · 64", 64],
  ["space-24 · 96", 96],
] as const;

export default function DesignSystemPage() {
  return (
    <>
      <DocsHeader />

      <main id="main" tabIndex={-1}>
        <Section className="pb-12">
          <Container width="wide">
            <div className="grid max-w-[760px] gap-5 pt-[var(--header-height)]">
              <Reveal as="span" className="justify-self-start">
                <Eyebrow>Valentisys · Design System v1.0</Eyebrow>
              </Reveal>
              <SplitWords
                as="h1"
                text="The rules that make every page feel like us."
                stagger={50}
                className="font-display text-5xl font-extrabold tracking-tighter"
              />
              <Reveal as="p" delay={200} className="text-lg text-ink-500">
                Three layers: <strong>primitives</strong> (raw values),{" "}
                <strong>semantic tokens</strong> (intent — surface, text, accent) and{" "}
                <strong>component tokens</strong> (button height, card radius).
                Components only ever read from the semantic layer, which is why a whole
                section can be flipped to dark with one attribute.
              </Reveal>
              <Reveal delay={300} className="flex flex-wrap items-center gap-3">
                <Badge tone="mint">Zero dependencies</Badge>
                <Badge tone="lilac">WCAG AA targets</Badge>
                <Badge tone="sky">Reduced-motion safe</Badge>
                <Badge tone="blush">Framework-agnostic CSS</Badge>
              </Reveal>
            </div>
          </Container>
        </Section>

        <Section flushTop>
          <Container width="wide">
            <div className="grid items-start gap-[clamp(2rem,1rem+3vw,4rem)] min-[901px]:grid-cols-[236px_minmax(0,1fr)] [&>*]:min-w-0">
              <DocsAside />

              <div>
                <LogoBlock />
                <ColorBlock />
                <TypographyBlock />
                <SpaceBlock />
                <RadiusBlock />
                <ButtonsBlock />
                <BadgesBlock />
                <CardsBlock />
                <FormsBlock />
                <PatternsBlock />
                <MotionTokensBlock />
                <MotionLibraryBlock />
                <MotionRulesBlock />
                <VoiceBlock />
                <A11yBlock />
                <UsageBlock />
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <footer className="bg-paper-200 pb-8 pt-[clamp(3rem,2rem+4vw,5rem)]">
        <Container width="wide">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-ink-400">
            <span>© {new Date().getFullYear()} Valentisys — Design System v1.0</span>
            <TextLink href="/">Landing page</TextLink>
          </div>
        </Container>
      </footer>
    </>
  );
}

/* ==========================================================================
   FOUNDATIONS
   ========================================================================== */

function LogoBlock() {
  return (
    <Block
      id="logo"
      title="Logo"
      first
      intro={
        <>
          Two assets. The <strong>lockup</strong> (V + orbit + wordmark) is the default
          and should be used wherever there is room. The <strong>mark</strong> stands
          alone only where the name already appears or the space is square — app icons,
          favicons, avatars, social profile images.
        </>
      }
    >
      <div className="grid grid-cols-1 gap-5 min-[621px]:grid-cols-2">
        <Demo className="justify-center py-10">
          <Image
            src="/img/logo-valentisys.png"
            alt="Valentisys primary lockup"
            width={240}
            height={64}
            className="h-16 w-auto"
          />
        </Demo>
        <Demo className="justify-center py-10">
          <Image
            src="/img/logo-mark.png"
            alt="Valentisys mark"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        </Demo>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 min-[621px]:grid-cols-2">
        <Demo className="justify-center bg-aurora">
          <Image src="/img/logo-valentisys.png" alt="" width={180} height={48} className="h-12 w-auto" />
        </Demo>
        <Demo dark className="justify-center">
          <Image src="/img/logo-mark.png" alt="" width={48} height={48} className="h-12 w-auto" />
          <span className="font-display text-2xl font-extrabold tracking-tighter text-paper-050">
            Valentisys
          </span>
        </Demo>
      </div>

      <p className="mt-3 text-xs text-ink-400">
        Left: the lockup sits happily on any light brand wash. Right: the wordmark is
        navy, so on ink surfaces pair the mark with live text instead of placing the
        navy lockup.
      </p>

      <h3 className="mb-4 mt-10 font-display text-2xl font-bold leading-snug tracking-tight">
        Brand colours in the mark
      </h3>
      <Swatches>
        <Swatch name="violet" hex="#8250F0" value="var(--brand-violet)" background="var(--color-brand-violet)" />
        <Swatch name="orbit" hex="#A98BF5" value="var(--brand-violet-light)" background="var(--color-brand-violet-light)" />
        <Swatch name="indigo" hex="#3C1E96" value="var(--brand-indigo)" background="var(--color-brand-indigo)" />
        <Swatch name="navy" hex="#1E1450" value="var(--brand-navy)" background="var(--color-brand-navy)" />
        <Swatch name="grad-brand" value="var(--grad-brand)" background="var(--grad-brand)" />
      </Swatches>

      <div className="mt-8">
        <DoDont>
          <DoDontItem tone="do">
            <Rules
              items={[
                "Keep clear space around the lockup equal to the height of the V.",
                "Size by height, never width — --logo-height on .brand.",
                "Minimum 24px tall for the lockup, 16px for the mark.",
                "Place on paper, white, or a light brand wash.",
              ]}
            />
          </DoDontItem>
          <DoDontItem tone="dont">
            <Rules
              items={[
                "Don't recolour, outline, or add a shadow to the mark.",
                "Don't stretch, rotate, or crop the orbit ring.",
                "Don't set the navy lockup on ink or on a saturated colour.",
                "Don't rebuild the wordmark in Plus Jakarta Sans — it is custom.",
              ]}
            />
          </DoDontItem>
        </DoDont>
      </div>

      <Code>
        {`<Brand height={44} href="/" />
`}
        <span className={tok.comment}>
          {`/* alt is empty because the link already carries the accessible name */`}
        </span>
      </Code>
    </Block>
  );
}

function ColorBlock() {
  return (
    <Block
      id="color"
      title="Color"
      intro={
        <>
          One ink, one paper, five brand pastels. Pastels carry meaning — Sun for energy
          and CTAs, Mint for reliability, Lilac for intelligence/AI, Blush for the human
          side, Sky for scale and data. Text is always ink on light; never pastel on
          pastel. Click a swatch to copy its token.
        </>
      }
    >
      <div className="grid gap-8">
        <div>
          {RAMPS.map((ramp) => (
            <Ramp key={ramp.name} name={ramp.name}>
              {ramp.steps.map((step) => (
                <RampStep
                  key={step.token}
                  token={step.token}
                  label={step.label}
                  style={{
                    background: step.bg,
                    color: step.fg,
                    border: "border" in step && step.border ? "1px solid rgb(14 13 18 / 0.1)" : undefined,
                  }}
                />
              ))}
            </Ramp>
          ))}
        </div>

        <div>
          <h3 className="mb-4 font-display text-2xl font-bold leading-snug tracking-tight">
            Gradients
          </h3>
          <Swatches>
            <Swatch name="aurora" background="var(--grad-aurora)" />
            <Swatch name="sunrise" background="var(--grad-sunrise)" />
            <Swatch name="cool" background="var(--grad-cool)" />
            <Swatch name="ink" background="var(--grad-ink)" />
          </Swatches>
        </div>

        <DoDont>
          <DoDontItem tone="do">
            <p className="mt-[0.4rem] text-sm text-ink-500">
              Use one pastel per section as a wash, ink for all body copy, and Sun only
              where you want the eye to land.
            </p>
          </DoDontItem>
          <DoDontItem tone="dont">
            <p className="mt-[0.4rem] text-sm text-ink-500">
              Stack pastel on pastel, set body text in a 300-level tint, or use two
              accent colours in one CTA.
            </p>
          </DoDontItem>
        </DoDont>
      </div>
    </Block>
  );
}

function TypographyBlock() {
  return (
    <Block
      id="typography"
      title="Typography"
      intro={
        <>
          <strong>Plus Jakarta Sans</strong> for anything structural (headings, buttons,
          labels), <strong>Inter</strong> for reading, <strong>Caveat</strong> as a
          hand-written accent — maximum one per section. Every size is a{" "}
          <Token>clamp()</Token>, so there are no typographic media queries anywhere in
          the system.
        </>
      }
    >
      <div className="grid">
        <TypeRow meta={<>display-lg<br />--text-6xl · 800</>}>
          <span className="font-display text-6xl font-extrabold leading-[0.96] tracking-tighter">
            Built to scale
          </span>
        </TypeRow>
        {/* Type specimens are spans, not real headings: the page already has
            its h1, and a specimen must not join the document outline. TypeRow
            labels each row with the tag it demonstrates. */}
        <TypeRow meta={<>h1<br />--text-5xl · 800</>}>
          <span className="block font-display text-5xl font-extrabold leading-tight tracking-tighter">
            Outsourcing, re-engineered
          </span>
        </TypeRow>
        <TypeRow meta={<>h2<br />--text-4xl · 700</>}>
          <span className="block font-display text-4xl font-bold leading-snug tracking-tighter">
            More growth, less risk
          </span>
        </TypeRow>
        <TypeRow meta={<>h3<br />--text-2xl · 700</>}>
          <span className="block font-display text-2xl font-bold leading-snug tracking-tight">
            Customer support squads
          </span>
        </TypeRow>
        <TypeRow meta={<>lead<br />--text-lg · 400</>}>
          <p className="m-0 text-lg text-ink-500">
            Dedicated teams, live in two weeks, measured on your outcomes.
          </p>
        </TypeRow>
        <TypeRow meta={<>body<br />--text-base · 400</>}>
          <p className="m-0">
            Most outsourcing sells you seats. We build teams — recruited for your brand,
            trained on your product and wired into the tools your in-house staff already
            use.
          </p>
        </TypeRow>
        <TypeRow meta={<>body-sm<br />--text-sm</>}>
          <p className="m-0 text-sm text-ink-500">
            Supporting copy, card bodies, table cells.
          </p>
        </TypeRow>
        <TypeRow meta={<>eyebrow<br />--text-xs · 700 · uppercase</>}>
          <Eyebrow>Why teams switch</Eyebrow>
        </TypeRow>
        <TypeRow meta={<>hand accent<br />Caveat 700</>}>
          <Hand className="text-[2.5rem]">our whole mission</Hand>
        </TypeRow>
      </div>

      <Demo className="mt-8">
        <p className="m-0 font-display text-2xl font-bold">
          Highlight styles:{" "}
          <span className="inline-block whitespace-nowrap rounded-sm bg-sun-200 px-[0.18em]">Sun</span>{" "}
          <span className="inline-block whitespace-nowrap rounded-sm bg-mint-200 px-[0.18em]">Mint</span>{" "}
          <span className="inline-block whitespace-nowrap rounded-sm bg-lilac-200 px-[0.18em]">Lilac</span>{" "}
          <span className="bg-[linear-gradient(92deg,var(--color-lilac-500),var(--color-blush-500)_45%,var(--color-sun-500))] bg-clip-text text-transparent">
            gradient
          </span>{" "}
          <MarkUnderline>underline</MarkUnderline>
        </p>
      </Demo>
    </Block>
  );
}

function SpaceBlock() {
  return (
    <Block
      id="space"
      title="Space & layout"
      intro={
        <>
          A 4px base scale for components; sections use the fluid{" "}
          <Token>--space-section</Token> so vertical rhythm grows with the viewport.
          Three container widths cover every page.
        </>
      }
    >
      <div className="grid grid-cols-1 gap-6 min-[621px]:grid-cols-2">
        <Demo variant="stack">
          {SPACE_STEPS.map(([label, width]) => (
            <div key={label} className="flex items-center gap-4 py-[0.4rem]">
              <span className="w-24 font-mono text-xs text-ink-400">{label}</span>
              <span className="h-[18px] rounded-[4px] bg-lilac-300" style={{ width }} />
            </div>
          ))}
        </Demo>

        <TableScroll>
          <thead>
            <tr>
              <th className={specTh}>Token</th>
              <th className={specTh}>Value</th>
              <th className={specTh}>Use</th>
            </tr>
          </thead>
          <tbody>
            {LAYOUT_TOKENS.map(([token, value, use]) => (
              <tr key={token}>
                <td className={specTd}>
                  <Token>{token}</Token>
                </td>
                <td className={specTd}>{value}</td>
                <td className={specTd}>{use}</td>
              </tr>
            ))}
          </tbody>
        </TableScroll>
      </div>
    </Block>
  );
}

function RadiusBlock() {
  return (
    <Block
      id="radius"
      title="Radius & elevation"
      intro={
        <>
          Generous radii are core to the brand&rsquo;s friendliness. Two shadow families:{" "}
          <strong>soft</strong> for real depth, <strong>sticker</strong> (a hard offset)
          for the playful, illustrative surfaces.
        </>
      }
    >
      <Demo variant="grid" className="mb-6">
        <Elev className="rounded-sm border border-ink-900/10">radius-sm · 10</Elev>
        <Elev className="rounded-md border border-ink-900/10">radius-md · 16</Elev>
        <Elev className="rounded-lg border border-ink-900/10">radius-lg · 24</Elev>
        <Elev className="rounded-xl border border-ink-900/10">radius-xl · 32</Elev>
        <Elev className="rounded-2xl border border-ink-900/10">radius-2xl · 44</Elev>
        <Elev className="animate-blob rounded-blob bg-lilac-200">radius-blob</Elev>
      </Demo>

      <Demo variant="grid" className="bg-paper-100">
        <Elev className="shadow-sm">shadow-sm</Elev>
        <Elev className="shadow-md">shadow-md</Elev>
        <Elev className="shadow-lg">shadow-lg</Elev>
        <Elev className="shadow-xl">shadow-xl</Elev>
        <Elev className="bg-sun-300 shadow-glow-sun">glow-sun</Elev>
        <Elev className="border-2 border-ink-900 shadow-sticker">sticker</Elev>
      </Demo>
    </Block>
  );
}

/* ==========================================================================
   COMPONENTS
   ========================================================================== */

function ButtonsBlock() {
  return (
    <Block
      id="buttons"
      title="Buttons & links"
      intro={
        <>
          One primary action per view. Every button has a liquid fill that rises on
          hover (<Token>::before</Token>, 480ms expo) — the sticker variant swaps that
          for a physical press instead. Pass <Token>magnetic</Token> for cursor
          attraction on hero CTAs.
        </>
      }
    >
      <Demo className="mb-4">
        <Button>
          <ButtonLabel>Primary</ButtonLabel>
          <ArrowRight />
        </Button>
        <Button variant="accent">
          <ButtonLabel>Accent</ButtonLabel>
        </Button>
        <Button variant="secondary">
          <ButtonLabel>Secondary</ButtonLabel>
        </Button>
        <Button variant="ghost">
          <ButtonLabel>Ghost</ButtonLabel>
        </Button>
        <Button variant="sticker">
          <ButtonLabel>Sticker</ButtonLabel>
        </Button>
        <Button disabled>
          <ButtonLabel>Disabled</ButtonLabel>
        </Button>
      </Demo>

      <Demo className="mb-4">
        <Button size="sm">
          <ButtonLabel>Small · 38</ButtonLabel>
        </Button>
        <Button>
          <ButtonLabel>Medium · 48</ButtonLabel>
        </Button>
        <Button size="lg" magnetic={0.3}>
          <ButtonLabel>Large · 58 (magnetic)</ButtonLabel>
        </Button>
        <Button variant="secondary" iconOnly aria-label="Next">
          <ArrowRight />
        </Button>
        <TextLink href="#buttons">
          Text link
          <ArrowUpRight />
        </TextLink>
      </Demo>

      <Demo dark>
        <Button variant="accent">
          <ButtonLabel>Accent on dark</ButtonLabel>
        </Button>
        <Button
          variant="secondary"
          className="border-white/90 text-paper-050 before:bg-white/90 hover:text-ink-900"
        >
          <ButtonLabel>Secondary on dark</ButtonLabel>
        </Button>
        <Button
          variant="sticker"
          className="border-white/90 bg-white/[0.045] text-paper-050 shadow-[4px_4px_0_rgb(255_255_255/0.9)] hover:shadow-[6px_6px_0_rgb(255_255_255/0.9)] active:shadow-[1px_1px_0_rgb(255_255_255/0.9)]"
        >
          <ButtonLabel>Sticker on dark</ButtonLabel>
        </Button>
      </Demo>

      <Code>
        <span className={tok.comment}>
          {`// the label is wrapped so the liquid fill sits behind it`}
        </span>
        {`
<Button href="#" size=`}
        <span className={tok.value}>{`"lg"`}</span>
        {` `}
        <span className={tok.prop}>magnetic</span>
        {`={`}
        <span className={tok.value}>0.3</span>
        {`}>
  <ButtonLabel>Build your dream team</ButtonLabel>
  <ArrowRight />
</Button>`}
      </Code>
    </Block>
  );
}

function BadgesBlock() {
  return (
    <Block
      id="badges"
      title="Badges & chips"
      intro="Badges label; chips filter. Use the glass pill only over gradients or imagery."
    >
      <Demo>
        <Badge>Default</Badge>
        <Badge tone="sun">Sun</Badge>
        <Badge tone="mint">Mint</Badge>
        <Badge tone="lilac">Lilac</Badge>
        <Badge tone="blush">Blush</Badge>
        <Badge tone="sky">Sky</Badge>
        <Badge tone="ink">Ink</Badge>
        <Badge tone="outline">Outline</Badge>
        <span
          className={cn(
            "inline-flex items-center gap-[0.4rem] rounded-pill border border-ink-900/10 bg-paper-000",
            "px-[0.85rem] py-[0.4rem] text-sm text-ink-500",
            "[transition:transform_180ms_var(--ease-out-back),border-color_180ms_ease,color_180ms_ease]",
            "hover:-translate-y-[2px] hover:border-ink-900 hover:text-ink-900",
          )}
        >
          Filter chip
        </span>
        <PillGlass>
          <PulseDot /> Live · 11 seats left
        </PillGlass>
      </Demo>
    </Block>
  );
}

function CardsBlock() {
  return (
    <Block
      id="cards"
      title="Cards"
      intro={
        <>
          Five surfaces, one skeleton. <Token>lift</Token> adds the hover rise;{" "}
          <Token>wash</Token> adds the accent flood; <Token>Tilt</Token> and{" "}
          <Token>Spotlight</Token> add pointer response on fine pointers only.
        </>
      }
    >
      <div className="grid grid-cols-1 gap-5 min-[621px]:grid-cols-2 min-[861px]:grid-cols-3">
        <Card as="article" lift wash accent="sky">
          <CardIcon accent="sky">
            <Headset />
          </CardIcon>
          <CardTitle>Default + wash</CardTitle>
          <CardBody>Hover to see the accent flood rise and the icon tilt.</CardBody>
          <div className="mt-auto pt-2">
            <TextLink href="#cards">Learn more</TextLink>
          </div>
        </Card>

        <Card as="article" surface="sticker" lift>
          <span className="absolute right-6 top-5 font-display text-2xl font-extrabold opacity-[0.12]">
            02
          </span>
          <CardIcon accent="sun">
            <MarkSparkle />
          </CardIcon>
          <CardTitle>Sticker</CardTitle>
          <CardBody>Hard offset shadow. Reserved for playful, illustrative moments.</CardBody>
        </Card>

        <Spotlight className="rounded-xl">
          <Card as="article" surface="ink" className="sheen h-full">
            <CardIcon accent="lilac">
              <Brackets />
            </CardIcon>
            <CardTitle>Ink + sheen</CardTitle>
            <CardBody className="text-white/[0.66]">
              Dark surface with a light sweep on hover and a pointer spotlight.
            </CardBody>
          </Card>
        </Spotlight>

        <Card as="article" surface="flat">
          <CardTitle>Flat</CardTitle>
          <CardBody>Sunk surface, no border. For dense lists and secondary info.</CardBody>
        </Card>

        <Card as="article" surface="glass" className="bg-cool">
          <CardTitle>Glass</CardTitle>
          <CardBody>Backdrop blur. Only ever placed on a gradient or photo.</CardBody>
        </Card>

        <Card>
          <div className="grid gap-[0.35rem]">
            <span className="font-display text-4xl font-extrabold leading-none tracking-tighter">
              <Counter to={96} suffix="%" />
            </span>
            <span className="max-w-[26ch] text-sm text-ink-500">
              Stat block with count-up + meter
            </span>
          </div>
          <Meter value={0.96} />
        </Card>
      </div>
    </Block>
  );
}

function FormsBlock() {
  return (
    <Block
      id="forms"
      title="Forms"
      intro={
        <>
          Pill fields, 52px tall, with a 4px Sun focus ring — visible against every
          surface in the palette. Errors set <Token>aria-invalid</Token>, never colour
          alone.
        </>
      }
    >
      <Demo variant="stack" className="max-w-[620px]">
        <DemoForm />
      </Demo>
    </Block>
  );
}

function PatternsBlock() {
  return (
    <Block
      id="patterns"
      title="Patterns"
      intro="Composed blocks that appear across pages. All keyboard-operable, all driven by props rather than data attributes."
    >
      <div className="grid gap-8">
        <div>
          <h3 className="mb-4 flex flex-wrap items-center gap-3 font-display text-2xl font-bold leading-snug tracking-tight">
            Accordion <Badge tone="outline">Accordion</Badge>
          </h3>
          <Accordion items={PROCESS_STEPS.slice(0, 2)} />
        </div>

        <div>
          <h3 className="mb-4 flex flex-wrap items-center gap-3 font-display text-2xl font-bold leading-snug tracking-tight">
            Marquee <Badge tone="outline">Marquee</Badge>
          </h3>
          <Marquee className="rounded-lg border border-dashed border-ink-900/10 py-5">
            {["Zendesk", "Intercom", "Salesforce", "Twilio", "Snowflake", "Linear"].map(
              (tool) => (
                <MarqueeItem key={tool}>{tool}</MarqueeItem>
              ),
            )}
          </Marquee>
          <p className="mt-2 text-xs text-ink-400">
            Track content is duplicated at render; hover pauses it.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-2xl font-bold leading-snug tracking-tight">
            Wave &amp; ribbon dividers
          </h3>
          <div className="overflow-hidden rounded-lg border border-ink-900/10">
            <div className="h-10 bg-sun-100" />
            <div className="bg-paper-100">
              <Wave />
            </div>
            <Ribbon />
          </div>
        </div>
      </div>
    </Block>
  );
}

/* ==========================================================================
   MOTION
   ========================================================================== */

function MotionTokensBlock() {
  return (
    <Block
      id="motion-tokens"
      title="Timing & easing"
      intro="Motion is a token, not a decision made per component. Interface feedback is fast (<300ms); entrances are slow and eased out hard so they feel weighted rather than bouncy."
    >
      <TableScroll>
        <thead>
          <tr>
            <th className={specTh}>Token</th>
            <th className={specTh}>Value</th>
            <th className={specTh}>Where it belongs</th>
          </tr>
        </thead>
        <tbody>
          {MOTION_TOKENS.map(([token, value, use]) => (
            <tr key={token}>
              <td className={specTd}>
                <Token>{token}</Token>
              </td>
              <td className={specTd}>{value}</td>
              <td className={specTd}>{use}</td>
            </tr>
          ))}
        </tbody>
      </TableScroll>
    </Block>
  );
}

function MotionLibraryBlock() {
  const dot = "size-[42px] rounded-md bg-ink-900";

  return (
    <Block
      id="motion-library"
      title="Animation library"
      intro="Everything below is a component or a utility class. Scroll this section slowly to see the entrances fire."
    >
      <div className="grid grid-cols-1 gap-4 min-[621px]:grid-cols-2 min-[861px]:grid-cols-3">
        <MotionCard label='<Reveal variant="up" />' caption="Default entrance: 32px rise + fade, 900ms expo.">
          <Reveal>
            <div className={dot} />
          </Reveal>
        </MotionCard>
        <MotionCard label='<Reveal variant="scale" />' caption="For panels and imagery that should feel like they land.">
          <Reveal variant="scale">
            <div className={cn(dot, "bg-lilac-400")} />
          </Reveal>
        </MotionCard>
        <MotionCard label='<Reveal variant="pop" />' caption="Back-eased overshoot. Badges, avatars, small delights.">
          <Reveal variant="pop">
            <div className={cn(dot, "bg-blush-400")} />
          </Reveal>
        </MotionCard>
        <MotionCard label='<Reveal variant="blur" />' caption="Focus-pull entrance for hero-adjacent content.">
          <Reveal variant="blur">
            <div className={cn(dot, "bg-mint-400")} />
          </Reveal>
        </MotionCard>
        <MotionCard label='<Reveal variant="left|right" />' caption="Directional — use to reinforce a split layout's reading order.">
          <Reveal variant="left">
            <div className={cn(dot, "bg-sky-400")} />
          </Reveal>
        </MotionCard>
        <MotionCard label='<Reveal variant="clip" />' caption="Wipes up from a mask. Best on full-bleed media.">
          <Reveal variant="clip">
            <div className={cn(dot, "bg-sun-400")} />
          </Reveal>
        </MotionCard>

        <MotionCard label="animate-float" caption="Ambient bob for sticker notes and orbs.">
          <div className={cn(dot, "animate-float")} />
        </MotionCard>
        <MotionCard label="animate-blob" caption="Organic border-radius morph, 16s loop.">
          <div className="size-16 animate-blob rounded-blob bg-mint-300" />
        </MotionCard>
        <MotionCard label="animate-spin-slow" caption="26s rotation for orbit diagrams.">
          <div className="size-[42px] animate-spin-slow rounded-full bg-[conic-gradient(var(--color-sun-300),var(--color-lilac-300),var(--color-mint-300),var(--color-sun-300))]" />
        </MotionCard>
        <MotionCard label="animate-aurora" caption="The signature gradient drift. One per page, maximum two." stageClassName="w-full bg-aurora animate-aurora" />
        <MotionCard label="sheen" caption="Light sweep across dark surfaces on hover.">
          <Badge tone="ink" className="sheen h-[42px] px-5">
            Hover me
          </Badge>
        </MotionCard>
        <MotionCard label="<Counter />" caption="Count-up on entry, easeOutExpo, tabular figures.">
          <span className="font-display text-4xl font-extrabold leading-none tracking-tighter">
            <Counter to={1240} suffix="+" />
          </span>
        </MotionCard>
        <MotionCard label="magnetic" caption="Cursor attraction, spring return. Hero CTAs only.">
          <Button size="sm" magnetic={0.4}>
            <ButtonLabel>Pull me</ButtonLabel>
          </Button>
        </MotionCard>
        <MotionCard label="<Tilt /> / <Spotlight />" caption="3D pointer response, disabled on touch.">
          <Tilt max={14}>
            <Spotlight className="rounded-md">
              <div className="size-[72px] rounded-md bg-cool" />
            </Spotlight>
          </Tilt>
        </MotionCard>
        <MotionCard label="<Meter />" caption="Scale-X grow keyed to its value.">
          <div className="w-full px-6">
            <Meter value={0.78} />
          </div>
        </MotionCard>
      </div>

      <Code>
        <span className={tok.comment}>{`// a group with an explicit stagger`}</span>
        {`
{services.map((service, i) => (
  <Reveal key={service.title} `}
        <span className={tok.prop}>delay</span>
        {`={i * `}
        <span className={tok.value}>110</span>
        {`}>…</Reveal>
))}

`}
        <span className={tok.comment}>{`// headline split into words, each rising out of a mask`}</span>
        {`
<SplitWords text=`}
        <span className={tok.value}>{`"More growth, less risk."`}</span>
        {` `}
        <span className={tok.prop}>stagger</span>
        {`={`}
        <span className={tok.value}>45</span>
        {`} />`}
      </Code>
    </Block>
  );
}

function MotionRulesBlock() {
  return (
    <Block id="motion-rules" title="Rules of use">
      <DoDont>
        <DoDontItem tone="do">
          <Rules
            items={[
              "Animate transform and opacity only — they stay on the compositor.",
              "Reveal each element once. Repeating entrances on scroll-back is nausea, not delight.",
              "Keep stagger between 45–120ms; beyond that the group stops reading as a group.",
              "Let ambient loops run slow (7s+) and low-amplitude so they never compete with reading.",
              "Test the whole page with reduced motion on — content must be fully usable.",
            ]}
          />
        </DoDontItem>
        <DoDontItem tone="dont">
          <Rules
            items={[
              "Don't animate width, height, top or box-shadow in a loop.",
              "Don't put more than one hero-scale effect on screen at a time.",
              "Don't gate meaning behind motion — if it only reads while animating, it's decoration.",
              "Don't stack parallax on a sticky element; the two fight and jitter.",
              "Don't use magnetic or tilt on anything below the fold that users must click quickly.",
            ]}
          />
        </DoDontItem>
      </DoDont>
    </Block>
  );
}

/* ==========================================================================
   PRACTICE
   ========================================================================== */

function VoiceBlock() {
  return (
    <Block id="voice" title="Voice & imagery">
      <div className="grid grid-cols-1 gap-6 min-[621px]:grid-cols-2">
        <Card surface="flat">
          <CardTitle>Voice</CardTitle>
          <CardBody>
            Direct, numerate, warm. Lead with the outcome and the number; skip the
            adjectives. Say &ldquo;live in 14 days&rdquo;, not &ldquo;rapid
            deployment&rdquo;. Never say &ldquo;resources&rdquo; about people.
          </CardBody>
        </Card>
        <Card surface="flat">
          <CardTitle>Imagery</CardTitle>
          <CardBody>
            Real people at real desks, or abstract geometry in brand pastels — never
            stock handshakes or globe-and-network clip art. Illustrations get 2px ink
            outlines to match the sticker family.
          </CardBody>
        </Card>
      </div>
    </Block>
  );
}

function A11yBlock() {
  return (
    <Block id="a11y" title="Accessibility commitments">
      <TableScroll>
        <thead>
          <tr>
            <th className={specTh}>Area</th>
            <th className={specTh}>Commitment</th>
          </tr>
        </thead>
        <tbody>
          {A11Y.map(([area, commitment]) => (
            <tr key={area}>
              <td className={specTd}>{area}</td>
              <td className={specTd}>{commitment}</td>
            </tr>
          ))}
        </tbody>
      </TableScroll>
    </Block>
  );
}

function UsageBlock() {
  return (
    <Block
      id="usage"
      title="Getting started"
      intro="Tokens live in the Tailwind theme, so every primitive is a utility. Import the components you need; there is no stylesheet order to get right."
    >
      <Code>
        {`import { Button, ButtonLabel } from `}
        <span className={tok.value}>{`"@/components/ui/Button"`}</span>
        {`;
import { Card, CardTitle } from `}
        <span className={tok.value}>{`"@/components/ui/Card"`}</span>
        {`;
import { Reveal } from `}
        <span className={tok.value}>{`"@/components/motion/Reveal"`}</span>
        {`;

`}
        <span className={tok.comment}>
          {`/* tokens are Tailwind utilities: bg-sun-300, text-4xl, shadow-sticker,
   rounded-2xl, ease-out-expo, animate-float … */`}
        </span>
      </Code>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button href="/" size="lg" magnetic={0.3}>
          <ButtonLabel>See it assembled</ButtonLabel>
          <ArrowRight />
        </Button>
      </div>
    </Block>
  );
}
