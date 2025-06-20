import React from "react";
import "./Progress.css";
import { useProgress } from "../context/ProgressContext";
import questionData from "../data/questiondata.json";

const Progress = () => {
  const { progressData, resetProgress } = useProgress();

  const getTotalQuestions = (difficulty) =>
    Object.values(questionData).reduce(
      (sum, chapter) => sum + (chapter[difficulty]?.length || 0),
      0
    );

  const totalEasy = getTotalQuestions("easy");
  const totalMedium = getTotalQuestions("medium");
  const totalHard = getTotalQuestions("hard");

  const getSolved = (difficulty) =>
    Object.values(progressData).reduce(
      (sum, chapter) => sum + (chapter[difficulty] || 0),
      0
    );

  return (
    <div className="progress-page">
      <h1 className="progress-heading">📊 Your Progress</h1>
      <div className="progress-container">
        <div className="progress-box easy-box">
          <p>🟢 Easy</p>
          <p>Solved: {getSolved("easy")} / {totalEasy}</p>
        </div>
        <div className="progress-box medium-box">
          <p>🟠 Medium</p>
          <p>Solved: {getSolved("medium")} / {totalMedium}</p>
        </div>
        <div className="progress-box hard-box">
          <p>🔴 Hard</p>
          <p>Solved: {getSolved("hard")} / {totalHard}</p>
        </div>
      </div>
      <button className="reset-button" onClick={resetProgress}>
        🔄 Reset Progress
      </button>
    </div>
  );
};

export default Progress;
