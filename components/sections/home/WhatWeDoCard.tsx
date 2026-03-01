import { H3, P } from "@/components/ui/Text";

import Link from "next/link";

export interface WhatWeDoCardProps {
  title: string;
  description: string;
  href?: string;
  imageSrc?: string;
  icon: React.ReactNode;
}

export default function WhatWeDoCard({
  title,
  description,
  href,
  imageSrc,
  icon,
}: WhatWeDoCardProps) {
  return (
    <article
      data-carousel-card
      className="flex-shrink-0 w-[min(100vw-2rem,360px)] min-w-[280px] sm:min-w-[500px] snap-center rounded-2xl bg-[] transition-all duration-300"
    >
      <div className="relative aspect-[16/6] rounded-2xl overflow-hidden w-full bg-neutral-background">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-neutral-background to-primary/15" />
        )}
        <div className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-primary/25 backdrop-blur-sm border border-white/60 flex items-center justify-center text-secondary shadow-sm">
          {icon}
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2 sm:gap-3">
        <H3>{title}</H3>
        <P variant="small">{description}</P>
        {href && (
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
            aria-label={`Ver más sobre ${title}`}
          >
            Ver más
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        )}
      </div>
    </article>
  );
}
