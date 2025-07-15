import type { NextRequest } from "next/server"

export const runtime = "nodejs" // ensure Node runtime (fetch with secret)

export async function POST(req: NextRequest) {
  try {
    const { prompt } = (await req.json()) as { prompt?: string }

    if (!prompt || !prompt.trim()) {
      return Response.json({ error: "Prompt is empty." }, { status: 400 })
    }

    const apiKey = process.env.SUMOPOD_API_KEY
    if (!apiKey || !apiKey.startsWith("sk-")) {
      // Changed to a generic error message
      return Response.json({ error: "AI service unavailable. Please try again later." }, { status: 500 })
    }

    const upstream = await fetch("https://ai.sumopod.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
        temperature: 0.7,
      }),
    })

    if (!upstream.ok) {
      const err = await upstream.json().catch(() => ({}))
      return Response.json({ error: err?.error?.message || "Upstream error" }, { status: upstream.status })
    }

    const data = await upstream.json()
    return Response.json({ content: data.choices?.[0]?.message?.content ?? "" })
  } catch (e) {
    return Response.json({ error: (e as Error).message ?? "Server error" }, { status: 500 })
  }
}
