import { useRef } from "react";
import { gsap } from "@/lib/gsap";

export function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      scale: 1.02,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 1000,
      overwrite: "auto",
    });
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0.7,
        x: x - 100,
        y: y - 100,
        duration: 0.2,
        ease: "power1.out",
        overwrite: "auto",
      });
    }
  };
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
      overwrite: "auto",
    });
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-project-card
      className="project-card group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60 hover:card-glow will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Dynamic cursor spotlight glow inside card */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute -z-0 h-52 w-52 rounded-full bg-accent/20 blur-2xl opacity-0"
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-tight transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <span className="star-badge shrink-0 rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-xs text-muted-foreground transition-all group-hover:border-accent/50 group-hover:text-accent">
            ★ {project.stars}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.blurb}</p>
      </div>

      <div className="relative z-10 mt-6">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground transition-colors group-hover:bg-secondary/80"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-medium">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-accent hover:translate-x-0.5"
          >
            Code ↗
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-accent transition-opacity hover:opacity-80 hover:translate-x-0.5"
            >
              Live preview ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
