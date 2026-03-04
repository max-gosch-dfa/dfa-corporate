import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy | Desert Frontier Advisors",
  description:
    "Privacy Policy for Desert Frontier Advisors – FZCO. Learn how we collect, use, store, and protect your personal data, your rights under GDPR and UAE PDPL, and how to contact us.",
  openGraph: {
    title: "Privacy Policy | Desert Frontier Advisors",
    description:
      "Privacy Policy governing data collection, processing, and protection on the Desert Frontier Advisors website, published by Desert Frontier Advisors – FZCO, Dubai.",
    siteName: "Desert Frontier Advisors",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-primary pb-16 pt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            <span className="text-accent/60">/ </span>Privacy
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-white/50">Last Updated: March 2026</p>

          {/* Content */}
          <div className="mt-10 space-y-10 text-base leading-7 text-white/70">
            <p>
              This Privacy Policy (&quot;Policy&quot;) describes how Desert
              Frontier Advisors &ndash; FZCO (&quot;DFA&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;), a company registered at
              Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai,
              United Arab Emirates, collects, uses, stores, and protects your
              personal data when you use the Desert Frontier Advisors website
              (the &quot;Site&quot;). By accessing or using the Site, you
              acknowledge that you have read and understood this Policy.
            </p>

            {/* 1. Data We Collect */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                1. Data We Collect
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  When you use our contact form we collect your name, email address,
                  and any message you provide. We also collect standard web analytics
                  data (page views, browser type, referring URL) through cookies if
                  you consent.
                </p>
              </div>
            </section>

            {/* 2. Legal Basis */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                2. Legal Basis
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  We process your data based on your explicit consent (contact form
                  submission, cookie acceptance) and our legitimate interest in
                  operating and improving our website. This policy is designed to
                  comply with GDPR and UAE PDPL requirements.
                </p>
              </div>
            </section>

            {/* 3. How We Use Your Data */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                3. How We Use Your Data
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Contact form submissions are used solely to respond to your
                  inquiry. Analytics data helps us understand site usage and improve
                  the experience. We do not sell, rent, or share your personal data
                  with third parties for marketing purposes.
                </p>
              </div>
            </section>

            {/* 4. Third-Party Services */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                4. Third-Party Services
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  We use Resend for email delivery and Vercel for hosting. These
                  services process data on our behalf under their respective privacy
                  policies and data processing agreements.
                </p>
              </div>
            </section>

            {/* 5. Data Retention */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                5. Data Retention
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Contact form data is retained for up to 24 months after your last
                  interaction. Analytics data is retained in aggregate form
                  indefinitely. You may request deletion of your personal data at
                  any time.
                </p>
              </div>
            </section>

            {/* 6. Your Rights */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                6. Your Rights
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  You have the right to access, correct, delete, or export your
                  personal data. You may withdraw consent at any time. To exercise
                  these rights, contact us at the address below.
                </p>
              </div>
            </section>

            {/* 7. International Transfers */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                7. International Transfers
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  Your data may be processed in countries outside the UAE, including
                  the United States (Vercel hosting) and the EU (Resend). We ensure
                  appropriate safeguards are in place for all international
                  transfers.
                </p>
              </div>
            </section>

            {/* 8. Cookies */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                8. Cookies
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  We use essential cookies required for site functionality and
                  optional analytics cookies to understand usage patterns. You can
                  manage your cookie preferences through the consent banner shown on
                  your first visit.
                </p>
              </div>
            </section>

            {/* 9. Security Measures */}
            <section>
              <h2 className="border-l-2 border-accent pl-4 text-xl font-semibold text-white">
                9. Security Measures
              </h2>
              <div className="mt-4 space-y-4">
                <p>
                  We implement industry-standard security measures including HTTPS
                  encryption, security headers (HSTS, X-Frame-Options,
                  X-Content-Type-Options), and access controls to protect your data.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="rounded-lg border border-accent/20 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">
                Contact Us
              </h2>
              <p className="mt-2">
                For privacy-related inquiries, contact us at:
              </p>
              <p className="mt-3">
                <a
                  href="mailto:privacy@desertfrontieradvisors.com"
                  className="font-medium text-accent transition-colors hover:text-accent/80"
                >
                  privacy@desertfrontieradvisors.com
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
