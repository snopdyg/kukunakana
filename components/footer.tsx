import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-gray-400 text-center">
      <div className="container mx-auto px-4">
        <Image src="/images/lizlord-head.png" alt="LIZLORD logo" width={80} height={80} className="mx-auto mb-4" />
        <p className="text-lg mb-2">LIZLORD ($LORD)</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved. Base Chain Domination.</p>
        {/* Removed: <p className="text-xs mt-2">No financial advice. Just memes.</p> */}
      </div>
    </footer>
  )
}
