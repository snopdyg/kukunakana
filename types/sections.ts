export type SectionType = "image" | "text" | "text-image-split"

export interface Section {
  id: string
  title: string
  type: SectionType
  text?: string // Untuk tipe 'text' atau 'text-image-split'
  image?: string // Untuk tipe 'image' atau 'text-image-split' (path ke gambar)
}

export const sections: Section[] = [
  {
    id: "xrp-trench-warriors", // ID tetap sama untuk konsistensi
    title: "BASE TRENCH WARRIORS", // Mengubah judul
    type: "text-image-split",
    text: `Pongo isn’t just any skunk—he’s a warrior born in the meme coin trenches, where countless tokens rise and fall in the blink of an eye. Born with black and white fur, Pongo wears his colors with pride, symbolizing his loyalty to XRP and his mission to unite meme coins under one flag. For Pongo, the XRP blockchain isn’t just a platform—it’s his battleground, and he’s ready to lead the meme coin revolution.

1. Supply Posts [Where to buy]:
   - First Ledger [DEX]
   - XP Market [DEX]
   - X Magnetic [DEX]
   - MEXC
2. Listings and Updates:
   - Coingecko
   - CMC
   - MoonTok
   - CN Token`,
    image: "/images/static-right-image.png", // Gambar yang sesuai dengan bagian ini
  },
  {
    id: "pongos-mission",
    title: "PONGO'S MISSION",
    type: "text-image-split", // Mengubah tipe menjadi text-image-split
    text: `Pongo stands boldly against the conventional currents of the crypto world, challenging the status quo with every transaction. His mission is to break free from the chains of traditional investment norms, where speculative frenzy often overshadows true potential. Pongo isn't here to follow trends; he's here to set them, sparking a movement where creativity, community, and courage are the new currencies. He aims to redefine what it means to be a meme coin on Base — not just as a fleeting jest but as a symbol of resilience and innovation.`,
    image: "/images/second-right-image.png", // Menggunakan gambar bendera (gambar 2)
  },
  {
    id: "the-base-army", // Mengubah ID dan judul
    title: "THE BASE ARMY",
    type: "text-image-split", // Mengubah tipe menjadi text-image-split
    text: `Pongo's call is not just for followers but for fellow warriors. He seeks to unite all who have faith in the power of memes to disrupt, innovate, and unite. Under Pongo's leadership, the community isn't just a group of investors; it's a legion of like-minded individuals bound by the shared goal of transforming the meme coin landscape. Together, they aim to create a cohesive front, leveraging the strength of the Base blockchain to fight for visibility, value, and victory in the crypto wars. Pongo’s troop is where every member is both a soldier and a strategist in this grand meme coin crusade.`,
    image: "/images/third-right-image.png", // Menggunakan gambar parit (gambar 3)
  },
  {
    id: "the-attack-plan",
    title: "THE ATTACK PLAN",
    type: "text-image-split", // Mengubah tipe menjadi text-image-split
    text: `1. Uniting the Troops:
Objective: Assemble a formidable force of meme coin enthusiasts and Base believers.
Strategy: Rally the scattered forces under Pongo’s banner. Promote unity through shared vision, community events, and exclusive token benefits. Establish a command center on Telegram where strategies are discussed and camaraderie is built.

2. Invading the Enemy:
Objective: Disrupt the dominance of established meme coins and conquer new territories.
Strategy: Launch surprise attacks via significant token burns, strategic partnerships, and showcasing Pongo's unique features. Utilize the Base blockchain’s speed and efficiency to outmaneuver competitors, capturing market share and investor interest.

3. Growing the Community:
Objective: Expand our ranks to include both seasoned warriors and fresh recruits.
Strategy: Implement a rigorous recruitment campaign with educational content, interactive AMAs, and incentivized participation in community activities. Develop a loyalty program where every action taken by members directly contributes to the token's growth and stability.

4. Listing on Exchanges:
Objective: Secure strategic positions by listing on major and niche exchanges.
Strategy: Engage in diplomatic talks with exchange leaders, showcasing Pongo's potential and community support. Prepare for a coordinated assault with a series of listings to ensure broad accessibility and liquidity, turning each listing into a victory parade for our troops.

5. Guerrilla Marketing:
Objective: Wage unconventional warfare to capture the market's attention.
Strategy: Deploy unexpected marketing maneuvers like flash mob events, viral social media campaigns, and meme contests. Use the element of surprise with pop-up events and flash giveaways in unexpected places, both online and offline, to keep Pongo at the forefront of investors' minds.

With these stages, PONGO aims to not only survive but thrive in the meme coin trenches, transforming from a mere participant to a dominant force on Base, leading the charge towards a new era of meme coin supremacy.`,
    image: "/images/fourth-right-image.png", // Gambar deklarasi perang tetap ada
  },
]

// Daftar semua gambar untuk tampilan gulir awal
export const allScrollableImages = [
  "/images/static-right-image.png",
  "/images/third-right-image.png",
  "/images/fourth-right-image.png",
]
