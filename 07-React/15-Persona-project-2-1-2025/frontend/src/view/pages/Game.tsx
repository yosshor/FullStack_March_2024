import React, { useState } from 'react';
import PhaserGame from '../components/game/PhaserGame';
import axios from 'axios';

const Game: React.FC = () => {
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    const handleGameOver = async (finalScore: number) => {
        setScore(finalScore);
        setGameOver(true);

        await axios.post('/api/scores/save', { username: 'Player1', score: finalScore });
    };

    return (
        <div>
            {!gameOver ? (
                <PhaserGame onGameOver={handleGameOver} />
            ) : (
                <div>
                    <h2>Game Over! Your score: {score}</h2>
                    <button onClick={() => window.location.reload()}>Play Again</button>
                </div>
            )}
        </div>
    );
};

export default Game;
