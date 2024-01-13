import React from "react";

export default function StartScreen({ numOfQuestions }) {
  return (
    <div className="">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numOfQuestions} questions to test your React Mastery</h3>
      <button className="btn btn-ui" onClick={() => {}} id="start-btn">
        Let's start
      </button>
    </div>
  );
}
