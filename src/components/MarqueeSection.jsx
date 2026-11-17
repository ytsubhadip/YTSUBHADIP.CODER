import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function MarqueeSection() {
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);
  useGSAP(
    () => {
      if (!trackRef.current) return;
      const tween = gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });
      // ScrollTrigger scroll velocity booster
      ScrollTrigger.create({
        trigger: marqueeRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity() / 250);
          gsap.to(tween, {
            timeScale: 1 + Math.min(velocity, 3.5),
            duration: 0.15,
            overwrite: "auto",
          });
          gsap.to(tween, {
            timeScale: 1,
            duration: 0.7,
            delay: 0.2,
            overwrite: "auto",
          });
        },
      });
      const el = marqueeRef.current;
      if (!el) return;
      const slow = () => gsap.to(tween, { timeScale: 0.25, duration: 0.4 });
      const resume = () => gsap.to(tween, { timeScale: 1, duration: 0.4 });
      el.addEventListener("mouseenter", slow);
      el.addEventListener("mouseleave", resume);
      return () => {
        el.removeEventListener("mouseenter", slow);
        el.removeEventListener("mouseleave", resume);
      };
    },
    { scope: marqueeRef },
  );
  return (
    <section
      ref={marqueeRef}
      className="relative overflow-hidden border-y border-border py-5 bg-card/25"
    >
      <div
        ref={trackRef}
        className="flex gap-10 whitespace-nowrap font-display text-lg uppercase tracking-[0.25em] text-muted-foreground will-change-transform"
      >
        {Array.from({ length: 4 }).map((_, r) => (
          <span key={r} className="flex shrink-0 items-center gap-10">
            {[
              "RAG",
              "LLM apps",
              "Python",
              "Machine learning",
              "FastAPI",
              "Data analysis",
              "MLOps",
            ].map((t) => (
              <span key={t} className="flex items-center gap-10">
                <span>{t}</span>
                <span className="text-accent">✳</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}
