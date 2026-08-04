import React from "react";
import { cn } from "@/lib/utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "accent" | "outline";
  interactive?: boolean;
  onRemove?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ variant = "default", interactive = false, onRemove, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold transition-all duration-fast select-none",
          
          // Variants mapping design colors
          variant === "default" && "bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300",
          variant === "secondary" && "bg-secondary-100 text-secondary-800 dark:bg-secondary-900/40 dark:text-secondary-300",
          variant === "accent" && "bg-accent-50 text-accent-950 dark:bg-accent-950/20 dark:text-accent-200",
          variant === "outline" && "border border-border text-text-primary bg-transparent",

          // Interactive settings
          interactive && "cursor-pointer hover:brightness-95 active:scale-95",
          className
        )}
        {...props}
      >
        {children}
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="flex-shrink-0 inline-flex items-center justify-center p-0.5 rounded-full text-current hover:bg-black/10 dark:hover:bg-white/10 transition-colors focus-visible:outline-none cursor-pointer"
            aria-label="Remove tag"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = "Tag";
