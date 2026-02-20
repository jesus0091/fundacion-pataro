import { H2, Label, P } from "@/components/ui/Text";

import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface PurposeSectionProps {
    subtitle?: string;
    title?: string;
    paragraph1?: string;
    paragraph2?: string;
    ctaText?: string;
    ctaHref?: string;
    imageSrc?: string;
    imageAlt?: string;
}

export default function PurposeSection({
    subtitle = "Nuestro propósito",
    title = "Transformamos conocimiento en salud integral de calidad",
    paragraph1 = "Actuamos como un puente entre el conocimiento médico, la innovación tecnológica y la atención humana, generando impacto real y sostenible en el sistema de salud.",
    paragraph2 = "Creemos que una mejor salud comienza con profesionales formados, investigación aplicada y un compromiso genuino con las personas.",
    ctaText = "Ver Programas de Formación",
    ctaHref = "/services",
    imageSrc = "/images/img-our-purpose.webp",
    imageAlt = "Nuestro propósito - Fundación Pataro",
}: PurposeSectionProps) {
    return (
        <section className="py-16 lg:py-40 bg-gradient-to-b from-[#F0F6FE] to-white">
            <div className="max-w-7xl px-6 grid grid-cols-2 items-center gap-16 self-stretch mx-auto">
                <div className="relative rounded-3xl bg-white flex-shrink-0 overflow-hidden lg:h-[500px]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

                <div className="flex flex-col items-start gap-6 flex-1">
                    <div className="flex flex-col gap-3">
                        <Label variant="primaryTight">{subtitle}</Label>
                        <H2>{title}</H2>
                        <div>
                            <P variant="bodyLgMb4">{paragraph1}</P>
                            <P variant="bodyLgMb8">{paragraph2}</P>
                        </div>
                    </div>
                    <Button href={ctaHref} variant="primary">
                        {ctaText}
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
                </div>
            </div>
        </section>
    );
}
