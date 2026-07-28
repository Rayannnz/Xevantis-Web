import { SURGE_MOMENTS } from "@/lib/content";
import { Container, Section } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { Check, ShieldBolt } from "@/components/icons";

export function ScaleBand() {
  return (
    <Section id="scale">
      <Container width="wide">
        <Reveal
          variant="scale"
          className="noise relative animate-aurora overflow-hidden rounded-2xl bg-aurora p-[clamp(2rem,1.5rem+3vw,4rem)]"
        >
          <div className="grid items-center gap-[clamp(2rem,1rem+3vw,4rem)] min-[861px]:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
            <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-5">
              <div className="flex flex-wrap items-center gap-[0.85rem]">
                <ShieldBolt className="size-[42px] shrink-0" />
                <div>
                  <h2 className="m-0 font-display text-3xl font-bold leading-snug tracking-tighter">
                    SurgeShield
                  </h2>
                  <p className="text-sm font-semibold">Scale without limits</p>
                </div>
              </div>

              <p className="text-lg text-ink-700">
                From expected surges to the demand spike nobody forecast: we hold a
                trained bench on standby and flex your pod up to 3× within 72 hours,
                then back down without penalty.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Button href="#contact" magnetic={0.25}>
                  <ButtonLabel>Speak to an expert</ButtonLabel>
                </Button>
              </div>
            </div>

            <Card surface="glass">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-[0.6rem]">
                {SURGE_MOMENTS.map((moment) => (
                  <li
                    key={moment}
                    className="flex items-center gap-[0.6rem] text-sm font-medium"
                  >
                    <Check className="size-4 shrink-0 text-mint-500" strokeWidth={2.6} />
                    {moment}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
