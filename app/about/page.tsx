import AboutDifferentiatorsSection from "@/components/sections/about/AboutDifferentiatorsSection";
import AboutIntroSection from "@/components/sections/about/AboutIntroSection";
import AboutMissionVisionSection from "@/components/sections/about/AboutMissionVisionSection";
import AboutOriginWhySection from "@/components/sections/about/AboutOriginWhySection";
import AboutPrinciplesSection from "@/components/sections/about/AboutPrinciplesSection";
import AlianzasSection from "@/components/sections/about/AlianzasSection";
import BrandingCarousel from "@/components/ui/BrandingCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Conocé la historia, misión y visión de Fundación Patricio Pataro. Una organización sin fines de lucro dedicada a la formación médica, la investigación científica y la gestión asistencial de excelencia en Argentina.",
  openGraph: {
    title: "Quiénes Somos | Fundación Patricio Pataro",
    description:
      "Historia, misión y visión de Fundación Patricio Pataro: formación médica, investigación y gestión asistencial sin fines de lucro en Argentina.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
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
