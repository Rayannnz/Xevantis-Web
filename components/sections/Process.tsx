import { Icon } from "../ui/Icon";
import { Eyebrow } from "../ui/Primitives";
import { processSteps, surgeScenarios, stats } from "@/lib/content";
import { Counter } from "../ui/Primitives";

export function Process() {
  return (
    <section className="section" id="process" data-tint="paper" style={{ paddingTop: 0 }}>
      <div className="container container--wide">
        <div className="section-head section-head--center">
          <Eyebrow center>The launch</Eyebrow>
          <h2 data-split="words" data-stagger="45">
            Live in five steps.
          </h2>
          <p className="lead" data-reveal="" data-delay="180">
            Sourced, trained and assembled in as little as two weeks. Once you&apos;re live, we keep
            tuning until the KPIs hold on their own.
          </p>
        </div>

        <div className="split">
          {/* Single-open accordion; keyboard + ARIA wiring comes from lib/site.ts */}
          <div className="accordion" data-accordion="" data-reveal="left">
            {processSteps.map((step, i) => (
              <div className={`acc${i === 0 ? " is-open" : ""}`} key={step.title}>
                <button className="acc__trigger" type="button">
                  <span className="acc__num">{i + 1}</span>
                  <span>{step.title}</span>
                  <span className="acc__icon" aria-hidden="true" />
                </button>
                <div className="acc__panel">
                  <div>
                    <div className="acc__content">{step.body}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="u-relative" data-reveal="right" data-parallax="-0.12" aria-hidden="true">
            <div
              className="card card--sticker"
              style={{
                background: "var(--sun-200)",
                aspectRatio: "1",
                display: "grid",
                placeItems: "center",
                borderRadius: "var(--radius-2xl)",
              }}
            >
              <svg viewBox="0 0 320 320" width="100%" style={{ maxWidth: 320 }} fill="none">
                <g className="anim-spin" style={{ transformOrigin: "160px 160px" }}>
                  <circle cx="160" cy="60" r="26" fill="var(--paper-000)" stroke="var(--ink-900)" strokeWidth="3" />
                  <circle cx="260" cy="160" r="26" fill="var(--mint-300)" stroke="var(--ink-900)" strokeWidth="3" />
                  <circle cx="160" cy="260" r="26" fill="var(--lilac-300)" stroke="var(--ink-900)" strokeWidth="3" />
                  <circle cx="60" cy="160" r="26" fill="var(--blush-300)" stroke="var(--ink-900)" strokeWidth="3" />
                </g>
                <circle
                  cx="160"
                  cy="160"
                  r="118"
                  stroke="var(--ink-900)"
                  strokeWidth="2"
                  strokeDasharray="6 10"
                  opacity=".45"
                />
                <circle cx="160" cy="160" r="54" fill="var(--ink-900)" />
                <text
                  x="160"
                  y="152"
                  textAnchor="middle"
                  fill="var(--sun-300)"
                  fontFamily="var(--font-display)"
                  fontSize="26"
                  fontWeight="800"
                >
                  14
                </text>
                <text
                  x="160"
                  y="176"
                  textAnchor="middle"
                  fill="var(--paper-050)"
                  fontFamily="var(--font-body)"
                  fontSize="12"
                >
                  days
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScaleBand() {
  return (
    <section className="section" id="scale">
      <div className="container container--wide">
        <div className="scale-band anim-aurora noise" data-reveal="scale">
          <div className="scale-grid">
            <div className="stack" style={{ ["--gap" as string]: "1.25rem" }}>
              <div className="cluster" style={{ ["--gap" as string]: ".85rem" }}>
                <Icon name="bolt" width={42} height={42} style={{ color: "var(--ink-900)" }} />
                <div>
                  <h2 style={{ fontSize: "var(--text-3xl)", margin: 0 }}>SurgeShield</h2>
                  <p className="body-sm" style={{ fontWeight: 600 }}>
                    Scale without limits
                  </p>
                </div>
              </div>
              <p className="lead" style={{ color: "var(--ink-700)" }}>
                From expected surges to the demand spike nobody forecast: we hold a trained bench on
                standby and flex your pod up to 3× within 72 hours, then back down without penalty.
              </p>
              <div className="cluster">
                <a className="btn btn--primary" href="#contact" data-magnetic="0.25">
                  <span className="btn__label">Speak to an expert</span>
                </a>
              </div>
            </div>

            <div className="card card--glass">
              <ul className="scale-list">
                {surgeScenarios.map((s) => (
                  <li key={s}>
                    <Icon name="check" strokeWidth={2.6} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="section section--tight" data-scheme="dark" data-tint="ink">
      <div className="container container--wide">
        <div className="stats-band" data-stagger="120">
          {stats.map((s) => (
            <div className="stat" data-reveal="up" key={s.label}>
              <span className="stat__value">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                {s.after}
              </span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
