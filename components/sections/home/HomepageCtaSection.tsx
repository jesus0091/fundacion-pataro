import AnimatedSection from "@/components/ui/AnimatedSection";
import { FirmaLogo } from "@/components/ui/FirmaLogo";
import { P } from "@/components/ui/Text";
import Image from "next/image";

const DEFAULT_BG_IMAGE = "/images/banner_1_.webp";

interface HomepageCtaSectionProps {
    backgroundImageSrc?: string;
}

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
            <AnimatedSection className="max-w-7xl mx-auto px-8 sm:px-6">
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] flex items-center">
                    <div className="absolute inset-0">
                        <div className="relative size-full">
                            <Image
                                src={backgroundImageSrc}
                                alt=""
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 1280px"
                                priority={false}
                            />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-30" aria-hidden />
                    </div>
                    <div className="relative z-10 p-6 sm:p-8 lg:p-12 flex flex-col gap-4 max-w-xl">
                        <div className="inline-flex" aria-hidden>
                            <FirmaLogo
                                color="white"
                                className="w-[90%] sm:w-auto max-w-xs drop-shadow-sm object-contain"
                            />
                        </div>
                        <blockquote className="m-0">
                            <P variant="body" className="text-white">
                                Creemos que una mejor salud se construye cuando el
                                conocimiento médico, la innovación y el compromiso
                                humano trabajan juntos.
                            </P>
                        </blockquote>
                    </div>
                </div>
            </AnimatedSection>
        </section>
    );
}
