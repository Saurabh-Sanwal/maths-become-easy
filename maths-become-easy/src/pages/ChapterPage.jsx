import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import questionData from "../data/questiondata.json";
import "./ChapterPage.css";

const ChapterPage = () => {
  const { chapterId } = useParams();
  const chapter = questionData[chapterId];
  const [difficulty, setDifficulty] = useState(null);

  const formatTitle = (id) =>
    id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  if (!chapter) {
    return (
      <div className="chapter-page">
        <h2 className="chapter-title">Chapter Not Found</h2>
      </div>
    );
  }

  return (
    <div className="chapter-page">
      <h1 className="chapter-title">{formatTitle(chapterId)}</h1>
      <div className="difficulty-icons">
        <div
          className="difficulty-box easy"
          onClick={() => setDifficulty("easy")}
        >
          Easy
        </div>
        <div
          className="difficulty-box medium"
          onClick={() => setDifficulty("medium")}
        >
          Medium
        </div>
        <div
          className="difficulty-box hard"
          onClick={() => setDifficulty("hard")}
        >
          Hard
        </div>
      </div>
      {difficulty && (
        <QuestionSection
          questions={chapter[difficulty] || []}
          chapterKey={chapterId}
          difficulty={difficulty}
        />
      )}
    </div>
  );
};

const QuestionSection = ({ questions, chapterKey, difficulty }) => {
  const { questionStatus, updateQuestionStatus } = useProgress();
  const [showAnswers, setShowAnswers] = useState({});

  const handleClick = (q, option) => {
    // If already answered same status, do nothing
    const correct = option === q.answer;
    updateQuestionStatus(chapterKey, q.id, correct ? "correct" : "wrong", difficulty);
  };

  const toggleAnswer = (id) => {
    setShowAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="question-section">
      {questions.map((q, idx) => {
        const status = questionStatus?.[chapterKey]?.[q.id]; // "correct", "wrong", or undefined

        return (
          <div key={q.id} className="question-card">
            {/* Top row: question text + icon */}
            <div className="question-top">
              <div className="question-text">
                <strong>Q{idx + 1}:</strong> {q.question}
              </div>
              {status && (
                <div className="tick-icon-container">
                  {status === "correct" ? (
                    <img
                      src="/tick.png"
                      alt="Correct"
                      className="tick-icon"
                    />
                  ) : (
                    <img
                      src="/wrong.png"
                      alt="Wrong"
                      className="wrong-icon"
                    />
                  )}
                </div>
              )}
            </div>

            {/* Options */}
            <ul className="options-list">
              {q.options.map((opt, i) => (
                <li key={i} onClick={() => handleClick(q, opt)}>
                  {opt}
                </li>
              ))}
            </ul>

            {/* View Answer */}
            <button
              className="view-answer-button"
              onClick={() => toggleAnswer(q.id)}
            >
              View Answer
            </button>
            {showAnswers[q.id] && (
              <p className="answer-text">Correct Answer: {q.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ChapterPage;
