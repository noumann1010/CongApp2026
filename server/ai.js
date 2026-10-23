import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { fileURLToPath } from "node:url";

dotenv.config({
  path: fileURLToPath(new URL(".env", import.meta.url)),
});

// Initialize Gemini once, so both functions can use it.
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const MODEL = process.env.GEMINI_MODEL || "gemini-3.8-flash";

// Function 1: Test the API
export async function testAI() {
  const response = await ai.models.generateContent({
    model: MODEL,
    contents: "Reply with exactly: The AI API is working!",
  });

  return response.text;
}

// Function 2: Generate health information
export async function getHealthInformation(symptoms, duration) {
  const prompt = `
You are a health education assistant for a student project called VirusWatch.

User's symptoms: ${symptoms.join(", ")}
Duration: ${duration}

Please provide:
1. Possible general explanations for these symptoms.

Rules:
- Use simple, clear English.
- ...
`;

// Retry temporary Gemini failures up to 3 times.
for (let attempt = 1; attempt <= 3; attempt++) {
  try {
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: prompt,
    });

    const advice = response.text?.trim();

    if (!advice) {
      throw new Error("Gemini returned an empty response.");
    }

    return advice;
  } catch (error) {
    const message = error.message || "";

    const isTemporaryError =
      error.status === 503 ||
      error.code === 503 ||
      message.includes('"code":503') ||
      message.includes("UNAVAILABLE") ||
      message.includes("high demand");

    // Don't retry unrelated errors.
    if (!isTemporaryError) {
      throw error;
    }

    console.log(
      `Gemini is busy. Attempt ${attempt} of 3 failed.`
    );

    if (attempt === 3) {
      throw error;
    }

    // Wait before trying again.
    await new Promise((resolve) =>
      setTimeout(resolve, attempt * 2000)
    );
  }
}
}