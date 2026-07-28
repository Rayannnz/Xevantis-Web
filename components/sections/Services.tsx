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

/** Each card opens the full service page; `href` is the route, not an anchor. */
const SERVICES: (Service & { href: string })[] = [
  {
    title: "Customer Support",
    body: "Voice, chat, email, social and app-store replies — staffed by people who know your product, not a script.",
    accent: "sky",
    icon: <Headset />,
    href: "/services/customer-service",
  },
  {
    title: "Admin Support",
    body: "Order management, data operations and scheduling — the invisible work that decides how much your team gets done.",
    accent: "blush",
    icon: <Ledger />,
    href: "/services/admin-support",
  },
  {
    title: "Finance & Accounting",
    body: "Payables, receivables and month-end close run by qualified accountants working directly in your ledger.",
    accent: "mint",
    icon: <ShieldCheck />,
    href: "/services/finance-and-accounting",
  },
  {
    title: "IT Outsourcing",
    body: "Service desk, monitoring and application support from named engineers — priced per team, never per ticket.",
    accent: "lilac",
    icon: <Brackets />,
    href: "/services/it-outsourcing",
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
                  <TextLink href={service.href}>
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
