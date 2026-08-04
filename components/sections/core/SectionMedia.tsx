import React from "react";
import { cn } from "@/lib/utils";

export type SectionMediaProps = React.HTMLAttributes<HTMLDivElement>;

export const SectionMedia = React.forwardRef<HTMLDivElement, SectionMediaProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full overflow-hidden rounded-lg", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SectionMedia.displayName = "SectionMedia";
