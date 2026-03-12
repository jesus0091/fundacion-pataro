"use client";

import { H3, P } from "@/components/ui/Text";
import {
    IconHeartHandshake,
    IconMicroscope,
    IconSchool,
} from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const PILLARS = [
    {
        icon: <IconSchool className="w-7 h-7" stroke={1.5} aria-hidden />,
        title: "Formación",
        description:
            "Educación médica continua para fortalecer el desarrollo profesional y elevar el estándar de atención en salud.",
    },
    {
        icon: <IconMicroscope className="w-7 h-7" stroke={1.5} aria-hidden />,
        title: "Innovación",
        description:
            "Investigación científica y tecnológica aplicada para transformar el conocimiento en soluciones reales.",
    },
    {
        icon: <IconHeartHandshake className="w-7 h-7" stroke={1.5} aria-hidden />,
        title: "Compromiso",
        description:
            "Acciones concretas que marcan la diferencia en la vida de las personas y la comunidad.",
    },
];

export default function ServicesPillarsSection() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = ref.current;
        if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const cards = section.querySelectorAll<HTMLElement>("article");
        gsap.set(cards, { opacity: 0, y: 48, scale: 0.95 });

        const st = ScrollTrigger.create({
            trigger: section,
            start: "top 88%",
            once: true,
            onEnter: () =>
                gsap.to(cards, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.13,
                }),
        });

        return () => st.kill();
    }, []);

    return (
        <section
            ref={ref}
            className="py-12 sm:py-16 lg:py-24 bg-white"
            aria-labelledby="pillars-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 id="pillars-heading" className="sr-only">
                    Formación, Innovación y Compromiso
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {PILLARS.map((item, i) => (
                        <article
                            key={i}
                            className="flex flex-col items-center text-center p-6 lg:p-8 rounded-2xl bg-neutral-background"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-icon flex items-center justify-center text-primary mb-5 flex-shrink-0">
                                {item.icon}
                            </div>
                            <H3 className="mb-3">{item.title}</H3>
                            <P variant="small" className="text-center">
                                {item.description}
                            </P>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
