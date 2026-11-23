# Spec Delta: Magic UI Visual Engineering & Interactive Global Map

## ADDED Requirements

### Requirement: Interactive Global Engineering Reach Map
The system SHALL present Mustafa Rahman's international career footprint (United States, Istanbul, Hyderabad, Bangladesh) through an interactive SVG vector map embedded within the About section.

#### Scenario: Geographic Node and Arc Presentation
- **GIVEN** the user navigates to the About section
- **WHEN** the section scrolls into view
- **THEN** the Global Map displays geographic nodes for Austin (USA), Istanbul (Türkiye), Hyderabad (India), and Chattogram (Bangladesh) connected with animated, pulsing travel arcs.

#### Scenario: Interactive Hub Inspection
- **GIVEN** the Global Map is visible
- **WHEN** the user hovers or taps on any geographic node
- **THEN** the node pulses and reveals verified role metadata, status, and engineering scope for that location.

### Requirement: Magic UI Visual Micro-Interactions
The system SHALL enhance user engagement through lightweight Magic UI components without external package dependencies.

#### Scenario: Border Beam Glow on Primary Showcase Cards
- **GIVEN** the Hero visual card or active Skills workstation is rendered
- **WHEN** the viewport is active
- **THEN** an animated gradient laser beam travels smoothly along the container perimeter.

#### Scenario: Animated Number Ticker on Verified Metrics
- **GIVEN** the user scrolls to the reported academic indicators or engineering highlights
- **WHEN** the element enters the viewport
- **THEN** metrics (`226+`, `90%`, `10+`) smoothly count up to their verified final values.

#### Scenario: Infinite Production Tech Marquee
- **GIVEN** the user views the Hero section
- **WHEN** the page is loaded
- **THEN** a continuous, accessible horizontal marquee displays core engineering technologies with pause-on-hover capabilities.
