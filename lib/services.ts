export interface SubProgram {
  title: string;
  description: string;
  relatedSlug?: string;
}

export interface HowToParticipateStep {
  step: string;
  description: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  image: string;
  benefits: string[];
  audience: string[];
  results: string[];
  subprograms: SubProgram[];
  howToParticipate: HowToParticipateStep[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "capacitacion-y-becas",
    title: "Capacitación y Becas",
    tagline: "Formación de excelencia para profesionales de la salud",
    shortDescription:
      "Formamos y acompañamos a médicos residentes y profesionales de la salud, facilitando becas, programas y desarrollo continuo.",
    fullDescription: [
      "La calidad del sistema de salud depende directamente de la calidad de quienes lo integran. Por eso, nuestro programa de Capacitación y Becas nació con una convicción clara: ningún profesional con vocación debería ver truncado su desarrollo por una barrera económica o de acceso.",
      "Trabajamos en estrecha colaboración con instituciones académicas de referencia nacional e internacional para ofrecer becas de residencia, programas de especialización y cursos de actualización que se adaptan a las necesidades reales del sistema de salud argentino.",
      "Además de la formación formal, apostamos al aprendizaje práctico y la mentoría como herramientas clave. Cada profesional que transita nuestros programas cuenta con el acompañamiento de especialistas con trayectoria, que transmiten no solo conocimiento técnico sino también criterio clínico y vocación de servicio.",
    ],
    image: "/images/service-1.png",
    benefits: [
      "Becas completas y parciales para residentes y especialistas",
      "Acceso a programas de formación continua acreditados",
      "Alianzas con instituciones académicas líderes del país",
      "Mentorías personalizadas con especialistas de trayectoria",
      "Certificaciones reconocidas a nivel nacional e internacional",
    ],
    audience: [
      "Médicos residentes",
      "Especialistas en formación",
      "Enfermeros y técnicos de salud",
      "Profesionales del sector público",
      "Estudiantes de ciencias de la salud",
    ],
    results: [
      "Profesionales con mayor capacitación clínica y criterio médico",
      "Reducción de brechas en la calidad asistencial entre regiones",
      "Acceso a especialidades antes económicamente inalcanzables",
      "Redes de colaboración entre profesionales formados en el programa",
    ],
    subprograms: [
      {
        title: "Becas de Residencia",
        description:
          "Financiamiento total o parcial de residencias médicas en instituciones de referencia, con acompañamiento académico durante todo el período de formación.",
      },
      {
        title: "Cursos de RCP y DEA",
        description:
          "Formación certificada en reanimación cardiopulmonar y uso del desfibrilador externo automático para profesionales de la salud. Para empresas e instituciones, contamos con un programa presencial dedicado con certificación AHA.",
        relatedSlug: "rcp-dea-empresas",
      },
      {
        title: "Programa de Especialización",
        description:
          "Acceso a cursos de posgrado en áreas críticas del sistema de salud: emergentología, terapia intensiva, cirugía y medicina interna, entre otras.",
      },
      {
        title: "Mentorías Clínicas",
        description:
          "Acompañamiento personalizado de residentes y jóvenes especialistas por profesionales con amplia trayectoria en el ámbito público y privado.",
      },
    ],
    howToParticipate: [
      {
        step: "Completá el formulario",
        description:
          "Ingresá a nuestra sección de contacto y completá el formulario indicando el programa de tu interés y tu situación académica actual.",
      },
      {
        step: "Presentá tu documentación",
        description:
          "Enviá tu currículum académico, certificados de título y una carta de motivación explicando tu proyecto profesional.",
      },
      {
        step: "Entrevista de selección",
        description:
          "El comité de becas evaluará tu postulación y te contactará para coordinar una entrevista personal o virtual.",
      },
      {
        step: "Incorporación al programa",
        description:
          "Una vez seleccionado, accedés a todos los recursos del programa: financiamiento, materiales, acceso a eventos y red de mentores.",
      },
    ],
  },
  {
    slug: "investigacion-y-eventos-academicos",
    title: "Investigación y Eventos Académicos",
    tagline: "Intercambio científico para transformar el conocimiento",
    shortDescription:
      "Impulsamos el intercambio científico mediante congresos, simposios y ateneos, y apoyamos proyectos de investigación aplicada.",
    fullDescription: [
      "El conocimiento sin difusión no transforma. Por eso, nuestra área de Investigación y Eventos Académicos trabaja en dos frentes simultáneos: financiar el desarrollo del conocimiento y garantizar que ese conocimiento llegue a quienes pueden aplicarlo en la práctica clínica.",
      "Apoyamos proyectos de investigación aplicada en áreas estratégicas como cardiología, oncología, infectología y medicina de urgencias, con especial énfasis en estudios que tengan potencial de impacto directo en la calidad de atención al paciente en el contexto local.",
      "Nuestros eventos académicos —congresos, simposios y ateneos— son espacios de encuentro entre la evidencia científica y la realidad clínica, donde investigadores, especialistas y médicos de guardia comparten hallazgos, debaten protocolos y construyen redes de colaboración que perduran más allá del evento.",
    ],
    image: "/images/service-2.png",
    benefits: [
      "Financiamiento de proyectos de investigación aplicada",
      "Organización de congresos y simposios con disertantes internacionales",
      "Apoyo en publicación en revistas científicas indexadas",
      "Red de colaboración entre investigadores de todo el país",
      "Acceso a plataformas de difusión científica nacional e internacional",
    ],
    audience: [
      "Investigadores médicos",
      "Médicos especialistas",
      "Universidades y facultades de medicina",
      "Centros hospitalarios de alta complejidad",
      "Residentes con proyectos de investigación",
    ],
    results: [
      "Publicaciones científicas en revistas de alto impacto",
      "Patentes y avances médicos desarrollados localmente",
      "Redes de colaboración entre instituciones fortalecidas",
      "Mayor transferencia de conocimiento hacia la práctica clínica",
    ],
    subprograms: [
      {
        title: "Congresos Médicos",
        description:
          "Encuentros académicos nacionales con panelistas de referencia internacional, orientados a la actualización en especialidades médicas de alta demanda.",
      },
      {
        title: "Financiamiento de Investigación",
        description:
          "Fondos destinados a proyectos de investigación aplicada con potencial impacto clínico, evaluados por un comité científico independiente.",
      },
      {
        title: "Ateneos y Simposios",
        description:
          "Espacios de discusión científica para el intercambio de casos clínicos complejos, nuevos hallazgos y revisión de protocolos de tratamiento.",
      },
      {
        title: "Publicaciones y Difusión",
        description:
          "Acompañamiento en el proceso de publicación de resultados de investigación y difusión en medios científicos y académicos nacionales.",
      },
    ],
    howToParticipate: [
      {
        step: "Presentá tu propuesta",
        description:
          "Enviá el resumen de tu proyecto de investigación o propuesta de ponencia al comité académico a través del formulario de contacto.",
      },
      {
        step: "Evaluación por pares",
        description:
          "El comité científico evaluará la pertinencia, viabilidad e impacto potencial del proyecto o presentación propuesta.",
      },
      {
        step: "Confirmación y recursos",
        description:
          "Una vez aprobada la participación, se asignan los recursos necesarios: financiamiento, espacio en el evento o acceso a plataformas.",
      },
      {
        step: "Presentación y seguimiento",
        description:
          "Participás del evento o comenzás el proyecto con seguimiento periódico por parte del equipo académico de la fundación.",
      },
    ],
  },
  {
    slug: "gestion-asistencial",
    title: "Gestión Asistencial",
    tagline: "Centros médicos de calidad, sin fines de lucro",
    shortDescription:
      "Desarrollamos y administramos centros médicos y quirúrgicos, brindando atención directa de calidad accesible para todos.",
    fullDescription: [
      "La gestión asistencial es el punto donde nuestra misión se vuelve concreta: personas reales recibiendo atención médica real, sin que su situación económica determine la calidad del cuidado que merecen.",
      "Desarrollamos y administramos centros médicos y quirúrgicos con vocación de servicio público, integrando estándares internacionales de calidad asistencial con un enfoque profundamente humanista. Cada proceso, cada protocolo y cada decisión administrativa están orientados al bienestar del paciente.",
      "Trabajamos con criterios de mejora continua y auditamos permanentemente nuestros procesos para asegurar que la atención brindada en nuestros centros esté siempre a la altura de lo que cada paciente merece, sin importar su cobertura médica ni su situación socioeconómica.",
    ],
    image: "/images/service-3.png",
    benefits: [
      "Atención médica de calidad sin importar la situación económica",
      "Administración con estándares internacionales de calidad",
      "Gestión sin fines de lucro con enfoque en el paciente",
      "Procesos de mejora continua y auditoría permanente",
      "Derivación coordinada a especialistas según necesidad",
    ],
    audience: [
      "Pacientes con y sin cobertura médica",
      "Comunidades con acceso limitado a medicina de calidad",
      "Personas que requieren cirugías programadas",
      "Pacientes crónicos que necesitan seguimiento continuo",
    ],
    results: [
      "Atención médica accesible para personas sin cobertura",
      "Reducción de tiempos de espera en procedimientos programados",
      "Mejora en la continuidad y seguimiento del tratamiento",
      "Mayor satisfacción y confianza del paciente en el sistema de salud",
    ],
    subprograms: [
      {
        title: "Consultorios de Atención Ambulatoria",
        description:
          "Consultas médicas con especialistas para atención programada y urgencias de baja complejidad, con acceso sin restricciones por cobertura.",
      },
      {
        title: "Gestión Quirúrgica",
        description:
          "Administración de salas de cirugía para intervenciones programadas y de urgencia, con equipo médico especializado y equipamiento de alta calidad.",
      },
      {
        title: "Programa de Seguimiento Post-Tratamiento",
        description:
          "Acompañamiento continuo después de cada intervención para asegurar la recuperación, adherencia al tratamiento y detección temprana de complicaciones.",
      },
      {
        title: "Cobertura y Accesibilidad",
        description:
          "Gestión activa para garantizar que personas sin cobertura o con coberturas limitadas puedan acceder a la atención que necesitan.",
      },
    ],
    howToParticipate: [
      {
        step: "Consultá disponibilidad",
        description:
          "Comunicáte con nuestros centros médicos para verificar disponibilidad de turnos con los especialistas que necesitás.",
      },
      {
        step: "Presentá tu documentación",
        description:
          "Llevá tu documento de identidad y, si tenés, la documentación de tu cobertura médica. Si no tenés cobertura, igual podés atenderte.",
      },
      {
        step: "Atención por especialista",
        description:
          "Recibirás atención médica de calidad con historial clínico centralizado para asegurar la continuidad de tu tratamiento.",
      },
      {
        step: "Seguimiento y derivación",
        description:
          "Después de la consulta, el equipo médico coordinará el seguimiento necesario y la derivación a otros especialistas si corresponde.",
      },
    ],
  },
  {
    slug: "infraestructura-medica",
    title: "Infraestructura Médica",
    tagline: "Tecnología de vanguardia al servicio de la salud",
    shortDescription:
      "Invertimos en equipamiento médico de última generación y en la modernización de instalaciones para elevar el estándar de atención.",
    fullDescription: [
      "Un diagnóstico preciso depende de herramientas precisas. La brecha tecnológica en el sistema de salud es una de las causas más silenciosas e impactantes de la desigualdad en la calidad de atención médica, especialmente en el sector público y en las regiones del interior del país.",
      "Nuestra área de Infraestructura Médica trabaja para cerrar esa brecha: financiamos la adquisición de equipos de diagnóstico por imágenes, modernizamos laboratorios clínicos e instalamos tecnología quirúrgica de última generación en instituciones que, por sus propios medios, no podrían acceder a ella.",
      "Cada inversión en infraestructura es una decisión estratégica que multiplica su impacto: un equipo de resonancia magnética instalado en un hospital del interior beneficia no solo a los pacientes actuales, sino a generaciones de personas que accederán a diagnósticos más precisos y tratamientos más efectivos.",
    ],
    image: "/images/service-4.png",
    benefits: [
      "Equipamiento de diagnóstico por imágenes de alta resolución",
      "Modernización de quirófanos con tecnología de última generación",
      "Actualización de laboratorios clínicos e instalaciones",
      "Instalación de DEA en instituciones médicas y espacios estratégicos",
      "Capacitación del personal en el uso del nuevo equipamiento",
    ],
    audience: [
      "Hospitales públicos de alta y mediana complejidad",
      "Centros de salud comunitarios",
      "Clínicas privadas sin fines de lucro",
      "Laboratorios de análisis clínico",
      "Instituciones en regiones con baja inversión sanitaria",
    ],
    results: [
      "Mayor precisión en el diagnóstico temprano de enfermedades",
      "Reducción de derivaciones innecesarias a centros de mayor complejidad",
      "Mejora en los tiempos y calidad de intervenciones quirúrgicas",
      "Personal capacitado para el uso óptimo del equipamiento instalado",
    ],
    subprograms: [
      {
        title: "Equipamiento Diagnóstico",
        description:
          "Adquisición e instalación de equipos de resonancia magnética, tomografía, ecografía y diagnóstico de laboratorio en instituciones con necesidades identificadas.",
      },
      {
        title: "Modernización Quirúrgica",
        description:
          "Renovación integral de salas de cirugía con equipamiento de última generación, sistemas de monitoreo avanzado y tecnología de mínima invasión.",
      },
      {
        title: "Laboratorios de Investigación",
        description:
          "Mejora de infraestructura en laboratorios clínicos y de investigación para análisis de alta complejidad y proyectos científicos aplicados.",
      },
      {
        title: "Instalación de DEA",
        description:
          "Colocación de desfibriladores automáticos externos (DEA) en instituciones médicas, empresas, escuelas y espacios públicos de alta concurrencia, con capacitación incluida.",
      },
    ],
    howToParticipate: [
      {
        step: "Solicitá una evaluación",
        description:
          "Completá el formulario de contacto indicando el tipo de institución, la cantidad de pacientes atendidos y las necesidades de infraestructura detectadas.",
      },
      {
        step: "Visita técnica",
        description:
          "Nuestro equipo técnico realizará una visita para relevar el estado actual del equipamiento e instalaciones y dimensionar la intervención necesaria.",
      },
      {
        step: "Propuesta de intervención",
        description:
          "Te presentaremos un plan de trabajo con cronograma, equipamiento propuesto y condiciones de la donación o colaboración.",
      },
      {
        step: "Ejecución y capacitación",
        description:
          "Instalamos el equipamiento y capacitamos al personal médico y técnico en su uso correcto y mantenimiento preventivo.",
      },
    ],
  },
  {
    slug: "impacto-social-y-prevencion",
    title: "Impacto Social y Prevención",
    tagline: "Salud preventiva y acción comunitaria",
    shortDescription:
      "Desarrollamos campañas benéficas, cursos de primeros auxilios y programas de concientización para fortalecer la salud comunitaria.",
    fullDescription: [
      "La mejor intervención médica es la que no necesita realizarse. La salud preventiva es la herramienta más poderosa y menos costosa para mejorar la calidad de vida de una comunidad, y también la más desatendida por los sistemas de salud tradicionales.",
      "Nuestro programa de Impacto Social y Prevención lleva la salud directamente a las comunidades: organizamos jornadas de chequeo gratuito, formamos a personas comunes en reanimación cardiopulmonar (RCP) y uso de desfibriladores (DEA), y desarrollamos campañas de concientización sobre los principales factores de riesgo para la salud en Argentina.",
      "Trabajamos junto a escuelas, empresas, clubes y organizaciones sociales para construir comunidades más preparadas, más conscientes y más saludables. Porque la salud no empieza en el hospital: empieza en la educación, en la prevención y en la capacidad de actuar en el momento crítico.",
    ],
    image: "/images/service-5.png",
    benefits: [
      "Cursos de RCP y DEA para personas sin formación médica",
      "Jornadas de chequeo preventivo gratuitas en la comunidad",
      "Campañas sobre factores de riesgo cardiovascular y crónico",
      "Programas de prevención de accidentes de tránsito",
      "Materiales educativos para continuar la formación después del taller",
    ],
    audience: [
      "Comunidad en general",
      "Escuelas y universidades",
      "Empresas y organizaciones",
      "Clubes deportivos y sociales",
      "Organizaciones comunitarias y vecinales",
    ],
    results: [
      "Comunidades capacitadas para actuar ante una emergencia cardíaca",
      "Mayor detección temprana de enfermedades crónicas no diagnosticadas",
      "Reducción de incidentes por falta de conocimiento básico en salud",
      "Cultura de prevención fortalecida en escuelas, empresas y comunidades",
    ],
    subprograms: [
      {
        title: "Cursos de RCP y DEA Comunitarios",
        description:
          "Capacitación certificada en reanimación cardiopulmonar y uso del desfibrilador automático externo, dirigida a personas sin formación médica previa: empleados, docentes, deportistas y ciudadanos en general.",
      },
      {
        title: "Prevención de Accidentes de Tránsito",
        description:
          "Campañas de educación vial y concientización sobre seguridad en el tránsito, desarrolladas en escuelas secundarias, empresas de logística y espacios públicos de alta concurrencia.",
      },
      {
        title: "Jornadas de Salud Preventiva",
        description:
          "Operativos gratuitos con controles de presión arterial, glucemia, colesterol y detección temprana de enfermedades crónicas, realizados en barrios, clubes y centros comunitarios.",
      },
      {
        title: "Educación en Salud Comunitaria",
        description:
          "Talleres sobre alimentación saludable, salud mental, prevención de adicciones, vacunación e higiene para comunidades con acceso limitado a información médica de calidad.",
      },
    ],
    howToParticipate: [
      {
        step: "Solicitá el programa",
        description:
          "Completá el formulario de contacto indicando el tipo de programa que necesitás, la institución o grupo al que pertenecés y la cantidad estimada de participantes.",
      },
      {
        step: "Coordinación previa",
        description:
          "Nuestro equipo se contactará para adaptar el programa a las necesidades específicas de tu comunidad u organización y coordinar fechas y logística.",
      },
      {
        step: "Ejecución del programa",
        description:
          "El equipo de la fundación se presenta en el espacio designado con todos los materiales, equipos y profesionales necesarios para desarrollar la actividad.",
      },
      {
        step: "Seguimiento y recursos",
        description:
          "Después de la actividad, te enviamos materiales educativos digitales para que los participantes puedan repasar y profundizar lo aprendido.",
      },
    ],
  },
  {
    slug: "rcp-dea-empresas",
    title: "RCP, DEA y Primeros Auxilios",
    tagline: "Preparamos a tu equipo para salvar vidas",
    shortDescription:
      "Capacitamos a empresas e instituciones en Primeros Auxilios, RCP y uso del DEA, cumpliendo con la Ley 27.159 y los protocolos internacionales AHA e ILCOR 2025.",
    fullDescription: [
      "En Argentina muere una persona cada 7 minutos por causa cardiovascular. Actuar con rapidez y conocimiento en los primeros 4 minutos puede marcar la diferencia entre la vida y la muerte. Nuestro programa de capacitación pone ese conocimiento en manos de tu organización.",
      "La Ley Nacional 27.159 exige personal capacitado en RCP y DEA en espacios de alta circulación y en lugares de actividades deportivas. Más allá del cumplimiento legal, capacitar a tu equipo es una decisión concreta de proteger a las personas y reducir la responsabilidad civil ante una emergencia real.",
      "Nuestro programa está diseñado para ser de fácil comprensión, permitiendo que cualquier persona —sin conocimientos médicos previos— aprenda a reconocer una emergencia, activar el sistema de auxilio y aplicar maniobras de RCP y DEA hasta la llegada de los servicios de emergencia. 3 horas teórico-prácticas con certificación institucional avalada por la American Heart Association (AHA) e ILCOR 2025.",
    ],
    image: "/images/service-6.webp",
    benefits: [
      "Cumplimiento de la Ley 27.159 y normativa sanitaria vigente",
      "Certificación institucional con validez anual (AHA / ILCOR 2025)",
      "Simuladores de RCP y DEA de entrenamiento incluidos",
      "Material didáctico y asesoramiento técnico incluidos",
      "Posibilidad de integrar el programa a acciones de RSE",
    ],
    audience: [
      "Empresas y organizaciones privadas",
      "Instituciones educativas",
      "Clubes deportivos y gimnasios",
      "Espacios públicos de alta circulación",
      "Organismos públicos y municipales",
    ],
    results: [
      "Personal preparado para actuar ante un paro cardiorrespiratorio",
      "Cumplimiento legal y reducción de riesgo civil ante emergencias",
      "Mejora del clima organizacional y compromiso del equipo",
      "Comunidad laboral más segura y consciente de la salud",
    ],
    subprograms: [
      {
        title: "Primeros Auxilios Generales",
        description:
          "Módulos de urgencias y emergencias, bioseguridad, escena segura, pérdida de conocimiento, convulsiones, quemaduras, control de hemorragias, ACV, infarto y atragantamiento con maniobra de Heimlich.",
      },
      {
        title: "RCP en Adultos, Niños y Lactantes",
        description:
          "Formación práctica en reanimación cardiopulmonar según los protocolos más actualizados de la AHA e ILCOR 2025, con simuladores certificados incluidos en la jornada.",
      },
      {
        title: "Uso Correcto del DEA",
        description:
          "Instrucción teórico-práctica sobre el desfibrilador externo automático (DEA) en situaciones de muerte súbita, con equipos de entrenamiento proporcionados por la fundación.",
      },
      {
        title: "Certificación Institucional",
        description:
          "Al finalizar, cada participante recibe una Certificación de Entrenamiento en RCP y DEA con validez anual, conforme a los lineamientos de la American Heart Association (AHA) e ILCOR 2025.",
      },
    ],
    howToParticipate: [
      {
        step: "Solicitá información",
        description:
          "Completá el formulario de contacto indicando el tipo de organización, la cantidad estimada de participantes y tu disponibilidad horaria.",
      },
      {
        step: "Propuesta a medida",
        description:
          "Nuestro equipo te contactará para adaptar el programa a las necesidades de tu empresa y coordinar fecha, lugar y logística.",
      },
      {
        step: "Capacitación presencial",
        description:
          "Un instructor certificado se presenta con todos los materiales: simuladores de RCP, DEA de entrenamiento y material didáctico.",
      },
      {
        step: "Certificación del equipo",
        description:
          "Al finalizar la jornada de 3 horas, todos los participantes reciben su certificado institucional con validez anual.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
