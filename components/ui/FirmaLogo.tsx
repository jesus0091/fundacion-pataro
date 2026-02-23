import Image from "next/image";

export type FirmaLogoColor = "black" | "white";

interface FirmaLogoProps {
  /** Color de la firma. "white" usa el SVG tal cual; "black" aplica filter para verse negra. */
  color?: FirmaLogoColor;
  /** Clases para el contenedor (tamaño, etc.). Ej: "h-5 w-auto", "h-6 sm:h-7". */
  className?: string;
  /** Ancho aproximado para el layout (Next Image). */
  width?: number;
  /** Alto aproximado para el layout (Next Image). */
  height?: number;
}

/**
 * Logo de la firma (Fundación Pataro) como componente.
 * Permite elegir color sin duplicar el SVG (usa filter para negro).
 */
export function FirmaLogo({
  color = "white",
  className = "",
  width = 200,
  height = 20,
}: FirmaLogoProps) {
  return (
    <span
      className="inline-block"
      style={
        color === "black"
          ? { filter: "brightness(0)" }
          : undefined
      }
    >
      <Image
        src="/images/firma.svg"
        alt="Fundación Pataro"
        width={width}
        height={height}
        className={className || "h-5 w-auto object-contain"}
      />
    </span>
  );
}
