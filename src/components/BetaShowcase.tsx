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
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          <span className="text-accent">/ </span>Desert Frontier Beta
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-primary/60">
          Transparent, low-cost beta portfolios built on risk-parity principles.
          Giving investors and corporate treasuries access to institutional-quality
          diversification &mdash; without the institutional fees.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="rounded-lg border border-surface-muted border-l-[3px] border-l-accent bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <div className="text-accent">{feat.icon}</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {feat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/60">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://delfos.desertfrontieradvisors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Explore Desert Frontier Beta &rarr;
          </a>
          <p className="mt-4 text-xs leading-relaxed text-primary/50">
            Model portfolios for educational purposes only. Not investment
            advice. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </section>
  );
}
