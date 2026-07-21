import { useState } from "react";

function SelectedSymptoms() {
    const symptoms = [
        "Fever",
        "Cough",
        "Sore Throat",
        "Headache",
        "Body Ache",
        "Runny Nose",
        "Nausea",
        "Diarrhea",
        "Shortness of Breath"
    ];

    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

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
        <div className="selected-symptoms">

            <h1>Check your Symptoms!</h1>

            <p>Answer these questions, let VirusWatch do the rest!</p>

            <div className="progress-bar">

                <div className="step active">
                    <div className="circle">1</div>
                    <span>Symptoms</span>
                </div>

                <div className="line"></div>

                <div className="step">
                    <div className="circle">2</div>
                    <span>Duration</span>
                </div>

                <div className="line"></div>

                <div className="step">
                    <div className="circle">3</div>
                    <span>Other Details</span>
                </div>

                <div className="line"></div>

                <div className="step">
                    <div className="circle">4</div>
                    <span>Results</span>
                </div>

            </div>

            <div className="symptom-grid">

                {symptoms.map((symptom) => (
                    <label
                        key={symptom}
                        className={
                            selectedSymptoms.includes(symptom)
                                ? "symptom-card selected"
                                : "symptom-card"
                        }
                    >
                        <input
                            type="checkbox"
                            checked={selectedSymptoms.includes(symptom)}
                            onChange={() => toggleSymptom(symptom)}
                        />

                        <span className="checkbox">
                            {selectedSymptoms.includes(symptom) ? "✓" : ""}
                        </span>

                        <h3>{symptom}</h3>

                    </label>
                ))}

            </div>

            <button className="next-button">
                Continue
            </button>

        </div>
    );
}

export default SelectedSymptoms;