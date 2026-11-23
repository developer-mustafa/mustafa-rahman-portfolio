# Proposal: Professional Hero Section Redesign & Visual Assets Integration

## Why
The current Hero section is a single-column, vertically stacked wall of text with multiple overlapping pill badges and no visual anchor or personal portrait. This creates a cluttered, unbalanced first impression that does not meet the high-end editorial standards of modern developer portfolios (such as Apple, Linear, or Vercel). Incorporating the professional portrait assets located in `public/images/` (`profile eng single.webp` and `main 4 style image.webp`) within a balanced, responsive two-column layout will transform the first impression into an authentic, world-class presentation of Mustafa Rahman's engineering leadership.

## What Changes
- **Editorial Two-Column Hero Architecture**: Transition from a single-column centered layout to an editorial two-column grid on desktop (responsive to stacked layout on tablet/mobile).
- **Featured Engineer Visual Anchor**: Embed `public/images/profile eng single.webp` into a dedicated glassmorphic showcase card on the right column with subtle ambient lighting, dynamic border reflections, and an interactive credential badge.
- **Visual Asset Secondary Integration**: Utilize `public/images/main 4 style image.webp` as a technical versatility preview card within the About/Hero bento structure.
- **Typography & Content Hierarchy Refinement**: Clean up redundant badges, tighten letter spacing, and present role definitions (*Full-Stack AI Software Engineer*, *Technical Lead*, *Software Architect*) with crisp Apple-like hierarchy.
- **Dual-Theme Optimization**: Ensure high-contrast, beautiful rendering in both Premium Dark (`#090a0f`) and Modern Light (`#f8fafc`) modes without visual artifacts or layout shifts.
- **Accessibility & Performance**: Optimize `<img>` tags with explicit dimensions, `loading="eager"`, `fetchpriority="high"`, and proper `alt` descriptions to prevent Cumulative Layout Shift (CLS).

## Capabilities

### Modified Capabilities
- `portfolio-core`: Updates the Hero Section presentation requirements to mandate a responsive two-column layout with personal portrait integration and refined visual hierarchy.

## Impact
- **Modified Files**: `react-with-vite/src/components/Hero.jsx` (layout & visual integration), `react-with-vite/src/components/About.jsx` (secondary asset integration).
- **Dependencies**: Zero new runtime dependencies; utilizes existing Tailwind CSS v4, Motion, and Lucide React.
- **Breaking Changes**: None. All existing links, smooth scroll anchors, and data references are preserved.
