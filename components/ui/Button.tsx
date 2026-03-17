import Link from "next/link";
import { ReactNode } from "react";

const BUTTON_VARIANTS = {
  primary:
    "inline-flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-200 ease-out hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-px active:translate-y-0 active:scale-[0.98] active:shadow-md",
  secondary:
    "inline-flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base border-2 border-primary text-primary px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-200 ease-out hover:bg-primary-50 hover:border-primary-dark hover:shadow-sm active:scale-[0.98]",
  tertiary:
    "inline-flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base bg-white text-neutral-text px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-200 ease-out hover:bg-neutral-100 hover:shadow-sm active:scale-[0.98]",
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
