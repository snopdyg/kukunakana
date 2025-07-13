"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function TokenomicsSection() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-12-31T23:59:59") - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [progress, setProgress] = useState(75) // Example progress
  const [amount, setAmount] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return null
    }
    return (
      <span key={interval} className="text-2xl font-bold text-memecoin-blue">
        {timeLeft[interval as keyof typeof timeLeft].toString().padStart(2, "0")}
        {interval.charAt(0).toUpperCase()}
      </span>
    )
  })

  return (
    <section className="relative w-full py-16 md:py-24 bg-forest-background bg-cover bg-center bg-fixed flex flex-col lg:flex-row items-center justify-center gap-8 px-4">
      <h2 className="absolute top-8 text-4xl md:text-5xl font-extrabold uppercase text-white">Tokenomics</h2>
      {/* Removed the "BUY BASE OLO" section */}

      <div className="relative w-full flex flex-col items-center lg:items-center gap-8 mt-8 lg:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md lg:max-w-none">
          <div className="p-6 rounded-lg text-center border-2 border-white bg-memecoin-blue">
            <h3 className="text-4xl font-extrabold text-white">1B</h3>
            <p className="text-white text-sm mt-2">Total Supply</p>
          </div>
          <div className="p-6 rounded-lg text-center border-2 border-white bg-memecoin-blue">
            <h3 className="text-4xl font-extrabold text-white">05%</h3>
            <p className="text-white text-sm mt-2">Marketing Wallet</p>
          </div>
        </div>
        <Image src="/olo-sweeping.png" alt="OLO Character Sweeping" width={400} height={400} className="mt-8 lg:mt-0" />
      </div>
    </section>
  )
}
