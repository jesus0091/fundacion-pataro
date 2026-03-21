"use client";

import { H2, Label, P } from "@/components/ui/Text";
import {
  IconAward,
  IconBulb,
  IconHeartHandshake,
  IconShieldCheck,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PRINCIPLES = [
  {
    number: "01",
    title: "Excelencia Académica",
    description:
      "Promovemos la formación continua de profesionales de la salud a través de programas de capacitación de clase mundial y alianzas con instituciones líderes.",
    Icon: IconAward,
  },
  {
    number: "02",
    title: "Integridad y Salud Integral",
    description:
      "Actuamos con transparencia y ética en cada decisión, priorizando el bienestar integral de pacientes y profesionales por encima de cualquier interés.",
    Icon: IconShieldCheck,
  },
  {
    number: "03",
    title: "Innovación Colaborativa",
    description:
      "Impulsamos la adopción de tecnología médica de vanguardia y fomentamos la colaboración entre instituciones, profesionales y comunidades.",
    Icon: IconBulb,
  },
  {
    number: "04",
    title: "Vocación de Servicio",
    description:
      "Nuestro compromiso es con la salud pública y la atención de calidad accesible, operando siempre sin fines de lucro y con profundo sentido social.",
    Icon: IconHeartHandshake,
  },
];

export default function AboutPrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const heading = section.querySelector<HTMLElement>("[data-heading]");
    const cards = section.querySelectorAll<HTMLElement>("[data-card]");

    if (heading) {
      gsap.set(heading, { opacity: 0, y: 40 });
      ScrollTrigger.create({
        trigger: heading,
        start: "top 88%",
        once: true,
        onEnter: () =>
          gsap.to(heading, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }),
      });
    }

    cards.forEach((card, i) => {
      // Par: entra desde la izquierda. Impar: desde la derecha
      const xFrom = i % 2 === 0 ? -50 : 50;
      gsap.set(card, { opacity: 0, y: 40, scale: 0.96 });
      ScrollTrigger.create({
        trigger: card,
        start: "top 88%",
        once: true,
        onEnter: () =>
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            delay: (i % 2) * 0.12,
          }),
      });
      // El número watermark tiene su propia animación
      const numEl = card.querySelector<HTMLElement>("[data-number]");
      if (numEl) {
        gsap.set(numEl, { opacity: 0, x: xFrom * 0.5 });
        ScrollTrigger.create({
          trigger: card,
          start: "top 88%",
          once: true,
          onEnter: () =>
            gsap.to(numEl, {
              opacity: 1,
              x: 0,
              duration: 1.2,
              ease: "power2.out",
              delay: (i % 2) * 0.12 + 0.1,
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
      className="py-16 sm:py-20 lg:py-28 bg-white"
      aria-labelledby="principles-heading"
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-6">

        <div data-heading className="flex flex-col items-center text-center gap-3 mb-14 lg:mb-20">
          <Label variant="secondary">Nuestros principios</Label>
          <H2
            id="principles-heading"
            variant="section"
            className="font-sans text-[#1F2933]"
          >
            Valores que nos guían
          </H2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {PRINCIPLES.map((item) => (
            <article
              key={item.number}
              data-card
              className="relative overflow-hidden rounded-2xl bg-[#F8FAFF] p-8 lg:p-10 flex flex-col gap-5"
            >
              {/* Número watermark */}
              <span
                data-number
                className="absolute -top-3 -right-2 font-serif text-[96px] lg:text-[120px] font-bold text-[#E4ECFB] leading-none select-none pointer-events-none"
                aria-hidden
              >
                {item.number}
              </span>

              {/* Ícono */}
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 relative z-10">
                <item.Icon className="w-6 h-6 text-primary" stroke={1.5} aria-hidden />
              </div>

              {/* Texto */}
              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="font-sans text-lg sm:text-xl font-bold text-[#1F2933]">
                  {item.title}
                </h3>
                <P variant="body">{item.description}</P>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
