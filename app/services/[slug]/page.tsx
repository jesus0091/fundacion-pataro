import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { H1, H2, P } from "@/components/ui/Text";
import { getServiceBySlug, SERVICES } from "@/lib/services";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IconArrowLeft,
  IconBuildingHospital,
  IconCircleCheck,
  IconHeart,
  IconMicroscope,
  IconSchool,
  IconSettings,
} from "@tabler/icons-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const ICON_MAP: Record<string, React.ElementType> = {
  "capacitacion-y-becas": IconSchool,
  "investigacion-y-eventos-academicos": IconMicroscope,
  "gestion-asistencial": IconBuildingHospital,
  "infraestructura-medica": IconSettings,
  "impacto-social-y-prevencion": IconHeart,
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Fundación Patricio Pataro`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = ICON_MAP[service.slug] ?? IconHeart;
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section
        className="relative pt-28 pb-0 lg:pt-32 overflow-hidden"
        aria-labelledby="service-heading"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-10 sm:px-6 pb-16 lg:pb-24">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-10 transition-colors"
          >
            <IconArrowLeft className="w-4 h-4" stroke={2} aria-hidden />
            Volver a Programas y Servicios
          </Link>

          <AnimatedSection stagger className="max-w-3xl flex flex-col gap-5">
            <span
              data-animate
              className="inline-flex items-center gap-2 text-white/70 text-sm font-semibold"
            >
              <Icon className="w-5 h-5" stroke={1.5} aria-hidden />
              {service.title}
            </span>
            <H1
              id="service-heading"
              data-animate
              className="text-white"
            >
              {service.tagline}
            </H1>
            <P
              variant="body"
              data-animate
              className="text-white/85"
            >
              {service.shortDescription}
            </P>
          </AnimatedSection>
        </div>
      </section>

      <section
        className="py-12 sm:py-16 lg:py-24 bg-white"
        aria-labelledby="service-detail-heading"
      >
        <div className="max-w-7xl mx-auto px-10 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <AnimatedSection>
              <H2
                id="service-detail-heading"
                variant="section"
                className="font-sans text-[#333333]"
              >
                ¿En qué consiste?
              </H2>
            </AnimatedSection>
            <AnimatedSection className="flex flex-col gap-4">
              {service.fullDescription.map((paragraph, i) => (
                <P key={i} variant="body" className="text-justify">
                  {paragraph}
                </P>
              ))}
            </AnimatedSection>
          </div>

          <aside className="lg:col-span-5" aria-label="Beneficios clave">
            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-[#F0F6FE] to-[#E8F5E9] rounded-2xl p-8 lg:p-10">
                <h3 className="font-sans text-lg font-bold text-[#1F2933] mb-6">
                  Beneficios clave
                </h3>
                <ul className="flex flex-col gap-4">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#333333]"
                    >
                      <IconCircleCheck
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        stroke={1.5}
                        aria-hidden
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact" variant="primary">
                    Quiero saber más
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </aside>
        </div>
      </section>

      <section
        className="py-12 sm:py-16 lg:py-20 bg-[#F0F6FE]"
        aria-labelledby="other-services-heading"
      >
        <div className="max-w-7xl mx-auto px-10 sm:px-6">
          <AnimatedSection className="mb-8 lg:mb-10">
            <h2
              id="other-services-heading"
              className="font-sans text-xl sm:text-2xl font-bold text-[#1F2933]"
            >
              Otros programas
            </h2>
          </AnimatedSection>
          <AnimatedSection stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {otherServices.map((s) => {
              const OtherIcon = ICON_MAP[s.slug] ?? IconHeart;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col gap-3 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  data-animate
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-3 left-3">
                      <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        <OtherIcon className="w-5 h-5" stroke={1.5} aria-hidden />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-1">
                    <h3 className="font-sans text-sm sm:text-base font-bold text-[#1F2933] group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666666] line-clamp-2">
                      {s.shortDescription}
                    </p>
                  </div>
                </Link>
              );
            })}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
