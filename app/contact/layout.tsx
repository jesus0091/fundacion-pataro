import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fundacionpatriciopataro.com";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con Fundación Patricio Pataro. Consultas sobre becas médicas, alianzas, eventos académicos y programas de RCP/DEA para empresas.",
  openGraph: {
    title: "Contacto | Fundación Patricio Pataro",
    description:
      "Escribinos para consultas sobre becas, alianzas, eventos o programas de capacitación. Te respondemos dentro de las 48 horas hábiles.",
    url: "/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "NGO",
    name: "Fundación Patricio Pataro",
    url: SITE_URL,
    email: "info@fpp.org.ar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Billinghurst 19",
      addressLocality: "Ciudad Autónoma de Buenos Aires",
      addressCountry: "AR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@fpp.org.ar",
      availableLanguage: "Spanish",
    },
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
