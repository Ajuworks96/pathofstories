"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavDropdownChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavDropdownProps {
  label: string;
  items: NavDropdownChild[];
  className?: string;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({ label, items, className }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isActive = items.some((item) => pathname === item.href);

  // Close dropdown on outside clicks
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          "inline-flex items-center gap-1 text-sm font-medium text-label px-3 py-2 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 cursor-pointer select-none",
          isActive
            ? "text-text-primary"
            : "text-text-secondary hover:text-text-primary",
          className
        )}
      >
        {label}
        <svg
          className={cn("w-4 h-4 transition-transform duration-fast", isOpen && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 z-dropdown mt-2 w-56 origin-top-right rounded-md border border-border bg-background shadow-lg p-1 animate-transition-fast focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {items.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-2.5 text-sm rounded-sm transition-colors text-left focus:outline-none focus:bg-surface",
                  pathname === item.href
                    ? "bg-surface text-text-primary font-medium"
                    : "text-text-secondary hover:bg-surface hover:text-text-primary"
                )}
              >
                <div className="font-semibold">{item.label}</div>
                {item.description && (
                  <div className="text-xs text-text-secondary mt-0.5 font-normal leading-relaxed">
                    {item.description}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
