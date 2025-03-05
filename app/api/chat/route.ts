// pages/api/chat.ts
import { NextResponse } from "next/server";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const openai = createOpenAI({
  // custom settings, e.g.
  compatibility: "strict",
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY, // Store your API key in environment variables
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const result = await streamText({
      model: openai("deepseek/deepseek-r1:free"),
      prompt: messages.map((message: any) => message.content).join("\n"),
    });

    return result.toDataStreamResponse({});
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching response from DeepSeek-R1" },
      { status: 500 }
    );
  }
}
