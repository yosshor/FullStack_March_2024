import { useState } from 'react'
import { BlackContext } from "./Context/BlackCont";
import { BlueContext } from './Context/BlueCont';
import { BrownContext } from './Context/BrownCont';
import { GreenContext } from './Context/GreenCont';
import { GreyContext } from './Context/GreyCont';
import { OrangeContext } from './Context/OrangeCont';
import { PinkContext } from './Context/PinkCont';
import { PurpleContext } from './Context/PurpleCont';
import { RedContext } from './Context/RedCont';
import { YellowContext } from './Context/YellowCont';
import './App.css'

function App() {
  const [theme, setTheme] = useState("light")
  function handleToggleTheme(color:string) {
    setTheme(color);
  }

  return (
    <>
    <div className={`app ${theme}`}>
    <BlackContext.Provider
      value={{
        mode: theme,
        toggleTheme: handleToggleTheme,
      }}
    >
      
        <button onClick={() => handleToggleTheme("black")}>Black</button>
      
    </BlackContext.Provider>
    <BlueContext.Provider
    value={{
      mode: theme,
      toggleTheme: handleToggleTheme,
    }}
  >
    
      <button onClick={() => handleToggleTheme("blue")}>Blue</button>
    
  </BlueContext.Provider>
  </div>
  </>
  );
}

export default App
