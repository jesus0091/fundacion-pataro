import { H2, P } from "@/components/ui/Text";
import { IconBuildingCommunity, IconUsersGroup, IconWorld } from "@tabler/icons-react";

const SUBTITLE =
  "Diferenciales que marcan la diferencia en nuestra gestión y alcance";

const ITEMS = [
  {
    title: "Mentoría Activa",
    description:
      "Acompañamiento personalizado de profesionales experimentados que guían el desarrollo de nuevos talentos médicos.",
    Icon: IconUsersGroup,
  },
  {
    title: "Alianzas Globales",
    description:
      "Red internacional de instituciones académicas y científicas que amplifican nuestro impacto y alcance.",
    Icon: IconWorld,
  },
  {
    title: "Gestión Sin Fines de Lucro",
    description:
      "Cada peso invertido se destina íntegramente a mejorar la formación médica y la atención a pacientes.",
    Icon: IconBuildingCommunity,
  },
];

export default function AboutDifferentiatorsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white" aria-labelledby="differentiators-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-10 lg:mb-12">
          <H2 id="differentiators-heading" variant="section" className="mb-3 font-sans text-[#333333]">
            Lo que nos hace únicos
          </H2>
          <P variant="body" className="text-center max-w-2xl mx-auto">
            {SUBTITLE}
          </P>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 lg:p-8 rounded-2xl"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-primary-50 flex items-center justify-center text-primary mb-5 flex-shrink-0">
                <item.Icon className="w-7 h-7 lg:w-8 lg:h-8" stroke={1.5} aria-hidden />
              </div>
              <h3 className="font-sans text-lg sm:text-xl font-bold text-[#333333] mb-3">
                {item.title}
              </h3>
              <P variant="small" className="text-center">
                {item.description}
              </P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
