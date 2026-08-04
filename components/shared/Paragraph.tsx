import React from "react";
import { cn } from "@/lib/utils";

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType;
  variant?: "large" | "default" | "small" | "muted";
  align?: "left" | "center" | "right" | "justify";
}

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    {
      as: Component = "p",
      variant = "default",
      align = "left",
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
          // Alignment
          align === "left" && "text-left",
          align === "center" && "text-center",
          align === "right" && "text-right",
          align === "justify" && "text-justify",

          // Size mapping matching design system scale
          variant === "large" && "text-body-large text-text-primary",
          variant === "default" && "text-body text-text-primary",
          variant === "small" && "text-body-small text-text-primary",
          variant === "muted" && "text-caption text-text-secondary",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Paragraph.displayName = "Paragraph";
