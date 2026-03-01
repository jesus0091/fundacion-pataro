"use client";

import { H2, H3, Label, P } from "@/components/ui/Text";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";

export interface AccompanyItem {
  title: string;
  description: string;
}

const DEFAULT_ITEMS: AccompanyItem[] = [
  {
    title: "Profesionales de la salud",
    description:
      "Acompañamos su desarrollo a través de formación continua, becas, investigación y acceso a nuevas oportunidades académicas y profesionales.",
  },
  {
    title: "Instituciones y aliados estratégicos",
    description:
      "Construimos alianzas para fortalecer infraestructura, desarrollar proyectos conjuntos y potenciar el impacto del sistema de salud.",
  },
  {
    title: "Comunidad y pacientes",
    description:
      "Promovemos el acceso a una atención médica de calidad, la prevención y el cuidado integral de la salud.",
  },
];

const AUTOPLAY_TIME_MS = 6000;
const PROGRESS_STEP_MS = 30;

interface WhoWeAccompanySectionProps {
  subtitle?: string;
  title?: string;
  intro?: string;
  items?: AccompanyItem[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function WhoWeAccompanySection({
  subtitle = "A quiénes acompañamos",
  title = "Trabajamos junto a quienes hacen posible una mejor salud.",
  intro = "En la Fundación Patricio Pataro entendemos que mejorar la salud requiere más que acciones aisladas. Por eso combinamos:",
  items = DEFAULT_ITEMS,
  imageSrc = "/images/img-company.webp",
  imageAlt = "A quiénes acompañamos - Fundación Pataro",
}: WhoWeAccompanySectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);

    const stepAmount = 100 / (AUTOPLAY_TIME_MS / PROGRESS_STEP_MS);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const nextValue = prev + stepAmount;
        if (nextValue >= 100) {
          const nextIndex = (activeStep + 1) % items.length;
          setActiveStep(nextIndex);
          return 0;
        }
        return nextValue;
      });
    }, PROGRESS_STEP_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeStep, items.length]);

  const handleTabClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  return (
    <section
      className="bg-white py-12 sm:py-16 lg:py-24"
      aria-labelledby="who-we-accompany-heading"
    >
      <div className="max-w-7xl mx-auto px-10 sm:px-6">
        <header className="mb-8 sm:mb-10 max-w-xl flex flex-col gap-3">
          <Label variant="primaryTight">{subtitle}</Label>
          <H2 id="who-we-accompany-heading" variant="compact">
            {title}
          </H2>
          <P variant="body">{intro}</P>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
          <div
            role="tablist"
            aria-label="A quiénes acompañamos"
            className="flex flex-col"
          >
            {items.map((item, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                id={`who-tab-${index}`}
                aria-selected={activeStep === index}
                aria-controls="who-we-accompany-panel"
                onClick={() => handleTabClick(index)}
                className={`group relative flex cursor-pointer flex-col gap-1.5 border-l-4 py-4 pl-6 text-left transition-all md:gap-3 ${
                  activeStep === index
                    ? "border-primary"
                    : "border-neutral-light hover:border-neutral-dark/30"
                }`}
              >
                <h3
                  className={`text-lg font-bold tracking-tight transition-colors md:text-xl font-serif ${
                    activeStep === index
                      ? "text-secondary"
                      : "text-neutral-text/70 group-hover:text-neutral-text"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm tracking-tight transition-colors md:text-lg leading-relaxed ${
                    activeStep === index
                      ? "text-neutral-text"
                      : "text-neutral-text-light group-hover:text-neutral-text/90"
                  }`}
                >
                  {item.description}
                </p>
                {activeStep === index && (
                  <div className="absolute top-0 -left-1 h-full w-1 overflow-hidden">
                    <div className="absolute inset-0 w-full bg-primary/20" />
                    <div
                      className="absolute bottom-0 left-0 w-full bg-primary transition-all duration-100 ease-linear"
                      style={{ height: `${progress}%` }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div
            id="who-we-accompany-panel"
            role="tabpanel"
            aria-labelledby={`who-tab-${activeStep}`}
            aria-live="polite"
            className="relative rounded-2xl overflow-hidden shadow-lg min-h-[280px] sm:min-h-[320px] lg:min-h-[420px] bg-neutral-background"
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-neutral-background to-primary/10 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-primary/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black opacity-10" />

          </div>
        </div>
      </div>
    </section>
  );
}
