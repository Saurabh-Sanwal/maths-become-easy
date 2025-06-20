import React from "react";
import { useNavigate } from "react-router-dom";
import "./Chapters.css"; // For styling

const chapterList = [
  { id: "set-theory", name: "Set Theory" },
  { id: "relations-functions", name: "Relations & Functions" },
  { id: "combinatorics", name: "Combinatorics & Permutations" },
  { id: "probability", name: "Probability" },
  { id: "statistics", name: "Statistics" },
  { id: "differentiation", name: "Differentiation" },
  { id: "integration", name: "Integration" },
  { id: "limits-continuity", name: "Limits & Continuity" },
  { id: "number-theory", name: "Number Theory" },
  { id: "trigonometry", name: "Trigonometry" }
];

const Chapters = () => {
  const navigate = useNavigate();

  const handleChapterClick = (id) => {
    navigate(`/chapters/${id}`);
  };

  return (
    <div className="chapters-container">
      <h1 className="chapter-title">📘 Choose a Math Chapter</h1>
      <div className="chapter-grid">
        {chapterList.map((chapter) => (
          <div
            key={chapter.id}
            className="chapter-card"
            onClick={() => handleChapterClick(chapter.id)}
          >
            {chapter.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapters;
