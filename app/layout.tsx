import type React from "react"
import type { Metadata } from "next/types"
import { Inter, Cinzel } from "next/font/google" // Import both fonts
import "./globals.css"

// Configure Inter for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body", // Define as CSS variable --font-body
  display: "swap",
})

// Configure Cinzel for headings
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading", // Define as CSS variable --font-heading
  display: "swap",
  weight: ["400", "700", "800", "900"], // Include weights for bold/extrabold
})

export const metadata: Metadata = {
  title: "LIZLORD - King of Cold-Blooded Coins",
  description:
    "LIZLORD is the supreme lizard from the ancient bathhouse of Base. Cold-blooded, hot charted. All must kneel before $LORD.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  )
}
