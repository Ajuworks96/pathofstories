# Component Guidelines: Velvetbyte Framework

This document defines the development rules, classification structures, property requirements, and styling guidelines for components inside the **Velvetbyte Framework**. All UI nodes must be written according to these standards.

---

## 🧱 1. Component Categories

Velvetbyte UI components are divided into four main layers inside `components/`:

### Shared Components (`components/shared/`)
Pure, stateless leaf elements containing no layout grids or page-wide bounds. They handle visual content styling representation:
*   `Heading`: Decouples visual header styles (`display`, `h1`-`h6`) from semantic SEO HTML tags.
*   `Paragraph`: Standard body reading text support (`large`, `default`, `small`, `muted`).
*   `Button`: Clean, neutral action triggers (Primary, Secondary, Outline, Ghost, Link).
*   `Card`: Symmetrical paper-flat boxes using single-line outlines. No glass backdrops.
*   `Badge`: Muted indicator flags and text category tags.
*   `ImageWrapper`: Aspect-ratio box wrappers (`16:9`, `4:3`, `1:1`, `portrait`, `landscape`) enforcing layout stability.

### Layout Components (`components/layout/`)
Feature-agnostic structural layout blocks:
*   `Container`: Controls page horizontal bounds (`max-w-container-xl`) and responsive gutter gaps.
*   `Section`: Vertical page separators applying padding rhythms and background switches.
*   `Grid` & `Stack`: Grid and flexbox layout wrappers mapping rows, columns, and gaps.
*   `Spacer`: Explicit spacing boxes implementing the 8px multiplier system.

### Section Components (`components/sections/`)
Aggregated, semantic page blocks (e.g. Hero, About, Gallery, pricing grids, FAQ accordions).
*   Sections must use the `Section` primitive component as their root block wrapper.
*   They contain no business logic or custom hardcoded client text; they map configurations passed via properties.

### Pattern Components (`patterns/`)
Pre-arranged versions of page sections (`v1`, `v2`, `v3`). They serve as templates that developers copy and customize to build page structures quickly.

---

## 🔧 2. Reusability & Property Rules

*   **HTML Property Extension**: Shared components must extend standard HTML attributes to let developers pass default parameters (like `aria-label`, `disabled`, `onClick`) without writing custom wrappers.
*   **Merge Styles Safely**: Always merge incoming `className` parameters using the custom utility helper `cn(...)`:
    ```typescript
    className={cn("bg-background text-text-primary", className)}
    ```
*   **Reference Forwarding**: Components must forward refs to their primary underlying HTML tag. Use `React.forwardRef` on all layout and shared elements.
*   **Strict Statelessness**: Shared and layout elements must remain stateless. Any dynamic state calculations (e.g., modals, form submissions) belong inside dedicated wrappers under the `modules/` folder.
