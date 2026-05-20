@AGENTS.md

# Migu — Claude Code Instructions

## Design System (read before any UI work)

Reference images are in `/docs/references/`. These are canonical visual references for the product aesthetic.

Study them carefully before implementing any UI. Do not copy layouts — extract the underlying design language and apply it consistently.

**The aesthetic:**
- calm · premium · architectural · spatial · minimal · tactile · editorial

**Before building any new screen or component:**
1. Read `/docs/DESIGN_SYSTEM.md` fully
2. Compare against the reference images in `/docs/references/`
3. Ensure spacing, shadows, radius, and type hierarchy match the language
4. Avoid generic SaaS dashboard styling

**If implementation conflicts with the design language:**
- prioritize aesthetic coherence
- redesign the component instead of forcing functionality into generic UI patterns

## Token rules

All design values live in `/lib/design-tokens.ts` and `/app/globals.css` as CSS variables.

**Never hardcode:**
- hex colours → use CSS variables (`var(--sage)`, `var(--ink)`, etc.)
- shadow values → use `var(--shadow-sm)` etc.
- border radius → use `var(--radius-lg)` etc.
- transition values → use `var(--duration-base)` + `var(--ease-out)` etc.

## Architecture conventions

- Pages and layouts → `/app`
- Reusable UI components → `/components`
- Custom hooks → `/hooks`
- Utilities and helpers → `/lib`
- External API / data fetching → `/services`
- Shared TypeScript types → `/types`
- Import alias: `@/` maps to the project root

## Code quality

- Run `npm run typecheck` before committing
- No `any` types without a comment explaining why
- Prefer explicit return types on exported functions
