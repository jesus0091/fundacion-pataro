import Button from "@/components/ui/Button";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary text-white section-padding">
      <div className="container mx-auto px-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-heading-1 mb-6 text-white">{title}</h1>
          {subtitle && <p className="text-body-lg mb-8 text-white/90">{subtitle}</p>}
          {ctaText && ctaLink && (
            <Link href={ctaLink}>
              <Button variant="secondary" className="bg-white text-primary hover:bg-neutral-background">
                {ctaText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
