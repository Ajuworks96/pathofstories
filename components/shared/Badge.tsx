import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "danger" | "outline";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "default",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors",
          
          // Neutral variants
          variant === "default" && "bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300",
          variant === "secondary" && "bg-secondary-100 text-secondary-800 dark:bg-secondary-900/40 dark:text-secondary-300",
          
          // Muted status colors (WCAG compliant contrast ratios)
          variant === "success" && "bg-success-50 text-success-500 dark:bg-success-950/20 dark:text-success-500",
          variant === "warning" && "bg-warning-50 text-warning-500 dark:bg-warning-950/20 dark:text-warning-500",
          variant === "danger" && "bg-danger-50 text-danger-500 dark:bg-danger-950/20 dark:text-danger-500",
          
          variant === "outline" && "border border-border text-text-primary bg-transparent",
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
