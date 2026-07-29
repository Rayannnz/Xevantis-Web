import { IntroCurtain } from "@/components/motion/IntroCurtain";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Ribbon, Wave } from "@/components/ui/primitives";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ValueProp } from "@/components/sections/ValueProp";
import { SpotlightQuote } from "@/components/sections/SpotlightQuote";
import { Services } from "@/components/sections/Services";
import { Integrations } from "@/components/sections/Integrations";
import { Process } from "@/components/sections/Process";
import { ScaleBand } from "@/components/sections/ScaleBand";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insights } from "@/components/sections/Insights";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <IntroCurtain />
      <Header />

      {/* tabIndex makes the skip link actually move focus, not just scroll. */}
      <main id="main" tabIndex={-1}>
        <span id="top" />

        <Hero />
        <LogoMarquee />
        <ValueProp />
        <SpotlightQuote />
        <Wave />
        <Services />
        <Ribbon />
        <Integrations />
        <Process />
        <ScaleBand />
        <Stats />
        <Testimonials />
        <Insights />
        <CtaBand />
      </main>

      <Footer />
    </>
  );
}
