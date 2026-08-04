# Framework Specification: Velvetbyte Framework v1

This document defines the core mission, technical stack, naming standards, layout philosophies, and performance benchmarks for the **Velvetbyte Framework v1**. It serves as the master specification sheet for developers and coding agents.

---

## 🎯 1. Mission & Vision

*   **Mission**: To provide a highly optimized, accessible, and structured frontend framework designed to build premium, human-crafted corporate and local business websites.
*   **Vision**: To eliminate templated, over-designed, "AI-generated" web layouts. Velvetbyte websites prioritize clean typography, balanced white space, and editorial layouts, establishing a baseline of quality equivalent to Awwwards and Behance award winners.

---

## 🛠️ 2. Tech Stack

Velvetbyte operates on a modern, robust, and compile-time optimized stack:
*   **Core Framework**: Next.js 15 (App Router, React 19)
*   **Language**: TypeScript (Strict type checking)
*   **Styling Engine**: Tailwind CSS v4 (Pure CSS tokens, no configuration files)
*   **Compiler Tooling**: Turbopack (`next dev --turbopack` and `next build --turbopack`)
*   **Code Linting**: ESLint (Next.js flat config directives)

---

## 📂 3. Folder Structure & Naming Conventions

The root workspace follows a clean, flat directory layout:
*   `app/` - Next.js App Router (Layouts, Pages, API Routes, metadata).
*   `components/` - Unified UI elements split into `/layout` (primitives), `/shared` (leaf elements), and `/sections` (page blocks).
*   `modules/` - Modular domain logic folders.
*   `lib/` - Shared wrappers and utility helpers.
*   `services/` - Server-side network and database API clients.
*   `hooks/` - Reusable global React custom state hooks.
*   `styles/` - Theme CSS configurations.
*   `public/` - Media assets.
*   `patterns/` - Staged version layouts (`v1`, `v2`, `v3`).
*   `docs/` - Architecture documents.

### Naming Conventions
*   **Components**: PascalCase (e.g. `Container.tsx`, `CTAButton.tsx`).
*   **Folders**: lowercase-kebab-case (e.g. `layout-system/`, `image-wrapper/`).
*   **Utilities/Hooks**: camelCase (e.g. `utils.ts`, `useLocalStorage.ts`).

---

## 🎨 4. Philosophies

### Component Philosophy
All UI elements are designed to be atomic, stateless, and clean. They receive formatting parameters through TypeScript interfaces and rely on dynamic style class merging via the central `cn` utility.

### Section Philosophy
Page layouts are structured as stacked, vertical sections. Each block is encapsulated in a `Section` layout wrapper to enforce margin parameters, background boundaries, and container limits.

### Pattern Library Philosophy
Patterns represent layout configurations (`v1`, `v2`, `v3`) for common page sections. They contain zero business logic or marketing text, serving as clean structures that developers can copy and modify for client projects.

### Theme Philosophy
Colors, typography heights, spacing scales, and curves are declared as CSS custom variables in `styles/globals.css`. By decoupling values from Tailwind utilities, new client branding can be configured instantly by modifying only the root variables.

---

## ⚡ 5. Performance, SEO, & Accessibility Goals

### Performance Goals
*   **PageSpeed Index**: >= 95/100 on Mobile, 99/100 on Desktop.
*   **Cumulative Layout Shift (CLS)**: <= 0.05 (prevent shifts by using `ImageWrapper` aspect ratios).
*   **First Contentful Paint (FCP)**: <= 1.0s.

### Accessibility Goals (WCAG 2.1 AA)
*   **Contrast**: Text contrast ratios must exceed 4.5:1 for standard text and 3:1 for large display titles.
*   **Keyboard Controls**: Full focus management (`focus-visible:ring-2`), escape-key handlers on drawers, and tab-order traps on interactive overlays.
*   **Semantic Markup**: Strict use of standard tags (`<nav>`, `<header>`, `<footer>`, `<main>`, `<section>`).

### SEO Goals
*   **SEO Title / Description**: Mandatory metadata tags on every page layout.
*   **Heading Structure**: Exactly one semantic `h1` tag per page view, followed by hierarchical secondary headings (`h2` to `h6`).
*   **Semantic Keywords**: Contextual links and alt descriptions mapping target business domains.

---

## 📱 6. Responsive Rules & mobile Targets

*   Layouts are mobile-first. Column layouts scale from 1 column on mobile to 2 columns on tablets and 3/4/12 columns on desktops.
*   **Touch Targets**: Buttons, inputs, and links must have a minimum interactive touch area of **44x44 pixels** to guarantee comfortable tap actions.
*   Grid spacing and padding values collapse proportionally using responsive Tailwind classes to prevent layout squishing on mobile screens.

---

## 🚀 7. Development Roadmap (v1.0)

### Phase 1: Foundation (Completed)
*   Next.js 15, React 19, TypeScript, and Tailwind CSS v4 setup.
*   Scaffolding of directory architecture (`app/`, `components/`, `modules/`, `lib/`, `services/`, `hooks/`, `styles/`, `public/`, `docs/`).
*   Setup baseline configuration files (`tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `next.config.ts`).
*   Setup custom typography utilities and neutral theme design tokens in `styles/globals.css`.

### Phase 2: Velvetbyte Core Kit
*   **Layout Components**: `Header`, `Footer`, `Navigation`, `Container`, `Section`.
*   **Shared Components**: `Button`, `Card`, `Typography`, `Badge`, `ImageWrapper`.
*   **Website Sections**: `Hero`, `About`, `Services`, `Features`, `Stats`, `Gallery`, `FAQ`, `Testimonials`, `CTA`, `Contact`, `Team`, `Brands`, `Process`, `Pricing`, `Footer`.
*   **Pattern Library**: Scaffold and implement variations V1-V5 for:
    *   `Hero V1-V5`
    *   `About V1-V5`
    *   `Services V1-V5`
    *   `CTA V1-V5`
    *   `Footer V1-V5`

### Phase 3: WordPress Headless Integration
*   REST API clients and dynamic fetching wrapper setups.
*   Dynamic routing configurations (`app/[slug]/page.tsx`).
*   SEO metadata synchronization (Yoast / RankMath API integration).
*   ACF flexible layouts dynamic mapping.
*   Core headless CMS architecture setup.

### Phase 4: Client Configuration System
*   **Global Config**: Centralized variables for contact parameters (NAP: Name, Address, Phone, Email).
*   **Theme Config**: Accents, light/dark defaults.
*   **Navigation Config**: Dynamic header/footer link tree structures.
*   **SEO Config**: Site-wide meta values, social coordinates, Open Graph defaults.
*   **Brand Config**: Text/Graphic logo selections.

### Phase 5: Industry Kits
Scaffold custom configuration layers and layout presets for target industries:
*   Construction
*   Healthcare
*   Hostel
*   Solar & EV
*   Corporate
*   Education
*   Tourism
*   Restaurant
*   Real Estate

---

## 📈 8. Framework v2.0 Scope

Advanced engineering infrastructure and workflows are deferred to Framework v2:
*   Storybook integration for isolated UI catalogs.
*   Playwright End-to-End browser testing suite.
*   Docker containers configuration and multi-stage builds.
*   CI/CD automated deployment pipelines (GitHub Actions).

