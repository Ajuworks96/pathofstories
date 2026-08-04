import React from "react";
import { NavItem, NavItemProps } from "./NavItem";
import { NavDropdown, NavDropdownProps } from "./NavDropdown";
import { NavMegaMenu, NavMegaMenuProps } from "./NavMegaMenu";
import { cn } from "@/lib/utils";

export type DesktopNavItemConfig =
  | ({ type: "link" } & NavItemProps)
  | ({ type: "dropdown" } & NavDropdownProps)
  | ({ type: "megamenu" } & NavMegaMenuProps);

export interface DesktopNavigationProps extends React.HTMLAttributes<HTMLElement> {
  items: DesktopNavItemConfig[];
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ items, className, ...props }) => {
  return (
    <nav className={cn("hidden md:flex items-center gap-1.5", className)} {...props}>
      {items.map((item, index) => {
        if (item.type === "dropdown") {
          return <NavDropdown key={index} label={item.label} items={item.items} />;
        }
        if (item.type === "megamenu") {
          return <NavMegaMenu key={index} label={item.label} categories={item.categories} />;
        }
        return <NavItem key={index} label={item.label} href={item.href} />;
      })}
    </nav>
  );
};
