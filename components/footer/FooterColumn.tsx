import React from "react";
import { cn } from "@/lib/utils";

export interface FooterColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const FooterColumn = React.forwardRef<HTMLDivElement, FooterColumnProps>(
  ({ title, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-4.5", className)}
        {...props}
      >
        {title && (
          <h3 className="text-sm font-bold tracking-wider text-text-primary uppercase select-none">
            {title}
          </h3>
        )}
        {children}
      </div>
    );
  }
);

FooterColumn.displayName = "FooterColumn";
