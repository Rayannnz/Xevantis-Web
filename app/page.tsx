import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Positioning } from "@/components/sections/Positioning";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Coverage } from "@/components/sections/Coverage";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Integrations } from "@/components/sections/Integrations";
import { Insights } from "@/components/sections/Insights";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* tabIndex makes the skip link actually move focus, not just scroll. */}
      <main id="main" tabIndex={-1}>
        <span id="top" />

        <Hero />
        <TrustStrip />
        <Positioning />
        <Services />
        <Process />
        <Coverage />
        <Stats />
        <Testimonials />
        <Integrations />
        <Insights />
        <CtaBand />
      </main>

      <Footer />
    </>
  );
}
