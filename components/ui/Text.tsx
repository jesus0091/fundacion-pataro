import { IconCircle, IconCircle0, IconCircleCheck } from "@tabler/icons-react";

import { ReactNode } from "react";

export interface HeadingProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

const HEADING_BASE = "font-serif text-[#1F2933] leading-tight";

export function H1({ children, id, className }: HeadingProps) {
    return (
        <h1
            id={id}
            className={`${HEADING_BASE} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${className ?? ""}`.trim()}
        >
            {children}
        </h1>
    );
}

const H2_VARIANTS = {
    default: `${HEADING_BASE} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold`,
    narrow: `${HEADING_BASE} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold`,
    section: `${HEADING_BASE} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold`,
    compact: `${HEADING_BASE} text-2xl sm:text-3xl lg:text-4xl font-bold`,
} as const;

export interface H2Props extends HeadingProps {
    variant?: keyof typeof H2_VARIANTS;
}

export function H2({ children, id, variant = "default", className }: H2Props) {
    return (
        <h2 id={id} className={`${H2_VARIANTS[variant]} ${className ?? ""}`.trim()}>
            {children}
        </h2>
    );
}

const H3_VARIANTS = {
    default: `${HEADING_BASE} text-xl sm:text-2xl font-bold`,
    overlay: "font-serif text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-sm",
} as const;

export interface H3Props extends HeadingProps {
    variant?: keyof typeof H3_VARIANTS;
}

export function H3({ children, id, variant = "default", className }: H3Props) {
    return (
        <h3 id={id} className={`${H3_VARIANTS[variant]} ${className ?? ""}`.trim()}>
            {children}
        </h3>
    );
}

export function H4({ children, id, className }: HeadingProps) {
    return (
        <h4
            id={id}
            className={`${HEADING_BASE} text-lg sm:text-xl font-semibold ${className ?? ""}`.trim()}
        >
            {children}
        </h4>
    );
}

export function H5({ children, id, className }: HeadingProps) {
    return (
        <h5
            id={id}
            className={`${HEADING_BASE} text-base sm:text-lg font-semibold ${className ?? ""}`.trim()}
        >
            {children}
        </h5>
    );
}

export function H6({ children, id, className }: HeadingProps) {
    return (
        <h6
            id={id}
            className={`${HEADING_BASE} text-sm sm:text-base font-semibold ${className ?? ""}`.trim()}
        >
            {children}
        </h6>
    );
}

const LABEL_VARIANTS = {
    primary:
        "flex items-center gap-2 font-semibold text-sm sm:text-lg capitalize text-primary px-4 bg-white max-w-max rounded-full py-1",
    secondary:
        "flex flex-col items-center gap-2 font-semibold text-sm sm:text-lg capitalize text-primary ",
    primaryTight:
        "flex items-center gap-2 inline-block font-semibold text-sm sm:text-lg capitalize text-primary",
} as const;

export interface LabelProps {
    children: ReactNode;
    variant?: keyof typeof LABEL_VARIANTS;
}
export function Label({ children, variant = "secondary" }: LabelProps) {
    return (
        <span className={LABEL_VARIANTS[variant]}>
            {variant === "primary" ? (
                <div className="w-3 h-3 bg-primary rounded-full" aria-hidden />
            ) : variant === "secondary" ? (
                <div
                    className="w-10 h-1.5 bg-primary rounded-full"
                    aria-hidden
                />
            ) : <div
            className="w-1.5 h-6 bg-primary rounded-full"
            aria-hidden
        />}
            {children}
        </span>
    );
}

const P_VARIANTS = {
    body: "text-[#333333] text-sm sm:text-base lg:text-lg leading-relaxed",
    small: "text-[#333333] text-sm sm:text-base leading-relaxed",
} as const;

export interface PProps {
    children: ReactNode;
    id?: string;
    variant?: keyof typeof P_VARIANTS;
    className?: string;
}

export function P({ children, id, variant = "body", className }: PProps) {
    return (
        <p
            id={id}
            className={`${P_VARIANTS[variant]} ${className ?? ""}`.trim()}
        >
            {children}
        </p>
    );
}
