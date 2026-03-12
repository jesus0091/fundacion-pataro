import AnimatedSection from "@/components/ui/AnimatedSection";
import { H2, Label, P } from "@/components/ui/Text";

const STATS = [
  {
    value: "+500",
    label: "Profesionales capacitados",
    description: "Médicos, enfermeros y técnicos que fortalecieron su formación a través de nuestros programas.",
  },
  {
    value: "+30",
    label: "Eventos académicos",
    description: "Congresos, simposios y ateneos organizados para el intercambio científico entre especialistas.",
  },
  {
    value: "+10.000",
    label: "Personas alcanzadas",
    description: "Personas de la comunidad que participaron en jornadas de salud preventiva y talleres.",
  },
  {
    value: "5",
    label: "Centros médicos",
    description: "Instituciones apoyadas con equipamiento, gestión asistencial o modernización de infraestructura.",
  },
];

export default function ImpactSection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-24 bg-white"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-7xl mx-auto px-10 sm:px-6">
        <AnimatedSection stagger className="flex flex-col items-center text-center mb-12 lg:mb-16 gap-3">
          <span data-animate>
            <Label variant="primaryTight">Nuestro impacto</Label>
          </span>
          <H2 id="impact-heading" variant="section" data-animate className="font-sans text-[#333333]">
            Números que hablan por sí solos
          </H2>
          <P variant="body" className="text-center max-w-xl" data-animate>
            Cada cifra representa personas reales, comunidades fortalecidas y un sistema de salud mejor preparado para el futuro.
          </P>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat) => (
            <article
              key={stat.label}
              className="flex flex-col items-center text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#F0F6FE] to-[#E8F5E9]"
              data-animate
            >
              <span className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </span>
              <h3 className="font-sans text-base font-bold text-[#1F2933] mb-2">
                {stat.label}
              </h3>
              <P variant="small" className="text-center">
                {stat.description}
              </P>
            </article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
