# Migu Design System

> Canonical design language for all UI decisions in this project.
> Read this before building any new screen or component.

---

## Visual References

Reference images live in `/docs/references/`. Study them before implementing any UI.

| File | Purpose |
|------|---------|
| `aesthetic-1.png` | Mobile app — card system, color palette, stat components |
| `aesthetic-2.png` | Desktop app — layout, navigation, property cards, CTAs |

These are **not layouts to copy**. They define the emotional register:
- calm, unhurried spacing
- premium material feel
- architectural restraint
- editorial typographic hierarchy

---

## Design Goals

| Quality | What it means in practice |
|---------|--------------------------|
| **Calm** | Generous whitespace, no visual noise, soft shadows |
| **Premium** | Intentional typography, muted palette, precise details |
| **Architectural** | Strong grid, clear zones, purposeful negative space |
| **Spatial** | Layered surfaces, depth through shadow not colour |
| **Minimal** | Every element earns its place. Remove before adding. |
| **Tactile** | Rounded corners, soft textures, subtle motion |
| **Editorial** | Bold display numbers, light label text, clear hierarchy |

---

## Color Palette

All tokens are defined in `/lib/design-tokens.ts` and exposed as CSS variables in `/app/globals.css`.

### Backgrounds
| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#F0ECE6` | Page background — warm cream |
| `--surface` | `#FFFFFF` | Card / panel surface |
| `--surface-raised` | `#F8F5F1` | Slightly elevated surfaces |

### Brand Accents
| Token | Value | Use |
|-------|-------|-----|
| `--sage` | `#7BA0A0` | Primary accent — teal-sage |
| `--lavender` | `#C5B8D8` | Secondary accent — soft purple |

### Ink (Text)
| Token | Value | Use |
|-------|-------|-----|
| `--ink` | `#1C1C1E` | Body text, headings |
| `--ink-secondary` | `#6B6868` | Labels, secondary info |
| `--ink-muted` | `#9B9898` | Placeholders, captions |
| `--ink-faint` | `#C8C4C4` | Disabled, dividers |

### Dark Surface
| Token | Value | Use |
|-------|-------|-----|
| `--dark` | `#1C1C1E` | Sidebar, dark CTAs, dark cards |

---

## Typography

### Hierarchy
```
Display   — 48–64px / extrabold (800) / tight leading   → hero numbers, big stats
Heading 1 — 30–36px / bold (700)                        → page titles
Heading 2 — 24px    / semibold (600)                    → section titles
Heading 3 — 20px    / semibold (600)                    → card titles
Body      — 15px    / regular (400) / 1.5 leading       → paragraphs
Label     — 11–13px / medium (500) / wide tracking      → metadata, tags, captions
```

### Rules
- Never use more than 3 type sizes on one screen
- Labels are NEVER the same weight as headings on the same card
- Bold numbers paired with light labels = the editorial signature
- Avoid generic SaaS body copy weight (everything medium/semibold = noise)

---

## Spacing

Use the scale from `design-tokens.ts`. Key principles:
- **Cards**: `24px` internal padding (`--space-6`)
- **Sections**: `64px` vertical separation (`--space-16`)
- **Between related elements**: `8–12px`
- **Between unrelated elements**: `24–32px`
- Err toward **more space**, not less

---

## Border Radius

| Size | Value | Use |
|------|-------|-----|
| `sm` | `8px` | Inputs, small chips |
| `md` | `12px` | Buttons, small cards |
| `lg` | `16px` | Standard cards |
| `xl` | `20px` | Large feature cards |
| `2xl` | `24px` | Hero cards |
| `full` | `9999px` | Pills, tags, badges |

Consistency rule: **never mix radius styles within the same card or section**.

---

## Shadows

Shadows are intentionally whisper-soft. They suggest elevation, not drama.

| Name | Use |
|------|-----|
| `shadow-xs` | Subtle lift on interactive elements |
| `shadow-sm` | Default card elevation |
| `shadow-md` | Modals, dropdowns |
| `shadow-lg` | Floating panels |
| `shadow-xl` | Reserved — use sparingly |

**Never use hard box shadows.** If a shadow looks like a design decision, soften it.

---

## Motion

| Duration | Use |
|----------|-----|
| `instant` (80ms) | Micro-interactions, icon swaps |
| `fast` (120ms) | Hover states, opacity changes |
| `base` (200ms) | Most transitions |
| `slow` (350ms) | Page transitions, reveals |
| `deliberate` (500ms) | Emphasis animations |

Use `easing.spring` for elements that physically move (cards sliding, modals appearing).  
Use `easing.out` for fades and colour transitions.

---

## Component Checklist

Before shipping any component:

- [ ] Uses only token values — no hardcoded hex/px
- [ ] Checked against reference images in `/docs/references/`
- [ ] Whitespace is generous — err toward more padding
- [ ] Shadow is soft — reduce opacity if in doubt
- [ ] Typography hierarchy is clear at a glance
- [ ] Border radius is consistent with surrounding components
- [ ] Interactions have transitions (`base` or `fast`)
- [ ] Does NOT look like a generic SaaS dashboard

---

## Anti-patterns to Avoid

| Anti-pattern | Alternative |
|--------------|-------------|
| Hard drop shadows | `shadow-sm` or `shadow-xs` |
| Solid bright accent colour everywhere | Use sage/lavender sparingly as accents |
| Equal font weight for all text on a card | Contrast bold display + light label |
| Tight internal padding | Minimum `16–24px` on cards |
| Generic blue primary colour | Use `--ink` (dark) or `--sage` |
| Lots of borders/dividers | Whitespace as separator instead |
| Dense information layout | One focal metric per card |
| Default Tailwind `rounded-lg` everywhere | Use the token scale intentionally |
