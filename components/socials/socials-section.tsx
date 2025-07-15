import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SocialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600">Join the LIZLORD Army!</h2>
        <div className="flex flex-col items-center justify-center gap-8">
          <Image
            src="/images/lizlord-avatar.jpeg"
            alt="LIZLORD avatar"
            width={200}
            height={200}
            className="rounded-full shadow-2xl"
          />
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Stay updated with the latest from the King of Cold-Blooded Coins. Follow us on X and Telegram for hot charts
            and supreme domination!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              variant="ghost" // Changed to ghost variant for no background
              className="text-blue-600 hover:text-blue-800 text-xl px-6 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <a
                href="https://twitter.com/LIZLORD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image src="/images/twitter-icon.png" alt="Twitter Icon" width={32} height={32} className="mr-3" />
                Follow $LORD on X
              </a>
            </Button>
            <Button
              asChild
              variant="ghost" // Changed to ghost variant for no background
              className="text-blue-600 hover:text-blue-800 text-xl px-6 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <a
                href="https://t.me/LIZLORD_Official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image src="/images/telegram-icon.webp" alt="Telegram Icon" width={32} height={32} className="mr-3" />
                Join Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
