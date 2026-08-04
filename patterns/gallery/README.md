# Gallery Section Patterns (v1, v2, v3)

The Gallery section showcases projects, properties, products, and physical textures through high-resolution, editorial photography grids.

---

## 1. Versions Scope

*   **v1 (Asymmetrical Staggered Grid)**: A 3-column staggered masonry layout. Left, center, and right grid columns use varying vertical offsets and image aspect ratios (`3:4` portrait and `3:2` landscape) to mimic premium architecture books.
*   **v2 (Full-Width Carousel/Slider)**: A full-screen width media container displaying landscape images. Minimalist scroll indicators or thin border buttons underneath. Used for luxury hotels and real estate developments.
*   **v3 (Minimal Grid Matrix)**: A clean, symmetrical 2-column or 3-column grid layout where each card features a thin title overlay on hover, directing users to dedicated case studies.

---

## 2. Structural Specifications

### Purpose
Expose company projects, properties, and aesthetic quality through premium photography.

### Content Hierarchy
1.  **Section Title**: Simple header tag (`Heading` as `h2`).
2.  **Photography Grid**: Matrix of staggered visual frames wrapping photos.
3.  **Project Metadata**: Muted image captions or description badges.

### Layout Philosophy
*   Images must use the `ImageWrapper` primitive to enforce strict aspect ratios and border curves.
*   Avoid adding White borders or shadows around photos. Keep frames clean and flat.

### Responsive Behavior
*   Grid layouts adjust columns dynamically (e.g. 3 columns on desktop, collapsing to 2 columns on tablets, and 1 column on mobile screens).
*   Gaps adjust proportionally to match responsive spacing scales.

### Accessibility Considerations
*   Every image must be configured with a descriptive `alt` attribute (e.g. "Polished concrete entryway in architectural villa").
*   Hover captions must remain legible. Text must not be obscured by high-contrast details in the image background.

### SEO Considerations
*   Image files must use descriptive naming conventions (e.g., `modern-villa-entryway.jpg` instead of `IMG_1029.jpg`).
*   `alt` descriptions must contain relevant keywords for image search indexing.
