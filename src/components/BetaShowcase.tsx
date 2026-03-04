const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
    title: "5 Model Portfolios",
    description:
      "Risk-parity inspired allocations across equities, bonds, gold, commodities, and TIPS.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" /><path d="M5 20V10" /><path d="M9 20V4" /><path d="M13 20v-8" /><path d="M17 20V8" /><path d="M21 20v-5" />
      </svg>
    ),
    title: "25+ Years of Data",
    description:
      "Backtested with proxy reconstructions from FRED economic data back to 1997.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 8h20" /><path d="M6 12h4" /><path d="M6 16h8" />
      </svg>
    ),
    title: "Monthly Dispatch",
    description:
      "Performance updates, macro commentary, and allocation changes delivered monthly.",
  },
];

export default function BetaShowcase() {
  return (
    <section className="scroll-mt-20 bg-surface-warm">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          <span className="text-accent/50">/ </span>
          Desert Frontier Beta
        </p>
        <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl">
          Transparent, low-cost beta portfolios built on risk-parity principles.
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary/70">
          Desert Frontier Beta publishes model portfolios that give investors
          and corporate treasuries access to institutional-quality
          diversification &mdash; without the institutional fees.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="rounded-xl bg-white p-8 shadow-sm"
            >
              <div className="text-accent">{feat.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {feat.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary/60">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://delfos.desertfrontieradvisors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent-light"
          >
            Explore Desert Frontier Beta &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
