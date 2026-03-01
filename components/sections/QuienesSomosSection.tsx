import { Italiana } from "next/font/google";

const italiana = Italiana({ weight: "400", subsets: ["latin"] });

interface QuienesSomosSectionProps {
  title?: string;
  subtitle?: string;
  intro?: string;
  originTitle?: string;
  originContent?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function QuienesSomosSection({
  title = "Quiénes Somos",
  subtitle = "Fundación Patricia Pataro",
  intro = "Transformamos conocimiento en acción a través de cinco pilares fundamentales que fortalecen el sistema de salud.",
  originTitle = "El Origen",
  originContent,
  imageSrc,
  imageAlt = "Fundación Patricia Pataro",
}: QuienesSomosSectionProps) {
  const defaultOriginContent = `Nuestra historia nace del compromiso con la excelencia médica y el bienestar de las comunidades. Trabajamos desde la formación, la investigación y la gestión asistencial para generar un impacto real en el sistema de salud.`;

  const content = originContent ?? defaultOriginContent;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-3">
          {title}
        </h2>

        {/* Subtítulo con tipografía elegante */}
        <p
          className={`${italiana.className} text-2xl md:text-3xl text-primary mb-8`}
        >
          {subtitle}
        </p>

        {/* Párrafo introductorio */}
        <p className="text-lg text-[#333333] max-w-3xl mb-12 leading-relaxed">
          {intro}
        </p>

        {/* Bloque "El Origen" */}
        <div className="max-w-3xl">
          <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-4">
            {originTitle}
          </h3>
          <div className="space-y-4">
            {content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-[#333333] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Zona de imagen inferior (opcional) */}
        {imageSrc && (
          <div className="mt-12 w-full rounded-2xl overflow-hidden shadow-lg aspect-[21/9] max-h-80 bg-neutral-background">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {!imageSrc && (
          <div className="mt-12 w-full rounded-2xl overflow-hidden shadow-lg aspect-[21/9] max-h-80 bg-neutral-background flex items-center justify-center">
            <span className="text-[#333333] text-sm">
              Imagen de la fundación
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
