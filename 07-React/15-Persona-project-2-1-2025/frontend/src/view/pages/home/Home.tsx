import React, { useEffect, createContext } from 'react';
import HighScores from '../../components/score/HighScore';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import styles from './Home.module.scss';
// const cookieName = process.env.COOKIE_NAME as string;
import { COOKIE_NAME } from '../../../../config';

const cookieName = COOKIE_NAME as string;
console.log("cookieName", cookieName);
export const getCookie = (name: string): string | null => {
    const value = document.cookie;
    const parts = value ? value.split(`${name}=`)[1].split(";")[0] : null;
    return parts;
};

let token = getCookie(cookieName);
export const UserContext = createContext({ token: token });

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        console.log('User logged out!');
        document.cookie = `${cookieName}=; Max-Age=0; path=/`;
        window.location.reload()
    };


    useEffect(() => {
        const cookie = document.cookie;
        token = cookie ? getCookie(cookieName) : null;
        if (!token) {
            navigate('/');
        }
    }, [navigate]);


    return (
        <>
            <div>
                <button style={{ backgroundColor: 'lightseagreen' }} onClick={handleLogOut}>Log Out</button>
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>Welcome to Space Shooter!</h1>
                <p className={styles.description}>
                    Test your reflexes and shooting skills in this thrilling game! Destroy meteors, score points, and challenge the leaderboard.
                </p>
                <button className='playButton' style={{ backgroundColor: 'lightseagreen' }} onClick={() => navigate('/game')}>
                    Start Game
                </button>
                <div className={styles.scoresSection}>
                    <h2 className={styles.scoresTitle}>Leaderboard</h2>
                    <HighScores />
                </div>
            </div >
        </>
    );
};



export default Home;
