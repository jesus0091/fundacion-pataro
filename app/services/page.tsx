import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { H1, H2, Label, P } from "@/components/ui/Text";

import { SERVICES } from "@/lib/services";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicesPillarsSection from "@/components/sections/services/ServicesPillarsSection";

export const metadata: Metadata = {
  title: "Programas y Servicios | Fundación Patricio Pataro",
  description:
    "Conocé todos los programas y servicios de la Fundación Patricio Pataro: capacitación, becas, investigación, gestión asistencial, infraestructura y prevención.",
};

export default function ServicesPage() {
  return (
    <>
      <section
        className="pt-28 pb-12 relative lg:pt-28 lg:pb-28"
        aria-labelledby="services-heading"
      >
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/images/bg-hero.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
            aria-hidden
          />
        </div>
        <div className="max-w-7xl mx-auto px-10 sm:px-6 flex flex-col items-center text-center z-10">
          <AnimatedSection stagger className="max-w-2xl flex flex-col gap-3 items-center text-center">
            <span data-animate>
              <Label variant="secondary">Lo que hacemos</Label>
            </span>
            <H1 id="services-heading" data-animate>
              Programas y Servicios
            </H1>
            <P variant="body" className="text-center" data-animate>
              Trabajamos en cinco áreas estratégicas para transformar el sistema
              de salud a través de la formación, la investigación, la gestión y
              el compromiso social.
            </P>
          </AnimatedSection>
        </div>
      </section>

      <ServicesPillarsSection />

      <section
        className="py-12 sm:py-16 lg:py-24 bg-white"
        aria-labelledby="services-list-heading"
      >
        <div className="max-w-7xl mx-auto px-10 sm:px-6">
          <h2 id="services-list-heading" className="sr-only">
            Lista de programas
          </h2>

          <div className="flex flex-col gap-12 lg:gap-20">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.slug}>
                <article
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 !== 0 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className={`relative rounded-2xl overflow-hidden h-[280px] sm:h-[360px] lg:h-[440px] block group ${
                      index % 2 !== 0 ? "lg:[direction:ltr]" : ""
                    }`}
                    tabIndex={-1}
                    aria-hidden
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </Link>

                  <div
                    className={`flex flex-col gap-5 ${
                      index % 2 !== 0 ? "lg:[direction:ltr]" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      <Label variant="primaryTight">{service.title}</Label>
                      <H2 variant="section">{service.tagline}</H2>
                    </div>
                    <P variant="body">{service.shortDescription}</P>
                    <ul className="flex flex-col gap-2">
                      {service.benefits.slice(0, 3).map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-sm sm:text-base text-[#333333]"
                        >
                          <svg
                            className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2">
                      <Button href={`/services/${service.slug}`} variant="primary">
                        Ver más
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
