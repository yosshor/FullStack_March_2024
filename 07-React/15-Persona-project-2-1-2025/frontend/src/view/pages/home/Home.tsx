import React, { useEffect, createContext } from 'react';
import HighScores from '../../components/score/HighScore';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import { COOKIE_NAME } from '../../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setLogout } from '../../../store/slices/userSlice';

const cookieName = COOKIE_NAME as string;
console.log("cookieName", cookieName);
export const getCookie = (name: string): string | null => {
    const value = document.cookie;
    const cookie = value.split(';').find((c) => c.trim().startsWith(name));
    const parts = cookie ? cookie.split(";")[0] : null;
    return parts;
};

let token = getCookie(cookieName);
export const UserContext = createContext({ token: token });


const Home: React.FC = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    console.log('user', user);


    const handleLogOut = () => {
        console.log('User logged out!');
        document.cookie = `${cookieName}=; Max-Age=0; path=/`;
        dispatch(setLogout());
        console.log('user',user)
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
        <div style={{width:'60vw', height:'95vh'}}>
            <div style={{ gap: '10px',position:'relative',  }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '50px',
                    top:'20px',
                    marginBottom:'100px'

                }}>

                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <h2>Welcome {user.userName && user.userName}!</h2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button style={{ backgroundColor: '#FF0000' }} onClick={handleLogOut}>Log Out</button>
                    </div>

                </div>
            </div>
            <div className={styles.container} style={{width:'60%', 
                justifyContent:'center',
                 position:'absolute'}}>
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
        </div>
    );
};



export default Home;

