import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  variant?: "outline" | "flat" | "transparent";
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      as: Component = "div",
      variant = "outline",
      hoverable = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "rounded-lg overflow-hidden transition-all duration-normal",
          
          // Variants matching token structure
          variant === "outline" && "border border-border bg-background text-text-primary",
          variant === "flat" && "bg-surface text-text-primary border border-transparent",
          variant === "transparent" && "bg-transparent text-text-primary",

          // Premium minimalist hover transitions
          hoverable && "hover:border-primary-400 dark:hover:border-primary-700",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";
