"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("dfa_cookie_consent="));
    if (!consent) setVisible(true);
  }, []);

  function accept(level: "all" | "essential") {
    document.cookie = `dfa_cookie_consent=${level}; path=/; max-age=${365 * 24 * 60 * 60}; SameSite=Lax`;
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-surface-muted bg-white p-4 shadow-lg sm:p-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-primary/80">
          We use cookies to improve your experience. Essential cookies are
          required for the site to function. Analytics cookies help us understand
          usage.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => accept("essential")}
            className="rounded-md border border-surface-muted bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-surface-light"
          >
            Essential Only
          </button>
          <button
            onClick={() => accept("all")}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
