# Mustafa Rahman — Senior Software Engineer Portfolio

> **Live Preview / Production:** High-performance personal portfolio built for **Mustafa Rahman**, Senior Software Engineer, Frontend Architect, and ICT Educator based in Mirsarai, Chattogram, Bangladesh.

[![Vite](https://img.shields.io/badge/Vite-8.3.6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.5-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![OpenSpec](https://img.shields.io/badge/OpenSpec-SDD_v2.1.1-10B981)](https://openspec.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🚀 Overview

A world-class personal engineering portfolio engineered with an Awwwards-caliber user experience, Apple-inspired typography, and Linear's minimalist aesthetic.

### Key Capabilities
- **Dual-Theme Engine**: Instant, flicker-free toggle between **Premium Dark** (`#090a0f`) and **Modern Light** (`#f8fafc`) with persistent `localStorage` synchronization.
- **Spec-Driven Development (SDD)**: Architected and managed with **OpenSpec**, linking specifications (`openspec/specs/`) directly to AI coding agents (Google Antigravity & OpenCode).
- **Responsive 2-Column Editorial Hero**: Clean visual hierarchy with personal engineer portrait, interactive verified badges, and high-impact CTAs.
- **Featured Projects Showcase**: Interactive bento-grid presentation with deep-dive architectural modal breakdowns.
- **Skills Matrix**: 9 technical domains classified by 3-tier depth indicators (Core, Knowledgeable, Exploring).
- **Smooth Physics-Based Navigation**: Lenis smooth scrolling with strict `prefers-reduced-motion` accessibility support.
- **Vercel & CI/CD Ready**: Zero-config Vercel deployment with automated GitHub Actions CI pipeline.

---

## 🛠️ Technology Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) (19.3.1) |
| **Bundler & Dev Server** | [Vite 8](https://vitejs.dev/) (8.3.6) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) + Custom CSS Variables |
| **Motion & Animation** | [Motion for React](https://motion.dev/) (14.14.0) |
| **Smooth Scrolling** | [Lenis](https://lenis.darkroom.engineering/) (1.3.27) |
| **Icons** | [Lucide React](https://lucide.dev/) (1.78.0) & Accessible Custom SVGs |
| **Forms & Messaging** | [@emailjs/browser](https://www.emailjs.com/) (5.0.3) |
| **Code Quality** | ESLint 10 (Flat Config, 0 errors, 0 warnings) |
| **Specification Engine** | [OpenSpec](https://openspec.dev/) (v2.1.1) |

---

## 📂 Repository Structure

```
.
├── .github/
│   └── workflows/ci.yml       # GitHub Actions CI/CD Pipeline
├── .agents/
│   └── skills/                # Agent Skills (OpenSpec + Design + Motion)
├── openspec/
│   ├── config.yaml            # OpenSpec system configuration
│   ├── specs/                 # Living specifications (portfolio-core)
│   └── changes/               # Spec changes & proposals
├── react-with-vite/
│   ├── public/                # Static assets & images
│   ├── src/
│   │   ├── components/        # Modular React components
│   │   ├── data/              # Centralized verified profile & project data
│   │   ├── hooks/             # Custom hooks (useTheme, useScrollSpy)
│   │   ├── App.jsx            # Application root
│   │   └── index.css          # Dual-theme CSS variables engine
│   ├── package.json           # Application dependencies
│   └── vite.config.js         # Vite configuration
├── vercel.json                # Vercel deployment & security headers config
├── package.json               # Root proxy scripts
└── README.md                  # Project documentation
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v20 or higher recommended)
- npm (v10 or higher)

### Installation & Run

```bash
# 1. Clone repository
git clone https://github.com/developer-mustafa/mustafa-rahman-portfolio.git
cd mustafa-rahman-portfolio

# 2. Install dependencies
npm run --prefix react-with-vite install

# 3. Start local development server (Port 5173)
npm run dev

# 4. Run automated code quality & build test
npm run test

# 5. Preview production build (Port 4173)
npm run preview
```

---

## 🚢 Deployment to Vercel

### Option 1: Automatic Deployment via GitHub (Recommended)
1. Push this repository to your GitHub account.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel automatically detects the root `vercel.json` and builds `react-with-vite/dist` instantly with zero manual configuration.

### Option 2: Deploy via Vercel CLI
```bash
npx vercel
```

---

## 👤 Author

**Mustafa Rahman**  
- **Professional Title:** Senior Software Engineer | Full-Stack AI Engineer | ICT Educator  
- **Location:** Mirsarai, Chattogram, Bangladesh  
- **Website:** [mustafaofficial.com](https://mustafaofficial.com)  
- **GitHub:** [@developer-mustafa](https://github.com/developer-mustafa)  
- **LinkedIn:** [developer-mustafa](https://bd.linkedin.com/in/developer-mustafa)  
- **Email:** [mustafa.rahman.official@gmail.com](mailto:mustafa.rahman.official@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
