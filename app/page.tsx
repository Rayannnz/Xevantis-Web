import { Header, Drawer } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ValueProp } from "@/components/sections/ValueProp";
import { LogoStrip, Services, Integrations } from "@/components/sections/Services";
import { Process, ScaleBand, Stats } from "@/components/sections/Process";
import { Testimonials, Insights, CTA } from "@/components/sections/Testimonials";
import { Wave } from "@/components/ui/Primitives";
import "./landing.css";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Drawer />

      <main id="main">
        <span id="top" />

        <Hero />
        <LogoStrip />
        <ValueProp />
        <Wave />
        <Services />

        {/* Signature aurora ribbon divider */}
        <div className="ribbon noise" aria-hidden="true" />

        <Integrations />
        <Process />
        <ScaleBand />
        <Stats />
        <Testimonials />
        <Insights />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
