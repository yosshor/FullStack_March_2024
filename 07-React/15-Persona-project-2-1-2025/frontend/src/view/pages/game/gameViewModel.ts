import { useState } from "react";

export const useGameViewModel = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [error, setError] = useState("");

  const handleGameOver = async (finalScore: number) => {
    setScore(finalScore);
    setGameOver(true);
    console.log("Game Over! Your score: ", finalScore);
    try {
      await fetch("http://localhost:3000/api/scores/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ score: finalScore }),
        credentials: "include",
      });
    } catch (err) {
      setError("Invalid username or password");
    }
    // await axios.post('http://localhost:3000/api/scores/save', { email: 'testMail', username: 'Player1', score: finalScore });
  };
  return { score, gameOver, error, handleGameOver };
};
