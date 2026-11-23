# Technical Design: Magic UI, shadcn/ui & Interactive Global Map Integration

## Context
The application is a high-performance React 19 SPA running on Tailwind CSS v4 and Motion 14. All dependencies (`clsx`, `tailwind-merge`, `motion`, `lucide-react`) are already installed. Per `AGENTS.md`, the implementation must remain strictly JavaScript ES6+ (no TypeScript) with zero unneeded third-party package bloat.

## Goals / Non-Goals

**Goals:**
- Implement lightweight Magic UI component primitives (`BorderBeam`, `ShimmerButton`, `NumberTicker`, `TechMarquee`) in pure React 19 + Tailwind v4 + Motion.
- Build an interactive, performant SVG `GlobalMap` component representing Mustafa Rahman's international career footprint across USA, Türkiye, India, and Bangladesh with animated connection arcs and interactive hover tooltips.
- Seamless dual-theme support (Obsidian Dark `#090a0f` and Apple Slate Light `#f8fafc`).
- Maintain 60fps animations with GPU hardware acceleration (`transform: translate3d`, `will-change`).
- Pass all ESLint audits and automated Vitest suites with zero regressions.

**Non-Goals:**
- Installing heavy third-party map libraries (like Leaflet, Mapbox, or Google Maps) that inflate bundle size and require external API keys.
- Adding TypeScript or breaking existing component contracts.

## Component Specifications

### 1. `BorderBeam.jsx`
- Renders an absolute-positioned pseudo-border animation using SVG or CSS conic-gradient.
- Properties: `size` (default: 200), `duration` (default: 8s), `delay` (default: 0), `colorFrom` (emerald-500), `colorTo` (teal-400).
- Pure CSS `conic-gradient` with `mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)` or SVG dashoffset path animation.

### 2. `ShimmerButton.jsx`
- High-end CTA button featuring a subtle travelling white/emerald shimmer reflection.
- Wraps native HTML `<button>` with full keyboard accessibility and touch press-states (`active:scale-95`).

### 3. `NumberTicker.jsx`
- Utilizes `motion` and `useInView` to count up from `0` to target numbers (e.g., `226`, `10`, `90`) with configurable duration and easing.
- Respects `prefers-reduced-motion` by displaying final value immediately when enabled.

### 4. `TechMarquee.jsx`
- Dual-row or single-row infinite smooth marquee powered by CSS `@keyframes` with `hover:pause`.
- Displays production technologies: React 19, Next.js, Node.js, OpenAI API, Gemini API, Tailwind CSS, Docker, Cloudflare, PostgreSQL, Vitest.

### 5. `GlobalMap.jsx`
- High-fidelity minimalist SVG vector world map with geographic projection coordinates.
- Pins:
  - Austin, USA: `[x: 180, y: 135]`
  - Istanbul, Türkiye: `[x: 540, y: 125]`
  - Hyderabad, India: `[x: 690, y: 175]`
  - Chattogram, Bangladesh: `[x: 725, y: 170]`
- Great-circle bezier curves linking Bangladesh to international nodes with animated dashed travel pulses.
- Responsive container with frosted glass card wrapper and interactive location badges.

## Risks & Trade-offs
- **[Risk] High CPU usage from continuous SVG animations** → **Mitigation**: Use pure CSS keyframes with `transform` and `opacity` only; pause animations when off-screen using `IntersectionObserver`.
- **[Risk] Light theme contrast for map arcs** → **Mitigation**: Adaptive stroke colors (`rgba(16, 185, 129, 0.4)` on dark, `rgba(5, 150, 105, 0.6)` on light).
