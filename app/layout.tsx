import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = "https://abidemediagroup.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Abide Media Group — Software, websites & apps for Australian businesses",
    template: "%s · Abide Media Group",
  },
  description:
    "Abide Media Group is an Australian software company. We build our own SaaS suite (starting with Shiftbreeze) and design websites and mobile apps for other businesses.",
  openGraph: {
    type: "website",
    siteName: "Abide Media Group",
    locale: "en_AU",
    url: BASE_URL,
    title: "Abide Media Group — Software, websites & apps for Australian businesses",
    description:
      "Australian software studio building tools that help businesses run better. SaaS suite + website & app design services.",
  },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
