import Benefits from "@/components/sections/home/Benefits";
import BrandingCarousel from "@/components/ui/BrandingCarousel";
import DifferentialApproachSection from "@/components/sections/home/DifferentialApproachSection";
import Hero from "@/components/sections/home/Hero";
import HomepageCtaSection from "@/components/sections/home/HomepageCtaSection";
import ImpactSection from "@/components/sections/home/ImpactSection";
import type { Metadata } from "next";
import PurposeSection from "@/components/sections/home/PurposeSection";
import SplashScreen from "@/components/ui/SplashScreen";
import WhatWeDoSection from "@/components/sections/home/WhatWeDoSection";
import WhoWeAccompanySection from "@/components/sections/home/WhoWeAccompanySection";

export const metadata: Metadata = {
  title: "Inicio | Fundación Patricio Pataro – Salud, Formación e Innovación Médica",
  description:
    "Fundación Patricio Pataro impulsa la excelencia médica en Argentina mediante becas, capacitación continua, investigación científica y gestión asistencial.",
  openGraph: {
    title: "Fundación Patricio Pataro – Salud e Innovación Médica",
    description:
      "Becas, capacitación, investigación médica y gestión asistencial sin fines de lucro. Fortalecemos el sistema de salud en Argentina.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fundación Patricio Pataro – Salud e Innovación Médica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundación Patricio Pataro – Salud, Formación e Innovación Médica",
    description:
      "Becas, capacitación, investigación médica y gestión asistencial sin fines de lucro en Argentina.",
    images: ["/images/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Hero />
      <Benefits />
      <WhatWeDoSection />
      <ImpactSection />
      <BrandingCarousel />
      <PurposeSection />
      <DifferentialApproachSection />
      <WhoWeAccompanySection />
      <HomepageCtaSection />
    </>
  );
}
