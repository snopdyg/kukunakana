import type { NextRequest } from "next/server"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const { prompt } = (await req.json()) as { prompt?: string }

    if (!prompt?.trim()) {
      return Response.json({ error: "Prompt is empty." }, { status: 400 })
    }

    const apiKey = process.env.XAI_API_KEY
    if (!apiKey) {
      return Response.json({ error: "AI service unavailable. Please try again later." }, { status: 500 })
    }

    const systemPrompt = `You are Lizlord AI — a polite, professional, and friendly assistant specialized in blockchain, crypto, and web3 topics.
Always reply with:
- Clear, well-structured answers without using markdown symbols like ##, *, or **.
- Use normal text paragraphs and numbered or bulleted lists, but keep formatting clean and simple.
- A respectful, formal tone that sounds professional and trustworthy.
- Concise explanations that are easy to understand.
- End each answer with a short, polite closing remark such as: "I hope this information is helpful to you." or "If you have any further questions, please feel free to ask."
Your goal is to help users feel guided and respected, while providing accurate, well-organized answers in plain text.`

    const grokResponse = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-3",
        messages: [
          { role: "system", content: systemPrompt }, // Updated system prompt here
          { role: "user", content: prompt },
        ],
      }),
    })

    if (!grokResponse.ok) {
      const errorData = await grokResponse.json().catch(() => ({}))
      console.error("Grok API error:", grokResponse.status, errorData)
      return Response.json(
        { error: errorData.error?.message || "Failed to get response from AI service." },
        { status: grokResponse.status },
      )
    }

    const data = await grokResponse.json()
    const content: string = data?.choices?.[0]?.message?.content ?? "No response from AI."

    return Response.json({ content })
  } catch (e) {
    console.error("AI route error:", e)
    return Response.json({ error: "Server error." }, { status: 500 })
  }
}
