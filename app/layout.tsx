import "./globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fundación Pataro",
  description: "Website institucional de Fundación Pataro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scrollbar-hide">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Fuentes en root layout (App Router), aplican a toda la app */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden scrollbar-hide w-full font-sans">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] rounded bg-primary px-4 py-2 text-sm font-medium text-white shadow-lg transition focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 -translate-y-20 focus:translate-y-0"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content" className="min-h-screen" role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
