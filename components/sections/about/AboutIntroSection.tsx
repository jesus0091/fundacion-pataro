import { H1, Label, P } from "@/components/ui/Text";

import Image from "next/image";

export default function AboutIntroSection() {
    return (
        <section
            className="pt-28 pb-12 relative lg:pt-28 lg:pb-28"
            aria-labelledby="about-heading"
        >
            <div className="absolute inset-0 z-[-1]">
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
            <div className="max-w-7xl mx-auto px-10 sm:px-6 flex flex-col items-center text-center z-10">
                <header className="max-w-2xl flex flex-col gap-3 items-center text-center">
                    <Label variant="secondary">Sobre nosotros</Label>
                    <H1 id="about-heading">Quiénes Somos</H1>
                    <P variant="body" className="text-center">
                        Transformamos conocimiento en acción a través de cinco
                        pilares fundamentales que fortalecen el sistema de
                        salud.
                    </P>
                </header>
            </div>
        </section>
    );
}
