"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const handleLearnMoreClick = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full h-[700px] md:h-[800px] bg-forest-background bg-cover bg-center bg-fixed overflow-hidden flex flex-col items-center justify-center text-center pt-20 pb-10">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>
      {/* Removed placeholder images */}

      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide uppercase">
          THE ONLY COIN YOU NEED TO BUY IS
        </h3>
        <h1 className="text-white text-6xl md:text-8xl font-extrabold tracking-tighter uppercase drop-shadow-lg">
          BASE OLO
        </h1>
        <div className="flex gap-4 mt-4">
          <a
            href="https://ape.store/base/0x1862ce534324982ff7708f59f12ca1832e729b89"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-memecoin-blue text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
              Buy Now
            </Button>
          </a>
          <Button
            variant="outline"
            className="border-2 border-white text-white font-bold text-lg px-8 py-6 rounded-full bg-transparent hover:bg-white hover:text-memecoin-blue transition-colors"
            onClick={handleLearnMoreClick} // Added onClick handler
          >
            Learn More
          </Button>
        </div>
        <Image
          src="/olo-smartwatch.png"
          alt="BOLO Character" // Updated alt text
          width={500}
          height={500}
          className="mt-8 md:mt-16 animate-float-up"
        />
      </div>
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-reverse {
          0% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0px); opacity: 1; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 3s ease-in-out infinite; }
        .animate-float-up { animation: float-up 1s ease-out forwards; }
      `}</style>
    </section>
  )
}
