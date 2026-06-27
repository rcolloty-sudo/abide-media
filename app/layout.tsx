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
  keywords: [
    "Abide Media Group",
    "Australian software studio",
    "web design Australia",
    "app development Australia",
    "website design",
    "mobile app development",
    "Shiftbreeze",
    "software development Australia",
  ],
  applicationName: "Abide Media Group",
  authors: [{ name: "Abide Media Group", url: BASE_URL }],
  creator: "Abide Media Group",
  publisher: "Abide Media Group",
  openGraph: {
    type: "website",
    siteName: "Abide Media Group",
    locale: "en_AU",
    url: BASE_URL,
    title: "Abide Media Group — Australian software studio",
    description: "An Australian software studio building tools that help businesses run better.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Abide Media Group — Australian software studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abide Media Group — Australian software studio",
    description: "An Australian software studio building tools that help businesses run better.",
    images: ["/og.png"],
  },
  alternates: { canonical: BASE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Abide Media Group",
      legalName: "Abide Media Group Pty Ltd",
      url: BASE_URL,
      logo: `${BASE_URL}/icon.svg`,
      image: `${BASE_URL}/og.png`,
      email: "hello@abidemediagroup.com.au",
      description:
        "Australian software studio building websites, mobile apps and its own products, including Shiftbreeze.",
      areaServed: "AU",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Abide Media Group",
      description:
        "Australian software studio. We build our own tools — like Shiftbreeze — and design websites and apps for businesses.",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-AU",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${bricolage.variable} ${hanken.variable} ${jetbrains.variable}`}>
      <body className={hanken.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
