"use client";

import { useEffect, useState } from "react";
import { line } from "@/lib/theme";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#impact", label: "Impact" },
  { href: "#get-involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 901px)");
    const onBreakpointChange = () => setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onBreakpointChange);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onBreakpointChange);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-sm"
      style={{ background: "oklch(0.98 0.006 95 / 0.92)", borderColor: line }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-8 py-4 max-[600px]:px-5">
        <a href="#home" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/S-CONET%20Logo.svg" alt="S-CONET" className="h-9 w-auto" />
        </a>

        <nav className="flex flex-wrap gap-6 text-sm font-semibold max-[900px]:hidden">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#get-involved"
          className="btn-rust rounded-full px-[18px] py-2.5 text-sm font-bold text-white max-[900px]:hidden"
        >
          Partner With Us
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-md max-[900px]:flex"
        >
          <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav-panel"
        className="hidden overflow-hidden transition-[grid-template-rows] duration-300 ease-out max-[900px]:grid"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <nav
            className="flex flex-col gap-1 border-t px-8 py-4 text-base font-semibold max-[600px]:px-5"
            style={{ borderColor: line }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#get-involved"
              onClick={() => setOpen(false)}
              className="btn-rust mt-2 rounded-full px-5 py-3 text-center text-sm font-bold text-white"
            >
              Partner With Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
