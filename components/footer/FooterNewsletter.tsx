import React from "react";
import { cn } from "@/lib/utils";

export interface FooterNewsletterProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSubmit"> {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const FooterNewsletter = React.forwardRef<HTMLDivElement, FooterNewsletterProps>(
  ({ title = "Subscribe to our newsletter", description, placeholder = "Enter your email", buttonText = "Subscribe", onSubmit, className, ...props }, ref) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (onSubmit) onSubmit(e);
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-3.5 max-w-sm", className)}
        {...props}
      >
        {title && <h3 className="text-sm font-bold tracking-wider text-text-primary uppercase select-none">{title}</h3>}
        {description && <p className="text-sm text-text-secondary leading-relaxed">{description}</p>}
        <form onSubmit={handleSubmit} className="flex gap-2 w-full mt-1">
          <input
            type="email"
            required
            placeholder={placeholder}
            className="flex-1 min-w-0 bg-surface border border-border text-text-primary text-sm px-3.5 py-2.5 rounded-md focus:outline-none focus:border-primary-500 transition-colors placeholder:text-text-secondary/50"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-text-primary text-background hover:opacity-90 active:scale-98 transition-all px-4 py-2.5 text-sm font-semibold rounded-md cursor-pointer select-none"
          >
            {buttonText}
          </button>
        </form>
      </div>
    );
  }
);

FooterNewsletter.displayName = "FooterNewsletter";
