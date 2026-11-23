import { motion } from "motion/react";

export default function BorderBeam({
  className = "",
  size = 200,
  duration = 8,
  delay = 0,
  borderWidth = 1.5,
  colorFrom = "#10b981",
  colorTo = "#06b6d4",
  reverse = false,
  initialOffset = 0,
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
      style={{
        borderWidth: `${borderWidth}px`,
        WebkitMaskClip: "padding-box, border-box",
        WebkitMaskComposite: "destination-out",
        WebkitMaskImage: "linear-gradient(transparent, transparent), linear-gradient(#000, #000)",
        maskClip: "padding-box, border-box",
        maskComposite: "intersect",
        maskImage: "linear-gradient(transparent, transparent), linear-gradient(#000, #000)",
      }}
    >
      <motion.div
        className="absolute aspect-square bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent"
        style={{
          width: size,
          offsetPath: "rect(0 auto auto 0 round 16px)",
          "--color-from": colorFrom,
          "--color-to": colorTo,
        }}
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay,
        }}
      />
    </div>
  );
}
