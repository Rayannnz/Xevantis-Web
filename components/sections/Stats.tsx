import { STATS } from "@/lib/content";
import { Container, Section } from "@/components/ui/primitives";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { Particles } from "@/components/motion/Particles";

/**
 * The one dark band on the page. Colors are stated outright rather than
 * routed through a theme scope: a single section does not justify a whole
 * inversion layer, and the rendered result is identical.
 *
 * The particle field only goes here: it needs a dark ground to read at all,
 * and one drifting layer against ink is depth where four would be a screensaver.
 * `isolate` is what keeps it behind the figures without a z-index on each.
 */
export function Stats() {
  return (
    <Section tight tint="ink" className="isolate overflow-hidden text-paper-050">
      <Particles
        colorTokens={["--color-sun-400", "--color-lilac-300", "--color-paper-200"]}
        particleCount={800}
        // The field is a sphere but the band is a wide letterbox, so the spread
        // is set by the width and the count is raised to compensate for
        // everything that falls above, below or behind the camera. Points are
        // cheap; a spread that fits the height instead clumps them mid-band.
        particleSpread={14}
        speed={0.06}
        particleBaseSize={110}
        alphaParticles
        moveParticlesOnHover
        particleHoverFactor={0.6}
        className="pointer-events-none absolute inset-0 opacity-90"
      />
      <Container width="wide" className="relative">
        <div className="grid grid-cols-2 gap-8 min-[861px]:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 120}
              className="grid content-start gap-[0.35rem] min-[861px]:border-l min-[861px]:border-white/10 min-[861px]:pl-8 min-[861px]:first:border-l-0 min-[861px]:first:pl-0"
            >
              <span className="font-display text-4xl font-extrabold leading-none tracking-tighter tabular-nums">
                <Counter to={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                {stat.trailing}
              </span>
              <span className="max-w-[26ch] text-sm text-white/[0.68]">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
