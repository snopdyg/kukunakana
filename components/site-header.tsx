import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between p-4 md:p-6 max-w-4xl mx-auto w-full">
      <div className="flex items-center gap-2">
        <Image src="/images/rosy-dog-logo.png" alt="Rosy Token Logo" width={60} height={60} />
        <span className="text-lg font-semibold sr-only">Rosy Token</span>
      </div>
      <nav className="flex items-center gap-4">
        <Link
          href="https://x.com/baserosy_"
          className="text-gray-600 hover:text-gray-900 font-semibold text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>
        <Button
          className="rounded-full px-4 py-2 text-sm md:px-6 md:py-2 md:text-base font-bold bg-red-500 hover:bg-red-600 text-white"
          asChild
        >
          <Link
            href="https://ape.store/base/0x41fff8cba2f368df6112cbfdc5fc76c8dad274b6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy $ROSY
          </Link>
        </Button>
        <Link
          href="https://t.me/baserosy"
          className="text-gray-600 hover:text-gray-900 font-semibold text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </Link>
      </nav>
    </header>
  )
}
