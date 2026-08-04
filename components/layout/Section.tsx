import React from "react";
import { cn } from "@/lib/utils";
import { Container, ContainerProps } from "./Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  background?: "default" | "muted" | "accent" | "dark" | "transparent";
  spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  containerSize?: ContainerProps["size"] | "none";
  cleanPadding?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Component = "section",
      background = "default",
      spacing = "lg",
      containerSize = "xl",
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
          "w-full relative",
          // Background configurations matching design tokens
          background === "default" && "bg-background text-text-primary",
          background === "muted" && "bg-surface text-text-primary",
          background === "accent" && "bg-accent-50 text-accent-950 dark:bg-accent-950/20 dark:text-accent-200",
          background === "dark" && "bg-secondary-950 text-secondary-50 dark:bg-black",
          background === "transparent" && "bg-transparent",
          
          // Vertical rhythm spacing configurations based on spacing tokens
          spacing === "none" && "py-0",
          spacing === "xs" && "py-4 sm:py-6",
          spacing === "sm" && "py-8 sm:py-12",
          spacing === "md" && "py-12 sm:py-16 md:py-20",
          spacing === "lg" && "py-16 sm:py-24 md:py-32",
          spacing === "xl" && "py-24 sm:py-32 md:py-40",
          spacing === "2xl" && "py-32 sm:py-40 md:py-48",
          className
        )}
        {...props}
      >
        {containerSize !== "none" ? (
          <Container size={containerSize} cleanPadding={cleanPadding}>
            {children}
          </Container>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Section.displayName = "Section";
