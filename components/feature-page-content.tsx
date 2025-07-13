"use client"

import type React from "react"
import { useState, useEffect } from "react" // Import useEffect
import { ethers } from "ethers" // Import ethers.js

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

// Uniswap V3 Router address for Base chain
const UNISWAP_ROUTER = "0xE592427A0AEce92De3Edee1F18E0157C05861564"

interface FeaturePageContentProps {
  featureName: string
}

export default function FeaturePageContent({ featureName }: FeaturePageContentProps) {
  const { toast } = useToast()
  const [numberOfWalletsInput, setNumberOfWalletsInput] = useState<string>("1")
  const [generatedWallets, setGeneratedWallets] = useState<{ address: string; privateKey: string }[]>([])

  // State for Token Creation
  const [tokenName, setTokenName] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [tokenDecimals, setTokenDecimals] = useState("")
  const [totalSupply, setTotalSupply] = useState("")

  // State for Multisender (One-to-Many)
  const [recipientList, setRecipientList] = useState("")
  const [amountPerRecipient, setAmountPerRecipient] = useState("")
  const [tokenAddress, setTokenAddress] = useState("") // leave blank to send ETH
  const [isSending, setIsSending] = useState(false)

  // State for Multisender (Many-to-One)
  const [senderList, setSenderList] = useState("") // for info only
  const [manyToOneRecipient, setManyToOneRecipient] = useState("")
  const [manyToOneTotalAmount, setManyToOneTotalAmount] = useState("")
  const [manyToOneTokenAddress, setManyToOneTokenAddress] = useState("")
  const [isManyToOneSending, setIsManyToOneSending] = useState(false)

  // State for Many-to-Many Transfers
  const [transferListRaw, setTransferListRaw] = useState("")
  const [manyToManyTokenAddress, setManyToManyTokenAddress] = useState("") // Kosong = ETH
  const [isManyToManySending, setIsManyToManySending] = useState(false)

  // State for Batch Query Balance
  const [queryAddressList, setQueryAddressList] = useState("")
  const [balances, setBalances] = useState<string[]>([])
  const [queryTokenAddress, setQueryTokenAddress] = useState("") // kosong = ETH
  const [isLoadingQuery, setIsLoadingQuery] = useState(false)

  // State for Batch Swap
  const [swapTokenA, setSwapTokenA] = useState("")
  const [swapTokenB, setSwapTokenB] = useState("")
  const [swapAmount, setSwapAmount] = useState("")
  const [isSwapping, setIsSwapping] = useState(false)

  // State for Contact Us
  const [contactEmail, setContactEmail] = useState("")
  const [contactSubject, setContactSubject] = useState("")
  const [contactMessage, setContactMessage] = useState("")

  // State for dynamic notification message
  const [notificationMessage, setNotificationMessage] = useState<string | null>(null)

  // Clear notification message when feature changes
  useEffect(() => {
    setNotificationMessage(null)
    // Reset form states when feature changes
    setTokenName("")
    setTokenSymbol("")
    setTokenDecimals("")
    setTotalSupply("")
    setContactEmail("")
    setContactSubject("")
    setContactMessage("")
    // Other form states are already handled by their respective functions or are persistent
  }, [featureName])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setNotificationMessage(null) // Clear previous notification
    // Dummy submission logic
    setNotificationMessage("✅ Form submitted successfully.")
  }

  const handleGenerateWallets = async (event: React.FormEvent) => {
    event.preventDefault()
    setNotificationMessage(null) // Clear previous notification
    const numWallets = Math.max(1, Number.parseInt(numberOfWalletsInput) || 1)

    const wallets = []
    for (let i = 0; i < numWallets; i++) {
      const wallet = ethers.Wallet.createRandom()
      wallets.push({ address: wallet.address, privateKey: wallet.privateKey })
    }
    setGeneratedWallets(wallets)
    setNotificationMessage(`✅ ${numWallets} wallet(s) have been generated.`)
  }

  const sendTokens = async () => {
    setNotificationMessage(null) // Clear previous notification
    if (typeof window === "undefined" || !window.ethereum) {
      toast({
        title: "Wallet Not Found",
        description: "Please install a Web3 wallet like MetaMask.",
        variant: "destructive",
      })
      return
    }

    setIsSending(true)
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      // const sender = await signer.getAddress() // Get sender address for display/logging

      const recipients = recipientList
        .split("\n")
        .map((addr) => addr.trim())
        .filter((addr) => ethers.utils.isAddress(addr))

      if (!recipients.length) {
        throw new Error("No valid recipient addresses provided.")
      }

      const decimals = 18 // Common for most tokens, for a real app, fetch from contract
      const amount = ethers.utils.parseUnits(amountPerRecipient, decimals)

      if (tokenAddress) {
        // ERC20 Transfer
        const erc20Abi = [
          "function transfer(address to, uint256 amount) public returns (bool)",
          "function decimals() view returns (uint8)", // Added for potential future use
        ]
        const tokenContract = new ethers.Contract(tokenAddress, erc20Abi, signer)

        for (const recipient of recipients) {
          toast({
            title: "Sending ERC20...",
            description: `Transferring ${amountPerRecipient} to ${recipient}...`,
          })
          const tx = await tokenContract.transfer(recipient, amount)
          await tx.wait()
          // No individual success toast here, aggregate message at the end
        }
        setNotificationMessage(`✅ Tokens sent to ${recipients.length} recipient(s).`)
      } else {
        // ETH Transfer
        for (const recipient of recipients) {
          toast({
            title: "Sending ETH...",
            description: `Transferring ${amountPerRecipient} ETH to ${recipient}...`,
          })
          const tx = await signer.sendTransaction({
            to: recipient,
            value: amount,
          })
          await tx.wait()
          // No individual success toast here, aggregate message at the end
        }
        setNotificationMessage(`✅ ETH sent to ${recipients.length} recipient(s).`)
      }
    } catch (err: any) {
      console.error(err)
      toast({
        title: "Transfer Failed",
        description: `Error: ${err.message || "An unknown error occurred."}`,
        variant: "destructive",
      })
    } finally {
      setIsSending(false)
    }
  }

  const sendToOne = async () => {
    setNotificationMessage(null) // Clear previous notification
    if (typeof window === "undefined" || !window.ethereum) {
      toast({
        title: "Wallet Not Found",
        description: "Please install a Web3 wallet like MetaMask.",
        variant: "destructive",
      })
      return
    }

    setIsManyToOneSending(true)
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      // const sender = await signer.getAddress() // Get sender address for display/logging

      if (!ethers.utils.isAddress(manyToOneRecipient)) {
        throw new Error("Invalid recipient address.")
      }

      const decimals = 18 // Common for most tokens, for a real app, fetch from contract
      const amount = ethers.utils.parseUnits(manyToOneTotalAmount, decimals)

      if (manyToOneTokenAddress) {
        // ERC20 transfer
        const erc20Abi = [
          "function transfer(address to, uint256 amount) public returns (bool)",
          "function decimals() view returns (uint8)",
        ]
        const tokenContract = new ethers.Contract(manyToOneTokenAddress, erc20Abi, signer)
        toast({
          title: "Sending ERC20...",
          description: `Transferring ${manyToOneTotalAmount} to ${manyToOneRecipient}...`,
        })
        const tx = await tokenContract.transfer(manyToOneRecipient, amount)
        await tx.wait()
        setNotificationMessage(`✅ ${manyToOneTotalAmount} tokens sent to ${manyToOneRecipient.substring(0, 6)}...`)
      } else {
        // ETH transfer
        toast({
          title: "Sending ETH...",
          description: `Transferring ${manyToOneTotalAmount} ETH to ${manyToOneRecipient}...`,
        })
        const tx = await signer.sendTransaction({
          to: manyToOneRecipient,
          value: amount,
        })
        await tx.wait()
        setNotificationMessage(`✅ ${manyToOneTotalAmount} ETH sent to ${manyToOneRecipient.substring(0, 6)}...`)
      }
    } catch (err: any) {
      console.error(err)
      toast({
        title: "Transfer Failed",
        description: `Error: ${err.message || "An unknown error occurred."}`,
        variant: "destructive",
      })
    } finally {
      setIsManyToOneSending(false)
    }
  }

  const handleManyToManyTransfer = async () => {
    setNotificationMessage(null) // Clear previous notification
    if (typeof window === "undefined" || !window.ethereum) {
      toast({
        title: "Wallet Not Found",
        description: "Please install a Web3 wallet like MetaMask.",
        variant: "destructive",
      })
      return
    }

    setIsManyToManySending(true)
    try {
      const parsedList = JSON.parse(transferListRaw)
      if (!Array.isArray(parsedList)) throw new Error("Invalid JSON format. Expected an array of objects.")

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const decimals = 18 // Common for most tokens, for a real app, fetch from contract
      let successfulTransfers = 0

      for (const txItem of parsedList) {
        const recipient = txItem.to
        const amount = ethers.utils.parseUnits(txItem.amount.toString(), decimals)

        if (!ethers.utils.isAddress(recipient)) {
          toast({
            title: "Invalid Address Skipped",
            description: `Skipping invalid address: ${recipient}`,
            variant: "destructive",
          })
          continue
        }

        if (manyToManyTokenAddress) {
          // ERC20 transfer
          const erc20Abi = [
            "function transfer(address to, uint256 amount) public returns (bool)",
            "function decimals() view returns (uint8)",
          ]
          const tokenContract = new ethers.Contract(manyToManyTokenAddress, erc20Abi, signer)
          toast({
            title: "Sending ERC20...",
            description: `Transferring ${txItem.amount} to ${recipient}...`,
          })
          const tx = await tokenContract.transfer(recipient, amount)
          await tx.wait()
          successfulTransfers++
        } else {
          // ETH transfer
          toast({
            title: "Sending ETH...",
            description: `Transferring ${txItem.amount} ETH to ${recipient}...`,
          })
          const tx = await signer.sendTransaction({
            to: recipient,
            value: amount,
          })
          await tx.wait()
          successfulTransfers++
        }
      }
      setNotificationMessage(`✅ ${successfulTransfers} transfers executed successfully.`)
    } catch (err: any) {
      console.error(err)
      toast({
        title: "Transfer Failed",
        description: `Error: ${err.message || "An unknown error occurred."}`,
        variant: "destructive",
      })
    } finally {
      setIsManyToManySending(false)
    }
  }

  const handleQuery = async () => {
    setNotificationMessage(null) // Clear previous notification
    setIsLoadingQuery(true)
    const addresses = queryAddressList
      .split("\n")
      .map((addr) => addr.trim())
      .filter((addr) => ethers.utils.isAddress(addr))

    if (!addresses.length) {
      toast({
        title: "No Valid Addresses",
        description: "Please enter at least one valid address.",
        variant: "destructive",
      })
      setIsLoadingQuery(false)
      return
    }

    try {
      // For a real app, you'd configure this with a specific RPC URL (e.g., for Base Mainnet)
      // Example: const provider = new ethers.providers.JsonRpcProvider("https://mainnet.base.org");
      const provider = new ethers.providers.JsonRpcProvider() // Defaults to Ethereum Mainnet if no URL provided

      const results: string[] = []
      if (queryTokenAddress) {
        // ERC20 balanceOf
        const erc20Abi = [
          "function balanceOf(address owner) view returns (uint256)",
          "function decimals() view returns (uint8)",
        ]
        const tokenContract = new ethers.Contract(queryTokenAddress, erc20Abi, provider)
        const decimals = await tokenContract.decimals()
        for (const addr of addresses) {
          const balance = await tokenContract.balanceOf(addr)
          results.push(`${addr}: ${ethers.utils.formatUnits(balance, decimals)} tokens`)
        }
      } else {
        // Native token (ETH/BASE/etc.)
        for (const addr of addresses) {
          const balance = await provider.getBalance(addr)
          results.push(`${addr}: ${ethers.utils.formatEther(balance)} ETH`)
        }
      }
      setBalances(results)
      setNotificationMessage(`✅ Balances for ${addresses.length} address(es) queried successfully.`)
    } catch (err: any) {
      console.error(err)
      toast({
        title: "Error Fetching Balances",
        description: `Error: ${err.message || "An unknown error occurred."}`,
        variant: "destructive",
      })
    } finally {
      setIsLoadingQuery(false)
    }
  }

  const performSwap = async () => {
    setNotificationMessage(null) // Clear previous notification
    if (typeof window === "undefined" || !window.ethereum) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect a Web3 wallet like MetaMask.",
        variant: "destructive",
      })
      return
    }

    setIsSwapping(true)
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const amountIn = ethers.utils.parseUnits(swapAmount, 18) // Assuming 18 decimals for simplicity

      // Approve token A
      const erc20Abi = ["function approve(address spender, uint256 amount) public returns (bool)"]
      const tokenAContract = new ethers.Contract(swapTokenA, erc20Abi, signer)

      toast({
        title: "Approving Token...",
        description: `Approving ${swapAmount} of ${swapTokenA} for Uniswap Router...`,
      })
      const approveTx = await tokenAContract.approve(UNISWAP_ROUTER, amountIn)
      await approveTx.wait()
      // No individual success toast here, aggregate message at the end

      // Swap via Uniswap V3 exactInputSingle
      const routerAbi = [
        "function exactInputSingle(tuple(address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 deadline, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96)) external payable returns (uint256 amountOut)",
      ]
      const router = new ethers.Contract(UNISWAP_ROUTER, routerAbi, signer)
      const deadline = Math.floor(Date.now() / 1000) + 60 * 10 // 10 minutes from now

      const params = {
        tokenIn: swapTokenA,
        tokenOut: swapTokenB,
        fee: 3000, // 0.3% fee tier, common for stable/major pairs
        recipient: await signer.getAddress(),
        deadline,
        amountIn,
        amountOutMinimum: 0, // For dummy, set to 0. In production, calculate with slippage.
        sqrtPriceLimitX96: 0, // For dummy, set to 0. Advanced usage.
      }

      toast({
        title: "Performing Swap...",
        description: `Swapping ${swapAmount} from ${swapTokenA} to ${swapTokenB}...`,
      })
      const tx = await router.exactInputSingle(params)
      await tx.wait()
      setNotificationMessage(
        `✅ Swap of ${swapAmount} ${swapTokenA.substring(0, 6)}... to ${swapTokenB.substring(0, 6)}... completed successfully.`,
      )
    } catch (err: any) {
      console.error(err)
      toast({
        title: "Swap Failed",
        description: `Error: ${err.message || "An unknown error occurred."}`,
        variant: "destructive",
      })
    } finally {
      setIsSwapping(false)
    }
  }

  const renderContent = () => {
    switch (featureName) {
      case "token-creation":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Token Name" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
            <Input placeholder="Token Symbol" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} />
            <Input
              type="number"
              placeholder="Decimals"
              value={tokenDecimals}
              onChange={(e) => setTokenDecimals(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Total Supply"
              value={totalSupply}
              onChange={(e) => setTotalSupply(e.target.value)}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-blue-700">
              Create Token
            </Button>
            {notificationMessage && (
              <div className="bg-blue-600 text-white px-4 py-2 rounded mt-4 shadow-md">{notificationMessage}</div>
            )}
          </form>
        )
      case "batch-wallet-generation":
        return (
          <form onSubmit={handleGenerateWallets} className="space-y-4">
            <Input
              type="number"
              placeholder="Number of Wallets to Generate"
              value={numberOfWalletsInput}
              onChange={(e) => setNumberOfWalletsInput(e.target.value)}
              min={1}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-blue-700">
              Generate Wallets
            </Button>
            {notificationMessage && (
              <div className="bg-blue-600 text-white px-4 py-2 rounded mt-4 shadow-md">{notificationMessage}</div>
            )}
            {generatedWallets.length > 0 && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-200">Generated Wallets:</h3>
                <Textarea
                  readOnly
                  value={generatedWallets
                    .map((w) => `Address: ${w.address}\nPrivate Key: ${w.privateKey}`)
                    .join("\n\n")}
                  rows={Math.min(10, generatedWallets.length * 3)}
                  className="bg-gray-700 text-gray-50 font-mono"
                />
              </div>
            )}
          </form>
        )
      case "batch-query-balance":
        return (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <Input
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              type="text"
              placeholder="ERC20 Token Address (leave blank for ETH)"
              value={queryTokenAddress}
              onChange={(e) => setQueryTokenAddress(e.target.value)}
            />
            <Textarea
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              rows={8}
              placeholder="List of Addresses (one per line)"
              value={queryAddressList}
              onChange={(e) => setQueryAddressList(e.target.value)}
            />
            <Button
              className="w-full p-2 rounded bg-primary text-white hover:bg-blue-600 disabled:opacity-50"
              onClick={handleQuery}
              disabled={isLoadingQuery}
            >
              {isLoadingQuery ? "Querying..." : "Query Balances"}
            </Button>
            {notificationMessage && (
              <div className="bg-blue-600 text-white px-4 py-2 rounded mt-4 shadow-md">{notificationMessage}</div>
            )}
            {balances.length > 0 && (
              <div className="text-sm text-gray-50 space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                <h3 className="text-lg font-semibold text-gray-200">Balances:</h3>
                {balances.map((b, i) => (
                  <div key={i} className="bg-gray-800 p-2 rounded break-all">
                    {b}
                  </div>
                ))}
              </div>
            )}
          </form>
        )
      case "multisender-one-to-many":
        return (
          <form onSubmit={sendTokens} className="space-y-4">
            <Input
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              type="text"
              placeholder="ERC20 Token Address (leave blank to send ETH)"
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
            />
            <Textarea
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              placeholder="Recipient Addresses (one per line)"
              rows={6}
              value={recipientList}
              onChange={(e) => setRecipientList(e.target.value)}
            />
            <Input
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              type="text"
              placeholder="Amount per recipient"
              value={amountPerRecipient}
              onChange={(e) => setAmountPerRecipient(e.target.value)}
            />
            <Button
              className="w-full p-2 rounded bg-primary text-white hover:bg-blue-600 disabled:opacity-50"
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send (One-to-Many)"}
            </Button>
            {notificationMessage && (
              <div className="bg-blue-600 text-white px-4 py-2 rounded mt-4 shadow-md">{notificationMessage}</div>
            )}
          </form>
        )
      case "multisender-many-to-one":
        return (
          <form onSubmit={sendToOne} className="space-y-4">
            <Input
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              type="text"
              placeholder="ERC20 Token Address (leave blank to send ETH)"
              value={manyToOneTokenAddress}
              onChange={(e) => setManyToOneTokenAddress(e.target.value)}
            />
            <Textarea
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              placeholder="Sender Addresses (one per line) - for info only"
              rows={6}
              value={senderList}
              onChange={(e) => setSenderList(e.target.value)}
              disabled
            />
            <Input
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              type="text"
              placeholder="Recipient Address"
              value={manyToOneRecipient}
              onChange={(e) => setManyToOneRecipient(e.target.value)}
            />
            <Input
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              type="text"
              placeholder="Total Amount"
              value={manyToOneTotalAmount}
              onChange={(e) => setManyToOneTotalAmount(e.target.value)}
            />
            <Button
              className="w-full p-2 rounded bg-primary text-white hover:bg-blue-600 disabled:opacity-50"
              type="submit"
              disabled={isManyToOneSending}
            >
              {isManyToOneSending ? "Sending..." : "Send (Many-to-One)"}
            </Button>
            {notificationMessage && (
              <div className="bg-blue-600 text-white px-4 py-2 rounded mt-4 shadow-md">{notificationMessage}</div>
            )}
          </form>
        )
      case "many-to-many-transfers":
        return (
          <form onSubmit={handleManyToManyTransfer} className="space-y-4">
            <Input
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              type="text"
              placeholder="ERC20 Token Address (leave blank to send ETH)"
              value={manyToManyTokenAddress}
              onChange={(e) => setManyToManyTokenAddress(e.target.value)}
            />
            <Textarea
              className="w-full p-3 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              rows={10}
              placeholder={`Transfer List (e.g. JSON)\n[\n  { "to": "0x123...", "amount": "0.01" },\n  { "to": "0x456...", "amount": "0.05" }\n]`}
              value={transferListRaw}
              onChange={(e) => setTransferListRaw(e.target.value)}
            />
            <Button
              className="w-full p-2 rounded bg-primary text-white hover:bg-blue-600 disabled:opacity-50"
              type="submit"
              disabled={isManyToManySending}
            >
              {isManyToManySending ? "Sending..." : "Execute Transfers"}
            </Button>
            {notificationMessage && (
              <div className="bg-blue-600 text-white px-4 py-2 rounded mt-4 shadow-md">{notificationMessage}</div>
            )}
          </form>
        )
      case "batch-swap":
        return (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <Input
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              type="text"
              placeholder="Token A address (e.g., WETH)"
              value={swapTokenA}
              onChange={(e) => setSwapTokenA(e.target.value)}
            />
            <Input
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              type="text"
              placeholder="Token B address (e.g., USDC)"
              value={swapTokenB}
              onChange={(e) => setSwapTokenB(e.target.value)}
            />
            <Input
              className="w-full p-2 rounded bg-input text-gray-50 border border-gray-700 focus:ring-primary focus:border-primary"
              type="text"
              placeholder="Amount to Swap"
              value={swapAmount}
              onChange={(e) => setSwapAmount(e.target.value)}
            />
            <Button
              className="w-full p-2 rounded bg-primary text-white hover:bg-blue-600 disabled:opacity-50"
              onClick={performSwap}
              disabled={isSwapping}
            >
              {isSwapping ? "Swapping..." : "Perform Batch Swap"}
            </Button>
            {notificationMessage && (
              <div className="bg-blue-600 text-white px-4 py-2 rounded mt-4 shadow-md">{notificationMessage}</div>
            )}
          </form>
        )
      case "contact-us":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Email"
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
            <Input placeholder="Subject" value={contactSubject} onChange={(e) => setContactSubject(e.target.value)} />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
            />
            <Button type="submit" className="w-full bg-primary hover:bg-blue-700">
              Send Message
            </Button>
            {notificationMessage && (
              <div className="bg-blue-600 text-white px-4 py-2 rounded mt-4 shadow-md">{notificationMessage}</div>
            )}
          </form>
        )
      default:
        return (
          <div className="text-center text-gray-400">
            <p>Select a feature from the sidebar to get started!</p>
          </div>
        )
    }
  }

  const getTitle = () => {
    switch (featureName) {
      case "token-creation":
        return "Token Creation"
      case "batch-wallet-generation":
        return "Batch Wallet Generation"
      case "batch-query-balance":
        return "Batch Query Balance"
      case "multisender-one-to-many":
        return "Multisender (One-to-Many)"
      case "multisender-many-to-one":
        return "Multisender (Many-to-One)"
      case "many-to-many-transfers":
        return "Many-to-Many Transfers"
      case "batch-swap":
        return "Batch Swap"
      case "contact-us":
        return "Contact Us"
      default:
        return "Welcome to $SMOAT Tools"
    }
  }

  return (
    <Card className="bg-card border-gray-700 text-gray-50 rounded-lg shadow-lg p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary mb-4">{getTitle()}</CardTitle>
      </CardHeader>
      <CardContent>{renderContent()}</CardContent>
    </Card>
  )
}
