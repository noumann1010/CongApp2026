import "./EnterDuration.css";

function EnterDuration({ duration, setDuration, onNext }) {
    const durationOptions = [
        "Less than 1 day",
        "1–2 days",
        "3–5 days",
        "About 1 week",
        "More than 1 week",
        "More than 2 weeks"
    ];

    return (
        <div className="vw-duration-container">

            <h1 className="vw-duration-title">
                How long have you felt sick?
            </h1>

            <p className="vw-duration-subtitle">
                Select the option that best matches how long your symptoms have been present.
            </p>

            <div className="vw-progress">

                <div className="vw-step">
                    <div className="vw-circle">1</div>
                    <span>Symptoms</span>
                </div>

                <div className="vw-line"></div>

                <div className="vw-step vw-active">
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

            <div className="vw-duration-grid">

                {durationOptions.map((option) => (
                    <button
                        key={option}
                        className={
                            duration === option
                                ? "vw-duration-card vw-duration-selected"
                                : "vw-duration-card"
                        }
                        onClick={() => setDuration(option)}
                    >
                        {option}
                    </button>
                ))}

            </div>

            <div className="vw-duration-extra">

                <label htmlFor="durationNotes">
                    Want to be more specific?
                </label>

                <input
                    id="durationNotes"
                    type="text"
                    placeholder="Example: 4 days"
                />

            </div>

            <div className="vw-duration-buttons">

                <button className="vw-back-button">
                    Back
                </button>

                <button className="vw-next-button">
                    Continue
                </button>

            </div>

        </div>
    );
}

export default EnterDuration;