"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Advisory", href: "#advisory" },
  { label: "Consulting", href: "#consulting" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-surface-muted bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Desert Frontier Advisors"
            width={333}
            height={96}
            className="h-9 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary/70 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://delfos.desertfrontieradvisors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Desert Frontier{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFFFFF 0%, #F5EDE0 60%, #D4B87A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Beta
            </span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-primary md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-surface-muted bg-white px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-1 text-sm font-medium text-primary/70 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://delfos.desertfrontieradvisors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-md bg-accent px-4 py-2 text-center text-sm font-medium text-white"
            >
              Desert Frontier Beta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
