import Section from "@/components/ui/Section";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Section padding="small" className="bg-neutral-background">
        <div className="text-center">
          <h1 className="text-heading-1 mb-4">Contacto</h1>
          <p className="text-body-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-heading-2 mb-6">Información de Contacto</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-heading-4 mb-2">Dirección</h3>
                <p className="text-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h3 className="text-heading-4 mb-2">Email</h3>
                <p className="text-body">contacto@fundacionpataro.org</p>
              </div>
              <div>
                <h3 className="text-heading-4 mb-2">Teléfono</h3>
                <p className="text-body">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-heading-4 mb-2">Horario</h3>
                <p className="text-body">
                  Lunes a Viernes: 9:00 AM - 6:00 PM
                  <br />
                  Sábados: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-heading-2 mb-6">Envíanos un Mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
      <Section className="bg-neutral-background">
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-96 bg-neutral-light rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1234567890123!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDcnNTkuNSJX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación"
            ></iframe>
          </div>
        </div>
      </Section>
    </>
  );
}
