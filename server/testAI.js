import { testAI } from "./ai.js";

try {
  const result = await testAI();

  console.log("Gemini test successful!");
  console.log("Response:", result);
} catch (error) {
  console.error("Gemini test failed.");
  console.error("Error:", error.message);
}