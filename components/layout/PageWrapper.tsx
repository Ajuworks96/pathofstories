import React from "react";
import { cn } from "@/lib/utils";

export interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export const PageWrapper = React.forwardRef<HTMLDivElement, PageWrapperProps>(
  ({ as: Component = "div", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "min-h-screen flex flex-col justify-between bg-background text-text-primary selection:bg-accent-500/30 selection:text-accent-200",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

PageWrapper.displayName = "PageWrapper";
