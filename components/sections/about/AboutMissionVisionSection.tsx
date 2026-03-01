import { H2, H3, P } from "@/components/ui/Text";

import Image from "next/image";

const MISSION =
    "Promover la formación continua, la investigación y la asistencia médica integral, facilitando recursos, becas y alianzas estratégicas que potencien la excelencia de los profesionales de la salud y el bienestar de los pacientes.";

const VISION =
    "Ser un referente regional en medicina científica y tecnológica, transformando el futuro de la salud mediante la capacitación de vanguardia y la gestión de centros asistenciales sin fines de lucro.";

const MissionIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="w-6 h-6 text-primary"
    >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path
            d="M12 2v4M12 18v4M2 12h4M18 12h4"
            stroke="currentColor"
            strokeWidth="1.5"
        />
    </svg>
);

const VisionIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="w-6 h-6 text-primary"
    >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

export default function AboutMissionVisionSection() {
    return (
        <section
            className=" bg-gradient-to-t from-[#CFE2FC] to-[#F0F6FE]"
            aria-labelledby="mission-vision-heading"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:grid grid-cols-3 md:gap-4 px-10 sm:px-6">
                <div className="w-full pt-10 order-3 md:order-1 px-[10vw] sm:px-[20vw] md:px-0">
                    <Image
                        src="/images/mission_vision.png"
                        alt="Profesional de la salud - Fundación Patricio Pataro"
                        fill
                        className="object-cover !static"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                </div>
                <div className="flex flex-col gap-4 py-8 md:py-36 order-1 md:order-2">
                    <div className="w-12 lg:w-16 h-12 lg:h-16 rounded-xl bg-gradient-icon flex items-center justify-center flex-shrink-0">
                        <MissionIcon />
                    </div>
                    <H2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2933]">
                        Misión
                    </H2>
                    <P variant="body" className="font-sans">
                        {MISSION}
                    </P>
                </div>
                <div className="flex flex-col gap-4 py-8 justify-start md:py-36 order-2 md:order-3">
                    <div className="w-12 lg:w-16 h-12 lg:h-16 aspect-square rounded-xl bg-gradient-icon flex items-center justify-center flex-shrink-0">
                        <VisionIcon />
                    </div>
                    <H2 className="font-serif text-xl sm:text-2xl font-bold text-[#1F2933]">
                        Visión
                    </H2>
                    <P variant="body" className="font-sans">
                        {VISION}
                    </P>
                </div>
            </div>
        </section>
    );
}
