import Section from "@/components/ui/Section";
import ServicesGrid from "@/components/sections/ServicesGrid";

export default function ServicesPage() {
  const services = [
    {
      title: "Servicio 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "https://via.placeholder.com/400x300?text=Servicio+1",
    },
    {
      title: "Servicio 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      image: "https://via.placeholder.com/400x300?text=Servicio+2",
    },
    {
      title: "Servicio 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: "https://via.placeholder.com/400x300?text=Servicio+3",
    },
    {
      title: "Servicio 4",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
      image: "https://via.placeholder.com/400x300?text=Servicio+4",
    },
    {
      title: "Servicio 5",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      image: "https://via.placeholder.com/400x300?text=Servicio+5",
    },
    {
      title: "Servicio 6",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.",
      image: "https://via.placeholder.com/400x300?text=Servicio+6",
    },
  ];

  return (
    <>
      <Section padding="small" className="bg-neutral-background">
        <div className="text-center">
          <h1 className="text-heading-1 mb-4">Nuestros Servicios</h1>
          <p className="text-body-lg max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios para satisfacer tus necesidades
          </p>
        </div>
      </Section>
      <Section>
        <ServicesGrid services={services} />
      </Section>
      <Section className="bg-neutral-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading-2 mb-6">¿Necesitas más información?</h2>
          <p className="text-body-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Contacta con nosotros para conocer más
            detalles sobre nuestros servicios.
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Contáctanos
          </a>
        </div>
      </Section>
    </>
  );
}
