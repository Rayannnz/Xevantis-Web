import { STATS } from "@/lib/content";
import { Container, Section } from "@/components/ui/primitives";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The one dark band on the page. Colors are stated outright rather than
 * routed through a theme scope: a single section does not justify a whole
 * inversion layer, and the rendered result is identical.
 */
export function Stats() {
  return (
    <Section tight tint="ink" className="text-paper-050">
      <Container width="wide">
        <div className="grid grid-cols-2 gap-8 min-[861px]:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 120} className="grid gap-[0.35rem]">
              <span className="font-display text-4xl font-extrabold leading-none tracking-tighter">
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
