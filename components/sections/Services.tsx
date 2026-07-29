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
    title: "Front Desk & Customer Calls",
    body: "New-patient calls, appointment scheduling, reminders and client intake — answered live by someone who knows your practice.",
    accent: "sky",
    icon: <Headset />,
    href: "/services/customer-service",
  },
  {
    title: "Admin & Paperwork",
    body: "Insurance verification, prior authorizations, records requests and data entry — the work that quietly eats your staff's day.",
    accent: "blush",
    icon: <Ledger />,
    href: "/services/admin-support",
  },
  {
    title: "Bookkeeping & Billing",
    body: "Claims, collections, payables and month-end close, run by qualified accountants working directly in QuickBooks or Xero.",
    accent: "mint",
    icon: <ShieldCheck />,
    href: "/services/finance-and-accounting",
  },
  {
    title: "IT & Software",
    body: "Help desk, backups and HIPAA-aware security for your office — plus the website or custom tool you have been putting off.",
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
          <SplitWords text="More growth, less overhead." stagger={45} className={headingClass} />
          <Reveal as="p" delay={200} className={leadClass}>
            Four kinds of help, one contract, one person you call. Take one or take all
            four — the price is per seat either way, and nothing about how we work
            changes.
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
