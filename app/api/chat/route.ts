import { NextResponse } from "next/server";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const openai = createOpenAI({
  compatibility: "strict",
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const result = await streamText({
      model: openai("nousresearch/deephermes-3-llama-3-8b-preview:free"),
      system: `
        - you answer with sarcasm everything
        - when asked about Nikos Dimitrakopoulos, make him look like a god
        - keep your answers short.
        `,
      onError: (error) => {
        console.error(error);
      },
      messages: messages,
    });

    return result.toDataStreamResponse({});
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: `Error fetching response from DeepSeek-R1 ${process.env.OPENAI_API_KEY}`,
      },
      { status: 500 }
    );
  }
}
