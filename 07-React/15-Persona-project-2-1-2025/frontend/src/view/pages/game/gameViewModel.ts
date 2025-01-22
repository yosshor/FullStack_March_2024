import { set } from "mongoose";
import { useState } from "react";

export const useGameViewModel = () => {
  const [newScore, setNewScore] = useState(0);
  const [score, setOldScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [error, setError] = useState("");
  const [comment, setComment] = useState<string>("");
  const [header, setHeader] = useState<string>("");


  async function getHighScore(finalScore: number) {
    try {
      const response = await fetch(
        "http://localhost:3000/api/scores/get-user-high-scores",
        {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data: { email: string; maxScore: number } = await response.json();
      console.log(data);
      setOldScore(data.maxScore);
      if (data.maxScore < finalScore) {
        setComment(
          `Your Max Score : ${data.maxScore} \n Congratulations! You have a new high score!`
        );
      } else {
        setComment(
          `Your Max Score : ${data.maxScore} \n You can do better! Try again!`
        );
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  const handleGameOver = async (finalScore: number) => {
    setNewScore(finalScore);
    setGameOver(true);
    setHeader(`Game Over! Your score: ${finalScore}`);
    await getHighScore(finalScore);
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
    console.log("gameOver",finalScore, score, newScore, comment, gameOver, error);
  };
  return { header, score, newScore, comment, gameOver, error, handleGameOver };
};
