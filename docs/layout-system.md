# Velvetbyte Layout System & Spacing Spec

This document details the responsive, editorial layout grid system engineered for **Velvetbyte Framework v1**. It provides the core design instructions governing whitespace rhythm, container limits, typography structure, and grid layouts.

---

## 📐 1. Spacing & Vertical Rhythm Philosophy

Velvetbyte prioritizes clean, editorial layout composition (inspired by high-end design benchmarks like Apple, Stripe, and Linear) rather than packed, dashboard-style SaaS cards.
* **Vertical Rhythm**: We use generous, proportional top/bottom margins to let content "breathe". 
* **Avoid Flat Margins**: Never apply random custom pixel margins. Always choose a token from the spacing scale (`xs` through `3xl`) via the `Spacer` component or `gap` props on `Stack` and `Grid`.
* **12-Column Responsive Philosophy**: Main sections utilize a conceptual 12-column alignment. Components within grids should span columns (`col-span-12 md:col-span-6 lg:col-span-4`) to structure clean visual balance.

---

## 🧱 2. Layout Components

All layout components are stored under [`components/layout/`](file:///Users/arjun/Development/Velvetbyte-Framework/components/layout).

### `Container`
Responsive content width boundary.
* **Usage**: Wraps page content to ensure it does not bleed into widescreen screen edges.
* **Key Props**:
  * `size`: Max width boundaries (`xs`, `sm`, `md`, `lg`, `xl` [default], `2xl`, `full`).
  * `align`: Alignment constraints (`left`, `center` [default], `right`).
  * `cleanPadding`: Set to `true` to remove side gutter padding.

### `Section`
Full-width page layout blocks.
* **Usage**: Separates distinct content topics vertically down the page. Includes automatic container nesting.
* **Key Props**:
  * `background`: Color theme styling (`default`, `muted`, `accent`, `dark`, `transparent`).
  * `spacing`: Vertical rhythm height sizing (`none`, `xs`, `sm`, `md`, `lg` [default], `xl`, `2xl`).
  * `containerSize`: Configures the nested `Container` max-width (`xl` [default], or `none` to disable container wrap).

### `Grid`
Flexible CSS Grid framework.
* **Usage**: Aligning cards, services, or multi-column text lists.
* **Key Props**:
  * `cols`, `colsSm`, `colsMd`, `colsLg`: Column bounds (`1`, `2`, `3`, `4`, `6`, `12`).
  * `gap`: Spacing token values (`none`, `xs`, `sm`, `md` [default], `lg`, `xl`, `2xl`, `3xl`).

### `Stack`
Flexbox vertical or horizontal layout structure.
* **Usage**: Perfect for input groups, card text alignments, navbar item rows, or stacked header paragraphs.
* **Key Props**:
  * `direction`: Layout alignments (`col` [default], `row`, `col-reverse`, `row-reverse`).
  * `gap`: Spacing token values (`xs`, `sm`, `md` [default], `lg`, `xl`, `2xl`, `3xl`).
  * `align`, `justify`: Standard Flexbox axis alignments.

### `Spacer`
Dedicated vertical or horizontal spacer block.
* **Usage**: Generating precise spacing boundaries between unrelated paragraphs or visual groups without applying styling classes to parent tags.
* **Key Props**:
  * `axis`: Align axis (`vertical` [default], `horizontal`).
  * `size`: Spacing token scale size (`xs`, `sm`, `md` [default], `lg`, `xl`, `2xl`, `3xl`).

---

## ✍️ 3. Typography Standards

Typography size and line-height values are governed by custom classes inside `styles/globals.css`.

### SEO and Semantic Heading Isolation
To satisfy strict SEO rules, **always decouple visual font sizing from HTML heading tags**.
* **Good**: Use a visual `display` scale for the hero title, but render it as an `h1` tag:
  ```tsx
  <Heading as="h1" variant="display">Velvetbyte Framework v1</Heading>
  ```
* **Good**: Use visual `h4` styles for card titles, but render them semantically as an `h3` or `h4` tag:
  ```tsx
  <Heading as="h3" variant="h4">Card Subsection Title</Heading>
  ```

---

## 🛠️ 4. Layout Rules & Best Practices

1. **Prioritize Contrast**: Maintain WCAG 2.1 AA compliant color pairings. Ensure text on custom background elements uses `text-text-primary` or appropriate foreground values.
2. **Limit Animations**: Refrain from using complex floating, scrolling, or heavy animations. Stick to basic transition classes on interactive hovers (`transition-all duration-fast`).
3. **No Overly Rounded Borders**: Elements must use clean, professional radius limits (`rounded-md` or `rounded-lg`). Avoid using large pill shapes or circles on cards, buttons, or wrapper borders.
4. **Muted Shadows**: Only use `shadow-sm` or `shadow-md` for standard UI panels. Card sections should ideally be clean flat outlines (`border border-border`) with zero shadow.
