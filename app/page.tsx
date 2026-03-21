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
    "Fundación Patricio Pataro impulsa la excelencia médica en Argentina con becas para médicos, capacitación continua, investigación científica y gestión de centros asistenciales sin fines de lucro.",
  openGraph: {
    title: "Fundación Patricio Pataro – Innovación y cuidado para una vida más saludable",
    description:
      "Becas, capacitación, investigación médica y gestión asistencial sin fines de lucro. Fortalecemos el sistema de salud en Argentina.",
    type: "website",
    url: "/",
  },
  twitter: {
    title: "Fundación Patricio Pataro – Salud, Formación e Innovación Médica",
    description:
      "Becas, capacitación, investigación médica y gestión asistencial sin fines de lucro en Argentina.",
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
