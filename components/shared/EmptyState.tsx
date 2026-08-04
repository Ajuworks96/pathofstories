import React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ title = "No content available", description, icon, action, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full py-12 px-6 flex flex-col items-center justify-center text-center border border-dashed border-border rounded-lg bg-surface/50",
          className
        )}
        {...props}
      >
        {icon && <div className="text-text-secondary mb-4 flex justify-center">{icon}</div>}
        <Heading variant="h4" className="mb-2">
          {title}
        </Heading>
        {description && (
          <Paragraph variant="muted" className="max-w-md mx-auto mb-6">
            {description}
          </Paragraph>
        )}
        {action && <div className="flex items-center justify-center gap-4">{action}</div>}
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";
