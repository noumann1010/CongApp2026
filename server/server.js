import express from "express";
import cors from "cors";

import sicknessMatcher from "../src/utils/run.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/match", (req, res) => {
    const selectedSymptoms = req.body.symptoms;

    console.log("Received symptoms:", selectedSymptoms);

    const results = sicknessMatcher(selectedSymptoms);

    res.json(results);
});

app.listen(5002, () => {
    console.log("Backend running at http://localhost:5002");
}).on("error", (error) => {
    console.error("Server error:", error);
});