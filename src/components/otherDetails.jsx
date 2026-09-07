import "./EnterDuration.css";


function OtherDetails({ onBack, onNext }) {
    return (
        <div className="vw-duration-container">

            <h1 className="vw-duration-title">
                Other Details
            </h1>

            <p className="vw-duration-subtitle">
                Are there any other details you would like to share about your symptoms?
            </p>

            <div className="vw-progress">

                <div className="vw-step">
                    <div className="vw-circle">1</div>
                    <span>Symptoms</span>
                </div>

                <div className="vw-line"></div>

                <div className="vw-step">
                    <div className="vw-circle">2</div>
                    <span>Duration</span>
                </div>

                <div className="vw-line"></div>

                <div className="vw-step vw-active">
                    <div className="vw-circle">3</div>
                    <span>Other Details</span>
                </div>

                <div className="vw-line"></div>

                <div className="vw-step">
                    <div className="vw-circle">4</div>
                    <span>Results</span>
                </div>

            </div>

            
            <div className="vw-details-extra">

                

                <textarea
                    id="detailNotes"
                    placeholder="Let us know any other details you would like to share"
                />

            </div>

            <div className="vw-duration-buttons">

                <button className="vw-back-button" onClick={onBack}>
                    Back
                </button>

                <button className="vw-next-button" onClick={onNext}>
                    Continue
                </button>

            </div>

        </div>

    )

}

export default OtherDetails;

