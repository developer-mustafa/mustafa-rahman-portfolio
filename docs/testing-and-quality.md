# Automated Testing & Code Quality Guide

## 1. Quality Strategy Overview

The repository enforces a zero-tolerance policy for compiler warnings, syntax errors, and regression bugs. The quality assurance pipeline comprises 3 automated layers:
1. **Static Analysis & Syntax Linting:** ESLint 10 (Flat Config) with React Hooks rules.
2. **Automated Unit & Integration Testing:** Vitest with jsdom simulating DOM and localStorage APIs.
3. **Production Compilation Verification:** Vite 8 production build checking chunk sizes and asset output.

---

## 2. Test Suites Catalog (`src/__tests__/`)

The test suite consists of 17 tests across 3 dedicated test files:

### 1. `data.test.js` (9 Tests)
* **Profile Validation:** Verifies Mustafa Rahman's name, titles, contact email format, GitHub URLs, and mission statement integrity.
* **Projects Validation:** Validates that all 4 projects (Automata Pro, Mentora Pro, SpendWise Pro, ProductMesh) exist with unique IDs, categories, and non-empty technology stacks.
* **Experience & Education Integrity:** Asserts that career positions and teaching institutions conform to schema requirements.
* **Skills OpenSpec Compliance:** Confirms that no skills have arbitrary percentage bars and all conform to the 3-tier hierarchy (`core`, `knowledge`, `exploring`).

### 2. `theme.test.js` (3 Tests)
* **Default Dark Mode:** Asserts that visiting without a stored preference initializes the Obsidian Dark theme (`dark` class on `<html>`).
* **Storage Persistence:** Verifies that toggling to `light` stores `'light'` in `localStorage` and updates document classes.
* **State Machine Consistency:** Tests bidirectional toggling between dark and light modes without class list corruption.

### 3. `spec-compliance.test.js` (5 Tests)
* **OpenSpec Scenario Validation:** Programmatically verifies the Gherkin scenarios defined in `openspec/specs/portfolio-core/spec.md`.
* **Modal Readiness:** Checks that every project card provides sufficient descriptive depth (>20 characters) and at least 3 technologies for modal rendering.
* **Contact Channel Security:** Confirms that contact destinations are defined and valid.

---

## 3. Running Tests Locally

All test commands can be executed from the repository root:

```powershell
# Run the complete test suite once
npm test

# Run tests in watch mode (interactive)
npm run --prefix react-with-vite test:watch

# Run ESLint code quality audit
npm run lint

# Run full production build verification
npm run build
```

---

## 4. Verification Output Benchmark

```bash
 RUN  v5.1.1 E:/Nahid/learn-react/react-with-vite

 ✓ src/__tests__/theme.test.js (3 tests) 10ms
 ✓ src/__tests__/spec-compliance.test.js (5 tests) 25ms
 ✓ src/__tests__/data.test.js (9 tests) 22ms

 Test Files  3 passed (3)
      Tests  17 passed (17)
   Duration  2.47s
```
* **ESLint:** 0 errors, 0 warnings.
* **Vite Build:** 2587 modules transformed, built in ~5.6s.
