import React from "react";
import { cn } from "@/lib/utils";

export interface BaseSectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export const BaseSection = React.forwardRef<HTMLElement, BaseSectionProps>(
  ({ as: Component = "section", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full relative overflow-hidden bg-background text-text-primary",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

BaseSection.displayName = "BaseSection";
