import Hero from "@/components/sections/Hero";
import Section from "@/components/ui/Section";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Servicio 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/400x300?text=Servicio+1",
    },
    {
      title: "Servicio 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://via.placeholder.com/400x300?text=Servicio+2",
    },
    {
      title: "Servicio 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://via.placeholder.com/400x300?text=Servicio+3",
    },
  ];

  return (
    <>
      <Hero
        title="Bienvenido a Fundación Pataro"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ctaText="Conoce más"
        ctaLink="/about"
      />
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-heading-2 mb-4">Nuestros Servicios</h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <ServicesGrid services={services} />
        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="outline">Ver todos los servicios</Button>
          </Link>
        </div>
      </Section>
      <Section className="bg-neutral-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading-2 mb-6">Sobre Nosotros</h2>
          <p className="text-body-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-body-lg mb-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <Link href="/about">
            <Button>Conoce más sobre nosotros</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
