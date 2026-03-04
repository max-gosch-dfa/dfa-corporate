export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Desert Frontier Advisors &ndash;
            FZCO. Dubai.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://delfos.desertfrontieradvisors.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 transition-colors hover:text-white/70"
            >
              Terms
            </a>
            <a
              href="https://delfos.desertfrontieradvisors.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 transition-colors hover:text-white/70"
            >
              Privacy
            </a>
            <a
              href="https://delfos.desertfrontieradvisors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent transition-colors hover:text-accent-light"
            >
              Desert Frontier Beta
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
