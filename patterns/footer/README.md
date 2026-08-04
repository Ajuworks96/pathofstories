# Footer Section Patterns (v1, v2, v3)

The Footer section provides secondary site navigation, legal disclaimers, and copyright details.

---

## 1. Versions Scope

*   **v1 (Multi-Column Link Grid)**: Left column hosts the branding logo and copyright notes. Center and right columns host 3 to 4 link categories (e.g. Services, Company, Resources) arranged in clean vertical list stacks.
*   **v2 (Minimal Bottom Row)**: A single thin row layout. Branding logo on the left, horizontal inline legal links in the center, and social links on the right. Used for minimal portfolio pages.
*   **v3 (Newsletter Inset Footer)**: Top half integrates a clean, text-based newsletter signup container; bottom half splits into link columns and compliance details.

---

## 2. Structural Specifications

### Purpose
Provide closing structure, site-wide navigation links, and legal disclosures.

### Content Hierarchy
1.  **Brand Label**: Logo and description.
2.  **Navigation Links**: Categorized vertical link indices.
3.  **Compliance Row**: Copyright, Terms of Service, Privacy Policy, and social links.

### Layout Philosophy
*   Footer columns must use thin borders or sit directly on the background canvas.
*   Keep background panels neutral (`bg-background` or `bg-surface`).

### Responsive Behavior
*   Multi-column links collapse to vertical accordion stacks or clean single columns on mobile.
*   Copyright details move to the bottom of the stack on mobile viewports.

### Accessibility Considerations
*   Wrap the block inside the semantic `<footer>` element.
*   Ensure text contrast exceeds `4.5:1` (never use low-contrast, light gray text on white backgrounds).
*   Links must use descriptive labels and avoid tiny touch areas.

### SEO Considerations
*   Footer links pass link equity (PageRank) to key internal pages. Ensure link anchors match target page keywords (e.g., "Sustainability Policy" rather than "Policy").
