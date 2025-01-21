import React, { useContext, useEffect, useState } from 'react';
import PhaserGame from '../../components/game/PhaserGame';
import axios from 'axios';
import { getCookie, UserContext } from '../home/Home';
import { useNavigate } from 'react-router-dom';
import './Game.scss';
import { useGameViewModel } from './gameViewModel';
import { COOKIE_NAME } from '../../../../config';

const cookieName = COOKIE_NAME as string;

const Game: React.FC = () => {
    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    const { score, gameOver, error, handleGameOver } = useGameViewModel();
    
    useEffect(() => {
        if (!token) {
            const newToken = getCookie(cookieName);
            if (!newToken) {
                navigate('/');
            }
        }
    }, [token]);



    return (
        <div className='game-wrapper'>
            {error && <div>{error}</div>}
            {!gameOver ? (
                <div >
                    <h1 style={{ color: 'white' }}>Phaser Game</h1>
                    <PhaserGame onGameOver={handleGameOver} />
                </div>
            ) : (
                <div className='game-over'>
                    <div>
                        <h2>Game Over! Your score: {score}</h2>
                    </div>
                    <div className='buttons-wrapper'>
                        <button onClick={() => window.location.reload()}>Play Again</button>
                        <button style={{ backgroundColor: 'lightblue', color: 'black' }} onClick={() => navigate('/home')}>Home</button>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default Game;
