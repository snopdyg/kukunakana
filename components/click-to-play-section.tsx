"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Link from "next/link"

export default function ClickToPlaySection() {
  const [activeTab, setActiveTab] = useState("stake") // 'stake' or 'unstake'

  return (
    <section className="py-8 md:py-12 px-2 max-w-2xl mx-auto w-full">
      {" "}
      {/* Adjusted padding */}
      <h2 className="text-3xl font-bold mb-6 text-center">Click To Play</h2>
      <div className="bg-white border border-gray-300 rounded-lg p-4 md:p-6 shadow-sm flex flex-col items-center">
        {" "}
        {/* Adjusted padding */}
        <Image
          src="/images/floating-island.png"
          alt="Floating island with Rosy"
          width={600}
          height={300}
          className="rounded-lg mb-6 w-full h-auto max-w-full"
        />{" "}
        {/* Ensured image is responsive */}
        <div className="flex space-x-2 mb-4 w-full justify-center">
          {" "}
          {/* Centered buttons */}
          <Button
            variant={activeTab === "stake" ? "default" : "outline"}
            onClick={() => setActiveTab("stake")}
            className="px-4 py-2 text-sm md:px-6 md:py-2 md:text-base flex-1"
          >
            {" "}
            {/* Adjusted button size and flex */}
            Stake
          </Button>
          <Button
            variant={activeTab === "unstake" ? "default" : "outline"}
            onClick={() => setActiveTab("unstake")}
            className="px-4 py-2 text-sm md:px-6 md:py-2 md:text-base flex-1"
          >
            {" "}
            {/* Adjusted button size and flex */}
            Unstake
          </Button>
        </div>
        <div className="w-full max-w-sm space-y-4">
          <div className="flex items-center gap-2">
            <Input type="number" placeholder="Stake Amount" className="flex-1" />
            <Button variant="outline" size="sm">
              Max
            </Button>
          </div>
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Connect</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-6 w-full text-sm md:text-base">
          {" "}
          {/* Changed to 1 column on small screens */}
          <div className="flex justify-between">
            <span>Rosy Balance:</span>
            <span className="text-gray-600">(connect)</span>
          </div>
          <div className="flex justify-between">
            <span>Global Staker:</span>
            <span className="text-gray-600">1,548,791,197.64</span>
          </div>
          <div className="flex justify-between">
            <span>Your Stake:</span>
            <span className="text-gray-600">(connect)</span>
          </div>
          <div className="flex justify-between">
            <span>Total Supply Burned:</span>
            <span className="text-gray-600">1,184,119,270</span>
          </div>
          <div className="flex justify-between">
            <span>Carbon (0.04% APY):</span>
            <span className="text-gray-600">(connect)</span>
          </div>
          <div className="flex justify-between">
            <span>Burn Rate (RPS):</span>
            <span className="text-gray-600">31.4 | 108508</span>
          </div>
        </div>
        <div className="w-full mt-6">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: "30%" }}></div> {/* Example progress */}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>burnnsteak v1.0</span>
            <Link href="#" className="underline">
              Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
