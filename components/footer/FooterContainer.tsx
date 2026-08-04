import React from "react";
import { cn } from "@/lib/utils";

export type FooterContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const FooterContainer = React.forwardRef<HTMLDivElement, FooterContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-container-xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FooterContainer.displayName = "FooterContainer";
