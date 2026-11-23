import { motion } from "motion/react";
import { 
  GraduationCap, 
  BookOpen, 
  Award,
  CheckCircle2,
  Info
} from "lucide-react";
import { educationData } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <GraduationCap size={14} />
            <span>Academic Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-heading)]">
            Education & Teaching Impact
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
            {educationData.professionalInterest}
          </p>
        </div>

        {/* Teaching Institutions Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {educationData.institutions.map((inst, idx) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 sm:p-7 rounded-2xl hover:border-emerald-500/35 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 font-mono">
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                    {inst.role}
                  </span>
                  <span className="text-xs text-[var(--text-dim)]">
                    {inst.location}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)] mt-1">
                  {inst.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                  {inst.scope}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--card-inner-border)] text-xs text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1.5">
                <CheckCircle2 size={13} />
                <span>Verified Educational Institution</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Teaching Contributions Grid */}
        <div className="mb-12">
          <h3 className="text-base font-bold text-[var(--text-heading)] mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <BookOpen size={16} />
            <span>Key Teaching Contributions</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {educationData.teachingContributions.map((contrib, idx) => (
              <div
                key={idx}
                className="glass-panel-subtle p-5 rounded-xl hover:border-emerald-500/30 transition-colors"
              >
                <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-heading)]">
                  {contrib.title}
                </h4>
                <p className="mt-2 text-xs text-[var(--text-muted)] leading-relaxed">
                  {contrib.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reported Academic Impact Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/25"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                <Award size={24} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                  Reported Academic Impact
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[var(--text-heading)] mt-0.5">
                  Academic Milestones During Teaching Period
                </h4>
                <p className="text-xs text-[var(--text-dim)] mt-1 flex items-center gap-1 italic">
                  <Info size={11} className="shrink-0 text-emerald-500" />
                  <span>{educationData.reportedAcademicImpact.note}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
              {educationData.reportedAcademicImpact.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="flex-1 md:flex-none p-4 rounded-xl card-inner-item text-center min-w-[140px]"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-[var(--text-heading)] mt-0.5">
                    {m.metric}
                  </div>
                  <div className="text-[10px] text-[var(--text-dim)] mt-0.5 font-mono">
                    {m.period}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
