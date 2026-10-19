import "./results.css";
import { useState } from "react";

function ResultPage({ results, onBack }) {
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
        </div>
    );
}

export default ResultPage;

