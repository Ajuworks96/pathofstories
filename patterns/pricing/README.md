# Pricing Section Patterns (v1, v2, v3)

The Pricing section displays tiers, plans, or standard service packages in a structured matrix.

---

## 1. Versions Scope

*   **v1 (Standard Tier Grid)**: A 3-column pricing card grid. Cards use thin borders (`border border-border`) with a clean list of features, package cost, and a secondary action button. Fully avoids glowing borders or neon "most popular" tags.
*   **v2 (2-Column Detail Comparison)**: A detailed horizontal list comparison. Left column describes target plans; right column contains checkmarks comparing feature lists side-by-side. Used for corporate or hospitality packages.
*   **v3 (Tabbed Pricing Panels)**: Tab triggers on top allowing toggles (e.g. "Monthly" vs "Annually" or "Single Session" vs "Retainer Packages"), with active grids transitioning smoothly beneath.

---

## 2. Structural Specifications

### Purpose
Communicate pricing transparency, tier highlights, and call-to-actions.

### Content Hierarchy
1.  **Section Heading**: Descriptive title.
2.  **Toggle Triggers**: Tab selection inputs (when supporting multiple models).
3.  **Pricing Grids**: Outline cards containing title, cost, list items, and action buttons.

### Layout Philosophy
*   Avoid glowing shadows or high-intensity color overlays on cards. 
*   Maintain vertical spacing alignment across cards.

### Responsive Behavior
*   Grids collapse to a single-column layout on screens under `1024px`.
*   Feature checklists must remain readable and avoid wrapping into illegible vertical lines on mobile viewports.

### Accessibility Considerations
*   Tab toggles must use semantic elements (`<button>`) and support standard `aria-selected` roles.
*   Ensure text color contrast is maintained on muted price descriptions.
*   Checklists must use screen-reader friendly bullet points or SVGs with appropriate alt tags.

### SEO Considerations
*   Use semantic header tags (`h3`) for plan names.
*   Header titles must describe packages clearly (e.g., "Architecture Consulting Retainer").
