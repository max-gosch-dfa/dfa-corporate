"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!consent) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
        setConsent(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-primary-light">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          <span className="text-accent/50">/ </span>
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-white/60">
          <a
            href="mailto:max.gosch@desertfrontieradvisors.com"
            className="text-accent underline underline-offset-2 transition-colors hover:text-accent-light"
          >
            max.gosch@desertfrontieradvisors.com
          </a>
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/80"
            >
              Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white/80"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-accent"
              placeholder="How can we help?"
            />
          </div>
          <div className="flex items-start gap-3">
            <input
              id="consent"
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-white/30 bg-white/5 text-accent accent-accent"
            />
            <label htmlFor="consent" className="text-xs leading-5 text-white/50">
              I agree that this data may be stored and processed for the purpose
              of establishing contact. I am aware that I can revoke my consent
              at any time.
            </label>
          </div>

          <button
            type="submit"
            disabled={!consent || status === "sending"}
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-accent">
              Message sent. We&apos;ll be in touch.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Please try emailing directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
