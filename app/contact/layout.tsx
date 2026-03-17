import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con Fundación Patricio Pataro. Respondemos consultas sobre becas médicas, alianzas estratégicas, eventos académicos y programas de RCP/DEA para empresas en Argentina.",
  openGraph: {
    title: "Contacto | Fundación Patricio Pataro",
    description:
      "Escribinos para consultas sobre becas, alianzas, eventos o programas de capacitación. Te respondemos dentro de las 48 horas hábiles.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
