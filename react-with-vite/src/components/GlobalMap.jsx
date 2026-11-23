import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe2, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  Clock, 
  Compass,
  Radio
} from "lucide-react";

const globalFootprint = [
  {
    id: "usa",
    city: "Austin, Texas",
    country: "United States",
    shortLabel: "Austin, USA",
    flag: "🇺🇸",
    role: "Senior Full-Stack Software Engineer",
    company: "SolarWinds",
    workMode: "Remote / Enterprise",
    period: "Current Position",
    statusBadge: "Active Production",
    coordinates: { x: 210, y: 145 },
    labelAnchor: "end",
    labelOffset: { dx: -12, dy: -2 },
    focus: "Architecting enterprise frontend systems, RESTful microservices, and automated CI/CD pipelines across US engineering teams.",
    metrics: "Enterprise Production"
  },
  {
    id: "turkiye",
    city: "Istanbul",
    country: "Türkiye",
    shortLabel: "Istanbul",
    flag: "🇹🇷",
    role: "Full-Stack Software Engineer",
    company: "Software Engineering Firm",
    workMode: "International Tech Hub",
    period: "Previous Scope",
    statusBadge: "International Hub",
    coordinates: { x: 520, y: 125 },
    labelAnchor: "middle",
    labelOffset: { dx: 0, dy: -12 },
    focus: "Engineered scalable web applications, dynamic client interfaces, and secure backend database integrations in an international hub.",
    metrics: "Cross-Border Systems"
  },
  {
    id: "india",
    city: "Hyderabad",
    country: "India",
    shortLabel: "Hyderabad",
    flag: "🇮🇳",
    role: "Full-Stack Web Developer",
    company: "Technology Solutions",
    workMode: "Web Solutions",
    period: "Previous Scope",
    statusBadge: "Full-Lifecycle",
    coordinates: { x: 650, y: 175 },
    labelAnchor: "end",
    labelOffset: { dx: -10, dy: 14 },
    focus: "Developed full-lifecycle web applications, cross-browser client interfaces, database APIs, and staging server pipelines.",
    metrics: "High Performance"
  },
  {
    id: "bangladesh",
    city: "Chattogram / Mirsarai",
    country: "Bangladesh",
    shortLabel: "Bangladesh (Base)",
    flag: "🇧🇩",
    role: "Technical Lead, ICT Lecturer & EdTech Architect",
    company: "Automata Pro & Academic Institutions",
    workMode: "Engineering Base & Pedagogy",
    period: "2014 – Present",
    statusBadge: "Engineering Base",
    coordinates: { x: 710, y: 155 },
    labelAnchor: "start",
    labelOffset: { dx: 12, dy: -4 },
    focus: "Creator of Automata Pro educational ERP; mentored 220+ high-achieving programmers with a decade of foundational ICT leadership.",
    metrics: "Home Base & EdTech"
  }
];

export default function GlobalMap() {
  const [activeNode, setActiveNode] = useState(globalFootprint[0]);

  // Home base coordinates
  const home = globalFootprint.find(n => n.id === "bangladesh").coordinates;

  return (
    <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-emerald-500/25 relative overflow-hidden flex flex-col justify-between">
      {/* Map Header & Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-[var(--card-inner-border)] mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/25">
            <Globe2 size={16} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                Global Footprint
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-[var(--text-heading)] tracking-tight">
              International Engineering Reach
            </h3>
          </div>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex flex-wrap gap-1 p-0.5 rounded-lg glass-panel-subtle border border-[var(--card-inner-border)] self-start sm:self-auto">
          {globalFootprint.map((loc) => {
            const isSelected = activeNode.id === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveNode(loc)}
                className={`px-2 py-0.5 rounded-md text-[10px] font-mono transition-all flex items-center gap-1 ${
                  isSelected
                    ? "bg-emerald-500 text-white dark:text-black font-semibold shadow-xs"
                    : "text-[var(--text-muted)] hover:text-[var(--text-heading)]"
                }`}
              >
                <span>{loc.flag}</span>
                <span>{loc.country.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Compact, High-Density SVG World Vector Map (Height Reduced ~50% for Desktop-Grade Elegance) */}
      <div className="relative w-full h-[210px] sm:h-[240px] rounded-xl bg-[var(--card-inner-bg)] border border-[var(--card-inner-border)] overflow-hidden flex items-center justify-center">
        {/* Ambient Map Glow */}
        <div className="absolute inset-0 bg-radial from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

        <svg
          viewBox="0 0 920 320"
          className="w-full h-full text-[var(--card-border)] select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Grid Coordinates Background */}
          <defs>
            <pattern id="map-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" opacity="0.4" />

          {/* Refined World Continents Outline Silhouette */}
          <g fill="currentColor" opacity="0.3" className="transition-opacity">
            {/* North America */}
            <path d="M120,60 Q170,45 220,55 Q270,70 270,110 Q240,140 190,160 Q150,145 120,105 Z" />
            <path d="M185,165 Q210,180 235,210 Q215,200 190,175 Z" />
            {/* South America */}
            <path d="M245,205 Q295,210 310,250 Q285,305 260,315 Q245,270 245,205 Z" />
            {/* Europe */}
            <path d="M450,70 Q515,65 540,95 Q515,130 460,115 Q435,90 450,70 Z" />
            <path d="M425,75 Q450,65 460,90 Q435,100 425,75 Z" />
            {/* Africa */}
            <path d="M450,130 Q530,130 540,185 Q515,255 470,265 Q425,185 450,130 Z" />
            {/* Asia Main */}
            <path d="M550,65 Q680,50 810,80 Q850,140 760,190 Q700,160 630,165 Q550,150 550,65 Z" />
            {/* India Subcontinent */}
            <path d="M640,145 Q700,145 695,205 Q660,225 635,185 Z" />
            {/* Australia / Oceania */}
            <path d="M740,225 Q820,215 840,260 Q795,295 735,265 Z" />
          </g>

          {/* Curved Great-Circle Laser Arcs from Bangladesh to Tech Hubs */}
          <g>
            {globalFootprint
              .filter(loc => loc.id !== "bangladesh")
              .map((loc) => {
                const target = loc.coordinates;
                const isSelected = activeNode.id === loc.id;
                // Cubic Bezier curve control points
                const midX = (home.x + target.x) / 2;
                const midY = Math.min(home.y, target.y) - 45;
                const pathData = `M ${home.x} ${home.y} Q ${midX} ${midY} ${target.x} ${target.y}`;

                return (
                  <g key={loc.id}>
                    {/* Underlying arc trace */}
                    <path
                      d={pathData}
                      fill="none"
                      stroke={isSelected ? "#10b981" : "currentColor"}
                      strokeOpacity={isSelected ? 0.75 : 0.2}
                      strokeWidth={isSelected ? 1.75 : 1}
                      strokeDasharray="3 3"
                    />
                    {/* Animated laser pulse traveling along the arc */}
                    <path
                      d={pathData}
                      fill="none"
                      stroke={isSelected ? "#34d399" : "#10b981"}
                      strokeWidth={isSelected ? 2.2 : 1.2}
                      className="animate-arc-pulse"
                      strokeOpacity={isSelected ? 0.95 : 0.4}
                    />
                  </g>
                );
              })}
          </g>

          {/* Interactive Geographic Nodes with Offset Callouts (ZERO COLLISION) */}
          {globalFootprint.map((loc) => {
            const isSelected = activeNode.id === loc.id;
            const isHome = loc.id === "bangladesh";
            const color = isHome ? "#10b981" : isSelected ? "#34d399" : "#06b6d4";

            return (
              <g
                key={loc.id}
                className="cursor-pointer group"
                onClick={() => setActiveNode(loc)}
              >
                {/* Concentric Pulsing Radar Ring */}
                <circle
                  cx={loc.coordinates.x}
                  cy={loc.coordinates.y}
                  r={isSelected ? "12" : "8"}
                  fill={color}
                  opacity={isSelected ? "0.35" : "0.15"}
                  className="animate-ping"
                  style={{ animationDuration: isSelected ? "2s" : "3.5s" }}
                />

                {/* Outer Glow Halo */}
                <circle
                  cx={loc.coordinates.x}
                  cy={loc.coordinates.y}
                  r={isSelected ? "7" : "5"}
                  fill={color}
                  opacity="0.5"
                />

                {/* Center Core Node */}
                <circle
                  cx={loc.coordinates.x}
                  cy={loc.coordinates.y}
                  r={isSelected ? "3.5" : "2.5"}
                  fill="#ffffff"
                  stroke={color}
                  strokeWidth="2"
                />

                {/* Precision Offset Label - Directional & Collision-Free */}
                <text
                  x={loc.coordinates.x + loc.labelOffset.dx}
                  y={loc.coordinates.y + loc.labelOffset.dy}
                  textAnchor={loc.labelAnchor}
                  className={`text-[10px] font-mono transition-all select-none ${
                    isSelected
                      ? "fill-emerald-600 dark:fill-emerald-400 font-bold"
                      : "fill-[var(--text-muted)] hover:fill-[var(--text-heading)] font-medium"
                  }`}
                >
                  {loc.flag} {loc.shortLabel}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Live Coordinate Compass Tag */}
        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md glass-panel-subtle border border-[var(--card-inner-border)] text-[9px] font-mono text-[var(--text-dim)] flex items-center gap-1">
          <Compass size={10} className="text-emerald-500" />
          <span>GLOBAL PROJECTION: 22.8° N, 91.5° E (DHAKA)</span>
        </div>

        {/* Live Status indicator */}
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md glass-panel-subtle border border-[var(--card-inner-border)] text-[9px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
          <Radio size={10} className="animate-pulse" />
          <span>ACTIVE NETWORK</span>
        </div>
      </div>

      {/* Active Node Live Detail Card (Compact & High-Density) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.16 }}
          className="mt-3 p-3.5 rounded-xl card-inner-item border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
        >
          <div className="flex items-start gap-2.5 min-w-0">
            <span className="text-2xl shrink-0 p-1 rounded-lg bg-[var(--card-inner-bg)] border border-[var(--card-inner-border)]">
              {activeNode.flag}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-[var(--text-heading)]">
                  {activeNode.role}
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold uppercase tracking-wider">
                  {activeNode.statusBadge}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-[var(--text-dim)] font-mono mt-0.5">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <Building2 size={11} />
                  <span>{activeNode.company}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin size={11} />
                  <span>{activeNode.city}, {activeNode.country}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  <span>{activeNode.period}</span>
                </span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] mt-1.5 leading-snug">
                {activeNode.focus}
              </p>
            </div>
          </div>

          <div className="shrink-0 self-end sm:self-center">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 text-[11px] font-mono font-semibold flex items-center gap-1">
              <CheckCircle2 size={12} />
              <span>{activeNode.metrics}</span>
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
