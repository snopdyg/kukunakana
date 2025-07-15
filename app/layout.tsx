import type React from "react"
import type { Metadata } from "next/types"
import { Inter, Cinzel } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "LIZLORD - King of Cold-Blooded Coins",
  description:
    "LIZLORD is the supreme lizard from the ancient bathhouse of Base. Cold-blooded, hot charted. All must kneel before $LORD.",
  icons: {
    icon: "/favicon.jpeg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  )
}
