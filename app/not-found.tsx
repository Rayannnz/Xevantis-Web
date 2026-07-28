import type { Metadata } from "next";
import { Container } from "@/components/ui/primitives";
import { Button, ButtonLabel } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found — Valentisys",
};

export default function NotFound() {
  return (
    <>
      <Header />

      <main
        id="main"
        tabIndex={-1}
        className="grid min-h-[70vh] place-items-center py-[var(--section-y)] pt-[calc(var(--header-height)+var(--section-y))]"
      >
        <Container width="narrow" className="text-center">
          <p className="font-display text-6xl font-extrabold tracking-tighter text-sun-400">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-snug tracking-tighter">
            That page isn&rsquo;t staffed yet.
          </h1>
          <p className="mx-auto mt-4 max-w-[46ch] text-lg text-ink-500">
            The link may be out of date, or the page may have moved. Head back to the
            home page — or tell us what you were looking for.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg">
              <ButtonLabel>Back to home</ButtonLabel>
              <ArrowRight />
            </Button>
            <Button href="/#contact" variant="secondary" size="lg">
              <ButtonLabel>Talk to us</ButtonLabel>
            </Button>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
