import React from "react";
import { cn } from "@/lib/utils";

export type HeaderActionsProps = React.HTMLAttributes<HTMLDivElement>;

export const HeaderActions = React.forwardRef<HTMLDivElement, HeaderActionsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-4", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

HeaderActions.displayName = "HeaderActions";
