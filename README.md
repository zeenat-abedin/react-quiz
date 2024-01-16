# Quiz App

This is a simple quiz app built using React. The app fetches a list of questions from a local JSON file and allows the user to answer them. The user has a limited amount of time to answer each question, and they earn points for each correct answer. The app keeps track of the user's progress and displays their score at the end of the quiz.

### Getting Started

To run the app, you will need to have Node.js and npm installed. Once you have these installed, you can clone the repository and run the following commands:

```
npm install
npm start
```

This will start the development server and open the app in your default browser.

### Code Overview

The app is written in React and uses the following libraries:

- `react-router-dom` for routing
- `axios` for making HTTP requests
- `useReducer` for state management

The app consists of the following components:

- `App`: The main component of the app. It renders the header, main, and footer components.
- `Header`: The header component displays the app's title and a link to the start screen.
- `Main`: The main component displays the current question, the answer options, and the progress bar.
- `Loader`: The loader component is displayed while the app is loading the questions.
- `Error`: The error component is displayed if there is an error loading the questions.
- `StartScreen`: The start screen component is displayed when the app is first loaded. It allows the user to start the quiz.
- `Question`: The question component displays the current question and the answer options.
- `NextButton`: The next button component allows the user to move to the next question.
- `Progress`: The progress component displays the user's progress through the quiz.
- `FinishScreen`: The finish screen component is displayed when the user has completed the quiz. It shows the user's score and allows them to restart the quiz.

### Code Explanation

The following is a step-by-step explanation of the code:

1. The `App` component is the main component of the app. It renders the header, main, and footer components.

```javascript
function App() {
  const [
    { status, questions, index, answer, points, highScore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

```
