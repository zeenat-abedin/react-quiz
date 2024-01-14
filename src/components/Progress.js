import React from "react";

export default function Progress({ index, numOfQuestions }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index}</strong>/{numOfQuestions}
      </p>
    </header>
  );
}
