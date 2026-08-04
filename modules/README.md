# Modules Directory

The `modules` directory is the core of the application's domain logic. Instead of grouping all hooks, components, and services in massive global folders, we isolate features into self-contained "modules".

This keeps the codebase clean, highly maintainable, and easily deletable or pluggable.

## Structure of a Module
Each module corresponds to a domain/feature. For example, a `project` or `auth` module might look like this:

```
modules/auth/
├── components/       # UI components specific ONLY to auth (e.g., LoginForm, SignupCard)
├── hooks/            # React hooks specific to auth (e.g., useAuthUser)
├── services/         # API client or fetch calls for auth endpoints (e.g., authService.ts)
├── types/            # TypeScript definitions specific to auth (e.g., user.types.ts)
└── index.ts          # Public entry point exposing the module's public APIs
```

## Guidelines
1. **Co-location**: If a component, hook, or type is only used inside a single feature, it belongs in that feature's module folder—not in the global folders.
2. **Expose with index.ts**: Use the module's root `index.ts` file to export only what is required by external modules or pages. This creates a clean boundary.
3. **Cross-Module Imports**: Keep dependencies between modules clean. Avoid deep nesting or cyclical dependencies.
