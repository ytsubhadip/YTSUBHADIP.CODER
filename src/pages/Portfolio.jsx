import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Cursor } from "@/components/Cursor";
import { GsapMagnetic } from "@/components/GsapMagnetic";
import { MarqueeSection } from "@/components/MarqueeSection";
import { ProjectCard } from "@/components/ProjectCard";
import { StatCard } from "@/components/StatCard";
import { TechBadge } from "@/components/TechBadge";
import { GITHUB, LINKEDIN, PORTRAIT_URL, projects, techStack } from "@/data/portfolio";

export function Portfolio() {
  const rootRef = useRef(null);
  const progressBarRef = useRef(null);
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const portraitRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
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
                src={PORTRAIT_URL}
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
