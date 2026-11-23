# AGENTS.md — AI Coding Agents Operational Guidelines & Policy

> **Target Agents**: Google Antigravity, OpenCode, Claude Code, Cursor.  
> **Repository**: Mustafa Rahman — Senior Software Engineer & ICT Educator Portfolio.  
> **Development Methodology**: Spec-Driven Development (SDD) via **OpenSpec**.  
> **Operating Mode**: Autonomous Development with Human Approval Gates.

---

## 1. Local AI Development Policy

### 1.1 Operating Mode
**Autonomous Development with Human Approval Gates.**  
Agents are empowered to research, plan, and implement code within approved scopes, but must halt at defined safety boundaries for explicit human authorization.

### 1.2 AI Can Execute Autonomously
- Read and analyze project files across the workspace.
- Understand existing architecture, dependencies, and design patterns.
- Create OpenSpec proposals (`proposal.md`), functional specifications (`specs/<capability>/spec.md`), and technical designs (`design.md`).
- Implement features approved by the user in `tasks.md`.
- Refactor code strictly within the approved task scope.
- Run automated tests, linting (`npm run lint`), and production builds (`npm run build`).
- Fix ordinary bugs and errors reported by compilers, linters, or test runners.
- Update technical documentation and living specifications.

### 1.3 Human Approval Required (Hard Approval Gates)
Agents **MUST STOP and request explicit human approval** before executing any of the following:
1. **Production Deployment**: Deploying the site to production edge networks (Vercel, Cloudflare, Firebase).
2. **Database Operations**: Any database migrations, schema alterations, or data mutations.
3. **Authentication & Authorization**: Any changes to security mechanisms, access controls, or user sessions.
4. **Security Rules & Permissions**: Alterations to CORS, CSP headers, or environment policies.
5. **Secrets & Environment Configuration**: Modifying `.env` files, injecting API keys, or exposing credentials.
6. **Destructive File Operations**: Deleting application files, directories, or historical archives.
7. **Destructive Git Operations**: `git reset --hard`, `git clean -f`, force pushes (`git push --force`), or branch deletion.
8. **Remote Git & Releases**: Pushing commits to remote repositories, merging Pull Requests, or creating GitHub releases.

### 1.4 Development & Safety Rules
- **Preserve Existing Features**: Never break existing working components, navigation scroll spying, or theme toggling.
- **No Unnecessary Project Rewrites**: Never rewrite existing components or refactor outside approved tasks.
- **Minimal-Risk Changes**: Favor localized, incremental modifications over broad architectural shifts.
- **Protect User Work**: Never overwrite uncommitted user changes or manual edits.
- **Follow Existing Architecture**: Adhere strictly to the established directory structure, styling tokens, and conventions.
- **Verification Before Completion**: Run genuine linting and build checks before marking any task complete.
- **Zero Secret Exposure**: Never hardcode private tokens, API keys, or personal credentials.

### 1.5 Multi-Agent Collaboration (OpenCode & Antigravity)
- **Shared Source of Truth**: OpenCode and Antigravity collaborate through OpenSpec specifications in `openspec/`.
- **No Concurrent Overwrites**: Agents must never modify the same file simultaneously.
- **Isolated Branching**: When working on distinct features or experiments, use isolated Git branches.
- **Pre-Merge Review**: Review changes against specifications before proposing merges.

### 1.6 Standard Reporting Structure
Every agent completion summary must transparently report:
1. **Changed Files**: Full list of modified, created, or deleted paths.
2. **Tests & Commands Executed**: Real commands run with genuine exit codes.
3. **Verification Results**: Spec scenarios validated, build status, and lint outcomes.
4. **Risks & Trade-offs**: Identified technical debt, performance notes, or potential regressions.
5. **Pending Approvals**: Explicitly list items requiring human sign-off before proceeding.

---

## 2. Project Architecture & Technical Boundaries

- **Application Directory**: `react-with-vite/`
- **Framework & Libraries**:
  - React 19 (`react` 19.3.1, `react-dom` 19.3.1)
  - Vite (`vite` 8.3.6) with `@vitejs/plugin-react`
  - Tailwind CSS v4 (`tailwindcss` 4.3.5) with `@tailwindcss/vite`
  - Motion (`motion` 14.14.0)
  - Lenis (`lenis` 1.3.27)
  - Lucide React (`lucide-react` 1.78.0) & Custom SVGs in `src/components/BrandIcons.jsx`
  - EmailJS (`@emailjs/browser` 5.0.3)
  - Utilities (`clsx` 2.1.1, `tailwind-merge` 3.7.1)
- **Language**: Strictly **JavaScript ES6+**. **DO NOT use TypeScript** under any circumstances in this project.
- **Backend**: Zero backend server. The app is a purely client-side Single-Page Application (SPA) deployable on static edge hosting.
- **State & Data**: All personal profile, career history, education, projects, and skills data are strictly maintained inside `react-with-vite/src/data/`.
- **Factual Integrity**: Never invent fictitious skills, fake percentage bars, or unverified work claims for Mustafa Rahman.

---

## 3. Spec-Driven Development (SDD) Workflow

No agent may implement application features or refactor code without an approved OpenSpec proposal.

### The 12-Stage Engineering Lifecycle:
1. **Explore Requirements**: Clarify ambiguous requirements, feasibility, and UX needs.
2. **Feature Proposal**: Generate `proposal.md` with explicit scope and out-of-scope boundaries.
3. **Functional Specifications**: Write delta specs using Given/When/Then requirements under `specs/<capability>/spec.md`.
4. **Technical Constraints**: Detail performance, bundle size, accessibility, and theme compatibility.
5. **Architectural Design**: Produce `design.md` covering component contracts and styling tokens.
6. **Task Breakdown**: Create granular, sequential tasks in `tasks.md`.
7. **User Approval Gate**: **STOP and wait for explicit human user approval before touching source code.**
8. **Incremental Implementation**: Apply changes task-by-task.
9. **Automated Testing & Linting**: Run `npm run lint` and `npm run build` in `react-with-vite/`.
10. **Security & Code Review**: Ensure no credential leakage, sanitize contact inputs, check OWASP risks.
11. **Verification against Spec**: Validate that every requirement scenario is satisfied.
12. **Deployment-Ready Report**: Deliver a summary report with build verification and artifact status.

---

## 4. Standard CLI & Development Commands

All development commands must be executed within the `react-with-vite` directory:

```powershell
# Development server (Port 5173 by default)
cd react-with-vite
npm.cmd run start

# Production Build Check
npm.cmd run build

# Code Quality & Linting
npm.cmd run lint

# Production Preview Check (Port 4173)
npm.cmd run preview
```

### OpenSpec Management Commands (Executed from workspace root or react-with-vite):
```powershell
# Validate all changes and specifications
npx.cmd @fission-ai/openspec validate --all

# List current specifications
npx.cmd @fission-ai/openspec list --specs

# Propose a new change
npx.cmd @fission-ai/openspec change new <change-name>

# Check system health
npx.cmd @fission-ai/openspec doctor
```

---

## 5. UI / UX & Design Standards
- **Theme Support**: Every new component or UI modification must seamlessly support both **Dark Mode** (`#090a0f`) and **Light Mode** (`#f8fafc`).
- **Color Tokens**: Use CSS variables (`var(--bg-page)`, `var(--text-main)`, `var(--card-bg)`, `var(--accent)`) defined in `src/index.css`. Never hardcode opaque background or text utility classes.
- **Glassmorphism**: Use `.glass-panel` and `.glass-panel-subtle` classes for frosted glass cards.
- **Accessibility**: Ensure keyboard accessibility (Escape to close modals, tab-indexed elements) and respect `prefers-reduced-motion`.
- **Installed Skills**: Agents must consult the installed skills in `.agents/skills/` (`design-taste-frontend`, `apple-design`, `emil-design-eng`, `review-animations`, `frontend-design`, `motion-design`, `web-design-guidelines`, `vercel-composition-patterns`).
