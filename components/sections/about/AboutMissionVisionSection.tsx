import { H2, H4, P } from "@/components/ui/Text";

const MISSION =
  "Promover la formación continua, la investigación y la asistencia médica integral, facilitando recursos, becas y alianzas estratégicas que potencien la excelencia de los profesionales de la salud y el bienestar de los pacientes.";

const VISION =
  "Ser un referente regional en medicina científica y tecnológica, transformando el futuro de la salud mediante la capacitación de vanguardia y la gestión de centros asistenciales sin fines de lucro.";

export default function AboutMissionVisionSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex flex-col gap-4">
            <H4>Misión</H4>
            <P variant="body">{MISSION}</P>
          </div>
          <div className="flex flex-col gap-4">
            <H4>Visión</H4>
            <P variant="body">{VISION}</P>
          </div>
        </div>
      </div>
    </section>
  );
}
