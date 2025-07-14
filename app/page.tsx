import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-blue-950 text-white font-body">
      {/* Header */}
      <header className="flex flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <a
          href="https://ape.store/base/0x3323ad1915c2f78233c2ceb32846f4781704fb3d"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 text-gray-300 text-sm px-4 py-2 rounded-full mb-4 font-body hover:bg-blue-700 transition-colors"
        >
          BUY $HUAHUA
        </a>
        <nav className="w-full max-w-6xl flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/header-logo-happy-panda.png"
              alt="HuaHua Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading">HuaHua</span>
              <span className="text-sm text-gray-400 font-body">和花 HE HUA</span>
            </div>
          </div>
          {/* Removed social media icons from header */}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-background.jpeg"
          alt="Meet HuaHua"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0 opacity-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight uppercase font-heading">MEET HUAHUA</h1>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-blue-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-blue-900 border-blue-800 text-white text-center p-6 flex flex-col items-center">
            <Image
              src="/images/panda-worried.png"
              alt="Celebrity Panda Icon"
              width={64}
              height={64}
              className="mb-4 rounded-full max-w-full h-auto"
            />
            <CardHeader>
              <CardTitle className="text-xl font-bold font-heading">The Celebrity Panda</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 mb-4 leading-relaxed font-body">
                HeHua (HuaHua) is considered one of China's "celebrity pandas", with her gaining popularity online. On
                the blogging platform Weibo, HuaHua's hashtag has garnered nearly 1.6 billion engagements.
              </CardDescription>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-950 bg-transparent font-body"
              >
                Find Out More
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-blue-900 border-blue-800 text-white text-center p-6 flex flex-col items-center">
            <Image
              src="/images/panda-happy.png"
              alt="Richest Panda Icon"
              width={64}
              height={64}
              className="mb-4 rounded-full max-w-full h-auto"
            />
            <CardHeader>
              <CardTitle className="text-xl font-bold font-heading">The Most Richest Panda</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 mb-4 leading-relaxed font-body">
                According to statistics, HeHua (HuaHua) has a value of 299.9 billion. She earn 100 million every month.
                For example, during the five-day May Day holiday, 204,000 tourists came to see HuaHua.
              </CardDescription>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-950 bg-transparent font-body"
              >
                Find Out More
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-blue-900 border-blue-800 text-white text-center p-6 flex flex-col items-center">
            <Image
              src="/images/panda-climbing-bamboo.png"
              alt="Adorable Panda Icon"
              width={64}
              height={64}
              className="mb-4 rounded-full max-w-full h-auto"
            />
            <CardHeader>
              <CardTitle className="text-xl font-bold font-heading">The Most Adorable Panda</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 mb-4 leading-relaxed font-body">
                HeHua (HuaHua) is so gentle and peaceful that be loved by people. Smaller size, slower movement and bad
                at climbing trees highlight her peaceful and gentle personality.
              </CardDescription>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-950 bg-transparent font-body"
              >
                Find Out More
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Panda Gallery */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-blue-950">
        <div className="max-w-6xl mx-auto flex justify-center space-x-4 overflow-x-auto pb-4">
          <Image
            src="/images/gallery-panda-7.png"
            alt="Panda 1"
            width={150}
            height={150}
            className="rounded-lg object-cover max-w-full h-auto"
          />
          <Image
            src="/images/gallery-panda-8.png"
            alt="Panda 2"
            width={150}
            height={150}
            className="rounded-lg object-cover max-w-full h-auto"
          />
          <Image
            src="/images/gallery-panda-9.png"
            alt="Panda 3"
            width={150}
            height={150}
            className="rounded-lg object-cover max-w-full h-auto"
          />
          <Image
            src="/images/gallery-panda-4.png"
            alt="Panda 4"
            width={150}
            height={150}
            className="rounded-lg object-cover max-w-full h-auto"
          />
          <Image
            src="/images/gallery-panda-5.png"
            alt="Panda 5"
            width={150}
            height={150}
            className="rounded-lg object-cover max-w-full h-auto"
          />
          <Image
            src="/images/header-logo.png"
            alt="Panda 6"
            width={150}
            height={150}
            className="rounded-lg object-cover max-w-full h-auto"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-blue-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/images/about-section-panda-new.png"
              alt="Panda in habitat"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 relative">
            <h2 className="text-4xl font-bold mb-4 font-heading">ABOUT $HUAHUA</h2>
            <p className="text-gray-300 mb-4 leading-relaxed font-body">
              HeHua (HuaHua) is one of China's most adored pandas, born at the Chengdu Research Base. Known for her
              gentle nature, expressive eyes, and viral moments online. HeHua captured the hearts of millions. In late
              2023, her name trended across Chinese social media, drawing over 50 million reads on Weibo in just days.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed font-body">
              Now, her charm inspires the launch of <span className="font-bold text-white">SHUAHUA</span> - a meme token
              on Base Network. Celebrating culture, cuteness, and community, SHUAHUA brings the joyful spirit of He Hua
              into the world of Web3.
            </p>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-blue-950">
        <h2 className="text-4xl font-bold text-center mb-8 font-heading">HUAHUA NOMICS</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-blue-900 border-blue-800 text-white text-center p-6 flex flex-col items-center">
            <CardHeader>
              <CardTitle className="text-xl font-bold font-heading">100% Liquidity Burnt</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 leading-relaxed font-body">
                Liquidity tokens permanently removed from circulation, creating a stable trading environment.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-blue-900 border-blue-800 text-white text-center p-6 flex flex-col items-center">
            <CardHeader>
              <CardTitle className="text-xl font-bold font-heading">1B Supply</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 leading-relaxed font-body">
                Fixed token supply with no possibility of inflation or additional minting.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-blue-900 border-blue-800 text-white text-center p-6 flex flex-col items-center">
            <CardHeader>
              <CardTitle className="text-xl font-bold font-heading">Contract Renounced</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 leading-relaxed font-body">
                Ownership relinquished, ensuring no single entity can modify the contract.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-blue-900 border-blue-800 text-white text-center p-6 flex flex-col items-center">
            <CardHeader>
              <CardTitle className="text-xl font-bold font-heading">Zero % Tax</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 leading-relaxed font-body">
                Zero tax on buys and sells, maximizing value for traders and holders.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-blue-950 text-center">
        <h2 className="text-4xl font-bold mb-8 font-heading">Join HeHua Community</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://t.me/huahuaonbase" aria-label="Telegram" className="text-white hover:opacity-75">
            <Image src="/images/telegram-icon.webp" alt="Telegram" width={40} height={40} />
          </a>
          <a href="https://x.com/basehuahua" aria-label="Twitter" className="text-white hover:opacity-75">
            <Image src="/images/twitter-icon.png" alt="Twitter" width={40} height={40} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm font-body">
        <p>&copy; {new Date().getFullYear()} HuaHua. All rights reserved.</p>
      </footer>
    </div>
  )
}
