import { H1, Label, P } from "@/components/ui/Text";

import Image from "next/image";

export default function ContactIntroSection() {
    return (
        <section
            className="py-16 lg:py-36 relative lg:min-h-[50vh]"
            aria-labelledby="contact-heading"
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <div className="max-w-2xl mx-auto flex flex-col gap-4">
                    <Label variant="secondary">Hablemos</Label>
                    <H1 id="contact-heading">Contacto</H1>
                    <P variant="body">
                        Tu mensaje es el primer paso para generar un cambio.
                    </P>
                   
                </div>
            </div>
        </section>
    );
}
