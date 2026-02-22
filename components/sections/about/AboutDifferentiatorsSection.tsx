import { H2, H4, P } from "@/components/ui/Text";

const ITEMS = [
  {
    title: "Mentoría Activa",
    description: "Acompañamos a profesionales de la salud con programas de mentoría y formación continua para potenciar su desarrollo.",
  },
  {
    title: "Alianzas Globales",
    description: "Trabajamos con instituciones líderes a nivel regional e internacional para ampliar el impacto de nuestra labor.",
  },
  {
    title: "Gestión Sin Fines de Lucro",
    description: "Operamos centros asistenciales y programas con foco en el bienestar y la excelencia, sin fines de lucro.",
  },
];

export default function AboutDifferentiatorsSection() {
  return (
    <section className="py-16 lg:py-24 bg-neutral-background" aria-labelledby="differentiators-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <H2 id="differentiators-heading" variant="section">
            Lo que nos hace únicos
          </H2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ITEMS.map((item, i) => (
            <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl bg-white shadow-sm">
              <H4>{item.title}</H4>
              <P variant="body">{item.description}</P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
