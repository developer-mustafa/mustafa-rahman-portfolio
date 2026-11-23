import { useState } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Send, 
  MapPin, 
  Globe, 
  Phone,
  CheckCircle, 
  AlertCircle
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./BrandIcons";
import { personalProfile } from "../data/profile";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message must be at least 15 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        const emailjs = await import("@emailjs/browser");
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject,
            message: formData.message
          },
          publicKey
        );

        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch {
        setStatus("error");
        setStatusMessage("Failed to dispatch message via EmailJS. Please email directly.");
      }
    } else {
      setTimeout(() => {
        setStatus("config_notice");
        setStatusMessage(
          "Notice: EmailJS environment variables are not yet configured on this deployment. Your input has been validated. You can launch your email client with your message prefilled."
        );
      }, 400);
    }
  };

  const mailtoLink = `mailto:${personalProfile.social.email}?subject=${encodeURIComponent(
    formData.subject || "Software Engineering Inquiry"
  )}&body=${encodeURIComponent(
    `From: ${formData.name || "[Your Name]"} (${formData.email || "[Your Email]"})\n\n${
      formData.message || ""
    }`
  )}`;

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2.5 font-mono">
            <Mail size={13} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-heading)]">
            Let's Connect & Collaborate
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] max-w-lg">
            Available for software engineering opportunities, technology consulting, and educational technology initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Contact Details Card - 5 Cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 glass-panel p-5 sm:p-6 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)] tracking-tight">
                  Verified Channels
                </h3>
                <p className="mt-1 text-xs text-[var(--text-muted)] leading-relaxed">
                  Connect directly through verified email, instant chat, or direct lines.
                </p>
              </div>

              <div className="space-y-2.5">
                {/* Primary Channel: Email */}
                <a
                  href={`mailto:${personalProfile.social.email}`}
                  className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl card-inner-item hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-colors shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="overflow-hidden min-w-0 flex-1">
                    <span className="text-[10px] text-[var(--text-dim)] uppercase tracking-wider font-semibold font-mono block">
                      Verified Email
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[var(--text-heading)] group-hover:text-emerald-500 transition-colors truncate">
                      {personalProfile.social.email}
                    </p>
                  </div>
                </a>

                {/* 2-Column Grid: WhatsApp & Direct Call */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={personalProfile.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl card-inner-item hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group min-w-0"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-colors shrink-0">
                      <WhatsAppIcon size={16} />
                    </div>
                    <div className="overflow-hidden min-w-0 flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-[var(--text-dim)] uppercase font-semibold font-mono">WhatsApp</span>
                        <span className="text-[8px] px-1 py-0.2 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono font-semibold">Instant</span>
                      </div>
                      <p className="text-xs font-medium text-[var(--text-heading)] group-hover:text-emerald-500 transition-colors truncate">
                        Chat on WhatsApp
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${personalProfile.social.phoneRaw}`}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl card-inner-item hover:border-teal-500/40 hover:bg-teal-500/5 transition-all group min-w-0"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-500/15 flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white dark:group-hover:text-black transition-colors shrink-0">
                      <Phone size={16} />
                    </div>
                    <div className="overflow-hidden min-w-0 flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-[var(--text-dim)] uppercase font-semibold font-mono">Direct Call</span>
                        <span className="text-[8px] px-1 py-0.2 rounded bg-teal-500/15 text-teal-600 dark:text-teal-400 font-mono font-semibold">Live</span>
                      </div>
                      <p className="text-xs font-medium text-[var(--text-heading)] group-hover:text-teal-500 transition-colors truncate">
                        {personalProfile.social.phone}
                      </p>
                    </div>
                  </a>
                </div>

                {/* 2-Column Grid: Location & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl card-inner-item min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/15 flex items-center justify-center text-teal-500 shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div className="overflow-hidden min-w-0 flex-1">
                      <span className="text-[10px] text-[var(--text-dim)] uppercase font-semibold font-mono block">Location</span>
                      <p className="text-xs font-medium text-[var(--text-heading)] truncate" title={personalProfile.location.label}>
                        {personalProfile.location.city}, {personalProfile.location.country}
                      </p>
                    </div>
                  </div>

                  <a
                    href={personalProfile.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl card-inner-item hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group min-w-0"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:text-black transition-colors shrink-0">
                      <Globe size={16} />
                    </div>
                    <div className="overflow-hidden min-w-0 flex-1">
                      <span className="text-[10px] text-[var(--text-dim)] uppercase font-semibold font-mono block">Website</span>
                      <p className="text-xs font-medium text-[var(--text-heading)] group-hover:text-cyan-500 transition-colors truncate">
                        mustafaofficial.com
                      </p>
                    </div>
                  </a>
                </div>

                {/* 2-Column Grid: LinkedIn & GitHub */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={personalProfile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl card-inner-item hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group min-w-0"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white dark:group-hover:text-black transition-colors shrink-0">
                      <LinkedinIcon size={16} />
                    </div>
                    <div className="overflow-hidden min-w-0 flex-1">
                      <span className="text-[10px] text-[var(--text-dim)] uppercase font-semibold font-mono block">LinkedIn</span>
                      <p className="text-xs font-medium text-[var(--text-heading)] group-hover:text-blue-500 transition-colors truncate">
                        in/developer-mustafa
                      </p>
                    </div>
                  </a>

                  <a
                    href={personalProfile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl card-inner-item hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group min-w-0"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 dark:bg-zinc-800 flex items-center justify-center text-white group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-colors shrink-0">
                      <GithubIcon size={16} />
                    </div>
                    <div className="overflow-hidden min-w-0 flex-1">
                      <span className="text-[10px] text-[var(--text-dim)] uppercase font-semibold font-mono block">GitHub</span>
                      <p className="text-xs font-medium text-[var(--text-heading)] group-hover:text-emerald-500 transition-colors truncate">
                        developer-mustafa
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3.5 border-t border-[var(--card-inner-border)] flex items-center gap-2 text-xs text-[var(--text-dim)] font-mono">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="truncate">Available for select engineering opportunities & consulting.</span>
            </div>
          </motion.div>

          {/* Contact Form - 7 Cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 glass-panel p-5 sm:p-6 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-heading)] tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="mt-1 text-xs text-[var(--text-muted)] leading-relaxed">
                  Drop a message below and I'll respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-[var(--text-muted)] mb-1 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-3.5 py-2 rounded-xl bg-[var(--input-bg)] border text-xs sm:text-sm text-[var(--text-heading)] placeholder-[var(--text-dim)] focus:outline-none transition-colors ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-[var(--input-border)] focus:border-emerald-500"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-500 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-[var(--text-muted)] mb-1 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`w-full px-3.5 py-2 rounded-xl bg-[var(--input-bg)] border text-xs sm:text-sm text-[var(--text-heading)] placeholder-[var(--text-dim)] focus:outline-none transition-colors ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-[var(--input-border)] focus:border-emerald-500"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[var(--text-muted)] mb-1 font-mono">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Software Engineering Collaboration / Inquiry"
                    className={`w-full px-3.5 py-2 rounded-xl bg-[var(--input-bg)] border text-xs sm:text-sm text-[var(--text-heading)] placeholder-[var(--text-dim)] focus:outline-none transition-colors ${
                      errors.subject ? "border-red-500 focus:border-red-500" : "border-[var(--input-border)] focus:border-emerald-500"
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[var(--text-muted)] mb-1 font-mono">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, software engineering role, or institutional scope..."
                    className={`w-full px-3.5 py-2 rounded-xl bg-[var(--input-bg)] border text-xs sm:text-sm text-[var(--text-heading)] placeholder-[var(--text-dim)] focus:outline-none transition-colors resize-none ${
                      errors.message ? "border-red-500 focus:border-red-500" : "border-[var(--input-border)] focus:border-emerald-500"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Feedback States */}
                {status === "config_notice" && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-700 dark:text-amber-300 text-xs space-y-1.5">
                    <div className="flex items-start gap-2">
                      <AlertCircle size={15} className="mt-0.5 shrink-0" />
                      <span>{statusMessage}</span>
                    </div>
                    <div>
                      <a
                        href={mailtoLink}
                        className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-500"
                      >
                        <Mail size={13} />
                        <span>Click here to open in your default email client with message prefilled &rarr;</span>
                      </a>
                    </div>
                  </div>
                )}

                {status === "success" && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                    <CheckCircle size={15} />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle size={15} />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white dark:text-black font-semibold text-xs sm:text-sm shadow-md shadow-emerald-500/20 transition-all duration-200 active:scale-95 disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
