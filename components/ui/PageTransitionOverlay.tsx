"use client";

import { FirmaLogo } from "@/components/ui/FirmaLogo";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageTransitionOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isNavigating = useRef(false);
  const isFirstRender = useRef(true);

  // Al cambiar el pathname la nueva página ya está lista → animar overlay hacia arriba
  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    if (!overlay) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      // Estado inicial: oculto debajo de la pantalla
      gsap.set(overlay, { yPercent: 100 });
      return;
    }

    // Pequeño delay para asegurar que el nuevo contenido haya pintado
    const t = setTimeout(() => {
      gsap.timeline()
        .to(logo, { opacity: 0, y: -8, duration: 0.2, ease: "power2.in" }, 0)
        .to(overlay, {
          yPercent: -100,
          duration: 0.55,
          ease: "power3.inOut",
          onComplete: () => {
            // Resetear para la próxima transición
            gsap.set(overlay, { yPercent: 100 });
            if (logo) gsap.set(logo, { opacity: 0, y: 8 });
            isNavigating.current = false;
          },
        }, 0.05);
    }, 80);

    return () => clearTimeout(t);
  }, [pathname]);

  // Interceptor global de clicks en links internos
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isNavigating.current) return;

      const anchor = (e.target as Element).closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignorar links externos, mailto, tel, anclas y misma página
      if (
        href.startsWith("http") ||
        href.startsWith("mailto") ||
        href.startsWith("tel") ||
        href.startsWith("#") ||
        href === pathname
      ) return;

      // Respetar Ctrl/Cmd/Shift+click (abrir en nueva pestaña, etc.)
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      if (anchor.target === "_blank") return;

      e.preventDefault();

      const overlay = overlayRef.current;
      const logo = logoRef.current;

      if (!overlay || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(href);
        return;
      }

      isNavigating.current = true;

      gsap.timeline({
        onComplete: () => router.push(href),
      })
        .fromTo(overlay,
          { yPercent: 100 },
          { yPercent: 0, duration: 0.45, ease: "power3.inOut" }
        )
        .fromTo(logo,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
          "-=0.15"
        );
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname, router]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[150] bg-white flex items-center justify-center pointer-events-none will-change-transform"
      aria-hidden
    >
      <div ref={logoRef} style={{ opacity: 0 }}>
        <FirmaLogo color="black" width={200} height={32} className="h-8 w-auto" />
      </div>
    </div>
  );
}
