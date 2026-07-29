import type { Metadata, Viewport } from "next";
import {
  Caveat,
  Inter,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
  Quicksand,
} from "next/font/google";
import Link from "next/link";
import { IntroCurtain } from "@/components/motion/IntroCurtain";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

// Rounded geometric monoline — the logotype face. Only the intro wordmark uses
// it, so it is deliberately the one family loaded without a fallback stack that
// tries to imitate it: nothing else in the page would match anyway.
const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Every page's canonical, OpenGraph and Twitter URL resolves against this,
  // so a relative `alternates.canonical` becomes absolute automatically.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Valentisys — Outsourcing & software teams, built to make you better",
    // Service pages set their own full title; this only wraps the ones that don't.
    template: "%s",
  },
  description:
    "Valentisys blends world-class BPO talent with product engineers. Dedicated CX, back-office and software squads live in 2 weeks — not 2 quarters.",
  icons: {
    icon: "/img/favicon.png",
    apple: "/img/logo-mark.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf8f2",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${caveat.variable} ${quicksand.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Link
          href="#main"
          className="absolute left-4 top-[-100%] z-[500] rounded-pill bg-ink-900 px-5 py-3 font-semibold text-paper-050 transition-[top] duration-[180ms] ease-out-quad focus-visible:top-4"
        >
          Skip to content
        </Link>

        <IntroCurtain />
        <ScrollProgress />
        <MotionProvider>
          <ToastProvider>{children}</ToastProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
