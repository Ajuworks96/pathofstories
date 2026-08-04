import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface FooterNavigationLink {
  label: string;
  href: string;
}

export interface FooterNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  links: FooterNavigationLink[];
}

export const FooterNavigation = React.forwardRef<HTMLDivElement, FooterNavigationProps>(
  ({ links, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn("flex flex-col gap-2.5", className)}
        {...props}
      >
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="text-sm text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 rounded-sm py-0.5 select-none"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    );
  }
);

FooterNavigation.displayName = "FooterNavigation";
