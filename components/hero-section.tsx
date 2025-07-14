import { Info } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="text-center py-8 md:py-12 px-2 max-w-3xl mx-auto">
      {" "}
      {/* Adjusted padding */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Get cozy with Rosy</h1>
      <p className="text-base md:text-xl text-gray-700 leading-relaxed">
        {" "}
        {/* Adjusted font size and line height */}
        <span className="font-bold">Rosy</span> is Rose-tan's pet bulldog and the mascot for the first memecoin on the{" "}
        <span className="font-bold">Base Network</span>
        <Info className="inline-block h-4 w-4 ml-1 text-gray-500" />
        <br className="hidden md:block" /> {/* Line break only on desktop */}
        Rosy embodies the spirit of fun and community, bringing joy and excitement to token holders everywhere. Join our
        growing family on the Base Network and be part of something special!
      </p>
    </section>
  )
}
