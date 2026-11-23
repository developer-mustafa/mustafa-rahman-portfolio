import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  BrainCircuit,
  Database,
  Cloud,
  ShieldCheck,
  Layers,
  Users2,
  Cpu,
  Briefcase,
  Compass,
  Radio
} from "lucide-react";
import {
  skillsCategories,
  skillTiers,
  futureFocusedRadar,
  professionalLeadershipSkills
} from "../data/skills";

const iconMap = {
  Code2,
  BrainCircuit,
  Database,
  Cloud,
  ShieldCheck,
  Layers,
  Users2,
  Cpu,
  Briefcase
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTier, setSelectedTier] = useState("all");

  const filteredCategories = useMemo(() => {
    return skillsCategories
      .filter((cat) => selectedCategory === "all" || cat.id === selectedCategory)
      .map((cat) => {
        const filteredSkills = cat.skills.filter(
          (skill) => selectedTier === "all" || skill.tier === selectedTier
        );
        return {
          ...cat,
          skills: filteredSkills
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, selectedTier]);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <Cpu size={13} />
            <span>Skills & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-heading)]">
            Professional Skills & Architecture
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
            A comprehensive overview across full-stack engineering, AI & intelligent systems, database design, cloud infrastructure, defensive security, and technical leadership.
          </p>

          {/* Tier Legend & Explanation Strip */}
          <div className="mt-8 w-full max-w-3xl glass-panel-subtle p-3.5 sm:p-4 rounded-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-dim)] mb-2.5 font-semibold">
              <Compass size={14} className="text-emerald-500" />
              <span>Skill Classification Legend (Verified, No Fake Percentages)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div
                onClick={() => setSelectedTier(selectedTier === "core" ? "all" : "core")}
                className={`p-2.5 rounded-xl border cursor-pointer transition-all ${selectedTier === "core"
                  ? "bg-emerald-500/20 border-emerald-500/50 text-[var(--text-heading)]"
                  : "card-inner-item text-[var(--text-muted)] hover:border-emerald-500/40"
                  }`}
              >
                <div className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Core Technologies</span>
                </div>
                <p className="text-[11px] text-[var(--text-dim)] mt-1 leading-snug">
                  Actively utilized in daily production engineering & delivery.
                </p>
              </div>

              <div
                onClick={() => setSelectedTier(selectedTier === "knowledge" ? "all" : "knowledge")}
                className={`p-2.5 rounded-xl border cursor-pointer transition-all ${selectedTier === "knowledge"
                  ? "bg-blue-500/20 border-blue-500/50 text-[var(--text-heading)]"
                  : "card-inner-item text-[var(--text-muted)] hover:border-blue-500/40"
                  }`}
              >
                <div className="flex items-center gap-1.5 font-semibold text-blue-600 dark:text-blue-400 font-mono text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Professional Knowledge</span>
                </div>
                <p className="text-[11px] text-[var(--text-dim)] mt-1 leading-snug">
                  Applied, integrated, or deeply understood engineering concepts.
                </p>
              </div>

              <div
                onClick={() => setSelectedTier(selectedTier === "exploring" ? "all" : "exploring")}
                className={`p-2.5 rounded-xl border cursor-pointer transition-all ${selectedTier === "exploring"
                  ? "bg-purple-500/20 border-purple-500/50 text-[var(--text-heading)]"
                  : "card-inner-item text-[var(--text-muted)] hover:border-purple-500/40"
                  }`}
              >
                <div className="flex items-center gap-1.5 font-semibold text-purple-600 dark:text-purple-400 font-mono text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span>Currently Exploring</span>
                </div>
                <p className="text-[11px] text-[var(--text-dim)] mt-1 leading-snug">
                  Advanced, future-focused technologies actively developing expertise in.
                </p>
              </div>
            </div>
          </div>

          {/* Domain Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${selectedCategory === "all"
                ? "bg-emerald-500 text-white dark:text-black font-semibold shadow-md shadow-emerald-500/20"
                : "glass-panel-subtle text-[var(--text-muted)] hover:text-[var(--text-heading)]"
                }`}
            >
              All Domains ({skillsCategories.length})
            </button>
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${selectedCategory === cat.id
                  ? "bg-emerald-500 text-white dark:text-black font-semibold shadow-md shadow-emerald-500/20"
                  : "glass-panel-subtle text-[var(--text-muted)] hover:text-[var(--text-heading)]"
                  }`}
              >
                <span>{cat.shortTitle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((category) => {
              const Icon = iconMap[category.iconName] || Layers;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="glass-panel p-6 rounded-2xl hover:border-emerald-500/35 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Category Title & Icon */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-base font-bold text-[var(--text-heading)] tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[var(--text-muted)] mb-5 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill Items List */}
                    <div className="space-y-2">
                      {category.skills.map((skill, sIdx) => {
                        const tierInfo = skillTiers[skill.tier] || skillTiers.knowledge;
                        return (
                          <div
                            key={sIdx}
                            className="p-2.5 rounded-xl card-inner-item hover:border-emerald-500/30 transition-all"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-[var(--text-heading)]">
                                {skill.name}
                              </span>
                              <span
                                className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider shrink-0 ${tierInfo.badgeClass}`}
                              >
                                {skill.tier === "core" ? "Core" : skill.tier === "knowledge" ? "Applied" : "Exploring"}
                              </span>
                            </div>
                            <p className="text-[11px] text-[var(--text-dim)] mt-1 leading-snug">
                              {skill.highlight}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[var(--card-inner-border)] text-[11px] text-[var(--text-dim)] flex items-center justify-between font-mono">
                    <span>{category.skills.length} competencies</span>
                    <span className="text-emerald-500 font-semibold">Production-ready</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Future-Focused Engineering Radar */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-purple-500/25 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[var(--card-inner-border)] pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-500 flex items-center justify-center shrink-0">
                  <Radio size={20} className="animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 font-semibold">
                    Future-Focused Engineering Radar
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)] tracking-tight">
                    Active Horizons & Emerging Disciplines
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                Continuous R&D
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
              Software engineering is rapidly compounding with autonomous agent architectures, distributed state synchronicity, and AI-native application paradigms. These are the advanced domains I actively research and integrate:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {futureFocusedRadar.map((radar, rIdx) => (
                <div
                  key={rIdx}
                  className="p-4 rounded-xl card-inner-item hover:border-purple-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-purple-600 dark:text-purple-300 mb-1.5 uppercase tracking-wider">
                      <span>{radar.tag}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-[var(--text-heading)]">
                      {radar.domain}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                      {radar.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional & Leadership Competencies */}
        <div className="mt-14 glass-panel p-6 sm:p-8 rounded-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-6 font-mono">
            <Users2 size={16} />
            <span>Professional & Leadership Competencies</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {professionalLeadershipSkills.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl card-inner-item hover:border-emerald-500/30 transition-all"
              >
                <h4 className="text-xs sm:text-sm font-bold text-[var(--text-heading)]">
                  {item.name}
                </h4>
                <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
