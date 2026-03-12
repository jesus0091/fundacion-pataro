import AnimatedSection from "@/components/ui/AnimatedSection";
import { H2, P } from "@/components/ui/Text";
import {
  IconBuildingHospital,
  IconBuildingSkyscraper,
  IconMicroscope,
  IconSchool,
  IconStethoscope,
  IconWorld,
} from "@tabler/icons-react";

const ALIANZAS = [
  {
    icon: IconSchool,
    tipo: "Instituciones académicas",
    descripcion:
      "Universidades y facultades de medicina con las que desarrollamos programas de formación, becas y actividades de extensión.",
  },
  {
    icon: IconBuildingHospital,
    tipo: "Hospitales y centros de salud",
    descripcion:
      "Instituciones del sector público y privado donde implementamos programas de gestión asistencial y modernización de infraestructura.",
  },
  {
    icon: IconMicroscope,
    tipo: "Centros de investigación",
    descripcion:
      "Laboratorios e institutos científicos con los que co-desarrollamos proyectos de investigación aplicada y difusión del conocimiento.",
  },
  {
    icon: IconStethoscope,
    tipo: "Colegios y asociaciones médicas",
    descripcion:
      "Organismos de representación profesional con los que articulamos programas de capacitación y eventos académicos de alto nivel.",
  },
  {
    icon: IconBuildingSkyscraper,
    tipo: "Empresas y sector privado",
    descripcion:
      "Organizaciones que colaboran con recursos, infraestructura o voluntariado para amplificar el alcance de nuestras acciones comunitarias.",
  },
  {
    icon: IconWorld,
    tipo: "Organismos internacionales",
    descripcion:
      "Entidades de referencia global en salud y educación médica con las que intercambiamos conocimiento y buenas prácticas.",
  },
];

export default function AlianzasSection() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-24 bg-[#F0F6FE]"
      aria-labelledby="alianzas-heading"
    >
      <div className="max-w-7xl mx-auto px-10 sm:px-6">
        <AnimatedSection className="text-center mb-10 lg:mb-14 flex flex-col items-center gap-3">
          <p className="text-primary font-semibold text-sm sm:text-base tracking-wide">
            Trabajo colaborativo
          </p>
          <H2
            id="alianzas-heading"
            variant="section"
            className="font-sans text-[#333333]"
          >
            Trabajamos en red
          </H2>
          <P variant="body" className="text-center max-w-2xl">
            La salud no se transforma en soledad. Construimos alianzas estratégicas con instituciones académicas, hospitales, centros de investigación y organizaciones del sector privado para multiplicar el impacto de cada acción.
          </P>
        </AnimatedSection>

        <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {ALIANZAS.map((alianza, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col gap-4"
              data-animate
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-icon flex items-center justify-center flex-shrink-0">
                <alianza.icon className="w-6 h-6 text-primary" stroke={1.5} aria-hidden />
              </div>
              <h3 className="font-sans text-base sm:text-lg font-bold text-[#1F2933]">
                {alianza.tipo}
              </h3>
              <P variant="small">{alianza.descripcion}</P>
            </article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
