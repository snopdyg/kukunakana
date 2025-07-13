import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface ToolCardProps {
  title: string
  description: string
  iconSrc: string
}

export default function ToolCard({ title, description, iconSrc }: ToolCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700 text-gray-50">
      <CardHeader className="flex flex-col items-center text-center">
        <Image src={iconSrc || "/placeholder.svg"} alt={title} width={60} height={60} className="mb-2" />
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-gray-300 text-sm">
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
