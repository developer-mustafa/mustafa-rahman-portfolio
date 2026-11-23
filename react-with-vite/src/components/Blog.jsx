import { useState } from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Calendar
} from "lucide-react";
import { articlesData } from "../data/articles";
import ArticleModal from "./ArticleModal";

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <BookOpen size={13} />
            <span>Engineering Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-heading)]">
            Articles & Technical Notes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
            Thought leadership exploring modern React patterns, event loop mechanics, cybersecurity hygiene, and scalable architectures.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-panel p-6 rounded-2xl hover:border-emerald-500/35 transition-all flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[var(--text-dim)] mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[var(--text-dim)] font-mono">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[var(--text-heading)] group-hover:text-emerald-500 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--card-inner-border)] flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--text-dim)] flex items-center gap-1 text-[11px]">
                  <Calendar size={12} />
                  {article.date}
                </span>

                <span className="text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
