import { HeroSection } from "@/components/hero-section"
import { MarqueeBanner } from "@/components/marquee-banner"
import { AboutSection } from "@/components/about-section"
import { HowToBuySection } from "@/components/how-to-buy-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { FAQSection } from "@/components/faq-section"
import { BottomTokenomicsSection } from "@/components/bottom-tokenomics-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-forest-background bg-cover bg-center bg-fixed text-white">
      <HeroSection />
      <MarqueeBanner />
      <AboutSection />
      <MarqueeBanner />
      <HowToBuySection />
      <MarqueeBanner />
      <TokenomicsSection />
      <MarqueeBanner />
      <RoadmapSection />
      <MarqueeBanner />
      <FAQSection />
      <MarqueeBanner />
      <BottomTokenomicsSection />
    </div>
  )
}
