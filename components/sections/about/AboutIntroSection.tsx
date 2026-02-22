import { H1, P } from "@/components/ui/Text";

export default function AboutIntroSection() {
  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <H1 id="about-heading">Quiénes Somos</H1>
          <div className="mt-4">
          <P variant="bodyLgMb4">
            Transformamos conocimiento en acción a través de cinco pilares fundamentales que fortalecen el sistema de salud.
          </P>
        </div>
      </div>
    </div>
    </section>
  );
}
