import { motion } from "motion/react";
import {
  FolderGit2,
  ExternalLink,
  Terminal
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { personalProfile } from "../data/profile";

export default function GitHub() {
  const verifiedRepositories = [
    {
      name: "EdTech-Automata-Pro",
      description: "Bangla-focused educational ERP management platform for schools, colleges, and madrasas across Bangladesh.",
      language: "JavaScript / PWA",
      tech: "Firebase Auth • Cloud Firestore",
      url: "https://github.com/developer-mustafa/EdTech-Automata-Pro"
    },
    {
      name: "mustafaofficial.com",
      description: "Personal portfolio and engineering website showcasing international software engineering & ICT education.",
      language: "JavaScript / React",
      tech: "Tailwind CSS • Motion",
      url: "https://github.com/developer-mustafa"
    },
    {
      name: "Mentora-Pro",
      description: "Coaching management platform for batch tracking, curriculum management, and academic monitoring.",
      language: "JavaScript / React",
      tech: "Modern Web Technologies",
      url: "https://github.com/developer-mustafa"
    },
    {
      name: "ProductMesh-Ecosystem",
      description: "Structured product discovery and catalog indexing architecture for modern web applications.",
      language: "Next.js / TypeScript",
      tech: "Prisma • PostgreSQL",
      url: "https://github.com/developer-mustafa"
    }
  ];

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <GithubIcon size={13} />
            <span>Open Source & Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-heading)]">
            GitHub & Engineering Repositories
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] max-w-xl">
            A window into active open-source projects, educational platforms, and architectural templates on GitHub.
          </p>
        </div>

        {/* Profile Card & Open Source Activity Bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* GitHub Identity Card - 4 Cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 glass-panel p-6 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-800 dark:bg-zinc-800 border border-white/10 flex items-center justify-center text-white">
                  <GithubIcon size={24} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-heading)]">
                    {personalProfile.name}
                  </h3>
                  <a
                    href={personalProfile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-mono"
                  >
                    @developer-mustafa
                  </a>
                </div>
              </div>

              <p className="mt-4 text-xs text-[var(--text-muted)] leading-relaxed">
                Building scalable web applications, modern React interfaces, and accessible educational technology. Committed to clean code and open knowledge sharing.
              </p>

              <div className="mt-6 space-y-2 text-xs text-[var(--text-muted)]">
                <div className="flex items-center justify-between p-2 rounded-lg card-inner-item font-mono">
                  <span className="flex items-center gap-2 text-[var(--text-heading)]">
                    <FolderGit2 size={14} className="text-emerald-500" />
                    <span>Public Repositories</span>
                  </span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Active</span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg card-inner-item font-mono">
                  <span className="flex items-center gap-2 text-[var(--text-heading)]">
                    <Terminal size={14} className="text-teal-500" />
                    <span>Primary Focus</span>
                  </span>
                  <span className="font-semibold text-[var(--text-heading)]">React • EdTech</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--card-inner-border)]">
              <a
                href={personalProfile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-700 dark:text-emerald-300 hover:text-white dark:hover:text-black font-semibold text-xs border border-emerald-500/25 transition-colors font-mono"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>

          {/* Repositories Showcase - 8 Cols */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {verifiedRepositories.map((repo, idx) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel p-5 rounded-xl hover:border-emerald-500/35 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[var(--text-dim)] mb-2">
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold group-hover:underline flex items-center gap-1.5">
                      <FolderGit2 size={13} />
                      {repo.name}
                    </span>
                    <ExternalLink size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" />
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-1">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--card-inner-border)] flex items-center justify-between text-[11px] text-[var(--text-dim)]">
                  <span className="flex items-center gap-1.5 text-[var(--text-heading)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    {repo.language}
                  </span>
                  <span className="text-[var(--text-dim)] font-mono text-[10px]">
                    {repo.tech}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
