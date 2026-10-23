import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Cursor } from "@/components/Cursor";
import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/subhadip-portrait.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Subhadip Bar — Data Science & AI Developer Portfolio" },
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
    blurb:
      "An API that turns YouTube content into AI-usable intelligence. My most starred repo.",
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
    blurb: "Deployed ML model predicting insurance purchase intent, served as an API + Streamlit app.",
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

const techStack = [
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
    group: "Data",
    items: [
      { name: "Python", slug: "python" },
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
      { name: "Jupyter", slug: "jupyter" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "FastAPI", slug: "fastapi" },
      { name: "Flask", slug: "flask" },
      { name: "Streamlit", slug: "streamlit" },
    ],
  },
  {
    group: "Web & Ops",
    items: [
      { name: "JavaScript", slug: "javascript" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
      { name: "Git", slug: "git" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Vercel", slug: "vercel" },
      { name: "Render", slug: "render" },
    ],
  },
];

function TechBadge({ name, slug, index }: { name: string; slug: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, type: "spring", stiffness: 320, damping: 20 }}
      whileHover={{ scale: 1.12, y: -3, rotate: -2 }}
      className="inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-secondary-foreground transition-colors hover:border-accent/60"
    >
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={`${name} logo`}
        loading="lazy"
        className="h-4 w-4"
      />
      {name}
    </motion.span>
  );
}

function Magnetic({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <motion.a
      data-magnetic
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </motion.a>
  );
}

function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const name = "SUBHADIP BAR".split("");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Cursor />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm font-bold tracking-[0.2em]">
            SB<span className="text-accent">.</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {["work", "about", "skills", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="capitalize transition-colors hover:text-accent">
                {s}
              </a>
            ))}
          </div>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            data-magnetic
            className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            GitHub
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center px-6 pt-24"
      >
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <motion.div style={{ y: heroY, opacity: heroFade }} className="relative z-10 w-full max-w-6xl">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
              Kolkata, India — ILEAD
            </p>
          </Reveal>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,11vw,9rem)] font-bold leading-[0.86]">
            <span className="flex flex-wrap">
              {name.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.04, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block whitespace-pre"
                >
                  {c}
                </motion.span>
              ))}
            </span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-gradient block"
            >
              DATA × AI
            </motion.span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal delay={0.9}>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                Second-year data science student building retrieval-augmented AI assistants,
                machine-learning APIs and full products that actually ship — 37 public repos and
                counting.
              </p>
            </Reveal>
            <Reveal delay={1}>
              <div className="flex flex-wrap gap-3">
                <Magnetic href={GITHUB}>GitHub ↗</Magnetic>
                <Magnetic href={LINKEDIN}>LinkedIn ↗</Magnetic>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </section>

      {/* Marquee */}
      <section className="relative overflow-hidden border-y border-border py-5">
        <motion.div
          className="flex gap-10 whitespace-nowrap font-display text-lg uppercase tracking-[0.25em] text-muted-foreground"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {Array.from({ length: 2 }).map((_, r) => (
            <span key={r} className="flex gap-10">
              {["RAG", "LLM apps", "Python", "Machine learning", "FastAPI", "Data analysis", "MLOps"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-10">
                    {t}
                    <span className="text-accent">✳</span>
                  </span>
                ),
              )}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-bold md:text-6xl">Selected work</h2>
            <p className="text-sm text-muted-foreground">Pulled from my public GitHub</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <motion.a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                data-magnetic
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/60 hover:card-glow"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold leading-tight group-hover:text-accent">
                      {p.name}
                    </h3>
                    <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                      ★ {p.stars}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                  {p.live && (
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      Live
                    </span>
                  )}
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div>
              <motion.div
                data-magnetic
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative mb-8 inline-block overflow-hidden rounded-2xl border border-border"
              >
                <img
                  src={portrait.url}
                  alt="Subhadip Bar — portrait"
                  className="h-auto w-full max-w-[320px] object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
              </motion.div>
              <h2 className="text-4xl font-bold md:text-5xl">About</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                I'm Subhadip — a data science undergrad in Kolkata studying at ILEAD. I spend most of
                my time turning models into things people can use: RAG chatbots over video and
                lecture content, ML APIs, hackathon builds like an Aadhaar data analysis for the
                UIDAI hackathon, and a SaaS exam platform for college labs.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                I care about shipping — deployed apps on Render, Vercel and Streamlit, plus open
                source contributions to projects like Keploy.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "37", v: "Public repos" },
                { k: "2nd yr", v: "Data science" },
                { k: "10+", v: "AI / ML builds" },
                { k: "OSS", v: "Keploy contributor" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-background p-6">
                  <p className="font-display text-3xl font-bold text-accent">{s.k}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tech stack */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-bold md:text-6xl">Tech stack</h2>
            <p className="text-sm text-muted-foreground">Tools I build with every day</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border p-6 transition-colors hover:border-accent/60 hover:card-glow">
                <h3 className="text-sm uppercase tracking-[0.2em] text-accent">{s.group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((it, bi) => (
                    <TechBadge key={it.slug} name={it.name} slug={it.slug} index={bi} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Open to internships & collaborations
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,8vw,6rem)] font-bold leading-none">
              Let's build <span className="text-gradient">something</span>
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Magnetic href={GITHUB}>github.com/ytsubhadip</Magnetic>
              <Magnetic href={LINKEDIN}>linkedin.com/in/subhadip-bar</Magnetic>
            </div>
          </Reveal>
        </div>
        <footer className="relative border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Subhadip Bar — built with motion.
        </footer>
      </section>
    </div>
  );
}
