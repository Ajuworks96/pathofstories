import React from "react";
import { cn } from "@/lib/utils";

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  axis?: "vertical" | "horizontal";
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  (
    {
      size = "md",
      axis = "vertical",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "shrink-0",
          // Vertical sizes mapping spacing scale
          axis === "vertical" && size === "xs" && "h-xs w-px",
          axis === "vertical" && size === "sm" && "h-sm w-px",
          axis === "vertical" && size === "md" && "h-md w-px",
          axis === "vertical" && size === "lg" && "h-lg w-px",
          axis === "vertical" && size === "xl" && "h-xl w-px",
          axis === "vertical" && size === "2xl" && "h-2xl w-px",
          axis === "vertical" && size === "3xl" && "h-3xl w-px",

          // Horizontal sizes mapping spacing scale
          axis === "horizontal" && size === "xs" && "w-xs h-px",
          axis === "horizontal" && size === "sm" && "w-sm h-px",
          axis === "horizontal" && size === "md" && "w-md h-px",
          axis === "horizontal" && size === "lg" && "w-lg h-px",
          axis === "horizontal" && size === "xl" && "w-xl h-px",
          axis === "horizontal" && size === "2xl" && "w-2xl h-px",
          axis === "horizontal" && size === "3xl" && "w-3xl h-px",

          className
        )}
        {...props}
      />
    );
  }
);

Spacer.displayName = "Spacer";
