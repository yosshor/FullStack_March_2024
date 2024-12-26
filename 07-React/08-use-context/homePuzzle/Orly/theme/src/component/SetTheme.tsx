import React, { useState } from 'react'
import styles from './SetTheme'

const themes = [
    { name: 'Red Theme', color: '#ffffff', backgroundColor: '#ff4d4d' },
    { name: 'Blue Theme', color: '#ffffff', backgroundColor: '#4d79ff' },
    { name: 'Green Theme', color: '#ffffff', backgroundColor: '#5cd65c' },
    { name: 'Yellow Theme', color: '#000000', backgroundColor: '#ffff4d' },
    { name: 'Purple Theme', color: '#ffffff', backgroundColor: '#b84dff' },
    { name: 'Orange Theme', color: '#ffffff', backgroundColor: '#ff944d' },
    { name: 'Pink Theme', color: '#ffffff', backgroundColor: '#ff4d94' },
    { name: 'Cyan Theme', color: '#ffffff', backgroundColor: '#4dd2ff' },
    { name: 'Brown Theme', color: '#ffffff', backgroundColor: '#a66a4d' },
    { name: 'Gray Theme', color: '#ffffff', backgroundColor: '#b3b3b3' },
];

const SetTheme = () => {
    const [theme, setTheme] = useState(themes[0]);

    const handleThemeChange = (selectedTheme: typeof themes[0]) => {
        setTheme(selectedTheme);
        document.body.style.backgroundColor = selectedTheme.backgroundColor;
    };

    return (
        <div className={styles.container} style={theme}>
          <h2>Theme Picker</h2>
          <div className={styles.themeList}>
            {themes.map((t, index) => (
              <button
                key={index}
                className={styles.themeButton}
                style={{
                  color: t.color,
                  backgroundColor: t.backgroundColor,
                }}
                onClick={() => handleThemeChange(t)}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
      );
    };

export default SetTheme
