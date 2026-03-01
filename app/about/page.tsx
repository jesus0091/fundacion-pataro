import AboutCtaSection from "@/components/sections/about/AboutCtaSection";
import AboutDifferentiatorsSection from "@/components/sections/about/AboutDifferentiatorsSection";
import AboutIntroSection from "@/components/sections/about/AboutIntroSection";
import AboutMissionVisionSection from "@/components/sections/about/AboutMissionVisionSection";
import AboutOriginWhySection from "@/components/sections/about/AboutOriginWhySection";
import AboutPrinciplesSection from "@/components/sections/about/AboutPrinciplesSection";

export const metadata = {
  title: "Quiénes Somos | Fundación Patricio Pataro",
  description:
    "Transformamos conocimiento en acción a través de cinco pilares fundamentales que fortalecen el sistema de salud. Conocé nuestro origen, misión y principios.",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntroSection />
      <AboutOriginWhySection />
      <AboutMissionVisionSection />
      <AboutDifferentiatorsSection />
      <AboutPrinciplesSection />
    </>
  );
}
