import { H2, H4, P } from "@/components/ui/Text";

const PRINCIPLES = [
  {
    title: "Excelencia Académica",
    description:
      "Promovemos la formación continua de profesionales de la salud a través de programas de capacitación de clase mundial y alianzas con instituciones líderes.",
  },
  {
    title: "Integridad y Salud Integral",
    description:
      "Actuamos con transparencia y ética en cada decisión, priorizando el bienestar integral de pacientes y profesionales por encima de cualquier interés.",
  },
  {
    title: "Innovación Colaborativa",
    description:
      "Impulsamos la adopción de tecnología médica de vanguardia y fomentamos la colaboración entre instituciones, profesionales y comunidades.",
  },
  {
    title: "Vocación de Servicio",
    description:
      "Nuestro compromiso es con la salud pública y la atención de calidad accesible, operando siempre sin fines de lucro y con profundo sentido social.",
  },
];

export default function AboutPrinciplesSection() {
  return (
    <section className="py-16 lg:py-24 bg-neutral-background" aria-labelledby="principles-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <H2 id="principles-heading" variant="section" className="mb-4">
          Nuestros Principios
        </H2>
        <p className="text-neutral-text-light text-lg mb-10">Valores que nos guían</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRINCIPLES.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <H4>{item.title}</H4>
              <P variant="body">{item.description}</P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
