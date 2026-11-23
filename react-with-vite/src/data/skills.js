export const skillTiers = {
  core: {
    id: "core",
    label: "Core Technologies",
    description: "Technologies & frameworks I actively work with in production environments.",
    color: "emerald",
    badgeClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25"
  },
  knowledge: {
    id: "knowledge",
    label: "Professional Knowledge",
    description: "Engineering concepts & technologies I have applied, integrated, or deeply understand.",
    color: "blue",
    badgeClass: "bg-blue-500/15 text-blue-400 border-blue-500/25"
  },
  exploring: {
    id: "exploring",
    label: "Currently Exploring",
    description: "Advanced, future-focused engineering paradigms I am actively developing expertise in.",
    color: "purple",
    badgeClass: "bg-purple-500/15 text-purple-400 border-purple-500/25"
  }
};

export const skillsCategories = [
  {
    id: "fullstack",
    title: "Full-Stack Development",
    shortTitle: "Full-Stack",
    iconName: "Code2",
    description: "End-to-end web engineering from responsive, accessible interfaces to server lifecycles.",
    skills: [
      { name: "JavaScript (ES6+)", tier: "core", highlight: "Async, functional patterns, event loop" },
      { name: "React.js", tier: "core", highlight: "Component design, hooks, state lifecycle" },
      { name: "Next.js", tier: "core", highlight: "SSR, SSG, routing & performance" },
      { name: "HTML5 & CSS3", tier: "core", highlight: "Semantic markup, modern layouts & SEO" },
      { name: "Tailwind CSS", tier: "core", highlight: "Design systems, utility tokens & dark mode" },
      { name: "Responsive & Accessible UI", tier: "core", highlight: "a11y standards, WCAG compliance" },
      { name: "PWA (Progressive Web Apps)", tier: "core", highlight: "Service workers, offline support" },
      { name: "TypeScript", tier: "knowledge", highlight: "Type contracts, generics & interfaces" },
      { name: "Node.js & Express.js", tier: "core", highlight: "Server runtimes, middleware & endpoints" },
      { name: "Vite", tier: "core", highlight: "High-speed build tooling & HMR" },
      { name: "shadcn/ui", tier: "knowledge", highlight: "Accessible headless component systems" },
      { name: "RESTful API Design", tier: "core", highlight: "Stateless JSON contracts, status standards" },
      { name: "Full-Stack Architecture", tier: "knowledge", highlight: "Decoupled layers, modular contracts" },
      { name: "NestJS", tier: "exploring", highlight: "Enterprise TypeScript backend framework" }
    ]
  },
  {
    id: "ai-intelligent",
    title: "AI & Intelligent Engineering",
    shortTitle: "AI & Intelligence",
    iconName: "BrainCircuit",
    description: "Harnessing foundation models, agentic workflows, and semantic intelligence in real products.",
    skills: [
      { name: "OpenAI API Integration", tier: "core", highlight: "Function calling, streaming completions" },
      { name: "Gemini API Integration", tier: "core", highlight: "Multimodal synthesis, low-latency API" },
      { name: "Prompt Engineering", tier: "core", highlight: "Few-shot prompting, structured outputs" },
      { name: "AI-Assisted Development", tier: "core", highlight: "Accelerated development with verification" },
      { name: "Claude API Integration", tier: "knowledge", highlight: "Extended context windows, reasoning" },
      { name: "LLM Integration & APIs", tier: "knowledge", highlight: "Model abstraction, latency optimizations" },
      { name: "Context Engineering", tier: "knowledge", highlight: "Dynamic context windows, token budgeting" },
      { name: "RAG (Retrieval-Augmented)", tier: "knowledge", highlight: "Vector retrieval & grounded synthesis" },
      { name: "AI Agents & Workflows", tier: "knowledge", highlight: "Autonomous task execution pipelines" },
      { name: "AI Chatbots & Assistants", tier: "knowledge", highlight: "Conversational UI & state tracking" },
      { name: "Model Context Protocol (MCP)", tier: "exploring", highlight: "Standardized agent-to-tool contracts" },
      { name: "Multi-Agent Systems", tier: "exploring", highlight: "Role specialization & orchestration" },
      { name: "Vector Databases & Search", tier: "exploring", highlight: "Embeddings, cosine indexing & similarity" },
      { name: "AI Evaluation & Testing", tier: "exploring", highlight: "Hallucination mitigation & benchmark runs" }
    ]
  },
  {
    id: "backend-db",
    title: "Backend & Database Engineering",
    shortTitle: "Backend & DB",
    iconName: "Database",
    description: "Robust data modeling, serverless scaling, relational schemas, and fast API layers.",
    skills: [
      { name: "Node.js & Express.js", tier: "core", highlight: "Asynchronous APIs, security middlewares" },
      { name: "Firebase Authentication", tier: "core", highlight: "OAuth, token lifecycles, user claims" },
      { name: "Cloud Firestore", tier: "core", highlight: "Document modeling, real-time listeners" },
      { name: "Database Schema Design", tier: "core", highlight: "Normalization, relationships & indexes" },
      { name: "RESTful API Development", tier: "core", highlight: "Deterministic response contracts" },
      { name: "PostgreSQL", tier: "knowledge", highlight: "ACID transactions, relational constraints" },
      { name: "Neon Database", tier: "knowledge", highlight: "Serverless Postgres, branching & pooling" },
      { name: "MongoDB & Mongoose", tier: "knowledge", highlight: "Document aggregation pipelines" },
      { name: "Prisma ORM", tier: "knowledge", highlight: "Type-safe database queries & migrations" },
      { name: "API Security & Caching", tier: "knowledge", highlight: "Rate limiting, headers, query optimization" },
      { name: "Real-Time Data Sync", tier: "knowledge", highlight: "WebSockets, pub/sub & stream caching" },
      { name: "NestJS", tier: "exploring", highlight: "Modular dependency-injected services" }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud, DevOps & Deployment",
    shortTitle: "Cloud & DevOps",
    iconName: "Cloud",
    description: "Automated pipelines, edge runtimes, containerization, and production monitoring.",
    skills: [
      { name: "Git & GitHub", tier: "core", highlight: "Trunk-based branches, PR reviews, git flow" },
      { name: "Vercel Deployment", tier: "core", highlight: "Edge caching, preview environments" },
      { name: "Cloudflare Workers", tier: "core", highlight: "Edge compute, CDN caching, low latency" },
      { name: "Firebase Hosting", tier: "core", highlight: "Static asset distribution & SSL" },
      { name: "Environment Management", tier: "core", highlight: "Secrets rotation, env variable safety" },
      { name: "CI/CD Pipelines", tier: "knowledge", highlight: "Automated builds, linting & verification" },
      { name: "Docker & Containerization", tier: "knowledge", highlight: "Containerized environments, Dockerfile" },
      { name: "Linux Administration", tier: "knowledge", highlight: "Shell automation, SSH, server maintenance" },
      { name: "Application Monitoring", tier: "knowledge", highlight: "Telemetry, logging & error tracking" },
      { name: "Kubernetes & Cloud-Native", tier: "exploring", highlight: "Pod orchestration, cluster ingress" },
      { name: "Infrastructure as Code (IaC)", tier: "exploring", highlight: "Declarative infrastructure provisioning" }
    ]
  },
  {
    id: "security",
    title: "Cybersecurity & Application Security",
    shortTitle: "Security",
    iconName: "ShieldCheck",
    description: "Defensive engineering paradigms, data privacy safeguards, and secure SDLC.",
    skills: [
      { name: "Authentication Security", tier: "core", highlight: "JWT, HTTP-only cookies, session defense" },
      { name: "Role-Based Access Control", tier: "core", highlight: "Granular permission boundaries (RBAC)" },
      { name: "Input Validation & Sanitization", tier: "core", highlight: "XSS, SQLi, and injection prevention" },
      { name: "Secure Database Rules", tier: "core", highlight: "Cloud security rules, least privilege" },
      { name: "OWASP Top 10 Awareness", tier: "knowledge", highlight: "Web vulnerability defense hygiene" },
      { name: "Secure SDLC (SSDLC)", tier: "knowledge", highlight: "Security embedded in code lifecycle" },
      { name: "API Security", tier: "knowledge", highlight: "CORS policies, rate limiting, payload limits" },
      { name: "Data Protection & Privacy", tier: "knowledge", highlight: "At-rest encryption, sensitive data safety" },
      { name: "Vulnerability Assessment", tier: "exploring", highlight: "Dependency audits, penetration basics" }
    ]
  },
  {
    id: "architecture",
    title: "Software Architecture & System Design",
    shortTitle: "Architecture",
    iconName: "Layers",
    description: "Principled systems design emphasizing maintainability, cohesion, and scalability.",
    skills: [
      { name: "Clean Code & SOLID Principles", tier: "core", highlight: "Maintainable, human-readable logic" },
      { name: "Modular Architecture", tier: "core", highlight: "Decoupled feature boundaries & contracts" },
      { name: "Component-Based Architecture", tier: "core", highlight: "Composable atomic UI systems" },
      { name: "Separation of Concerns", tier: "core", highlight: "Clear boundaries between UI and domain" },
      { name: "Design Patterns", tier: "knowledge", highlight: "Factory, observer, singleton, strategy" },
      { name: "Scalable Application Design", tier: "knowledge", highlight: "High concurrency & state predictability" },
      { name: "Code Review & Refactoring", tier: "knowledge", highlight: "Technical debt mitigation" },
      { name: "Performance Engineering", tier: "knowledge", highlight: "Rendering cycles, memory optimization" },
      { name: "Distributed Systems", tier: "exploring", highlight: "Event consistency, message queues" },
      { name: "Microservices Architecture", tier: "exploring", highlight: "Independent service boundaries" },
      { name: "High-Scale System Design", tier: "exploring", highlight: "Load balancing, horizontal scaling" }
    ]
  },
  {
    id: "leadership",
    title: "Technical Leadership & Management",
    shortTitle: "Leadership",
    iconName: "Users2",
    description: "Aligning architectural strategy with engineering execution, mentorship, and delivery.",
    skills: [
      { name: "Code Review & Standards", tier: "core", highlight: "Rigorous quality and security reviews" },
      { name: "Mentoring & Developer Growth", tier: "core", highlight: "Empowering junior & student engineers" },
      { name: "Technical Documentation", tier: "core", highlight: "Architectural decision records (ADRs)" },
      { name: "Engineering Collaboration", tier: "core", highlight: "Cross-functional team alignment" },
      { name: "Technical Roadmap Planning", tier: "knowledge", highlight: "Milestone estimation & tech prioritization" },
      { name: "Architecture Decision-Making", tier: "knowledge", highlight: "Pragmatic trade-offs in software systems" },
      { name: "Agile & Scrum Methodologies", tier: "knowledge", highlight: "Sprint cycles, standups, sprint retros" },
      { name: "Project Delivery Planning", tier: "knowledge", highlight: "Risk mitigation, scoping & delivery" },
      { name: "Product Thinking", tier: "knowledge", highlight: "Balancing engineering with user value" }
    ]
  },
  {
    id: "agentic-coding",
    title: "AI-Assisted Development & Automation",
    shortTitle: "AI Dev Tools",
    iconName: "Cpu",
    description: "Leveraging agentic coding environments, AI workflows, and modern tooling.",
    skills: [
      { name: "AI Coding Agents", tier: "core", highlight: "Autonomous coding task delegation" },
      { name: "Context-Aware Development", tier: "core", highlight: "Project indexing, semantic workspace search" },
      { name: "Human-in-the-Loop Workflows", tier: "core", highlight: "Rigorous verification of generated code" },
      { name: "Claude Code & OpenCode", tier: "knowledge", highlight: "Terminal-based AI engineering agent" },
      { name: "AI-Assisted Debugging", tier: "knowledge", highlight: "Root-cause hypothesis generation" },
      { name: "Test Generation & Refactoring", tier: "knowledge", highlight: "Automated test scaffolds & cleanup" },
      { name: "Google Antigravity", tier: "exploring", highlight: "Advanced agentic coding & tool orchestration" },
      { name: "Multi-Agent Workflows", tier: "exploring", highlight: "Coordinated agentic engineering pipelines" },
      { name: "MCP-Based Tooling", tier: "exploring", highlight: "Custom MCP server connections" }
    ]
  },
  {
    id: "product-eng",
    title: "Product Engineering & Solutions",
    shortTitle: "Product Eng",
    iconName: "Briefcase",
    description: "Designing end-to-end commercial SaaS, institutional ERPs, and digital portals.",
    skills: [
      { name: "SaaS Product Development", tier: "core", highlight: "Subscription, auth, feature tiers" },
      { name: "Educational Technology (EdTech)", tier: "core", highlight: "Automata Pro Bangla ERP architecture" },
      { name: "ERP & Management Systems", tier: "core", highlight: "Institutional recordkeeping & operations" },
      { name: "Admin Dashboard Development", tier: "core", highlight: "Analytics, tables, high-density views" },
      { name: "Multi-Tenant Architecture", tier: "knowledge", highlight: "Isolated tenant data, shared infra" },
      { name: "Business Process Automation", tier: "knowledge", highlight: "Paperless workflow digitization" },
      { name: "User-Centered Product Design", tier: "knowledge", highlight: "Intuitive UX for non-technical users" },
      { name: "Feature Planning & Scoping", tier: "knowledge", highlight: "Requirements translation into code" },
      { name: "AI-Native SaaS Architecture", tier: "exploring", highlight: "Generative intelligence at the product core" }
    ]
  }
];

export const futureFocusedRadar = [
  {
    domain: "Advanced AI Engineering",
    focus: "Autonomous AI agents, multi-agent orchestration, dynamic memory architectures & continuous model evaluation.",
    tag: "AI & Agents"
  },
  {
    domain: "High-Scale Distributed Systems",
    focus: "Microservices design, event-driven architectures, distributed data consistency, and message brokers.",
    tag: "Architecture"
  },
  {
    domain: "Cloud-Native Infrastructure",
    focus: "Kubernetes cluster orchestration, Infrastructure as Code (IaC), container meshes, and edge serverless.",
    tag: "DevOps & Cloud"
  },
  {
    domain: "Advanced Application Security",
    focus: "Zero-trust architectures, automated security scanning pipelines, and proactive vulnerability modeling.",
    tag: "Security"
  },
  {
    domain: "AI-Native SaaS Products",
    focus: "Next-generation SaaS architectures with autonomous assistant backplanes and domain-specific LLM tooling.",
    tag: "Product Strategy"
  }
];

export const professionalLeadershipSkills = [
  { name: "Analytical & Critical Thinking", desc: "Systematic root-cause diagnosis and rigorous trade-off evaluation." },
  { name: "Complex Problem Solving", desc: "Decomposing intricate system bottlenecks into actionable engineering milestones." },
  { name: "Engineering Communication", desc: "Articulating technical decisions clearly to stakeholders and developer peers." },
  { name: "Technical Presentation", desc: "Demystifying architectures, technical proposals, and educational concepts." },
  { name: "Team Mentoring & Knowledge Transfer", desc: "Fostering engineering discipline, clean habits, and team growth." },
  { name: "Independent Research & Rapid Learning", desc: "Continuously mastering emergent frameworks, AI models, and cloud standards." },
  { name: "Ownership & Accountability", desc: "Taking end-to-end responsibility for code quality, security, and uptime." },
  { name: "Cross-Cultural Collaboration", desc: "Thriving in distributed international environments across diverse time zones." }
];
