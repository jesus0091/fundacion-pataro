import { H3, P } from "@/components/ui/Text";

import { ReactNode } from "react";

export interface BenefitItem {
    icon: ReactNode;
    title: string;
    description: string;
}

function BenefitCard({ icon, title, description }: BenefitItem) {
    return (
        <div className="flex flex-col items-center text-center p-6">
            <div className="flex w-14 h-14 pt-[5.09px] pb-[5.91px] justify-center items-center rounded-xl mb-4 bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD]">
                {icon}
            </div>
            <H3>{title}</H3>
            <P variant="intro">{description}</P>
        </div>
    );
}

const DEFAULT_BENEFITS: BenefitItem[] = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
            </svg>
        ),
        title: "Formación",
        description:
            "Educación médica continua para fortalecer el desarrollo profesional y elevar el estándar de atención en salud.",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
            </svg>
        ),
        title: "Innovación",
        description:
            "Investigación científica y tecnológica aplicada para transformar el conocimiento en soluciones reales.",
    },
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
            </svg>
        ),
        title: "Compromiso",
        description:
            "Acciones concretas que marcan la diferencia en la vida de las personas y la comunidad.",
    },
];

interface BenefitsProps {
    benefits?: BenefitItem[];
}

export default function Benefits({
    benefits = DEFAULT_BENEFITS,
}: BenefitsProps) {
    return (
        <section className="flex flex-col items-center relative bg-[#F0F6FE]">
            <div className="grid grid-cols-3 max-w-7xl -mt-40 z-10 mx-auto rounded-[20px] bg-white justify-center items-center flex-1 min-h-80 shadow-[0_4px_20px_0_rgba(0,67,223,0.15)]">
                {benefits.map((benefit, index) => (
                    <BenefitCard key={index} {...benefit} />
                ))}
            </div>
        </section>
    );
}
