import { H2, H5, P } from "@/components/ui/Text";

const ORIGIN_PARAGRAPHS = [
  "La Fundación Patricio Pataro nace de una vocación profunda: transformar el sistema de salud a través de la formación continua de profesionales y la gestión de centros asistenciales de excelencia.",
  "Desde nuestros inicios, entendimos que la medicina no solo requiere conocimiento técnico, sino también visión estratégica, acceso a tecnología de vanguardia y un compromiso inquebrantable con la atención humana.",
];

const QUOTE =
  "Creemos que cada profesional de la salud formado con excelencia es un agente de cambio que eleva la calidad de vida de miles de pacientes.";

export default function AboutOriginSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24" aria-labelledby="origin-heading">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-2xl">
          <H5 id="origin-heading" className="mb-6">
            El Origen
          </H5>
          <div className="flex flex-col gap-4">
            {ORIGIN_PARAGRAPHS.map((text, i) => (
              <P key={i} variant="body">
                {text}
              </P>
            ))}
          </div>
          <blockquote className="mt-8 pl-6 border-l-4 border-primary text-[#333333] text-lg italic">
            {QUOTE}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
