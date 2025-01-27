import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter1 from './components/counter1/Counter1'
import { Counter } from './components/counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Counter1 />
        <Counter />
      </div>
    </>
  )
}

export default App
