import React from "react";
import { cn } from "@/lib/utils";

export interface SectionSpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

export const SectionSpacing = React.forwardRef<HTMLDivElement, SectionSpacingProps>(
  ({ padding = "md", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full",
          padding === "sm" && "py-12 sm:py-16 md:py-20",
          padding === "md" && "py-16 sm:py-24 md:py-32",
          padding === "lg" && "py-24 sm:py-32 md:py-48",
          padding === "xl" && "py-32 sm:py-48 md:py-64",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SectionSpacing.displayName = "SectionSpacing";
