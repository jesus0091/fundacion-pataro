import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "secondary"
      ? "btn-secondary"
      : variant === "outline"
      ? "btn-outline"
      : "btn-primary";

  return (
    <button className={`${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
