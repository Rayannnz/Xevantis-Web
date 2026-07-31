import { CLIENT_LOGOS } from "@/components/ui/ClientLogos";
import { COMPLIANCE_BADGES } from "@/lib/content";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { Check } from "@/components/icons";

/**
 * Static, ruled trust band. Deliberately not a marquee: the industries are
 * categories rather than brands, and a quiet list reads as fact, not fanfare.
 */
export function TrustStrip() {
  return (
    <section
      aria-label="Who we serve"
      className="border-y border-ink-900/10 bg-paper-050"
    >
      <Container width="wide">
        <Reveal variant="fade" className="grid gap-5 py-9">
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-ink-400">
              Running the back office for
            </span>
            <ul className="flex flex-wrap gap-x-7 gap-y-2">
              {CLIENT_LOGOS.map((client) => (
                <li
                  key={client.name}
                  className="flex items-center gap-2 text-sm font-medium text-ink-500 [&>svg]:size-4 [&>svg]:opacity-70"
                >
                  {client.mark}
                  {client.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-2 border-t border-ink-900/10 pt-5">
            {COMPLIANCE_BADGES.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 text-sm font-medium text-ink-700"
              >
                <Check className="size-4 shrink-0 text-sun-500" strokeWidth={2.6} />
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
