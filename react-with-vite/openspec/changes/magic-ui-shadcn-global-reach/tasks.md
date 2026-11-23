# Tasks

## 1. OpenSpec Proposal & Design Approval
- [x] 1.1 Formulate proposal.md, design.md, and spec.md for Magic UI & Global Map integration
- [x] 1.2 Obtain explicit user authorization at the approval gate before modifying source code

## 2. Magic UI Component Suite Implementation (`src/components/magicui/`)
- [x] 2.1 Implement `BorderBeam.jsx` with customizable duration, size, and gradient colors
- [x] 2.2 Implement `ShimmerButton.jsx` with accessible button semantics and dynamic light reflection
- [x] 2.3 Implement `NumberTicker.jsx` with viewport-triggered count-up animation
- [x] 2.4 Implement `TechMarquee.jsx` with infinite seamless scroll and pause-on-hover

## 3. Interactive Global Map Component (`src/components/GlobalMap.jsx`)
- [x] 3.1 Design lightweight SVG vector world map geometry with dark/light theme contrast
- [x] 3.2 Place verified coordinate nodes for USA, Istanbul, Hyderabad, and Bangladesh
- [x] 3.3 Animate curved great-circle SVG connection arcs with traveling dash pulses
- [x] 3.4 Integrate interactive hover tooltips with location metadata and time zones

## 4. Integration Across Application Sections
- [x] 4.1 Integrate `BorderBeam` and `ShimmerButton` into `Hero.jsx`
- [x] 4.2 Mount `TechMarquee` seamlessly beneath the Hero grid
- [x] 4.3 Replace static international card in `About.jsx` with interactive `GlobalMap`
- [x] 4.4 Integrate `NumberTicker` into `Education.jsx` verified metrics (226+ results, 90% pass rate)

## 5. Verification & Quality Assurance
- [x] 5.1 Run `npm run lint` and ensure 0 ESLint errors/warnings
- [x] 5.2 Run `npm run test` and verify all Vitest tests pass
- [x] 5.3 Run `npm run build` and ensure clean, high-speed production compilation
