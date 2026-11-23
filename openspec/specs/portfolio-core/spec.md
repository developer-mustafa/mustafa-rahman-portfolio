## Purpose
The personal portfolio for Mustafa Rahman (Senior Software Engineer, Frontend Architect, and ICT Educator) is a high-performance, single-page React web application engineered to showcase verified engineering experience, software architecture expertise, and academic impact with an Awwwards-caliber user experience.

## Requirements

### Requirement: Dual-Theme Architecture
The system SHALL support an instantaneous, flicker-free toggle between Premium Dark (default, `#090a0f`) and Modern Light (`#f8fafc`).

#### Scenario: Default Theme Initialization
- **WHEN** a user visits the application for the first time without a saved preference
- **THEN** the system applies the dark theme, adds the `dark` class to `<html>`, and stores the preference in `localStorage`.

#### Scenario: Theme Switching
- **WHEN** the user clicks the theme toggle button in the navigation bar
- **THEN** the application transitions between dark and light themes smoothly within 250ms without reloading the page.

### Requirement: Smooth Scroll and Navigation
The system SHALL provide fixed navigation with active section detection and smooth physics-based scrolling.

#### Scenario: Active Section Tracking
- **WHEN** the user scrolls down the page past section boundaries
- **THEN** the navigation bar highlights the corresponding active section indicator.

#### Scenario: Reduced Motion Accessibility
- **WHEN** the user's operating system requests `prefers-reduced-motion: reduce`
- **THEN** the system disables Lenis smooth scrolling and falls back to native instant scrolling.

### Requirement: Production Projects Showcase
The system SHALL display verified production applications with interactive technical architectural deep-dives.

#### Scenario: Project Modal Inspection
- **WHEN** the user clicks "View Details" on any project card (Automata Pro, Mentora Pro, SpendWise Pro, ProductMesh)
- **THEN** an accessible modal opens showing the project's architecture, key features, and live links.

### Requirement: Verified Engineering Skills Matrix
The system SHALL present technical skills categorized by domain with 3-tier depth indicators without fictitious percentage ratings.

#### Scenario: Skill Filtering and Inspection
- **WHEN** the user browses the Skills section
- **THEN** skills are categorized into distinct engineering domains (Core, Knowledgeable, Exploring) with zero arbitrary percentages.

### Requirement: Direct Contact Interface
The system SHALL allow visitors to send direct messages via an integrated client-side contact form.

#### Scenario: Contact Form Submission
- **WHEN** a visitor submits the contact form with valid name, email, and message
- **THEN** the system validates inputs and sends the message using EmailJS while displaying a feedback state.
