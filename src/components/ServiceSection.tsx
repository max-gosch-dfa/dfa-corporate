interface Capability {
  title: string;
  description: string;
}

interface ServiceSectionProps {
  id: string;
  label: string;
  title: string;
  description: string;
  capabilities: Capability[];
  dark?: boolean;
}

export default function ServiceSection({
  id,
  label,
  title,
  description,
  capabilities,
  dark = false,
}: ServiceSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${dark ? "bg-primary-light" : "bg-primary"}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          <span className="text-accent/50">/ </span>
          {label}
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
          {description}
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-lg border border-white/10 border-l-[3px] border-l-accent p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-accent">
                {cap.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
