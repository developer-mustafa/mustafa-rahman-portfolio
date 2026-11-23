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
  Radio,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Info
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
  const [activeCategoryId, setActiveCategoryId] = useState("fullstack");
  const [selectedTier, setSelectedTier] = useState("all");
  const [inspectedSkill, setInspectedSkill] = useState(null);

  // Find the currently active domain
  const activeCategory = useMemo(() => {
    return skillsCategories.find((cat) => cat.id === activeCategoryId) || skillsCategories[0];
  }, [activeCategoryId]);

  // Filter skills within the active domain based on tier selection
  const filteredSkills = useMemo(() => {
    if (selectedTier === "all") return activeCategory.skills;
    return activeCategory.skills.filter((s) => s.tier === selectedTier);
  }, [activeCategory, selectedTier]);

  // Separate into Core Superpowers and Supporting / Applied Tooling
  const { coreSkills, supportingSkills } = useMemo(() => {
    if (selectedTier !== "all") {
      return {
        coreSkills: filteredSkills,
        supportingSkills: []
      };
    }
    const core = activeCategory.skills.filter((s) => s.tier === "core");
    const supporting = activeCategory.skills.filter((s) => s.tier !== "core");
    return { coreSkills: core, supportingSkills: supporting };
  }, [activeCategory, filteredSkills, selectedTier]);

  // Get active inspector skill (hovered or default to first core skill)
  const activeInspector = inspectedSkill || coreSkills[0] || activeCategory.skills[0];

  const ActiveIcon = iconMap[activeCategory.iconName] || Layers;

  return (
    <section id="skills" className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Viewport Optimized */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2 font-mono">
            <Cpu size={13} />
            <span>Skills & Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-heading)]">
            Technical Command Hub
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] max-w-xl leading-relaxed">
            Verified engineering competencies across modern full-stack development, autonomous AI workflows, distributed backend systems, and defensive cybersecurity.
          </p>

          {/* Compact Classification Legend */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono">
            <div
              onClick={() => setSelectedTier(selectedTier === "core" ? "all" : "core")}
              className={`px-3 py-1 rounded-full border cursor-pointer transition-all flex items-center gap-1.5 ${selectedTier === "core"
                  ? "bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold shadow-xs"
                  : "glass-panel-subtle text-[var(--text-muted)] hover:border-emerald-500/40"
                }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Core Stack ({skillsCategories.reduce((acc, c) => acc + c.skills.filter(s => s.tier === 'core').length, 0)})</span>
            </div>

            <div
              onClick={() => setSelectedTier(selectedTier === "knowledge" ? "all" : "knowledge")}
              className={`px-3 py-1 rounded-full border cursor-pointer transition-all flex items-center gap-1.5 ${selectedTier === "knowledge"
                  ? "bg-blue-500/20 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold shadow-xs"
                  : "glass-panel-subtle text-[var(--text-muted)] hover:border-blue-500/40"
                }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span>Applied ({skillsCategories.reduce((acc, c) => acc + c.skills.filter(s => s.tier === 'knowledge').length, 0)})</span>
            </div>

            <div
              onClick={() => setSelectedTier(selectedTier === "exploring" ? "all" : "exploring")}
              className={`px-3 py-1 rounded-full border cursor-pointer transition-all flex items-center gap-1.5 ${selectedTier === "exploring"
                  ? "bg-purple-500/20 border-purple-500 text-purple-600 dark:text-purple-400 font-semibold shadow-xs"
                  : "glass-panel-subtle text-[var(--text-muted)] hover:border-purple-500/40"
                }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              <span>R&D ({skillsCategories.reduce((acc, c) => acc + c.skills.filter(s => s.tier === 'exploring').length, 0)})</span>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Domain Selector (Horizontal Scrollable Strip) */}
        <div className="lg:hidden mb-5 -mx-4 px-4 overflow-x-auto no-scrollbar flex items-center gap-2">
          {skillsCategories.map((cat) => {
            const Icon = iconMap[cat.iconName] || Layers;
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setInspectedSkill(null);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 flex items-center gap-2 border transition-all ${isActive
                    ? "bg-emerald-500 text-white dark:text-black border-emerald-500 shadow-sm"
                    : "glass-panel text-[var(--text-muted)] border-[var(--card-inner-border)] hover:text-[var(--text-heading)]"
                  }`}
              >
                <Icon size={13} />
                <span>{cat.shortTitle}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? "bg-black/20 dark:bg-white/20 text-current" : "bg-[var(--card-inner-border)] text-[var(--text-dim)]"
                  }`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Desktop-Grade Command Hub (Split Console Architecture - Viewport Optimized) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Domain Selector Sidebar (4 cols) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-1.5 glass-panel p-2.5 sm:p-3 rounded-2xl border border-[var(--card-inner-border)]">
            <div className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[var(--text-dim)] flex items-center justify-between">
              <span>Engineering Tracks</span>
              <span className="text-emerald-500 font-semibold">{skillsCategories.length} Domains</span>
            </div>

            <div className="space-y-1" role="tablist" aria-label="Skill domains">
              {skillsCategories.map((cat) => {
                const Icon = iconMap[cat.iconName] || Layers;
                const isActive = cat.id === activeCategoryId;
                const coreCount = cat.skills.filter(s => s.tier === 'core').length;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveCategoryId(cat.id);
                      setInspectedSkill(null);
                    }}
                    className={`w-full text-left py-2 px-2.5 rounded-xl transition-all flex items-center justify-between border ${isActive
                        ? "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/40 text-[var(--text-heading)] shadow-xs"
                        : "border-transparent text-[var(--text-muted)] hover:bg-[var(--card-inner-bg)] hover:text-[var(--text-heading)]"
                      }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${isActive
                          ? "bg-emerald-500/20 text-emerald-500 border-emerald-500/30"
                          : "bg-[var(--card-inner-bg)] text-[var(--text-dim)] border-[var(--card-inner-border)]"
                        }`}>
                        <Icon size={14} />
                      </div>
                      <div className="truncate">
                        <div className={`text-xs font-semibold tracking-tight truncate ${isActive ? "text-[var(--text-heading)]" : "text-[var(--text-muted)]"
                          }`}>
                          {cat.title}
                        </div>
                        <div className="text-[10px] font-mono text-[var(--text-dim)] truncate">
                          {cat.shortTitle} • {coreCount} Core Competencies
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full border ${isActive
                          ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 font-semibold"
                          : "bg-[var(--card-inner-bg)] text-[var(--text-dim)] border-[var(--card-inner-border)]"
                        }`}>
                        {cat.skills.length}
                      </span>
                      <ChevronRight size={13} className={`transition-transform duration-200 ${isActive ? "text-emerald-500 translate-x-0.5" : "text-[var(--text-dim)] opacity-40"
                        }`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Domain Workstation Console (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id + selectedTier}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="glass-panel p-4 sm:p-5 md:p-6 rounded-2xl border border-emerald-500/25 relative overflow-hidden flex flex-col justify-between min-h-[380px]"
              >
                {/* Workstation Top Meta Header */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--card-inner-border)] mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 flex items-center justify-center shrink-0">
                        <ActiveIcon size={18} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                            Production Domain
                          </span>
                          <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                          <span className="text-[10px] font-mono text-[var(--text-dim)] uppercase">
                            Verified Stack
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[var(--text-heading)] tracking-tight">
                          {activeCategory.title}
                        </h3>
                      </div>
                    </div>

                    {/* Tier Switcher inside Active Domain */}
                    <div className="flex items-center gap-1 p-0.5 rounded-lg glass-panel-subtle border border-[var(--card-inner-border)] self-start sm:self-auto">
                      {["all", "core", "knowledge", "exploring"].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTier(t)}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider transition-all ${selectedTier === t
                              ? "bg-emerald-500 text-white dark:text-black font-semibold shadow-xs"
                              : "text-[var(--text-muted)] hover:text-[var(--text-heading)]"
                            }`}
                        >
                          {t === "all" ? "All" : t === "core" ? "Core" : t === "knowledge" ? "Applied" : "R&D"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-3">
                    {activeCategory.description}
                  </p>

                  {/* Partition A: Core Superpowers Spotlight Grid (Compact Viewport Fitted) */}
                  {coreSkills.length > 0 && (
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[var(--text-dim)] font-semibold mb-2">
                        <div className="flex items-center gap-1.5">
                          <Sparkles size={12} className="text-emerald-500" />
                          <span>Core Pillars & Primary Technologies ({coreSkills.length})</span>
                        </div>
                        <span className="text-[10px] text-[var(--text-dim)] lowercase font-normal">production grade</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {coreSkills.map((skill, sIdx) => {
                          const isInspected = activeInspector?.name === skill.name;
                          const tierInfo = skillTiers[skill.tier] || skillTiers.core;
                          return (
                            <div
                              key={sIdx}
                              onMouseEnter={() => setInspectedSkill(skill)}
                              onClick={() => setInspectedSkill(skill)}
                              className={`py-1.5 px-2.5 rounded-xl border transition-all cursor-pointer ${isInspected
                                  ? "bg-emerald-500/10 border-emerald-500/50 shadow-xs"
                                  : "card-inner-item hover:border-emerald-500/35"
                                }`}
                            >
                              <div className="flex items-center justify-between gap-1.5">
                                <span className="text-xs font-semibold text-[var(--text-heading)] flex items-center gap-1.5 truncate">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                  <span className="truncate">{skill.name}</span>
                                </span>
                                <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded border uppercase tracking-wider shrink-0 ${tierInfo.badgeClass}`}>
                                  {skill.tier === "core" ? "Core" : skill.tier === "knowledge" ? "Applied" : "R&D"}
                                </span>
                              </div>
                              <p className="text-[10px] text-[var(--text-dim)] mt-0.5 truncate pl-3">
                                {skill.highlight}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Partition B: Supporting & Applied Tooling Capsule Matrix */}
                  {supportingSkills.length > 0 && (
                    <div className="mt-2.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[var(--text-dim)] font-semibold mb-2">
                        <Layers size={12} className="text-blue-500" />
                        <span>Applied & Supporting Tooling ({supportingSkills.length})</span>
                        <span className="text-[10px] text-[var(--text-dim)] lowercase font-normal">(hover for focus)</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {supportingSkills.map((skill, idx) => {
                          const isInspected = activeInspector?.name === skill.name;
                          const isExploring = skill.tier === "exploring";
                          return (
                            <button
                              key={idx}
                              onMouseEnter={() => setInspectedSkill(skill)}
                              onClick={() => setInspectedSkill(skill)}
                              className={`px-2.5 py-1 rounded-lg border text-[11px] transition-all flex items-center gap-1.5 ${isInspected
                                  ? isExploring
                                    ? "bg-purple-500/20 border-purple-500/60 text-[var(--text-heading)] font-semibold scale-102"
                                    : "bg-blue-500/20 border-blue-500/60 text-[var(--text-heading)] font-semibold scale-102"
                                  : "card-inner-item text-[var(--text-muted)] hover:border-emerald-500/35 hover:text-[var(--text-heading)]"
                                }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isExploring ? "bg-purple-500" : "bg-blue-500"
                                }`}></span>
                              <span>{skill.name}</span>
                              <span className={`text-[8px] font-mono px-1 rounded uppercase tracking-wider ${isExploring ? "text-purple-400 bg-purple-500/10" : "text-blue-400 bg-blue-500/10"
                                }`}>
                                {isExploring ? "R&D" : "Applied"}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Desktop High-Grade Inspector Strip */}
                <div className="mt-3.5 pt-2.5 border-t border-[var(--card-inner-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono">
                  <div className="flex items-center gap-2 min-w-0">
                    <Info size={13} className="text-emerald-500 shrink-0" />
                    <span className="text-[var(--text-dim)] shrink-0">Focus:</span>
                    <span className="font-semibold text-[var(--text-heading)] shrink-0">{activeInspector?.name}</span>
                    <span className="text-[var(--text-dim)] truncate">— {activeInspector?.highlight}</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                      Verified Production Ready
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Future-Focused Engineering Radar */}
        <div className="mt-12 sm:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-5 sm:p-6 rounded-2xl border border-purple-500/25 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 border-b border-[var(--card-inner-border)] pb-4 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-500 flex items-center justify-center shrink-0 border border-purple-500/20">
                  <Radio size={16} className="animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 font-semibold">
                    Future-Focused Engineering Radar
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-heading)] tracking-tight">
                    Active Horizons & Emerging Disciplines
                  </h3>
                </div>
              </div>
              <span className="text-xs font-mono text-purple-600 dark:text-purple-400 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                Continuous R&D
              </span>
            </div>

            <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed">
              Software engineering is rapidly compounding with autonomous agent architectures, distributed state synchronicity, and AI-native application paradigms. These are the advanced domains I actively research and integrate:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {futureFocusedRadar.map((radar, rIdx) => (
                <div
                  key={rIdx}
                  className="p-3.5 rounded-xl card-inner-item hover:border-purple-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-purple-600 dark:text-purple-300 mb-1 uppercase tracking-wider">
                      <span>{radar.tag}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-heading)]">
                      {radar.domain}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
                      {radar.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional & Leadership Competencies */}
        <div className="mt-10 sm:mt-12 glass-panel p-5 sm:p-6 rounded-2xl border border-[var(--card-inner-border)]">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-4 font-mono">
            <Users2 size={15} />
            <span>Professional & Leadership Competencies</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {professionalLeadershipSkills.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl card-inner-item hover:border-emerald-500/30 transition-all"
              >
                <h4 className="text-xs sm:text-sm font-bold text-[var(--text-heading)]">
                  {item.name}
                </h4>
                <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
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
