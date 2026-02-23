"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import { FirmaLogo } from "@/components/ui/FirmaLogo";
import Link from "next/link";

const SCROLL_THRESHOLD = 20;

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Nosotros" },
  { href: "/services", label: "Servicios" },
  { href: "/contact", label: "Contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        isScrolled
          ? "bg-neutral-surface border-b border-neutral-border shadow-sm"
          : "bg-transparent border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-14 sm:h-16 lg:h-20" aria-label="Navegación principal">
          <Link
            href="/"
            className="flex items-center py-2 hover:opacity-90 transition-opacity"
            aria-label="Fundación Pataro - Inicio"
          >
            <FirmaLogo color="black" className="h-5 w-auto sm:h-6" />
          </Link>

          {/* Desktop: links + Donar */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm xl:text-base font-medium text-neutral-text hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="shrink-0 bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-primary-dark transition-colors"
            >
              Donar
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-neutral-text hover:bg-neutral-100 transition-colors"
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
                  className="block px-4 sm:px-6 py-3 text-base font-medium text-neutral-text hover:bg-neutral-50 hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-4 sm:p-6 border-t border-neutral-border">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-primary text-white text-base font-semibold py-3 rounded-full hover:bg-primary-dark transition-colors"
            >
              Donar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
