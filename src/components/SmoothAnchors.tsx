"use client";

import { useEffect } from "react";

/**
 * Native browser "jump to #fragment" plus CSS scroll-behavior:smooth is
 * flaky in Chrome — the scroll gets interrupted almost immediately by
 * hydration/layout work and never reaches the target. Driving it from JS
 * instead makes it reliable and lets us skip the animation entirely for
 * users who prefer reduced motion.
 */
export default function SmoothAnchors() {
  useEffect(() => {
    console.log("[SmoothAnchors] mounted");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "auto" });
    }

    const onClick = (e: MouseEvent) => {
      console.log("[SmoothAnchors] click", e.target);
      const anchor = (e.target as HTMLElement).closest?.(
        "a[href^='#']",
      ) as HTMLAnchorElement | null;
      console.log("[SmoothAnchors] anchor match", anchor);
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      console.log("[SmoothAnchors] target el", hash, el);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
