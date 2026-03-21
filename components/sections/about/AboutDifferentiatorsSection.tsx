"use client";

import { H2, H3, Label, P } from "@/components/ui/Text";
import {
  IconBuildingCommunity,
  IconUsersGroup,
  IconWorld,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ITEMS = [
  {
    number: "01",
    title: "Mentoría Activa",
    description:
      "Acompañamiento personalizado de profesionales experimentados que guían el desarrollo de nuevos talentos médicos.",
    Icon: IconUsersGroup,
  },
  {
    number: "02",
    title: "Alianzas Globales",
    description:
      "Red internacional de instituciones académicas y científicas que amplifican nuestro impacto y alcance.",
    Icon: IconWorld,
  },
  {
    number: "03",
    title: "Gestión Sin Fines de Lucro",
    description:
      "Cada peso invertido se destina íntegramente a mejorar la formación médica y la atención a pacientes.",
    Icon: IconBuildingCommunity,
  },
];

export default function AboutDifferentiatorsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const heading = section.querySelector<HTMLElement>("[data-heading]");
    const strips = section.querySelectorAll<HTMLElement>("[data-strip]");
    const lines = section.querySelectorAll<HTMLElement>("[data-line]");

    if (heading) {
      gsap.set(heading, { opacity: 0, y: 32 });
      ScrollTrigger.create({
        trigger: heading,
        start: "top 88%",
        once: true,
        onEnter: () =>
          gsap.to(heading, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }),
      });
    }

    lines.forEach((line) => {
      gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
      ScrollTrigger.create({
        trigger: line,
        start: "top 92%",
        once: true,
        onEnter: () =>
          gsap.to(line, { scaleX: 1, duration: 0.9, ease: "power2.out" }),
      });
    });

    strips.forEach((strip, i) => {
      const num = strip.querySelector<HTMLElement>("[data-num]");
      const content = strip.querySelector<HTMLElement>("[data-content]");

      if (num) {
        gsap.set(num, { opacity: 0, x: -40 });
        ScrollTrigger.create({
          trigger: strip,
          start: "top 88%",
          once: true,
          onEnter: () =>
            gsap.to(num, {
              opacity: 1, x: 0, duration: 1.0, ease: "power3.out", delay: i * 0.05,
            }),
        });
      }
      if (content) {
        gsap.set(content, { opacity: 0, x: 40 });
        ScrollTrigger.create({
          trigger: strip,
          start: "top 88%",
          once: true,
          onEnter: () =>
            gsap.to(content, {
              opacity: 1, x: 0, duration: 1.0, ease: "power3.out", delay: i * 0.05 + 0.1,
            }),
        });
      }
    });

    const allTriggers = ScrollTrigger.getAll().filter(
      (st) => section.contains(st.trigger as Node)
    );
    return () => allTriggers.forEach((st) => st.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFF]"
      aria-labelledby="differentiators-heading"
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-6">

        {/* Header */}
        <div data-heading className="flex flex-col items-center text-center gap-3 mb-16 lg:mb-24">
          <Label variant="secondary">Nuestros diferenciales</Label>
          <H2
            id="differentiators-heading"
            variant="section"
            className="font-sans text-[#1F2933]"
          >
            Lo que nos hace únicos
          </H2>
        </div>

        {/* Strips */}
        <div className="flex flex-col">
          {ITEMS.map((item, i) => (
            <div key={item.number}>
              {/* Línea superior */}
              <div
                data-line
                className="h-px bg-[#DDE8F8] w-full"
              />

              <div
                data-strip
                className="group grid grid-cols-[auto_1fr] sm:grid-cols-[120px_1fr] lg:grid-cols-[160px_1fr] items-center gap-8 lg:gap-16 py-10 lg:py-14"
              >
                {/* Número grande en primary */}
                <div data-num className="flex-shrink-0">
                  <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-primary leading-none tabular-nums">
                    {item.number}
                  </span>
                </div>

                {/* Contenido */}
                <div data-content className="flex items-start gap-5 lg:gap-8">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110">
                    <item.Icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" stroke={1.5} aria-hidden />
                  </div>
                  <div className="flex flex-col gap-2">
                    <H3 className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold text-[#1F2933]">
                      {item.title}
                    </H3>
                    <P variant="body" className="max-w-lg text-[#555]">
                      {item.description}
                    </P>
                  </div>
                </div>
              </div>

              {/* Línea inferior solo en el último */}
              {i === ITEMS.length - 1 && (
                <div data-line className="h-px bg-[#DDE8F8] w-full" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
