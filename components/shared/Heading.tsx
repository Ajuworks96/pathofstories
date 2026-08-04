import React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "left" | "center" | "right" | "justify";
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as,
      variant = "h2",
      align = "left",
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Default semantic tag matches variant, but can be overridden
    const Component = as || (variant === "display" ? "h1" : variant);

    return (
      <Component
        ref={ref}
        className={cn(
          "text-text-primary tracking-tight",
          // Alignment
          align === "left" && "text-left",
          align === "center" && "text-center",
          align === "right" && "text-right",
          align === "justify" && "text-justify",

          // Size mapping to custom utilities in styles/globals.css
          variant === "display" && "text-display",
          variant === "h1" && "text-h1",
          variant === "h2" && "text-h2",
          variant === "h3" && "text-h3",
          variant === "h4" && "text-h4",
          variant === "h5" && "text-h5",
          variant === "h6" && "text-h6",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";
