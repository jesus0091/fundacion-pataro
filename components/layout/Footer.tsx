import { H2, P } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
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
                <header className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-6">
                    <H2 id="footer-cta-heading">{ctaTitle}</H2>
                    <P>{ctaDescription}</P>
                    <div className="flex flex-wrap justify-center gap-3">
                      <Button href="/services" variant="tertiary">
                        Ver Programas de Formación
                      </Button>
                      <Button href="/contact" variant="primary">
                        Donar
                      </Button>
                    </div>
                </header>
            </div>
            <div className="bg-black rounded-3xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 pt-14">
                    {/* Firma y redes sociales */}
                    <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/15">
                        <Image
                            src="/images/firma.svg"
                            alt="Fundación Pataro"
                            width={280}
                            height={28}
                            className="w-[50%] h-auto object-contain"
                        />
                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-white/5 text-white transition hover:bg-white/10"
                                aria-label="Instagram"
                            >
                                <IconBrandInstagram className="h-5 w-5" stroke={1.5} aria-hidden />
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-white/5 text-white transition hover:bg-white/10"
                                aria-label="LinkedIn"
                            >
                                <IconBrandLinkedin className="h-5 w-5" stroke={1.5} aria-hidden />
                            </a>
                        </div>
                    </div>

                    {/* Cuatro columnas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
                        <div>
                            <h4 className="font-serif text-xl font-semibold text-white mb-4">
                                Fundación Pataro
                            </h4>
                            <p className="text-neutral-200 text-base leading-relaxed">
                                Impulsamos la excelencia médica a través de la educación continua, la investigación científica y la innovación tecnológica aplicada.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl font-semibold text-white mb-4">
                                Navegación
                            </h4>
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/" className="text-neutral-300 hover:text-white transition-colors">Inicio</Link></li>
                                <li><Link href="/about" className="text-neutral-300 hover:text-white transition-colors">Quiénes Somos</Link></li>
                                <li><Link href="/services" className="text-neutral-300 hover:text-white transition-colors">Qué Hacemos</Link></li>
                                <li><Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">Contacto</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl font-semibold text-white mb-4">
                                Programas
                            </h4>
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/services#becas" className="text-neutral-300 hover:text-white transition-colors">Becas</Link></li>
                                <li><Link href="/services#investigacion" className="text-neutral-300 hover:text-white transition-colors">Investigación</Link></li>
                                <li><Link href="/services#eventos" className="text-neutral-300 hover:text-white transition-colors">Eventos</Link></li>
                                <li><Link href="/services#centros" className="text-neutral-300 hover:text-white transition-colors">Centros Médicos</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl font-semibold text-white mb-4">
                                Contacto
                            </h4>
                            <p className="text-neutral-200 text-base leading-relaxed">
                                Billinghurst 19, CABA. Argentina<br />
                                <a href="mailto:info@fpp.org.ar" className="text-neutral-300 hover:text-white transition-colors">info@fpp.org.ar</a>
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-white/15 mt-10 pt-8 text-center">
                        <p className="text-neutral-400 text-sm">
                            © {currentYear} Fundación Pataro. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
