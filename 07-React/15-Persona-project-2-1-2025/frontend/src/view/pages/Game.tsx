import React, { useState } from 'react';
import PhaserGame from '../components/game/PhaserGame';
import axios from 'axios';

const Game: React.FC = () => {
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    const handleGameOver = async (finalScore: number) => {
        setScore(finalScore);
        setGameOver(true);
        console.log('Game Over! Your score: ', finalScore);
        await fetch('http://localhost:3000/api/scores/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ score: finalScore }),
            credentials: 'include',
            
        }
        )
        // await axios.post('http://localhost:3000/api/scores/save', { email: 'testMail', username: 'Player1', score: finalScore });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
            {!gameOver ? (
                <div className='game-wrapper' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
                    <h1 style={{ color: 'white' }}>Phaser Game</h1>
                    <canvas style={{ height: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }} >
                        <PhaserGame onGameOver={handleGameOver} />
                    </canvas>
                </div>
            ) : (
                <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                    <h2>Game Over! Your score: {score}</h2>
                    <button onClick={() => window.location.reload()}>Play Again</button>
                </div>
            )
            }
        </div >
    );
};

export default Game;
