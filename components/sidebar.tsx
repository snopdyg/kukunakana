"use client"
import {
  PlusIcon,
  WalletIcon,
  BarChartIcon,
  LayoutGridIcon,
  Repeat2Icon,
  SendIcon,
  MessageCircleIcon,
  HomeIcon,
  TwitterIcon,
  SendHorizonalIcon,
} from "lucide-react"

interface SidebarProps {
  setSelectedFeature: (feature: string | null) => void
  activeFeature: string | null
}

export default function Sidebar({ setSelectedFeature, activeFeature }: SidebarProps) {
  const menuItems = [
    { name: "Home", icon: HomeIcon, feature: null }, // Home to show initial dashboard
    { name: "Token Creation", icon: PlusIcon, feature: "token-creation" },
    { name: "Batch Wallet Generation", icon: WalletIcon, feature: "batch-wallet-generation" },
    { name: "Batch Query Balance", icon: BarChartIcon, feature: "batch-query-balance" },
    { name: "Multisender (One-to-Many)", icon: LayoutGridIcon, feature: "multisender-one-to-many" },
    { name: "Multisender (Many-to-One)", icon: Repeat2Icon, feature: "multisender-many-to-one" },
    { name: "Many-to-Many Transfers", icon: SendIcon, feature: "many-to-many-transfers" },
    { name: "Batch Swap", icon: Repeat2Icon, feature: "batch-swap" },
  ]

  return (
    <div className="hidden lg:flex flex-col w-64 bg-card text-gray-50 h-screen p-4 fixed shadow-lg">
      <div className="flex items-center gap-2 mb-8">
        {/* Removed Placeholder for $SMOAT logo */}
        <span className="text-xl font-semibold">$SMOAT Tools</span>
      </div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setSelectedFeature(item.feature)}
            className={`flex items-center gap-3 rounded-md px-3 py-2 w-full text-left transition-colors ${
              activeFeature === item.feature
                ? "bg-primary/30 text-primary font-semibold"
                : "text-gray-300 hover:bg-primary/20 hover:text-primary"
            }`}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </button>
        ))}
      </nav>
      <div className="mt-auto pt-4 border-t border-gray-800">
        <button
          onClick={() => setSelectedFeature("contact-us")}
          className={`flex items-center gap-3 rounded-md px-3 py-2 w-full text-left transition-colors ${
            activeFeature === "contact-us"
              ? "bg-primary/30 text-primary font-semibold"
              : "text-gray-300 hover:bg-primary/20 hover:text-primary"
          }`}
        >
          <MessageCircleIcon className="h-5 w-5" />
          Contact Us
        </button>
        <button
          onClick={() => window.open("https://t.me/smoat_tools", "_blank")}
          className="flex items-center gap-3 rounded-md px-3 py-2 w-full text-left transition-colors text-gray-300 hover:bg-primary/20 hover:text-primary"
        >
          <SendHorizonalIcon className="h-5 w-5" />
          Telegram
        </button>
        <button
          onClick={() => window.open("https://twitter.com/smoat_tools", "_blank")}
          className="flex items-center gap-3 rounded-md px-3 py-2 w-full text-left transition-colors text-gray-300 hover:bg-primary/20 hover:text-primary"
        >
          <TwitterIcon className="h-5 w-5" />
          Twitter
        </button>
      </div>
    </div>
  )
}
