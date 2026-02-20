import Image from "next/image";
import Link from "next/link";
import { H2, P } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-serif text-xl font-semibold text-white mb-4">
                                Fundación Pataro
                            </h4>
                            <p className="text-neutral-200 text-base leading-relaxed">
                                Impulsamos la excelencia médica mediante
                                educación, investigación e innovación para
                                fortalecer el sistema de salud.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl font-semibold text-white mb-4">
                                Enlaces
                            </h4>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-neutral-300 hover:text-white transition-colors"
                                    >
                                        Inicio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className="text-neutral-300 hover:text-white transition-colors"
                                    >
                                        Nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services"
                                        className="text-neutral-300 hover:text-white transition-colors"
                                    >
                                        Servicios
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-neutral-300 hover:text-white transition-colors"
                                    >
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl font-semibold text-white mb-4">
                                Contacto
                            </h4>
                            <p className="text-neutral-200 text-base leading-relaxed">
                                Escribinos para sumarte a nuestros programas o
                                establecer alianzas.
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-white/15 mt-10 pt-8 text-center">
                        <p className="text-neutral-400 text-sm">
                            © {currentYear} Fundación Pataro. Todos los derechos
                            reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
