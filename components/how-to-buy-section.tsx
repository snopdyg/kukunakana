"use client"

export function HowToBuySection() {
  const steps = [
    {
      title: "Set Up a Crypto Wallet",
      description:
        "Download and set up a secure crypto wallet like MetaMask or Trust Wallet. This will be your gateway to the world of OLO.",
    },
    {
      title: "Exchange BASE/OLO",
      description:
        "Use a decentralized exchange (DEX) like PancakeSwap to exchange BASE for OLO. Ensure you have enough BNB for gas fees.", // Updated text here
    },
    {
      title: "Connect Your Wallet",
      description:
        "Visit our official website and connect your wallet to the platform. This will allow you to interact with the OLO ecosystem.",
    },
    {
      title: "Start Buying & Selling",
      description:
        "Once connected, you can start buying, selling, and trading OLO. Join our community for tips and updates!",
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-24 bg-forest-background bg-cover bg-center bg-fixed overflow-hidden flex flex-col items-center text-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>
      {/* Removed placeholder images */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold uppercase mb-12 text-white">How To Buy</h2>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 rounded-lg flex flex-col items-center text-center bg-memecoin-blue" // Added bg-memecoin-blue
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent border-2 border-white text-white text-xl font-bold mb-4">
              {index + 1}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-white text-sm">{step.description}</p>
          </div>
        ))}
      </div>
      {/* Removed Image component for olo-flag.png */}
      {/* Removed placeholder images */}
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      `}</style>
    </section>
  )
}
