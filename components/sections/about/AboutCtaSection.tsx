import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { H2 } from "@/components/ui/Text";

export default function AboutCtaSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white" aria-labelledby="about-cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-6">
        <AnimatedSection stagger className="flex flex-col items-center gap-6">
          <H2 id="about-cta-heading" variant="section" data-animate>
            ¿Querés conocer nuestros programas?
          </H2>
          <div className="flex flex-wrap justify-center gap-3" data-animate>
            <Button href="/services" variant="tertiary">
              Ver Programas de Formación
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
