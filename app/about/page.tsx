import Section from "@/components/ui/Section";
import AboutIntro from "@/components/sections/AboutIntro";

export default function AboutPage() {
  const aboutContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`;

  return (
    <>
      <Section padding="small" className="bg-neutral-background">
        <div className="text-center">
          <h1 className="text-heading-1 mb-4">Sobre Nosotros</h1>
          <p className="text-body-lg max-w-2xl mx-auto">
            Conoce más sobre nuestra misión, visión y valores
          </p>
        </div>
      </Section>
      <Section>
        <AboutIntro
          title="Nuestra Historia"
          content={aboutContent}
          image="https://via.placeholder.com/600x400?text=Fundación+Pataro"
        />
      </Section>
      <Section className="bg-neutral-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-heading-3 mb-3">Misión</h3>
            <p className="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="text-heading-3 mb-3">Visión</h3>
            <p className="text-body">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-heading-3 mb-3">Valores</h3>
            <p className="text-body">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-2 mb-6 text-center">Nuestro Equipo</h2>
          <p className="text-body-lg mb-8 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-neutral-surface rounded-lg p-6 shadow-md">
                <div className="w-24 h-24 bg-neutral-light rounded-full mx-auto mb-4"></div>
                <h4 className="text-heading-4 text-center mb-2">Miembro {item}</h4>
                <p className="text-body text-center text-neutral-text-light">
                  Cargo del miembro {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
