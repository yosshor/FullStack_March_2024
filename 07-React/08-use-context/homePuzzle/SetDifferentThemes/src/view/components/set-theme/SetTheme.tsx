import React, { FC, useState } from 'react'
import color from '../../../data/colorData/colorData'
import styles from './SetTheme.module.scss'

interface SetThemeProps {
    setTheme: (color: string) => void
}

const SetTheme: FC<SetThemeProps> = ({ setTheme }) => {
    const [TitleColor, setTitleColor] = useState('black')
    const changeTheme = (backgroundColor: string, colorName: string) => {
        console.log(backgroundColor, TitleColor)
        setTitleColor(colorName === 'white' ? 'black' : 'white')
        setTheme(backgroundColor)
    }

    return (
        <>
            <h1 style={{ color: TitleColor }}>SetTheme</h1>
            <div className="buttons-color">
                {color.map(({color, backgroundColor, name}, index) => {
                    return (
                        <button
                            key={index}
                            style={{ color: color, backgroundColor: backgroundColor }}
                            className={styles.button}
                            onClick={() => changeTheme(backgroundColor, name)}>
                            {name}
                        </button>
                    )
                })}
            </div>
        </>
    )
}

export default SetTheme