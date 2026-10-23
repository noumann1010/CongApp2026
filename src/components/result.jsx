import "./results.css";
import { useState,useEffect } from "react";
import ReactMarkdown from "react-markdown";

function ResultPage({  results, selectedSymptoms, duration, onBack }) {
        const [advice, setAdvice] = useState("");
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState("");
      
        useEffect(() => {
          const controller = new AbortController();
      
          async function fetchAdvice() {
            setLoading(true);
            setError("");
            setAdvice("");
      
            try {
              const response = await fetch(
                "http://localhost:5002/api/ai-advice",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    symptoms: selectedSymptoms,
                    duration: duration,
                  }),
                  signal: controller.signal,
                }
              );
      
              const data = await response.json();
      
              if (!response.ok || !data.success) {
                throw new Error(
                  data.error || "Unable to generate AI advice."
                );
              }
      
              setAdvice(data.advice);
            } catch (err) {
              if (err.name !== "AbortError") {
                setError(err.message);
              }
            } finally {
              if (!controller.signal.aborted) {
                setLoading(false);
              }
            }
          }
      
          if (
            Array.isArray(selectedSymptoms) &&
            selectedSymptoms.length > 0 &&
            typeof duration === "string" &&
            duration.trim()
          ) {
            fetchAdvice();
          } else {
            setLoading(false);
            setError("Please select symptoms and a duration.");
          }
      
          return () => controller.abort();
        }, [selectedSymptoms, duration]);

    return (
        <div className="vw-result-container">
            <h1>VirusWatch Results</h1>

            {results.length === 0 ? (
                <p>No matching conditions found.</p>
            ) : (
                results.map((sickness) => (
                    <div key={sickness.id} className="vw-result-card">
                        <h2>{sickness.name}</h2>
                        <p>Matching symptoms: {sickness.matches}</p>

                        <h3>General care information</h3>
                        <ul>
                            {sickness.advice.map((tip, index) => (
                                <li key={index}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                ))
            )}

            <button onClick={onBack}>Back</button>

            <p>
                These results show symptom overlap and are not a
                medical diagnosis.
                They are intended for informational purposes only. Please consult a healthcare professional for any medical concerns.
                The results are based on the information you provided and may not reflect your actual health condition.
                The information provided is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>

            <section className="ai-advice">
                <h2>AI Health Information</h2>

                {loading && (
                    <div className="ai-loading">
                    <div className="ai-spinner"></div>
                    <p>Gemini is preparing your health information...</p>
                    </div>
                )}

                {error && (
                    <div className="ai-error">
                    <p>{error}</p>
                    <p>Please try again later.</p>
                    </div>
                )}

                {!loading && !error && advice && (
                    <div className="ai-content">
                    <ReactMarkdown>{advice}</ReactMarkdown>
                    </div>
                )}

                <p className="ai-disclaimer">
                    VirusWatch provides general educational information,
                    not a medical diagnosis. Consult a healthcare
                    professional for medical concerns.
                </p>
                </section>
        </div>
    );
}

export default ResultPage;

