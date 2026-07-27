import Link from "next/link";
import { Brand } from "./Brand";
import { Icon } from "./ui/Icon";
import { Badge } from "./ui/Primitives";
import { footerColumns, certifications } from "@/lib/content";

const socials = [
  { label: "LinkedIn", icon: "linkedin" },
  { label: "X", icon: "x" },
  { label: "YouTube", icon: "youtube" },
  { label: "Instagram", icon: "instagram" },
] as const;

export function Footer({ compact }: { compact?: boolean }) {
  const year = new Date().getFullYear();

  if (compact) {
    return (
      <footer className="footer">
        <div className="container container--wide">
          <div className="footer__bottom" style={{ marginTop: 0, borderTop: 0 }}>
            <span>© {year} Valentisys — Design System v1.0</span>
            <div className="cluster">
              <Link className="link" href="/">
                Landing page
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="container container--wide">
        <div className="footer__grid">
          <div className="stack">
            <Brand height={44} />
            <p className="body-sm u-muted u-max-46">
              Outsourcing and engineering teams, built to make you better. Six delivery hubs, one
              operating model.
            </p>
            <div className="social">
              {socials.map((s) => (
                <Link href="/" aria-label={s.label} key={s.label}>
                  <Icon name={s.icon} />
                </Link>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="footer__title">{col.title}</h4>
              <ul className="footer__list">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="footer__title">Newsletter</h4>
            <p className="body-sm u-muted" style={{ marginBottom: "1rem" }}>
              One operations letter a month. No fluff.
            </p>
            <form data-demo-form="You're on the list. First letter lands next Tuesday." noValidate>
              <div className="inline-form" style={{ maxWidth: "none" }}>
                <label className="u-sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  className="input"
                  id="footer-email"
                  type="email"
                  placeholder="Your email"
                  required
                  style={{ minWidth: 0 }}
                />
                <button className="btn btn--primary btn--sm" type="submit">
                  <span className="btn__label">Sign up</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Valentisys. All rights reserved.</span>
          <div className="cluster">
            {certifications.map((c) => (
              <Badge outline key={c}>
                {c}
              </Badge>
            ))}
          </div>
          <div className="cluster" style={{ ["--gap" as string]: "1.25rem" }}>
            <Link className="link" href="/">
              Privacy
            </Link>
            <Link className="link" href="/">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
