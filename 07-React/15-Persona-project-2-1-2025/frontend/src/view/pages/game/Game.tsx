import React, { useContext, useEffect, useState } from 'react';
import StarshipGame from '../../components/game/StarshipGame';
import { getCookie, UserContext } from '../home/Home';
import { useNavigate } from 'react-router-dom';
import './Game.scss';
import { useGameViewModel } from './gameViewModel';
import { COOKIE_NAME } from '../../../../config';
import Modal from '../../components/modal/Modal';

const cookieName = COOKIE_NAME as string;

const Game: React.FC = () => {
    const navigate = useNavigate();
    const { token } = useContext(UserContext);
    const { header, score, comment, gameOver, error, handleGameOver } = useGameViewModel();

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
                    <StarshipGame onGameOver={handleGameOver} />
                </div>
            ) : (
                <Modal title="Game Over" onClose={() => navigate('/home')}>
                    <div className='game-over'>
                        <div>
                            <h2 style={{ color: 'black' }}>{header}</h2>
                            <h3 style={{ color: 'black', whiteSpace: 'pre-line' }}>{comment}</h3>
                        </div>
                        <div className='buttons-wrapper'>
                            <button onClick={() => window.location.reload()}>Play Again</button>
                            <button style={{ backgroundColor: 'lightblue', color: 'black' }}
                                onClick={() => navigate('/home')}>Home</button>
                        </div>
                    </div>
                </Modal>
            )
            }
        </div >
    );
};

export default Game;
