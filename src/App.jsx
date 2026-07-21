import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import SymptomPage from "./components/symptomPage";
import EnterDuration from "./components/EnterDuration";
import SelectedSymptoms from "./components/SelectedSymptoms";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>VirusWatch</h1>

      <SymptomPage />

      <EnterDuration />
    </>
  );
}

export default App; 