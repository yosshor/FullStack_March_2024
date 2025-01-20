import React, { useContext, useState } from 'react';
import PhaserGame from '../../components/game/PhaserGame';
import axios from 'axios';
import { UserContext } from '../home/Home';
import { useNavigate } from 'react-router-dom';
import './Game.scss';

const Game: React.FC = () => {
    const [gameOver, setGameOver] = useState(false);
    const navigate = useNavigate();
    const [score, setScore] = useState(0);
    const { token } = useContext(UserContext);
    if (!token) {
        navigate('/');
    }
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
        <div className='game-wrapper'>
            {!gameOver ? (
                <div className='game-wrapper'>
                    <h1 style={{ color: 'white' }}>Phaser Game</h1>
                    <canvas className= 'canvas-style' >
                        <PhaserGame onGameOver={handleGameOver} />
                    </canvas>
                </div>
            ) : (
                <div className='game-over'>
                    <div>
                        <h2>Game Over! Your score: {score}</h2>
                    </div>
                    <div className='buttons-wrapper'>
                        <button onClick={() => window.location.reload()}>Play Again</button>
                        <button style={{backgroundColor:'lightblue', color:'black'}} onClick={() => navigate('/home')}>Home</button>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default Game;
