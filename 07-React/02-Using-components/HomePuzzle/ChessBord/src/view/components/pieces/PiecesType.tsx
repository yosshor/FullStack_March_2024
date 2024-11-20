import React from 'react'
import { FC } from 'react'

interface PiecesTypeProps {
    type?: string
}



const PiecesType:FC<PiecesTypeProps> = (type) => {
    switch (type.type) {
        case 'pawn':
            return (
                <div>Pawn</div>
            )
        case 'rook':
            return (
                <div>Rook</div>
            )
        case 'knight':
            return (
                <div>Knight</div>
            )
        case 'bishop':
            return (
                <div>Bishop</div>
            )
        case 'queen':
            return (
                <div>Queen</div>
            )
        case 'king':
            return (
                <div>King</div>
            )
        default:
            return (
                <div>Invalid</div>
            )
    }
}

export default PiecesType