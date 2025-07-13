"use client"
import { CheckCircle } from "lucide-react"

export function RoadmapSection() {
  const roadmapPhases = [
    {
      phase: "01",
      title: "Let's Start Now, Mate!",
      items: ["Website Launch", "Community Building", "Presale & Online Marketing", "Community Generation Program"],
      position: "left",
    },
    {
      phase: "02",
      title: "Growth To The Moon",
      items: ["Official Launch", "Partnerships", "Influencer Marketing", "Community Engagement Program"],
      position: "right",
    },
    {
      phase: "03",
      title: "Touch Down Memecoin",
      items: ["CEX Listings", "NFT Collection Launch", "Global Marketing Campaigns", "Community Expansion Program"],
      position: "left",
    },
    {
      phase: "04",
      title: "Growth To The Moon",
      items: [
        "Metaverse Integration",
        "Gaming Partnerships",
        "Decentralized Autonomous Organization (DAO)",
        "Continuous Innovation & Development",
      ],
      position: "right",
    },
  ]

  return (
    <section className="relative w-full py-16 md:py-24 bg-forest-background bg-cover bg-center bg-fixed flex flex-col items-center text-center px-4 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-12 text-white">Road Map</h2>
      {/* Removed placeholder images */}

      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white rounded-full"></div>{" "}
        {/* Vertical line */}
        {roadmapPhases.map((phase, index) => (
          <div
            key={index}
            className={`relative flex items-center w-full py-8 ${
              phase.position === "left"
                ? "justify-start pr-8 md:pr-0 md:justify-end"
                : "justify-end pl-8 md:pl-0 md:justify-start"
            }`}
          >
            <div
              className={`w-full md:w-1/2 ${phase.position === "left" ? "md:pr-16 text-right" : "md:pl-16 text-left"}`}
            >
              <div className="p-6 rounded-lg border-2 border-white bg-memecoin-blue">
                {" "}
                {/* Added bg-memecoin-blue */}
                <div className="pb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                </div>
                <div>
                  <ul className="space-y-2 text-white text-sm">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-10 h-10 bg-transparent border-4 border-white flex items-center justify-center text-memecoin-blue font-bold">
                {phase.phase}
              </div>
              {/* Removed placeholder images */}
            </div>
          </div>
        ))}
      </div>
      {/* Removed placeholder images */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-reverse {
          0% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      `}</style>
    </section>
  )
}
