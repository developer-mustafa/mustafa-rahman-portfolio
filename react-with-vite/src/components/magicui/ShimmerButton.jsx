export default function ShimmerButton({
  children,
  onClick,
  className = "",
  shimmerColor = "#34d399",
  borderRadius = "12px",
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative isolate flex items-center justify-center overflow-hidden whitespace-nowrap border border-emerald-500/40 bg-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-400 font-semibold text-white dark:text-black transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-emerald-500/25 ${className}`}
      style={{ borderRadius }}
      {...props}
    >
      {/* Shimmer light reflection flare */}
      <div
        className="absolute -inset-full w-[250%] h-[250%] pointer-events-none animate-[shimmer-spin_4s_linear_infinite] opacity-35 group-hover:opacity-75 transition-opacity"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 310deg, ${shimmerColor} 340deg, transparent 360deg)`
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
