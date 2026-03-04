export default function Hero() {
  return (
    <section className="bg-primary pt-16">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Desert Frontier Advisors
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Leading the way where maps end,{" "}
            <span className="text-accent">
              charting routes that lead to value.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Desert Frontier Advisors is a specialist advisory firm providing
            transaction and strategic advice, grounded in disciplined execution and practical experience.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#advisory"
              className="rounded-md bg-accent px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent/90"
            >
              Explore Our Services
            </a>
            <a
              href="https://delfos.desertfrontieradvisors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
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
        </div>
      </div>
    </section>
  );
}
