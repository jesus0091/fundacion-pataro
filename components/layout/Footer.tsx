import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container mx-auto px-container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-heading-4 mb-4 text-white">Fundación Pataro</h3>
            <p className="text-body text-neutral-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h4 className="text-heading-4 mb-4 text-white">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-light hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-light hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-light hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-light hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-heading-4 mb-4 text-white">Contacto</h4>
            <p className="text-body text-neutral-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="border-t border-neutral-light pt-8 pb-6 text-center">
          <p className="text-small text-neutral-light">
            © {currentYear} Fundación Pataro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
