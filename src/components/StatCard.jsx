import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function StatCard({ stat, label, isCounter = false, targetValue = 0, suffix = "" }) {
  const cardRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(stat);
  useGSAP(
    () => {
      if (!isCounter || !cardRef.current) return;
      const counter = { val: 0 };
      gsap.to(counter, {
        val: targetValue,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 92%",
          once: true,
        },
        onUpdate: () => {
          setDisplayValue(`${Math.round(counter.val)}${suffix}`);
        },
      });
    },
    { scope: cardRef },
  );
  return (
    <div
      ref={cardRef}
      className="stat-card group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all hover:border-accent/60 hover:shadow-lg"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <p className="font-display text-3xl font-bold text-accent">{displayValue}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
