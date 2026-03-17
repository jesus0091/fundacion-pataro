import AnimatedSection from "@/components/ui/AnimatedSection";
import { H2, H3, Label, P } from "@/components/ui/Text";
import Image from "next/image";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { Button } from "@/components/ui/Button";

export interface DifferentialApproachCard {
    title: string;
    imageSrc?: string;
}

const DEFAULT_CARDS: DifferentialApproachCard[] = [
    { title: "Conocimiento aplicado", imageSrc: "/images/img-01_1_.webp" },
    { title: "Visión sistémica", imageSrc: "/images/img-02_1_.webp" },
    { title: "Impacto sostenible", imageSrc: "/images/img-03_1_.webp" },
];

const CARD_GRADIENTS = [
    "from-secondary/30 via-secondary/20 to-accent/20",
    "from-primary/25 via-primary/15 to-secondary/15",
    "from-accent/25 via-accent/15 to-primary/15",
];

interface DifferentialApproachSectionProps {
    cards?: DifferentialApproachCard[];
    ctaText?: string;
    ctaHref?: string;
}

export default function DifferentialApproachSection({
    cards = DEFAULT_CARDS,
    ctaText = "Ver todos los programas",
    ctaHref = "/services",
}: DifferentialApproachSectionProps) {
    return (
        <section
            className="relative py-12 sm:py-16 lg:py-24 overflow-hidden"
            aria-labelledby="differential-approach-heading"
        >
            <AuroraBackground />
            <div className="relative z-0 max-w-7xl mx-auto flex flex-col items-center px-10 sm:px-6">
                <AnimatedSection className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-xl flex flex-col items-center gap-3">
                    <span className="inline-block">
                        <Label variant="secondary">Nuestro enfoque diferencial</Label>
                    </span>
                    <H2 id="differential-approach-heading" variant="section">
                        Una visión integral para transformar la salud.
                    </H2>
                    <P variant="body">
                        Combinamos formación, investigación y gestión asistencial
                        en un modelo integrado que genera impacto real en todos
                        los niveles del sistema de salud.
                    </P>
                </AnimatedSection>

                <AnimatedSection
                    stagger
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 lg:mb-12 max-w-3xl mx-auto w-full"
                >
                    {cards.map((card, index) => (
                        <article
                            key={index}
                            className="group rounded-2xl overflow-hidden shadow-lg"
                        >
                            <div className="relative aspect-[16/9] sm:aspect-[4/6] min-h-[160px] sm:min-h-[280px]">
                                {card.imageSrc ? (
                                    <>
                                        <Image
                                            src={card.imageSrc}
                                            alt={`${card.title} - Fundación Patricio Pataro`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                            loading="lazy"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                                            aria-hidden
                                        />
                                    </>
                                ) : (
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${CARD_GRADIENTS[index % CARD_GRADIENTS.length]} flex items-end`}
                                    >
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                            aria-hidden
                                        />
                                    </div>
                                )}
                                <div className="absolute bottom-0 max-w-10 left-0 w-full p-5">
                                    <H3 variant="overlay">{card.title}</H3>
                                </div>
                            </div>
                        </article>
                    ))}
                </AnimatedSection>

                <AnimatedSection className="flex flex-col items-center gap-6">
                    <P variant="body" className="text-center max-w-2xl mx-auto">
                        Nuestro enfoque integra acción inmediata y visión
                        estratégica, generando impacto hoy y construyendo
                        soluciones para el futuro.
                    </P>
                    <div className="flex justify-center">
                        <Button href={ctaHref} variant="primary">
                            {ctaText}
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
