"use client";

import { FirmaLogo } from "@/components/ui/FirmaLogo";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const SPLASH_KEY = "fpp_splash_shown";

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

    if (alreadyShown || _splashRan) {
      gsap.set(overlay, { yPercent: -100 });
      requestAnimationFrame(() => {
        window.dispatchEvent(new CustomEvent("splash:done", { detail: { skipped: true } }));
      });
      return;
    }

    _splashRan = true;
    sessionStorage.setItem(SPLASH_KEY, "1");

    gsap.set([logo, line], { opacity: 0 });
    gsap.set(logo, { y: 20, scale: 0.95 });
    gsap.set(line, { scaleX: 0, transformOrigin: "left center" });

    const forceHide = () => {
      gsap.set(overlay, { yPercent: -100, display: "none" });
      window.dispatchEvent(new CustomEvent("splash:done", { detail: { skipped: true } }));
    };
    const fallbackTimeout = setTimeout(forceHide, 4000);

    const tl = gsap.timeline({
      onComplete: () => clearTimeout(fallbackTimeout),
    });

    tl
      .to(logo, { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" }, 0.1)
      .to(line, { opacity: 1, scaleX: 1, duration: 0.4, ease: "power2.out" }, 0.35)
      .to({}, { duration: 0.5 })
      .to([logo, line], { opacity: 0, y: -10, duration: 0.3, ease: "power2.in" })
      .call(() => {
        window.dispatchEvent(new CustomEvent("splash:done", { detail: { skipped: false } }));
      })
      .to(overlay, { yPercent: -100, duration: 0.7, ease: "power3.inOut" }, "+=0.05")
      .set(overlay, { display: "none" });

    return () => {
      clearTimeout(fallbackTimeout);
      tl.kill();
      gsap.set(overlay, { yPercent: -100 });
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
