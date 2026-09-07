import { useState } from 'react'
import "./components/index.css";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import SelectedSymptoms from "./components/SelectedSymptoms";
import Duration from "./components/duration";
import OtherDetails from "./components/otherDetails";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [step, setStep] = useState(1);
  const [duration, setDuration] = useState("");



  return (
  
    <div>
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
                    onNext={() => setStep(4)}
                />
            )}
    </div>

  );  
}

export default App; 