# Subhadip Bar - Motion Portfolio

A single-page portfolio built with React, Vite, Tailwind CSS v4, GSAP (ScrollTrigger) and Motion.

- **GitHub:** https://github.com/ytsubhadip
- **LinkedIn:** https://www.linkedin.com/in/subhadip-bar/

## Project structure

```text
index.html            Page shell, meta tags, fonts
src/
  main.jsx            React entry
  App.jsx             Root component
  styles.css          Tailwind import and design tokens
  pages/Portfolio.jsx Page layout and scroll animations
  components/         Cursor, GsapMagnetic, ProjectCard, StatCard, TechBadge, MarqueeSection
  data/portfolio.js   Projects, tech stack and links
  lib/gsap.js         GSAP plugin registration (import gsap from here)
public/               Static files
```

## Scripts

```bash
npm ci            # install exact locked dependencies
npm run dev       # dev server at http://localhost:8080
npm run build     # production build into dist/
npm run preview   # serve dist/ at http://localhost:4173
npm run lint
```

## Deploy to Vercel

Framework preset: Vite. Install `npm ci`, build `npm run build`, output `dist`.
`vercel.json` already sets these and rewrites all paths to `index.html`.
Add any future secrets as Vercel environment variables; do not commit them.
