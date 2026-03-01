const DEFAULT_BG_IMAGE = "/images/banner_1_.webp";

interface HomepageCtaSectionProps {
    backgroundImageSrc?: string;
}

import { FirmaLogo } from "@/components/ui/FirmaLogo";
import { P } from "@/components/ui/Text";

export default function HomepageCtaSection({
    backgroundImageSrc = DEFAULT_BG_IMAGE,
}: HomepageCtaSectionProps) {
    return (
        <section
            className="py-12 sm:py-16 lg:py-24 bg-white"
            aria-labelledby="homepage-cta-heading"
        >
            <h2 id="homepage-cta-heading" className="sr-only">
                Nuestra creencia
            </h2>
            <div className="max-w-7xl mx-auto px-10 sm:px-6">
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] flex items-center">
                    <div className="absolute inset-0">
                        <div
                            className="absolute inset-0 bg-cover bg-center scale-105"
                            style={{
                                backgroundImage: `url(${backgroundImageSrc})`,
                            }}
                        />
                        <div className="absolute inset-0 bg-black opacity-30" />
                    </div>
                    <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col gap-4 max-w-xl">
                        <div className="inline-flex">
                            <FirmaLogo
                                color="white"
                                className="w-[90%] sm:w-auto max-w-xs drop-shadow-sm object-contain"
                            />
                        </div>
                        <P variant="body" className="text-white">
                            Creemos que una mejor salud se construye cuando el
                            conocimiento médico, la innovación y el compromiso
                            humano trabajan juntos.
                        </P>
                    </div>
                </div>
            </div>
        </section>
    );
}
