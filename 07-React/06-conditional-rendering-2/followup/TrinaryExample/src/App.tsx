import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [even, setEven] = useState(true)

  if (even === true ) {
    return (
      <>
        <div>
          <h1 className={'even'} onClick={() => setEven(false)}>
            {count}
          </h1>
        </div>
      </>
    )
  }


  return (
    <>
      <div>
        <button className={count % 2 === 0 ? 'even' : 'odd'} onClick={() => setCount(count + 1)}>
          {count}
        </button>
      </div>

    </>
  )
}

export default App
