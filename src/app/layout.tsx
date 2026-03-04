import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desert Frontier Advisors \u2013 FZCO | Advisory & Transaction Services",
  description:
    "Specialist advisory firm providing M&A, transaction, and strategic consulting services. Home of Desert Frontier Beta \u2014 transparent, low-cost beta portfolios.",
  openGraph: {
    title: "Desert Frontier Advisors \u2013 FZCO",
    description:
      "M&A advisory, strategic consulting, and transparent beta portfolios.",
    siteName: "Desert Frontier Advisors",
    url: "https://desertfrontieradvisors.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
