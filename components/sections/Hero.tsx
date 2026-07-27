import { Button } from "../ui/Button";
import { Counter, Meter, Underline } from "../ui/Primitives";

const avatars = [
  { initials: "AR", accent: "sun" },
  { initials: "KL", accent: "mint" },
  { initials: "TN", accent: "lilac" },
  { initials: "MJ", accent: "blush" },
  { initials: "+", accent: "sky" },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="deco hero__bg" aria-hidden="true">
        <div className="orb orb--a anim-blob anim-drift" style={{ position: "absolute" }} />
        <div
          className="orb orb--b anim-blob anim-drift"
          style={{ position: "absolute", animationDelay: "-6s" }}
        />
        <div
          className="orb orb--c anim-blob anim-drift"
          style={{ position: "absolute", animationDelay: "-11s" }}
        />
      </div>

      <div className="container container--wide">
        <div className="hero__grid">
          <div className="hero__copy">
            <span className="pill-glass" data-reveal="fade">
              <span className="pulse-dot" aria-hidden="true" />
              Now onboarding teams for Q4 — 11 seats left
            </span>

            <h1 className="hero__title" data-split="words" data-stagger="55">
              Outsourcing, re-engineered to make you better.
            </h1>

            <p className="lead u-max-46" data-reveal="" data-delay="220">
              Valentisys pairs world-class BPO talent with product engineers, so your support desk
              and your roadmap finally move at the same speed. Dedicated squads live in{" "}
              <Underline>2 weeks</Underline>.
            </p>

            <div className="cluster" data-reveal="" data-delay="320">
              <Button href="#contact" size="lg" icon="arrowRight" magnetic={0.3}>
                Build your dream team
              </Button>
              <Button href="#process" size="lg" variant="secondary">
                See how it works
              </Button>
            </div>

            <div className="hero__proof" data-reveal="" data-delay="420">
              <div className="avatars" aria-hidden="true">
                {avatars.map((a) => (
                  <span key={a.initials} style={{ background: `var(--${a.accent}-300)` }}>
                    {a.initials}
                  </span>
                ))}
              </div>
              <p className="body-sm u-muted" style={{ maxWidth: "24ch" }}>
                <strong style={{ color: "var(--color-text)" }}>1,400+ specialists</strong> deployed
                across 6 delivery hubs.
              </p>
            </div>
          </div>

          <div className="hero__stage" data-reveal="scale" data-delay="260">
            <div className="hero__panel" data-tilt="6" data-parallax="-0.08">
              <div
                className="cluster"
                style={{ justifyContent: "space-between", marginBottom: "1rem" }}
              >
                <span className="badge badge--ink">Live pod · Aurora CX</span>
                <span className="caption">Today</span>
              </div>

              <h3 className="heading-3" style={{ marginBottom: ".75rem" }}>
                30 days with Valentisys
              </h3>

              <div className="stack" style={{ ["--gap" as string]: "1rem" }} data-reveal="" data-delay="500">
                <div>
                  <div className="cluster" style={{ justifyContent: "space-between" }}>
                    <span className="panel__label">Quality score</span>
                    <Counter className="panel__value" value={96} suffix="%" />
                  </div>
                  <div style={{ marginTop: ".45rem" }}>
                    <Meter value={0.96} />
                  </div>
                </div>
                <div>
                  <div className="cluster" style={{ justifyContent: "space-between" }}>
                    <span className="panel__label">First response time</span>
                    <span className="panel__value">
                      42<span style={{ fontSize: ".7em" }}> sec</span>
                    </span>
                  </div>
                  <div style={{ marginTop: ".45rem" }}>
                    <Meter value={0.82} delay={120} />
                  </div>
                </div>
                <div>
                  <div className="cluster" style={{ justifyContent: "space-between" }}>
                    <span className="panel__label">Cost per resolved ticket</span>
                    <span className="panel__value">
                      &minus;
                      <Counter value={38} suffix="%" />
                    </span>
                  </div>
                  <div style={{ marginTop: ".45rem" }}>
                    <Meter value={0.62} delay={240} />
                  </div>
                </div>
              </div>

              <div
                className="panel__row"
                style={{ marginTop: "1rem", borderTop: "1px solid var(--color-border)" }}
              >
                <span className="panel__label">Tickets handled this week</span>
                <Counter className="panel__value" value={18420} duration={2000} />
              </div>
            </div>

            <span className="sticky-note note--1 anim-float">🎯 SLA met 99.4%</span>
            <span className="sticky-note note--2 anim-float anim-float--delay">⚡ Go-live: day 12</span>
            <span className="sticky-note note--3 anim-float anim-float--slow">💬 CSAT 4.8 / 5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
