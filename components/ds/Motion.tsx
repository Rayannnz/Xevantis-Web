import { Block, Code, DoDont, SpecTable } from "./Shared";
import { Button, ButtonEl } from "../ui/Button";
import { Badge, Counter, Meter } from "../ui/Primitives";

const reveals = [
  { hook: 'data-reveal="up"', note: "Default entrance: 32px rise + fade, 900ms expo.", kind: "up", bg: "var(--ink-900)" },
  { hook: 'data-reveal="scale"', note: "For panels and imagery that should feel like they land.", kind: "scale", bg: "var(--lilac-400)" },
  { hook: 'data-reveal="pop"', note: "Back-eased overshoot. Badges, avatars, small delights.", kind: "pop", bg: "var(--blush-400)" },
  { hook: 'data-reveal="blur"', note: "Focus-pull entrance for hero-adjacent content.", kind: "blur", bg: "var(--mint-400)" },
  { hook: 'data-reveal="left|right"', note: "Directional — reinforces a split layout's reading order.", kind: "left", bg: "var(--sky-400)" },
  { hook: 'data-reveal="clip"', note: "Wipes up from a mask. Best on full-bleed media.", kind: "clip", bg: "var(--sun-400)" },
];

function MotionCard({ hook, note, children }: { hook: string; note: string; children: React.ReactNode }) {
  return (
    <div className="motion-card">
      <div className="motion-card__stage">{children}</div>
      <strong>{hook}</strong>
      <span className="caption">{note}</span>
    </div>
  );
}

export function MotionLibrary() {
  return (
    <Block
      id="motion-library"
      title="Animation library"
      lead="Everything below is declarative — add the attribute, the engine wires the rest. Scroll this section slowly to see the entrances fire."
    >
      <div className="grid grid--3" style={{ ["--gap" as string]: "var(--space-4)" }}>
        {reveals.map((r) => (
          <MotionCard hook={r.hook} note={r.note} key={r.hook}>
            <div
              className="motion-dot"
              data-reveal={r.kind}
              data-reveal-repeat=""
              style={{ background: r.bg }}
            />
          </MotionCard>
        ))}

        <MotionCard hook=".anim-float" note="Ambient bob for sticker notes and orbs.">
          <div className="motion-dot anim-float" />
        </MotionCard>
        <MotionCard hook=".anim-blob" note="Organic border-radius morph, 16s loop.">
          <div
            className="motion-dot anim-blob"
            style={{ width: 64, height: 64, background: "var(--mint-300)" }}
          />
        </MotionCard>
        <MotionCard hook=".anim-spin" note="26s rotation for orbit diagrams.">
          <div
            className="motion-dot anim-spin"
            style={{
              borderRadius: "50%",
              background:
                "conic-gradient(var(--sun-300),var(--lilac-300),var(--mint-300),var(--sun-300))",
            }}
          />
        </MotionCard>
        <MotionCard hook=".anim-aurora" note="The signature gradient drift. One per page, maximum two.">
          <div className="motion-card__stage anim-aurora" style={{ width: "100%" }} />
        </MotionCard>
        <MotionCard hook=".anim-sheen" note="Light sweep across dark surfaces on hover.">
          <span className="badge badge--ink anim-sheen" style={{ height: 42, paddingInline: "1.25rem" }}>
            Hover me
          </span>
        </MotionCard>
        <MotionCard hook="data-count" note="Count-up on entry, easeOutExpo, tabular figures.">
          <Counter className="stat__value" value={1240} suffix="+" />
        </MotionCard>
        <MotionCard hook="data-magnetic" note="Cursor attraction, spring return. Hero CTAs only.">
          <ButtonEl size="sm" magnetic={0.4}>
            Pull me
          </ButtonEl>
        </MotionCard>
        <MotionCard hook="data-tilt / data-spotlight" note="3D pointer response, disabled on touch.">
          <div
            className="motion-dot"
            data-tilt="14"
            data-spotlight=""
            style={{ width: 72, height: 72, background: "var(--grad-cool)" }}
          />
        </MotionCard>
        <MotionCard hook=".meter__fill" note="Scale-X grow keyed to --value.">
          <div style={{ width: "100%", paddingInline: "1.5rem" }}>
            <Meter value={0.78} />
          </div>
        </MotionCard>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <Code
          html={`<span class="tok-c">{/* a group with an inherited stagger */}</span>
&lt;div className=<span class="tok-v">"grid grid--3"</span> <span class="tok-p">data-stagger</span>=<span class="tok-v">"110"</span>&gt;
  &lt;article className=<span class="tok-v">"card"</span> <span class="tok-p">data-reveal</span>=<span class="tok-v">"up"</span>&gt;…&lt;/article&gt;   <span class="tok-c">/* delay 0ms   */</span>
  &lt;article className=<span class="tok-v">"card"</span> <span class="tok-p">data-reveal</span>=<span class="tok-v">"up"</span>&gt;…&lt;/article&gt;   <span class="tok-c">/* delay 110ms */</span>
  &lt;article className=<span class="tok-v">"card"</span> <span class="tok-p">data-reveal</span>=<span class="tok-v">"up"</span>&gt;…&lt;/article&gt;   <span class="tok-c">/* delay 220ms */</span>
&lt;/div&gt;

<span class="tok-c">{/* headline split into words, each rising out of a mask */}</span>
&lt;h2 <span class="tok-p">data-split</span>=<span class="tok-v">"words"</span> <span class="tok-p">data-stagger</span>=<span class="tok-v">"45"</span>&gt;More growth, less risk.&lt;/h2&gt;`}
        />
      </div>
    </Block>
  );
}

export function MotionRules() {
  return (
    <Block id="motion-rules" title="Rules of use">
      <DoDont
        dos={[
          "Animate transform and opacity only — they stay on the compositor.",
          "Reveal each element once. Repeating entrances on scroll-back is nausea, not delight.",
          "Keep stagger between 45–120ms; beyond that the group stops reading as a group.",
          "Let ambient loops run slow (7s+) and low-amplitude so they never compete with reading.",
          "Test the whole page with reduced motion on — content must be fully usable.",
        ]}
        donts={[
          "Don't animate width, height, top or box-shadow in a loop.",
          "Don't put more than one hero-scale effect on screen at a time.",
          "Don't gate meaning behind motion — if it only reads while animating, it's decoration.",
          "Don't stack parallax on a sticky element; the two fight and jitter.",
          "Don't use magnetic or tilt on anything below the fold that users must click quickly.",
        ]}
      />
    </Block>
  );
}

export function Voice() {
  return (
    <Block id="voice" title="Voice & imagery">
      <div className="grid grid--2">
        <div className="card card--flat">
          <h3 className="card__title">Voice</h3>
          <p className="card__body">
            Direct, numerate, warm. Lead with the outcome and the number; skip the adjectives. Say
            &quot;live in 14 days&quot;, not &quot;rapid deployment&quot;. Never say
            &quot;resources&quot; about people.
          </p>
        </div>
        <div className="card card--flat">
          <h3 className="card__title">Imagery</h3>
          <p className="card__body">
            Real people at real desks, or abstract geometry in brand pastels — never stock
            handshakes or globe-and-network clip art. Illustrations get 2px ink outlines to match
            the sticker family.
          </p>
        </div>
      </div>
    </Block>
  );
}

export function A11y() {
  return (
    <Block id="a11y" title="Accessibility commitments">
      <SpecTable
        head={["Area", "Commitment"]}
        rows={[
          ["Contrast", "Body copy is ink-900 on paper (≈16:1). Muted text uses ink-500 (≈7:1). Pastels are backgrounds only — never text colour."],
          ["Focus", <>2px lilac ring, 3px offset, on every interactive element. <code>outline: none</code> is not used anywhere in the system.</>],
          ["Motion", <><code>prefers-reduced-motion</code> disables all transitions, loops and parallax; revealed content is forced visible.</>],
          ["Keyboard", "Accordion and tabs support arrow/Home/End. Drawer and mega menu close on Escape and return focus to the trigger."],
          ["Semantics", <>Split headings keep an <code>aria-label</code> with the original text; per-word spans are <code>aria-hidden</code>.</>],
          ["Targets", "Minimum 38×38px interactive area; primary CTAs are 48–58px tall."],
        ]}
      />
    </Block>
  );
}

export function Usage() {
  return (
    <Block
      id="usage"
      title="Getting started"
      lead={
        <>
          Under Next the four stylesheets are imported by{" "}
          <code>app/globals.css</code> in token → base → animations → components order, and the
          behaviour engines are mounted once by <code>ClientRuntime</code>.
        </>
      }
    >
      <Code
        html={`<span class="tok-c">/* app/globals.css — one import chain, order matters */</span>
<span class="tok-p">@import</span> <span class="tok-v">"../assets/css/tokens.css"</span>;      <span class="tok-c">/* variables    */</span>
<span class="tok-p">@import</span> <span class="tok-v">"../assets/css/base.css"</span>;        <span class="tok-c">/* reset + type */</span>
<span class="tok-p">@import</span> <span class="tok-v">"../assets/css/animations.css"</span>;  <span class="tok-c">/* keyframes    */</span>
<span class="tok-p">@import</span> <span class="tok-v">"../assets/css/components.css"</span>;  <span class="tok-c">/* blocks       */</span>

<span class="tok-c">// app/layout.tsx — the only client component in the tree</span>
&lt;<span class="tok-p">ClientRuntime</span> /&gt;   <span class="tok-c">// initMotion() + initSite(), re-run per route</span>

<span class="tok-c">// Every section stays a server component: behaviour is declared in</span>
<span class="tok-c">// markup with data-* attributes, not wired with React state.</span>`}
      />

      <div className="cluster" style={{ marginTop: "2rem" }}>
        <Button href="/" size="lg" icon="arrowRight" magnetic={0.3}>
          See it assembled
        </Button>
        <Badge outline>next 16.2.7</Badge>
        <Badge outline>react 19</Badge>
      </div>
    </Block>
  );
}
