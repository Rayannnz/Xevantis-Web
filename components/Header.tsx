import Link from "next/link";
import { Brand } from "./Brand";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { nav } from "@/lib/content";

/**
 * Server component. The mega menu, drawer and sticky/hide behaviour are all
 * driven by `lib/site.ts` and `lib/motion.ts` through the data-* attributes
 * below, so no client JavaScript is shipped for the header itself.
 *
 * `pinned` disables the hide-on-scroll-down behaviour (used on the docs page,
 * where the header doubles as the section context).
 */
export function Header({
  pinned,
  links = nav.primary,
  showSolutions = true,
  action,
}: {
  pinned?: boolean;
  links?: Array<{ label: string; href: string }>;
  showSolutions?: boolean;
  action?: React.ReactNode;
}) {
  return (
    <header className="header" data-header="" {...(pinned ? { "data-pinned": "true" } : {})}>
      <div className="container container--wide">
        <div className="header__inner">
          <Brand priority />

          <nav className="nav" aria-label="Primary">
            {showSolutions && (
              <div className="u-relative" data-menu="">
                <button
                  className="nav__link"
                  type="button"
                  data-menu-trigger=""
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Solutions
                  <Icon name="chevronDown" />
                </button>
                <div className="megamenu" data-menu-panel="">
                  <div className="megamenu__grid">
                    {nav.solutions.map((item) => (
                      <Link className="megamenu__item" href={item.href} key={item.title}>
                        <i style={{ background: `var(--${item.accent}-200)` }}>
                          <Icon name={item.icon} />
                        </i>
                        <div>
                          <strong>{item.title}</strong>
                          <span>{item.body}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {links.map((l) => (
              <Link className="nav__link" href={l.href} key={l.href + l.label}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            {action ?? (
              <>
                <Link className="btn btn--ghost btn--sm" href="/#contact">
                  <span className="btn__label">Sign in</span>
                </Link>
                <Button href="/#contact" size="sm" icon="arrowRight" magnetic={0.25}>
                  Get started
                </Button>
              </>
            )}
            <button
              className="burger"
              type="button"
              data-burger=""
              aria-expanded="false"
              aria-controls="mobile-drawer"
              aria-label="Open menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Drawer() {
  return (
    <nav className="drawer" id="mobile-drawer" data-drawer="" aria-label="Mobile">
      {nav.drawer.map((l) => (
        <Link href={l.href} key={l.href + l.label}>
          {l.label}
        </Link>
      ))}
      <Link className="btn btn--accent btn--lg u-full" href="/#contact" style={{ marginTop: "1.5rem" }}>
        <span className="btn__label">Build your team</span>
      </Link>
    </nav>
  );
}
