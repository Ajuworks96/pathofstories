# Velvetbyte Header System Spec

This document details the modular, highly configurable Header Navigation System engineered for the **Velvetbyte Framework v1**. It provides guidelines for configuring brand identity logos, navigation linkages, accessible dialog drawer transitions, and custom CTA actions.

---

## 🏗️ 1. Architecture Overview

The Header System is split into modular sub-components located in [`components/layout/header/`](file:///Users/arjun/Development/Velvetbyte-Framework/components/layout/header):

```
components/layout/header/
├── Header.tsx             # Root layout coordinator (Sticky / Scroll handler)
├── HeaderContainer.tsx    # Flex container bounding columns (Logo-Nav-CTA)
├── Logo.tsx               # Branding logo wrapper (Text / Graphic SVG)
├── DesktopNavigation.tsx  # Horizontal navigation wrapper
├── MobileNavigation.tsx   # Vertical mobile menu overlay & drawer
├── NavItem.tsx            # Single nav link & dropdown popup menu handler
├── CTAButton.tsx          # Custom CTA action wrapper
└── index.ts               # Package public exports index
```

---

## 🔧 2. Configuration & Customization

The root component [`Header.tsx`](file:///Users/arjun/Development/Velvetbyte-Framework/components/layout/header/Header.tsx) is completely data-driven. It accepts props to easily customize navigation schemas without hardcoding client details.

### Navigation Item Schema (`NavItemProps`)
```typescript
interface NavItemDropdownChild {
  label: string;
  href: string;
  description?: string; // Optional detailed subtitle
}

interface NavItemProps {
  label: string;
  href?: string;         // If omitted, triggers dropdown state
  children?: NavItemDropdownChild[];
}
```

### Configurable Props (`HeaderProps`)
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `mode` | `"transparent" \| "solid"` | `"transparent"` | Transparent mode transitions to solid on scroll. |
| `sticky` | `boolean` | `true` | Fixed header position at the top viewport. |
| `navItems` | `NavItemProps[]` | `[]` | Navigation list config. |
| `logo` | `LogoProps` | - | Branding titles and SVG icon nodes. |
| `cta` | `CTAButtonProps` | - | Primary actions configuration. |

---

## ♿ 3. Accessibility & WCAG Compliance

Velvetbyte Header System strictly adheres to WCAG 2.1 accessibility benchmarks:

*   **Semantic Elements**: Wrapped in a semantic `<header>` element with nested `<nav>` guidelines.
*   **ARIA Attributes**:
    *   Dropdown triggers use `aria-expanded` and `aria-haspopup="true"` to announce state to screen readers.
    *   Mobile triggers bind `aria-expanded` and target their modal overlay via `aria-controls`.
    *   The mobile navigation panel acts as a modal dialog, holding `role="dialog"` and `aria-modal="true"`.
*   **Keyboard Navigation**:
    *   Dropdown portals listen to the **Escape** key and close active panels instantly.
    *   Focus states use thin, high-contrast rings (`focus-visible:ring-2 focus-visible:ring-offset-2`).
*   **Scroll & Overlay Traps**: Mobile navigation locks body scrolling (`overflow: hidden`) when the drawer is open to prevent background mouse navigation conflicts.

---

## 📱 4. Responsive Breakpoints

*   **Desktop & Laptops (>= 768px)**: Displays horizontal logo left, navigation center, and CTA right alignment bounds inside `HeaderContainer`.
*   **Mobile & Tablets (< 768px)**: Desktop links and primary CTAs hide. A responsive trigger button (hamburger) appears on the right. When tapped, a vertical navigation drawer slides up smoothly. The primary CTA button is rendered full-width at the drawer's base.

---

## 🎨 5. Style Customizations

*   **Scroll Behavior**: In transparent mode, the header initially renders with no backgrounds or borders. Upon scrolling past **20px**, a scroll state event triggers, applying a solid surface fill (`bg-background/95`), custom border outline (`border-border`), and an elegant blurred backdrop filter.
*   **Theme Integration**: Color values rely on our design token variables. The header adapts instantly to light/dark system themes without breaking layout styles.
