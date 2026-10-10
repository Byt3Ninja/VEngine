import { cn } from "@/lib/utils";

// The Flywheel mark: four stage segments (Ideation, Validation, Build, Scale)
// turning around a v. Drawn on a 64-unit grid; the leading segment and the v
// take the brand blue (primary), the rest follows the text colour.
const SEGMENTS = [
  "M57.11 38.73A26 26 0 0 1 38.73 57.11",
  "M25.27 57.11A26 26 0 0 1 6.89 38.73",
  "M6.89 25.27A26 26 0 0 1 25.27 6.89",
];

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" strokeLinecap="round" aria-hidden="true" className={cn("shrink-0", className)}>
      {SEGMENTS.map((d) => (
        <path key={d} d={d} strokeWidth={7} className="stroke-foreground" />
      ))}
      <path d="M38.73 6.89A26 26 0 0 1 57.11 25.27" strokeWidth={7} className="stroke-primary" />
      <path d="M20 23L32 43L44 23" strokeWidth={8} strokeLinejoin="round" className="stroke-primary" />
    </svg>
  );
}

interface LogoProps {
  variant?: "full" | "short";
  size?: "md" | "sm";
  className?: string;
}

export function Logo({ variant = "full", size = "md", className }: LogoProps) {
  const label = variant === "short" ? "vEngine" : "Venture Engine";
  return (
    <span
      role="img"
      aria-label={label}
      className={cn(
        "inline-flex items-center font-display font-semibold tracking-[-0.02em] text-foreground",
        size === "md" ? "gap-3 text-2xl" : "gap-2.5 text-xl",
        className,
      )}
    >
      <LogoMark className={size === "md" ? "w-10 h-10" : "w-8 h-8"} />
      {variant === "short" ? (
        <span aria-hidden="true"><span className="text-primary">v</span>Engine</span>
      ) : (
        <span aria-hidden="true">Venture <span className="text-primary">Engine</span></span>
      )}
    </span>
  );
}
