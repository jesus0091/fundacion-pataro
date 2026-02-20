import { H1, Label, P } from "@/components/ui/Text";

import { Button } from "@/components/ui/Button";
import Image from "next/image";

const HIGHLIGHTS = [
    "Proyectos realizados",
    "Investigación científica",
    "Gestión ambiental",
];

export default function Hero() {
    return (
        <section className="relative overflow-hidden min-h-[80vh] pb-40 pt-32 flex items-center">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/bg-hero.webp"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="max-w-xl flex flex-col gap-6 text-white">
                        <div className="flex flex-col gap-4">
                            <Label variant="primary">
                                Fundación Patricia Pataro
                            </Label>
                            <H1>
                                Innovación y cuidado para una vida más saludable
                            </H1>
                            <P variant="intro">
                                Impulsamos la excelencia médica mediante
                                educación, investigación e innovación.
                                Fortalecemos el sistema de salud y mejorando la
                                atención.
                            </P>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-primary">
                            {HIGHLIGHTS.map((item, i) => (
                                <span
                                    key={i}
                                    className="flex items-center gap-1.5"
                                >
                                    {i > 0 && (
                                        <span className="text-primary">
                                            ·
                                        </span>
                                    )}
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <Button href="/services" variant="primary">
                                Programas de Becas
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        d="M6 3l5 5-5 5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>
                            <Button href="/contact" variant="tertiary">
                                Donar
                            </Button>
                        </div>
                    </div>
                    <div className="relative flex flex-1 h-full lg:h-[550px]">
                            <Image
                                src="/images/img-hero.png"
                                alt="Fundación Pataro - Innovación y cuidado para una vida más saludable"
                                fill
                                className="object-contain drop-shadow-md"
                                sizes="(max-width: 1024px) 100vw, 512px"
                                priority
                            />
                    </div>
                </div>
            </div>
        </section>
    );
}
