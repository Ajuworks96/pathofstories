"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface AnnouncementBarProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  href?: string;
  onDismiss?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  text,
  href,
  onDismiss,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleDismiss = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  const barContent = (
    <div
      className={cn(
        "w-full bg-text-primary text-background text-xs font-semibold py-2.5 px-4 text-center relative flex items-center justify-center gap-2 select-none",
        className
      )}
      {...props}
    >
      <span className="flex-1 text-center truncate">{text}</span>
      {onDismiss && (
        <button
          type="button"
          onClick={handleDismiss}
          className="p-1 text-current hover:opacity-80 transition-opacity focus:outline-none cursor-pointer"
          aria-label="Dismiss announcement"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block hover:opacity-95 transition-opacity">{barContent}</Link>;
  }

  return barContent;
};
