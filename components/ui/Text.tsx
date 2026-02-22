import { ReactNode } from "react";

export interface HeadingProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

/** H1: título principal (hero). Estilos incluidos. */
export function H1({ children, id, className }: HeadingProps) {
  return (
    <h1
      id={id}
      className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tighter md:leading-tight ${className ?? ""}`.trim()}
    >
      {children}
    </h1>
  );
}

const H2_VARIANTS = {
  default:
    "font-serif text-2xl sm:text-3xl lg:text-[48px] font-bold text-[#1F2933] leading-tight lg:leading-[55.2px] tracking-tight lg:tracking-[-0.72px]",
  narrow:
    "font-serif text-2xl sm:text-3xl lg:text-[48px] font-bold text-[#1F2933] leading-tight lg:leading-[55.2px] tracking-tight lg:tracking-[-0.72px]",
  section:
    "font-serif text-2xl sm:text-3xl lg:text-[48px] font-bold text-[#1F2933] leading-tight lg:leading-[55.2px] tracking-tight lg:tracking-[-0.72px]",
  compact:
    "font-serif text-2xl sm:text-3xl lg:text-[48px] font-bold text-[#1F2933] leading-tight lg:leading-[55.2px] tracking-tight lg:tracking-[-0.72px]",
} as const;

export interface H2Props extends HeadingProps {
  variant?: keyof typeof H2_VARIANTS;
}

/** H2: título de sección. variant: default | narrow (centrado) | section | compact. */
export function H2({ children, id, variant = "default", className }: H2Props) {
  return (
    <h2 id={id} className={`${H2_VARIANTS[variant]} ${className ?? ""}`.trim()}>
      {children}
    </h2>
  );
}

const H3_VARIANTS = {
  default:
    "font-serif text-2xl font-bold text-secondary leading-tight",
  overlay:
    "font-serif text-xl font-bold text-white drop-shadow-sm",
} as const;

export interface H3Props extends HeadingProps {
  variant?: keyof typeof H3_VARIANTS;
}

/** H3: subtítulo o título de card. variant: default | overlay (texto claro sobre fondo oscuro). */
export function H3({ children, id, variant = "default", className }: H3Props) {
  return (
    <h3 id={id} className={`${H3_VARIANTS[variant]} ${className ?? ""}`.trim()}>
      {children}
    </h3>
  );
}

/** H4: subtítulo nivel 4. */
export function H4({ children, id, className }: HeadingProps) {
  return (
    <h4
      id={id}
      className={`font-serif text-heading-4 font-semibold text-secondary ${className ?? ""}`.trim()}
    >
      {children}
    </h4>
  );
}

/** H5: subtítulo nivel 5. */
export function H5({ children, id, className }: HeadingProps) {
  return (
    <h5
      id={id}
      className={`font-serif text-xl font-semibold text-secondary ${className ?? ""}`.trim()}
    >
      {children}
    </h5>
  );
}

/** H6: subtítulo nivel 6. */
export function H6({ children, id, className }: HeadingProps) {
  return (
    <h6
      id={id}
      className={`font-serif text-lg font-semibold text-secondary ${className ?? ""}`.trim()}
    >
      {children}
    </h6>
  );
}

// --- Label (subtítulo de sección, uppercase) ---

const LABEL_VARIANTS = {
  primary:
    "inline-block font-semibold text-sm sm:text-lg tracking-wide capitalize text-primary",
  secondary:
    "inline-block font-semibold text-sm sm:text-lg tracking-wide capitalize text-secondary",
  primaryTight:
    "inline-block font-semibold text-sm sm:text-lg tracking-wide capitalize text-primary",
} as const;

export interface LabelProps {
  children: ReactNode;
  variant?: keyof typeof LABEL_VARIANTS;
}
/** Label: etiqueta de sección (ej. "Fundación Patricia Pataro", "Qué Hacemos"). variant: primary | secondary | primaryTight. */
export function Label({ children, variant = "secondary" }: LabelProps) {
  return <span className={LABEL_VARIANTS[variant]}>{children}</span>;
}

// --- P (párrafo) ---

const P_VARIANTS = {
  intro:
    "text-neutral-text-light text-sm sm:text-lg leading-relaxed",
  body:
    "text-neutral-text-light text-sm sm:text-sm leading-relaxed",
  bodyLg:
    "text-neutral-text-light text-sm sm:text-base lg:text-lg leading-relaxed",
  bodyLgMb4:
    "text-neutral-text-light text-sm sm:text-base lg:text-lg leading-relaxed",
  bodyLgMb8:
    "text-neutral-text-light text-sm sm:text-base lg:text-lg leading-relaxed",
  sm:
    "text-neutral-text-light text-xs sm:text-sm leading-relaxed",
  smMb4:
    "text-neutral-text-light text-xs sm:text-sm leading-relaxed",
  smMb5:
    "text-neutral-text-light text-xs sm:text-sm leading-relaxed",
  overlay:
    "text-white text-sm sm:text-lg lg:text-xl leading-relaxed",
  narrow:
    "text-neutral-text-light text-sm sm:text-sm lg:text-lg leading-relaxed max-w-2xl mx-auto",
  narrowMt3:
    "text-neutral-text-light text-base sm:text-lg leading-relaxed max-w-2xl",
  narrowMt4:
    "text-neutral-text-light text-sm sm:text-sm lg:text-lg leading-relaxed max-w-2xl mx-auto",
  centerNarrowMb10:
    "text-center text-neutral-text-light text-sm sm:text-sm lg:text-lg leading-relaxed max-w-2xl mx-auto",
  introNarrow:
    "text-neutral-text text-sm lg:text-lg leading-relaxed",
} as const;

export interface PProps {
  children: ReactNode;
  id?: string;
  variant?: keyof typeof P_VARIANTS;
  className?: string;
}

/** P: párrafo. variant: intro | body | bodyLg | bodyLgMb4 | bodyLgMb8 | sm | smMb4 | smMb5 | overlay | narrow | narrowMt3 | narrowMt4 | centerNarrowMb10 | introNarrow. */
export function P({ children, id, variant = "body", className }: PProps) {
  return (
    <p id={id} className={`${P_VARIANTS[variant]} ${className ?? ""}`.trim()}>
      {children}
    </p>
  );
}
