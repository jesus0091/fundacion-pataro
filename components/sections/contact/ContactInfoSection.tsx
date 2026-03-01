import { IconMapPin } from "@tabler/icons-react";
import { H1, Label, P } from "@/components/ui/Text";

const INTRO =
  "Tu mensaje es el primer paso para generar un cambio. Escribinos y nos pondremos en contacto a la brevedad.";

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

const MAP_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=-58.405%2C-34.602%2C-58.391%2C-34.588&layer=mapnik&marker=-34.595%2C-58.398";

export default function ContactInfoSection() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <Label variant="primary">Hablemos</Label>
        <H1 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl">
          Contacto
        </H1>
        <P variant="body">{INTRO}</P>
      </header>
      <ul className="flex flex-col gap-6">
        {INFO.map((item, i) => (
          <li key={i} className="flex gap-3">
            <IconMapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
            <div>
              <span className="font-semibold text-[#333333] block mb-1">{item.title}</span>
              {"href" in item && item.href ? (
                <a href={item.href} className="text-[#333333] hover:text-primary transition-colors">
                  <P variant="body">{item.content}</P>
                </a>
              ) : "contentLines" in item && item.contentLines ? (
                <div className="text-[#333333] text-sm sm:text-base leading-relaxed">
                  {item.contentLines.map((line, j) => (
                    <span key={j} className="block">
                      {line}
                    </span>
                  ))}
                </div>
              ) : (
                <P variant="body">{item.content}</P>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="rounded-xl overflow-hidden border border-neutral-border aspect-[4/3] min-h-[200px] bg-neutral-background">
        <iframe
          title="Ubicación - Billinghurst 19, CABA"
          src={MAP_EMBED_URL}
          width="100%"
          height="100%"
          className="w-full h-full min-h-[200px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
