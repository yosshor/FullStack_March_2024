
import { useState } from 'react'
import './App.css'
import { Popup } from './view/components/popup/Popup'


function App() {
 
  const [isOpen, setIsOpen] = useState(false)

  function handleShowPopup() {
    setIsOpen(state=>!state)
  }

  return (
    <>
      <div>
        <h1>Popup</h1>
        {isOpen && <Popup  openFn={handleShowPopup} />}
          <button onClick={handleShowPopup}>Click me!</button>
       
      </div>
    </>
  )
}

export default App
