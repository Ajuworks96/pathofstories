import React from "react";
import { cn } from "@/lib/utils";

export type FooterBottomProps = React.HTMLAttributes<HTMLDivElement>;

export const FooterBottom = React.forwardRef<HTMLDivElement, FooterBottomProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full flex flex-col-reverse sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FooterBottom.displayName = "FooterBottom";
