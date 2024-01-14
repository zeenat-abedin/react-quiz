import React from "react";

export default function Progress({
  index,
  numOfQuestions,
  points,
  maxPossiblePoints,
}) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong>/{numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints} points
      </p>
    </header>
  );
}
