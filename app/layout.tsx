import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Grain from "@/components/Grain";
import { site } from "@/lib/site";

// Titres : grotesque expressif. Corps : Inter, très lisible.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Studio podcast & vidéo à ${site.city}`,
    template: `%s — ${site.name}`,
  },
  description: site.shortPitch,
  keywords: [
    "studio podcast Lyon",
    "enregistrement podcast",
    "studio vidéo Lyon",
    "capsule audio",
    "captation podcast",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: `${site.name} — Studio podcast & vidéo à ${site.city}`,
    description: site.shortPitch,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Studio podcast & vidéo à ${site.city}`,
    description: site.shortPitch,
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="flex min-h-dvh flex-col bg-bg text-ink">
        <Grain />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
