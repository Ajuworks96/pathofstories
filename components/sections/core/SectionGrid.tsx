import React from "react";
import { cn } from "@/lib/utils";

export interface SectionGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 12 | "auto" | "none";
}

export const SectionGrid = React.forwardRef<HTMLDivElement, SectionGridProps>(
  ({ cols = "auto", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid gap-8 sm:gap-10 md:gap-12",
          cols === 1 && "grid-cols-1",
          cols === 2 && "grid-cols-1 md:grid-cols-2",
          cols === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          cols === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
          cols === 12 && "grid-cols-12",
          cols === "auto" && "grid-cols-1 md:grid-flow-col md:auto-cols-fr",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SectionGrid.displayName = "SectionGrid";
