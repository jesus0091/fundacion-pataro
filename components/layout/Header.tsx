"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import { FirmaLogo } from "@/components/ui/FirmaLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SCROLL_THRESHOLD = 20;

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Quiénes Somos" },
  { href: "/services", label: "Programas" },
  { href: "/contact", label: "Contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Blanco solo en páginas individuales de servicio sin scroll
  const isServiceDetail = /^\/services\/.+/.test(pathname);
  const isTransparent = !isScrolled;
  const useWhite = isServiceDetail && isTransparent;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300 ${
        isTransparent
          ? "bg-transparent border-b border-white/10"
          : "bg-neutral-surface border-b border-neutral-border shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-14 sm:h-16 lg:h-20" aria-label="Navegación principal">
          <Link
            href="/"
            className="flex items-center py-2 hover:opacity-80 transition-opacity"
            aria-label="Fundación Pataro - Inicio"
          >
            <FirmaLogo
              color={useWhite ? "white" : "black"}
              className="h-5 w-auto sm:h-6 transition-[filter] duration-300"
            />
          </Link>

          {/* Desktop: links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative text-sm xl:text-base font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                      useWhite
                        ? "text-white/90 hover:text-white after:bg-white"
                        : "text-neutral-text hover:text-primary after:bg-primary"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
              useWhite
                ? "text-white hover:bg-white/10"
                : "text-neutral-text hover:bg-neutral-100"
            }`}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
          >
            <IconMenu2 className="w-6 h-6" stroke={1.5} aria-hidden />
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-black/50"
          aria-label="Cerrar menú"
        />
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-neutral-surface shadow-xl flex flex-col transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 border-b border-neutral-border">
            <span className="font-semibold text-neutral-text">Menú</span>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-full text-neutral-text hover:bg-neutral-100 transition-colors"
              aria-label="Cerrar menú"
            >
              <IconX className="w-6 h-6" stroke={1.5} aria-hidden />
            </button>
          </div>
          <ul className="flex flex-col flex-1 py-4 overflow-auto">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 sm:px-6 py-3 text-base font-medium text-neutral-text hover:bg-neutral-50 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-4 after:sm:left-6 after:h-[1.5px] after:w-[calc(100%-2rem)] after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
