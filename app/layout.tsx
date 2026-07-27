import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Caveat, JetBrains_Mono } from "next/font/google";
import { ClientRuntime } from "@/components/ClientRuntime";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valentisys.example"),
  title: {
    default: "Valentisys — Outsourcing & software teams, built to make you better",
    template: "%s — Valentisys",
  },
  description:
    "Valentisys blends world-class BPO talent with product engineers. Dedicated CX, back-office and software squads live in 2 weeks — not 2 quarters.",
  // Icons come from app/icon.png + app/apple-icon.png via file convention.
  openGraph: {
    type: "website",
    siteName: "Valentisys",
    title: "Valentisys — Outsourcing & software teams, built to make you better",
    description:
      "Dedicated CX, back-office and software squads live in 2 weeks — not 2 quarters.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf8f2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${caveat.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Must run before first paint. Scroll-reveal only hides content when JS
          is present to reveal it again — `html:not(.js)` in animations.css
          keeps everything visible otherwise. Setting the class in the server
          render instead would break that fallback, since the markup would
          claim JS even when it is disabled.
        */}
        <script
          dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="scroll-progress" aria-hidden="true" />
        {children}
        <ClientRuntime />
      </body>
    </html>
  );
}
