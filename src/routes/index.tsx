import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Cursor } from "@/components/Cursor";
import { GsapMagnetic } from "@/components/GsapMagnetic";
import portrait from "@/assets/subhadip-portrait.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Subhadip Bar " },
      {
        name: "description",
        content:
          "Portfolio of Subhadip Bar, a data science student from Kolkata building AI, RAG and machine learning products — projects, skills and contact.",
      },
      { property: "og:title", content: "Subhadip Bar — Data Science & AI Developer" },
      {
        property: "og:description",
        content:
          "AI, RAG and machine learning projects by Subhadip Bar, data science student in Kolkata.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://avatars.githubusercontent.com/u/159522165?v=4" },
      { name: "twitter:image", content: "https://avatars.githubusercontent.com/u/159522165?v=4" },
    ],
  }),
  component: Portfolio,
});

const GITHUB = "https://github.com/ytsubhadip";
const LINKEDIN = "https://www.linkedin.com/in/subhadip-bar/";

const projects = [
  {
    name: "Tube AI API",
    blurb: "An API that turns YouTube content into AI-usable intelligence. My most starred repo.",
    stack: ["Python", "FastAPI", "LLM"],
    stars: 10,
    href: "https://github.com/ytsubhadip/Tube-AI-API",
  },
  {
    name: "X-Compiler",
    blurb:
      "A SaaS platform that digitises college programming lab exams — secure, automated end-to-end workflow.",
    stack: ["JavaScript", "SaaS", "Node"],
    stars: 2,
    href: "https://github.com/ytsubhadip/X-Compiler",
    live: "https://ml-compiler-074b.onrender.com/",
  },
  {
    name: "YouTube RAG ChatBot",
    blurb: "Chat with any YouTube video using retrieval-augmented generation over transcripts.",
    stack: ["Python", "RAG", "Vector DB"],
    stars: 1,
    href: "https://github.com/ytsubhadip/YouTube_RAG_ChatBot",
  },
  {
    name: "RAG AI Teaching Assistant",
    blurb: "A study companion that answers course questions grounded in real lecture material.",
    stack: ["Python", "LangChain", "Embeddings"],
    stars: 1,
    href: "https://github.com/ytsubhadip/RAG-AI-Teaching-assistant",
  },
  {
    name: "SafeWalk",
    blurb: "Map app that predicts the safety condition of a destination before you travel.",
    stack: ["Python", "Maps", "ML"],
    stars: 1,
    href: "https://github.com/ytsubhadip/SafeWalk",
    live: "https://error-404-team-not-found.onrender.com/",
  },
  {
    name: "Insurance Buy AI Model API",
    blurb:
      "Deployed ML model predicting insurance purchase intent, served as an API + Streamlit app.",
    stack: ["Python", "scikit-learn", "Streamlit"],
    stars: 1,
    href: "https://github.com/ytsubhadip/Insurance-Buy-AI-Model-API",
    live: "https://insuranceml.streamlit.app/",
  },
  {
    name: "Aadhar Data Analysis",
    blurb: "UIDAI Hackathon submission — large-scale demographic data analysis and visualisation.",
    stack: ["Jupyter", "Pandas", "Analytics"],
    stars: 1,
    href: "https://github.com/ytsubhadip/Aadhar-Data-Analysis",
  },
  {
    name: "Early Stage Dementia Detection",
    blurb: "Screening model that flags early cognitive decline signals from clinical features.",
    stack: ["ML", "Healthcare", "Python"],
    stars: 1,
    href: "https://github.com/ytsubhadip/Early-Stage-Dementia-Detection",
  },
  {
    name: "Movie Recommendation System",
    blurb: "Production-ready recommender with pipelines, packaging and deployment structure.",
    stack: ["Python", "MLOps", "Pipelines"],
    stars: 0,
    href: "https://github.com/ytsubhadip/production-ready-movie-recommendation-system",
  },
];

interface TechItem {
  name: string;
  slug?: string | undefined;
  iconUrl?: string | undefined;
}

interface TechGroup {
  group: string;
  items: TechItem[];
}

const techStack: TechGroup[] = [
  {
    group: "AI / ML",
    items: [
      { name: "PyTorch", slug: "pytorch" },
      { name: "scikit-learn", slug: "scikitlearn" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "LangChain", slug: "langchain" },
      { name: "TensorFlow", slug: "tensorflow" },
    ],
  },
  {
    group: "Databases & Vector",
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      {
        name: "ChromaDB",
        iconUrl: "https://avatars.githubusercontent.com/u/102604246?s=64&v=4",
      },
      {
        name: "Pinecone",
        iconUrl: "https://avatars.githubusercontent.com/u/63333334?s=64&v=4",
      },
    ],
  },
  {
    group: "Data & Backend",
    items: [
      { name: "Python", slug: "python" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
      { name: "Flask", slug: "flask" },
      { name: "Streamlit", slug: "streamlit" },
      { name: "Jupyter", slug: "jupyter" },
    ],
  },
  {
    group: "Web & Ops",
    items: [
      { name: "React", slug: "react" },
      { name: "JavaScript", slug: "javascript" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
      { name: "Git", slug: "git" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Vercel", slug: "vercel" },
      { name: "Netlify", slug: "netlify" },
      { name: "Render", slug: "render" },
      { name: "Railway", slug: "railway" },
    ],
  },
];

interface TechBadgeProps {
  name: string;
  slug?: string | undefined;
  iconUrl?: string | undefined;
}

function TechBadge({ name, slug, iconUrl }: TechBadgeProps) {
  const badgeRef = useRef<HTMLSpanElement>(null);
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
          (e.currentTarget as HTMLElement).style.display = "none";
        }}
      />
      {name}
    </span>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

function StatCard({
  stat,
  label,
  isCounter = false,
  targetValue = 0,
  suffix = "",
}: {
  stat: string;
  label: string;
  isCounter?: boolean;
  targetValue?: number;
  suffix?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
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

function MarqueeSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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

function Portfolio() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const heroNameChars = "SUBHADIP BAR".split("");

  useGSAP(
    () => {
      // 1. Reading progress bar pinned to top
      if (progressBarRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.15,
            },
          },
        );
      }

      // 2. Header entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: -80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
        );
        gsap.fromTo(
          ".header-nav-item",
          { opacity: 0, y: -12 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.06,
            duration: 0.6,
            delay: 0.35,
            ease: "power2.out",
          },
        );
      }

      // 3. Hero Section Entrance & Scroll Scrub
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTimeline
        .fromTo(
          ".hero-pill",
          { y: -24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2,
          },
        )
        .fromTo(
          ".hero-char",
          {
            yPercent: 120,
            rotateX: -65,
            opacity: 0,
          },
          {
            yPercent: 0,
            rotateX: 0,
            opacity: 1,
            stagger: 0.035,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.5",
        )
        .fromTo(
          ".hero-subheading",
          {
            y: 35,
            opacity: 0,
            scale: 0.94,
            filter: "blur(10px)",
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
          },
          "-=0.6",
        )
        .fromTo(
          ".hero-bio",
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.5",
        )
        .fromTo(
          ".hero-cta-btn",
          {
            y: 20,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        );

      // Hero scrub parallax as user scrolls down
      if (heroRef.current && heroContentRef.current) {
        gsap.to(heroContentRef.current, {
          y: 130,
          opacity: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 4. Selected Work Section
      if (workRef.current) {
        gsap.fromTo(
          ".work-header",
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: workRef.current,
              start: "top 78%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".project-card",
          { y: 45, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.08,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: workRef.current,
              start: "top 75%",
              once: true,
            },
          },
        );
      }

      // 5. About Section
      if (aboutRef.current) {
        if (portraitRef.current) {
          gsap.fromTo(
            portraitRef.current,
            { scale: 0.9, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 78%",
                once: true,
              },
            },
          );

          // Parallax drift on portrait image
          gsap.to(portraitRef.current, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }

        gsap.fromTo(
          ".about-content",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 78%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".stat-card",
          { y: 25, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 75%",
              once: true,
            },
          },
        );
      }

      // 6. Tech Stack Section
      if (skillsRef.current) {
        gsap.fromTo(
          ".skills-header",
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 78%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".tech-group",
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 75%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".tech-badge",
          { scale: 0.85, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.015,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 75%",
              once: true,
            },
          },
        );
      }

      // 7. Contact Section
      if (contactRef.current) {
        gsap.fromTo(
          ".contact-badge",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 78%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".contact-heading",
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 78%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".contact-cta",
          { y: 20, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 75%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          "footer",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: "footer",
              start: "top 95%",
              once: true,
            },
          },
        );
      }

      // Recalculate ScrollTrigger positions after fonts and layout settle
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      return () => clearTimeout(timer);
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-x-hidden bg-background text-foreground"
    >
      <Cursor />

      {/* GSAP Scroll progress bar */}
      <div
        ref={progressBarRef}
        aria-hidden
        className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-accent via-accent-2 to-accent"
      />

      {/* Header */}
      <header
        ref={headerRef}
        className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="header-nav-item font-display text-sm font-bold tracking-[0.2em] transition-transform hover:scale-105"
          >
            SB<span className="text-accent">.</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {["work", "about", "skills", "contact"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="header-nav-item capitalize transition-colors hover:text-accent"
              >
                {s}
              </a>
            ))}
          </div>
          <GsapMagnetic
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="header-nav-item rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            GitHub
          </GsapMagnetic>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="top"
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center px-6 pt-24"
      >
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div ref={heroContentRef} className="relative z-10 w-full max-w-6xl will-change-transform">
          <p className="hero-pill flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
            Kolkata, India — ILEAD
          </p>

          <h1
            className="mt-6 font-display text-[clamp(2.6rem,11vw,9rem)] font-bold leading-[0.86]"
            style={{ perspective: "1000px" }}
          >
            <span className="flex flex-wrap overflow-hidden py-1">
              {heroNameChars.map((c, i) => (
                <span
                  key={i}
                  className="hero-char inline-block whitespace-pre will-change-transform"
                >
                  {c}
                </span>
              ))}
            </span>
            <span className="hero-subheading text-gradient block will-change-transform">
              DATA × AI
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="hero-bio max-w-md text-base leading-relaxed text-muted-foreground">
              Final year data science student at ILEAD , Kolkata building retrieval-augmented AI
              assistants, machine-learning APIs and full products that actually ship — 40+ public
              repos and counting.
            </p>
            <div className="flex flex-wrap gap-3">
              <GsapMagnetic
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="hero-cta-btn rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
              >
                GitHub ↗
              </GsapMagnetic>
              <GsapMagnetic
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="hero-cta-btn rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
              >
                LinkedIn ↗
              </GsapMagnetic>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Work Section */}
      <section id="work" ref={workRef} className="mx-auto max-w-6xl px-6 py-28">
        <div className="work-header flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold md:text-6xl">Selected work</h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-accent" />
          </div>
          <p className="text-sm text-muted-foreground">Pulled from my public GitHub</p>
        </div>

        <div className="projects-grid mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[1.2fr_1fr]">
          <div className="about-content">
            <div
              ref={portraitRef}
              className="group relative mb-8 inline-block overflow-hidden rounded-2xl border border-border shadow-2xl transition-transform will-change-transform"
            >
              <img
                src={portrait.url}
                alt="Subhadip Bar — portrait"
                className="h-auto w-full max-w-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>

            <h2 className="text-4xl font-bold md:text-5xl">About</h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-accent" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I'm Subhadip — a 3rd-year data science undergrad in Kolkata studying at ILEAD. I spend
              most of my time turning models into things people can use: RAG chatbots over video and
              lecture content, ML APIs, hackathon builds like an Aadhaar data analysis for the UIDAI
              hackathon, and a SaaS exam platform for college labs.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I care about shipping — deployed apps on Render, Vercel, Railway plus open source
              contributions to projects like Keploy.
            </p>
          </div>

          <div className="stats-grid grid grid-cols-2 gap-4 self-center">
            <StatCard
              stat="40+"
              label="Public repos"
              isCounter={true}
              targetValue={40}
              suffix="+"
            />
            <StatCard stat="3rd yr" label="Data science" />
            <StatCard
              stat="15+"
              label="AI / ML builds"
              isCounter={true}
              targetValue={15}
              suffix="+"
            />
            <StatCard stat="OSS" label="Keploy contributor" />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" ref={skillsRef} className="mx-auto max-w-6xl px-6 py-28">
        <div className="skills-header flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold md:text-6xl">Tech stack</h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-accent" />
          </div>
          <p className="text-sm text-muted-foreground">Tools I build with every day</p>
        </div>

        <div className="skills-grid mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((s) => (
            <div
              key={s.group}
              className="tech-group h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all hover:border-accent/60 hover:card-glow"
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-accent">{s.group}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <TechBadge key={it.name} name={it.name} slug={it.slug} iconUrl={it.iconUrl} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="relative overflow-hidden border-t border-border"
      >
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
        <div
          aria-hidden
          className="contact-glow pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-32 text-center">
          <p className="contact-badge text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Open to internships & collaborations
          </p>
          <h2 className="contact-heading mt-6 font-display text-[clamp(2.2rem,8vw,6rem)] font-bold leading-none">
            Let's build <span className="text-gradient">something</span>
          </h2>
          <div className="contact-cta mt-10 flex flex-wrap justify-center gap-4">
            <GsapMagnetic
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
            >
              github.com/ytsubhadip
            </GsapMagnetic>
            <GsapMagnetic
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
            >
              linkedin.com/in/subhadip-bar
            </GsapMagnetic>
          </div>
        </div>

        <footer className="relative border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Subhadip Bar — powered by GSAP & ScrollTrigger.
        </footer>
      </section>
    </div>
  );
}
