import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost-dark";
  size?: "lg" | "xl";
  href?: string;
  pulse?: boolean;
  className?: string;
};

export function CTAButton({
  children,
  variant = "primary",
  size = "lg",
  href = "#oferta",
  pulse = false,
  className = "",
}: Props) {
  const sizeClasses =
    size === "xl"
      ? "px-8 py-5 text-base sm:text-lg"
      : "px-6 py-4 text-sm sm:text-base";

  const variantClasses =
    variant === "primary"
      ? "bg-rose-deep text-white hover:brightness-110 shadow-cta"
      : variant === "secondary"
      ? "bg-primary text-primary-foreground hover:bg-rose shadow-soft"
      : "bg-transparent text-white border border-white/40 hover:bg-white/10";

  return (
    <a
      href={href}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 sm:w-auto ${sizeClasses} ${variantClasses} ${
        pulse ? "animate-pulse-cta" : ""
      } ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
    </a>
  );
}
