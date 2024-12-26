import { useState } from 'react';
import SetTheme from './view/components/setTheme/SetTheme';
import './App.scss';

const themes = [
  { color: '#FFFFFF', backgroundColor: '#FF5733' },
  { color: '#000000', backgroundColor: '#33FF57' },
  { color: '#FFFFFF', backgroundColor: '#3357FF' },
  { color: '#FFFFFF', backgroundColor: '#FF33A1' },
  { color: '#000000', backgroundColor: '#FFC300' },
  { color: '#FFFFFF', backgroundColor: '#DAF7A6' },
  { color: '#FFFFFF', backgroundColor: '#581845' },
  { color: '#000000', backgroundColor: '#C70039' },
  { color: '#FFFFFF', backgroundColor: '#900C3F' },
  { color: '#FFFFFF', backgroundColor: '#FFC300' },
];

const App = () => {
  const [activeTheme, setActiveTheme] = useState(themes[0]);

  const handleThemeChange = (theme: any) => {
    setActiveTheme(theme);
  };

  return (
    <div className="app" style={{ backgroundColor: activeTheme.backgroundColor }}>
      <h1 style={{ color: activeTheme.color }}>Theme Picker</h1>
      <div className="theme-container">
        {themes.map((theme, index) => (
          <SetTheme key={index} theme={theme} onClick={() => handleThemeChange(theme)} />
        ))}
      </div>
    </div>
  );
};

export default App;
