import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface FooterLegalLink {
  label: string;
  href: string;
}

export interface FooterLegalProps extends React.HTMLAttributes<HTMLDivElement> {
  links: FooterLegalLink[];
}

export const FooterLegal = React.forwardRef<HTMLDivElement, FooterLegalProps>(
  ({ links, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-secondary", className)}
        {...props}
      >
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 rounded-sm py-0.5 select-none"
          >
            {link.label}
          </Link>
        ))}
      </div>
    );
  }
);

FooterLegal.displayName = "FooterLegal";
