import { motion } from "motion/react";
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Info
} from "lucide-react";
import { experienceData } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-heading)]">
            Professional Experience
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] max-w-xl">
            International software engineering practice alongside dedicated academic ICT lecturing and mentorship.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-300 dark:border-zinc-800 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-8 space-y-12 transition-colors">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-page)] border-2 border-emerald-500 flex items-center justify-center group-hover:scale-125 group-hover:border-emerald-400 transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>

              {/* Timestamp label on wide screens */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-tight font-mono">
                  {item.status}
                </span>
                <div className="text-[10px] text-[var(--text-dim)] font-normal mt-0.5">
                  {item.workMode}
                </div>
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-7 rounded-2xl group-hover:border-emerald-500/35 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider font-mono">
                        {item.badge}
                      </span>
                      <span className="md:hidden text-xs text-emerald-600 dark:text-emerald-400 font-medium font-mono">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)] mt-2 tracking-tight group-hover:text-emerald-500 transition-colors">
                      {item.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--text-muted)] mt-1">
                      <span className="flex items-center gap-1.5 font-medium text-[var(--text-heading)]">
                        <Building2 size={13} className="text-[var(--text-dim)]" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                        <MapPin size={13} className="text-[var(--text-dim)]" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Professional Overview text */}
                <p className="mt-3 text-xs sm:text-sm text-[var(--text-muted)] font-normal leading-relaxed">
                  {item.overview}
                </p>

                {/* Responsibilities Note if present */}
                {item.responsibilitiesNote && (
                  <div className="mt-2 text-[11px] text-[var(--text-dim)] flex items-center gap-1.5 italic">
                    <Info size={12} className="shrink-0 text-[var(--text-dim)]" />
                    <span>{item.responsibilitiesNote}</span>
                  </div>
                )}

                {/* Highlights List */}
                <div className="mt-4 space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[var(--text-muted)] leading-relaxed">
                      <CheckCircle2 size={13} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-5 pt-4 border-t border-[var(--card-inner-border)] flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium card-inner-item text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
