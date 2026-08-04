import React from "react";
import { cn } from "@/lib/utils";

export type SectionContentProps = React.HTMLAttributes<HTMLDivElement>;

export const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("text-text-secondary leading-relaxed", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SectionContent.displayName = "SectionContent";
