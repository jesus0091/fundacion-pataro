import Link from "next/link";
import { ReactNode } from "react";

const BUTTON_VARIANTS = {
  primary:
    "inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium transition-colors hover:bg-primary-dark",
  secondary:
    "inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-medium transition-colors hover:bg-primary-50",
  tertiary:
    "inline-flex items-center justify-center gap-2 bg-white text-neutral-text px-6 py-3 rounded-full font-medium transition-colors hover:bg-neutral-100",
} as const;

export interface ButtonProps {
    children: ReactNode;
    variant?: keyof typeof BUTTON_VARIANTS;
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export function Button({
    children,
    variant = "primary",
    href,
    onClick,
    type = "button",
    disabled = false,
}: ButtonProps) {
    const baseClasses = BUTTON_VARIANTS[variant];
    const disabledClasses = disabled
        ? "opacity-50 cursor-not-allowed pointer-events-none"
        : "";
    const combinedClasses = `${baseClasses} ${disabledClasses}`.trim();

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedClasses}
        >
            {children}
        </button>
    );
}
