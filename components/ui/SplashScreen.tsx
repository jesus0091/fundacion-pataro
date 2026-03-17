"use client";

import { FirmaLogo } from "@/components/ui/FirmaLogo";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const SPLASH_KEY = "fpp_splash_shown";

// Flag de módulo: sobrevive re-montajes de StrictMode pero no recargas de página
let _splashRan = false;

export default function SplashScreen() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const line = lineRef.current;
    if (!overlay || !logo || !line) return;

    const alreadyShown = sessionStorage.getItem(SPLASH_KEY);

    // Visita de retorno O segundo montaje de StrictMode → ocultar sin animación
    if (alreadyShown || _splashRan) {
      gsap.set(overlay, { yPercent: -100 });
      // Despachar el evento en el siguiente tick para dar tiempo al Hero
      requestAnimationFrame(() => {
        window.dispatchEvent(new CustomEvent("splash:done", { detail: { skipped: true } }));
      });
      return;
    }

    _splashRan = true;
    // sessionStorage se setea dentro del .call(), ANTES de que Hero's useEffect lo lea
    // si se setea aquí, Hero cree que es "visita de retorno" y anima sin esperar el evento

    // Estado inicial — logo e línea ocultos
    gsap.set([logo, line], { opacity: 0 });
    gsap.set(logo, { y: 20, scale: 0.95 });
    gsap.set(line, { scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline();

    tl
      // Logo aparece
      .to(logo, { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" }, 0.1)
      // Línea se expande
      .to(line, { opacity: 1, scaleX: 1, duration: 0.4, ease: "power2.out" }, 0.35)
      // Pausa visible
      .to({}, { duration: 0.5 })
      // Logo + línea desaparecen
      .to([logo, line], { opacity: 0, y: -10, duration: 0.3, ease: "power2.in" })
      // Marcar como visto y despachar evento para que el Hero empiece a animar
      .call(() => {
        sessionStorage.setItem(SPLASH_KEY, "1");
        window.dispatchEvent(new CustomEvent("splash:done", { detail: { skipped: false } }));
      })
      // Overlay sube
      .to(overlay, { yPercent: -100, duration: 0.7, ease: "power3.inOut" }, "+=0.05")
      // Ocultar del DOM para no bloquear interacciones
      .set(overlay, { display: "none" });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center will-change-transform"
      aria-hidden
    >
      <div ref={logoRef} className="flex flex-col items-center gap-3">
        <FirmaLogo color="black" width={260} height={44} className="h-10 w-auto" />
        <div
          ref={lineRef}
          className="h-[2px] w-40 bg-primary rounded-full"
        />
      </div>
    </div>
  );
}
