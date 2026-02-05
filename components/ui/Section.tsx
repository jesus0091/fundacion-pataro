import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  padding?: "default" | "small" | "none";
}

export default function Section({ children, className = "", padding = "default" }: SectionProps) {
  const paddingClass =
    padding === "small" ? "section-padding-sm" : padding === "none" ? "" : "section-padding";

  return (
    <section className={`${paddingClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
