import React from "react";

export default function NextButton({
  answer,
  dispatch,
  index,
  numOfQuestions,
}) {
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
          dispatch({ type: "nextQuestion" });
        }}
      >
        Finish
      </button>
    );
  }
}
