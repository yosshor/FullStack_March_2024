import React from 'react'
import './ChessBoard.scss'
import Tile from '../tile/Tile';


const ChessBoard = () => {

    const board = [];
    for (let i = 0; i < 8; i++) {
        const row = [];
        for (let j = 0; j < 8; j++) {
            const type = i === 1 ? "pawn" :
                i === 6 ? "pawn-white" :
                    (i === 0 && (j === 0 || j === 7)) ? "rook" :
                        i === 7 && (j === 0 || j === 7) ? "rook-white" :
                            (i === 0 && (j === 1 || j === 6)) ? "knight" :
                                i === 7 && (j === 1 || j === 6) ? "knight-white" :
                                    (i === 0 && (j === 2 || j === 5)) ? "bishop" :
                                        i === 7 && (j === 2 || j === 5) ? "bishop-white" :
                                            (i === 0 && (j === 3)) ? "queen" :
                                                i === 7 && (j === 4) ? "queen-white" :
                                                    (i === 0 && (j === 4)) ? "king" :
                                                        i === 7 && (j === 3) ? "king-white" : "";
            const tile = <Tile value={j + i} type={type} />
            row.push(tile);
        }
        board.push(row);
    }
    return (
        <div className='chess-wrapper'>
            <h1>Chess</h1>
            <div className='chess-board'>
                {board} </div>
        </div>


    )
}

export default ChessBoard