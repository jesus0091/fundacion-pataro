import { H2, H3, P } from "@/components/ui/Text";

const PRINCIPLES = [
  {
    title: "Excelencia Académica",
    description:
      "Promovemos la formación continua de profesionales de la salud a través de programas de capacitación de clase mundial y alianzas con instituciones líderes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="w-8 h-8 text-primary">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8M8 11h8M8 15h4" />
      </svg>
    ),
  },
  {
    title: "Integridad y Salud Integral",
    description:
      "Actuamos con transparencia y ética en cada decisión, priorizando el bienestar integral de pacientes y profesionales por encima de cualquier interés.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="w-8 h-8 text-emerald-600">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Innovación Colaborativa",
    description:
      "Impulsamos la adopción de tecnología médica de vanguardia y fomentamos la colaboración entre instituciones, profesionales y comunidades.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="w-8 h-8 text-primary">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12 12 0 0 1 22 2c0 2.72-.78 7.5-6 11a22 22 0 0 1-3.97 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    title: "Vocación de Servicio",
    description:
      "Nuestro compromiso es con la salud pública y la atención de calidad accesible, operando siempre sin fines de lucro y con profundo sentido social.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="w-8 h-8 text-red-500">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
];

export default function AboutPrinciplesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white" aria-labelledby="principles-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-10 lg:mb-12">
          <p className="text-primary font-semibold text-sm sm:text-base tracking-wide mb-2">
            Nuestros Principios
          </p>
          <H2 id="principles-heading" variant="section" className="font-sans text-[#333333]">
            Valores que nos guían
          </H2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6">
          {PRINCIPLES.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 lg:p-8 rounded-2xl bg-[#F0F6FE] text-left"
            >
              <div className="flex-shrink-0" aria-hidden>
                {item.icon}
              </div>
              <H3 className="font-sans text-lg sm:text-xl font-bold text-[#333333]">
                {item.title}
              </H3>
              <P variant="body">
                {item.description}
              </P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
