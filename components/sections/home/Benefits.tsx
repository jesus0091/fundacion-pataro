import AnimatedSection from "@/components/ui/AnimatedSection";
import { IconClock, IconMail, IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";

export interface BenefitItem {
    icon: ReactNode;
    label: string;
    title: string;
    description: ReactNode;
}

function BenefitCard({ icon, label, title, description }: BenefitItem) {
    return (
        <article className="group flex items-start gap-5 px-8 py-8 lg:py-10 h-full">
            <div
                className="flex w-12 h-12 min-w-12 aspect-square justify-center items-center rounded-xl bg-gradient-icon text-primary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                aria-hidden
            >
                {icon}
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-primary/70">
                    {label}
                </span>
                <h3 className="font-sans text-sm font-bold text-[#1F2933]">
                    {title}
                </h3>
                <div className="[&_a]:text-primary [&_a]:font-medium [&_a]:hover:underline mt-0.5 text-[#555] text-sm leading-relaxed">
                    {description}
                </div>
            </div>
        </article>
    );
}

const DEFAULT_BENEFITS: BenefitItem[] = [
    {
        icon: <IconClock className="w-6 h-6" stroke={1.5} aria-hidden />,
        label: "Oficina",
        title: "Horarios de Atención",
        description: (
            <div className="flex flex-col gap-0.5">
                <span>Lun – Vie: <strong className="text-[#1F2933] font-semibold">9:00 – 17:00 hs</strong></span>
                <span className="text-[#999]">Sáb y Dom: cerrado</span>
            </div>
        ),
    },
    {
        icon: <IconMapPin className="w-6 h-6" stroke={1.5} aria-hidden />,
        label: "Dirección",
        title: "Sede Central",
        description: (
            <span>
                Billinghurst 19<br />
                Ciudad Autónoma de Buenos Aires
            </span>
        ),
    },
    {
        icon: <IconMail className="w-6 h-6" stroke={1.5} aria-hidden />,
        label: "Contacto",
        title: "Escribinos",
        description: (
            <Link href="mailto:info@fpp.org.ar">
                info@fpp.org.ar
            </Link>
        ),
    },
];

interface BenefitsProps {
    benefits?: BenefitItem[];
}

export default function Benefits({ benefits = DEFAULT_BENEFITS }: BenefitsProps) {
    return (
        <section
            className="relative bg-[#F0F6FE] px-10 sm:px-6 pb-0"
            aria-labelledby="benefits-heading"
        >
            <h2 id="benefits-heading" className="sr-only">
                Información de contacto: ubicación, email y horarios
            </h2>
            <AnimatedSection stagger className="max-w-7xl mx-auto">
                <ul className="
                    grid grid-cols-1 md:grid-cols-3
                    -mt-24 sm:-mt-32 lg:-mt-40 z-10
                    rounded-2xl overflow-hidden
                    bg-white
                    shadow-[0_8px_40px_0_rgba(0,67,223,0.12)]
                    divide-y md:divide-y-0 md:divide-x divide-[#EEF2FB]
                    list-none
                ">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="min-h-0">
                            <BenefitCard {...benefit} />
                        </li>
                    ))}
                </ul>
            </AnimatedSection>
        </section>
    );
}
