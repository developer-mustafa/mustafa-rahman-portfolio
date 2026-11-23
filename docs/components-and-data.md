# Components & Data Architecture Catalog

## 1. Presentation Components (`src/components/`)

The application is structured around 15 modular, decoupled components designed for maximum performance, accessibility, and visual consistency.

```
src/components/
├── Navbar.jsx            # Fixed navigation with active scrollspy and theme toggle
├── Hero.jsx              # Editorial 2-column hero with verified credentials
├── About.jsx             # Technical leadership dimensions and visual banner
├── Experience.jsx        # Professional software engineering career timeline
├── Projects.jsx          # Showcase of verified applications with dual mockups
├── ProjectModal.jsx      # Architectural deep-dive modal dialog (accessible)
├── Skills.jsx            # 9-domain engineering skills matrix (3-tier badges)
├── GitHub.jsx            # GitHub contributions visualizer and ecosystem links
├── Education.jsx         # ICT teaching, student mentorship and academic impact
├── Blog.jsx              # Published engineering articles and technical insights
├── Contact.jsx           # Client-side contact interface powered by EmailJS
├── Footer.jsx            # Copyright, social links, and quick navigation
├── ScrollProgress.jsx    # Top fixed scroll progress indicator (Motion spring)
├── BackgroundEffects.jsx # Ambient blurred mesh gradients and theme grid
└── BrandIcons.jsx        # High-precision custom SVG brand icons
```

---

## 2. Component Specifications

### `Navbar.jsx`
* **Props:** `activeSection` (string), `theme` (string), `toggleTheme` (function).
* **Behavior:** Dynamic height scaling (`py-3` on scroll vs `py-3` initial), backdrop blur, layoutId-animated active section pill (`activePill`), and keyboard-accessible theme toggle.

### `Hero.jsx`
* **Layout:** 2-column grid (`lg:grid-cols-12`).
  * Left (Span 7): Real-time availability pill, gradient heading, roles banner (`Full-Stack AI Software Engineer • Technical Lead • Software Architect`), introduction paragraphs, location badge, and primary CTAs.
  * Right (Span 5): High-resolution engineer portrait in frosted glass card, ambient green blur aura, and verified SolarWinds credentials footer.
* **Highlights Bento:** 4 key metric boxes at the base of the hero.

### `Projects.jsx` & `ProjectModal.jsx`
* **Card Structure:** Dynamic browser/terminal preview window (`renderMockup`), category badge, project tagline, tech stack pills, and interactive modal trigger.
* **Modal Accessibility:** Keyboard `Escape` key listener, focus trapping, backdrop click dismiss, and full architectural breakdown (problem solved, architecture overview, core features, and live links).

### `Skills.jsx`
* **Tier System:** Categorized into 3 distinct engineering depth tiers:
  * `Core`: Technologies actively used in production (Emerald badge).
  * `Professional Knowledge`: Deep conceptual and applied understanding (Blue badge).
  * `Currently Exploring`: Advanced emerging paradigms (Purple badge).
* **Factual Integrity:** Strictly **zero arbitrary percentage bars** conforming to OpenSpec guidelines.

### `Contact.jsx`
* **Service:** `@emailjs/browser` integration.
* **Validation:** Client-side email format regex, non-empty fields, loading spinner state, and success/failure toast feedback.

---

## 3. Data Layer Schema Specifications (`src/data/`)

### `profile.js` (`personalProfile`)
* `name`: string ("Mustafa Rahman")
* `title`: string ("Full-Stack AI Software Engineer | Technical Lead | Software Architect")
* `roles`: array of strings (5 primary titles)
* `location`: `{ city, region, country, label, timeZone }`
* `social`: `{ website, email, github, linkedin }`
* `highlights`: array of 4 key career metrics

### `projects.js` (`projectsData`)
* Array of objects representing production applications:
  * `automata-pro`: Bangla-focused Educational Management Platform (ERP).
  * `mentora-pro`: Coaching Management Solution & Academic Operations Suite.
  * `spendwise-pro`: Personal Finance Management & Budgeting Application.
  * `productmesh`: Product Discovery & Verification Platform.
* Each contains `id`, `name`, `tagline`, `category`, `features`, `technologies`, `website`, `github`.

### `experience.js` (`experienceData`)
* Contains verified career history (SolarWinds Remote USA, Software Engineering Firm Istanbul, etc.) with verified roles, dates, overviews, and bulleted highlights.

### `education.js` (`educationData`)
* Contains academic leadership, lecturer roles (Madbarhat Islamia Fazil Madrasah), teaching contributions, and authentic verified metrics (`226+` HSC ICT A+ results, `90%` pass rate).

### `skills.js` (`skillsCategories`, `skillTiers`)
* 9 comprehensive engineering domains covering Full-Stack, AI & Intelligent Systems, Frontend Architecture, Backend & Distributed Systems, Cloud & DevOps, Database Systems, Software Architecture, Testing & QA, and ICT Education.
