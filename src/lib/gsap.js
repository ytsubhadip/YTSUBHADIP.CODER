import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Single place where GSAP plugins are registered. Every component imports gsap,
// ScrollTrigger and useGSAP from here so registration always happens first.
gsap.registerPlugin(ScrollTrigger, useGSAP);

ScrollTrigger.config({
  limitCallbacks: true,
  ignoreMobileResize: true,
});

export { gsap, ScrollTrigger, useGSAP };
