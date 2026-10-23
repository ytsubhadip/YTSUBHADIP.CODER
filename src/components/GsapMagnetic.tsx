import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

interface GsapMagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function GsapMagnetic({
  children,
  strength = 0.35,
  className = "",
  href,
  target,
  rel,
  onClick,
}: GsapMagneticProps) {
  const elRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!elRef.current) return;
    const rect = elRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(elRef.current, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (!elRef.current) return;
    gsap.to(elRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1.1, 0.35)",
      overwrite: "auto",
    });
  };

  if (href) {
    return (
      <a
        ref={(node) => {
          elRef.current = node;
        }}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-magnetic
        className={`inline-flex items-center transition-colors will-change-transform ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      ref={(node) => {
        elRef.current = node;
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-magnetic
      className={`inline-flex items-center transition-colors will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
