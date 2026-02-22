import { H4, P } from "@/components/ui/Text";

const INFO = [
  {
    title: "Ubicación",
    content: "Billinghurst 19, Ciudad Autónoma de Buenos Aires. Argentina",
  },
  {
    title: "Email",
    content: "info@fpp.org.ar",
    href: "mailto:info@fpp.org.ar",
  },
  {
    title: "Horarios de Atención",
    contentLines: ["Lunes a Viernes: 9:00 - 17:00 hs", "Sábados y Domingos: Cerrado"],
  },
];

export default function ContactInfoSection() {
  return (
    <div className="flex flex-col gap-8">
      <H4 className="mb-2">Información de contacto</H4>
      <ul className="flex flex-col gap-6">
        {INFO.map((item, i) => (
          <li key={i}>
            <H4 className="text-base font-semibold text-secondary mb-1">{item.title}</H4>
            {"href" in item && item.href ? (
              <a href={item.href} className="text-neutral-text-light hover:text-primary transition-colors">
                <P variant="body">{item.content}</P>
              </a>
            ) : "contentLines" in item ? (
              <div className="text-neutral-text-light text-base leading-relaxed">
                {item.contentLines.map((line, j) => (
                  <span key={j} className="block">
                    {line}
                  </span>
                ))}
              </div>
            ) : (
              <P variant="body">{item.content}</P>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
