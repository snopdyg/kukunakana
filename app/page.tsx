"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import ContentDisplay from "@/components/content-display"
import { sections } from "@/types/sections"

export default function Home() {
  const [activeSectionId, setActiveSectionId] = useState<string>("initial-scroll") // Default ke tampilan gulir gambar awal
  const [showSidebar, setShowSidebar] = useState<boolean>(true) // Default sidebar terlihat

  const handleSectionChange = (id: string) => {
    setActiveSectionId(id)
    if (id === "initial-scroll") {
      setShowSidebar(true)
    } else {
      setShowSidebar(false) // Sembunyikan sidebar saat bagian spesifik diklik
    }
  }

  const handleBackToHome = () => {
    setActiveSectionId("initial-scroll")
    setShowSidebar(true) // Tampilkan sidebar saat kembali ke Home
  }

  const activeSection = sections.find((section) => section.id === activeSectionId)

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {showSidebar && (
        <div className="w-full md:w-[400px] flex-shrink-0">
          <Sidebar activeSectionId={activeSectionId} onSectionChange={handleSectionChange} />
        </div>
      )}
      <ContentDisplay
        section={activeSection}
        isInitialView={activeSectionId === "initial-scroll"}
        onBackToHome={handleBackToHome}
      />
    </div>
  )
}
