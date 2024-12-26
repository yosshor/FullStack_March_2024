import { useEffect, useState } from 'react'

import './App.scss'
import Input from './views/Components/inputs/Input'

function App() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)
  const [number4, setNumber4] = useState(0)
  const [higherNumber, setHigherNumber] = useState(0)



  useEffect(() => {
    setHigherNumber(Math.max(number1, number2, number3, number4));
  }, [number1, number2, number3, number4])



  return (
    <div className="app-container">
    <h1>Find the Highest Number</h1>
    <div className="inputs-container">
      <Input setNumber={setNumber1} />
      <Input setNumber={setNumber2} />
      <Input setNumber={setNumber3} />
      <Input setNumber={setNumber4} />
    </div>
    <div className="results">
      <p>Total: {number1 + number2 + number3 + number4}</p>
      <p>Highest Number: {higherNumber}</p>
    </div>
  </div>
  )
}

export default App
