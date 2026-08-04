"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { NavigationProvider } from "./NavigationProvider";
import { AnnouncementBar, AnnouncementBarProps } from "./AnnouncementBar";
import { HeaderBrand, HeaderBrandProps } from "./HeaderBrand";
import { DesktopNavigation, DesktopNavItemConfig } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { HeaderActions } from "./HeaderActions";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  mode?: "transparent" | "solid";
  sticky?: boolean;
  contained?: boolean;
  navItems: DesktopNavItemConfig[];
  brand?: HeaderBrandProps;
  actions?: React.ReactNode;
  announcement?: AnnouncementBarProps;
}

export const Header: React.FC<HeaderProps> = ({
  mode = "transparent",
  sticky = true,
  contained = true,
  navItems = [],
  brand,
  actions,
  announcement,
  className,
  ...props
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (mode === "solid") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mode]);

  return (
    <NavigationProvider>
      <div className={cn("w-full flex flex-col", sticky && "sticky top-0 z-fixed")}>
        {/* Top Dismissible Announcement Banner */}
        {announcement && <AnnouncementBar {...announcement} />}

        <header
          className={cn(
            "w-full transition-all duration-normal ease-in-out border-b",
            // Scrolled styling
            isScrolled
              ? "bg-background/95 backdrop-blur-md border-border shadow-sm"
              : "bg-transparent border-transparent",
            className
          )}
          {...props}
        >
          <div
            className={cn(
              "w-full px-4 sm:px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between gap-4",
              contained ? "max-w-container-xl mx-auto" : "max-w-full"
            )}
          >
            {/* Logo Brand Slot (Left) */}
            <HeaderBrand {...brand} />

            {/* Desktop Link items (Center) */}
            <DesktopNavigation items={navItems} />

            {/* Right Slot: Actions, Mobile Hamburger Trigger */}
            <div className="flex items-center gap-4">
              {actions && <HeaderActions>{actions}</HeaderActions>}
              <MobileNavigation items={navItems} cta={actions} />
            </div>
          </div>
        </header>
      </div>
    </NavigationProvider>
  );
};
