"use client";

import { Button } from "@/components/ui/Button";
import { H1, P } from "@/components/ui/Text";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="text-8xl font-bold text-primary/20">500</span>
      <H1 className="mt-4 text-[#1F2933]">Algo salió mal</H1>
      <P variant="body" className="mt-3 max-w-md">
        Ocurrió un error inesperado. Podés intentar de nuevo o volver al inicio.
      </P>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={reset}
          className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          Intentar de nuevo
        </button>
        <Button href="/" variant="secondary">
          Volver al inicio
        </Button>
      </div>
    </section>
  );
}
