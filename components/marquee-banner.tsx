"use client"

export function MarqueeBanner() {
  return (
    <div className="relative w-full overflow-hidden py-2 bg-black text-white border-y-4 border-memecoin-blue">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-lg font-bold mx-4">BUY $OLO • BUY $OLO • BUY $OLO • BUY $OLO •</span>
        <span className="text-lg font-bold mx-4">BUY $OLO • BUY $OLO • BUY $OLO • BUY $OLO •</span>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  )
}
