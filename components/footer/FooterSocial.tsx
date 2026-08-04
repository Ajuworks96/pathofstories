import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface FooterSocialItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface FooterSocialProps extends React.HTMLAttributes<HTMLDivElement> {
  items: FooterSocialItem[];
}

export const FooterSocial = React.forwardRef<HTMLDivElement, FooterSocialProps>(
  ({ items, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-3.5", className)}
        {...props}
      >
        {items.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            aria-label={item.label}
            className="inline-flex items-center justify-center p-2 rounded-md border border-border bg-surface text-text-secondary hover:text-text-primary hover:border-primary-400 dark:hover:border-primary-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500"
          >
            <span className="w-4 h-4 [&_svg]:w-full [&_svg]:h-full shrink-0">{item.icon}</span>
          </Link>
        ))}
      </div>
    );
  }
);

FooterSocial.displayName = "FooterSocial";
