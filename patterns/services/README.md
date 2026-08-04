# Services Section Patterns (v1, v2, v3)

The Services section details the company's core services, packages, and technical capabilities.

---

## 1. Versions Scope

*   **v1 (Minimalist Card Grid)**: Centered introductory section header, followed by a responsive 3-column or 4-column grid of outline cards. Cards contain a simple label, title, short description, and secondary link. No icons inside circles or gradients.
*   **v2 (Alternating Alternator Layout)**: Generous full-width alternating sections. Rows of text block (left-aligned) alternating with horizontal media frames (right-aligned). Provides deep, high-end catalog presentation.
*   **v3 (FAQ-Style Accordion Matrix)**: Left column contains the main title block; right column hosts detailed collapsible services description drawers, enabling users to explore details sequentially.

---

## 2. Structural Specifications

### Purpose
Display company products, capabilities, and packages to guide client discovery.

### Content Hierarchy
1.  **Section Identifier**: Badge or subtitle.
2.  **Section Heading**: Section header (`Heading` as `h2`, variant `h2`).
3.  **Service Nodes**: A structural list of services (cards or list rows) containing a label, H3 heading, description paragraph, and action links.

### Layout Philosophy
*   Maintain clean, thin borders (`border border-border`) instead of drop shadows or card overlays.
*   Preserve consistent gaps (`gap-md` or `gap-lg`) to prevent cards from crowding together.

### Responsive Behavior
*   Grids collapse to a single-column layout on mobile, utilizing vertical card order.
*   Touch targets on interactive cards (e.g. accordion triggers) scale to at least `44px` in height.

### Accessibility Considerations
*   Interactive cards or accordions must use standard HTML triggers (`<button>`) and support `aria-expanded` attributes.
*   All links must hold descriptive labels (never use "Click here" or "Read more" without descriptive context; prefer "View Architectural Projects").

### SEO Considerations
*   Service titles must use semantic `h3` tags.
*   Header copy must incorporate relevant service-oriented keywords (e.g., "Solar Installation", "EV Charging Solutions").
