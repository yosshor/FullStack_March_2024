import './App.css'
import SetTheme from './view/components/setTheme/SetTheme';
import { ThemeProvider, useTheme } from './view/components/ThemeContext/ThemeContext';


const AppContent = () => {
  const { theme } = useTheme();

  const themes: { color: string; backgroundColor: string }[] = [
    { color: 'white', backgroundColor: 'black' },
    { color: 'black', backgroundColor: 'white' },
    { color: 'red', backgroundColor: 'yellow' },
    { color: 'yellow', backgroundColor: 'blue' },
    { color: 'green', backgroundColor: 'pink' },
    { color: 'purple', backgroundColor: 'orange' },
    { color: 'cyan', backgroundColor: 'darkblue' },
    { color: 'gold', backgroundColor: 'darkgreen' },
    { color: 'brown', backgroundColor: 'lightgray' },
    { color: 'teal', backgroundColor: 'lavender' },
  ];

  return (
    <div
    style={{
      backgroundColor: theme.backgroundColor,
      minHeight: '100vh', 
      margin: 0,
      padding: '20px',
      textAlign: 'center',
      color: theme.color, 
    }}
  >
      <h1 style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
        Theme Picker
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        {themes.map((t, index) => (
          <SetTheme key={index} {...t} />
        ))}
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;

