"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { H2, Label, P } from "@/components/ui/Text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  {
    prefix: "+",
    value: 500,
    suffix: "",
    label: "Profesionales capacitados",
    description:
      "Médicos, enfermeros y técnicos que fortalecieron su formación a través de nuestros programas.",
  },
  {
    prefix: "+",
    value: 30,
    suffix: "",
    label: "Eventos académicos",
    description:
      "Congresos, simposios y ateneos organizados para el intercambio científico entre especialistas.",
  },
  {
    prefix: "+",
    value: 10000,
    suffix: "",
    label: "Personas alcanzadas",
    description:
      "Personas de la comunidad que participaron en jornadas de salud preventiva y talleres.",
  },
  {
    prefix: "",
    value: 5,
    suffix: "",
    label: "Centros médicos",
    description:
      "Instituciones apoyadas con equipamiento, gestión asistencial o modernización de infraestructura.",
  },
];

function formatNumber(n: number): string {
  if (n >= 1000) return n.toLocaleString("es-AR");
  return String(Math.round(n));
}

function StatCard({
  prefix,
  value,
  suffix,
  label,
  description,
}: (typeof STATS)[number]) {
  const numRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    const numEl = numRef.current;
    if (!el || !numEl) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      numEl.textContent = formatNumber(value);
      return;
    }

    numEl.textContent = formatNumber(0);

    const obj = { val: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: value,
          duration: 2.2,
          ease: "power2.out",
          onUpdate: () => {
            numEl.textContent = formatNumber(obj.val);
          },
        });
      },
    });

    return () => st.kill();
  }, [value]);

  return (
    <article
      ref={cardRef}
      className="flex flex-col items-center text-center p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-[#F0F6FE] to-[#E8F5E9]"
      data-animate
    >
      <div className="flex items-end gap-0.5 mb-2">
        {prefix && (
          <span className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-1">
            {prefix}
          </span>
        )}
        <span
          ref={numRef}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tabular-nums"
        >
          0
        </span>
        {suffix && (
          <span className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-1">
            {suffix}
          </span>
        )}
      </div>
      <h3 className="font-sans text-base font-bold text-[#1F2933] mb-2">
        {label}
      </h3>
      <P variant="small" className="text-center">
        {description}
      </P>
    </article>
  );
}

export default function ImpactSection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-24 bg-white"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-7xl mx-auto px-10 sm:px-6">
        <AnimatedSection
          stagger
          className="flex flex-col items-center text-center mb-12 lg:mb-16 gap-3"
        >
          <span data-animate>
            <Label variant="primaryTight">Nuestro impacto</Label>
          </span>
          <H2
            id="impact-heading"
            variant="section"
            data-animate
            className="font-sans text-[#333333]"
          >
            Números que hablan por sí solos
          </H2>
          <P
            variant="body"
            className="text-center max-w-xl"
            data-animate
          >
            Cada cifra representa personas reales, comunidades fortalecidas y
            un sistema de salud mejor preparado para el futuro.
          </P>
        </AnimatedSection>

        <AnimatedSection
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
