"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavMegaMenuCategoryItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavMegaMenuCategory {
  title: string;
  items: NavMegaMenuCategoryItem[];
}

export interface NavMegaMenuProps {
  label: string;
  categories: NavMegaMenuCategory[];
  className?: string;
}

export const NavMegaMenu: React.FC<NavMegaMenuProps> = ({ label, categories, className }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isActive = categories.some((cat) => cat.items.some((item) => pathname === item.href));

  // Close mega menu on outside click
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

  // Close mega menu on Escape key
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
    <div ref={containerRef} className="static">
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
        <div className="absolute left-0 right-0 w-full z-dropdown mt-2 border-y border-border bg-background shadow-lg p-6 sm:p-8 animate-transition-fast focus:outline-none">
          <div className="max-w-container-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category, catIdx) => (
              <div key={catIdx} className="flex flex-col gap-4">
                <div className="text-xs font-bold tracking-wider text-text-secondary uppercase select-none">
                  {category.title}
                </div>
                <div className="flex flex-col gap-3">
                  {category.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "group/mega block text-sm transition-colors rounded-sm focus:outline-none",
                        pathname === item.href ? "text-text-primary font-medium" : "text-text-secondary hover:text-text-primary"
                      )}
                    >
                      <div className="font-semibold group-hover/mega:text-text-primary">{item.label}</div>
                      {item.description && (
                        <div className="text-xs text-text-secondary mt-0.5 font-normal leading-relaxed">
                          {item.description}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
