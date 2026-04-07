"use client";

import { Button } from "@/components/ui/Button";
import { H1, Label, P } from "@/components/ui/Text";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";

const HIGHLIGHTS = ["Formación", "Innovación", "Compromiso"];

export default function Hero() {
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = [
      labelRef.current,
      headingRef.current,
      paraRef.current,
      highlightsRef.current,
      ctaRef.current,
    ].filter(Boolean);
    const img = imageRef.current;

    gsap.set(els, { opacity: 0, y: 28 });
    if (img) gsap.set(img, { opacity: 0, x: 40, scale: 0.97 });
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = [
      labelRef.current,
      headingRef.current,
      paraRef.current,
      highlightsRef.current,
      ctaRef.current,
    ].filter(Boolean);
    const img = imageRef.current;

    const runAnimation = () => {
      const tl = gsap.timeline();
      tl.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.11,
      });
      if (img) {
        tl.to(
          img,
          { opacity: 1, x: 0, scale: 1, duration: 1.0, ease: "power3.out" },
          "<0.2"
        );
      }
    };

    window.addEventListener("splash:done", runAnimation, { once: true });
    return () => window.removeEventListener("splash:done", runAnimation);
  }, []);

  return (
    <section
      role="banner"
      className="relative overflow-hidden min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] pb-40 pt-20 sm:pb-52 sm:pt-24 lg:pb-60 lg:pt-32 flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-hero.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          aria-hidden
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-6 py-6 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="max-w-xl flex flex-col gap-4 sm:gap-6 text-white">
            <header className="flex flex-col gap-3">
              <div ref={labelRef}>
                <Label variant="primary">Fundación Patricio Pataro</Label>
              </div>
              <div ref={headingRef}>
                <H1 id="hero-heading">
                  Innovación y cuidado para una vida más saludable
                </H1>
              </div>
              <div ref={paraRef}>
                <P variant="body">
                  Impulsamos la excelencia médica mediante educación,
                  investigación e innovación. Fortalecemos el sistema de salud
                  mejorando la atención.
                </P>
              </div>
            </header>
            <div
              ref={highlightsRef}
              className="flex flex-wrap font-semibold items-center gap-1 md:gap-4 text-xs sm:text-base md:text-lg text-primary"
            >
              {HIGHLIGHTS.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-primary">·</span>}
                  {item}
                </span>
              ))}
            </div>
            <div ref={ctaRef} className="flex flex-wrap items-center gap-2 sm:gap-4">
              <Button href="/services" variant="primary">
                Ver nuestros programas
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div ref={imageRef} className="flex flex-1 w-full order-last lg:order-none">
            <Image
              src="/images/img-hero.webp"
              alt="Profesional médico representando la misión de Fundación Patricio Pataro"
              fill
              className="object-contain drop-shadow-md !static w-full"
              sizes="(max-width: 1024px) 100vw, 512px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
