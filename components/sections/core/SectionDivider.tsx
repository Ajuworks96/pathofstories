import React from "react";
import { cn } from "@/lib/utils";

export type SectionDividerProps = React.HTMLAttributes<HTMLDivElement>;

export const SectionDivider = React.forwardRef<HTMLDivElement, SectionDividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
        className={cn("w-full h-px bg-border", className)}
        {...props}
      />
    );
  }
);

SectionDivider.displayName = "SectionDivider";
