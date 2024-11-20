import React from 'react'
import { FC } from 'react'
import './Tile.scss'
import PiecesType from '../pieces/PiecesType'

interface TileProps {
    value: number,
    type?: string
}


const Tile: FC<TileProps> = ({ value, type }) => {

    const tile = <div id={`id-${value.toString()}`} className={value % 2 === 0 ? `chess-cell-even ${type}` : `chess-cell-odd ${type}`}
        key={value}
        onClick={(event: any) => {
            console.log(event.target.id)
            document.querySelectorAll('.selected').forEach((tile) => {
                tile.classList.remove('selected')
            })
            event.target.classList.toggle('selected')
        }}
        typeof={type}
    >
        {/* {type} */}
        {/* <PiecesType type={type} /> */}
    </div>
    return (
        <>{tile}</>

    )
}

export default Tile