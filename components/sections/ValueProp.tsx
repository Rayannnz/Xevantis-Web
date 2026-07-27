import { Icon } from "../ui/Icon";
import { Eyebrow } from "../ui/Primitives";
import { launchSteps } from "@/lib/content";

const reasons = [
  "Named specialists, not a rotating pool — you keep the same people.",
  "Engineers and CX in one contract, so fixes ship instead of queueing.",
  "Month-to-month after month three. No 3-year lock-in, ever.",
];

export function ValueProp() {
  return (
    <>
      <section
        className="section"
        data-tint="sun"
        style={{ borderRadius: "var(--radius-2xl) var(--radius-2xl) 0 0" }}
      >
        <div className="container container--wide">
          <p
            className="u-center"
            style={{ marginBottom: "clamp(2rem,1.5rem + 2vw,3.5rem)" }}
            data-reveal=""
          >
            <span className="heading-1" style={{ display: "inline" }}>
              Your success is{" "}
            </span>
            <span className="hand" style={{ fontSize: "var(--text-4xl)", color: "var(--ink-900)" }}>
              our whole mission
            </span>
          </p>

          <div className="split">
            <div className="stack" style={{ ["--gap" as string]: "1.5rem" }} data-reveal="left">
              <Eyebrow>Why teams switch</Eyebrow>
              <h2>You deserve better than a call centre.</h2>
              <p className="lead">
                Most outsourcing sells you seats. We build teams — recruited for your brand, trained
                on your product, measured on your outcomes, and wired into the same tools your
                in-house staff already use.
              </p>
              <ul className="stack" style={{ ["--gap" as string]: ".85rem" }}>
                {reasons.map((r) => (
                  <li
                    className="cluster"
                    style={{ ["--gap" as string]: ".75rem", alignItems: "flex-start" }}
                    key={r}
                  >
                    <Icon
                      name="check"
                      width={20}
                      height={20}
                      style={{ marginTop: 4, flex: "none", color: "var(--mint-500)" }}
                    />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <div className="cluster">
                <a className="btn btn--sticker" href="#contact">
                  <span className="btn__label">Take Valentisys for a spin</span>
                </a>
              </div>
            </div>

            <div
              className="card card--sticker"
              data-reveal="right"
              data-tilt="5"
              style={{ background: "var(--paper-000)" }}
            >
              <div className="cluster" style={{ justifyContent: "space-between" }}>
                <span className="badge badge--sun">Launch plan</span>
                <span className="hand" style={{ fontSize: "1.6rem" }}>
                  ~ 2 weeks ~
                </span>
              </div>
              <div className="flow" data-stagger="110">
                {launchSteps.map((s) => (
                  <div className="flow__node" data-reveal="left" key={s.n}>
                    <span className="flow__dot" style={{ background: `var(--${s.accent}-300)` }}>
                      {s.n}
                    </span>
                    <div>
                      <strong style={{ fontFamily: "var(--font-display)" }}>{s.title}</strong>
                      <br />
                      <span className="body-sm u-muted">{s.body}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" data-tint="sun" style={{ paddingTop: 0 }}>
        <div className="container container--narrow u-center">
          <div
            className="cluster"
            style={{ justifyContent: "center", marginBottom: "1.25rem" }}
            data-reveal="pop"
          >
            <div
              aria-hidden="true"
              style={{
                width: 88,
                height: 88,
                borderRadius: "50%",
                background: "var(--paper-000)",
                border: "3px solid var(--ink-900)",
                display: "grid",
                placeItems: "center",
                fontFamily: "var(--font-display)",
                fontSize: "1.6rem",
                fontWeight: 800,
              }}
            >
              SN
            </div>
          </div>
          <p
            className="heading-2"
            style={{ fontWeight: 600, lineHeight: 1.35 }}
            data-reveal=""
            data-delay="120"
          >
            “The Valentisys pod is genuinely flexible with sudden changes and controls 100% of
            routing every minute — the best our clients have ever had on a daily basis.”
          </p>
          <p className="body-sm u-muted" style={{ marginTop: "1.25rem" }} data-reveal="" data-delay="220">
            <strong style={{ color: "var(--color-text)" }}>Sarah Nakamura</strong> · Director of
            Customer Experience, Lumen Retail
          </p>
        </div>
      </section>
    </>
  );
}
