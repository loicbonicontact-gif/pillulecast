import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

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
  // Données structurées (SEO) — studio local à Lyon.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.shortPitch,
    url: site.url,
    areaServed: { "@type": "City", name: site.city },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: "FR",
    },
    knowsAbout: ["podcast", "enregistrement audio", "captation vidéo"],
  };

  return (
    <html lang="fr" className={inter.variable}>
      <body className="flex min-h-dvh flex-col bg-bg text-ink">
        {/* Lien d'évitement (accessibilité clavier) */}
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:border focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-300"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
