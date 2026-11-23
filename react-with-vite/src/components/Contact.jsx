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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 font-mono">
            <Mail size={13} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-heading)]">
            Let's Connect & Collaborate
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] max-w-xl">
            Available for software engineering opportunities, technology consulting, and educational technology initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Contact Details Card - 5 Cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[var(--text-heading)] tracking-tight">
                Verified Channels
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Connect directly through verified email, professional profiles, or personal website.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${personalProfile.social.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl card-inner-item hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-colors">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-[var(--text-dim)] uppercase tracking-wider font-semibold font-mono">Email</span>
                    <p className="text-xs sm:text-sm font-medium text-[var(--text-heading)] group-hover:text-emerald-500 transition-colors truncate">
                      {personalProfile.social.email}
                    </p>
                  </div>
                </a>

                {/* WhatsApp Quick Chat */}
                <a
                  href={personalProfile.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl card-inner-item hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-colors">
                    <WhatsAppIcon size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-[var(--text-dim)] uppercase tracking-wider font-semibold font-mono">WhatsApp</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono font-semibold">Instant Chat</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-[var(--text-heading)] group-hover:text-emerald-500 transition-colors truncate">
                      {personalProfile.social.phone}
                    </p>
                  </div>
                </a>

                {/* Direct Phone Call */}
                <a
                  href={`tel:${personalProfile.social.phoneRaw}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl card-inner-item hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center text-teal-500 group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-colors">
                    <Phone size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] text-[var(--text-dim)] uppercase tracking-wider font-semibold font-mono">Direct Call</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-teal-500/15 text-teal-600 dark:text-teal-400 font-mono font-semibold">Available</span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-[var(--text-heading)] group-hover:text-emerald-500 transition-colors truncate">
                      {personalProfile.social.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl card-inner-item">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center text-teal-500">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--text-dim)] uppercase tracking-wider font-semibold font-mono">Location</span>
                    <p className="text-xs sm:text-sm font-medium text-[var(--text-heading)]">
                      {personalProfile.location.label}
                    </p>
                  </div>
                </div>

                <a
                  href={personalProfile.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl card-inner-item hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:text-black transition-colors">
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--text-dim)] uppercase tracking-wider font-semibold font-mono">Personal Website</span>
                    <p className="text-xs sm:text-sm font-medium text-[var(--text-heading)] group-hover:text-emerald-500 transition-colors">
                      mustafaofficial.com
                    </p>
                  </div>
                </a>

                <a
                  href={personalProfile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl card-inner-item hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white dark:group-hover:text-black transition-colors">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--text-dim)] uppercase tracking-wider font-semibold font-mono">LinkedIn</span>
                    <p className="text-xs sm:text-sm font-medium text-[var(--text-heading)] group-hover:text-emerald-500 transition-colors">
                      in/developer-mustafa
                    </p>
                  </div>
                </a>

                <a
                  href={personalProfile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl card-inner-item hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 dark:bg-zinc-800 flex items-center justify-center text-white group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black transition-colors">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-[var(--text-dim)] uppercase tracking-wider font-semibold font-mono">GitHub</span>
                    <p className="text-xs sm:text-sm font-medium text-[var(--text-heading)] group-hover:text-emerald-500 transition-colors">
                      github.com/developer-mustafa
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--card-inner-border)] text-xs text-[var(--text-dim)] font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2" />
              <span>Available for select engineering opportunities & consulting.</span>
            </div>
          </motion.div>

          {/* Contact Form - 7 Cols */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-[var(--text-heading)] tracking-tight mb-6">
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 font-mono">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[var(--input-bg)] border text-xs sm:text-sm text-[var(--text-heading)] placeholder-[var(--text-dim)] focus:outline-none transition-colors ${
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
                  <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-[var(--input-bg)] border text-xs sm:text-sm text-[var(--text-heading)] placeholder-[var(--text-dim)] focus:outline-none transition-colors ${
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
                <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 font-mono">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineering Collaboration / Inquiry"
                  className={`w-full px-4 py-2.5 rounded-xl bg-[var(--input-bg)] border text-xs sm:text-sm text-[var(--text-heading)] placeholder-[var(--text-dim)] focus:outline-none transition-colors ${
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
                <label className="block text-xs font-medium text-[var(--text-muted)] mb-1.5 font-mono">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, software engineering role, or institutional scope..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-[var(--input-bg)] border text-xs sm:text-sm text-[var(--text-heading)] placeholder-[var(--text-dim)] focus:outline-none transition-colors resize-none ${
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
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-700 dark:text-amber-300 text-xs space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
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
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle size={16} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle size={16} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-400 text-white dark:text-black font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all duration-200 active:scale-95 disabled:opacity-50"
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
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
