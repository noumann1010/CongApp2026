import express from "express";
import cors from "cors";
import { testAI } from "./ai.js";
import sicknessMatcher from "../src/utils/run.js";
import { getHealthInformation } from "./ai.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/match", (req, res) => {
    const selectedSymptoms = req.body.symptoms;

    console.log("Received symptoms:", selectedSymptoms);

    const results = sicknessMatcher(selectedSymptoms);

    res.json(results);
});

app.post("/ai-test", async (req, res) => {
  try {
    const reply = await testAI();
    res.json({ success: true, reply });
  } catch (error) {
    console.error("AI request failed:", error.message);

    res.status(500).json({
      success: false,
      error: "AI request failed. Check the server terminal.",
    });
  }
});

app.listen(5002, () => {
    console.log("Backend running at http://localhost:5002");
}).on("error", (error) => {
    console.error("Server error:", error);
});

app.get("/test-ai", async (req, res) => {
    try {
      const message = await testAI();
  
      res.json({
        success: true,
        message: message,
      });
    } catch (error) {
      console.error("Gemini error:", error.message);
  
      res.status(500).json({
        success: false,
        error: "Gemini API request failed.",
      });
    }
  });

  app.post("/api/ai-advice", async (req, res) => {
    try {
      const { symptoms, duration } = req.body;
  
      if (
        !Array.isArray(symptoms) ||
        symptoms.length === 0 ||
        !symptoms.every(
          (symptom) => typeof symptom === "string"
        ) ||
        typeof duration !== "string" ||
        !duration.trim()
      ) {
        return res.status(400).json({
          success: false,
          error: "Please provide symptoms and duration.",
        });
      }
  
      const advice = await getHealthInformation(
        symptoms,
        duration
      );
  
      res.json({
        success: true,
        advice: advice,
      });
    } catch (error) {
      console.error("AI advice error:", error.message);
  
      res.status(500).json({
        success: false,
        error: "Unable to generate health information.",
      });
    }
  });