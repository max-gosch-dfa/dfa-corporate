interface Capability {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceSectionProps {
  id: string;
  label: string;
  description: string;
  capabilities: Capability[];
  variant?: "warm" | "light";
}

export default function ServiceSection({
  id,
  label,
  description,
  capabilities,
  variant = "warm",
}: ServiceSectionProps) {
  const bgClass = variant === "warm" ? "bg-surface-warm" : "bg-surface-light";

  return (
    <section id={id} className={`scroll-mt-20 ${bgClass}`}>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          <span className="text-accent">/ </span>{label}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-primary/60">
          {description}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-lg border border-surface-muted border-l-[3px] border-l-accent bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <div className="text-accent">{cap.icon}</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-primary/60">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
