# Technical Design: Editorial Hero Section & Visual Media Integration

## Context
The application is a Single-Page Application (SPA) built with React 19, Tailwind CSS v4, and Motion. The current Hero component is a single vertically centered column that creates a wall of text. Professional visual assets are available under `public/images/`:
- `/images/profile eng single.webp`: High-resolution portrait of Mustafa Rahman.
- `/images/main 4 style image.webp`: Multi-perspective design & engineering showcase.

## Goals / Non-Goals

**Goals:**
- Implement a responsive two-column editorial Hero layout (7 cols content, 5 cols visual card on desktop).
- Frame `/images/profile eng single.webp` inside an Apple-inspired frosted glass showcase card with subtle ambient lighting and floating status pill.
- Integrate `/images/main 4 style image.webp` into the About section to illustrate cross-domain engineering versatility.
- Declutter the text presentation: streamline role badges, remove redundant pills, and optimize visual hierarchy.
- Seamless dual-theme support across Dark Mode (`#090a0f`) and Light Mode (`#f8fafc`).
- Clean up unused imports in Hero.jsx to improve code quality.

**Non-Goals:**
- Modifying underlying verified profile data in `src/data/profile.js`.
- Adding third-party UI component libraries or heavy image carousels.

## Decisions

### 1. Two-Column Asymmetric Layout (`lg:grid-cols-12`)
- **Choice**: 7 columns for headline, roles, intro, and CTAs; 5 columns for the portrait visual anchor.
- **Rationale**: Follows modern editorial layouts (e.g. Linear, Stripe, Apple) that balance technical narrative with strong personal presence.
- **Alternative Considered**: Centered portrait above text — rejected because it pushes actionable CTAs below the fold.

### 2. Frosted Glass Showcase Card Architecture
- **Choice**: Wrap the portrait in a high-fidelity container with `.glass-panel`, rounded-3xl borders, an inner glow reflection, and a floating interactive badge ("Senior Software Engineer").
- **Rationale**: Creates dimensional depth without overwhelming the minimalist developer aesthetic.

### 3. High-Performance Image Optimization
- **Choice**: Direct WebP asset referencing from `public/images/` with explicit aspect ratio (`aspect-[4/5]`), `loading="eager"`, and `fetchpriority="high"`.
- **Rationale**: Eliminates Cumulative Layout Shift (CLS) and guarantees instant above-the-fold rendering.

## Risks / Trade-offs

- **[Risk] Image contrast on Light Mode** → **Mitigation**: Use adaptive CSS variable tokens (`--card-bg`, `--card-border`) with subtle drop shadows so borders remain sharp on white backgrounds.
- **[Risk] Mobile viewport crowding** → **Mitigation**: Responsive order switching (`order-2 lg:order-1` for text, `order-1 lg:order-2` for portrait on smaller screens) with reduced image scale.
