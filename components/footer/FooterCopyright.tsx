import React from "react";
import { cn } from "@/lib/utils";

export interface FooterCopyrightProps extends React.HTMLAttributes<HTMLDivElement> {
  companyName: string;
  startYear?: number;
}

export const FooterCopyright = React.forwardRef<HTMLDivElement, FooterCopyrightProps>(
  ({ companyName, startYear, className, ...props }, ref) => {
    const currentYear = new Date().getFullYear();
    const yearString = startYear ? `${startYear}–${currentYear}` : `${currentYear}`;

    return (
      <div
        ref={ref}
        className={cn("text-xs text-text-secondary select-none", className)}
        {...props}
      >
        © {yearString} {companyName}. All rights reserved.
      </div>
    );
  }
);

FooterCopyright.displayName = "FooterCopyright";
