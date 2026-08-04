import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "rectangle" | "circle";
  animate?: boolean;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant = "rectangle", animate = true, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-surface shrink-0",
          variant === "rectangle" && "rounded-md w-full h-4",
          variant === "circle" && "rounded-full w-12 h-12",
          animate && "animate-pulse",
          className
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";
