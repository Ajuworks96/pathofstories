import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface FooterLogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  text?: string;
  icon?: React.ReactNode;
}

export const FooterLogo = React.forwardRef<HTMLAnchorElement, FooterLogoProps>(
  ({ href = "/", text = "Velvetbyte", icon, className, ...props }, ref) => {
    return (
      <Link
        href={href}
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2.5 font-bold text-label text-base tracking-tight text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 rounded-md py-1",
          className
        )}
        {...props}
      >
        {icon && <span className="flex-shrink-0 flex items-center justify-center">{icon}</span>}
        {text && <span className="font-extrabold">{text}</span>}
      </Link>
    );
  }
);

FooterLogo.displayName = "FooterLogo";
