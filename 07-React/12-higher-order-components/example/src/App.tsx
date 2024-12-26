import { useState } from 'react'
import './App.css'
import Modal from './view/components/modal/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Modal>
        <h1>Modal</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      </Modal>
      <Modal>
        <h1>Hi</h1>
      </Modal>

    </>
  )
}

export default App
