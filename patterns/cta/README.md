# CTA Section Patterns (v1, v2, v3)

The Call to Action (CTA) section prompts the user to take a primary action, such as scheduling a consultation or booking a room.

---

## 1. Versions Scope

*   **v1 (Centered Minimal Banner)**: A clean, centered banner inside a container. Features a small badge, H2 heading, short supporting description, and a single primary button. Uses a subtle background surface fill with thin border boundaries.
*   **v2 (Split Row Layout)**: Left column contains the H2 heading and subtext; right column hosts the call-to-action button, vertically aligned. Excellent for keeping layouts thin.
*   **v3 (Dark Mode Inset Panel)**: A full-width panel using a dark background (`bg-black` or `bg-secondary-950`) even within light-themed pages. Creates a high-contrast focal point.

---

## 2. Structural Specifications

### Purpose
Direct the user to the conversion funnel and present primary action paths.

### Content Hierarchy
1.  **Focal Badge**: Small label (e.g. "Get Started").
2.  **Conversion Header**: H2 heading (`Heading` as `h2`, variant `h2`).
3.  **Supporting Pitch**: Minimal body text (max 2 lines).
4.  **Primary Action Button**: Clean button (`Button` component, variant `primary` or `outline` in dark mode).

### Layout Philosophy
*   Avoid crowded overlays. Keep CTA padding generous (`py-16 sm:py-24`).
*   Strictly limit the layout to one primary action button to focus the user's attention.

### Responsive Behavior
*   Buttons expand to occupy full-width blocks on screens under `640px` to improve mobile tap targeting.
*   Inline split columns collapse to centered vertical stacks on mobile viewports.

### Accessibility Considerations
*   Ensure high-contrast color pairings for dark mode backgrounds (e.g., text must transition to off-white `#fafafa`).
*   Button tap areas must exceed `44px` in height.
*   The CTA wrapper must use the semantic `<section>` element.

### SEO Considerations
*   Heading tag must use a semantic `h2` or `h3` tag (never use `h1` for secondary callouts).
*   Incorporates action-oriented verbs (e.g., "Schedule Consultation", "Reserve Suite").
