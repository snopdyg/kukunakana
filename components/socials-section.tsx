import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Twitter } from "lucide-react"

export function SocialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-green-400">Join the LIZLORD Army!</h2>
        <div className="flex flex-col items-center justify-center gap-8">
          <Image
            src="/images/lizlord-avatar.jpeg"
            alt="LIZLORD avatar"
            width={200}
            height={200}
            className="rounded-full shadow-2xl border-4 border-green-500"
          />
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Stay updated with the latest from the King of Cold-Blooded Coins. Follow us on X for hot charts and supreme
            domination!
          </p>
          <Button
            asChild
            className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-10 py-7 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <a href="https://twitter.com/LIZLORD" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-3 h-7 w-7" />
              Follow $LORD on X
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
