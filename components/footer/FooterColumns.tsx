import React from "react";
import { cn } from "@/lib/utils";

export type FooterColumnsProps = React.HTMLAttributes<HTMLDivElement>;

export const FooterColumns = React.forwardRef<HTMLDivElement, FooterColumnsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FooterColumns.displayName = "FooterColumns";
