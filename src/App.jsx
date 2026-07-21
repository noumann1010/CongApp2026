import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import SelectedSymptoms from "./components/SelectedSymptoms";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    

    <div>
       <h1>VirusWatch</h1>

      <SelectedSymptoms />

    </div>

    
  );
}

export default App; 