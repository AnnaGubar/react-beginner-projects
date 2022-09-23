import { useState } from "react";
import { Container } from "../components/Container";
import "../styles/quiz.scss";

const questions = [
  {
    title: "React - is a/an... ?",
    variants: ["library", "framework", "application"],
    correct: 0,
  },
  {
    title: "Component - is ... ",
    variants: [
      "application",
      "part of an application or page",
      "what I don't know what is",
    ],
    correct: 1,
  },
  {
    title: "What is JSX?",
    variants: [
      "It is sipmle HTML",
      "It is a function",
      "This is the same HTML, but with the ability to execute JS code",
    ],
    correct: 2,
  },
];

export function QuizPage() {
  const [step, setStep] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const question = questions[step];

  const onClickVariant = (variantIndex) => {
    setStep(step + 1); // переключает вопросы

    if (variantIndex === question.correct) {
      setCorrectAnswer(correctAnswer + 1);
    }
  };

  return (
    <Container>
      <div className="body">
        <div className="QuizPage">
          {step !== questions.length ? (
            <Game
              step={step}
              question={question}
              onClickVariant={onClickVariant}
            />
          ) : (
            <Result correctAnswer={correctAnswer} />
          )}
        </div>
      </div>
    </Container>
  );
}

function Game({ step, question, onClickVariant }) {
  const percent = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li key={text} onClick={() => onClickVariant(index)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function Result({ correctAnswer }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt=""
      />
      <h2>
        You guessed {correctAnswer} answers out of {questions.length}
      </h2>
      {/* перезагрузка страницы при клике на кнопку */}
      {/* <a href="/react-beginner-projects/quiz"> */}
      <a href="https://annagubar.github.io/react-beginner-projects/quiz">
        <button>Try again</button>
      </a>
    </div>
  );
}
