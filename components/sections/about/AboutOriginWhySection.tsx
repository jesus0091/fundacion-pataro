import { H5, P } from "@/components/ui/Text";

import { FirmaLogo } from "@/components/ui/FirmaLogo";
import Image from "next/image";

const ORIGIN_PARAGRAPHS = [
    "La Fundación Patricio Pataro nace de una vocación profunda: transformar el sistema de salud a través de la formación continua de profesionales y la gestión de centros asistenciales de excelencia.",
    "Desde nuestros inicios, entendimos que la medicina no solo requiere conocimiento técnico, sino también visión estratégica, acceso a tecnología de vanguardia y un compromiso inquebrantable con la atención humana.",
];
const QUOTE =
    "Creemos que cada profesional de la salud formado con excelencia es un agente de cambio que eleva la calidad de vida de miles de pacientes.";
const WHY_PARAGRAPHS = [
    "El sistema de salud enfrenta desafíos constantes: tecnología que avanza rápidamente, necesidad de actualización continua, recursos limitados y demandas crecientes.",
    "Existimos para cerrar esas brechas. Facilitamos becas, impulsamos investigación científica, gestionamos centros médicos sin fines de lucro y promovemos la innovación tecnológica aplicada a la salud.",
];

export default function AboutOriginWhySection() {
    return (
        <section
            className="py-12 sm:py-16 lg:py-24 bg-white"
            aria-labelledby="origin-heading"
        >
            <div className="max-w-2xl mx-auto px-8 flex flex-col gap-8">
                <div id="about-org-title" className="flex justify-center">
                    <FirmaLogo
                        color="black"
                        className="h-auto w-full object-contain"
                        width={280}
                        height={48}
                    />
                </div>
                <div className="max-w-3xl flex flex-col gap-3">
                    <H5
                        id="origin-heading"
                        className="font-sans text-[#333333]"
                    >
                        El Origen
                    </H5>
                    <div className="flex flex-col gap-4">
                        {ORIGIN_PARAGRAPHS.map((text, i) => (
                            <P
                                key={i}
                                variant="body"
                                className="text-justify"
                            >
                                {text}
                            </P>
                        ))}
                    </div>
                    {/* Cita: fondo #E8F5FD, borde izquierdo azul/teal fino, texto azul itálico (Figma) */}
                    <blockquote className="mt-4 py-4 pl-6 pr-5 bg-[#E8F5FD] border-l-[3px] border-[#2196F3] text-[#1976D2] text-base italic font-sans rounded-r-lg">
                        "{QUOTE}"
                    </blockquote>

                    {/* Por Qué Existimos */}
                    <H5
                        id="why-heading"
                        className="mt-14 font-sans text-[#333333]"
                    >
                        Por Qué Existimos
                    </H5>
                    <div className="flex flex-col gap-4">
                        {WHY_PARAGRAPHS.map((text, i) => (
                            <P
                                key={i}
                                variant="body"
                                className="text-justify"
                            >
                                {text}
                            </P>
                        ))}
                    </div>
                </div>
                <div className="mt-4 relative w-full rounded-xl overflow-hidden">
                    <Image
                        src="/images/origin_png_1_.webp"
                        alt="Fundación Patricio Pataro - Nuestro equipo y vocación"
                        fill
                        className="object-cover !static"
                        sizes="(max-width: 1024px) 100vw, 1280px"
                    />
                </div>
            </div>
        </section>
    );
}
