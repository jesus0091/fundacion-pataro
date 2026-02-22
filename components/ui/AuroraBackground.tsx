"use client";

import type { CSSProperties } from "react";

type AuroraGlowProps = {
  opacity?: number;
  blobSize?: number;
  speed?: number;
  colors?: string[];
  extraBlur?: boolean;
  className?: string;
  style?: CSSProperties;
};

const ANIM_NAMES = ["aurora-float1", "aurora-float2", "aurora-float3", "aurora-float2", "aurora-float1"] as const;
const DURATIONS = [22, 28, 26, 32, 24];
const DELAYS = [-2, -6, -4, -8, -10];

const DEFAULT_COLORS = [
  "rgba(13, 148, 136, 0.25 )",   // teal
  "rgba(30, 58, 95, 0.25)",     // blue
  "rgba(251, 191, 36, 0.25)",   // yellow
  "rgba(59, 130, 246, 0.25)",   // light blue
  "rgba(13, 148, 136, 0.25)",    // teal soft
];

export default function AuroraBackground({
  opacity = 1,
  blobSize = 400,
  speed = 2,
  colors = DEFAULT_COLORS,
  extraBlur = false,
  className = "",
  style,
}: AuroraGlowProps) {
  const palette = colors.slice(0, 5);

  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      style={{
        opacity,
        filter: extraBlur ? "blur(0.2px)" : undefined,
        ...style,
      }}
      aria-hidden
    >
      {palette.map((color, i) => (
        <span
          key={i}
          className="absolute inset-0 m-auto rounded-full mix-blend-screen"
          style={{
            width: blobSize,
            height: blobSize,
            background: `radial-gradient(circle at 30% 30%, ${color} 0%, transparent 60%)`,
            filter: "blur(40px)",
            animation: `${ANIM_NAMES[i]} ${DURATIONS[i] / speed}s ease-in-out ${DELAYS[i]}s infinite`,
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
}
