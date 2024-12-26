import { useState, createContext, useContext, Children } from "react";

interface Theme {
    color: string;
    backgroundColor: string;
  }
  
  const ThemeContext = createContext<{
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  }>({
    theme: { color: 'white', backgroundColor: 'black' },
    setTheme: () => {},
  });

  export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>({ color: 'white', backgroundColor: 'black' });
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export const useTheme = () => useContext(ThemeContext);
