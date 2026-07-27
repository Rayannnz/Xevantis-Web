import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Badge, Eyebrow } from "@/components/ui/Primitives";
import { Logo, Color, Typography, Space, Radius } from "@/components/ds/Foundations";
import {
  Buttons,
  Badges,
  Cards,
  Forms,
  Patterns,
  MotionTokens,
} from "@/components/ds/Components";
import { MotionLibrary, MotionRules, Voice, A11y, Usage } from "@/components/ds/Motion";
import "./docs.css";

export const metadata: Metadata = {
  title: "Design System",
  description: "Foundations, components and motion for the Valentisys BPO & software agency brand.",
};

const sidebar = [
  {
    group: "Foundations",
    items: [
      ["#logo", "Logo"],
      ["#color", "Color"],
      ["#typography", "Typography"],
      ["#space", "Space & layout"],
      ["#radius", "Radius & elevation"],
    ],
  },
  {
    group: "Components",
    items: [
      ["#buttons", "Buttons & links"],
      ["#badges", "Badges & chips"],
      ["#cards", "Cards"],
      ["#forms", "Forms"],
      ["#patterns", "Patterns"],
    ],
  },
  {
    group: "Motion",
    items: [
      ["#motion-tokens", "Timing & easing"],
      ["#motion-library", "Animation library"],
      ["#motion-rules", "Rules of use"],
    ],
  },
  {
    group: "Practice",
    items: [
      ["#voice", "Voice & imagery"],
      ["#a11y", "Accessibility"],
      ["#usage", "Getting started"],
    ],
  },
];

export default function DesignSystemPage() {
  return (
    <>
      <Header
        pinned
        showSolutions={false}
        links={[{ label: "Landing page", href: "/" }]}
        action={
          <>
            <Badge tone="sun">v1.0</Badge>
            <Button href="/" size="sm" icon="arrowRight" magnetic={0.25}>
              View live site
            </Button>
          </>
        }
      />

      <main id="main">
        <section className="section" style={{ paddingBottom: "var(--space-12)" }}>
          <div className="container container--wide">
            <div
              className="stack"
              style={{
                ["--gap" as string]: "1.25rem",
                maxWidth: 760,
                paddingTop: "var(--header-height)",
              }}
            >
              <Eyebrow>Valentisys · Design System v1.0</Eyebrow>
              <h1 data-split="words" data-stagger="50">
                The rules that make every page feel like us.
              </h1>
              <p className="lead" data-reveal="" data-delay="200">
                Three layers: <strong>primitives</strong> (raw values), <strong>semantic tokens</strong>{" "}
                (intent — surface, text, accent) and <strong>component tokens</strong> (button
                height, card radius). Components only ever read from the semantic layer, which is
                why a whole section can be flipped to dark with one attribute.
              </p>
              <div className="cluster" data-reveal="" data-delay="300">
                <Badge tone="mint">Zero UI dependencies</Badge>
                <Badge tone="lilac">WCAG AA targets</Badge>
                <Badge tone="sky">Reduced-motion safe</Badge>
                <Badge tone="blush">Server components by default</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container container--wide">
            <div className="docs">
              <aside className="docs__aside" data-spy="">
                {sidebar.map((g) => (
                  <div key={g.group} style={{ display: "contents" }}>
                    <strong>{g.group}</strong>
                    {g.items.map(([href, label]) => (
                      <Link href={href} key={href}>
                        {label}
                      </Link>
                    ))}
                  </div>
                ))}
              </aside>

              <div>
                <Logo />
                <Color />
                <Typography />
                <Space />
                <Radius />
                <Buttons />
                <Badges />
                <Cards />
                <Forms />
                <Patterns />
                <MotionTokens />
                <MotionLibrary />
                <MotionRules />
                <Voice />
                <A11y />
                <Usage />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer compact />
    </>
  );
}
