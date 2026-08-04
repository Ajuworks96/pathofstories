# Hooks Directory

The `hooks` directory holds global, reusable custom React hooks that can be shared across multiple modules and components.

## Structure
- `/use-media-query.ts` - Breakpoint and responsive hook.
- `/use-local-storage.ts` - Local storage state synchronization hook.
- `/use-debounce.ts` - Input search debouncing hook.
- `/use-mounted.ts` - Detect client-side mounting (avoids hydration mismatches).

## Guidelines
1. **Name Prefix**: Every hook file and function must start with the prefix `use` (e.g. `useClickAway`).
2. **Reusability**: Only place hooks here that are domain-agnostic. If a hook is specific to a feature (e.g., auth, dashboard), it must be placed inside its corresponding folder in `modules/`.
3. **Purity**: Custom hooks should not mix business logic from different modules unless they are explicitly designed to compose multiple contexts.
