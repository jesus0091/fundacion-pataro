const DEFAULT_BG_IMAGE = "/images/banner_1_.webp";

interface HomepageCtaSectionProps {
  /** URL de la imagen de fondo (handshake/colaboración). Opcional. */
  backgroundImageSrc?: string;
}

import { P } from "@/components/ui/Text";

/**
 * Última sección de la homepage: tarjeta con imagen de fondo, overlay azul→verde,
 * logo FPP y frase de creencia. Texto fijo.
 */
export default function HomepageCtaSection({
  backgroundImageSrc = DEFAULT_BG_IMAGE,
}: HomepageCtaSectionProps) {
  return (
    <section
      className="py-16 lg:py-24 bg-white"
      aria-labelledby="homepage-cta-heading"
    >
      <h2 id="homepage-cta-heading" className="sr-only">
        Nuestra creencia
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden min-h-[280px] lg:min-h-[320px] flex items-center">
          {/* Imagen de fondo (handshake) con blur */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{
                backgroundImage: `url(${backgroundImageSrc})`,
                filter: "blur(4px)",
              }}
            />
            
          </div>

          {/* Contenido: logo FPP + texto, alineado a la izquierda */}
          <div className="relative z-10 p-8 lg:p-12 max-w-xl">
            <div className="inline-flex items-center justify-center rounded-full bg-secondary px-4 py-2 mb-6">
              <span className="text-white font-bold text-sm uppercase tracking-wide">
                FPP
              </span>
            </div>
            <P variant="overlay">
              Creemos que una mejor salud se construye cuando el conocimiento
              médico, la innovación y el compromiso humano trabajan juntos.
            </P>
          </div>
        </div>
      </div>
    </section>
  );
}
