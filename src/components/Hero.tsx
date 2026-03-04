export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary">
      {/* Desert gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary" />
      {/* Abstract desert pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 150% 80% at 50% 100%, #B08D57 0%, transparent 70%),
            radial-gradient(ellipse 100% 60% at 80% 80%, #D4B87A 0%, transparent 50%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-accent">
          Desert Frontier Advisors
        </p>
        <h1 className="text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
          Leading the way where maps end,
          <br />
          <span className="font-normal text-accent">
            charting routes that lead to value.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
          Desert Frontier Advisors is a specialist advisory firm providing
          transaction and strategic advice, grounded in disciplined execution
          and practical experience.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#advisory"
            className="rounded-full border border-accent px-8 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
          >
            Explore Our Services &darr;
          </a>
          <a
            href="https://delfos.desertfrontieradvisors.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent-light"
          >
            Desert Frontier Beta &rarr;
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
}
