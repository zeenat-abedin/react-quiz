import React from "react";

export default function NextButton({ answer, dispatch }) {
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
