import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TokenInfoSection } from "@/components/token-info-section"
import { SocialsSection } from "@/components/socials/socials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {" "}
      {/* Changed base background to a very light gray */}
      <main>
        <HeroSection />
        <AboutSection />
        <TokenInfoSection />
        <SocialsSection />
      </main>
      <Footer />
    </div>
  )
}
