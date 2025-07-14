import SiteHeader from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import TokenomicsSection from "@/components/tokenomics-section"
import ClickToPlaySection from "@/components/click-to-play-section" // Re-added import
import HowToBuySection from "@/components/how-to-buy-section"
import RoadmapSection from "@/components/roadmap-section"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-200 text-gray-800">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 md:py-12">
        {" "}
        {/* Added container for consistent max-width and padding */}
        <HeroSection />
        <TokenomicsSection />
        <ClickToPlaySection /> {/* Re-added component */}
        <HowToBuySection />
        <RoadmapSection />
      </main>
      <SiteFooter />
    </div>
  )
}
