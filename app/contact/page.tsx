import ContactIntroSection from "@/components/sections/contact/ContactIntroSection";
import ContactInfoSection from "@/components/sections/contact/ContactInfoSection";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactNoteSection from "@/components/sections/contact/ContactNoteSection";
import ContactCtaSection from "@/components/sections/contact/ContactCtaSection";

export default function ContactPage() {
  return (
    <>
      <ContactIntroSection />
      <section className="py-16 lg:py-24 bg-neutral-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactInfoSection />
            <ContactFormSection />
          </div>
        </div>
      </section>
      <section className="py-10 bg-white">
        <ContactNoteSection />
      </section>
      <ContactCtaSection />
    </>
  );
}
