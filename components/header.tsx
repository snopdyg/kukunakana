"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Header() {
  const { toast } = useToast()
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState<string | null>(null)

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          // Check if accounts are already connected
          const accounts = await window.ethereum.request({ method: "eth_accounts" })
          if (accounts.length > 0) {
            setAccount(accounts[0])
            setIsConnected(true)
          }

          // Listen for account changes
          window.ethereum.on("accountsChanged", (newAccounts: string[]) => {
            if (newAccounts.length > 0) {
              setAccount(newAccounts[0])
              setIsConnected(true)
              toast({
                title: "Wallet Account Changed",
                description: `Connected to: ${newAccounts[0].substring(0, 6)}...${newAccounts[0].substring(38)}`,
              })
            } else {
              setAccount(null)
              setIsConnected(false)
              toast({
                title: "Wallet Disconnected",
                description: "Please connect your wallet.",
              })
            }
          })

          // Listen for chain changes
          window.ethereum.on("chainChanged", (chainId: string) => {
            toast({
              title: "Network Changed",
              description: `Switched to Chain ID: ${Number.parseInt(chainId, 16)}`,
            })
            // You might want to reload the page or re-initialize provider here
          })
        } catch (error) {
          console.error("Error checking wallet connection:", error)
        }
      }
    }
    checkIfWalletIsConnected()

    // Cleanup event listeners on unmount
    return () => {
      if (typeof window !== "undefined" && window.ethereum) {
        window.ethereum.removeListener("accountsChanged", () => {})
        window.ethereum.removeListener("chainChanged", () => {})
      }
    }
  }, [toast])

  const handleConnectWallet = async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      toast({
        title: "MetaMask Not Found",
        description: "Please install MetaMask or another Web3 wallet.",
        variant: "destructive",
      })
      return
    }

    try {
      // Request account access
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
      if (accounts.length > 0) {
        setAccount(accounts[0])
        setIsConnected(true)
        toast({
          title: "Wallet Connected!",
          description: `Connected to: ${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`,
        })
      }
    } catch (error: any) {
      console.error("Failed to connect wallet:", error)
      toast({
        title: "Connection Failed",
        description: `Error: ${error.message || "Could not connect to wallet."}`,
        variant: "destructive",
      })
    }
  }

  return (
    <header className="flex items-center justify-between h-16 bg-card text-gray-50 px-6 border-b border-gray-800 shadow-md">
      {/* Sidebar Trigger for mobile */}
      <div className="lg:hidden">
        <SidebarTrigger className="-ml-1" />
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <Button
          onClick={handleConnectWallet}
          className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm"
          disabled={isConnected} // Disable button if already connected
        >
          {isConnected ? `Connected: ${account?.substring(0, 6)}...${account?.substring(38)}` : "Connect Wallet"}
        </Button>
      </div>
    </header>
  )
}
