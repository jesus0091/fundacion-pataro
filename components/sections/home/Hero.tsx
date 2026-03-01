import { H1, Label, P } from "@/components/ui/Text";

import { Button } from "@/components/ui/Button";
import Image from "next/image";

const HIGHLIGHTS = [
    "Formación",
    "Innovación",
    "Compromiso ",
];

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] pb-24 pt-20 sm:pb-32 sm:pt-24 lg:pb-40 lg:pt-32 flex items-center"
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
            <div className="relative z-10 w-full max-w-7xl mx-auto px-10 sm:px-6 py-12 sm:py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="max-w-xl flex flex-col gap-4 sm:gap-6 text-white">
                        <header className="flex flex-col gap-3">
                            <Label variant="primary">
                                Fundación Patricio Pataro
                            </Label>
                            <H1 id="hero-heading">
                                Innovación y cuidado para una vida más saludable
                            </H1>
                            <P variant="body">
                                Impulsamos la excelencia médica mediante
                                educación, investigación e innovación.
                                Fortalecemos el sistema de salud y mejorando la
                                atención.
                            </P>
                        </header>
                        <div className="flex flex-wrap font-semibold items-center gap-1 md:gap-4 text-xs sm:text-base md:text-lg text-primary">
                            {HIGHLIGHTS.map((item, i) => (
                                <span
                                    key={i}
                                    className="flex items-center gap-1.5"
                                >
                                    {i > 0 && (
                                        <span className="text-primary">·</span>
                                    )}
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                            <Button href="/services" variant="primary">
                                Programas de Becas
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    aria-hidden
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
                    <div className=" flex flex-1 w-full  order-last lg:order-none">
                        <Image
                            src="/images/img-hero.png"
                            alt="Fundación Pataro - Innovación y cuidado para una vida más saludable"
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
