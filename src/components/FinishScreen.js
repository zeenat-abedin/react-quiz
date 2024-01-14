import React from "react";

export default function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      You have scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {Math.ceil(percentage)}%)
    </p>
  );
}
