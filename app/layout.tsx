import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600"],
  display: "swap",
});

const BASE_URL = "https://abidemediagroup.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Abide Media Group — Australian software studio",
    template: "%s · Abide Media Group",
  },
  description:
    "Abide Media Group is an Australian software studio. We build our own tools — like Shiftbreeze — and design websites and apps for businesses who'd rather have us build theirs.",
  openGraph: {
    type: "website",
    siteName: "Abide Media Group",
    locale: "en_AU",
    url: BASE_URL,
    title: "Abide Media Group — Australian software studio",
    description: "An Australian software studio building tools that help businesses run better.",
  },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${bricolage.variable} ${hanken.variable} ${jetbrains.variable}`}>
      <body className={hanken.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
