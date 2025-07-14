import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowToBuySection() {
  return (
    <section className="py-8 md:py-12 px-2 max-w-2xl mx-auto w-full">
      {" "}
      {/* Adjusted padding */}
      <h2 className="text-3xl font-bold mb-6 text-center">How To Buy</h2>
      <div className="flex justify-center gap-4 mb-8">
        <Button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white">Buy on Ape Store</Button>
      </div>
      <p className="text-base md:text-lg text-gray-700 mb-6">
        ROSY is exclusively listed on <span className="font-bold">Ape Store</span>, the new dex on Base Network.
      </p>
      <p className="text-base md:text-lg text-gray-700 mb-4">Follow these steps to get some ROSY on Ape Store:</p>
      <ol className="list-decimal list-inside space-y-3 text-base md:text-lg text-gray-700">
        {" "}
        {/* Adjusted font size */}
        <li>
          Get a{" "}
          <Link
            href="https://metamask.io/download"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            MetaMask
          </Link>{" "}
          wallet.
        </li>
        <li>
          Go to{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Ape Store
          </Link>{" "}
          and connect your wallet.
        </li>
        <li>
          Select <span className="font-bold">WETH/ROSY</span> as your trading pair, then swap! You may need to enter the
          ROSY contract address until ROSY is whitelisted.
        </li>
      </ol>
    </section>
  )
}
