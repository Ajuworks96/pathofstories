"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useNavigation } from "./NavigationProvider";
import { DesktopNavItemConfig } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";

export interface MobileNavigationProps {
  items: DesktopNavItemConfig[];
  cta?: React.ReactNode;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ items, cta }) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen, toggleMobileMenu } = useNavigation();

  // Escape key event handling and body scrolling locks
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  return (
    <>
      <button
        type="button"
        onClick={toggleMobileMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 md:hidden cursor-pointer select-none"
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
      >
        <span className="sr-only">Toggle navigation menu</span>
        <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
          <span
            className={cn(
              "w-full h-0.5 bg-current transition-all duration-fast origin-left rounded-full",
              isMobileMenuOpen && "rotate-45 translate-x-1 translate-y-0.5"
            )}
          />
          <span
            className={cn(
              "w-full h-0.5 bg-current transition-all duration-fast rounded-full",
              isMobileMenuOpen && "opacity-0 -translate-x-2"
            )}
          />
          <span
            className={cn(
              "w-full h-0.5 bg-current transition-all duration-fast origin-left rounded-full",
              isMobileMenuOpen && "-rotate-45 translate-x-1 -translate-y-0.5"
            )}
          />
        </div>
      </button>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={items}
        cta={cta}
      />
    </>
  );
};
