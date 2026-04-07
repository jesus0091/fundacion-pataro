import AnimatedSection from "@/components/ui/AnimatedSection";
import { H2, H3, P } from "@/components/ui/Text";
import { IconEye, IconTarget } from "@tabler/icons-react";
import Image from "next/image";

const MISSION =
    "Promover la formación continua, la investigación y la asistencia médica integral, facilitando recursos, becas y alianzas estratégicas que potencien la excelencia de los profesionales de la salud y el bienestar de los pacientes.";

const VISION =
    "Ser un referente regional en medicina científica y tecnológica, transformando el futuro de la salud mediante la capacitación de vanguardia y la gestión de centros asistenciales sin fines de lucro.";

export default function AboutMissionVisionSection() {
    return (
        <section
            className=" bg-gradient-to-t from-[#CFE2FC] to-[#F0F6FE]"
            aria-label="Misión y Visión"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:grid grid-cols-3 md:gap-4 px-8 sm:px-6">
                <AnimatedSection className="w-full pt-10 order-3 md:order-1 px-[10vw] sm:px-[20vw] md:px-0">
                    <Image
                        src="/images/mission_vision.webp"
                        alt="Profesional de la salud - Fundación Patricio Pataro"
                        fill
                        className="object-cover !static"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                </AnimatedSection>
                <AnimatedSection delay={0.1} className="flex flex-col gap-4 py-8 md:py-36 order-1 md:order-2">
                    <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-xl bg-gradient-icon flex items-center justify-center flex-shrink-0">
                        <IconTarget className="w-6 h-6 text-primary" stroke={1.5} aria-hidden />
                    </div>
                    <H2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2933]">
                        Misión
                    </H2>
                    <P variant="body" className="font-sans">
                        {MISSION}
                    </P>
                </AnimatedSection>
                <AnimatedSection delay={0.2} className="flex flex-col gap-4 py-8 justify-start md:py-36 order-2 md:order-3">
                    <div className="w-12 lg:w-16 h-12 lg:h-16 aspect-square rounded-xl bg-gradient-icon flex items-center justify-center flex-shrink-0">
                        <IconEye className="w-6 h-6 text-primary" stroke={1.5} aria-hidden />
                    </div>
                    <H2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2933]">
                        Visión
                    </H2>
                    <P variant="body" className="font-sans">
                        {VISION}
                    </P>
                </AnimatedSection>
            </div>
        </section>
    );
}
