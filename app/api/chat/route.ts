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

    // ---- call Grok (xAI) ----------------------------------------------------
    const grokRes = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-3", // <-- switched from grok-1 to grok-3
        messages: [{ role: "user", content: prompt }],
      }),
    })

    if (!grokRes.ok) {
      const err = await grokRes.json().catch(() => ({}))
      console.error("Grok API error:", grokRes.status, err)
      return Response.json(
        { error: err.error || "Failed to get response from AI service." },
        { status: grokRes.status },
      )
    }

    const data = await grokRes.json()
    const content: string = data?.choices?.[0]?.message?.content ?? "No response from AI."

    return Response.json({ content })
  } catch (e) {
    console.error("AI route error:", e)
    return Response.json({ error: "Server error." }, { status: 500 })
  }
}
