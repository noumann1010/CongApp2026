import "./SelectedSymptoms.css";
import { useState } from "react";

function SelectedSymptoms({ selectedSymptoms, setSelectedSymptoms, onNext }) {
    const symptoms = [
    "Fever",
    "Chills",
    "Cough",
    "Shortness of Breath",
    "Sore Throat",
    "Runny Nose",
    "Nasal Congestion",
    "Body Aches",
    "Headache",
    "Fatigue",
    "Nausea",
    "Vomiting",
    "Diarrhea",
    "Loss of Taste or Smell",
    "Sneezing",
    "Pain When Swallowing",
    "Swollen Tonsils",
    "Swollen Lymph Nodes",
    "Stomach Pain",
    "Facial Pain",
    "Postnasal Drip",
    "Bad Breath",
    "Ear Pain",
    "Difficulty Sleeping",
    "Irritability",
    "Mucus",
    "Chest Pain",
    "Pain When Urinating",
    "Frequent Urination",
    "Cloudy Urine",
    "Strong-Smelling Urine",
    "Eye Redness",
    "Eye Swelling",
    "Watery Eyes",
    "Eye Discharge",
    "Eye Itching",
    "Rash",
    "Mouth Sores",
    "Loss of Appetite",
    "Skin Itching",
    "Skin Redness",
    "Skin Sores",
    "Skin Discharge",
    "Yellow Crust"
];

    const [error, setError] = useState("");

    function handleContinue() {
        if (selectedSymptoms.length === 0) {
            setError("Please select at least one symptom.");
            return;
        }
        setError(""); 
        onNext();
    }

    function toggleSymptom(symptom) {
        if (selectedSymptoms.includes(symptom)) {
            setSelectedSymptoms(
                selectedSymptoms.filter(item => item !== symptom)
            );
        } else {
            setSelectedSymptoms([...selectedSymptoms, symptom]);
        }
    }

    return (
        <div className="vw-symptoms-container">

            <h1 className="vw-symptoms-title">
                Check your Symptoms!
            </h1>

            <p className="vw-symptoms-subtitle">
                Answer these questions, let VirusWatch do the rest!
            </p>

            <div className="vw-progress">

                <div className="vw-step vw-active">
                    <div className="vw-circle">1</div>
                    <span>Symptoms</span>
                </div>

                <div className="vw-line"></div>

                <div className="vw-step">
                    <div className="vw-circle">2</div>
                    <span>Duration</span>
                </div>

                <div className="vw-line"></div>

                <div className="vw-step">
                    <div className="vw-circle">3</div>
                    <span>Other Details</span>
                </div>

                <div className="vw-line"></div>

                <div className="vw-step">
                    <div className="vw-circle">4</div>
                    <span>Results</span>
                </div>

            </div>
            {error && <p className="vw-error">{error}</p>}

            <div className="vw-symptom-grid">

                {symptoms.map((symptom) => (
                    <label
                        key={symptom}
                        className={
                            selectedSymptoms.includes(symptom)
                                ? "vw-symptom-card vw-selected"
                                : "vw-symptom-card"
                        }
                    >

                        <input
                            type="checkbox"
                            checked={selectedSymptoms.includes(symptom)}
                            onChange={() => toggleSymptom(symptom)}
                        />

                        <span className="vw-checkbox">
                            {selectedSymptoms.includes(symptom) ? "✓" : ""}
                        </span>

                        <span className="vw-symptom-name">
                            {symptom}
                        </span>

                    </label>
                ))}

            </div>

            

            <button className="vw-next-button" onClick={handleContinue}>
                Continue

            </button>

        </div>
    );
}

export default SelectedSymptoms;