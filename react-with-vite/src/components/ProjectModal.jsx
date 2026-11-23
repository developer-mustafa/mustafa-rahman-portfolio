import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectModal({ project, isOpen, onClose }) {
  // Escape key listener & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 dark:bg-black/85 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-[var(--modal-bg)] border border-[var(--card-border)] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg text-[var(--text-dim)] hover:text-[var(--text-heading)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {/* Badge & Category */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
                {project.category}
              </span>
              <span className="text-xs text-[var(--text-dim)] font-mono">
                {project.metrics}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-heading)] tracking-tight">
              {project.name}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-1 font-mono">
              {project.tagline}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              {project.description}
            </p>

            {/* Project Vision if present */}
            {project.projectVision && (
              <div className="mt-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-300">
                <strong className="font-semibold block mb-0.5">Project Vision:</strong>
                <span>{project.projectVision}</span>
              </div>
            )}

            {/* Key Features */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider mb-3 flex items-center gap-1.5 font-mono">
                <Layers size={14} className="text-emerald-500" />
                <span>Key Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-muted)] p-1.5 rounded card-inner-item">
                    <CheckCircle2 size={13} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-6 pt-5 border-t border-[var(--card-inner-border)]">
              <h4 className="text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-mono">
                <Cpu size={14} className="text-teal-500" />
                <span>Technology Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium card-inner-item text-[var(--text-muted)] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified actions */}
            <div className="mt-8 pt-6 border-t border-[var(--card-inner-border)] flex flex-wrap gap-3">
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white dark:text-black font-semibold text-xs transition-colors"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-panel hover:bg-black/5 dark:hover:bg-white/10 text-[var(--text-heading)] font-medium text-xs transition-colors"
                >
                  <GithubIcon size={14} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
