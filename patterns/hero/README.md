# Hero Section Patterns (v1, v2, v3)

The Hero section is the user's entry point to the webpage, setting the brand's aesthetic quality and conveying the core value proposition.

---

## 1. Versions Scope

*   **v1 (Centered Clean Editorial)**: A balanced, typography-first hero. Features a subtle category badge, primary display heading, single centered paragraph restricted to a 60-character line width, and a dual CTA row. Used for high-end agencies and architectural practices.
*   **v2 (Asymmetrical Split Column)**: Left column containing left-aligned text metadata, primary H1 heading, and CTA triggers. Right column containing a large premium portrait photography wrapper (`3:4` aspect ratio). Used for real estate developments and construction projects.
*   **v3 (Minimalist Gallery Grid)**: Left-aligned overlay text on a subtle background surface, followed by a multi-image staggered portrait grid. Displays editorial layout depth. Used for hotels, hospitality, and luxury tourist destinations.

---

## 2. Structural Specifications

### Purpose
Introduce the site content, captivate the viewer, and establish the visual style of the framework.

### Content Hierarchy
1.  **Brand Identifier**: Small text badge (`Badge` component) indicating system status or category.
2.  **Primary Hook**: Display heading (`Heading` component as `h1`, variant `display`).
3.  **Core Subtext**: Supporting body paragraph (`Paragraph` component, variant `large`).
4.  **Action Portals**: Row containing one primary button and one secondary button.

### Layout Philosophy
*   Maintain generous breathing room (`pt-32 pb-24 md:pt-40 md:pb-32`).
*   Strictly limit heading elements to a single `h1` tag per page view.
*   Never use neon blobs or gradient background shapes. Keep canvas backdrops neutral (`bg-background` or `bg-surface`).

### Responsive Behavior
*   On mobile screens, content stacks vertically. Visual display sizes compress (`text-4xl` to `text-5xl`).
*   Grid splits transition to a single column. Media nodes collapse under button controls.
*   Buttons expand to occupy full tap rows to enhance touch targets on small viewports.

### Accessibility Considerations
*   Contrast between display text and ambient backgrounds must exceed `4.5:1`.
*   Interactive CTAs must receive keyboard focus indicators and hold logical tab order indexes.
*   Never overlay text directly on complex, high-contrast imagery without an appropriate dark screen backdrop or gradient overlay to maintain readability.

### SEO Considerations
*   Must host the primary `h1` tag for the page.
*   The `h1` heading must contain focus keywords representing the page topic (e.g. "Bespoke Architecture Studio").
