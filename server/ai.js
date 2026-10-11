import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { fileURLToPath } from "node:url";

dotenv.config({
  path: fileURLToPath(new URL(".env", import.meta.url)),
});

export async function testAI() {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Missing GEMINI_API_KEY in server/.env");
  }

  // Initialize the client. It automatically uses process.env.GEMINI_API_KEY
  const ai = new GoogleGenAI({});

  const interaction = await ai.interactions.create({
    model: process.env.GEMINI_MODEL || "gemini-3.8-flash",
    input: "Reply with exactly: The AI API is working!",
  });

  if (!interaction.output_text?.trim()) {
    throw new Error("The API returned no text.");
  }

  return interaction.output_text;
}
