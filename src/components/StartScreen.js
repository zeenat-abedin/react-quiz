import React from "react";

import { useQuiz } from "../contexts/QuizContext";

export default function StartScreen() {
  const { numOfQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numOfQuestions} questions to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "start" });
        }}
        id="start-btn"
      >
        Let's start
      </button>
    </div>
  );
}
