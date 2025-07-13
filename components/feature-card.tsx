import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface FeatureCardProps {
  title: string
  description: string
  iconSrc: string
}

export default function FeatureCard({ title, description, iconSrc }: FeatureCardProps) {
  return (
    <Card className="bg-card border-gray-700 text-gray-50 rounded-lg shadow-md">
      <CardHeader className="flex flex-col items-center text-center">
        <Image src={iconSrc || "/placeholder.svg"} alt={title} width={80} height={80} className="mb-4" />
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-gray-300">
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
