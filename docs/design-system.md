# Velvetbyte Design System System Spec

This document details the enterprise-grade design token system engineered for the **Velvetbyte Framework v1**. All variables are declared as CSS custom properties under `:root` inside [`styles/globals.css`](file:///Users/arjun/Development/Velvetbyte-Framework/styles/globals.css) and compiled into utility classes via Tailwind CSS v4.

---

## 🎨 1. Colors & Theme Structure

To prevent client lock-in, the system is strictly neutral-first and maps conceptual roles (like `primary`, `success`, `background`) to configurable properties.

### System Color Variables

| CSS Token | Conceptual Mapping | Neutral (Light) | Neutral (Dark) |
| :--- | :--- | :--- | :--- |
| `var(--primary-[50-950])` | Brand/Primary Identity scale | Slate Gray | Slate Gray |
| `var(--secondary-[50-950])` | Muted/Secondary elements | Cool Zinc | Cool Zinc |
| `var(--accent-[50-950])` | Highlights, badges, indicators | Rich Violet | Rich Violet |
| `var(--success-500)` | Success states, alerts | Green (`#22c55e`) | Green (`#22c55e`) |
| `var(--warning-500)` | Warning logs, alerts | Amber (`#f59e0b`) | Amber (`#f59e0b`) |
| `var(--danger-500)` | Destructive operations, errors | Red (`#ef4444`) | Red (`#ef4444`) |
| `var(--background)` | Root canvas background | White (`#ffffff`) | Dark Zinc (`#09090b`) |
| `var(--surface)` | Cards, tables, sidebars | Gray-50 (`#f8fafc`) | Zinc-900 (`#18181b`) |
| `var(--border)` | Separators, button borders | Gray-200 (`#e2e8f0`) | Zinc-800 (`#27272a`) |
| `var(--text-primary)` | High contrast body & headers | Slate-900 (`#0f172a`) | Zinc-50 (`#fafafa`) |
| `var(--text-secondary)` | Low contrast/supporting body | Slate-600 (`#475569`) | Zinc-400 (`#a1a1aa`) |

---

## ✍️ 2. Typography Scale

Each typography utility combines a font-size, line-height, weight, and letter-spacing for standard layouts:

| Class | Font Size | Line Height | Weight | Letter Spacing | Ideal For |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `.text-display` | `3.75rem` (60px) | `1.1` | Bold | `-0.02em` | Marketing showcases |
| `.text-h1` | `3.00rem` (48px) | `1.25` | Bold | `-0.015em` | Page Header levels |
| `.text-h2` | `2.25rem` (36px) | `1.25` | Semibold | `-0.01em` | Major Sections |
| `.text-h3` | `1.875rem` (30px) | `1.25` | Semibold | Normal | Subsection Headers |
| `.text-h4` | `1.50rem` (24px) | `1.25` | Semibold | Normal | Component Titles |
| `.text-h5` | `1.25rem` (20px) | `1.25` | Medium | Normal | Small Headings |
| `.text-h6` | `1.00rem` (16px) | `1.25` | Medium | Normal | Tiny Titles |
| `.text-body-large`| `1.125rem` (18px) | `1.5` | Regular | Normal | Lead Paragraphs |
| `.text-body` | `1.00rem` (16px) | `1.5` | Regular | Normal | Main reading content |
| `.text-body-small`| `0.875rem` (14px) | `1.5` | Regular | Normal | Sidebar / secondary body|
| `.text-caption` | `0.75rem` (12px) | `1.5` | Regular | Normal | Subtext & hints |
| `.text-label` | `0.875rem` (14px) | `1.0` (None)| Medium | Normal | Buttons and input labels|

---

## 📐 3. Spacing System

Spacing is scaled using relative `rem` units, producing proportional sizing across screen boundaries.

| Spacing Token | CSS Value | Pixels (16px base) | Tailwind Utility |
| :--- | :--- | :--- | :--- |
| `xs` | `0.25rem` | 4px | `p-xs`, `m-xs`, `gap-xs` |
| `sm` | `0.50rem` | 8px | `p-sm`, `m-sm`, `gap-sm` |
| `md` | `1.00rem` | 16px | `p-md`, `m-md`, `gap-md` |
| `lg` | `1.50rem` | 24px | `p-lg`, `m-lg`, `gap-lg` |
| `xl` | `2.00rem` | 32px | `p-xl`, `m-xl`, `gap-xl` |
| `2xl` | `3.00rem` | 48px | `p-2xl`, `m-2xl`, `gap-2xl` |
| `3xl` | `4.00rem` | 64px | `p-3xl`, `m-3xl`, `gap-3xl` |

---

## 🎨 4. Border Radius

Tokens governing element curvature:

| Token Name | CSS Value | Pixels (16px base) | Tailwind Class |
| :--- | :--- | :--- | :--- |
| `sm` | `0.125rem` | 2px | `rounded-sm` |
| `md` | `0.250rem` | 4px | `rounded-md` |
| `lg` | `0.500rem` | 8px | `rounded-lg` |
| `xl` | `0.750rem` | 12px | `rounded-xl` |
| `2xl` | `1.000rem` | 16px | `rounded-2xl` |
| `full` | `9999px` | Curved edge | `rounded-full` |

---

## 👤 5. Shadow System

Consistent elevation mapping using clean neutral-density overlays:

- **`shadow-sm`**: Subtle button boundaries.
  `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **`shadow-md`**: Small card panels, popovers.
  `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- **`shadow-lg`**: Modal container overlays, massive panels.
  `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- **`shadow-xl`**: Major interactive overlay dialog components.
  `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

---

## 🧱 6. Container Sizes

Sizing wrappers to bound layout grids:

- **`container-sm`**: Max-width `640px` (Mobile grids)
- **`container-md`**: Max-width `768px` (Tablets)
- **`container-lg`**: Max-width `1024px` (Small notebooks)
- **`container-xl`**: Max-width `1280px` (Desktop layouts)
- **`container-2xl`**: Max-width `1536px` (Widescreens)

---

## ⚡ 7. Timing & Layer tokens

### Transitions

- **`duration-fast`**: `150ms` (Interactive hover effects)
- **`duration-normal`**: `200ms` (Smooth modal pops)
- **`duration-slow`**: `300ms` (Multi-stage page content sweeps)

### Z-Index Layers

- **`z-hide`**: `-1`
- **`z-auto`**: `auto`
- **`z-base`**: `0`
- **`z-dropdown`**: `1000`
- **`z-sticky`**: `1100`
- **`z-fixed`**: `1200`
- **`z-modal`**: `1300`
- **`z-popover`**: `1400`
- **`z-toast`**: `1500`
