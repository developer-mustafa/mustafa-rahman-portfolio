import { useState } from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  ArrowUpRight,
  Info
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projectsData } from "../data/projects";
import ProjectModal from "./ProjectModal";
import BorderBeam from "./magicui/BorderBeam";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const renderMockup = (id) => {
    switch (id) {
      case "automata-pro":
        return (
          <div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100/90 dark:from-slate-950 dark:via-[#0d141e] dark:to-[#080d14] text-slate-800 dark:text-white border border-slate-200 dark:border-emerald-500/25 p-4 relative overflow-hidden flex flex-col justify-between shadow-xs dark:shadow-inner transition-colors duration-300">
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] text-slate-600 dark:text-zinc-300 font-mono ml-2 font-medium">automatapro.web.app</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold font-mono border border-emerald-500/20">
                বাংলা Educational ERP
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="p-2 rounded bg-white dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/5 text-left shadow-xs">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block font-medium">শিক্ষার্থী ব্যবস্থাপনা</span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">সক্রিয় ডাটাবেজ</p>
              </div>
              <div className="p-2 rounded bg-white dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/5 text-left shadow-xs">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block font-medium">উপস্থিতি ট্র্যাকিং</span>
                <p className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">ডিজিটাল রেকর্ড</p>
              </div>
              <div className="p-2 rounded bg-white dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/5 text-left shadow-xs">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block font-medium">একাডেমিক ফলাফল</span>
                <p className="text-xs sm:text-sm font-bold text-teal-600 dark:text-teal-300 mt-0.5">স্বয়ংক্রিয় মার্কশিট</p>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-zinc-400 flex items-center justify-between font-mono font-medium">
              <span>Firebase Auth & Firestore PWA</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Live Production</span>
            </div>
          </div>
        );
      case "mentora-pro":
        return (
          <div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-100 via-blue-50/40 to-slate-100/90 dark:from-slate-950 dark:via-[#0d141e] dark:to-[#080d14] text-slate-800 dark:text-white border border-slate-200 dark:border-blue-500/25 p-4 relative overflow-hidden flex flex-col justify-between shadow-xs dark:shadow-inner transition-colors duration-300">
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500/80" />
                <span className="text-[10px] text-slate-600 dark:text-zinc-300 font-mono ml-2 font-medium">mentora.academic/suite</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 font-semibold font-mono border border-blue-500/20">
                Coaching Management
              </span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/5 text-xs shadow-xs">
                <span className="text-slate-700 dark:text-zinc-200 font-medium">Batch Scheduling & Attendance</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-semibold">Active</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/5 text-xs shadow-xs">
                <span className="text-slate-700 dark:text-zinc-200 font-medium">Academic Progress Monitoring</span>
                <span className="text-blue-600 dark:text-blue-300 font-mono text-[11px] font-semibold">Tracked</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-zinc-400 flex items-center justify-between font-mono font-medium">
              <span>Tutor Operations Architecture</span>
              <span className="text-blue-600 dark:text-blue-300 font-semibold">Educational SaaS</span>
            </div>
          </div>
        );
      case "spendwise-pro":
        return (
          <div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-100 via-emerald-50/40 to-slate-100/90 dark:from-slate-950 dark:via-[#0d141e] dark:to-[#080d14] text-slate-800 dark:text-white border border-slate-200 dark:border-emerald-500/25 p-4 relative overflow-hidden flex flex-col justify-between shadow-xs dark:shadow-inner transition-colors duration-300">
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] text-slate-600 dark:text-zinc-300 font-mono ml-2 font-medium">spendwise.app/finance</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold font-mono border border-emerald-500/20">
                Personal Finance
              </span>
            </div>
            <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
              <div className="w-full bg-emerald-500/25 dark:bg-emerald-500/30 rounded-t h-[40%]" />
              <div className="w-full bg-emerald-500/40 dark:bg-emerald-500/45 rounded-t h-[65%]" />
              <div className="w-full bg-emerald-500/55 dark:bg-emerald-500/60 rounded-t h-[50%]" />
              <div className="w-full bg-emerald-500/75 dark:bg-emerald-500/80 rounded-t h-[80%]" />
              <div className="w-full bg-emerald-500 dark:bg-emerald-400 rounded-t h-[95%]" />
            </div>
            <div className="text-[10px] text-slate-500 dark:text-zinc-400 flex items-center justify-between font-mono font-medium">
              <span>Neon PostgreSQL + Cloudflare</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Financial Insights</span>
            </div>
          </div>
        );
      case "productmesh":
      default:
        return (
          <div className="w-full h-44 rounded-xl bg-gradient-to-br from-slate-100 via-cyan-50/40 to-slate-100/90 dark:from-slate-950 dark:via-[#0d141e] dark:to-[#080d14] text-slate-800 dark:text-white border border-slate-200 dark:border-cyan-500/25 p-4 relative overflow-hidden flex flex-col justify-between shadow-xs dark:shadow-inner transition-colors duration-300">
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/80" />
                <span className="text-[10px] text-slate-600 dark:text-zinc-300 font-mono ml-2 font-medium">productmeshbd.com</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-semibold font-mono border border-cyan-500/20">
                Product Discovery
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="p-2 rounded bg-white dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/5 text-left shadow-xs">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block font-medium">Structured Catalog</span>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">Verified Items</p>
              </div>
              <div className="p-2 rounded bg-white dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/5 text-left shadow-xs">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 block font-medium">Ecosystem</span>
                <p className="text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-300 mt-0.5">Next.js + Prisma</p>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-zinc-400 flex items-center justify-between font-mono font-medium">
              <span>SmartBuyHub BD</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Live Platform</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-heading)]">
            Featured Projects
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
            Practical software solutions spanning educational enterprise ERP, coaching operations, personal finance, and modern product discovery.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-panel rounded-2xl hover:border-emerald-500/40 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden"
            >
              {project.id === "automata-pro" && (
                <BorderBeam duration={8} size={250} colorFrom="#10b981" colorTo="#06b6d4" />
              )}
              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  {/* Visual Mockup */}
                  <div className="mb-5 cursor-pointer" onClick={() => setSelectedProject(project)}>
                    {renderMockup(project.id)}
                  </div>

                  {/* Header: Title & Category */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
                        {project.category}
                      </span>
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-xl font-bold text-[var(--text-heading)] mt-2 group-hover:text-emerald-500 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>{project.name}</span>
                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-1.5 text-[var(--text-dim)] hover:text-[var(--text-heading)] rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                      title="View Architectural Breakdown"
                      aria-label="View Details"
                    >
                      <Info size={16} />
                    </button>
                  </div>

                  {/* Subtitle / Tagline */}
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1 font-mono">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-medium card-inner-item text-[var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-4 border-t border-[var(--card-inner-border)] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                  {project.website ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 text-white dark:text-black hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors shadow-sm"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-[var(--text-dim)] card-inner-item cursor-pointer hover:text-[var(--text-heading)]"
                    >
                      <span>Demo: Request</span>
                    </button>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-black/5 dark:hover:bg-white/10 border border-[var(--card-border)] transition-colors"
                    >
                      <GithubIcon size={12} />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <span className="text-[11px] text-[var(--text-dim)] font-mono px-2 py-1">
                      Private / Internal
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs text-[var(--text-dim)] hover:text-emerald-500 transition-colors font-medium font-mono"
                >
                  Features &rarr;
                </button>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
