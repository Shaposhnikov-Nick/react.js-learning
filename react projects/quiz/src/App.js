import { useState } from 'react'
import './index.scss'

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: [
      'приложение',
      'часть приложения или страницы',
      'то, что я не знаю что такое',
    ],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
]

function Result({ correctCount, restartGame }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correctCount} ответа из {questions.length}
      </h2>
      <button onClick={restartGame}>Попробовать снова</button>
    </div>
  )
}

function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100)
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li key={index} onClick={() => onClickVariant(index)}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  )
}

function App() {
  const [step, setStep] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const question = questions[step]

  const onClickVariant = (index) => {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrectCount(correctCount + 1)
    }
  }

  const restartGame = () => {
    setStep(0)
    setCorrectCount(0)
  }

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correctCount={correctCount} restartGame={restartGame} />
      )}
    </div>
  )
}

export default App
