import Image from "next/image"
import { CheckCircle } from "lucide-react" // Import CheckCircle icon

export default function RoadmapSection() {
  return (
    <section className="py-8 md:py-12 px-2 max-w-2xl mx-auto w-full">
      {" "}
      {/* Adjusted padding */}
      <h2 className="text-3xl font-bold mb-6 text-center">Roadmap</h2>
      <ul className="space-y-4 text-base md:text-lg text-gray-700">
        {" "}
        {/* Adjusted font size */}
        <li className="flex items-center gap-2 text-gray-500">
          <CheckCircle className="h-6 w-6 text-green-500" />
          <span>Phase 1: Web Launch</span>
        </li>
        <li className="flex items-center gap-2 text-gray-500">
          <CheckCircle className="h-6 w-6 text-green-500" />
          <span>Phase 2: Launch on Ape Store</span>
        </li>
        <li className="flex items-center gap-2">
          <Image src="/placeholder.svg?height=24&width=24" alt="Phase 3 icon" width={24} height={24} />
          <span>Phase 3: DEX Listing</span>
        </li>
        <li className="flex items-center gap-2">
          <Image src="/placeholder.svg?height=24&width=24" alt="Phase 4 icon" width={24} height={24} />
          <span>Phase 4: CEX Listing</span>
        </li>
      </ul>
    </section>
  )
}
