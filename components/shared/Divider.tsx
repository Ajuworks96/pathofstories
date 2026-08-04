import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation = "horizontal", spacing = "md", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          "bg-border shrink-0",
          // Horizontal parameters
          orientation === "horizontal" && "w-full h-px",
          orientation === "horizontal" && spacing === "none" && "my-0",
          orientation === "horizontal" && spacing === "xs" && "my-xs",
          orientation === "horizontal" && spacing === "sm" && "my-sm",
          orientation === "horizontal" && spacing === "md" && "my-md",
          orientation === "horizontal" && spacing === "lg" && "my-lg",
          orientation === "horizontal" && spacing === "xl" && "my-xl",

          // Vertical parameters
          orientation === "vertical" && "h-full w-px self-stretch",
          orientation === "vertical" && spacing === "none" && "mx-0",
          orientation === "vertical" && spacing === "xs" && "mx-xs",
          orientation === "vertical" && spacing === "sm" && "mx-sm",
          orientation === "vertical" && spacing === "md" && "mx-md",
          orientation === "vertical" && spacing === "lg" && "mx-lg",
          orientation === "vertical" && spacing === "xl" && "mx-xl",
          
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
