# Proposal: Desktop Command Hub Architecture for Skills Section

## Why
The current Skills section renders categories in an unconstrained vertical 3-column grid where each domain lists 12–14 skills as individually stacked rectangular boxes with full description paragraphs and tier badges. This design suffers from severe architectural and UX drawbacks:
1. **Vertical Bloat & Excessive Height ("Lombate")**: Each domain card stretches between 750px and 850px in height. Across 9 domains, over 120 separate sub-boxes are rendered simultaneously, creating an exhausting, repetitive wall of text that dominates the page.
2. **Lack of Visual Hierarchy**: Core production drivers (e.g. `React 19`, `Next.js`, `Node.js`, `OpenAI API`) carry the exact same visual weight, box padding, and typography as secondary or supporting utilities (e.g. `HTML5`, `PWA`, `shadcn/ui`).
3. **Suboptimal Desktop Experience**: Rather than leveraging widescreen desktop viewports for an interactive, command-center experience (similar to Linear, Raycast, or Vercel), the interface forces users to scroll down through repetitive rows.

Adopting a **Desktop Command Hub** (Split-Console Architecture) organizes the 9 domains into a focused, fixed-height (~520px–560px) workstation on desktop. A high-density domain selector on the left pairs with a dynamic, hierarchical execution console on the right—drastically reducing vertical clutter while elevating the presentation to an executive, senior-engineer standard.

## What Changes
- **Split-Screen Workstation Layout (`lg:grid lg:grid-cols-12 gap-8`)**:
  - **Left Domain Console (4 cols / ~33%)**: A sleek, vertical domain navigator showcasing all 9 specialized engineering tracks with domain icons, competency counters, and active glassmorphic indicators.
  - **Right Command Console (8 cols / ~67%)**: A unified, high-fidelity workstation card presenting the active domain's full technical profile within an elegant, fixed-height desktop viewport.
- **Architectural Visual Hierarchy**:
  - **Core Superpowers (Featured Grid)**: Top 4–6 production technologies highlighted in high-contrast glass cards with technology title, tier badge, and engineering focus.
  - **Production Tooling & Applied Stack (Dense Capsule Cloud)**: Secondary and supporting tools organized into a clean, horizontal capsule/chip matrix with subtle micro-tooltips/popovers for highlights, eliminating repetitive vertical boxes.
- **Fluid Domain Switching Transitions**:
  - Powered by `motion/react` with smooth cross-fading and layout transitions, providing instant, tactile feedback when selecting domains.
- **Responsive Mobile & Tablet Experience**:
  - On viewports `< 1024px`, the workstation transitions seamlessly from a split-column into a top horizontal swipeable/segmented pill strip, followed by the compact domain card below.
- **Dual-Theme Optimization & Accessibility**:
  - Full adherence to CSS variables (`var(--bg-page)`, `var(--text-heading)`, `var(--card-bg)`, `var(--accent)`) for seamless Light Mode and Dark Mode rendering.
  - Semantic ARIA attributes (`role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`) for complete keyboard and screen-reader accessibility.

## Capabilities

### Modified Capabilities
- `portfolio-core`: Updates the Skills Section presentation requirements to mandate a Desktop Command Hub split-console architecture with clear distinction between Core Superpowers and Supporting Tooling.

## Impact
- **Modified Files**: `react-with-vite/src/components/Skills.jsx`.
- **Preserved Data**: `react-with-vite/src/data/skills.js` remains 100% intact; no skill names, tiers, or highlights are removed or artificially altered.
- **Dependencies**: Uses existing project dependencies (`motion`, `lucide-react`, Tailwind CSS v4). Zero new packages added.
- **Breaking Changes**: None. Section anchor `#skills` and navigation spy remain fully functional.
