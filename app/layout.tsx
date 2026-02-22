import "./globals.css";

import { Inter, Source_Serif_4 } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

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
    <html lang="es" className={`scrollbar-hide ${inter.variable} ${sourceSerif.variable}`}>
      <body className={`overflow-x-hidden scrollbar-hide w-full ${inter.className}`}>
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
