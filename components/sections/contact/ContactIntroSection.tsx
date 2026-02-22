import { H1, Label, P } from "@/components/ui/Text";

export default function ContactIntroSection() {
  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          <Label variant="primaryTight">Hablemos</Label>
          <H1 id="contact-heading">Contacto</H1>
          <P variant="bodyLgMb4">
            Tu mensaje es el primer paso para generar un cambio.
          </P>
          <P variant="body">
            Escribinos y nos pondremos en contacto a la brevedad.
          </P>
        </div>
      </div>
    </section>
  );
}
