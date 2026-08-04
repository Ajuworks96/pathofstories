# Project Directory Structure Guide

This document defines the folder architecture of the **Velvetbyte Framework**, detailing why directories exist and exactly what code assets belong inside each.

---

## 🏗️ Folder Hierarchy Map

```
Velvetbyte-Framework/
├── app/                  # Next.js App Router (Pages, Layouts, Routing)
├── components/           # UI elements (Layout, Sections, Shared elements)
│   ├── layout/           # Atomic layout primitives (Container, Stack, Section)
│   ├── sections/         # Structured page blocks (Hero, Services, CTA)
│   └── shared/           # Stateless visual items (Button, Card, Badge)
├── modules/              # Modular feature capsules (holds client states)
├── lib/                  # Unified helper scripts & SDK config wrappers
├── services/             # Server-side API connectors & database client code
├── hooks/                # Custom React viewport & storage hooks
├── styles/               # CSS custom properties and Tailwind tokens
├── patterns/             # Copyable section layouts (v1, v2, v3)
├── public/               # Graphic assets, vectors, brand files
├── docs/                 # Architectural specifications
├── package.json          # Dependency mappings
├── tsconfig.json         # TypeScript compiler configurations
└── eslint.config.mjs     # Linter validations
```

---

## 📁 Detailed Directory Specifications

### [`app/`](file:///Users/arjun/Development/Velvetbyte-Framework/app)
*   **Why it exists**: Manages layouts, server-side data fetching setups, SEO routing targets, and on-demand APIs.
*   **What belongs inside**: Root `layout.tsx`, index page `page.tsx`, loading states `loading.tsx`, error pages `error.tsx`, and Next.js backend API routes (`app/api/*`).

### [`components/`](file:///Users/arjun/Development/Velvetbyte-Framework/components)
*   **Why it exists**: Centralizes the modular design system UI, separating visual blocks from layout constraints.
*   **What belongs inside**:
    *   `layout/`: Base container and columns grid styling.
    *   `shared/`: Stateless leaves (buttons, inputs) extending HTML tags.
    *   `sections/`: Full section grids (e.g. Hero, Services).

### [`modules/`](file:///Users/arjun/Development/Velvetbyte-Framework/modules)
*   **Why it exists**: Houses isolated feature capsules requiring client-side interactivity, state management, and business logic.
*   **What belongs inside**: Interactive forms (e.g. `modules/contact/ContactForm.tsx`), filtering blocks, or custom reservation calendars.

### [`lib/`](file:///Users/arjun/Development/Velvetbyte-Framework/lib)
*   **Why it exists**: Shared utility wrapper libraries, helpers, and configurations.
*   **What belongs inside**: Style helper utils (`lib/utils.ts` housing the `cn` function), client SDK initializers (WP clients, analytics trackers).

### [`services/`](file:///Users/arjun/Development/Velvetbyte-Framework/services)
*   **Why it exists**: Houses server-side API clients, fetch models, and background task controllers.
*   **What belongs inside**: Direct database controllers, notification triggers, external SMS service APIs.

### [`hooks/`](file:///Users/arjun/Development/Velvetbyte-Framework/hooks)
*   **Why it exists**: Stores reusable, design-system-wide React custom hooks.
*   **What belongs inside**: Custom window hooks (e.g. `useMediaQuery`), browser state sync (e.g. `useLocalStorage`), or debounce utility hooks.

### [`styles/`](file:///Users/arjun/Development/Velvetbyte-Framework/styles)
*   **Why it exists**: Declares the unified styling system variables and design tokens.
*   **What belongs inside**: `globals.css` defining the CSS custom theme properties and typography utility classes.

### [`patterns/`](file:///Users/arjun/Development/Velvetbyte-Framework/patterns)
*   **Why it exists**: Houses copyable templates of sections in different styles (`v1`, `v2`, `v3`).
*   **What belongs inside**: Versioned directories (like `patterns/hero/v1/`) which hold boilerplate code blocks that developers copy when building new pages.

### [`public/`](file:///Users/arjun/Development/Velvetbyte-Framework/public)
*   **Why it exists**: Handles public client asset delivery.
*   **What belongs inside**: Icons, SVG shapes, logo graphics, client placeholder photos, and manifest files.

### [`docs/`](file:///Users/arjun/Development/Velvetbyte-Framework/docs)
*   **Why it exists**: Retains the software specification sheets.
*   **What belongs inside**: Markdown documents explaining design philosophies, coding guides, and reusability checklists.
