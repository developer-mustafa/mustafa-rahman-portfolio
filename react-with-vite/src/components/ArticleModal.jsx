import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, ArrowLeft } from "lucide-react";

export default function ArticleModal({ article, isOpen, onClose }) {
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
      {isOpen && article && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 dark:bg-black/85 backdrop-blur-md"
          />

          {/* Modal Window */}
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

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-dim)] mb-3 font-mono">
              <span className="px-2.5 py-0.5 rounded-full font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={13} className="text-zinc-400" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={13} className="text-zinc-400" />
                {article.readTime}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-heading)] tracking-tight leading-snug">
              {article.title}
            </h3>

            <p className="mt-3 text-sm text-[var(--text-muted)] italic border-l-2 border-emerald-500 pl-3">
              {article.excerpt}
            </p>

            {/* Full content */}
            <div className="mt-6 pt-5 border-t border-[var(--card-inner-border)] text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed space-y-4">
              {article.content.trim().split("\n\n").map((block, idx) => {
                if (block.startsWith("### ")) {
                  return (
                    <h4 key={idx} className="text-base font-bold text-[var(--text-heading)] mt-4 text-emerald-600 dark:text-emerald-300">
                      {block.replace("### ", "")}
                    </h4>
                  );
                }
                return (
                  <p key={idx} className="leading-relaxed">
                    {block}
                  </p>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-5 border-t border-[var(--card-inner-border)] flex items-center justify-between">
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 text-xs text-[var(--text-dim)] hover:text-[var(--text-heading)] transition-colors font-mono"
              >
                <ArrowLeft size={14} />
                <span>Back to Articles</span>
              </button>
              <span className="text-[11px] text-[var(--text-dim)] font-mono">
                Engineering Notes by Mustafa Rahman
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
