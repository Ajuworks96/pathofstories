# Coding Standards: Velvetbyte Framework

This document defines the coding guidelines, TypeScript configuration rules, React patterns, file structures, and performance conventions for the **Velvetbyte Framework**. All developers must write code compliant with these rules to keep the codebase clean and maintainable.

---

## 🟦 1. TypeScript Guidelines

*   **Strict Type Safety**: Set `"strict": true` in `tsconfig.json`. Explicitly declare return types for exported functions, especially API route handlers.
*   **Avoid `any`**: The use of `any` is strictly prohibited. If a type is unknown, use `unknown` and perform type checking before processing.
*   **Empty Interfaces**: Avoid empty interfaces (e.g., `interface Props extends ExtType {}` with no members). ESLint flags this; declare a type alias instead:
    ```typescript
    export type Props = ExtType;
    ```
*   **Components Props**: Always define props using a dedicated interface or type alias. Prefer extending HTML default elements when creating custom wrapper elements:
    ```typescript
    export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      variant?: "primary" | "secondary";
    }
    ```

---

## ⚛️ 2. React Standards

*   **Function Components**: Declare components as named functions or using standard function syntax.
*   **Reference Forwarding (`forwardRef`)**: All shared elements (buttons, inputs) and layout wrappers (containers, columns) must forward refs to their underlying HTML nodes to ensure compatibility with libraries, portals, and focusing behaviors:
    ```typescript
    export const CustomComponent = React.forwardRef<HTMLDivElement, Props>(
      ({ className, ...props }, ref) => (
        <div ref={ref} className={className} {...props} />
      )
    );
    CustomComponent.displayName = "CustomComponent";
    ```
*   **Use Client Directive**: Default to React Server Components (RSC) to minimize client-side JS bundle delivery. Add the `"use client"` directive strictly at the top of components that use:
    *   React state hooks (`useState`, `useReducer`, `useEffect`).
    *   Browser-only APIs (document, window).
    *   Client event handlers (like mouse drag, canvas updates).

---

## 📂 3. Naming & Folder Conventions

*   **Files & Component Names**: PascalCase (e.g. `MobileNavigation.tsx`, `Grid.tsx`). Filenames must match the name of the primary exported component.
*   **Utility & Hook Names**: camelCase (e.g. `utils.ts`, `usePathname.ts`). Custom hooks must be prefixed with `use` (e.g. `useMounted.ts`).
*   **Folders**: lowercase-kebab-case (e.g. `layout-system/`, `design-system/`).
*   **Import Aliases**: Always use import aliases mapped in `tsconfig.json` to reference directories. Avoid deep, nested relative paths:
    *   **Good**: `import { cn } from "@/lib/utils"`
    *   **Bad**: `import { cn } from "../../../../lib/utils"`

---

## 🚨 4. Error Handling & Boundaries

*   **Error Boundaries**: Wrap key pages or modular client elements in a standard Next.js error boundary (`error.tsx`) to catch runtime render exceptions and present a clean fallback state without breaking the layout.
*   **API Exceptions**: Always catch service failures. Never expose raw SQL errors or SDK internal parameters to client network requests. Return standard JSON error schemas:
    ```typescript
    try {
      const data = await fetchCMS();
    } catch (err) {
      console.error("[CMS_FETCH_FAILURE]", err);
      // Return safe, user-friendly feedback
    }
    ```

---

## ⚡ 5. Performance Optimizations

*   **Static Asset Loading**: Always utilize Next.js `Image` wrapper components (`next/image`) for photos to enforce layout stability, automatic WebP format conversion, and responsive lazy loading.
*   **Prevent Re-renders**: Inline arrow handlers inside properties can cause re-renders in client sub-trees. Bind complex handlers using the `useCallback` hook when passing them down to expensive children.
*   **CSS Class Merging**: Always use our custom classnames helper utility `cn(...)` to merge layout and conditional Tailwind classes safely.
