import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins against the SAME gsap core instance that every
// component imports from this module. This must run on the client before any
// tween using `scrollTrigger:` is created, otherwise ScrollTrigger never
// initializes its internals (gsap.core.context) and the first ScrollTrigger
// constructor throws "TypeError: <minified> is not a function" in production,
// alongside the "Invalid property scrollTrigger ... Missing plugin?" warnings.
//
// NOTE: this file is listed in package.json "sideEffects" so this top-level
// registration is NOT tree-shaken out of the production bundle. Do not remove
// that entry — the app ships with "sideEffects": false, and without the
// allowlist entry the bundler drops this block and ScrollTrigger breaks in
// the production/Vercel build while still working in `vite dev`.
//
// useGSAP is a React hook, not a GSAP plugin — it must never be passed to
// gsap.registerPlugin(). Only real plugins (ScrollTrigger) are registered here.
if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  // Default ScrollTrigger configuration
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });
}

export { gsap, ScrollTrigger, useGSAP };
