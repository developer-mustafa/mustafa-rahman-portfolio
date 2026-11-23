# Tasks

## 1. OpenSpec Proposal & Design Approval
- [x] 1.1 Formulate proposal.md, design.md, and spec.md for Option 1 (Desktop Command Hub)
- [x] 1.2 Obtain explicit user authorization at the approval gate before modifying source code

## 2. Desktop Command Hub Implementation (`Skills.jsx`)
- [x] 2.1 Refactor Skills.jsx state to track active domain (`activeDomainId`) and active tier filtering
- [x] 2.2 Build the Left Domain Selector sidebar with icons, badge counts, and active glassmorphic pill indicator (`lg:grid-cols-12`)
- [x] 2.3 Build the Right Active Workstation Console with domain summary, metadata header, and statistics footer
- [x] 2.4 Implement visual hierarchy partitioning: Core Superpowers spotlight grid vs Supporting Tooling capsule cloud
- [x] 2.5 Add interactive micro-tooltips/popovers for capsule cloud items showing engineering highlights

## 3. Motion, Responsiveness & Theme Fidelity
- [x] 3.1 Wire up `motion/react` with `AnimatePresence` for fluid, sub-250ms cross-fading domain transitions
- [x] 3.2 Implement responsive horizontal scrollable pill navigation for viewports `< 1024px`
- [x] 3.3 Verify full theme support across Dark Mode (`#090a0f`) and Light Mode (`#f8fafc`) with CSS variables

## 4. Verification & Quality Gates
- [x] 4.1 Run `npm run lint` in `react-with-vite/` and ensure zero ESLint errors
- [x] 4.2 Run `npm run build` in `react-with-vite/` and confirm clean production bundle
- [x] 4.3 Run automated tests `npm run test` to verify zero regression across all test suites
