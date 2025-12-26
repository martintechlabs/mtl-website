# DESIGN.md

This file defines the authoritative design system specification for UI built with React, Tailwind CSS, and Radix UI.
It is the single source of truth for design, styling, interaction, and accessibility.

The document is normative, not advisory.

## Objectives

-   **Eliminate ambiguity** in UI decisions
-   **Enforce consistency** across all products
-   **Ensure accessibility and composability** by default
-   **Enable humans and AI agents** to implement UI without guessing

## Global Constraints (Non-Negotiable)

UI must use:
-   **React function components**
-   **Tailwind CSS**
-   **Radix UI primitives** for interactive behavior
-   **Styling must be token-driven** via CSS variables

**Forbidden:**
-   No inline styles
-   No arbitrary Tailwind values unless explicitly permitted
-   No reimplementation of Radix behavior

## 1. Design Principles

-   **Clarity:** UI should be self-explanatory.
-   **Hierarchy:** Visual weight must match information importance.
-   **Restraint:** Use the minimum number of elements necessary.
-   **Accessibility:** Inclusive design is a requirement, not a feature.

**Anti-patterns:**
-   Overriding accessible defaults without cause.
-   Using color as the only means of conveying information.

## 2. Design Tokens (Source of Truth)

### Token Model
-   Tokens defined as CSS variables in `index.css`.
-   Tailwind consumes tokens via `theme.extend`.
-   Tokens are semantic (e.g., `--primary`), not raw values.

### Required Token Categories

#### Color (OKLCH)
-   **Background:** `--background` (`oklch(0.10 0.02 260)`)
-   **Foreground:** `--foreground` (`oklch(0.98 0 0)`)
-   **Primary:** `--primary` (`oklch(0.60 0.18 250)`)
-   **Secondary:** `--secondary` (`oklch(0.20 0.02 260)`)
-   **Accent:** `--accent` (`oklch(0.70 0.15 150)`)
-   **Muted:** `--muted` (`oklch(0.20 0.02 260)`)
-   **Border:** `--border` (`oklch(0.30 0.02 260)`)

#### Typography
-   **Sans-serif:** `--font-sans` ("Inter", sans-serif)
-   **Monospace:** `--font-mono` ("Space Grotesk", monospace)

#### Spacing & Sizing
-   Base unit: **4px** (Tailwind default `0.25rem`)

#### Radius
-   `--radius`: `0.65rem`

## 3. Tailwind Rules

-   **Only token-backed utilities allowed.**
-   **Arbitrary values (`[value]`) forbidden** unless documented here.
-   **`@apply` allowed only in base layers.**
-   **Dark mode handled via tokens**, not conditional logic.
-   **Breakpoints defined centrally**; no component-level breakpoints.

## 4. Component System (Radix-First)

### Mandatory Radix Usage
-   Dialog, Popover, Tooltip
-   Dropdown, Select, Menu
-   Tabs, Accordion

### Component Contracts Must Define
-   **Purpose and responsibility**
-   **Underlying Radix primitive(s)**
-   **Variants and states**
-   **Required vs optional props**
-   **Controlled vs uncontrolled behavior**

### Forbidden
-   Forking Radix logic
-   Bypassing Radix accessibility
-   Styling unstable Radix internals

## 5. Interaction & Motion

### States
All interactive elements must define:
-   `hover`
-   `focus-visible`
-   `active`
-   `disabled`
-   `loading`

### Motion
-   **Functional:** Enhances understanding.
-   **Brief:** Short durations.
-   **Reduced Motion:** Must be respected via `prefers-reduced-motion`.

## 6. Accessibility Standards

-   **Keyboard navigation required** by default.
-   **Focus management delegated to Radix.**
-   **ARIA added only when Radix does not supply it.**
-   **WCAG AA color contrast minimum.**
-   **Screen reader output must be deterministic.**

## 7. Layout & Responsiveness

-   **Layout via Flexbox and Grid only.**
-   **Tokenized spacing exclusively.**
-   **Breakpoints defined in Tailwind config.**
-   **Container:** Custom utility with responsive padding (`px-4` mobile, `px-6` tablet, `px-8` desktop).

## 8. Content & Tone

-   **Sentence case** for labels.
-   **Imperative verbs** for actions.
-   **Errors explain recovery**, not failure.
-   **Empty states guide next action.**
-   **No placeholder or filler text.**

## 9. Implementation Constraints

### React
-   **Function components only.**
-   **Hooks for state.**

### File Structure
-   Separate: `primitives` / `components` / `layouts`.

### Naming
-   **Components:** PascalCase (e.g., `Button.tsx`)
-   **Tokens:** kebab-case CSS variables (e.g., `--primary-foreground`)

## 10. Agent & Contributor Rules

### Contributors must:
-   Use existing tokens before adding new ones.
-   Use existing components before creating new ones.
-   Update `DESIGN.md` when extending the system.

### Contributors must not:
-   Hardcode visual values.
-   Invent undocumented variants.
-   Bypass Radix primitives.

### Clarification is required when:
-   A needed token or component does not exist.
-   Requirements conflict with this spec.

## 11. Governance

### Changes require:
-   Token definition
-   Tailwind config update
-   Impact assessment

### Backward compatibility is default.
### Breaking changes must be explicit and documented.


