"use client"

import Link from "next/link"
import { sections } from "@/types/sections" // Import sections data

type SidebarProps = {
  activeSectionId: string
  onSectionChange: (id: string) => void
}

export default function Sidebar({ activeSectionId, onSectionChange }: SidebarProps) {
  return (
    <div className="w-full md:w-[400px] flex-shrink-0 bg-black text-white p-6 flex flex-col justify-between md:h-screen md:sticky md:top-0 overflow-y-auto">
      <div>
        {/* Top Navigation */}
        <nav className="mb-12">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold uppercase">
            <li>
              <button onClick={() => onSectionChange("initial-scroll")} className="hover:text-gray-400">
                HOME
              </button>
            </li>
            <li>
              <Link
                href="https://ape.store/base/0x3f78f4bbc138f1f5110df1b85a02e2449565a4fb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                Buy $PONGO
              </Link>
            </li>
            <li>
              <Link
                href="https://dexscreener.com/base/0xf324649C59E967332b19C81F7d031AFc841F4D92"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                DexScreen
              </Link>
            </li>
          </ul>
        </nav>

        {/* Pongo Logo */}
        <div className="mb-12">
          <h1 className="text-8xl font-extrabold tracking-tighter leading-none">PONGO</h1>
        </div>

        {/* Section Navigation */}
        <nav>
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => onSectionChange(section.id)}
                  className={`text-xl font-bold uppercase text-left w-full transition-colors ${
                    activeSectionId === section.id ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer Contact Info */}
      <div className="text-xs text-gray-400 space-y-1 mt-12">
        <p>
          <Link href="https://x.com/pongobase" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            TWITTER
          </Link>
        </p>
        <p>
          <Link href="https://t.me/pongobase" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            TELEGRAM
          </Link>
        </p>
      </div>
    </div>
  )
}
