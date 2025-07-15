import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare } from "lucide-react"

export function AIChatLinkSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-300 to-gray-400 text-gray-800 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-600">Have a Question?</h2>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10">
          Chat with our AI to get instant answers about LIZLORD or any other topic!
        </p>
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-10 py-7 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <Link href="/chat">
            <MessageSquare className="mr-3 h-7 w-7" />
            Chat with AI
          </Link>
        </Button>
      </div>
    </section>
  )
}
