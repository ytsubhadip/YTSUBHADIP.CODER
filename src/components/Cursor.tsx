import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setActive(!!el?.closest("a, button, [data-magnetic]"));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[100] hidden md:block rounded-full bg-accent mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%", width: 8, height: 8 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[99] hidden md:block rounded-full border border-accent/60"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: active ? 64 : 34, height: active ? 64 : 34, opacity: active ? 1 : 0.6 }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-0 hidden md:block rounded-full blur-[90px]"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: 420,
          height: 420,
          background: "var(--gradient-glow)",
          opacity: 0.5,
        }}
      />
    </>
  );
}
