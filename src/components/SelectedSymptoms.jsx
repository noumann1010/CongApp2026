import "./SelectedSymptoms.css";
import { useState } from "react";

function SelectedSymptoms({ selectedSymptoms, setSelectedSymptoms, onNext }) {
const symptomCategories = [
    {
        category: "General & Whole Body",
        symptoms: [
            "Fever",
            "Chills",
            "Body Aches",
            "Fatigue",
            "Headache",
            "Swollen Lymph Nodes",
            "Difficulty Sleeping",
            "Irritability"
        ]
    },
    {
        category: "Nose, Throat & Ears",
        symptoms: [
            "Sore Throat",
            "Runny Nose",
            "Nasal Congestion",
            "Sneezing",
            "Loss of Taste or Smell",
            "Pain When Swallowing",
            "Swollen Tonsils",
            "Facial Pain",
            "Postnasal Drip",
            "Bad Breath",
            "Ear Pain",
            "Mouth Sores"
        ]
    },
    {
        category: "Chest & Breathing",
        symptoms: [
            "Cough",
            "Shortness of Breath",
            "Mucus",
            "Chest Pain"
        ]
    },
    {
        category: "Stomach & Digestion",
        symptoms: [
            "Nausea",
            "Vomiting",
            "Diarrhea",
            "Stomach Pain",
            "Loss of Appetite"
        ]
    },
    {
        category: "Urinary",
        symptoms: [
            "Pain When Urinating",
            "Frequent Urination",
            "Cloudy Urine",
            "Strong-Smelling Urine"
        ]
    },
    {
        category: "Eyes",
        symptoms: [
            "Eye Redness",
            "Eye Swelling",
            "Watery Eyes",
            "Eye Discharge",
            "Eye Itching"
        ]
    },
    {
        category: "Skin",
        symptoms: [
            "Rash",
            "Skin Itching",
            "Skin Redness",
            "Skin Sores",
            "Skin Discharge",
            "Yellow Crust"
        ]
    }
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

            {error && <p className="vw-error" role="alert">{error}</p>}

            <div className="vw-symptom-categories">
                {symptomCategories.map((category) => (
                    <section
                        key={category.category}
                        className="vw-symptom-category"
                    >
                        <h2 className="vw-symptom-category-title">
                            {category.category}
                        </h2>

                        <div className="vw-symptom-grid">
                            {category.symptoms.map((symptom) => (
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

                                    <span
                                        className="vw-checkbox"
                                        aria-hidden="true"
                                    >
                                        {selectedSymptoms.includes(symptom)
                                            ? "✓"
                                            : ""}
                                    </span>

                                    <span className="vw-symptom-name">
                                        {symptom}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <button
                type="button"
                className="vw-next-button"
                onClick={handleContinue}
            >
                Continue
            </button>
        </div>
    );
}

export default SelectedSymptoms;