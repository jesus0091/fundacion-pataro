import Link from "next/link";
import { H2, P } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export default function ContactCtaSection() {
  return (
    <section className="py-16 lg:py-24 bg-neutral-background" aria-labelledby="contact-cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <H2 id="contact-cta-heading" variant="section">
            Construyamos juntos el futuro de la salud
          </H2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="primary">
              Contactanos
            </Button>
            <Button href="/services" variant="tertiary">
              Ver Programas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
