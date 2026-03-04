import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import BetaShowcase from "@/components/BetaShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/* ── SVG Icon Components ────────────────────────────────── */

const SearchIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const HandshakeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.5 14.5L16 10l-4 4-4-4L3.5 14.5" /><path d="M3 7h18" /><path d="M3 17h18" />
  </svg>
);

const PuzzleIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.611a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.611-1.611a2.404 2.404 0 0 1 1.704-.706c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
  </svg>
);

const GlobeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
  </svg>
);

const CompassIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const UsersIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GearIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" />
  </svg>
);

const TargetIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);

/* ── Page ────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSection
        id="advisory"
        label="M&A Advisory & Transaction Services"
        description="We help clients source, evaluate, and execute transactions with clarity and discipline — especially in situations where the path ahead is not fully mapped."
        capabilities={[
          {
            title: "Due Diligence & Valuation",
            description:
              "Comprehensive financial and operational due diligence, combined with rigorous valuation frameworks tailored to each opportunity.",
            icon: SearchIcon,
          },
          {
            title: "Deal Structuring & Negotiation",
            description:
              "Designing transaction structures that align incentives and protect value through closing and beyond.",
            icon: HandshakeIcon,
          },
          {
            title: "Post-Acquisition Integration",
            description:
              "Hands-on integration support to capture synergies, retain key talent, and maintain operational continuity.",
            icon: PuzzleIcon,
          },
          {
            title: "Cross-Border Transactions",
            description:
              "Navigating the complexities of international deals across jurisdictions, cultures, and regulatory environments.",
            icon: GlobeIcon,
          },
        ]}
        variant="warm"
      />
      <ServiceSection
        id="consulting"
        label="Strategic & Management Consulting"
        description="We support leadership teams in navigating complexity, shaping strategy, and driving measurable performance — enabling them to grow, adapt, and create lasting value."
        capabilities={[
          {
            title: "Strategic Planning & Market Entry",
            description:
              "Developing actionable strategies for growth, diversification, and new market entry grounded in data and competitive insight.",
            icon: CompassIcon,
          },
          {
            title: "Organizational Design & Alignment",
            description:
              "Structuring teams, governance, and decision-making processes to support strategic objectives.",
            icon: UsersIcon,
          },
          {
            title: "Operational Improvement",
            description:
              "Identifying and eliminating inefficiencies to drive throughput, reduce costs, and improve margins.",
            icon: GearIcon,
          },
          {
            title: "Performance Management",
            description:
              "Building systems to measure, track, and improve organizational performance against strategic goals.",
            icon: TargetIcon,
          },
        ]}
        variant="light"
      />
      <BetaShowcase />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
