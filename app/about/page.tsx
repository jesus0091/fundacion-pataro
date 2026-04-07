import AboutDifferentiatorsSection from "@/components/sections/about/AboutDifferentiatorsSection";
import AboutIntroSection from "@/components/sections/about/AboutIntroSection";
import AboutMissionVisionSection from "@/components/sections/about/AboutMissionVisionSection";
import AboutOriginWhySection from "@/components/sections/about/AboutOriginWhySection";
import AboutPrinciplesSection from "@/components/sections/about/AboutPrinciplesSection";
import AlianzasSection from "@/components/sections/about/AlianzasSection";
import BrandingCarousel from "@/components/ui/BrandingCarousel";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fundacionpatriciopataro.com";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Conocé la historia, misión y visión de Fundación Patricio Pataro. Organización sin fines de lucro dedicada a formación médica, investigación y gestión asistencial en Argentina.",
  openGraph: {
    title: "Quiénes Somos | Fundación Patricio Pataro",
    description:
      "Historia, misión y visión de Fundación Patricio Pataro: formación médica, investigación y gestión asistencial sin fines de lucro en Argentina.",
    url: "/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  mainEntity: {
    "@type": "NGO",
    name: "Fundación Patricio Pataro",
    alternateName: "FPP",
    url: SITE_URL,
    description:
      "Fundación sin fines de lucro que promueve la formación continua, la investigación y la asistencia médica integral en Argentina.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Billinghurst 19",
      addressLocality: "Ciudad Autónoma de Buenos Aires",
      addressCountry: "AR",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutIntroSection />
      <AboutOriginWhySection />
      <BrandingCarousel />
      <AboutMissionVisionSection />
      <AboutDifferentiatorsSection />
      <AboutPrinciplesSection />
      <AlianzasSection />
    </>
  );
}
