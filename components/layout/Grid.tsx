import React from "react";
import { cn } from "@/lib/utils";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  colsSm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  colsMd?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  colsLg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      as: Component = "div",
      cols = 1,
      colsSm,
      colsMd,
      colsLg,
      gap = "md",
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
          "grid",
          // Gap mapping based on custom spacing tokens
          gap === "none" && "gap-0",
          gap === "xs" && "gap-xs",
          gap === "sm" && "gap-sm",
          gap === "md" && "gap-md",
          gap === "lg" && "gap-lg",
          gap === "xl" && "gap-xl",
          gap === "2xl" && "gap-2xl",
          gap === "3xl" && "gap-3xl",

          // Columns mapping
          cols === 1 && "grid-cols-1",
          cols === 2 && "grid-cols-2",
          cols === 3 && "grid-cols-3",
          cols === 4 && "grid-cols-4",
          cols === 5 && "grid-cols-5",
          cols === 6 && "grid-cols-6",
          cols === 12 && "grid-cols-12",

          // Responsive Columns Sm
          colsSm === 1 && "sm:grid-cols-1",
          colsSm === 2 && "sm:grid-cols-2",
          colsSm === 3 && "sm:grid-cols-3",
          colsSm === 4 && "sm:grid-cols-4",
          colsSm === 5 && "sm:grid-cols-5",
          colsSm === 6 && "sm:grid-cols-6",
          colsSm === 12 && "sm:grid-cols-12",

          // Responsive Columns Md
          colsMd === 1 && "md:grid-cols-1",
          colsMd === 2 && "md:grid-cols-2",
          colsMd === 3 && "md:grid-cols-3",
          colsMd === 4 && "md:grid-cols-4",
          colsMd === 5 && "md:grid-cols-5",
          colsMd === 6 && "md:grid-cols-6",
          colsMd === 12 && "md:grid-cols-12",

          // Responsive Columns Lg
          colsLg === 1 && "lg:grid-cols-1",
          colsLg === 2 && "lg:grid-cols-2",
          colsLg === 3 && "lg:grid-cols-3",
          colsLg === 4 && "lg:grid-cols-4",
          colsLg === 5 && "lg:grid-cols-5",
          colsLg === 6 && "lg:grid-cols-6",
          colsLg === 12 && "lg:grid-cols-12",

          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Grid.displayName = "Grid";
