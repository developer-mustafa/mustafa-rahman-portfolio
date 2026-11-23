import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Clock,
  Sun,
  Moon,
  Mail
} from "lucide-react";
import { personalProfile } from "../data/profile";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "mission", label: "Mission" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" }
];

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "py-3 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--nav-border)] shadow-lg shadow-black/5 dark:shadow-black/20"
          : "py-5 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              className="group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
                MR
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-sm sm:text-base tracking-tight text-[var(--text-heading)] group-hover:text-emerald-500 transition-colors">
                  {personalProfile.name}
                </span>
                <span className="text-[10px] text-[var(--text-dim)] tracking-wider uppercase font-medium max-w-[150px] sm:max-w-xs md:max-w-none truncate font-mono">
                  Full-Stack AI Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 glass-panel px-3 py-1.5 rounded-full shadow-inner">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${isActive
                      ? "text-emerald-500 font-semibold"
                      : "text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/30 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle visual theme"
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:bg-black/5 dark:hover:bg-white/5 border border-[var(--card-border)] transition-colors"
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === "dark" ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-slate-700" />}
              </button>

              {/* CV Button */}
              <button
                onClick={() => setShowCvModal(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white dark:hover:text-black border border-emerald-500/30 transition-all duration-200 active:scale-95 font-mono"
                title="Curriculum Vitae"
              >
                <Clock size={13} />
                <span>CV: Coming Soon</span>
              </button>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-heading)] border border-[var(--card-border)]"
              >
                {theme === "dark" ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-slate-700" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open Navigation Menu"
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-heading)] border border-[var(--card-border)] focus:outline-none"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 p-4 lg:hidden"
          >
            <div className="p-5 rounded-2xl border border-[var(--card-border)] shadow-2xl bg-[var(--modal-bg)] backdrop-blur-xl flex flex-col space-y-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${activeSection === item.id
                    ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold"
                    : "text-[var(--text-muted)] hover:bg-black/5 dark:hover:bg-white/5 hover:text-[var(--text-heading)]"
                    }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  )}
                </button>
              ))}

              <div className="pt-3 mt-2 border-t border-[var(--card-border)] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowCvModal(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                >
                  <Clock size={13} />
                  <span>CV: Coming Soon</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CV Information Modal */}
      <AnimatePresence>
        {showCvModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCvModal(false)}
              className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-[var(--modal-bg)] border border-[var(--card-border)] rounded-2xl p-6 shadow-2xl z-10"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-500">
                  <Clock size={18} />
                </div>
                <button
                  onClick={() => setShowCvModal(false)}
                  className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-heading)]"
                >
                  <X size={18} />
                </button>
              </div>

              <h3 className="text-lg font-bold text-[var(--text-heading)] mt-4">
                Curriculum Vitae — Verified Profile
              </h3>
              <p className="mt-2 text-xs text-[var(--text-muted)] leading-relaxed">
                The comprehensive CV document is currently being updated to reflect recent engineering milestones and academic work.
              </p>
              <p className="mt-2 text-xs text-[var(--text-muted)] leading-relaxed">
                If you are a recruiter, hiring manager, or institution requiring an immediate verified copy, please request it directly via email:
              </p>

              <div className="mt-4 p-3 rounded-xl card-inner-item flex items-center justify-between text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <span>{personalProfile.social.email}</span>
              </div>

              <div className="mt-6 flex gap-2">
                <a
                  href={`mailto:${personalProfile.social.email}?subject=CV%20Request%20-%20Mustafa%20Rahman`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 text-white dark:text-black text-xs font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors"
                >
                  <Mail size={13} />
                  <span>Request CV via Email</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
