import React from "react";
import { cn } from "@/lib/utils";

export type FooterDividerProps = React.HTMLAttributes<HTMLDivElement>;

export const FooterDivider = React.forwardRef<HTMLDivElement, FooterDividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="separator"
        className={cn("w-full h-px bg-border my-8 sm:my-12", className)}
        {...props}
      />
    );
  }
);

FooterDivider.displayName = "FooterDivider";
