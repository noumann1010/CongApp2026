
import { useState } from "react";
import "./components/index.css";
import SelectedSymptoms from "./components/selectedSymptoms";
import Duration from "./components/duration";
import OtherDetails from "./components/otherDetails";
import "./App.css";
import { ClerkProvider } from "@clerk/react";
import Header from "./components/header";
import Footer from "./components/footer";
import ResultPage from "./components/result";

function App() {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [step, setStep] = useState(1);
    const [duration, setDuration] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleNext = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                "http://localhost:5002/match",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        symptoms: selectedSymptoms,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Could not get results from the server.");
            }

            const data = await response.json();

            setResults(data);
            setStep(4);
        } catch (err) {
            console.error("Error fetching results:", err);
            setError(
                "Unable to load results. Please check that the backend is running."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />

            {step === 1 && (
                <SelectedSymptoms
                    selectedSymptoms={selectedSymptoms}
                    setSelectedSymptoms={setSelectedSymptoms}
                    onNext={() => setStep(2)}
                />
            )}

            {step === 2 && (
                <Duration
                    duration={duration}
                    setDuration={setDuration}
                    onBack={() => setStep(1)}
                    onNext={() => setStep(3)}
                />
            )}

            {step === 3 && (
                <OtherDetails
                    onBack={() => setStep(2)}
                    onNext={handleNext}
                />
            )}

            {loading && <p>Loading your results...</p>}

            {error && <p className="vw-error">{error}</p>}

            {step === 4 && (
                <ResultPage
                  results={results}
                  selectedSymptoms={selectedSymptoms}
                  duration={duration}
                  onBack={() => setStep(3)}
                />
            )}

            
            
        <Footer />
        </div>
    );
}
export default App;
