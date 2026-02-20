import { H2, H3, Label, P } from "@/components/ui/Text";

import { Button } from "@/components/ui/Button";

export interface DifferentialApproachCard {
    title: string;
    imageSrc?: string;
}

const DEFAULT_CARDS: DifferentialApproachCard[] = [
    { title: "Conocimiento aplicado" },
    { title: "Visión sistémica" },
    { title: "Impacto sostenible" },
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
    ctaText = "Ver Programas de Formación",
    ctaHref = "/services",
}: DifferentialApproachSectionProps) {
    return (
        <section
            className="relative py-16 lg:py-24 overflow-hidden"
            aria-labelledby="differential-approach-heading"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6">
                <header className="text-center mb-10 lg:mb-12 max-w-xl flex flex-col items-center gap-3">
                    <Label variant="primaryTight">
                        Nuestro enfoque diferencial
                    </Label>
                    <H2 id="differential-approach-heading" variant="section">
                        Una visión integral para transformar la salud.
                    </H2>
                    <P variant="narrowMt4">
                        En la Fundación Patricio Pataro entendemos que mejorar
                        la salud requiere más que acciones aisladas. Por eso
                        combinamos:
                    </P>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 lg:mb-12 max-w-3xl mx-auto">
                    {cards.map((card, index) => (
                        <article
                            key={index}
                            className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-neutral-background"
                        >
                            <div className="relative aspect-[4/5] min-h-[280px]">
                                {card.imageSrc ? (
                                    <>
                                        <img
                                            src={card.imageSrc}
                                            alt=""
                                            className="absolute inset-0 w-full h-full object-cover"
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
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <H3 variant="overlay">{card.title}</H3>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <P variant="centerNarrowMb10">
                    Nuestro enfoque integra acción inmediata y visión
                    estratégica, generando impacto hoy y construyendo soluciones
                    para el futuro.
                </P>

                <div className="flex justify-center">
                    <Button href={ctaHref} variant="primary">
                        {ctaText}
                    </Button>
                </div>
            </div>
        </section>
    );
}
