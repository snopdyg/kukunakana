"use client"

import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react" // Removed Info import
import { useState } from "react"

export default function TokenomicsSection() {
  const contractAddress = "0x66 (Coming Soon)"
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset copied state after 2 seconds
  }

  return (
    <section className="py-8 md:py-12 px-2 max-w-2xl mx-auto w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">Tokenomics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg">
        <div className="flex items-center">
          <span className="font-semibold w-24">Symbol:</span>
          <span className="flex-1">ROSY</span>
          <Button variant="outline" size="sm" className="ml-2 bg-transparent">
            Chart
          </Button>
        </div>
        <div className="flex items-center">
          <span className="font-semibold w-24">Contract:</span>
          <span className="flex-1 truncate">{contractAddress}</span>
          <Button variant="ghost" size="icon" onClick={handleCopy} className="ml-2">
            <Copy className="h-4 w-4" />
            <span className="sr-only">{copied ? "Copied!" : "Copy contract address"}</span>
          </Button>
        </div>
        <div className="flex items-center col-span-full">
          <span className="font-semibold w-24">Total Supply:</span>
          <span className="flex-1">1,000,000,000</span>
          {/* Removed Info icon */}
        </div>
      </div>
    </section>
  )
}
