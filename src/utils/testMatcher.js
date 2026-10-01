import sicknessMatcher from "./run.js";

const userSymptoms = [
    "Fever",
    "Cough",
    "Fatigue"
];

const results = sicknessMatcher(userSymptoms);

console.log(results);