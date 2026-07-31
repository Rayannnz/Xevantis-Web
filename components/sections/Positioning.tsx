import { WHY_SWITCH } from "@/lib/content";
import {
  Container,
  Eyebrow,
  headingClass,
  leadClass,
  PulseDot,
  Section,
} from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { Person } from "@/components/icons";

/** The parts of the arrangement a prospect actually asks about. */
const DOSSIER_ROWS: { label: string; value: string }[] = [
  { label: "Trained on", value: "Your software, your scripts, your phone tree" },
  { label: "Coverage", value: "Your office hours, in your time zone" },
  { label: "Backup", value: "A trained second seat for PTO and sick days" },
  { label: "Check-in", value: "Fifteen minutes, every Friday, same person" },
];

export function Positioning() {
  return (
    <Section id="about">
      <Container width="wide">
        <div className="grid items-start gap-[clamp(2rem,1rem+4vw,5rem)] min-[901px]:grid-cols-2">
          <div className="grid grid-cols-[minmax(0,1fr)] content-start gap-6">
            <Reveal as="span">
              <Eyebrow>01 · Why owners switch</Eyebrow>
            </Reveal>
            <SplitWords
              as="h2"
              text="A named person, not a rotating pool."
              stagger={45}
              className={headingClass}
            />
            <Reveal as="p" delay={180} className={leadClass}>
              An answering service takes a message. We give you a person — hired
              for your practice, trained on your scheduling and billing software,
              working your hours, and known by name to the patients and clients
              who call.
            </Reveal>

            <ol className="grid grid-cols-[minmax(0,1fr)] content-start">
              {WHY_SWITCH.map((reason, index) => (
                <Reveal
                  as="li"
                  key={reason}
                  delay={index * 110}
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4 border-t border-ink-900/10 py-4"
                >
                  <span className="font-display text-sm font-bold tabular-nums text-sun-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{reason}</span>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={340} className="flex flex-wrap items-center gap-3">
              <Button href="#contact">
                <ButtonLabel>See what it would cost</ButtonLabel>
              </Button>
            </Reveal>
          </div>

          {/* The arrangement, written up like a staffing sheet. */}
          <Reveal variant="right" delay={160}>
            <div className="rounded-lg border border-ink-900/12 bg-paper-000 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-900/10 px-6 py-4">
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="grid size-[42px] place-items-center rounded-full bg-sun-200 text-ink-900 [&>svg]:size-[20px]"
                  >
                    <Person />
                  </span>
                  <span className="font-display text-sm font-bold">
                    Your specialist, on paper
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 text-xs text-ink-400">
                  <PulseDot />
                  On shift now
                </span>
              </div>

              <dl className="grid grid-cols-[minmax(0,1fr)] px-6 py-2">
                {DOSSIER_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-1 border-b border-ink-900/[0.06] py-4 last:border-b-0 min-[521px]:grid-cols-[110px_minmax(0,1fr)] min-[521px]:gap-4"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      {row.label}
                    </dt>
                    <dd className="text-sm font-medium text-ink-700">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <figure className="border-t border-ink-900/10 bg-sun-050 px-6 py-5">
                <blockquote className="text-base font-medium leading-relaxed text-ink-700">
                  &ldquo;I did not want a vendor, I wanted one more competent person.
                  That is what I got, and she has been with us two years now.&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-xs text-ink-500">
                  Office Manager · Multi-specialty medical practice, Westchester
                  County, NY
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
