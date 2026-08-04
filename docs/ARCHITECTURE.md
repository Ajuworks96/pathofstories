# Architectural Specification: Velvetbyte Framework

This document outlines the software architecture, technical layout paradigms, data flows, and compiler settings for the **Velvetbyte Framework**. It serves as the master guide for maintaining clean, scalable codebase boundaries.

---

## 🧱 1. Core Layout Paradigms

Velvetbyte operates on a clean layout hierarchy split into five main structural components located in [`components/layout/`](file:///Users/arjun/Development/Velvetbyte-Framework/components/layout):

*   **`Container`**: Restricts the maximum width of content grids across different screen sizes. Reusable sizes range from `xs` (448px) to `2xl` (1536px) and `full` (100%).
*   **`Section`**: A full-bleed block wrapper that splits pages vertically. Enforces standard padding rhythms (`py-16 sm:py-24 md:py-32`) and alternates background themes.
*   **`Grid`**: Flexibly aligns columns (1 to 12 columns) using standard spacing gaps.
*   **`Stack`**: Manages responsive Flexbox flows (vertical/horizontal alignments) and gaps.
*   **`Spacer`**: Inserts vertical or horizontal empty space to decouple visual blocks without margin rules.

---

## 🔄 2. Data Flow & Routing Architecture

Velvetbyte leverages the **Next.js 15 App Router** for static rendering and optimized routing:

```
[Request]
   │
   ▼
[app/layout.tsx] (Root Layout, global CSS, metadata declarations)
   │
   ▼
[app/page.tsx] (Dynamic/Static route pages, aggregates Section blocks)
   │
   ├──▶ [components/sections/] (Block layout sections e.g. Hero, Services)
   │       │
   │       ├──▶ [components/shared/] (Stateless leaf elements e.g. Button, Card)
   │       └──▶ [modules/] (Domain/Feature components holding client logic)
   │
   └──▶ [services/] (WordPress REST/GraphQL clients fetching dynamic CMS data)
```

### Static Page Generation (SSG)
All public marketing pages are prerendered as static HTML at build time (`output: "export"` or standard SSG). Dynamic data from headless sources is fetched server-side during the build.

---

## 💾 3. State Management Rules

To maintain high performance and low bundle sizes, state is strictly isolated:
*   **Stateless Leaf Components**: Components under `components/shared/` and `components/layout/` must remain stateless. They accept properties through TypeScript interfaces and perform visual styling rendering.
*   **Feature Modules**: Dynamic business operations (e.g. contact forms, reservation modules, filters) are placed inside `modules/`. If client-side state is required (e.g., input states), the component must explicitly declare the `"use client"` directive at the top of the file.
*   **Avoid Global Store Bloat**: Do not introduce massive state stores (like Redux or Zustand) for marketing websites. Rely on React's native `useState` or URL query parameters for filtering states.

---

## ⚡ 4. Compiler Settings & Optimization

*   **Turbopack bundler**: Enabled for both dev and production builds (`next dev --turbopack` and `next build --turbopack`) to ensure lightning-fast compile times and HMR (Hot Module Replacement).
*   **PostCSS Compiler**: Managed via `@tailwindcss/postcss` inside `postcss.config.mjs` to optimize build-time CSS compilation.
*   **Bundle Splitting**: Next.js automatically splits code boundaries by route. To ensure optimal First Load JS sizes, avoid importing massive third-party packages in layout-critical paths.
