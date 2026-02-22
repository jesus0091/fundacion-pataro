import { H3, P } from "@/components/ui/Text";

const WHY_PARAGRAPHS = [
  "El sistema de salud enfrenta desafíos constantes: tecnología que avanza rápidamente, necesidad de actualización continua, recursos limitados y demandas crecientes.",
  "Existimos para cerrar esas brechas. Facilitamos becas, impulsamos investigación científica, gestionamos centros médicos sin fines de lucro y promovemos la innovación tecnológica aplicada a la salud.",
];

export default function AboutWhySection() {
  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="mb-6">
          <H3 id="why-heading">
            Por Qué Existimos
          </H3>
          </div>
          <div className="flex flex-col gap-4">
            {WHY_PARAGRAPHS.map((text, i) => (
              <P key={i} variant="body">
                {text}
              </P>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
