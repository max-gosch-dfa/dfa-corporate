import Navbar from "@/components/Navbar";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-primary pb-16 pt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/70">
            <p>Last updated: March 2026</p>

            <h2 className="text-lg font-semibold text-white">
              1. Non-Advisory Status
            </h2>
            <p>
              Desert Frontier Advisors publishes model portfolios for
              educational and informational purposes only. We are not registered
              as an investment adviser with any regulatory body. We do not manage
              client assets, execute trades, or provide personalized investment
              advice.
            </p>

            <h2 className="text-lg font-semibold text-white">
              2. Disclaimer of Warranties
            </h2>
            <p>
              All model portfolios and content are provided &ldquo;AS IS&rdquo;
              without warranty of any kind, express or implied. We do not
              guarantee the accuracy, completeness, or timeliness of any
              information provided.
            </p>

            <h2 className="text-lg font-semibold text-white">
              3. Limitation of Liability
            </h2>
            <p>
              Desert Frontier Advisors shall not be liable for any investment
              losses, direct, indirect, incidental, or consequential damages
              arising from the use of our model portfolios or any content on
              this site. This limitation applies even if we have been advised of
              the possibility of such damages.
            </p>

            <h2 className="text-lg font-semibold text-white">
              4. Intellectual Property
            </h2>
            <p>
              All content, model portfolios, analysis, and materials on this
              site are owned by Desert Frontier Advisors. Personal,
              non-commercial use only. No scraping, republishing, or
              redistribution without written permission.
            </p>

            <h2 className="text-lg font-semibold text-white">
              5. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of the Dubai International
              Financial Centre (DIFC). Any disputes shall be resolved through
              arbitration under DIFC Arbitration Rules.
            </p>

            <h2 className="text-lg font-semibold text-white">6. Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a
                href="mailto:info@desertfrontieradvisors.com"
                className="text-accent underline"
              >
                info@desertfrontieradvisors.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
