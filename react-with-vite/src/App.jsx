import { useEffect } from "react";
import Lenis from "lenis";
import { useTheme } from "./hooks/useTheme";
import { useScrollSpy } from "./hooks/useScrollSpy";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GitHub from "./components/GitHub";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackgroundEffects from "./components/BackgroundEffects";
import FloatingContact from "./components/FloatingContact";

const sectionIds = [
  "hero",
  "about",
  "mission",
  "experience",
  "projects",
  "skills",
  "education",
  "blog",
  "contact"
];

function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const activeSection = useScrollSpy(sectionIds, 120);

  // Initialize Lenis smooth scroll while respecting prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-300 selection:bg-emerald-500/20 selection:text-emerald-500">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Ambient background glows & mesh */}
      <BackgroundEffects />

      {/* Main sticky navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Experience isDark={isDark} />
        <Projects isDark={isDark} />
        <Skills isDark={isDark} />
        <GitHub isDark={isDark} />
        <Education isDark={isDark} />
        <Blog isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Floating Direct Contact Widget (WhatsApp & Call) */}
      <FloatingContact />
    </div>
  );
}

export default App;
