import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HighScores.module.scss';

interface HighScore {
    username: string;
    maxScore: number;
    date: string;
}

const HighScores: React.FC = () => {
    const [highScores, setHighScores] = useState<HighScore[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHighScores = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/scores/high-scores');
                console.log(response.data);
                if (Array.isArray(response.data)) {
                    setHighScores(response.data);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (err) {
                setError('Failed to load high scores.');
            } finally {
                setLoading(false);
            }
        };

        fetchHighScores();
    }, []);

    if (loading) {
        return <p>Loading high scores...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>High Scores Top 10</h2>
            {Array.isArray(highScores) && highScores.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>MaxScore</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {highScores.map((score, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{score.username}</td>
                                <td>{score.maxScore}</td>
                                <td>{new Date(score.date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No high scores available.</p>
            )}
        </div>
    );
};

export default HighScores;
