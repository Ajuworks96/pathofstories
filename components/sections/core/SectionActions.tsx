import React from "react";
import { cn } from "@/lib/utils";

export type SectionActionsProps = React.HTMLAttributes<HTMLDivElement>;

export const SectionActions = React.forwardRef<HTMLDivElement, SectionActionsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap items-center gap-4 mt-2", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SectionActions.displayName = "SectionActions";
