import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import BetaShowcase from "@/components/BetaShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSection
        id="advisory"
        label="Advisory"
        title="M&A Advisory & Transaction Services"
        description="We help clients source, evaluate, and execute transactions with clarity and discipline — especially in situations where the path ahead is not fully mapped. Our approach blends financial analysis, strategic insight, and real-world operator perspective to optimize risk-return, anticipate integration challenges early, and deliver deals that work in practice, not just on paper."
        capabilities={[
          {
            title: "Due Diligence & Valuation",
            description:
              "Comprehensive financial and operational due diligence, combined with rigorous valuation frameworks tailored to each opportunity.",
          },
          {
            title: "Deal Structuring & Negotiation",
            description:
              "Designing transaction structures that align incentives and protect value through closing and beyond.",
          },
          {
            title: "Post-Acquisition Integration",
            description:
              "Hands-on integration support to capture synergies, retain key talent, and maintain operational continuity.",
          },
          {
            title: "Cross-Border Transactions",
            description:
              "Navigating the complexities of international deals across jurisdictions, cultures, and regulatory environments.",
          },
        ]}
      />
      <ServiceSection
        id="consulting"
        label="Consulting"
        title="Strategic & Management Consulting"
        description="We support leadership teams in navigating complexity, shaping strategy, and driving measurable performance. From organizational alignment to operational improvement, we provide practical, execution-driven guidance that helps companies move confidently through uncertain terrain — enabling them to grow, adapt, and create lasting value."
        dark
        capabilities={[
          {
            title: "Strategic Planning & Market Entry",
            description:
              "Developing actionable strategies for growth, diversification, and new market entry grounded in data and competitive insight.",
          },
          {
            title: "Organizational Design & Alignment",
            description:
              "Structuring teams, governance, and decision-making processes to support strategic objectives.",
          },
          {
            title: "Operational Improvement",
            description:
              "Identifying and eliminating inefficiencies to drive throughput, reduce costs, and improve margins.",
          },
          {
            title: "Performance Management",
            description:
              "Building systems to measure, track, and improve organizational performance against strategic goals.",
          },
        ]}
      />
      <BetaShowcase />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
