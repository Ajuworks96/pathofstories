# Styles Directory

The `styles` directory holds global styles, Tailwind configuration directives, custom utility overrides, and design tokens (variables).

## Structure
- `/globals.css` - Global CSS styles, Tailwind @import statements, and variable themes (light/dark mode).
- `/fonts.css` - Custom local font configurations.

## Guidelines
1. **Prefer Tailwind Utility Classes**: Avoid writing custom vanilla CSS rules unless absolutely necessary.
2. **Use CSS Variables for Theme Tokens**: Define colors, border-radii, and spacing tokens as CSS custom properties (`--background`, `--foreground`, etc.) inside the `:root` pseudo-class.
3. **Responsive Breakpoints**: Rely on Tailwind's standard prefix breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) rather than custom `@media` queries in stylesheets.
