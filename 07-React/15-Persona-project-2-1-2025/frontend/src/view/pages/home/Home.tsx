import React, { useEffect, createContext } from 'react';
import HighScores from '../../components/score/HighScore';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../login/LoginPage';

// const cookieName = process.env.COOKIE_NAME as string;
import { COOKIE_NAME } from '../../../../config';

const cookieName = COOKIE_NAME as string;
console.log("cookieName", cookieName);
const getCookie = (name: string): string | null => {
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
        navigate('/'); // Redirect to login page
      };


    useEffect(() => {
        const cookie = document.cookie;
        token = cookie ? getCookie(cookieName) : null;
        console.log(token);
        if (!token) {
            navigate('/');
        }
    }
        , [navigate]);


    return (
        <>
            <div>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
            <div style={styles.container}>
                <h1 style={styles.title}>Welcome to Space Shooter!</h1>
                <p style={styles.description}>
                    Test your reflexes and shooting skills in this thrilling game! Destroy meteors, score points, and challenge the leaderboard.
                </p>
                <button style={styles.playButton} onClick={() => navigate('/game')}>
                    Start Game
                </button>
                <div style={styles.scoresSection}>
                    <h2 style={styles.scoresTitle}>Leaderboard</h2>
                    <HighScores />
                </div>
            </div>
        </>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        textAlign: 'center',
        margin: '0 auto',
        maxWidth: '800px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '3rem',
        color: '#333',
        marginBottom: '20px',
    },
    description: {
        fontSize: '1.5rem',
        color: '#555',
        marginBottom: '40px',
    },
    playButton: {
        backgroundColor: '#007BFF',
        color: '#fff',
        padding: '15px 30px',
        fontSize: '1.2rem',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    scoresSection: {
        marginTop: '50px',
    },
    scoresTitle: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '20px',
    },
};

export default Home;
