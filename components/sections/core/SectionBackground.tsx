import React from "react";
import { cn } from "@/lib/utils";

export type SectionBackgroundProps = React.HTMLAttributes<HTMLDivElement>;

export const SectionBackground = React.forwardRef<HTMLDivElement, SectionBackgroundProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("absolute inset-0 -z-10 select-none pointer-events-none", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SectionBackground.displayName = "SectionBackground";
