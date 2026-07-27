import { Icon } from "../ui/Icon";
import { TextLink } from "../ui/Button";
import { Eyebrow, LogoItem, Marquee } from "../ui/Primitives";
import { services, customerLogos, integrations } from "@/lib/content";

export function LogoStrip() {
  return (
    <section className="logo-strip" aria-label="Trusted by">
      <Marquee speed="slow">
        {customerLogos.map((l) => (
          <LogoItem key={l.name} name={l.name} icon={l.icon} />
        ))}
      </Marquee>
    </section>
  );
}

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container container--wide">
        <div className="section-head section-head--center">
          <Eyebrow center>What we run for you</Eyebrow>
          <h2 data-split="words" data-stagger="45">
            More growth, less risk.
          </h2>
          <p className="lead" data-reveal="" data-delay="200">
            Four capability lines, one contract, one delivery leader. Take one or take all four —
            the operating model doesn&apos;t change.
          </p>
        </div>

        <div className="grid grid--4 services" data-stagger="110">
          {services.map((s) => (
            <article
              className="card card--hover card--wash"
              data-accent={s.accent}
              data-reveal="up"
              data-tilt="7"
              data-spotlight=""
              key={s.title}
            >
              <div className="card__icon">
                <Icon name={s.icon} />
              </div>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__body">{s.body}</p>
              <div className="card__foot">
                <TextLink href="#contact">Learn more</TextLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Integrations() {
  return (
    <section className="section" data-tint="paper">
      <div className="container container--wide">
        <div className="section-head section-head--center">
          <h2 data-split="words" data-stagger="40">
            Valentisys plugs into the stack you already run.
          </h2>
          <div className="cluster" style={{ justifyContent: "center" }} data-reveal="" data-delay="220">
            <a className="btn btn--primary" href="#contact">
              <span className="btn__label">Build your team</span>
            </a>
          </div>
        </div>
      </div>

      <div className="stack" style={{ ["--gap" as string]: "1rem" }}>
        {integrations.map((row, i) => (
          <Marquee reverse={i === 1} key={i}>
            {row.map((name) => (
              <LogoItem key={name} name={name} />
            ))}
          </Marquee>
        ))}
      </div>
    </section>
  );
}
