import { ArrowUp, Globe, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./BrandIcons";
import { personalProfile } from "../data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Mission", href: "#mission" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-[var(--nav-border)] bg-[var(--footer-bg)] py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Col - 5 Cols */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-white dark:text-black text-xs font-mono shadow-sm shadow-emerald-500/20">
                MR
              </div>
              <span className="text-base font-bold text-[var(--text-heading)] tracking-tight">
                {personalProfile.name}
              </span>
            </div>

            <p className="text-xs text-[var(--text-muted)] max-w-sm leading-relaxed">
              Building meaningful digital experiences through engineering, innovation, and continuous learning.
            </p>

            <div className="text-[11px] text-[var(--text-dim)] font-mono">
              Designed and Engineered by Mustafa Rahman.
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalProfile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg card-inner-item text-[var(--text-dim)] hover:text-[var(--text-heading)] hover:border-emerald-500/40 transition-colors"
                title="GitHub: developer-mustafa"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalProfile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg card-inner-item text-[var(--text-dim)] hover:text-[var(--text-heading)] hover:border-emerald-500/40 transition-colors"
                title="LinkedIn: developer-mustafa"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={personalProfile.social.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Personal Website"
                className="p-2 rounded-lg card-inner-item text-[var(--text-dim)] hover:text-[var(--text-heading)] hover:border-emerald-500/40 transition-colors"
                title="Website: mustafaofficial.com"
              >
                <Globe size={16} />
              </a>
              <a
                href={`mailto:${personalProfile.social.email}`}
                aria-label="Direct Email"
                className="p-2 rounded-lg card-inner-item text-[var(--text-dim)] hover:text-[var(--text-heading)] hover:border-emerald-500/40 transition-colors"
                title="Email: mustafa.rahman.official@gmail.com"
              >
                <Mail size={16} />
              </a>
              <a
                href={personalProfile.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2 rounded-lg card-inner-item text-[var(--text-dim)] hover:text-emerald-500 hover:border-emerald-500/40 transition-colors"
                title={`WhatsApp: ${personalProfile.social.phone}`}
              >
                <WhatsAppIcon size={16} />
              </a>
              <a
                href={`tel:${personalProfile.social.phoneRaw}`}
                aria-label="Direct Phone Call"
                className="p-2 rounded-lg card-inner-item text-[var(--text-dim)] hover:text-emerald-500 hover:border-emerald-500/40 transition-colors"
                title={`Call: ${personalProfile.social.phone}`}
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Links - 4 Cols */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-heading)] mb-4 font-mono">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[var(--text-muted)] hover:text-emerald-500 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top - 3 Cols */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:border-emerald-500/40 transition-all font-mono"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-emerald-500" />
            </button>

            <div className="text-[11px] text-[var(--text-dim)] mt-6 md:mt-0 text-left md:text-right font-mono">
              <span>{personalProfile.location.label}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Current Year */}
        <div className="pt-8 border-t border-[var(--card-inner-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-dim)]">
          <div>
            &copy; {currentYear} {personalProfile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span className="text-[var(--text-dim)]">https://mustafaofficial.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
