"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Advisory", href: "#advisory" },
  { label: "Consulting", href: "#consulting" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-primary/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Desert Frontier Advisors"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-semibold text-white">
              Desert Frontier
            </span>
            <span className="text-sm font-medium text-accent">Advisors</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://delfos.desertfrontieradvisors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent-light"
          >
            Desert Frontier Beta
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M6 18L18 6" />
              </>
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-primary px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://delfos.desertfrontieradvisors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-full bg-accent px-5 py-2 text-center text-sm font-semibold text-primary"
            >
              Desert Frontier Beta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
