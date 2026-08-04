# Components Directory

This directory contains global, highly reusable UI components that are agnostic to the domain or business logic. They represent the "atomic" pieces of the Velvetbyte design system.

## Structure
We organize components using a modular or Atomic-inspired approach:
- `/ui`: Base UI primitives (e.g., buttons, inputs, dialogs, badges, cards).
- `/layout`: Global layout components (e.g., container, grid, spacer, page-header).
- `/feedback`: Dialogs, loaders, alerts, toast notifications, empty states.
- `/overlay`: Tooltips, popovers, dropdown menus, modals.

## Guidelines
1. **Purity**: Components in this directory must not import from `modules` or `services`. They should receive data and callbacks via props.
2. **Styling**: All components must be styled using Tailwind CSS classes. Use the design tokens configured in the design system.
3. **Accessibility (a11y)**: Focus on proper ARIA attributes, semantic HTML elements, and keyboard navigability.
