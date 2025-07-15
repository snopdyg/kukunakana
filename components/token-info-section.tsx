import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TokenInfoSection() {
  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 overflow-hidden">
      <Image
        src="/images/mountain-bg.jpeg"
        alt="Mountain background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-50"
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600">Token Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white border-blue-600 text-gray-800 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">Ticker</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-extrabold">$LORD</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-blue-600 text-gray-800 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-extrabold">Base Chain</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-blue-600 text-gray-800 shadow-xl col-span-1 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600">Contract Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg md:text-xl font-mono break-all">0x... (Coming Soon)</p>
              <p className="text-sm text-gray-600 mt-2">Stay tuned for the official contract address.</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
          <Image
            src="/images/lizlord-laser-eyes.jpeg"
            alt="LIZLORD with laser eyes"
            width={300}
            height={300}
            className="rounded-full shadow-2xl"
          />
          <div className="text-left max-w-xl">
            <h3 className="text-3xl font-bold text-blue-600 mb-4">Our Philosophy</h3>
            <p className="text-lg text-gray-600 mt-4">
              LIZLORD is a pure meme play. We believe in organic growth, community power, and the sheer force of meme
              magic. Join us as we conquer the Base pools!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
