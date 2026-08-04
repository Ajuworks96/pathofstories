# Services Directory

The `services` directory contains modules and classes responsible for communicating with external APIs, databases, third-party platforms, or running complex server-side business logic.

Unlike components, pages, or modules, services are designed to be decoupled from the React rendering lifecycle and are primarily executed server-side.

## Structure
- `/api-client.ts` - Shared HTTP/fetch wrapper for internal/external APIs.
- `/logger.ts` - Standard server-side logger framework.
- `/payment.ts` - Stripe or checkout gateway logic.
- `/notifications.ts` - SMS, Push, or Email services.

## Guidelines
1. **Separation of Concerns**: Do not put UI states or hook logics inside this folder.
2. **Context Agnostic**: Services should be written in clean, standard TypeScript and should ideally run on both Serverless functions, Edge functions, or standard Node environments.
3. **Error Handling**: Standardize error schemas. Catch API errors, log them using a central logger, and re-throw user-friendly error boundaries.
