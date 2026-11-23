# Spec Delta: Desktop Command Hub for Skills Section

## ADDED Requirements

### Requirement: Split-Screen Desktop Command Hub Presentation
The system SHALL present Mustafa Rahman's technical competencies in an interactive, split-screen Command Hub layout on desktop viewports to eliminate vertical height bloat.

#### Scenario: Desktop Split-Screen Layout
- **GIVEN** the user navigates to the Skills section on a desktop viewport (min-width: 1024px)
- **WHEN** the section is rendered
- **THEN** it displays a Domain Selector sidebar on the left column (~33% width) and an Active Domain Workstation console on the right column (~67% width) within a unified, bounded viewport height (~520px–560px).

#### Scenario: Interactive Domain Selection
- **GIVEN** the Desktop Command Hub is displayed
- **WHEN** the user clicks any domain from the selector list
- **THEN** the right workstation console seamlessly transitions to display that domain's architecture, core competencies, and supporting tool matrix using smooth, sub-300ms motion transitions.

#### Scenario: Visual Hierarchy Separation (Core Superpowers vs Supporting Stack)
- **GIVEN** an active domain is displayed in the workstation console
- **WHEN** the skills list is rendered
- **THEN** top core production technologies are displayed as prominent feature cards with highlights, while supporting and knowledge technologies are displayed as a dense, elegant tag-cloud matrix with interactive highlights.

#### Scenario: Responsive Mobile and Tablet Viewport Adaptation
- **GIVEN** the application is viewed on a mobile or tablet viewport (width < 1024px)
- **WHEN** the Skills section renders
- **THEN** the domain selector adapts into a horizontal, scrollable pill navigation bar above the active domain workstation card without horizontal clipping or broken layouts.

#### Scenario: Dual-Theme Contrast and Accessibility
- **GIVEN** either Dark Mode or Light Mode is active
- **WHEN** the Command Hub renders
- **THEN** all domain tabs, active indicators, feature cards, and tag capsules maintain WCAG AA contrast standards using CSS variable design tokens (`--bg-page`, `--text-heading`, `--card-bg`, `--card-inner-border`).
