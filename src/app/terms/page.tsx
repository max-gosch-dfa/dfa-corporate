import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Terms of Service | Desert Frontier Advisors",
  description:
    "Terms of Service for Desert Frontier Advisors – FZCO. Non-advisory status, limitation of liability, intellectual property, and governing law under DIFC jurisdiction.",
  openGraph: {
    title: "Terms of Service | Desert Frontier Advisors",
    description:
      "Terms of Service governing use of the Desert Frontier Advisors website, published by Desert Frontier Advisors – FZCO, Dubai.",
    siteName: "Desert Frontier Advisors",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-primary pb-16 pt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            <span className="text-accent/60">/ </span>Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-white/50">Last Updated: March 2026</p>

          {/* Content */}
          <div className="mt-10 space-y-10 text-base leading-7 text-white/70">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and
              use of the Desert Frontier Advisors website (the &quot;Site&quot;)
              operated by Desert Frontier Advisors &ndash; FZCO (&quot;DFA&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a company
              registered at Building A1, Dubai Digital Park, Dubai Silicon
              Oasis, Dubai, United Arab Emirates. By accessing or using the Site,
              you agree to be bound by these Terms.
            </p>

            {/* 1. Non-Advisory Status */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                1. Non-Advisory Status
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  DFA publishes model portfolios and research for educational and
                  informational purposes only. We are not registered as an investment
                  adviser with any regulatory body. We do not manage client assets,
                  execute trades on behalf of users, or provide personalised
                  investment advice.
                </p>
                <p>
                  You should consult a qualified and appropriately licensed financial
                  advisor, tax professional, or legal counsel before making any
                  investment decisions. The information provided on this Site should
                  not be relied upon as a substitute for professional advice tailored
                  to your personal circumstances.
                </p>
              </div>
            </section>

            {/* 2. Disclaimer of Warranties */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                2. Disclaimer of Warranties
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  All model portfolios and content are provided &ldquo;AS IS&rdquo;
                  and &ldquo;AS AVAILABLE&rdquo; without warranty of any kind,
                  express or implied. We do not guarantee the accuracy, completeness,
                  or timeliness of any information provided. Past performance, whether
                  actual or hypothetical, is not indicative of future results.
                </p>
              </div>
            </section>

            {/* 3. Limitation of Liability */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                3. Limitation of Liability
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  To the fullest extent permitted by applicable law, DFA shall not be
                  liable for any direct, indirect, incidental, special, consequential,
                  or exemplary damages arising from the use of our model portfolios or
                  any content on this Site. This limitation applies regardless of the
                  theory of liability and even if DFA has been advised of the
                  possibility of such damages.
                </p>
              </div>
            </section>

            {/* 4. Intellectual Property */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                4. Intellectual Property
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  All content, model portfolios, analysis, and materials on this Site
                  are owned by or licensed to DFA and are protected by applicable
                  intellectual property laws. You are granted a limited,
                  non-exclusive, non-transferable licence to access and use the
                  Site for personal, non-commercial purposes only.
                </p>
                <p>
                  You may not scrape, crawl, republish, redistribute, or create
                  derivative works based on the Site&apos;s content without prior
                  written permission from DFA.
                </p>
              </div>
            </section>

            {/* 5. Governing Law & Dispute Resolution */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                5. Governing Law &amp; Dispute Resolution
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  These Terms are governed by the laws of the Dubai International
                  Financial Centre (&quot;DIFC&quot;). Any disputes shall be settled
                  by arbitration administered under the DIFC-LCIA Arbitration Rules.
                  The seat of arbitration shall be Dubai, United Arab Emirates.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="rounded-lg border border-accent/20 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">
                Contact Us
              </h2>
              <p className="mt-2">
                For questions about these Terms, contact us at:
              </p>
              <p className="mt-3">
                <a
                  href="mailto:info@desertfrontieradvisors.com"
                  className="font-medium text-accent transition-colors hover:text-accent/80"
                >
                  info@desertfrontieradvisors.com
                </a>
              </p>
              <p className="mt-2 text-sm text-white/40">
                Desert Frontier Advisors &ndash; FZCO
                <br />
                Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
