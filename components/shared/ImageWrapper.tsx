import React from "react";
import { cn } from "@/lib/utils";

export interface ImageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: "16-9" | "4-3" | "1-1" | "portrait" | "landscape" | "auto";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  hoverZoom?: boolean;
}

export const ImageWrapper = React.forwardRef<HTMLDivElement, ImageWrapperProps>(
  (
    {
      aspectRatio = "auto",
      rounded = "none",
      hoverZoom = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden w-full bg-surface",
          // Aspect Ratio classes
          aspectRatio === "16-9" && "aspect-video",
          aspectRatio === "4-3" && "aspect-[4/3]",
          aspectRatio === "1-1" && "aspect-square",
          aspectRatio === "portrait" && "aspect-[3/4]",
          aspectRatio === "landscape" && "aspect-[3/2]",
          aspectRatio === "auto" && "aspect-auto",

          // Rounded mappings matching border-radius tokens
          rounded === "none" && "rounded-none",
          rounded === "sm" && "rounded-sm",
          rounded === "md" && "rounded-md",
          rounded === "lg" && "rounded-lg",
          rounded === "xl" && "rounded-xl",
          rounded === "2xl" && "rounded-2xl",
          rounded === "full" && "rounded-full",
          className
        )}
        {...props}
      >
        {/* We use a container class targeting child images for smooth object fits and zoom transforms */}
        <div
          className={cn(
            "w-full h-full [&_img]:object-cover [&_img]:w-full [&_img]:h-full [&_img]:transition-all [&_img]:duration-slow",
            hoverZoom && "[&_img]:hover:scale-105"
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

ImageWrapper.displayName = "ImageWrapper";
