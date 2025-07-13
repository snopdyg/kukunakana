"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
// Removed Lucide React imports for Twitter and Telegram

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-24 bg-forest-background bg-cover bg-center bg-fixed flex flex-col md:flex-row items-center justify-center gap-8 px-4"
    >
      <div className="relative w-full md:w-1/3 flex justify-center">
        <Image src="/olo-head.png" alt="OLO Character Head" width={350} height={350} className="z-10" />
        {/* Removed placeholder images */}
      </div>
      <div className="relative w-full md:w-2/3 bg-memecoin-blue p-8 md:p-12 rounded-lg shadow-xl border-4 border-white text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-6 text-white">About Meme</h2>
        <p className="text-lg text-white mb-6 leading-relaxed">
          Born from the depths of meme culture, OLO emerged as the ultimate union of community and creativity. It's not
          just a cryptocurrency; it's a movement, a celebration of internet humor, and a testament to the power of
          collective laughter. Join us as we redefine the digital landscape, one meme at a time.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button className="bg-white text-memecoin-blue font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:bg-gray-200 transition-colors">
            Buy OLO
          </Button>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-gray-200">
              <Image src="/twitter-icon.png" alt="Twitter Icon" width={32} height={32} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-gray-200">
              <Image src="/telegram-icon.webp" alt="Telegram Icon" width={32} height={32} />
            </Button>
          </div>
        </div>
        {/* Removed placeholder images */}
      </div>
      {/* Removed placeholder images */}
    </section>
  )
}
