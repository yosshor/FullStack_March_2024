import { useEffect, useState } from 'react'
import './App.scss'
import SetTheme from './view/components/set-theme/SetTheme'

function App() {
  const [theme, setTheme] = useState("white")

  useEffect(() => {
    console.log(theme)
    document.body.style.backgroundColor = theme
  }, [theme])



  return (
    <>
      <div className="theme">
        <SetTheme setTheme={setTheme} />
      </div>
    </>
  )
}

export default App
