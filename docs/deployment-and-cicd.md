# Deployment, CI/CD & Release Pipeline

## 1. Hosting Architecture Overview

The portfolio is deployed on the **Vercel Edge Network** with continuous delivery wired directly to GitHub repository `developer-mustafa/mustafa-rahman-portfolio`.

* **Live Production URL:** [mustafarahman.vercel.app](https://mustafarahman.vercel.app)
* **GitHub Repository:** [developer-mustafa/mustafa-rahman-portfolio](https://github.com/developer-mustafa/mustafa-rahman-portfolio)
* **Hosting Tier:** Vercel Hobby Edge Network

---

## 2. Vercel Configuration ([vercel.json](file:///e:/Nahid/learn-react/vercel.json))

The root `vercel.json` coordinates Vite build routing, SPA fallbacks, and industry-standard OWASP HTTP security headers:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "vite",
  "buildCommand": "npm run --prefix react-with-vite build",
  "outputDirectory": "react-with-vite/dist",
  "cleanUrls": true,
  "trailingSlash": false,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

## 3. GitHub Actions Workflows (`.github/workflows/`)

### 1. CI Quality Pipeline (`.github/workflows/ci.yml`)
* **Trigger:** Every `push` and `pull_request` on `main` and `master` branches.
* **Execution Steps:**
  1. Source checkout (`actions/checkout@v4`).
  2. Node.js v22 setup with `npm` dependency caching.
  3. Clean dependency installation (`npm ci`).
  4. ESLint code quality audit (`npm run lint`).
  5. Vitest automated test suite (`npm test` — 17 tests).
  6. Vite production compilation (`npm run build`).
  7. Artifact verification (`dist/index.html`).

### 2. Automated Release Pipeline (`.github/workflows/release.yml`)
* **Trigger:** Whenever an annotated version tag (`v*`) is pushed to GitHub (e.g., `git push origin v1.0.0`).
* **Execution Steps:**
  1. Runs complete test suite and production build.
  2. Archives `dist/` into `mustafa-rahman-portfolio-production-<tag>.zip`.
  3. Automatically publishes an official GitHub Release with release notes and downloadable zip artifact.

---

## 4. Semantic Release Workflow

To create a new release for the portfolio:

```powershell
# 1. Update version in CHANGELOG.md and package.json
# 2. Commit your changes
git add CHANGELOG.md package.json
git commit -m "chore(release): prepare release v1.1.0"
git push origin main

# 3. Create annotated tag and push
git tag -a v1.1.0 -m "Release v1.1.0: Description of updates"
git push origin v1.1.0
```

GitHub Actions will automatically pick up the tag, build the assets, and publish the release under the repository's **Releases** tab.
