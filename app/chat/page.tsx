"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIChatPage() {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("No response")
  const [isLoading, setIsLoading] = useState(false)

  const askAI = async () => {
    if (!prompt.trim()) return
    setIsLoading(true)
    setResponse("Loading...")

    try {
      const res = await fetch("/api/sumopod-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Request failed")

      setResponse(data.content || "No response")
    } catch (err) {
      setResponse(`Error: ${(err as Error).message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-blue-600">SumoPod AI Chat</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Ask something..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-32 resize-none mb-4 border-blue-300 focus:border-blue-500"
          />
          <Button
            onClick={askAI}
            disabled={isLoading || !prompt.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-md transition-colors duration-200"
          >
            {isLoading ? "Sending..." : "Send to AI"}
          </Button>
          <div className="mt-6 p-4 bg-gray-100 rounded-lg border text-gray-800 min-h-[100px] flex items-center justify-center text-center">
            {response}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
