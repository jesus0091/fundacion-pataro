"use client";

import { H2, Label, P } from "@/components/ui/Text";
import {
  IconBuildingHospital,
  IconChevronLeft,
  IconChevronRight,
  IconHeart,
  IconMicroscope,
  IconSchool,
  IconSettings,
} from "@tabler/icons-react";
import WhatWeDoCard, { WhatWeDoCardProps } from "./WhatWeDoCard";
import { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

const GAP_PX = 24;

const PROGRAMS: WhatWeDoCardProps[] = [
  {
    title: "Capacitación y Becas",
    description:
      "Formamos y acompañamos a médicos residentes y profesionales de la salud, facilitando becas, programas y desarrollo continuo.",
    href: "/services",
    icon: <IconSchool className="w-6 h-6" stroke={1.5} aria-hidden />,
  },
  {
    title: "Investigación y Eventos Académicos",
    description:
      "Impulsamos el intercambio científico mediante congresos, simposios y ateneos, y apoyamos proyectos de investigación.",
    href: "/services",
    icon: <IconMicroscope className="w-6 h-6" stroke={1.5} aria-hidden />,
  },
  {
    title: "Gestión Asistencial",
    description:
      "Desarrollamos y administramos centros médicos y quirúrgicos, brindando atención directa de calidad.",
    href: "/services",
    icon: <IconBuildingHospital className="w-6 h-6" stroke={1.5} aria-hidden />,
  },
  {
    title: "Infraestructura Médica",
    description:
      "Invertimos en equipamiento médico de última generación y en la modernización de instalaciones.",
    href: "/services",
    icon: <IconSettings className="w-6 h-6" stroke={1.5} aria-hidden />,
  },
  {
    title: "Impacto Social y Prevención",
    description:
      "Desarrollamos campañas benéficas, acciones de salud preventiva y programas de concientización.",
    href: "/services",
    icon: <IconHeart className="w-6 h-6" stroke={1.5} aria-hidden />,
  },
];

export default function WhatWeDoSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    startIndex: 0,
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateCanScroll = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollLeft(emblaApi.canScrollPrev());
    setCanScrollRight(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateCanScroll();
    emblaApi.on("select", updateCanScroll);
    emblaApi.on("reInit", updateCanScroll);
    return () => {
      emblaApi.off("select", updateCanScroll);
      emblaApi.off("reInit", updateCanScroll);
    };
  }, [emblaApi, updateCanScroll]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-12 sm:py-16 lg:pb-24 lg:pt-60 bg-[#F0F6FE] overflow-visible" aria-labelledby="what-we-do-heading">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 overflow-visible">
        <header className="mb-8 sm:mb-10 max-w-xs sm:max-w-xl flex flex-col gap-3">
          <Label variant="primaryTight">Qué Hacemos</Label>
          <H2 id="what-we-do-heading" variant="section">
            Impacto real en el sistema de salud.
          </H2>
          <P variant="body">
            Abordamos los desafíos del sistema de salud desde una mirada integral, combinando formación e investigación para generar soluciones.
          </P>
        </header>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        <div
          ref={emblaRef}
          className="overflow-hidden pb-4 pl-[max(1rem,calc((100vw-80rem)/2+1rem))] pr-[max(1rem,calc((100vw-80rem)/2+1rem))]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex touch-pan-y" style={{ gap: GAP_PX }}>
            {PROGRAMS.map((program, index) => (
              <div key={index} className="flex-[0_0_auto] min-w-0">
                <WhatWeDoCard {...program} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 sm:px-6">
        <div className="flex items-center justify-center sm:justify-start gap-2 mt-6">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollLeft}
            aria-label="Ver programas anteriores"
            className="w-11 h-11 rounded-full bg-primary/20 text-secondary flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/30 transition-colors"
          >
            <IconChevronLeft className="w-5 h-5" stroke={2} aria-hidden />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollRight}
            aria-label="Ver más programas"
            className="w-11 h-11 rounded-full bg-primary/20 text-secondary flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/30 transition-colors"
          >
            <IconChevronRight className="w-5 h-5" stroke={2} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
