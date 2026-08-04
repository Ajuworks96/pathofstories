import React from "react";
import { cn } from "@/lib/utils";

export type SectionHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-3.5 max-w-3xl", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";
