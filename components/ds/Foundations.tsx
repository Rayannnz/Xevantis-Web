import Image from "next/image";
import { Block, Code, DoDont, Ramp, SpecTable } from "./Shared";
import { Underline } from "../ui/Primitives";
import logo from "@/assets/img/logo-valentisys.png";
import mark from "@/assets/img/logo-mark.png";

const six = ["050", "100", "200", "300", "400", "500"];
const ramp = (token: string, lightFrom = 6) =>
  six.map((step, i) => ({ step, light: i >= lightFrom }));

export function Logo() {
  return (
    <Block
      id="logo"
      title="Logo"
      lead={
        <>
          Two assets. The <strong>lockup</strong> (V + orbit + wordmark) is the default and should
          be used wherever there is room. The <strong>mark</strong> stands alone only where the name
          already appears or the space is square — app icons, favicons, avatars, social profile
          images.
        </>
      }
    >
      <div className="grid grid--2" style={{ ["--gap" as string]: "var(--space-5)" }}>
        <div className="demo" style={{ justifyContent: "center", paddingBlock: "var(--space-10)" }}>
          <Image src={logo} alt="Valentisys primary lockup" style={{ height: 64, width: "auto" }} />
        </div>
        <div className="demo" style={{ justifyContent: "center", paddingBlock: "var(--space-10)" }}>
          <Image src={mark} alt="Valentisys mark" style={{ height: 80, width: "auto" }} />
        </div>
      </div>

      <div
        className="grid grid--2"
        style={{ ["--gap" as string]: "var(--space-5)", marginTop: "var(--space-5)" }}
      >
        <div className="demo" style={{ justifyContent: "center", background: "var(--grad-aurora)" }}>
          <Image src={logo} alt="" style={{ height: 48, width: "auto" }} />
        </div>
        <div className="demo demo--dark" style={{ justifyContent: "center" }}>
          <Image src={mark} alt="" style={{ height: 48, width: "auto" }} />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--paper-050)",
              letterSpacing: "var(--tracking-tighter)",
            }}
          >
            Valentisys
          </span>
        </div>
      </div>
      <p className="caption" style={{ marginTop: ".75rem" }}>
        Left: the lockup sits happily on any light brand wash. Right: the wordmark is navy, so on
        ink surfaces pair the mark with live text instead of placing the navy lockup.
      </p>

      <h3 style={{ margin: "2.5rem 0 1rem" }}>Brand colours in the mark</h3>
      <div className="swatches">
        {[
          ["violet", "brand-violet", "#8250F0"],
          ["orbit", "brand-violet-light", "#A98BF5"],
          ["indigo", "brand-indigo", "#3C1E96"],
          ["navy", "brand-navy", "#1E1450"],
          ["grad-brand", "grad-brand", ""],
        ].map(([label, token, hex]) => (
          <div className="swatch" key={token}>
            <div
              className="swatch__chip"
              style={{ background: `var(--${token})` }}
              data-copy={`var(--${token})`}
            />
            <div className="swatch__meta">
              <span>{label}</span>
              {hex && <span>{hex}</span>}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <DoDont
          dos={[
            "Keep clear space around the lockup equal to the height of the V.",
            "Size by height, never width — --logo-height on .brand.",
            "Minimum 24px tall for the lockup, 16px for the mark.",
            "Place on paper, white, or a light brand wash.",
          ]}
          donts={[
            "Don't recolour, outline, or add a shadow to the mark.",
            "Don't stretch, rotate, or crop the orbit ring.",
            "Don't set the navy lockup on ink or on a saturated colour.",
            "Don't rebuild the wordmark in Plus Jakarta Sans — it is custom.",
          ]}
        />
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <Code
          html={`<span class="tok-c">// components/Brand.tsx — next/image keeps the aspect ratio</span>
&lt;Link className=<span class="tok-v">"brand"</span> href=<span class="tok-v">"/"</span> aria-label=<span class="tok-v">"Valentisys home"</span>&gt;
  &lt;Image className=<span class="tok-v">"brand__logo"</span> src={logo} alt=<span class="tok-v">""</span> /&gt;
&lt;/Link&gt;

<span class="tok-c">/* alt is empty because the link already carries the accessible name */</span>`}
        />
      </div>
    </Block>
  );
}

export function Color() {
  return (
    <Block
      id="color"
      title="Color"
      lead={
        <>
          One ink, one paper, five brand pastels. Pastels carry meaning — Sun for energy and CTAs,
          Mint for reliability, Lilac for intelligence/AI, Blush for the human side, Sky for scale
          and data. Text is always ink on light; never pastel on pastel. Click a swatch to copy its
          token.
        </>
      }
    >
      <div className="stack" style={{ ["--gap" as string]: "2rem" }}>
        <div>
          <div className="ramp">
            <span className="ramp__name">Ink — text, borders, the brand&apos;s spine</span>
            {[
              ["900", true],
              ["700", true],
              ["500", true],
              ["300", false],
              ["100", false],
            ].map(([step, light]) => (
              <div
                className="ramp__step"
                key={String(step)}
                data-copy={`var(--ink-${step})`}
                style={{ background: `var(--ink-${step})`, ...(light ? { color: "#fff" } : {}) }}
              >
                {step}
              </div>
            ))}
            <div
              className="ramp__step"
              data-copy="var(--paper-100)"
              style={{ background: "var(--paper-100)", border: "1px solid var(--color-border)" }}
            >
              paper
            </div>
          </div>

          <Ramp name="Sun — primary accent, CTA fills, highlights" token="sun" steps={ramp("sun")} />
          <Ramp name="Mint — reliability, uptime, success" token="mint" steps={ramp("mint", 5)} />
          <Ramp name="Lilac — intelligence, automation, AI" token="lilac" steps={ramp("lilac", 4)} />
          <Ramp name="Blush — the human touch, CX, empathy" token="blush" steps={ramp("blush", 5)} />
          <Ramp name="Sky — scale, infrastructure, data" token="sky" steps={ramp("sky", 5)} />
        </div>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>Gradients</h3>
          <div className="swatches">
            {["aurora", "sunrise", "cool", "ink", "brand"].map((g) => (
              <div className="swatch" key={g}>
                <div className="swatch__chip" style={{ background: `var(--grad-${g})` }} />
                <div className="swatch__meta">
                  <span>{g}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <DoDont
          dos={[
            "Use one pastel per section as a wash, ink for all body copy, and Sun only where you want the eye to land.",
          ]}
          donts={[
            "Stack pastel on pastel, set body text in a 300-level tint, or use two accent colours in one CTA.",
          ]}
        />
      </div>
    </Block>
  );
}

export function Typography() {
  return (
    <Block
      id="typography"
      title="Typography"
      lead={
        <>
          <strong>Plus Jakarta Sans</strong> for anything structural (headings, buttons, labels),{" "}
          <strong>Inter</strong> for reading, <strong>Caveat</strong> as a hand-written accent —
          maximum one per section. Every size is a <code>clamp()</code>, so there are no typographic
          media queries anywhere in the system. Under Next these are self-hosted by{" "}
          <code>next/font</code>.
        </>
      }
    >
      <div className="stack" style={{ ["--gap" as string]: "0" }}>
        {[
          ["display-lg", "--text-6xl · 800", <span className="display-lg">Built to scale</span>],
          ["h1", "--text-5xl · 800", <h1 style={{ margin: 0 }}>Outsourcing, re-engineered</h1>],
          ["h2", "--text-4xl · 700", <h2 style={{ margin: 0 }}>More growth, less risk</h2>],
          ["h3", "--text-2xl · 700", <h3 style={{ margin: 0 }}>Customer support squads</h3>],
          [
            "lead",
            "--text-lg · 400",
            <p className="lead" style={{ margin: 0 }}>
              Dedicated teams, live in two weeks, measured on your outcomes.
            </p>,
          ],
          [
            "body",
            "--text-base · 400",
            <p style={{ margin: 0 }}>
              Most outsourcing sells you seats. We build teams — recruited for your brand, trained on
              your product and wired into the tools your in-house staff already use.
            </p>,
          ],
          [
            "body-sm",
            "--text-sm",
            <p className="body-sm u-muted" style={{ margin: 0 }}>
              Supporting copy, card bodies, table cells.
            </p>,
          ],
          ["eyebrow", "--text-xs · 700 · uppercase", <span className="eyebrow">Why teams switch</span>],
          [
            "hand accent",
            "Caveat 700",
            <span className="hand" style={{ fontSize: "2.5rem" }}>
              our whole mission
            </span>,
          ],
        ].map(([name, meta, sample], i) => (
          <div className="type-row" key={i}>
            <div className="type-row__meta">
              {name as string}
              <br />
              {meta as string}
            </div>
            <div>{sample as React.ReactNode}</div>
          </div>
        ))}
      </div>

      <div className="demo" style={{ marginTop: "2rem" }}>
        <p
          style={{
            fontSize: "var(--text-2xl)",
            fontWeight: 700,
            fontFamily: "var(--font-display)",
            margin: 0,
          }}
        >
          Highlight styles: <span className="mark mark--sun">Sun</span>{" "}
          <span className="mark mark--mint">Mint</span>{" "}
          <span className="mark mark--lilac">Lilac</span>{" "}
          <span className="text-gradient">gradient</span> <Underline>underline</Underline>
        </p>
      </div>
    </Block>
  );
}

export function Space() {
  return (
    <Block
      id="space"
      title="Space & layout"
      lead={
        <>
          A 4px base scale for components; sections use the fluid{" "}
          <code>--space-section</code> so vertical rhythm grows with the viewport. Three container
          widths cover every page.
        </>
      }
    >
      <div className="grid grid--2">
        <div className="demo demo--stack">
          {[
            ["space-1 · 4", 4],
            ["space-2 · 8", 8],
            ["space-3 · 12", 12],
            ["space-4 · 16", 16],
            ["space-6 · 24", 24],
            ["space-8 · 32", 32],
            ["space-12 · 48", 48],
            ["space-16 · 64", 64],
            ["space-24 · 96", 96],
          ].map(([label, w]) => (
            <div className="space-bar" key={String(label)}>
              <span className="type-row__meta" style={{ width: 96 }}>
                {label}
              </span>
              <span className="space-bar__viz" style={{ width: w as number }} />
            </div>
          ))}
        </div>

        <SpecTable
          head={["Token", "Value", "Use"]}
          rows={[
            [<code key="a">--container-narrow</code>, "780px", "Long-form copy, quotes"],
            [<code key="b">--container-max</code>, "1240px", "Default page content"],
            [<code key="c">--container-wide</code>, "1480px", "Hero, grids, marquees"],
            [<code key="d">--space-section</code>, "72 → 144px", "Section padding-block"],
            [<code key="e">--space-gutter</code>, "20 → 40px", "Container padding-inline"],
            [<code key="f">.grid--2/3/4</code>, "—", "Collapses at 1024 / 860 / 620px"],
          ]}
        />
      </div>
    </Block>
  );
}

export function Radius() {
  return (
    <Block
      id="radius"
      title="Radius & elevation"
      lead={
        <>
          Generous radii are core to the brand&apos;s friendliness. Two shadow families:{" "}
          <strong>soft</strong> for real depth, <strong>sticker</strong> (a hard offset) for the
          playful, illustrative surfaces.
        </>
      }
    >
      <div className="demo demo--grid" style={{ marginBottom: "1.5rem" }}>
        {["sm · 10", "md · 16", "lg · 24", "xl · 32", "2xl · 44"].map((r) => {
          const key = r.split(" ")[0];
          return (
            <div
              className="elev"
              key={r}
              style={{
                borderRadius: `var(--radius-${key})`,
                border: "1px solid var(--color-border)",
              }}
            >
              radius-{r}
            </div>
          );
        })}
        <div
          className="elev anim-blob"
          style={{ borderRadius: "var(--radius-blob)", background: "var(--lilac-200)" }}
        >
          radius-blob
        </div>
      </div>

      <div className="demo demo--grid" style={{ background: "var(--paper-100)" }}>
        {["sm", "md", "lg", "xl"].map((s) => (
          <div className="elev" key={s} style={{ boxShadow: `var(--shadow-${s})` }}>
            shadow-{s}
          </div>
        ))}
        <div
          className="elev"
          style={{ boxShadow: "var(--shadow-glow-sun)", background: "var(--sun-300)" }}
        >
          glow-sun
        </div>
        <div
          className="elev"
          style={{ boxShadow: "var(--shadow-sticker)", border: "2px solid var(--ink-900)" }}
        >
          sticker
        </div>
      </div>
    </Block>
  );
}
