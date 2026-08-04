# Lib Directory

The `lib` directory is dedicated to shared utility wrappers, helper functions, and third-party library initializations that are shared across the framework.

## Structure
- `/utils.ts` - General-purpose helper functions (like style utilities, date formatters, and clean helpers).
- `/clients` - Setup and initialization of client SDKs or SDK wrappers (e.g., supabase, prisma, stripe, analytics).
- `/config` - Shared framework configuration modules.

## Guidelines
1. **Third-Party Wrappers**: Wrap third-party SDKs in this folder to allow easy configuration, custom headers, and logging overrides.
2. **Framework Utilities**: Only place utility code that has zero external dependencies or standard npm dependencies here. Keep them generic and reusable.
