"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  stagger = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (stagger) {
      const targets = el.querySelectorAll<HTMLElement>(
        "li, article, [data-animate]"
      );
      if (!targets.length) return;
      gsap.set(targets, { opacity: 0, y: 24 });

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.1,
            delay,
          });
        },
      });
      return () => st.kill();
    }

    gsap.set(el, { opacity: 0, y: 30 });
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          delay,
        });
      },
    });
    return () => st.kill();
  }, [delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
