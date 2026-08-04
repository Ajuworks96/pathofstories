# Velvetbyte Page Assembly & Visual Rhythm Guide

This document defines the assembly standards, section sequencing rules, and spacing guidelines for constructing premium, human-crafted marketing pages using **Velvetbyte Framework v1** layout components.

---

## 🏗️ 1. How Pages Should Be Assembled

Pages are built by stacking modular, high-contrast block sections vertically. Each section is wrapped in the `Section` primitive component to enforce consistent vertical margins:

```tsx
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";

export default function ServicesPage() {
  return (
    <main>
      {/* 1. Hero Block */}
      <Section background="default" spacing="xl">
        {/* Hero content */}
      </Section>
      
      {/* 2. Alternating Muted Feature Section */}
      <Section background="muted" spacing="lg">
        {/* Grid content */}
      </Section>
      
      {/* 3. CTA Action Box */}
      <Section background="dark" spacing="lg">
        {/* Conversion elements */}
      </Section>
    </main>
  );
}
```

---

## 📐 2. Recommended Order of Sections

To create a compelling narrative flow, follow this standard section sequence:

1.  **Opening Hook (Hero)**: Capture attention, establish value proposition, and introduce a primary action pathway.
2.  **Immediate Trust (Brands / Logo Cloud)**: Present client logos or project badges directly underneath the hero to build immediate authority.
3.  **Core Narrative (About)**: Briefly describe company values, team capabilities, or methodology.
4.  **Value Details (Services / Features)**: Present details of service offerings or feature sets in clean, structured grids.
5.  **Proof of Quality (Gallery / Portfolio / Stats)**: Show real case studies, high-resolution architectural photography, or key performance figures.
6.  **Social Proof (Testimonials / Quote Panels)**: Display customer quotes, reviews, or project milestones.
7.  **Reassurance / Friction Reduction (FAQ)**: Answer common customer questions or explain pricing terms to reduce purchase friction.
8.  **Conversion Gate (CTA)**: Prompt the user to take a single, focused action.
9.  **Site Map (Footer)**: Render legal policies and category indexes.

---

## 🎨 3. Section Spacing & Background Alternation

To maintain readability and prevent the page from looking like a repetitive template, you must manage vertical rhythm and visual weight:

*   **Rule of Background Alternation**: Never stack two sections with the same background consecutively. Always alternate between `default` (white/black) and `muted` (light gray/dark zinc) sections. This creates natural horizontal boundaries without relying on thin lines.
*   **Uniform Padding**: Stick to standard spacing tokens for vertical padding:
    *   *Default sections*: Use `spacing="lg"` (`py-16 sm:py-24 md:py-32`).
    *   *Intense/Hero sections*: Use `spacing="xl"` (`py-24 sm:py-32 md:py-40`).
    *   *Small details (Stats/Brands)*: Use `spacing="sm"` (`py-8 sm:py-12`).

---

## 🧱 4. Full-Width vs. Contained Layouts

Determining when to restrict content boundaries is crucial for maintaining design system balance:

### Contained Layouts (Use `containerSize="xl"`)
Use contained layouts when rendering text-heavy, input-heavy, or dense informational grids. This keeps line lengths readable and elements grouped:
*   **About Narratives**: Prevents text blocks from stretching into illegible lines.
*   **Services / Pricing Cards**: Keeps cards compact and aligned with desktop grids.
*   **Forms / Input Panels**: Restricting width prevents forms from stretching awkwardly on wide screens.

### Full-Width Layouts (Use `containerSize="full"` or `containerSize="none"`)
Use full-width layouts when the primary goal is visual immersion, impact, or dividing sections:
*   **Image Galleries / Carousels**: Let photography bleed to the screen edges to mimic high-end architectural spreads.
*   **Logo clouds / Brand lines**: Simple horizontal grids of icons can stretch full-width to align with headers.
*   **Primary CTA Banners**: Large, high-contrast panels can bleed full-width to create distinct visual divisions down the page.

---

## ⚡ 5. Maintaining Visual Rhythm

*   **Avoid Grid Fatigue**: Never place two grid-based card sections next to each other. If you have a 3-column Services grid, follow it with a clean text-based About column or a full-bleed Gallery spread before showing another grid.
*   **Text Measures**: Keep lead paragraphs restricted to a maximum width of `max-w-2xl` to ensure comfortable line lengths.
*   **Editorial Balance**: Emphasize asymmetrical grid columns (e.g. 5-cols description paired with 7-cols image) to make layouts feel custom-designed rather than generic.
