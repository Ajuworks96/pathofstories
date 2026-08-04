"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  href: string;
  isActive?: boolean;
}

export const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ label, href, isActive, className, ...props }, ref) => {
    const pathname = usePathname();
    const active = isActive !== undefined ? isActive : pathname === href;

    return (
      <Link
        href={href}
        ref={ref}
        className={cn(
          "inline-flex items-center text-sm font-medium text-label px-3 py-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 select-none",
          active
            ? "text-text-primary font-semibold"
            : "text-text-secondary hover:text-text-primary",
          className
        )}
        {...props}
      >
        {label}
      </Link>
    );
  }
);

NavItem.displayName = "NavItem";
