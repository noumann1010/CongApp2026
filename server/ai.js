import OpenAI from "openai";
import dotenv from "dotenv";
import { fileURLToPath } from "node:url";

dotenv.config({
  path: fileURLToPath(new URL(".env", import.meta.url)),
});

export async function testAI() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY in server/.env");
  }

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await client.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-6-astra",
    input: "Reply with exactly: The AI API is working!",
  });

  if (!response.output_text?.trim()) {
    throw new Error("The API returned no text.");
  }

  return response.output_text;
}