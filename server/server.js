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

   app.get("/api/cdc", async (req, res) => {
   try {
       const url = new URL(
           "https://data.cdc.gov/api/v3/views/f3zz-zga5/query.json"
       );


       // Request recent records, newest week first
       url.searchParams.set("$order", "week_end DESC");
       url.searchParams.set("$limit", "100");


       const response = await fetch(url);


       if (!response.ok) {
           throw new Error(`CDC API error: ${response.status}`);
       }


       const data = await response.json();


       // Keep only records from the newest reporting week
       const latestWeek = data[0]?.week_end;


       const latestRecords = data.filter(
           (record) => record.week_end === latestWeek
       );


       const alerts = latestRecords.map((record) => ({
           state: record.geography,
           date: record.week_end,
           level: record.label,
           title: "Respiratory Illness Activity"
       }));


       console.log("CDC records returned:", alerts.length);


       res.json(alerts);
   } catch (error) {
       console.error("CDC API error:", error.message);


       res.status(500).json({
           error: "Unable to fetch CDC data"
       });
   }
});
