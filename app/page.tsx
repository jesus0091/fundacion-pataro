import Benefits from "@/components/sections/home/Benefits";
import DifferentialApproachSection from "@/components/sections/home/DifferentialApproachSection";
import Hero from "@/components/sections/home/Hero";
import HomepageCtaSection from "@/components/sections/home/HomepageCtaSection";
import PurposeSection from "@/components/sections/home/PurposeSection";
import WhatWeDoSection from "@/components/sections/home/WhatWeDoSection";
import WhoWeAccompanySection from "@/components/sections/home/WhoWeAccompanySection";

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
