import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Desert Frontier Advisors | Advisory & Transaction Services",
  description:
    "Specialist advisory firm providing M&A, transaction, and strategic consulting services. Home of Desert Frontier Beta — transparent, low-cost beta portfolios.",
  openGraph: {
    title: "Desert Frontier Advisors",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
