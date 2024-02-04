import { createContext, useContext, useEffect, useReducer } from "react";

//creating the context
const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, status: "ready", questions: action.payload };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index); //The state.index is assumed to be a variable that holds the current index of the question being accessed. So, the code is about getting the question at the current index of the list of questions in the state object.
      return {
        ...state,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points, //If the action.payload (i.e., the data that is being passed to the reducer function as part of a Redux action) matches the correctOption, then the points property is updated to be the current value of state.points plus the points value of the question object.
        answer: action.payload,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return { ...initialState, status: "ready", question: state.questions };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Invalid Action Type");
  }
}

//cproviding the context
function QuizProvider({ children }) {
  const [
    { status, questions, index, answer, points, highScore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(() => {
    fetch(`http://localhost:8000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  <QuizContext.Provider
    value={{
      status,
      questions,
      index,
      answer,
      points,
      highScore,
      secondsRemaining,
      numOfQuestions,
      maxPossiblePoints,
      dispatch,
    }}
  >
    {children}
  </QuizContext.Provider>;
}

//consuming the context
function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("QuizContext was used outside the QuizProvider");
  }
  return context;
}

export { QuizProvider, useQuiz };
