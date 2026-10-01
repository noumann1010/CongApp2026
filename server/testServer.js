const response = await fetch("http://localhost:5002/match", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    symptoms: ["fever", "cough", "fatigue"]
  })
});

console.log("Status:", response.status);
console.log("Content-Type:", response.headers.get("content-type"));

const text = await response.text();

console.log("Response from server:");
console.log(text);