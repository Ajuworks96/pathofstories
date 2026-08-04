import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  align?: "left" | "center" | "right";
  cleanPadding?: boolean;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      as: Component = "div",
      size = "2xl",
      align = "center",
      cleanPadding = false,
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
          "w-full",
          // Wide responsive padding
          !cleanPadding && "px-6 sm:px-10 md:px-14 lg:px-16",
          // Alignment
          align === "center" && "mx-auto",
          align === "left" && "mr-auto ml-0",
          align === "right" && "ml-auto mr-0",
          // Max-width mapping based on custom container tokens
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
      </Component>
    );
  }
);

Container.displayName = "Container";
