# About Section Patterns (v1, v2, v3)

The About section details the company's core values, brand narrative, and project heritage.

---

## 1. Versions Scope

*   **v1 (Asymmetrical Text/Media Split)**: Left column (5-cols) contains standard vertical typography groups (section badge, H2 heading, body paragraph). Right column (7-cols) contains a premium horizontal landscape picture (`3:2` or `16:9` ratio) styled with clean border outlines.
*   **v2 (Staggered Three-Column Details)**: A clean three-column details row. Left column hosts the main section title. Center and right columns contain editorial body blocks describing the brand's history, methodology, and philosophy.
*   **v3 (Grid Matrix with Inset Stats)**: A split grid combining brief textual overviews with a structured numbers matrix (simple layout grid showing statistics like "Founded in 2012" or "40+ Architectural Awards").

---

## 2. Structural Specifications

### Purpose
Communicate company values, build trust, and detail operational capabilities.

### Content Hierarchy
1.  **Context Badge**: Category label (e.g. "Who We Are").
2.  **Section Header**: Distinct semantic header (`Heading` as `h2`, variant `h2`).
3.  **Detailed Narrative**: Editorial reading paragraph (`Paragraph` as `p`, variant `body`).
4.  **Supporting Media / Stats**: Accompanying imagery grid or key numbers grid.

### Layout Philosophy
*   Emphasize asymmetrical layouts. Avoid perfect 50/50 splits to create custom, editorial flow.
*   Use precise padding boundaries (`py-16 sm:py-24 md:py-32`).

### Responsive Behavior
*   Multi-column grids collapse to a single-column layout on viewport widths below `768px`.
*   Grid columns re-order so text content always renders above media assets on mobile screens to preserve logical reading order.

### Accessibility Considerations
*   Ensure text labels inside statistics cards remain high contrast (`text-text-primary`).
*   Images must be equipped with meaningful `alt` descriptive tags.
*   Avoid nesting interactive elements inside visual cards unless they receive appropriate tab index values.

### SEO Considerations
*   Utilize secondary `h2` headings to outline page details.
*   Incorporate semantic keyword variations in body copy (e.g. "sustainable construction", "modern architectural design").
