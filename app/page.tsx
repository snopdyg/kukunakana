"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import AppSidebar from "@/components/app-sidebar"
import Header from "@/components/header"
import FeaturePageContent from "@/components/feature-page-content"
import { Card } from "@/components/ui/card"
import { PlusIcon, Repeat2Icon } from "lucide-react"
import ToolCard from "@/components/tool-card"
import { SidebarProvider, Sidebar } from "@/components/ui/sidebar"

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)

  const renderMainContent = () => {
    if (selectedFeature) {
      return (
        <div className="max-w-4xl mx-auto px-4">
          {" "}
          {/* Centered container with max-width and horizontal padding */}
          <FeaturePageContent featureName={selectedFeature} />
        </div>
      )
    } else {
      // Initial dashboard content
      return (
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {" "}
          {/* Centered container with max-width, horizontal padding, and reduced vertical spacing */}
          {/* Large Card: $SMOAT Batch Tools */}
          <section className="relative bg-card rounded-lg p-6 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-lg">
            <div className="relative z-10 space-y-3 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                $SMOAT <span className="text-primary">Batch Tools</span>
              </h1>
              <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-base">
                Automatic Execution for DeFi Operations
              </p>
              <Button className="bg-primary hover:bg-blue-700 text-white px-5 py-2 rounded-md text-base shadow-md">
                Use Now
              </Button>
            </div>
            <div className="relative z-10 mt-6 md:mt-0 md:ml-6">
              {/* Placeholder for abstract illustration */}
              <Image
                src="/images/smoat-thumbs-up-transparent.png"
                alt="Abstract illustration of DeFi tools"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </section>
          {/* Feature Cards Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              title="Efficient Execution"
              description="Streamline your DeFi operations with automated, gas-optimized transactions for maximum efficiency."
              iconSrc="/images/smoat-crossed-arms-transparent.png"
            />
            <FeatureCard
              title="Security Assurance"
              description="Built with robust security protocols and audited smart contracts to protect your assets and data."
              iconSrc="/images/smoat-robe-sitting-transparent.jpeg"
            />
            <FeatureCard
              title="Real-Time Support"
              description="Access 24/7 dedicated support to assist you with any queries or technical challenges."
              iconSrc="/images/smoat-phone-smiling-transparent.jpeg"
            />
          </section>
          {/* Main Hero Section */}
          <section className="bg-gray-900 rounded-lg p-6 text-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              The Best Dev Tools On <span className="text-blue-400">BASE</span>
            </h1>
            <p className="text-gray-300 text-base max-w-xl mx-auto">
              Simple · Secure · Efficient, helping you achieve more with less effort to successfully build your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4 py-3">
              <div className="flex items-center gap-2 text-blue-400 border border-blue-600 rounded-full px-3 py-1 bg-blue-950/50 text-sm">
                <Image src="/placeholder.svg?height=16&width=16" alt="BASE" width={16} height={16} />
                BASE
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/smoat-robe-transparent.jpeg"
                alt="Dev tools illustration"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </section>
          {/* Create Token / Create Liquidity Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-gray-800 border-gray-700 text-gray-50 p-5 flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-full">
                <PlusIcon className="h-7 w-7 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-1">Create Token</h3>
                <p className="text-gray-300 text-xs">
                  No programming required! Quickly issue a peer-to-peer BASE_ETH Chain token in one minute, safe and
                  convenient with automatic open-source.
                </p>
              </div>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-gray-50 p-5 flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-full">
                <Repeat2Icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-1">Create Liquidity</h3>
                <p className="text-gray-300 text-xs">
                  Easily launch trading! Quickly create a liquidity pool and initiate trading of your token on DEX
                  platforms like PancakeSwap.
                </p>
              </div>
            </Card>
          </section>
          {/* Convenient and Efficient Tools Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              Convenient and Efficient Tools
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">HOT</span>
            </h2>
            <p className="text-gray-300 max-w-xl text-base">
              Multiple convenient tools providing you with an efficient operational experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ToolCard
                title="Batch Generate Wallets"
                description="Safely generate multiple wallets, manage private keys with one click, supporting multi-information export."
                iconSrc="/images/smoat-phone-smoat-transparent.png"
              />
              <ToolCard
                title="Multisender (One-to-Many)"
                description="Efficiently send! Quickly transfer tokens to multiple addresses in batches—distribute airdrops, transfer tokens into the main account, saving time and gas."
                iconSrc="/images/smoat-thumbs-up-transparent.png"
              />
              <ToolCard
                title="Multisender (Many-to-One)"
                description="Conveniently send! One click, supporting management efficiency, batch transfer tokens into the main account, saving time and gas."
                iconSrc="/images/smoat-cigarette-transparent.png"
              />
              <ToolCard
                title="Create Liquidity and Buy"
                description="Secure and instant automatic trading, supporting multiple purchases, ensuring 100% of the earliest transaction and only."
                iconSrc="/images/smoat-flexing-arm-transparent.png"
              />
            </div>
          </section>
          {/* Footer */}
          <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800 mt-8">
            $SMOAT Tools ©2024
          </footer>
        </div>
      )
    }
  }

  return (
    <SidebarProvider>
      <Sidebar className="bg-card">
        <AppSidebar setSelectedFeature={setSelectedFeature} activeFeature={selectedFeature} />
      </Sidebar>
      <div className="flex flex-col flex-1 lg:ml-64">
        <Header />
        <main className="flex-1 pt-6 pb-8">{renderMainContent()}</main>
      </div>
    </SidebarProvider>
  )
}
