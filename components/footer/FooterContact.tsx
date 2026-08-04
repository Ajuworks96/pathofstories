import React from "react";
import { cn } from "@/lib/utils";

export interface FooterContactProps extends React.HTMLAttributes<HTMLDivElement> {
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
}

export const FooterContact = React.forwardRef<HTMLDivElement, FooterContactProps>(
  ({ address, phone, email, hours, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-3 text-sm text-text-secondary leading-relaxed", className)}
        {...props}
      >
        {address && (
          <div className="flex gap-2">
            <span className="font-medium text-text-primary shrink-0">Address:</span>
            <span>{address}</span>
          </div>
        )}
        {phone && (
          <div className="flex gap-2">
            <span className="font-medium text-text-primary shrink-0">Phone:</span>
            <a href={`tel:${phone}`} className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 rounded-sm">
              {phone}
            </a>
          </div>
        )}
        {email && (
          <div className="flex gap-2">
            <span className="font-medium text-text-primary shrink-0">Email:</span>
            <a href={`mailto:${email}`} className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 rounded-sm">
              {email}
            </a>
          </div>
        )}
        {hours && (
          <div className="flex gap-2">
            <span className="font-medium text-text-primary shrink-0">Hours:</span>
            <span>{hours}</span>
          </div>
        )}
      </div>
    );
  }
);

FooterContact.displayName = "FooterContact";
