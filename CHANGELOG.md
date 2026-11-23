# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2026-11-24

### Magic UI Suite, Interactive Global Engineering Reach & Dual GPU-Mask Hardening

#### Added
- **Interactive Global Engineering Reach (`GlobalMap.jsx`)**:
  - High-density SVG world vector projection displaying Mustafa Rahman's verified international engineering footprint (USA, Istanbul, Hyderabad, Bangladesh).
  - Curved great-circle laser pulse arcs animated from the Bangladesh engineering base to global enterprise nodes.
  - Interactive location filter pills, concentric pulsing radar beacons, and collision-free directional offset callouts.
  - Compact 210px–240px desktop footprint with responsive dark (`#090a0f`) and light (`#f8fafc`) theme tokens.
- **Magic UI Component Suite (`src/components/magicui/`)**:
  - `BorderBeam.jsx`: Luminous border beam traveling along the container perimeter via CSS `offset-path: rect(...)` with dual-mask GPU exclusion (`mask-composite: intersect` / `destination-out`), completely eliminating light bleed into card text.
  - `ShimmerButton.jsx`: High-polish accessible action button with continuous radiant sweep and responsive contrast.
  - `NumberTicker.jsx`: Viewport-triggered numerical counter with smooth ease-out spring physics for verified metrics.
  - `TechMarquee.jsx`: Dual-track infinite horizontal scrolling marquee featuring production architecture stacks.

#### Hardened & Optimized
- **BorderBeam Dual GPU Mask & Z-Index Isolation**:
  - Encapsulated project card content inside `relative z-10` in `Projects.jsx`, `Hero.jsx`, and `Skills.jsx`.
  - Permanently resolved conic-gradient dark shadow artifact on the Automata Pro showcase card.
- **OpenSpec Living Specs**:
  - Added complete OpenSpec change artifacts for `magic-ui-shadcn-global-reach` (`proposal.md`, `design.md`, `specs/ui-enhancements/spec.md`, `tasks.md`).

#### Verified
- 0 ESLint warnings or errors.
- 19/19 Vitest test cases passing.
- Production build verified in ~4.6 seconds.

---

## [1.1.0] - 2026-11-24

### Desktop Command Hub, Senior Architect Copywriting & Modal Portal Architecture

#### Added
- **Desktop Command Hub (Skills Section)**: Split-screen console architecture (`lg:grid-cols-12`) with 9 dedicated engineering tracks on the left and an active domain workstation on the right.
- **Core Pillars vs Applied Tooling Matrix**: Partitioned technical competencies into high-impact Core feature cards and interactive Applied/Emerging capsule clouds.
- **Live High-Tech Inspector Bar**: Real-time hover inspection strip showing verified architectural focus across all tools.
- **React Portal Modals**: Migrated `ArticleModal` and `ProjectModal` to `createPortal(..., document.body)` with `z-[100]`, body scroll lock, and `Escape` key listeners, permanently eliminating stacking context conflicts.
- **Executive Senior Architect Narrative**: Upgraded Hero section headlines and personal profile to reflect a decade of systems design and engineering leadership (`2014 – Present`).

#### Optimized
- **Viewport Height Optimization**: Streamlined vertical padding, header margins, and card footprints to fit cleanly inside 1080p and 1440p desktop screens without clipping.
- **OpenSpec Living Specs**: Added `redesign-skills-command-hub` proposal, technical design, and spec deltas under `openspec/changes/`.

#### Verified
- 0 ESLint warnings or errors.
- 19/19 Vitest test cases passing.
- Production build verified in 1.35 seconds.

---

## [1.0.0] - 2026-11-24

### Initial Production Release — Mustafa Rahman Senior Portfolio & Architecture

#### Added
- **Core Portfolio Platform**: High-performance Single-Page Application (SPA) built with React 19, Vite 8, and Tailwind CSS v4.
- **Spec-Driven Development (SDD)**: Integrated `@fission-ai/openspec` (v2.1) with living specifications in `openspec/specs/portfolio-core/spec.md`.
- **Editorial Hero Section**: Modern 2-column layout with verified engineering credentials, social actions, and live visual showcase.
- **Dual-Theme Engine**: Zero-flicker adaptive theme switching between Obsidian Dark (`#090a0f`) and Apple Slate Light (`#f8fafc`) with localStorage persistence.
- **Adaptive Project Mockups**: Dual-mode responsive window previews for Automata Pro, Mentora Pro, SpendWise Pro, and ProductMesh.
- **Automated Testing Suite**: 17 unit and integration tests using Vitest and jsdom verifying data integrity, dual-theme engine, and OpenSpec compliance.
- **CI/CD Quality Pipeline**: GitHub Actions workflow (`.github/workflows/ci.yml`) enforcing clean installs, ESLint audits, Vitest suites, and production build verification.
- **Automated Release Pipeline**: GitHub Actions workflow (`.github/workflows/release.yml`) triggered on version tags (`v*`) to package production artifacts and publish GitHub Releases.
- **AI Agent Governance**: Comprehensive operational guidelines in `AGENTS.md` and multi-agent configuration in `opencode.json` with primary architect, subagent coder, and reviewer roles.
- **Vercel & Static Edge Hosting**: Single-Page Application rewrites and HTTP security headers in `vercel.json`.

#### Verified
- 0 ESLint warnings or errors across all 15 components.
- 17/17 Vitest test cases passing.
- Production build compilation verified in under 15 seconds.
