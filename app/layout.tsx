import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site, contact } from "@/data/site";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Cursor from "@/components/motion/Cursor";
import Loader from "@/components/motion/Loader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#f4f6f8",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Conatus — Musculação e Fisioterapia para os 50+ | Vila Mariana, SP",
    template: "%s · Conatus",
  },
  description: site.description,
  keywords: [
    "fisioterapia Vila Mariana",
    "musculação 50+",
    "pilates terapêutico",
    "reabilitação idosos São Paulo",
    "treino de força terceira idade",
    "clínica fisioterapia Vila Mariana",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: "Conatus — Tendência ao movimento",
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Conatus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conatus — Tendência ao movimento",
    description: site.description,
  },
  robots: { index: true, follow: true },
  category: "health",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Physiotherapy"],
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: `+${contact.phoneRaw}`,
  image: `${site.url}/opengraph-image`,
  logo: `${site.url}/brand/logo-conatus.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.street,
    addressLocality: contact.address.city,
    addressRegion: contact.address.state,
    postalCode: contact.address.zip,
    addressCountry: contact.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: contact.address.lat,
    longitude: contact.address.lng,
  },
  areaServed: "São Paulo",
  sameAs: [contact.instagram],
  medicalSpecialty: "PhysicalTherapy",
  foundingDate: "2020",
  makesOffer: [
    "Avaliação fisioterapêutica",
    "Fisioterapia especializada",
    "Musculação 50+",
    "Pilates terapêutico",
    "Acompanhamento nutricional",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-paper"
        >
          Pular para o conteúdo
        </a>
        <Loader />
        <Cursor />
        <SmoothScroll>
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
