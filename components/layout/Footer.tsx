import { H2, P } from "@/components/ui/Text";
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

import { Button } from "@/components/ui/Button";
import { FirmaLogo } from "@/components/ui/FirmaLogo";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  ctaTitle?: string;
  ctaDescription?: string;
}

export default function Footer({
  ctaTitle = "Construyamos juntos el futuro de la salud",
  ctaDescription = "La excelencia médica se construye con conocimiento, innovación y compromiso. Sumarte también es parte del cambio.",
}: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-white p-3 rounded-t-[50px] relative overflow-hidden">
            <div className="absolute inset-0 z-[-1]">
                <Image
                    src="/images/bg-cta.webp"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
            <div className="relative py-16 lg:py-20 overflow-hidden">
                <header className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-4">
                    <H2 id="footer-cta-heading">{ctaTitle}</H2>
                    <P variant="body">{ctaDescription}</P>
                    <div className="flex flex-wrap justify-center gap-3">
                      <Button href="/services" variant="primary">
                        Conocer nuestros programas
                      </Button>
                    </div>
                </header>
            </div>
            <div className="bg-black rounded-3xl">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-8 pt-14">

                    {/* Fila superior: logo + redes */}
                    <div className="flex items-center justify-between gap-6 pb-8 border-b border-white/10">
                        <FirmaLogo
                            color="white"
                            className="h-auto w-full object-contain"
                            width={220}
                            height={28}
                        />
                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
                                aria-label="Instagram"
                            >
                                <IconBrandInstagram className="h-4 w-4" stroke={1.5} aria-hidden />
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <IconBrandLinkedin className="h-4 w-4" stroke={1.5} aria-hidden />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-16 py-10 border-b border-white/10">

                        {/* Col 1: Descripción */}
                        <div>
                            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                                Impulsamos la excelencia médica a través de la educación continua, la investigación científica y la innovación tecnológica aplicada al sistema de salud.
                            </p>
                        </div>

                        {/* Col 2: Navegación */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-5">
                                Navegación
                            </h4>
                            <ul className="flex flex-col gap-3">
                                <li><Link href="/" className="relative inline-block text-sm text-neutral-300 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Inicio</Link></li>
                                <li><Link href="/about" className="relative inline-block text-sm text-neutral-300 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Quiénes Somos</Link></li>
                                <li><Link href="/services" className="relative inline-block text-sm text-neutral-300 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Programas</Link></li>
                                <li><Link href="/contact" className="relative inline-block text-sm text-neutral-300 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Contacto</Link></li>
                            </ul>
                        </div>

                        {/* Col 3: Programas */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-5">
                                Programas
                            </h4>
                            <ul className="flex flex-col gap-3">
                                <li><Link href="/services/capacitacion-y-becas" className="relative inline-block text-sm text-neutral-300 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Capacitación y Becas</Link></li>
                                <li><Link href="/services/investigacion-y-eventos-academicos" className="relative inline-block text-sm text-neutral-300 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Investigación y Eventos</Link></li>
                                <li><Link href="/services/gestion-asistencial" className="relative inline-block text-sm text-neutral-300 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Gestión Asistencial</Link></li>
                                <li><Link href="/services/infraestructura-medica" className="relative inline-block text-sm text-neutral-300 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Infraestructura Médica</Link></li>
                                <li><Link href="/services/impacto-social-y-prevencion" className="relative inline-block text-sm text-neutral-300 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">Impacto Social</Link></li>
                                <li><Link href="/services/rcp-dea-empresas" className="relative inline-block text-sm text-neutral-300 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">RCP y DEA para Empresas</Link></li>
                            </ul>
                        </div>

                        {/* Col 4: Contacto */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-5">
                                Contacto
                            </h4>
                            <address className="not-italic flex flex-col gap-3 text-sm text-neutral-400 leading-relaxed">
                                <span>Billinghurst 19, CABA<br />Argentina</span>
                                <a href="mailto:info@fpp.org.ar" className="relative inline-block text-neutral-300 hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100">
                                    info@fpp.org.ar
                                </a>
                            </address>
                        </div>

                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-neutral-500 text-xs">
                            © {currentYear} Fundación Patricio Pataro. Todos los derechos reservados.
                        </p>
                        <p className="text-neutral-600 text-xs">
                            CUIT 30-71753023-4
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
