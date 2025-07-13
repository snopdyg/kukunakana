"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is OLO?",
      answer:
        "OLO is a community-driven cryptocurrency inspired by internet meme culture. It aims to create a fun and engaging ecosystem for its holders.",
    },
    {
      question: "How do I buy OLO?",
      answer:
        "You can buy OLO on decentralized exchanges (DEXs) like PancakeSwap. You'll need a crypto wallet (e.g., MetaMask) and some BNB to exchange.",
    },
    {
      question: "Is OLO a good investment?",
      answer:
        "Cryptocurrency investments are subject to high market risk. Please do your own research and invest responsibly. OLO is primarily for entertainment and community engagement.",
    },
    {
      question: "Where can I find the OLO community?",
      answer:
        "Join our official Telegram, Twitter, and Discord channels to connect with other OLO enthusiasts and stay updated on the latest news.",
    },
    {
      question: "What are the tokenomics of OLO?",
      answer:
        "OLO has a total supply of 100 Trillion tokens, with a portion allocated to marketing, liquidity, and community rewards. Detailed tokenomics are available in our whitepaper.",
    },
    {
      question: "What is the future of OLO?",
      answer:
        "Our roadmap outlines plans for CEX listings, NFT collections, metaverse integration, and building a strong decentralized autonomous organization (DAO) for community governance.",
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-24 bg-forest-background bg-cover bg-center bg-fixed flex flex-col items-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>
      {/* Removed placeholder images */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold uppercase mb-12 text-white">FAQ</h2>
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg border-2 border-white bg-memecoin-blue" // Added bg-memecoin-blue
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-white hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
            <AccordionItem
              key={index + Math.ceil(faqs.length / 2)}
              value={`item-${index + Math.ceil(faqs.length / 2)}`}
              className="rounded-lg border-2 border-white bg-memecoin-blue" // Added bg-memecoin-blue
            >
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-white hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* Removed placeholder images */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      `}</style>
    </section>
  )
}
