import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TokenInfoSection } from "@/components/token-info-section"
import { SocialsSection } from "@/components/socials/socials-section"
import { AIChatLinkSection } from "@/components/ai-chat-link-section" // Import the new component
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <main>
        <HeroSection />
        <AboutSection />
        <TokenInfoSection />
        <SocialsSection />
        <AIChatLinkSection /> {/* Add the new section here */}
      </main>
      <Footer />
    </div>
  )
}
