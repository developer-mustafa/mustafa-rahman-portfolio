import { motion } from "motion/react";
import { 
  Globe2, 
  Terminal, 
  Quote, 
  Target
} from "lucide-react";
import { personalProfile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-heading)]">
            Software Engineering & Technology Education
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-medium font-mono uppercase tracking-wider">
            &ldquo;{personalProfile.philosophy}&rdquo;
          </p>
        </div>

        {/* Narrative & Highlights Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Narrative Card - Span 7 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-4 uppercase tracking-wider font-mono">
                <Terminal size={14} />
                <span>Professional Background</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-normal">
                <p>
                  I'm Mustafa Rahman, a Full-Stack AI Software Engineer, Technical Lead, and Software Architect with professional experience spanning software engineering, modern web applications, AI integration, and technology education. My professional journey has included working in international technology environments, including the United States, Istanbul, and Hyderabad.
                </p>
                <p>
                  I am passionate about building modern web applications, creating intuitive user interfaces, improving application performance, and developing reliable digital solutions.
                </p>
                <p>
                  My technical interests include frontend engineering, JavaScript ecosystems, React, Next.js, software architecture, application security, and modern development workflows.
                </p>
                <p>
                  Beyond software engineering, I am also involved in ICT education and student mentorship. I enjoy sharing technical knowledge and helping students develop practical programming and digital skills.
                </p>
                <p className="text-emerald-600 dark:text-emerald-300 font-medium pt-1">
                  I strongly believe technology should solve real-world problems, improve productivity, and create meaningful opportunities for people.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[var(--card-inner-border)] flex flex-wrap gap-2 text-xs text-[var(--text-dim)]">
              <span className="px-2.5 py-1 rounded-md card-inner-item">United States (Remote)</span>
              <span className="px-2.5 py-1 rounded-md card-inner-item">Istanbul, Türkiye</span>
              <span className="px-2.5 py-1 rounded-md card-inner-item">Hyderabad, India</span>
              <span className="px-2.5 py-1 rounded-md card-inner-item">Bangladesh (ICT Education)</span>
            </div>
          </motion.div>

          {/* Core Philosophy & International Scope - Span 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 grid grid-cols-1 gap-4"
          >
            {/* Philosophy Card */}
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-3">
                  <Quote size={18} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                  Professional Philosophy
                </span>
                <h3 className="text-lg font-bold text-[var(--text-heading)] mt-1">
                  &ldquo;Build with purpose. Engineer with precision. Create with impact.&rdquo;
                </h3>
                <p className="mt-3 text-xs text-[var(--text-muted)] leading-relaxed">
                  Every system, user interface, and curriculum module is engineered with deliberate care, prioritizing real utility and high availability over transient trends.
                </p>
              </div>
            </div>

            {/* International Environment Card */}
            <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-500 mb-3">
                  <Globe2 size={18} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 font-semibold">
                  Global Perspective
                </span>
                <h3 className="text-lg font-bold text-[var(--text-heading)] mt-1">
                  International Working Environments
                </h3>
                <p className="mt-3 text-xs text-[var(--text-muted)] leading-relaxed">
                  Collaborating across cross-cultural teams has enriched my understanding of international engineering rigor, modern standards, and asynchronous team communication.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Engineering Versatility Banner (Using main 4 style image) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 rounded-2xl glass-panel p-5 sm:p-6 overflow-hidden group border border-[var(--card-border)]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                Engineering & Leadership Dimensions
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-heading)]">
                Full-Stack Architecture, AI Systems & ICT Educational Leadership
              </h3>
            </div>
            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
              4 Core Engineering Dimensions
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-[16/7] sm:aspect-[21/9] bg-black/10">
            <img
              src="/images/main 4 style image.webp"
              alt="Mustafa Rahman - Engineering Dimensions & Leadership Styles"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)]/80 via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>
        </motion.div>

        {/* Personal Mission Section */}
        <div id="mission" className="mt-8 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/25 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[var(--card-inner-border)] pb-5 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    Personal Mission
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-heading)] tracking-tight">
                    {personalProfile.mission.title}
                  </h3>
                </div>
              </div>

              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                {personalProfile.mission.statement}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[var(--text-muted)]">
              <div className="p-4 rounded-xl card-inner-item space-y-2">
                <h4 className="font-semibold text-[var(--text-heading)] flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono text-emerald-600 dark:text-emerald-400">
                  <span>Educational Access</span>
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {personalProfile.mission.coreBelief}
                </p>
              </div>

              <div className="p-4 rounded-xl card-inner-item space-y-2">
                <h4 className="font-semibold text-[var(--text-heading)] flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono text-teal-600 dark:text-teal-400">
                  <span>Automata Pro in Mirsarai</span>
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {personalProfile.mission.edTechFocus}
                </p>
              </div>

              <div className="p-4 rounded-xl card-inner-item space-y-2">
                <h4 className="font-semibold text-[var(--text-heading)] flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono text-cyan-600 dark:text-cyan-400">
                  <span>Empowering Tomorrow</span>
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {personalProfile.mission.empowerment}
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs text-[var(--text-dim)] italic text-center md:text-left">
              &ldquo;{personalProfile.mission.vision}&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
