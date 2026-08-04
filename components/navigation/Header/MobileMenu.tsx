"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DesktopNavItemConfig } from "./DesktopNavigation";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: DesktopNavItemConfig[];
  cta?: React.ReactNode;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, items, cta }) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 top-16 sm:top-20 z-fixed bg-background border-t border-border flex flex-col transition-all duration-normal ease-in-out md:hidden",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
          {items.map((item, index) => {
            if (item.type === "dropdown") {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-xs font-bold tracking-wider text-text-secondary uppercase select-none">
                    {item.label}
                  </span>
                  <div className="pl-4 border-l border-border flex flex-col gap-3 mt-1">
                    {item.items.map((child, cIdx) => (
                      <Link
                        key={cIdx}
                        href={child.href}
                        onClick={onClose}
                        className={cn(
                          "text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 rounded-md py-0.5",
                          pathname === child.href
                            ? "text-text-primary font-semibold"
                            : "text-text-secondary hover:text-text-primary"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            if (item.type === "megamenu") {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-xs font-bold tracking-wider text-text-secondary uppercase select-none">
                    {item.label}
                  </span>
                  <div className="pl-4 border-l border-border flex flex-col gap-4 mt-1">
                    {item.categories.map((category, catIdx) => (
                      <div key={catIdx} className="flex flex-col gap-2">
                        <div className="text-xs font-semibold text-text-secondary select-none">
                          {category.title}
                        </div>
                        <div className="flex flex-col gap-2.5 pl-2">
                          {category.items.map((child, cIdx) => (
                            <Link
                              key={cIdx}
                              href={child.href}
                              onClick={onClose}
                              className={cn(
                                "text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 rounded-md py-0.5",
                                pathname === child.href
                                  ? "text-text-primary font-medium"
                                  : "text-text-secondary hover:text-text-primary"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // Standard Link
            const active = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 rounded-md py-1",
                  active ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {cta && (
          <div className="mt-8 border-t border-border pt-6 flex flex-col">
            {cta}
          </div>
        )}
      </div>
    </div>
  );
};
