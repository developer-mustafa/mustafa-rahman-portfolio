import { motion } from "motion/react";
import {
  ArrowRight,
  MapPin,
  Globe,
  Mail,
  Phone,
  ShieldCheck
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./BrandIcons";
import { personalProfile } from "../data/profile";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-16 sm:pt-18 lg:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Two-Column Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative, Typography & CTAs (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            {/* Availability / Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle border border-emerald-500/25 text-xs text-[var(--text-muted)] mb-3 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide font-mono">
                {personalProfile.tagline}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-heading)] leading-[1.08]"
            >
              Building Digital Experiences{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-200">
                That Make a Difference.
              </span>
            </motion.h1>

            {/* Professional Roles Banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 font-mono tracking-wide"
            >
              <span className="px-2.5 py-0.5 rounded-md card-inner-item">Full-Stack AI Software Engineer</span>
              <span className="text-[var(--text-dim)]">•</span>
              <span className="px-2.5 py-0.5 rounded-md card-inner-item">Technical Lead</span>
              <span className="text-[var(--text-dim)]">•</span>
              <span className="px-2.5 py-0.5 rounded-md card-inner-item">Software Architect</span>
            </motion.div>

            {/* Professional Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-4 text-sm sm:text-base text-[var(--text-muted)] font-normal leading-relaxed space-y-2 max-w-2xl"
            >
              <p>{personalProfile.introduction[0]}</p>
              <p className="text-xs sm:text-sm text-[var(--text-dim)]">{personalProfile.introduction[1]}</p>
            </motion.div>

            {/* Location & Context Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[var(--text-dim)]"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md card-inner-item">
                <MapPin size={13} className="text-emerald-500" />
                <span className="text-[var(--text-muted)]">{personalProfile.location.label}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md card-inner-item">
                <span className="text-[var(--text-dim)]">Timezone:</span>
                <span className="text-[var(--text-muted)]">{personalProfile.location.timeZone}</span>
              </div>
            </motion.div>

            {/* Action Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-5 sm:mt-6 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white dark:text-black font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all duration-200 active:scale-95"
              >
                <span>View Featured Projects</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToContact}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl glass-panel hover:bg-black/5 dark:hover:bg-white/10 text-[var(--text-heading)] font-medium text-xs sm:text-sm transition-all duration-200 active:scale-95"
              >
                <Mail size={15} className="text-[var(--text-dim)] group-hover:text-emerald-500 transition-colors" />
                <span>Get in Touch</span>
              </button>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={personalProfile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg text-[var(--text-dim)] hover:text-[var(--text-heading)] glass-panel hover:border-emerald-500/40 transition-all"
                  title="GitHub: developer-mustafa"
                >
                  <GithubIcon size={17} />
                </a>
                <a
                  href={personalProfile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg text-[var(--text-dim)] hover:text-[var(--text-heading)] glass-panel hover:border-emerald-500/40 transition-all"
                  title="LinkedIn: developer-mustafa"
                >
                  <LinkedinIcon size={17} />
                </a>
                <a
                  href={personalProfile.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Personal Website"
                  className="p-2.5 rounded-lg text-[var(--text-dim)] hover:text-[var(--text-heading)] glass-panel hover:border-emerald-500/40 transition-all"
                  title="Website: mustafaofficial.com"
                >
                  <Globe size={17} />
                </a>
                <a
                  href={personalProfile.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="p-2.5 rounded-lg text-[var(--text-dim)] hover:text-emerald-500 glass-panel hover:border-emerald-500/40 transition-all"
                  title={`Chat on WhatsApp: ${personalProfile.social.phone}`}
                >
                  <WhatsAppIcon size={17} />
                </a>
                <a
                  href={`tel:${personalProfile.social.phoneRaw}`}
                  aria-label="Direct Call"
                  className="p-2.5 rounded-lg text-[var(--text-dim)] hover:text-emerald-500 glass-panel hover:border-emerald-500/40 transition-all"
                  title={`Call: ${personalProfile.social.phone}`}
                >
                  <Phone size={17} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Anchor & Engineer Portrait Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Ambient Glow Aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-emerald-500/25 via-teal-500/15 to-emerald-500/20 blur-2xl opacity-60 dark:opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Showcase Glass Card */}
              <div className="relative rounded-3xl glass-panel p-3.5 sm:p-4 overflow-hidden shadow-2xl border border-[var(--card-border)]">
                {/* High-Resolution Portrait Container */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gradient-to-b from-white/5 to-black/10">
                  <img
                    src="/images/profile eng single.webp"
                    alt="Mustafa Rahman - Senior Software Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                    fetchPriority="high"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)]/80 via-transparent to-transparent opacity-50" />
                </div>

                {/* Floating Credential Footer inside Card */}
                <div className="mt-3.5 p-3 rounded-xl card-inner-item flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-heading)] leading-none">
                        Senior Software Engineer
                      </p>
                      <p className="text-[10px] text-[var(--text-muted)] font-mono mt-1">
                        SolarWinds • USA (Remote)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold">
                    <ShieldCheck size={12} />
                    <span>VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Highlights Bento Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-8 sm:mt-10 lg:mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {personalProfile.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl glass-panel-subtle text-left hover:border-emerald-500/30 transition-colors"
            >
              <div className="text-[10px] text-[var(--text-dim)] font-medium uppercase tracking-wider font-mono">
                {item.label}
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[var(--text-heading)]">
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
