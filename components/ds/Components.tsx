import { Block, Code, SpecTable } from "./Shared";
import { ButtonEl, TextLink } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Badge, Counter, LogoItem, Marquee, Meter } from "../ui/Primitives";

export function Buttons() {
  return (
    <Block
      id="buttons"
      title="Buttons & links"
      lead={
        <>
          One primary action per view. Every button has a liquid fill that rises on hover
          (<code>::before</code>, 480ms expo) — the sticker variant swaps that for a physical press
          instead. Add <code>data-magnetic</code> for cursor attraction on hero CTAs.
        </>
      }
    >
      <div className="demo" style={{ marginBottom: "1rem" }}>
        <ButtonEl icon="arrowRight">Primary</ButtonEl>
        <ButtonEl variant="accent">Accent</ButtonEl>
        <ButtonEl variant="secondary">Secondary</ButtonEl>
        <ButtonEl variant="ghost">Ghost</ButtonEl>
        <ButtonEl variant="sticker">Sticker</ButtonEl>
        <ButtonEl disabled>Disabled</ButtonEl>
      </div>

      <div className="demo" style={{ marginBottom: "1rem" }}>
        <ButtonEl size="sm">Small · 38</ButtonEl>
        <ButtonEl>Medium · 48</ButtonEl>
        <ButtonEl size="lg" magnetic={0.3}>
          Large · 58 (magnetic)
        </ButtonEl>
        <button className="btn btn--secondary btn--icon" type="button" aria-label="Next">
          <Icon name="arrowRight" />
        </button>
        <TextLink href="#buttons">Text link</TextLink>
      </div>

      <div className="demo demo--dark" data-scheme="dark">
        <ButtonEl variant="accent">Accent on dark</ButtonEl>
        <ButtonEl variant="secondary">Secondary on dark</ButtonEl>
        <ButtonEl variant="sticker">Sticker on dark</ButtonEl>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <Code
          html={`<span class="tok-c">// The label stays wrapped so the liquid fill sits behind it.</span>
&lt;<span class="tok-p">Button</span> href=<span class="tok-v">"/#contact"</span> size=<span class="tok-v">"lg"</span> icon=<span class="tok-v">"arrowRight"</span> magnetic={0.3}&gt;
  Build your dream team
&lt;/<span class="tok-p">Button</span>&gt;

<span class="tok-c">// renders →</span>
&lt;a class=<span class="tok-v">"btn btn--primary btn--lg"</span> <span class="tok-p">data-magnetic</span>=<span class="tok-v">"0.3"</span>&gt;
  &lt;span class=<span class="tok-v">"btn__label"</span>&gt;Build your dream team&lt;/span&gt;&lt;svg …/&gt;
&lt;/a&gt;`}
        />
      </div>
    </Block>
  );
}

export function Badges() {
  return (
    <Block
      id="badges"
      title="Badges & chips"
      lead="Badges label; chips filter. Use the glass pill only over gradients or imagery."
    >
      <div className="demo">
        <Badge>Default</Badge>
        <Badge tone="sun">Sun</Badge>
        <Badge tone="mint">Mint</Badge>
        <Badge tone="lilac">Lilac</Badge>
        <Badge tone="blush">Blush</Badge>
        <Badge tone="sky">Sky</Badge>
        <Badge tone="ink">Ink</Badge>
        <Badge outline>Outline</Badge>
        <span className="chip">Filter chip</span>
        <span className="pill-glass">
          <span className="pulse-dot" aria-hidden="true" /> Live · 11 seats left
        </span>
      </div>
    </Block>
  );
}

export function Cards() {
  return (
    <Block
      id="cards"
      title="Cards"
      lead={
        <>
          Five surfaces, one skeleton. <code>.card--hover</code> adds the lift;{" "}
          <code>.card--wash</code> adds the accent flood; <code>data-tilt</code> and{" "}
          <code>data-spotlight</code> add pointer response on fine pointers only.
        </>
      }
    >
      <div className="grid grid--3" style={{ ["--gap" as string]: "var(--space-5)" }}>
        <article
          className="card card--hover card--wash"
          data-accent="sky"
          data-tilt="7"
          data-spotlight=""
        >
          <div className="card__icon">
            <Icon name="headsetFull" />
          </div>
          <h3 className="card__title">Default + wash</h3>
          <p className="card__body">Hover to see the accent flood rise and the icon tilt.</p>
          <div className="card__foot">
            <TextLink href="#cards">Learn more</TextLink>
          </div>
        </article>

        <article className="card card--sticker card--hover">
          <span className="card__index">02</span>
          <div className="card__icon" style={{ background: "var(--sun-300)" }}>
            <Icon name="logoSpark" />
          </div>
          <h3 className="card__title">Sticker</h3>
          <p className="card__body">
            Hard offset shadow. Reserved for playful, illustrative moments.
          </p>
        </article>

        <article className="card card--ink anim-sheen" data-spotlight="" data-scheme="dark">
          <div className="card__icon" style={{ background: "var(--lilac-300)" }}>
            <Icon name="code" style={{ color: "var(--ink-900)" }} />
          </div>
          <h3 className="card__title">Ink + sheen</h3>
          <p className="card__body">
            Dark surface with a light sweep on hover and a pointer spotlight.
          </p>
        </article>

        <article className="card card--flat">
          <h3 className="card__title">Flat</h3>
          <p className="card__body">Sunk surface, no border. For dense lists and secondary info.</p>
        </article>

        <article className="card card--glass" style={{ background: "var(--grad-cool)" }}>
          <h3 className="card__title">Glass</h3>
          <p className="card__body">Backdrop blur. Only ever placed on a gradient or photo.</p>
        </article>

        <div className="card">
          <div className="stat">
            <Counter className="stat__value" value={96} suffix="%" />
            <span className="stat__label">Stat block with count-up + meter</span>
          </div>
          <Meter value={0.96} />
        </div>
      </div>
    </Block>
  );
}

export function Forms() {
  return (
    <Block
      id="forms"
      title="Forms"
      lead={
        <>
          Pill fields, 52px tall, with a 4px Sun focus ring — visible against every surface in the
          palette. Errors set <code>aria-invalid</code>, never colour alone.
        </>
      }
    >
      <div className="demo demo--stack" style={{ maxWidth: 620 }}>
        <form
          className="stack"
          data-demo-form="Demo submitted — no data left the page."
          noValidate
        >
          <div className="field">
            <label className="field__label" htmlFor="ds-name">
              Full name
            </label>
            <input className="input" id="ds-name" type="text" placeholder="Alex Rivera" />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="ds-email">
              Work email
            </label>
            <input
              className="input"
              id="ds-email"
              type="email"
              placeholder="you@company.com"
              required
            />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="ds-team">
              Team size
            </label>
            <select className="select" id="ds-team" defaultValue="1–10 seats">
              <option>1–10 seats</option>
              <option>11–50 seats</option>
              <option>51–200 seats</option>
              <option>200+ seats</option>
            </select>
          </div>
          <div className="field">
            <label className="field__label" htmlFor="ds-msg">
              What do you need staffed?
            </label>
            <textarea
              className="textarea"
              id="ds-msg"
              placeholder="Tier-1 support, 12k tickets/month, Zendesk…"
            />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="ds-err">
              Error state
            </label>
            <input
              className="input"
              id="ds-err"
              type="text"
              defaultValue="not-an-email"
              aria-invalid="true"
              aria-describedby="ds-err-msg"
            />
            <span className="caption" id="ds-err-msg" style={{ color: "var(--signal-danger)" }}>
              Enter a valid work email address.
            </span>
          </div>
          <ButtonEl type="submit">Submit</ButtonEl>
        </form>
      </div>
    </Block>
  );
}

export function Patterns() {
  return (
    <Block
      id="patterns"
      title="Patterns"
      lead={
        <>
          Composed blocks that appear across pages. All keyboard-operable, all wired by{" "}
          <code>lib/site.ts</code> through <code>data-*</code> attributes.
        </>
      }
    >
      <div className="stack" style={{ ["--gap" as string]: "2rem" }}>
        <div>
          <h3 style={{ marginBottom: "1rem" }}>
            Accordion <Badge outline>data-accordion</Badge>
          </h3>
          <div className="accordion" data-accordion="">
            <div className="acc is-open">
              <button className="acc__trigger" type="button">
                <span className="acc__num">1</span>
                <span>Arrow keys move between headers</span>
                <span className="acc__icon" aria-hidden="true" />
              </button>
              <div className="acc__panel">
                <div>
                  <div className="acc__content">
                    The panel animates with <code>grid-template-rows: 0fr → 1fr</code>, so it works
                    at any content height with no JS measurement.
                  </div>
                </div>
              </div>
            </div>
            <div className="acc">
              <button className="acc__trigger" type="button">
                <span className="acc__num">2</span>
                <span>Single-open by default</span>
                <span className="acc__icon" aria-hidden="true" />
              </button>
              <div className="acc__panel">
                <div>
                  <div className="acc__content">
                    Pass <code>data-accordion=&quot;multi&quot;</code> to allow several open at once.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>
            Marquee <Badge outline>data-marquee</Badge>
          </h3>
          <Marquee
            style={{
              border: "1px dashed var(--color-border)",
              borderRadius: "var(--radius-lg)",
              paddingBlock: "1.25rem",
            }}
          >
            {["Zendesk", "Intercom", "Salesforce", "Twilio", "Snowflake", "Linear"].map((n) => (
              <LogoItem key={n} name={n} />
            ))}
          </Marquee>
          <p className="caption" style={{ marginTop: ".5rem" }}>
            Track content is cloned at runtime; hover pauses it.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>Wave &amp; ribbon dividers</h3>
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--color-border)",
            }}
          >
            <div style={{ background: "var(--sun-100)", height: 40 }} />
            <div className="wave" style={{ background: "var(--color-bg)" }}>
              <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
                <path
                  d="M0 40c180 46 340 46 540 12s420-54 640-12 260 40 260 40V0H0Z"
                  fill="var(--sun-100)"
                />
              </svg>
            </div>
            <div className="ribbon" style={{ height: 70 }} />
          </div>
        </div>
      </div>
    </Block>
  );
}

export function MotionTokens() {
  return (
    <Block
      id="motion-tokens"
      title="Timing & easing"
      lead={
        <>
          Motion is a token, not a decision made per component. Interface feedback is fast
          (&lt;300ms); entrances are slow and eased out hard so they feel weighted rather than
          bouncy.
        </>
      }
    >
      <SpecTable
        head={["Token", "Value", "Where it belongs"]}
        rows={[
          [<code key="a">--dur-instant</code>, "90ms", "Colour/opacity flips, hover tint"],
          [<code key="b">--dur-fast</code>, "180ms", "Buttons, links, focus rings"],
          [<code key="c">--dur-base</code>, "280ms", "Nav pills, tilt return, dropdowns"],
          [<code key="d">--dur-slow</code>, "480ms", "Card lift, accordion, drawer, liquid fill"],
          [<code key="e">--dur-slower</code>, "720ms", "Carousel travel, underline draw"],
          [<code key="f">--dur-reveal</code>, "900ms", "Scroll entrances only"],
          [<code key="g">--ease-out-expo</code>, "cubic-bezier(.16,1,.3,1)", "Default for anything entering"],
          [<code key="h">--ease-out-back</code>, "cubic-bezier(.34,1.56,.64,1)", "Small playful pops — icons, dots"],
          [<code key="i">--ease-spring</code>, "linear() spring", "Magnetic buttons returning home"],
          [<code key="j">--stagger</code>, "70ms", "Step between siblings in a group"],
        ]}
      />
    </Block>
  );
}
