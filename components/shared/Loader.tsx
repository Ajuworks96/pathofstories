import React from "react";
import { cn } from "@/lib/utils";

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "secondary" | "accent";
}

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ size = "md", variant = "default", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label="loading"
        className={cn(
          "inline-block rounded-full border-solid border-current border-r-transparent animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] shrink-0",
          
          // Sizing
          size === "sm" && "w-4 h-4 border-2",
          size === "md" && "w-8 h-8 border-2",
          size === "lg" && "w-12 h-12 border-3",

          // Colors mapping design tokens
          variant === "default" && "text-text-primary",
          variant === "secondary" && "text-text-secondary",
          variant === "accent" && "text-accent-500",
          className
        )}
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);

Loader.displayName = "Loader";
