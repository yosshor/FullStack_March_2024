import { useState } from "react";
import { ThemeContext } from "./AppCont";
import Header from "./view/header/Header";
import './App.css';

const App = () => {
  const [theme, setTheme] = useState("light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider
      value={{
        mode: theme,
        toggleTheme: handleToggleTheme,
      }}
    >
      <div className={theme === "dark"?"dark app":"light app"}>
        <Header />
        <h1>App</h1>
        <button onClick={handleToggleTheme}>Toggle</button>
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
