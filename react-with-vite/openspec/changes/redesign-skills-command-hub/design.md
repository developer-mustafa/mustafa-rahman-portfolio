# Technical Design: Desktop Command Hub for Skills & Architecture

## Context
The application is a client-side Single-Page Application (SPA) built with React 19, Tailwind CSS v4, Motion, and Lucide React. The skills dataset in `src/data/skills.js` contains 9 comprehensive engineering domains, each containing 12 to 14 verified technical competencies across three tiers (`core`, `knowledge`, `exploring`).

The current UI renders these categories in an unconstrained vertical 3-column grid, causing cards to stretch over 800px tall. The user specifically identified this as excessively tall, bulky, and cluttered ("lombate", "bulky height and messy") and selected **Option 1 (Desktop Command Hub)** for a desktop-grade, professional experience.

## Goals / Non-Goals

**Goals:**
- Implement a split-screen Desktop Command Hub on desktop viewports (`lg` min-width 1024px) with a ~33% domain selector sidebar and a ~67% active workstation console.
- Eliminate vertical bloat: constrain the active desktop workstation to a clean, comfortable height (~520px–560px) so the entire section is scannable without exhaustive scrolling.
- Establish clean visual hierarchy:
  - **Core Superpowers**: Feature top core competencies in a 2-column spotlight grid.
  - **Supporting & Applied Tooling**: Group supporting, knowledge, and exploring tools in a high-density, beautifully styled interactive pill/capsule cloud with tooltip previews.
- Ensure fluid, interruptible animated transitions between active domains using `motion/react` with `AnimatePresence`.
- Responsive fallback for tablet and mobile: gracefully switch to a horizontal sticky segmented tab bar above a compact single-card view.
- Maintain dual-theme fidelity (Dark `#090a0f` and Light `#f8fafc`) using CSS variables.
- Preserve 100% of underlying data in `src/data/skills.js`.

**Non-Goals:**
- Removing or modifying verified skills data in `src/data/skills.js`.
- Adding third-party UI component libraries (staying strictly with native React 19 + Tailwind v4 + Motion).
- Altering the "Future-Focused Radar" or "Professional Leadership" sub-sections below the primary skills matrix.

## Decisions

### 1. Split-Console Desktop Architecture (`lg:grid lg:grid-cols-12 gap-8`)
- **Choice**: 4 columns (left) for the Domain Selector, 8 columns (right) for the Active Domain Workstation.
- **Rationale**: 
  - Standard among developer tools (Linear, Raycast, Stripe Dashboard).
  - Keeps all 9 domains visible and selectable at once without crowding the screen.
  - Fixes the height issue permanently: selecting a new domain updates the workstation in-place without page jumping or height expansion.

### 2. Tier-Based Content Segmentation (Spotlight vs Capsule Cloud)
- **Choice**:
  - Filter domain skills into two visual tiers:
    - `primarySkills`: Skills with `tier === "core"` (or top 4–6 items).
    - `secondarySkills`: Skills with `tier === "knowledge"` or `tier === "exploring"` (and remaining core items).
  - `primarySkills` render as structured feature cards with title, icon/dot indicator, and production highlight.
  - `secondarySkills` render as an interactive, compact tag cloud with status color dots and instant micro-tooltips for the highlight description.
- **Rationale**: Drastically reduces DOM element clutter and eliminates 14 vertical paragraph boxes per card while maintaining complete technical depth.

### 3. Motion & Layout Transition Strategy
- **Choice**: Use `AnimatePresence mode="wait"` with lightweight opacity and slight vertical slide (`initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2, ease: "easeOut" }}`).
- **Rationale**: Follows Emil Kowalski design engineering principles: fast entering (ease-out), minimal distance (8px), no sluggish delay on frequent user clicks.

### 4. Responsive Adaptation
- **Choice**:
  - On desktop (`lg:block`): Vertical sidebar list.
  - On mobile/tablet (`lg:hidden`): Horizontal scrollable pill strip with subtle snap alignment.
- **Rationale**: Ensures touch ergonomics on mobile while unleashing the full power of widescreen monitors on desktop.

## Risks / Trade-offs

- **[Risk] Long text in tooltips on mobile** → **Mitigation**: On mobile devices, tooltips can be tapped to reveal, or highlights can be displayed inline in an accordion/drawer if needed; the pill cloud will display cleanly with readable tags.
- **[Risk] Layout shifts during domain switching** → **Mitigation**: Set a `min-h-[520px]` on the right console container to prevent height bouncing as users switch between domains with varying skill counts.
