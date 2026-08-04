import React from "react";
import { cn } from "@/lib/utils";

export interface IconWrapperProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg" | "xl" | "custom";
  variant?: "default" | "secondary" | "accent" | "custom";
}

export const IconWrapper = React.forwardRef<HTMLSpanElement, IconWrapperProps>(
  ({ size = "md", variant = "default", className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center shrink-0 [&_svg]:w-full [&_svg]:h-full",
          // Sizing
          size === "sm" && "w-4 h-4",
          size === "md" && "w-5 h-5",
          size === "lg" && "w-6 h-6",
          size === "xl" && "w-8 h-8",
          // Variants mapping neutral theme colors
          variant === "default" && "text-text-primary",
          variant === "secondary" && "text-text-secondary",
          variant === "accent" && "text-accent-500",
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

IconWrapper.displayName = "IconWrapper";
