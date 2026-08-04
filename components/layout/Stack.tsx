import React from "react";
import { cn } from "@/lib/utils";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  directionSm?: "row" | "col";
  directionMd?: "row" | "col";
  directionLg?: "row" | "col";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      as: Component = "div",
      direction = "col",
      directionSm,
      directionMd,
      directionLg,
      gap = "md",
      align = "stretch",
      justify = "start",
      wrap = false,
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
          "flex",
          // Direction
          direction === "col" && "flex-col",
          direction === "row" && "flex-row",
          direction === "col-reverse" && "flex-col-reverse",
          direction === "row-reverse" && "flex-row-reverse",

          // Responsive Direction Sm
          directionSm === "col" && "sm:flex-col",
          directionSm === "row" && "sm:flex-row",

          // Responsive Direction Md
          directionMd === "col" && "md:flex-col",
          directionMd === "row" && "md:flex-row",

          // Responsive Direction Lg
          directionLg === "col" && "lg:flex-col",
          directionLg === "row" && "lg:flex-row",

          // Gap mapping based on custom spacing tokens
          gap === "none" && "gap-0",
          gap === "xs" && "gap-xs",
          gap === "sm" && "gap-sm",
          gap === "md" && "gap-md",
          gap === "lg" && "gap-lg",
          gap === "xl" && "gap-xl",
          gap === "2xl" && "gap-2xl",
          gap === "3xl" && "gap-3xl",

          // Align
          align === "start" && "items-start",
          align === "center" && "items-center",
          align === "end" && "items-end",
          align === "stretch" && "items-stretch",
          align === "baseline" && "items-baseline",

          // Justify
          justify === "start" && "justify-start",
          justify === "center" && "justify-center",
          justify === "end" && "justify-end",
          justify === "between" && "justify-between",
          justify === "around" && "justify-around",
          justify === "evenly" && "justify-evenly",

          // Wrap
          wrap && "flex-wrap",

          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Stack.displayName = "Stack";
