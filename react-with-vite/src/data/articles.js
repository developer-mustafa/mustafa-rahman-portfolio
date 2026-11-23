export const articlesData = [
  {
    id: "architecting-resilient-react",
    title: "Architecting Resilient Component Systems in React",
    category: "Frontend Engineering",
    readTime: "6 min read",
    date: "Nov 2026",
    excerpt: "How to decouple domain logic from presentation layers to create enterprise component hierarchies that survive product iterations without technical debt.",
    content: `
Building long-lived React applications requires more than just knowing useState and useEffect. In enterprise systems, component bloat is the primary driver of regressions.

### 1. The Single Responsibility Boundary
Every component should answer exactly one question: "How does this look?" or "How does this behave?". When presentation cards start dispatching direct network calls, maintenance cost triples.

### 2. Composition Over Prop Drilling
Instead of passing 15 props down four levels, leverage compound components and slot patterns. This keeps the call site intuitive and preserves clean TypeScript or JSX boundaries.

### 3. Defensive Render Boundaries
Wrap high-volatility widgets in localized Error Boundaries so an edge-case crash in a sub-widget never brings down the entire viewport.
    `
  },
  {
    id: "modern-state-patterns",
    title: "Modern State Patterns & Rendering Optimization in React 19",
    category: "React Development",
    readTime: "8 min read",
    date: "Oct 2026",
    excerpt: "Exploring modern reconciliation, transition hooks, and atomic state design for silky smooth 60fps web apps under heavy data load.",
    content: `
With modern React engines, performance bottlenecks are rarely the library itself—they are almost always uncoordinated re-render cascades.

### Atomic State vs. Monolithic Stores
Granular subscriptions ensure that when a single counter or telemetry metric ticks, only the bound DOM leaf reconciles.

### Leveraging startTransition
Heavy filter changes and complex search queries should never block typing or immediate user input. Using transition primitives keeps client interfaces responsive and fluid.
    `
  },
  {
    id: "deep-dive-event-loop",
    title: "Deep Dive into Asynchronous Patterns and Event Loop Mechanics",
    category: "JavaScript",
    readTime: "10 min read",
    date: "Sep 2026",
    excerpt: "Demystifying the microtask queue, macrotasks, and promises to write deterministic, race-condition-free JavaScript applications.",
    content: `
JavaScript's single-threaded event loop is both its greatest simplicity and its most subtle trap.

### Microtask Queue Execution Order
Promises and queueMicrotask execute immediately after the current call stack clears, before the browser paints or handles the next macrotask (such as setTimeout).

### Eliminating Race Conditions
When multiple asynchronous fetch calls race for the same UI state, naive setState handlers lead to stale data overwrites. Implementing AbortController is the gold standard for network cleanup.
    `
  },
  {
    id: "scalable-erp-architecture",
    title: "Designing Scalable ERP Architectures for High Availability",
    category: "Software Architecture",
    readTime: "7 min read",
    date: "Aug 2026",
    excerpt: "Lessons from engineering Automata Pro: database indexing, role-based access control, and low-bandwidth resilience in educational software.",
    content: `
Educational institutions in developing regions often operate on spotty internet connections and varied device form factors.

### Offline-First Data Modeling
By pairing local cache sync with Firestore's document listeners, institutional users can take attendance without interruption even during intermittent network drops.

### Granular Role-Based Access Control (RBAC)
Structuring security rules at the database engine tier guarantees that student grades and financial records remain tamper-proof regardless of frontend client modifications.
    `
  },
  {
    id: "defensive-frontend-engineering",
    title: "Defensive Frontend Engineering: Mitigating XSS, CSRF & Supply-chain Risks",
    category: "Cybersecurity",
    readTime: "9 min read",
    date: "Jul 2026",
    excerpt: "Practical security paradigms every frontend engineer must adopt: Content Security Policies, sanitized inputs, and dependency hardening.",
    content: `
Security is not merely a backend responsibility. Modern frontend apps execute significant logic in untrusted client browsers.

### Content Security Policy (CSP) Rigor
Enforcing strict script-src and connect-src directives stops inline script execution and unauthorized exfiltration dead in their tracks.

### Sanitizing Untrusted Markup
Never trust user inputs rendered into DOM elements. Utilizing battle-tested sanitizers and validating URL protocols prevents dangerous javascript: pseudo-protocol attacks.
    `
  },
  {
    id: "ai-assisted-development-enterprise",
    title: "Leveraging LLMs Responsibly in Enterprise Engineering Workflows",
    category: "AI-assisted Development",
    readTime: "6 min read",
    date: "Jun 2026",
    excerpt: "How engineering teams can augment velocity with AI code synthesis while maintaining architectural integrity, test coverage, and human accountability.",
    content: `
AI coding tools are velocity multipliers, but they also accelerate the accumulation of technical debt if treated as unmonitored autopilot.

### The Verification-First Mindset
Never commit code generated by an LLM that you cannot explain and verify through automated unit tests. AI assists the draft; human engineering owns the verification.

### Privacy & Proprietary Boundaries
Ensure no confidential API tokens, customer credentials, or proprietary intellectual property are sent to public model training loops.
    `
  }
];
