"use client"

import Image from "next/image"

export default function ClickToPlaySection() {
  return (
    <section className="py-8 md:py-12 px-2 max-w-2xl mx-auto w-full text-center">
      <div className="flex justify-center">
        <Image
          src="/images/floating-island.png"
          alt="Floating island with Rosy"
          width={600}
          height={300}
          className="rounded-lg w-full h-auto max-w-full"
        />
      </div>
    </section>
  )
}
