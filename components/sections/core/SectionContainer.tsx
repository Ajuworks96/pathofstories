import React from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export const SectionContainer = React.forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ size = "xl", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full mx-auto px-4 sm:px-6 md:px-8",
          size === "xs" && "max-w-md",
          size === "sm" && "max-w-container-sm",
          size === "md" && "max-w-container-md",
          size === "lg" && "max-w-container-lg",
          size === "xl" && "max-w-container-xl",
          size === "2xl" && "max-w-container-2xl",
          size === "full" && "max-w-full",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SectionContainer.displayName = "SectionContainer";
