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
} from "lucide-react"
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar"

interface AppSidebarProps {
  setSelectedFeature: (feature: string | null) => void
  activeFeature: string | null
}

export default function AppSidebar({ setSelectedFeature, activeFeature }: AppSidebarProps) {
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
    <>
      <SidebarHeader className="flex items-center gap-2 p-4">
        {/* Placeholder for $MOAT logo */}
        <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
          $M
        </div>
        <span className="text-xl font-semibold">$MOAT Tools</span>
      </SidebarHeader>
      <SidebarContent className="flex-1 overflow-auto">
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  onClick={() => setSelectedFeature(item.feature)}
                  isActive={activeFeature === item.feature}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator className="mx-4" />
      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setSelectedFeature("contact-us")}
              isActive={activeFeature === "contact-us"}
            >
              <MessageCircleIcon className="h-5 w-5" />
              <span>Contact Us</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  )
}
