import React from 'react'
import { useState } from 'react'
import './Tile.scss'

const Tile = () => {
    const [color, setColor] = useState('black')
    const [selected, setSelected] = useState(false)

    return (
        <div>
            <h1>Tile</h1>
            <div className={`tile ${color}`}
                onClick={() => {
                    setSelected(!selected)
                    setColor(selected ? 'black' : 'white')
                }}>


            </div>
        </div>

    )
}

export default Tile