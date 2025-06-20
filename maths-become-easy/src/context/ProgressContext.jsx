// context/ProgressContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progressData, setProgressData] = useState(() => {
    const saved = localStorage.getItem("progressData");
    return saved ? JSON.parse(saved) : {};
  });

  const [questionStatus, setQuestionStatus] = useState(() => {
    const saved = localStorage.getItem("questionStatus");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("progressData", JSON.stringify(progressData));
  }, [progressData]);

  useEffect(() => {
    localStorage.setItem("questionStatus", JSON.stringify(questionStatus));
  }, [questionStatus]);

  const updateQuestionStatus = (chapter, qId, status, difficulty) => {
    const currentStatus = questionStatus[chapter]?.[qId];
    if (currentStatus === status) return;

    setQuestionStatus((prev) => ({
      ...prev,
      [chapter]: {
        ...(prev[chapter] || {}),
        [qId]: status,
      },
    }));

    setProgressData((prev) => {
      const prevCount = prev?.[chapter]?.[difficulty] || 0;
      let updatedCount = prevCount;

      if (status === "correct") {
        if (currentStatus !== "correct") updatedCount += 1;
      } else if (currentStatus === "correct" && status === "wrong") {
        updatedCount -= 1;
      }

      return {
        ...prev,
        [chapter]: {
          ...(prev[chapter] || {}),
          [difficulty]: updatedCount,
        },
      };
    });
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all progress?")) {
      setProgressData({});
      setQuestionStatus({});
      localStorage.removeItem("progressData");
      localStorage.removeItem("questionStatus");
    }
  };

  return (
    <ProgressContext.Provider
      value={{ progressData, questionStatus, updateQuestionStatus, resetProgress }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
