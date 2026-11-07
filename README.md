# Subhadip Bar - Motion Portfolio

A portfolio built with React, TanStack Start, Vite, Tailwind CSS, and GSAP. It was
created with [Lovable](https://lovable.dev) and can also be developed locally or
deployed to Vercel.

- **Live app:** https://moryn-mouse-portfolio.lovable.app
- **GitHub:** https://github.com/ytsubhadip
- **LinkedIn:** https://www.linkedin.com/in/subhadip-bar/

## Project structure

```text
src/
  assets/          Local assets
  components/      Shared and UI components
  hooks/           React hooks
  lib/             Shared utilities and error handling
  routes/          TanStack file-based routes
  routeTree.gen.ts Generated route tree - do not edit manually
  router.tsx       Client router setup
  server.ts        SSR server entry
  start.ts         TanStack Start middleware
  styles.css       Global styles
public/            Static files served from the site root
vite.config.ts     Vite, TanStack Start, and Nitro configuration
vercel.json        Vercel build and install configuration
```

Add pages as route files in `src/routes/`; the route tree is generated during
development/build. Keep static files in `public/` and import bundled assets from
`src/assets/`.

## Local development

Requires Node.js and npm.

```sh
npm ci
npm run dev
```

Useful commands:

```sh
npm run build
npm run preview
npm run lint
```

## Deploy to Vercel

1. Import this Git repository in Vercel and leave the project root set to the
   repository root.
2. Keep the commands from `vercel.json`: `npm ci` for installation and
   `npm run build` for production builds.
3. Deploy. Nitro's Vercel preset writes the server-rendered app in Vercel's
   Build Output format; no static-only rewrite or output-directory override is
   needed.

`vite.config.ts` selects Nitro's `vercel` preset for normal production builds.
Lovable's sandbox build configuration continues to select its own Cloudflare
target. Add any future secrets or public environment variables in the Vercel
project settings; do not commit them to the repository.

## Lovable

Continue editing in the [Lovable project](https://lovable.dev/projects/5c02fbe5-e077-42b4-93a5-7e9fb6ce858a).
Changes synced from Lovable remain in this repository.
