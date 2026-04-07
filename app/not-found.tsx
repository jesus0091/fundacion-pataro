import { Button } from "@/components/ui/Button";
import { H1, P } from "@/components/ui/Text";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="text-8xl font-bold text-primary/20">404</span>
      <H1 className="mt-4 text-[#1F2933]">Página no encontrada</H1>
      <P variant="body" className="mt-3 max-w-md">
        La página que buscás no existe o fue movida. Podés volver al inicio o
        explorar nuestros programas.
      </P>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="primary">
          Volver al inicio
        </Button>
        <Button href="/services" variant="secondary">
          Ver programas
        </Button>
      </div>
    </section>
  );
}
