# Dual-Theme Engine Architecture

## 1. Overview & Visual Design Language

Mustafa Rahman's portfolio features an enterprise-grade **Dual-Theme Engine** engineered to transition instantaneously between two high-contrast, visually harmonious palettes:
1. **Obsidian Dark (Default):** Deep near-black background (`#090a0f`), subtle emerald and cyan glows, dark frosted glass cards.
2. **Apple Slate Light:** Ultra-clean slate light canvas (`#f8fafc`), crisp typography (`#0f172a`), soft ambient drop-shadows, and Apple macOS window styling.

---

## 2. CSS Custom Properties & Token Architecture

The theme engine operates via semantic CSS custom variables defined in [src/index.css](file:///e:/Nahid/learn-react/react-with-vite/src/index.css):

```css
:root {
  /* Default: Obsidian Dark Theme */
  --bg-page: #090a0f;
  --bg-page-secondary: #0d111a;
  --text-main: #e2e8f0;
  --text-heading: #ffffff;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --card-bg: rgba(15, 18, 26, 0.75);
  --card-border: rgba(255, 255, 255, 0.08);
  --card-subtle-bg: rgba(18, 22, 32, 0.5);
  --card-subtle-border: rgba(255, 255, 255, 0.06);
  --card-inner-bg: rgba(255, 255, 255, 0.025);
  --card-inner-border: rgba(255, 255, 255, 0.05);
  --nav-bg: rgba(9, 10, 15, 0.85);
  --nav-border: rgba(255, 255, 255, 0.08);
  --accent: #10b981;
}

html.light,
.light {
  /* Modern Apple Slate Light Theme */
  --bg-page: #f8fafc;
  --bg-page-secondary: #f1f5f9;
  --text-main: #1e293b;
  --text-heading: #0f172a;
  --text-muted: #475569;
  --text-dim: #64748b;
  --card-bg: rgba(255, 255, 255, 0.9);
  --card-border: rgba(0, 0, 0, 0.08);
  --card-subtle-bg: rgba(248, 250, 252, 0.85);
  --card-subtle-border: rgba(0, 0, 0, 0.06);
  --card-inner-bg: rgba(0, 0, 0, 0.025);
  --card-inner-border: rgba(0, 0, 0, 0.06);
  --nav-bg: rgba(248, 250, 252, 0.9);
  --nav-border: rgba(0, 0, 0, 0.08);
  --accent: #059669;
}
```

---

## 3. Dynamic Glassmorphism Panels

The system avoids hardcoded colors by utilizing `.glass-panel` and `.glass-panel-subtle` classes:

* **Dark Mode Glass:** High background blur (`16px`), dark translucency, and fine 1px white border (`rgba(255, 255, 255, 0.08)`).
* **Light Mode Glass:** Crisp white card (`rgba(255, 255, 255, 0.9)`), soft ambient shadow (`box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05)`), and clean slate border.

---

## 4. Adaptive Project Mockups

The project mockups (Automata Pro, Mentora Pro, SpendWise Pro, ProductMesh) dynamically transform based on the active theme:

```jsx
// Light Mode: Apple Safari Slate Window
// Dark Mode: Deep Terminal Glow
<div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100/90 dark:from-slate-950 dark:via-[#0d141e] dark:to-[#080d14] text-slate-800 dark:text-white border border-slate-200 dark:border-emerald-500/25 ...">
  {/* macOS Traffic Lights */}
  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
</div>
```

---

## 5. Persistence & Synchronization Hook

The `useTheme` hook (`src/hooks/useTheme.js`):
1. Reads the user's saved preference from `localStorage.getItem('portfolio-theme')`.
2. Falls back to default `dark` mode if no preference exists.
3. Automatically toggles `.light` or `.dark` class on `document.documentElement`.
4. Tests in [src/\_\_tests\_\_/theme.test.js](file:///e:/Nahid/learn-react/react-with-vite/src/__tests__/theme.test.js) guarantee zero flicker and zero data corruption during switching.
