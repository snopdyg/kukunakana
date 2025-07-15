import Image from "next/image"
import { Button } from "@/components/ui/button"
// Removed import for Twitter icon as it's no longer used

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="/images/lizlord-hero.jpeg"
        alt="LIZLORD surrounded by money"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 brightness-50"
      />
      <div className="relative z-10 p-4 md:p-8 rounded-lg max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">LIZLORD</h1>
        <p className="text-3xl md:text-5xl font-bold mb-6 text-blue-400 drop-shadow-md">$LORD</p>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          King of Cold-Blooded Coins. $LORD reigns the Base pools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <a href="https://link-to-buy-lord.com" target="_blank" rel="noopener noreferrer">
              Buy $LORD
            </a>
          </Button>
          {/* Removed the "Learn More" button */}
        </div>
      </div>
    </section>
  )
}
