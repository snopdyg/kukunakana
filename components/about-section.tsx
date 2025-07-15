import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600">About $LORD</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/lizlord-pool.jpeg"
              alt="LIZLORD in ancient bathhouse"
              width={600}
              height={600}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 text-left space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              LIZLORD is the supreme lizard from the ancient bathhouse of Base.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">Cold-blooded, hot charted.</p>
            <p className="text-lg md:text-xl leading-relaxed font-bold text-blue-500">All must kneel before $LORD.</p>
            <p className="text-md md:text-lg text-gray-600">
              LIZLORD is a meme coin on the Base Chain, embodying pure domination and community spirit. No complex
              roadmaps, just a relentless pursuit of market reign.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
