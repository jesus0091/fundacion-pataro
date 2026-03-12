"use client";

import { H2, Label, P } from "@/components/ui/Text";
import {
  IconBuildingHospital,
  IconBuildingSkyscraper,
  IconMicroscope,
  IconSchool,
  IconStethoscope,
  IconWorld,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ALIANZAS = [
  {
    Icon: IconSchool,
    tipo: "Instituciones académicas",
    descripcion:
      "Universidades y facultades de medicina con las que desarrollamos programas de formación y becas.",
  },
  {
    Icon: IconBuildingHospital,
    tipo: "Hospitales y centros de salud",
    descripcion:
      "Instituciones del sector público y privado donde implementamos gestión asistencial y modernización.",
  },
  {
    Icon: IconMicroscope,
    tipo: "Centros de investigación",
    descripcion:
      "Laboratorios e institutos con los que co-desarrollamos proyectos de investigación aplicada.",
  },
  {
    Icon: IconStethoscope,
    tipo: "Colegios y asociaciones médicas",
    descripcion:
      "Organismos de representación profesional con los que articulamos capacitaciones y eventos académicos.",
  },
  {
    Icon: IconBuildingSkyscraper,
    tipo: "Empresas y sector privado",
    descripcion:
      "Organizaciones que colaboran con recursos e infraestructura para amplificar nuestro alcance.",
  },
  {
    Icon: IconWorld,
    tipo: "Organismos internacionales",
    descripcion:
      "Entidades globales en salud y educación médica con las que intercambiamos conocimiento.",
  },
];

export default function AlianzasSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const header = section.querySelector<HTMLElement>("[data-header]");
    const items = section.querySelectorAll<HTMLElement>("[data-item]");

    if (header) {
      gsap.set(header, { opacity: 0, x: -60 });
      ScrollTrigger.create({
        trigger: header,
        start: "top 88%",
        once: true,
        onEnter: () =>
          gsap.to(header, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }),
      });
    }

    items.forEach((item, i) => {
      gsap.set(item, { opacity: 0, x: 60, scale: 0.96 });
      ScrollTrigger.create({
        trigger: item,
        start: "top 90%",
        once: true,
        onEnter: () =>
          gsap.to(item, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: (i % 3) * 0.1,
          }),
      });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#EAF2FF] via-[#F0F6FE] to-white"
      aria-labelledby="alianzas-heading"
    >
      <div className="max-w-7xl mx-auto px-10 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">

          {/* Columna izquierda: header sticky */}
          <div data-header className="lg:sticky lg:top-28 flex flex-col gap-5">
            <Label variant="primaryTight">Trabajo colaborativo</Label>
            <H2
              id="alianzas-heading"
              variant="section"
              className="font-sans text-[#1F2933]"
            >
              Trabajamos en red
            </H2>
            <P variant="body" className="text-[#555]">
              La salud no se transforma en soledad. Construimos alianzas estratégicas con instituciones académicas, hospitales, centros de investigación y organizaciones del sector privado para multiplicar el impacto de cada acción.
            </P>
          </div>

          {/* Columna derecha: lista compact */}
          <div className="flex flex-col gap-4">
            {ALIANZAS.map((alianza, i) => (
              <article
                key={i}
                data-item
                className="group flex items-start gap-4 bg-white rounded-2xl p-6 border border-[#E8EEFE] hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-icon flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <alianza.Icon className="w-5 h-5 text-primary" stroke={1.5} aria-hidden />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans text-sm sm:text-base font-bold text-[#1F2933]">
                    {alianza.tipo}
                  </h3>
                  <P variant="small" className="text-[#666]">
                    {alianza.descripcion}
                  </P>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
