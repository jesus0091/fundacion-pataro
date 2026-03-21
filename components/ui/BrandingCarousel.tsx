"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const BRANDS = [
  { src: "/images/image_1.png", alt: "Aliado 1" },
  { src: "/images/image_2.png", alt: "Aliado 2" },
  { src: "/images/image_3.png", alt: "Aliado 3" },
  { src: "/images/image_4.png", alt: "Aliado 4" },
  { src: "/images/image_5.jpeg", alt: "Aliado 5" },
  { src: "/images/image_6.png", alt: "Aliado 6" },
];

// x4 repeticiones → translateX(-25%) para loop seamless de duración larga
const TRACK = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

export default function BrandingCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Ajustar duración según ancho de pantalla
  useEffect(() => {
    const update = () => {
      if (!trackRef.current) return;
      const duration = window.innerWidth < 640 ? "28s" : window.innerWidth < 1024 ? "38s" : "50s";
      trackRef.current.style.animationDuration = duration;
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="py-6 sm:py-8 lg:py-10 bg-white overflow-hidden">
      <div className="relative">
        {/* Fade izquierdo */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-full z-10 w-16 sm:w-24 lg:w-32"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
        />
        {/* Fade derecho */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-full z-10 w-16 sm:w-24 lg:w-32"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        {/* Track */}
        <div
          ref={trackRef}
          className="flex items-center w-max"
          style={{
            gap: "clamp(2rem, 5vw, 5rem)",
            animation: "marquee 50s linear infinite",
            animationTimingFunction: "linear",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
          }}
        >
          {TRACK.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 transition-[filter] duration-300"
              style={{ filter: "grayscale(1) opacity(0.5)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.filter = "grayscale(0) opacity(1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.filter = "grayscale(1) opacity(0.5)";
              }}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                height={50}
                width={200}
                className="object-contain"
                style={{
                  height: "clamp(32px, 4vw, 50px)",
                  width: "auto",
                }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
