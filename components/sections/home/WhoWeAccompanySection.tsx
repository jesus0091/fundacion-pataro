import { H2, H3, Label, P } from "@/components/ui/Text";

export interface AccompanyItem {
  title: string;
  description: string;
}

const DEFAULT_ITEMS: AccompanyItem[] = [
  {
    title: "Profesionales de la salud",
    description:
      "Acompañamos su desarrollo a través de formación continua, becas, investigación y acceso a nuevas oportunidades académicas y profesionales.",
  },
  {
    title: "Instituciones y aliados estratégicos",
    description:
      "Construimos alianzas para fortalecer infraestructura, desarrollar proyectos conjuntos y potenciar el impacto del sistema de salud.",
  },
  {
    title: "Comunidad y pacientes",
    description:
      "Promovemos el acceso a una atención médica de calidad, la prevención y el cuidado integral de la salud.",
  },
];

interface WhoWeAccompanySectionProps {
  subtitle?: string;
  title?: string;
  intro?: string;
  items?: AccompanyItem[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function WhoWeAccompanySection({
  subtitle = "A quiénes acompañamos",
  title = "Trabajamos junto a quienes hacen posible una mejor salud.",
  intro = "En la Fundación Patricio Pataro entendemos que mejorar la salud requiere más que acciones aisladas. Por eso combinamos:",
  items = DEFAULT_ITEMS,
  imageSrc,
  imageAlt = "Profesionales de la salud",
}: WhoWeAccompanySectionProps) {
  return (
    <section
      className="bg-white py-16 lg:py-24"
      aria-labelledby="who-we-accompany-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <Label variant="primaryTight">{subtitle}</Label>
            <H2 id="who-we-accompany-heading" variant="compact">
              {title}
            </H2>
            <P variant="introNarrow">{intro}</P>

            <div className="border-l-4 border-primary pl-6 space-y-6">
              {items.map((item, index) => (
                <div key={index}>
                  <H3>{item.title}</H3>
                  <P variant="body">{item.description}</P>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] min-h-[320px] lg:min-h-[420px] bg-neutral-background">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-neutral-background to-primary/10 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-primary/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
