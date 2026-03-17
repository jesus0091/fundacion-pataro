import "./globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageTransitionOverlay from "@/components/ui/PageTransitionOverlay";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fpp.org.ar";
const OG_IMAGE = "/images/bg-hero.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fundación Patricio Pataro – Salud, Formación e Innovación Médica en Argentina",
    template: "%s | Fundación Patricio Pataro",
  },
  description:
    "Fundación Patricio Pataro impulsa la excelencia médica en Argentina mediante becas, capacitación continua, investigación científica y gestión de centros asistenciales sin fines de lucro.",
  keywords: [
    "fundación salud argentina",
    "capacitación médica",
    "becas médicas Argentina",
    "investigación médica",
    "gestión asistencial",
    "RCP DEA empresas",
    "formación profesionales de la salud",
    "centros médicos sin fines de lucro",
    "Fundación Patricio Pataro",
  ],
  authors: [{ name: "Fundación Patricio Pataro", url: SITE_URL }],
  openGraph: {
    siteName: "Fundación Patricio Pataro",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Fundación Patricio Pataro – Innovación y cuidado para una vida más saludable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Fundación Patricio Pataro",
  alternateName: "FPP",
  url: SITE_URL,
  logo: `${SITE_URL}/images/firma.svg`,
  description:
    "Fundación sin fines de lucro que promueve la formación continua, la investigación y la asistencia médica integral en Argentina.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Billinghurst 19",
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressCountry: "AR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@fpp.org.ar",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: [
    "https://www.instagram.com",
    "https://www.linkedin.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scrollbar-hide">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Fuentes en root layout (App Router), aplican a toda la app */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="overflow-x-hidden scrollbar-hide w-full font-sans">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] rounded bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg -translate-y-20 focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform"
        >
          Saltar al contenido principal
        </a>
        <SmoothScrollProvider>
          <Header />
          <main id="main-content" className="min-h-screen" role="main">{children}</main>
          <Footer />
          <PageTransitionOverlay />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
