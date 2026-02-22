import Benefits from "@/components/sections/home/Benefits";
import DifferentialApproachSection from "@/components/sections/home/DifferentialApproachSection";
import Hero from "@/components/sections/home/Hero";
import HomepageCtaSection from "@/components/sections/home/HomepageCtaSection";
import PurposeSection from "@/components/sections/home/PurposeSection";
import WhatWeDoSection from "@/components/sections/home/WhatWeDoSection";
import WhoWeAccompanySection from "@/components/sections/home/WhoWeAccompanySection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio | Fundación Pataro – Innovación y cuidado para una vida más saludable",
  description:
    "Impulsamos la excelencia médica mediante educación, investigación e innovación. Formación, becas, investigación y centros médicos para fortalecer el sistema de salud.",
  openGraph: {
    title: "Fundación Pataro – Innovación y cuidado para una vida más saludable",
    description:
      "Impulsamos la excelencia médica mediante educación, investigación e innovación. Fortalecemos el sistema de salud.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <PurposeSection />
      <WhatWeDoSection />
      <DifferentialApproachSection />
      <WhoWeAccompanySection />
      <HomepageCtaSection />
    </>
  );
}
