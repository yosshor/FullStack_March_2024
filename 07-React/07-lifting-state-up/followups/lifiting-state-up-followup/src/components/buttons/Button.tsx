import React, { FC } from 'react'

interface ButtonProps {
    onClick: boolean,
    setOnClick: (onClick: boolean) => void
}


const Button: FC<ButtonProps> = ({ onClick, setOnClick }) => {


    return (
        <button onClick={() => setOnClick(false)}>Click Me</button>
    )
}

export default Button