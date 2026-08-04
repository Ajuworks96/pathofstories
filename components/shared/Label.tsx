import React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  variant?: "default" | "secondary" | "accent";
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-label font-medium select-none cursor-default",
          variant === "default" && "text-text-primary",
          variant === "secondary" && "text-text-secondary",
          variant === "accent" && "text-accent-500",
          className
        )}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";
