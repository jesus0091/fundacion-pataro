"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

const SCROLL_THRESHOLD = 20;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? "bg-neutral-surface border-b border-neutral-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 bg-secondary text-white rounded-full pl-2.5 pr-4 py-2 hover:bg-secondary-dark transition-colors"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white font-bold text-sm shrink-0">
              FPP
            </span>
            <span className="font-semibold text-sm md:text-base whitespace-nowrap">
              Fundación Pataro
            </span>
          </Link>

          <div className="flex items-center gap-6 md:gap-8">
            <ul className="flex items-center gap-5 md:gap-8">
              <li>
                <Link
                  href="/"
                  className="text-sm md:text-base font-medium text-neutral-text hover:text-primary transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm md:text-base font-medium text-neutral-text hover:text-primary transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm md:text-base font-medium text-neutral-text hover:text-primary transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm md:text-base font-medium text-neutral-text hover:text-primary transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <Link
              href="/contact"
              className="shrink-0 bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-primary-dark transition-colors"
            >
              Donar
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
