export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  image: string;
  benefits: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "capacitacion-y-becas",
    title: "Capacitación y Becas",
    tagline: "Formación de excelencia para profesionales de la salud",
    shortDescription:
      "Formamos y acompañamos a médicos residentes y profesionales de la salud, facilitando becas, programas y desarrollo continuo.",
    fullDescription: [
      "Nuestro programa de Capacitación y Becas está diseñado para acompañar a médicos residentes y profesionales de la salud en cada etapa de su desarrollo profesional.",
      "Facilitamos el acceso a becas de formación, cursos de actualización y programas de desarrollo continuo, en alianza con instituciones académicas de referencia nacional e internacional.",
      "Creemos que la excelencia médica comienza con una formación sólida, accesible y de vanguardia, y trabajamos cada día para hacer eso posible.",
    ],
    image: "/images/service-1.png",
    benefits: [
      "Becas para residentes y especialistas",
      "Acceso a programas de formación continua",
      "Alianzas con instituciones académicas líderes",
      "Mentorías personalizadas con profesionales expertos",
      "Certificaciones reconocidas a nivel nacional e internacional",
    ],
  },
  {
    slug: "investigacion-y-eventos-academicos",
    title: "Investigación y Eventos Académicos",
    tagline: "Intercambio científico para transformar el conocimiento",
    shortDescription:
      "Impulsamos el intercambio científico mediante congresos, simposios y ateneos, y apoyamos proyectos de investigación.",
    fullDescription: [
      "La investigación científica y los eventos académicos son pilares fundamentales de nuestra misión. Apoyamos proyectos de investigación aplicada y facilitamos espacios de intercambio de conocimiento.",
      "Organizamos y co-organizamos congresos, simposios y ateneos médicos, generando redes de colaboración entre profesionales e instituciones de todo el país.",
      "Nuestro objetivo es que el conocimiento generado en los centros de investigación llegue rápidamente a la práctica clínica, mejorando la calidad de atención a los pacientes.",
    ],
    image: "/images/service-2.png",
    benefits: [
      "Apoyo a proyectos de investigación aplicada",
      "Organización de congresos y simposios médicos",
      "Publicaciones y difusión científica",
      "Red de colaboración entre investigadores",
      "Financiamiento de estudios y ensayos clínicos",
    ],
  },
  {
    slug: "gestion-asistencial",
    title: "Gestión Asistencial",
    tagline: "Centros médicos de calidad, sin fines de lucro",
    shortDescription:
      "Desarrollamos y administramos centros médicos y quirúrgicos, brindando atención directa de calidad.",
    fullDescription: [
      "Desarrollamos y administramos centros médicos y quirúrgicos con el objetivo de brindar atención directa de calidad, accesible y sin fines de lucro.",
      "Nuestra gestión asistencial integra estándares internacionales de calidad, procesos de mejora continua y un enfoque centrado en el paciente.",
      "Trabajamos para que cada persona que acceda a nuestros centros reciba la mejor atención posible, independientemente de su situación económica.",
    ],
    image: "/images/service-3.png",
    benefits: [
      "Administración de centros médicos y quirúrgicos",
      "Estándares internacionales de calidad asistencial",
      "Atención centrada en el paciente",
      "Gestión sin fines de lucro",
      "Programas de mejora continua de procesos",
    ],
  },
  {
    slug: "infraestructura-medica",
    title: "Infraestructura Médica",
    tagline: "Tecnología de vanguardia al servicio de la salud",
    shortDescription:
      "Invertimos en equipamiento médico de última generación y en la modernización de instalaciones.",
    fullDescription: [
      "La infraestructura médica es un factor determinante en la calidad de la atención. Por eso, invertimos en la adquisición y mantenimiento de equipamiento de última generación.",
      "Apoyamos la modernización de instalaciones en centros médicos aliados, asegurando que los profesionales cuenten con las herramientas necesarias para brindar la mejor atención.",
      "Nuestra inversión en infraestructura es un compromiso a largo plazo con la excelencia médica y el bienestar de los pacientes.",
    ],
    image: "/images/service-4.png",
    benefits: [
      "Equipamiento médico de última generación",
      "Modernización de instalaciones",
      "Mantenimiento y actualización tecnológica",
      "Diagnóstico por imágenes de alta resolución",
      "Salas quirúrgicas equipadas con tecnología avanzada",
    ],
  },
  {
    slug: "impacto-social-y-prevencion",
    title: "Impacto Social y Prevención",
    tagline: "Salud preventiva y acción comunitaria",
    shortDescription:
      "Desarrollamos campañas benéficas, acciones de salud preventiva y programas de concientización.",
    fullDescription: [
      "La prevención es la forma más eficiente de mejorar la salud pública. Desarrollamos campañas benéficas y programas de concientización para llegar a las comunidades con mayor vulnerabilidad.",
      "Organizamos jornadas de salud preventiva, talleres de educación para la salud y acciones comunitarias que generan impacto real en la calidad de vida de las personas.",
      "Trabajamos junto a organizaciones comunitarias y organismos públicos para amplificar el alcance de nuestras acciones y construir una sociedad más saludable.",
    ],
    image: "/images/service-5.png",
    benefits: [
      "Campañas de salud preventiva comunitaria",
      "Talleres de educación para la salud",
      "Jornadas de chequeos médicos gratuitos",
      "Programas de concientización sobre enfermedades crónicas",
      "Alianzas con organizaciones comunitarias",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
