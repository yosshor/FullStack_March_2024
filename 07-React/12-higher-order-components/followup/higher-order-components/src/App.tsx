import { useState } from 'react'
import './App.css'
import Modal from './view/components/Modal/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    <Modal onClose={() => console.log('close')}>
      <div>Modal Content</div>
      <h1>In Modal</h1>
      <button onClick={() => console.log('submit')}>Submit</button>
    </Modal>

      <Modal onClose={() => console.log('close')}>
        <div>New modal content</div>
        <h1>Article</h1>
        <button onClick={() => console.log('submit')}>Submit</button>
      </Modal>
    </>
  )
}

export default App
