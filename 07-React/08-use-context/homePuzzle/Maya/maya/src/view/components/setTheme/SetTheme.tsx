import React from 'react';
import { useTheme } from '../ThemeContext/ThemeContext';
import style from '../setTheme/SetTheme.module.scss';

interface SetThemeProps {
    color: string;
    backgroundColor: string;
  }
  
  const SetTheme: React.FC<SetThemeProps> = ({ color, backgroundColor }) => {
    const { setTheme } = useTheme();
  
    const applyTheme = () => {
      setTheme({ color, backgroundColor });
    };
  
    return (
      <button
        className={style.button}
        style={{ color, backgroundColor }}
        onClick={applyTheme}
      >
        Set Theme
      </button>
    );
  };
  
  export default SetTheme;