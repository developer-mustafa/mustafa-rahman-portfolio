import { 
  Code2, 
  BrainCircuit, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Terminal,
  Zap,
  Boxes
} from "lucide-react";

const productionTech = [
  { name: "React 19", category: "Frontend", icon: Code2, badge: "v19.3" },
  { name: "Next.js", category: "Full-Stack", icon: Layers, badge: "SSR & App Router" },
  { name: "Node.js & Express", category: "Backend", icon: Terminal, badge: "Async Runtime" },
  { name: "OpenAI & Gemini API", category: "AI Systems", icon: BrainCircuit, badge: "LLM Orchestration" },
  { name: "Tailwind CSS v4", category: "Design System", icon: Zap, badge: "Utility Engine" },
  { name: "PostgreSQL & Neon", category: "Database", icon: Database, badge: "Serverless SQL" },
  { name: "Cloudflare & Vercel", category: "Edge Cloud", icon: Cloud, badge: "Global CDN" },
  { name: "Docker & CI/CD", category: "DevOps", icon: Boxes, badge: "Automated SDLC" },
  { name: "Cybersecurity & RBAC", category: "Security", icon: ShieldCheck, badge: "OWASP Hardened" },
  { name: "Vitest & OpenSpec", category: "Quality", icon: Cpu, badge: "Spec-Driven" }
];

export default function TechMarquee({ className = "" }) {
  // Duplicate array for seamless infinite looping
  const items = [...productionTech, ...productionTech];

  return (
    <div className={`relative w-full overflow-hidden py-4 border-y border-[var(--card-inner-border)] glass-panel-subtle ${className}`}>
      {/* Left and Right Gradient Masking for Smooth Edge Fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[var(--bg-page)] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[var(--bg-page)] to-transparent z-10" />

      <div className="animate-marquee gap-3 sm:gap-4 px-4 items-center">
        {items.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full card-inner-item hover:border-emerald-500/40 transition-all shrink-0 cursor-default group"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icon size={12} />
              </div>
              <span className="text-xs font-semibold text-[var(--text-heading)] whitespace-nowrap">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-wider px-1.5 py-0.2 rounded bg-[var(--card-inner-bg)] border border-[var(--card-inner-border)]">
                {tech.badge}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
