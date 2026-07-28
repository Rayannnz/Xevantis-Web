import type { Service } from "@/lib/types";
import {
  Container,
  Eyebrow,
  headingClass,
  leadClass,
  Section,
  SectionHead,
  TextLink,
} from "@/components/ui/primitives";
import { Card, CardBody, CardFoot, CardIcon, CardTitle } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";
import { ArrowUpRight, Brackets, Headset, Ledger, ShieldCheck } from "@/components/icons";

const SERVICES: Service[] = [
  {
    title: "Customer Support",
    body: "Voice, chat, email, social and app-store replies — staffed by people who know your product, not a script.",
    accent: "sky",
    icon: <Headset />,
  },
  {
    title: "Back Office",
    body: "Order management, claims, billing exceptions and data ops — the invisible work that decides your margin.",
    accent: "blush",
    icon: <Ledger />,
  },
  {
    title: "Trust & Safety",
    body: "Content moderation, fraud review and policy enforcement, with wellbeing programmes built into the roster.",
    accent: "lilac",
    icon: <ShieldCheck />,
  },
  {
    title: "Software Pods",
    body: "Full-stack, mobile and data engineers who ship inside your repo, your sprint, your definition of done.",
    accent: "mint",
    icon: <Brackets />,
  },
];

export function Services() {
  return (
    <Section id="services">
      <Container width="wide">
        <SectionHead align="center">
          <Reveal as="span">
            <Eyebrow centered>What we run for you</Eyebrow>
          </Reveal>
          <SplitWords text="More growth, less risk." stagger={45} className={headingClass} />
          <Reveal as="p" delay={200} className={leadClass}>
            Four capability lines, one contract, one delivery leader. Take one or take
            all four — the operating model doesn&rsquo;t change.
          </Reveal>
        </SectionHead>

        <div className="grid grid-cols-1 gap-5 min-[621px]:grid-cols-2 min-[1025px]:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 110} className="flex">
              <Card as="article" lift wash accent={service.accent} className="w-full">
                <CardIcon accent={service.accent}>{service.icon}</CardIcon>
                <CardTitle>{service.title}</CardTitle>
                <CardBody>{service.body}</CardBody>
                <CardFoot>
                  <TextLink href="#contact">
                    Learn more
                    <ArrowUpRight />
                  </TextLink>
                </CardFoot>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
