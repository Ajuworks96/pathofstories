import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base interactive styling matching design system (Z-index, Transitions)
          "inline-flex items-center justify-center rounded-md font-medium text-label transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          
          // Sizing mapping spacing and font scales
          size === "sm" && "h-9 px-3 py-1.5 text-xs",
          size === "md" && "h-11 px-5 py-2 text-sm",
          size === "lg" && "h-13 px-8 py-3 text-base",

          // Variants: Bold Wilderness Dark & Vermilion Accent Aesthetics
          variant === "primary" && "bg-[#FF5733] text-white hover:bg-[#E04824] border border-transparent font-semibold shadow-lg shadow-[#FF5733]/20",
          variant === "secondary" && "bg-surface text-text-primary border border-border hover:bg-surface/80",
          variant === "outline" && "bg-transparent text-text-primary border border-border hover:bg-surface/60",
          variant === "ghost" && "bg-transparent text-text-primary hover:bg-surface",
          variant === "link" && "bg-transparent text-[#FF5733] hover:underline underline-offset-4 p-0 h-auto font-medium",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
