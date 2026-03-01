import { H3, H4, P } from "@/components/ui/Text";
import { IconClock, IconMail, IconMapPin } from "@tabler/icons-react";

import Link from "next/link";
import { ReactNode } from "react";

export interface BenefitItem {
    icon: ReactNode;
    title: string;
    description: ReactNode;
    isLast?: boolean;
}

function BenefitCard({
    icon,
    title,
    description,
    isLast = false,
}: BenefitItem) {
    return (
        <article
            className={`flex flex-col gap-3 items-center justify-start h-full lg:py-14 text-center px-8 py-6 sm:p-6 bg-white border-black/10 border-b sm:border-none ${isLast ? "border-b-0" : "border-b"}`}
        >
            <div
                className="flex w-14 h-14 min-w-14 aspect-square justify-center items-center rounded-xl bg-gradient-icon text-primary"
                aria-hidden
            >
                {icon}
            </div>
            <div className="flex flex-col gap-2">
                <H4>{title}</H4>
                <div className="[&_a]:text-primary [&_a]:hover:underline px-10">
                    {description}
                </div>
            </div>
        </article>
    );
}

const DEFAULT_BENEFITS: BenefitItem[] = [
    {
        icon: <IconClock className="w-7 h-7" stroke={1.5} aria-hidden />,
        title: "Horarios de Atención",
        description: (
            <div className="flex flex-col gap-0.5 text-[#333333] text-sm sm:text-base leading-relaxed">
                <span>Lunes a Viernes: 9:00 - 17:00 hs</span>
                <span>Sábados y Domingos: Cerrado</span>
            </div>
        ),
    },
    {
        icon: <IconMapPin className="w-7 h-7" stroke={1.5} aria-hidden />,
        title: "Ubicación",
        description: (
            <P variant="small">
                Billinghurst 19, Ciudad Autónoma de Buenos Aires. Argentina
            </P>
        ),
    },
    {
        icon: <IconMail className="w-7 h-7" stroke={1.5} aria-hidden />,
        title: "Email",
        description: (
            <P variant="small">
                <Link href="mailto:info@fpp.org.ar">info@fpp.org.ar</Link>
            </P>
        ),
    },
   
];

interface BenefitsProps {
    benefits?: BenefitItem[];
}

export default function Benefits({ benefits = DEFAULT_BENEFITS }: BenefitsProps) {
    return (
        <section
            className="flex flex-col items-center relative bg-[#F0F6FE] px-10 sm:px-6 py-8 sm:py-0"
            aria-labelledby="benefits-heading"
        >
            <h2 id="benefits-heading" className="sr-only">
                Información de contacto: ubicación, email y horarios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl overflow-hidden -mt-24 sm:-mt-32 lg:-mt-40 z-10 mx-auto rounded-2xl md:rounded-[20px] md:overflow-hidden justify-center items-center flex-1 min-h-0 md:min-h-60 w-full gap-4 md:gap-0 bg-white md:shadow-[0_4px_20px_0_rgba(0,67,223,0.15)]">
                {benefits.map((benefit, index) => (
                    <BenefitCard
                        key={index}
                        {...benefit}
                        isLast={index === benefits.length - 1}
                    />
                ))}
            </div>
        </section>
    );
}
