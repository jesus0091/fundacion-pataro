import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-neutral-surface border-b border-neutral-light sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-container">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl md:text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
            Fundación Pataro
          </Link>
          <ul className="flex items-center gap-4 md:gap-8">
            <li>
              <Link
                href="/"
                className="text-sm md:text-base text-neutral-text hover:text-primary transition-colors font-medium"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm md:text-base text-neutral-text hover:text-primary transition-colors font-medium"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-sm md:text-base text-neutral-text hover:text-primary transition-colors font-medium"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm md:text-base text-neutral-text hover:text-primary transition-colors font-medium"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
