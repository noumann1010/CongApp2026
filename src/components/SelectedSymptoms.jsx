import "./SelectedSymptoms.css";

function SelectedSymptoms({ selectedSymptoms, setSelectedSymptoms }) {
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

            <button className="vw-next-button">
                Continue
            </button>

        </div>
    );
}

export default SelectedSymptoms;