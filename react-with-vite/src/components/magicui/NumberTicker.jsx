import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

export default function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
  className = ""
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const target = typeof value === "number" ? value : parseInt(value, 10) || 0;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic calculation
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * target);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={`font-mono tabular-nums ${className}`}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
