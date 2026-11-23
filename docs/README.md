# Mustafa Rahman Portfolio — Engineering Documentation

Welcome to the comprehensive technical documentation for **Mustafa Rahman's** Senior Software Engineer & ICT Educator Portfolio. 

This documentation covers the system architecture, dual-theme engine, automated testing harness, Spec-Driven Development (SDD), AI agent governance, and CI/CD deployment pipelines.

---

## 📚 Documentation Index

| Guide | Description | Target Audience |
| :--- | :--- | :--- |
| **[System Architecture](architecture.md)** | Technical stack, SPA architecture, performance benchmarks, and decoupled data models. | Architects & Engineers |
| **[Dual-Theme Engine](dual-theme-engine.md)** | Deep-dive into the Obsidian Dark and Apple Slate Light theme engine, CSS variables, and adaptive mockups. | Frontend Engineers & Designers |
| **[Components & Data Catalog](components-and-data.md)** | Full inventory of all 15 React components, prop contracts, and `src/data/` schema specifications. | Developers & Maintainers |
| **[Automated Testing & Quality](testing-and-quality.md)** | 17 Vitest test cases, jsdom setup, ESLint 10 rules, and local test execution instructions. | QA & Developers |
| **[Spec-Driven Development & AI](spec-driven-development-and-ai.md)** | OpenSpec v2.1 methodology, living specifications, AGENTS.md policy, and multi-agent roles. | AI Coding Agents & Leads |
| **[Deployment & CI/CD Pipeline](deployment-and-cicd.md)** | Vercel edge deployment, GitHub Actions CI pipeline, automated tag releases, and security headers. | DevOps & Maintainers |

---

## 🚀 Quick Reference Commands

All primary development lifecycles are executed via `npm`:

```powershell
# Start local development server (Port 5173)
npm start

# Run all 17 automated Vitest tests
npm test

# Run ESLint code quality audit
npm run lint

# Compile production build (dist/)
npm run build

# Preview production build locally (Port 4173)
npm run preview
```

---

## 🔒 Operational Standards & Policies

* **Zero TypeScript Policy:** Strictly JavaScript ES6+ as defined in [AGENTS.md](../AGENTS.md).
* **Factual Integrity:** Never invent fictitious skills or fake percentage bars.
* **Human Approval Gates:** AI agents must request explicit approval before production deployments or destructive operations.
* **Theme Accessibility:** All new UI additions must be tested in both Dark and Light modes.
