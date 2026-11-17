import { useRef } from "react";
import { gsap } from "@/lib/gsap";

export function TechBadge({ name, slug, iconUrl }) {
  const badgeRef = useRef(null);
  const src = iconUrl || (slug ? `https://cdn.simpleicons.org/${slug}` : "");
  const handleMouseEnter = () => {
    if (!badgeRef.current) return;
    gsap.to(badgeRef.current, {
      y: -4,
      scale: 1.1,
      rotate: -2,
      duration: 0.3,
      ease: "back.out(2)",
      overwrite: "auto",
    });
  };
  const handleMouseLeave = () => {
    if (!badgeRef.current) return;
    gsap.to(badgeRef.current, {
      y: 0,
      scale: 1,
      rotate: 0,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  };
  return (
    <span
      ref={badgeRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-tech-badge
      className="tech-badge inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-secondary-foreground transition-colors hover:border-accent/60 will-change-transform"
    >
      <img
        src={src}
        alt={`${name} logo`}
        loading="lazy"
        className="h-4 w-4 rounded-xs object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      {name}
    </span>
  );
}
