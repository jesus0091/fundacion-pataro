import Link from "next/link";

export interface ProgramItem {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
}

/** Contenido por defecto de la sección Programas (Figma node 2-756) */
const DEFAULT_PROGRAMS: ProgramItem[] = [
  {
    title: "Formación",
    description:
      "Educación médica continua para fortalecer el desarrollo profesional y elevar el estándar de atención en salud.",
    href: "/services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Innovación",
    description:
      "Investigación científica y tecnológica aplicada para transformar el conocimiento en soluciones reales.",
    href: "/services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Investigación",
    description:
      "Fomentamos la investigación científica y la innovación tecnológica para fortalecer el sistema de salud.",
    href: "/services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456zM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Gestión asistencial",
    description:
      "Fortalecemos la gestión asistencial y las acciones sociales para un impacto directo en la comunidad.",
    href: "/services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "Becas y programas",
    description:
      "Apoyamos la formación de profesionales de la salud en áreas de especialización para elevar la calidad asistencial.",
    href: "/services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
];

const DEFAULT_SUBTITLE =
  "Impulsamos la excelencia médica a través de cinco pilares: formación, innovación, investigación, gestión asistencial y becas que transforman el sistema de salud.";

interface ProgramsSectionProps {
  title?: string;
  subtitle?: string;
  programs?: ProgramItem[];
  ctaText?: string;
  ctaHref?: string;
}

/**
 * Sección Programas de Becas (Figma node 2-756).
 * Si no se pasan props, usa título, subtítulo y los 5 pilares por defecto.
 */
export default function ProgramsSection({
  title = "Programas de Becas",
  subtitle = DEFAULT_SUBTITLE,
  programs = DEFAULT_PROGRAMS,
  ctaText = "Ver todos los programas",
  ctaHref = "/services",
}: ProgramsSectionProps) {
  return (
    <section className="bg-white py-16 lg:py-24" aria-labelledby="programs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="programs-heading"
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-secondary mb-4 font-serif"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#333333] text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <article
              key={index}
              className="group bg-neutral-background rounded-2xl p-6 lg:p-7 border border-neutral-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {program.icon && (
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  {program.icon}
                </div>
              )}
              <h3 className="text-xl font-semibold text-secondary mb-2 font-serif">
                {program.title}
              </h3>
              <p className="text-[#333333] text-sm lg:text-base leading-relaxed mb-5">
                {program.description}
              </p>
              {program.href && (
                <Link
                  href={program.href}
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
                >
                  Conocer más
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              )}
            </article>
          ))}
        </div>

        {ctaText && ctaHref && (
          <div className="text-center mt-12 lg:mt-14">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              {ctaText}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
