import { Icon, Stars } from "../ui/Icon";
import { TextLink } from "../ui/Button";
import { Eyebrow } from "../ui/Primitives";
import { testimonials, posts } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section" id="proof" data-tint="paper">
      <div className="container container--wide">
        <div className="section-head section-head--split">
          <div className="stack">
            <Eyebrow>Proof</Eyebrow>
            <h2 data-split="words" data-stagger="45">
              Validated by experts, valued by 150+ customers.
            </h2>
          </div>
          <div className="cluster" style={{ justifyContent: "flex-end" }} data-reveal="" data-delay="150">
            <div className="carousel-nav">
              <button
                className="btn btn--secondary btn--icon"
                type="button"
                data-carousel-prev=""
                aria-label="Previous testimonials"
              >
                <Icon name="arrowLeft" />
              </button>
              <button
                className="btn btn--secondary btn--icon"
                type="button"
                data-carousel-next=""
                aria-label="Next testimonials"
              >
                <Icon name="arrowRight" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="quotes"
          data-carousel=""
          data-autoplay="6000"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <div className="quotes__viewport">
            <div className="quotes__track" data-carousel-track="">
              {testimonials.map((t) => (
                <article className="quote" style={{ background: t.surface }} key={t.title}>
                  <Stars />
                  <h3 className="card__title">{t.title}</h3>
                  <p className="quote__text">{t.quote}</p>
                  <div className="quote__author">
                    <span
                      className="quote__avatar"
                      style={{ background: `var(--${t.accent}-300)` }}
                    >
                      {t.initials}
                    </span>
                    <div>
                      <strong style={{ fontFamily: "var(--font-display)" }}>{t.role}</strong>
                      <br />
                      <span className="caption">{t.meta}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="cluster" style={{ justifyContent: "center", marginTop: "2rem" }}>
            <div className="dots" data-carousel-dots="" role="tablist" aria-label="Choose slide" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Insights() {
  return (
    <section className="section" id="insights">
      <div className="container container--wide">
        <div className="section-head section-head--center">
          <h2 data-split="words" data-stagger="45">
            See what&apos;s new and what&apos;s next.
          </h2>
          <p className="lead" data-reveal="" data-delay="180">
            Thought leadership and actionable insights to help you grow faster.
          </p>
        </div>

        <div className="grid grid--3" data-stagger="120">
          {posts.map((p) => (
            <article className="post" data-reveal="up" key={p.title}>
              <div className="post__media">
                <div className={`post__art art--${p.art}`}>
                  <Icon name={p.icon} width={86} height={86} style={{ color: "var(--ink-900)" }} />
                </div>
              </div>
              <div className="post__body">
                <div className="post__meta">
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.kind}</span>
                </div>
                <h3 className="post__title">{p.title}</h3>
                <TextLink href="#insights">Read article</TextLink>
              </div>
            </article>
          ))}
        </div>

        <div className="cluster" style={{ justifyContent: "center", marginTop: "3rem" }} data-reveal="">
          <a className="btn btn--secondary" href="#insights">
            <span className="btn__label">Check out all our resources</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="section" id="contact">
      <div className="container container--wide">
        <div className="cta anim-aurora noise" data-reveal="scale">
          <svg
            className="cta__doodles"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            stroke="var(--ink-900)"
            strokeWidth="2"
            opacity=".35"
            aria-hidden="true"
          >
            <circle cx="120" cy="90" r="34" className="anim-float" />
            <path d="M1060 70c22-24 54-6 40 22s-52 22-40-22Z" className="anim-float anim-float--delay" />
            <path d="M90 320c40-30 80 20 120-10" strokeLinecap="round" className="anim-bob" />
            <path d="M980 330h70M1015 295v70" strokeLinecap="round" className="anim-float" />
            <circle cx="640" cy="40" r="12" />
            <circle cx="200" cy="200" r="7" fill="var(--ink-900)" />
          </svg>

          <Eyebrow center>Let&apos;s build it</Eyebrow>
          <h2 className="cta__title" style={{ margin: ".75rem 0 1rem" }} data-split="words" data-stagger="50">
            Outsourcing + engineering, built to make you better.
          </h2>
          <p
            className="lead u-max-60 u-mx-auto"
            style={{ color: "var(--ink-700)" }}
            data-reveal=""
            data-delay="200"
          >
            Tell us the volumes and the outcome you need. We&apos;ll come back within one business
            day with a staffing model, a timeline and a price.
          </p>

          <form
            className="cluster"
            style={{ justifyContent: "center", marginTop: "2rem" }}
            data-demo-form="Thanks — a delivery lead will reach out within one business day."
            noValidate
          >
            <div className="inline-form">
              <label className="u-sr-only" htmlFor="cta-email">
                Work email
              </label>
              <input
                className="input"
                id="cta-email"
                type="email"
                name="email"
                placeholder="you@company.com"
                required
              />
              <button className="btn btn--primary" type="submit">
                <span className="btn__label">Get started</span>
              </button>
            </div>
          </form>
          <p className="caption" style={{ marginTop: ".85rem" }} data-reveal="" data-delay="320">
            No sales sequence. One reply from a human who runs delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
