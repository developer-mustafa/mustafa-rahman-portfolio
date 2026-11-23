export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top subtle ambient emerald spotlight */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] sm:h-[600px] rounded-full blur-[140px] transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.75) 0%, rgba(20, 184, 166, 0.35) 40%, transparent 70%)",
          opacity: "var(--spotlight-opacity)"
        }}
      />

      {/* Side subtle secondary accent glow */}
      <div 
        className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[160px] transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.6) 0%, transparent 70%)",
          opacity: "calc(var(--spotlight-opacity) * 0.7)"
        }}
      />

      {/* Lower subtle tertiary glow */}
      <div 
        className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[160px] transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, transparent 70%)",
          opacity: "calc(var(--spotlight-opacity) * 0.6)"
        }}
      />

      {/* Grid pattern overlay with smooth mask */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)"
        }}
      />
    </div>
  );
}
