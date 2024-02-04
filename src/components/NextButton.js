import React from "react";

import { useQuiz } from "../contexts/QuizContext";

export default function NextButton() {
  const { answer, dispatch, index, numOfQuestions } = useQuiz();

  if (answer === null) return null;

  if (index < numOfQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );
  }
  if (index === numOfQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "finish" });
        }}
      >
        Finish
      </button>
    );
  }
}
