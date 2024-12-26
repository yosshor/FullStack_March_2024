import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/buttons/Button'

function App() {
  const [count, setCount] = useState(0)
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      { isButtonVisible && <Button onClick={isButtonVisible} setOnClick={setIsButtonVisible} />} 
      <button onClick={() => setIsButtonVisible(true)}>Close</button>
    </>
  )
}

export default App
