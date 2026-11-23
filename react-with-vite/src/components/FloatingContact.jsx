import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, X } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { personalProfile } from "../data/profile";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded Quick Contact Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-panel p-3.5 rounded-2xl shadow-2xl border border-[var(--card-border)] flex flex-col gap-2 min-w-[210px] text-left mb-1"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[var(--card-inner-border)]">
              <span className="text-[11px] font-semibold text-[var(--text-heading)] font-mono">
                Direct Contact
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                Online
              </span>
            </div>

            {/* WhatsApp Chat Link */}
            <a
              href={personalProfile.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl card-inner-item hover:border-emerald-500/40 text-xs font-medium text-[var(--text-heading)] hover:text-emerald-500 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-colors">
                <WhatsAppIcon size={16} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider font-mono">WhatsApp</p>
                <p className="text-xs font-semibold leading-tight">Chat on WhatsApp</p>
              </div>
            </a>

            {/* Direct Phone Call Link */}
            <a
              href={`tel:${personalProfile.social.phoneRaw}`}
              className="flex items-center gap-2.5 p-2 rounded-xl card-inner-item hover:border-emerald-500/40 text-xs font-medium text-[var(--text-heading)] hover:text-emerald-500 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-500/15 flex items-center justify-center text-teal-500 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-colors">
                <Phone size={16} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider font-mono">Direct Call</p>
                <p className="text-xs font-semibold leading-tight">{personalProfile.social.phone}</p>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Trigger Button */}
      <div className="relative group">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Direct Contact via WhatsApp or Call"
          title="Direct Contact (WhatsApp & Call)"
          className="relative w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-shadow duration-300 focus:outline-none"
        >
          {/* Subtle Radar Pulse */}
          <span className="absolute -inset-0.5 rounded-full bg-emerald-500/40 animate-ping opacity-60 pointer-events-none" />

          {isOpen ? (
            <X size={20} className="relative z-10" />
          ) : (
            <WhatsAppIcon size={22} className="relative z-10" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
