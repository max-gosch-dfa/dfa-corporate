export default function Footer() {
  return (
    <footer className="border-t border-surface-muted bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-semibold text-white">
                Desert Frontier
              </span>
              <span
                className="text-lg font-semibold"
                style={{
                  background: "linear-gradient(135deg, #B08D57 0%, #D4B87A 60%, #F5EDE0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Advisors
              </span>
            </div>
            <p className="mt-1 text-sm text-accent">
              Incorporated in Dubai
            </p>
            <p className="mt-3 text-sm text-white/60">
              Specialist advisory firm providing transaction and strategic
              advice, grounded in disciplined execution and practical experience.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              <span className="text-accent/60">/ </span>Services
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                
                  href="#advisory"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  M&amp;A Advisory
                </a>
              </li>
              <li>
                
                  href="#consulting"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Strategic Consulting
                </a>
              </li>
              <li>
                
                  href="https://delfos.desertfrontieradvisors.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Desert Frontier Beta
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              <span className="text-accent/60">/ </span>Company
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                
                  href="#about"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                
                  href="#contact"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              <span className="text-accent/60">/ </span>Legal
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                
                  href="/terms"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                
                  href="/privacy"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Empty 5th column for grid alignment */}
          <div />
        </div>

        {/* Disclaimer */}
        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="text-xs text-white/40 leading-5">
            <strong>Disclaimer:</strong> Desert Frontier Advisors – FZCO,
            incorporated in Dubai. This platform is for educational and
            informational purposes only. It does not constitute investment
            advice. Desert Frontier Beta publishes model portfolios for
            informational purposes only. Past performance is not indicative of
            future results. All investment involves risk, including possible loss
            of principal.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Desert Frontier Advisors – FZCO.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}