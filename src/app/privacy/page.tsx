import Navbar from "@/components/Navbar";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-primary pb-16 pt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/70">
            <p>Last updated: March 2026</p>

            <h2 className="text-lg font-semibold text-white">
              1. Data We Collect
            </h2>
            <p>
              When you use our contact form we collect your name, email address,
              and any message you provide. We also collect standard web analytics
              data (page views, browser type, referring URL) through cookies if
              you consent.
            </p>

            <h2 className="text-lg font-semibold text-white">
              2. Legal Basis
            </h2>
            <p>
              We process your data based on your explicit consent (contact form
              submission, cookie acceptance) and our legitimate interest in
              operating and improving our website. This policy is designed to
              comply with GDPR and UAE PDPL requirements.
            </p>

            <h2 className="text-lg font-semibold text-white">
              3. How We Use Your Data
            </h2>
            <p>
              Contact form submissions are used solely to respond to your
              inquiry. Analytics data helps us understand site usage and improve
              the experience. We do not sell, rent, or share your personal data
              with third parties for marketing purposes.
            </p>

            <h2 className="text-lg font-semibold text-white">
              4. Third-Party Services
            </h2>
            <p>
              We use Resend for email delivery and Vercel for hosting. These
              services process data on our behalf under their respective privacy
              policies and data processing agreements.
            </p>

            <h2 className="text-lg font-semibold text-white">
              5. Data Retention
            </h2>
            <p>
              Contact form data is retained for up to 24 months after your last
              interaction. Analytics data is retained in aggregate form
              indefinitely. You may request deletion of your personal data at
              any time.
            </p>

            <h2 className="text-lg font-semibold text-white">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, correct, delete, or export your
              personal data. You may withdraw consent at any time. To exercise
              these rights, contact us at the address below.
            </p>

            <h2 className="text-lg font-semibold text-white">
              7. International Transfers
            </h2>
            <p>
              Your data may be processed in countries outside the UAE, including
              the United States (Vercel hosting) and the EU (Resend). We ensure
              appropriate safeguards are in place for all international
              transfers.
            </p>

            <h2 className="text-lg font-semibold text-white">8. Cookies</h2>
            <p>
              We use essential cookies required for site functionality and
              optional analytics cookies to understand usage patterns. You can
              manage your cookie preferences through the consent banner shown on
              your first visit.
            </p>

            <h2 className="text-lg font-semibold text-white">
              9. Security Measures
            </h2>
            <p>
              We implement industry-standard security measures including HTTPS
              encryption, security headers (HSTS, X-Frame-Options,
              X-Content-Type-Options), and access controls to protect your data.
            </p>

            <h2 className="text-lg font-semibold text-white">10. Contact</h2>
            <p>
              For privacy-related inquiries, contact us at{" "}
              <a
                href="mailto:privacy@desertfrontieradvisors.com"
                className="text-accent underline"
              >
                privacy@desertfrontieradvisors.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
