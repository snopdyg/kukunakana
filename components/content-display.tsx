"use client"

import Image from "next/image"
import type { Section } from "@/types/sections"
import { allScrollableImages } from "@/types/sections" // Import allScrollableImages

type ContentDisplayProps = {
  section: Section | undefined
  isInitialView: boolean
  onBackToHome: () => void
}

export default function ContentDisplay({ section, isInitialView, onBackToHome }: ContentDisplayProps) {
  if (isInitialView) {
    return (
      <div className="flex-1 flex flex-col overflow-y-auto bg-black">
        {allScrollableImages.map((imagePath, index) => (
          <div key={index} className="relative w-full h-screen flex-shrink-0">
            <Image
              src={imagePath || "/placeholder.svg"}
              alt={`Scrollable Image ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0} // Muat segera hanya gambar pertama
            />
          </div>
        ))}
      </div>
    )
  }

  if (!section) {
    return <div className="flex-1 flex items-center justify-center bg-black text-white">Pilih bagian dari sidebar.</div>
  }

  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-black text-white relative">
      {/* Tombol Kembali ke Home */}
      <button
        onClick={onBackToHome}
        className="absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
        aria-label="Kembali ke Home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      {section.type === "image" && section.image ? (
        <div className="relative w-full h-screen flex-shrink-0">
          <Image
            src={section.image || "/placeholder.svg"}
            alt={section.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      ) : section.type === "text" && section.text ? (
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">{section.title}</h2>
          <div className="text-lg md:text-xl leading-relaxed whitespace-pre-line">{section.text}</div>
        </div>
      ) : section.type === "text-image-split" && section.text && section.image ? (
        <div className="flex flex-col lg:flex-row w-full h-full min-h-screen">
          {/* Bagian Kiri (Teks) */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-black">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">{section.title}</h2>
            <div className="text-lg md:text-xl leading-relaxed whitespace-pre-line">{section.text}</div>
          </div>
          {/* Bagian Kanan (Gambar) */}
          <div className="relative flex-1 w-full h-[50vh] lg:h-auto lg:w-1/2 flex-shrink-0">
            <Image
              src={section.image || "/placeholder.svg"}
              alt={section.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center bg-black text-white">Konten tidak ditemukan.</div>
      )}
    </div>
  )
}
