import React, {useEffect, useRef, useState} from 'react'
import {RiJavascriptLine} from 'react-icons/ri'
import ResultModel from '../resultmodel/ResultModel'

const JsQuestionPage = () => {
  // console.log({kiranprops: props})

  const [questionNumber, setQuestionNumber] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [countCorrectAnswer, setCountCorrectAnswer] = useState(0)
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  console.log(showResult)
  // const [countCorrectAnswer, setCountCorrectAnswer] = useState(0)
  // console.log('countCorrectAnswer', countCorrectAnswer)
  const correctAnswersRef = useRef(0)

  const questionsArray = [
    {
      id: 1,
      question: 'Which of the following is NOT a JavaScript data type?',
    },

    {
      id: 2,
      question: 'How do you declare a variable in JavaScript?',
    },
    {
      id: 3,
      question:
        'Which built-in method removes the last element from an array and returns that element?',
    },
    {
      id: 4,
      question: 'What is the result of the expression: 5 + "5" in JavaScript?',
    },
    {
      id: 5,
      question:
        'Which function is used to print content to the console in JavaScript?',
    },
    {
      id: 6,
      question: 'How do you write a comment in JavaScript?',
    },
    {
      id: 7,
      question: 'What does the typeof operator return in JavaScript?',
    },
    {
      id: 8,
      question:
        'Which built-in method returns the length of a string in JavaScript?',
    },
    {
      id: 9,
      question: 'How do you add a comment in a JavaScript function?',
    },
    {
      id: 10,
      question:
        'What is the result of the expression: 10 == "10" in JavaScript?',
    },
  ]

  const answerArray = [
    {
      id: 1,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'String',
      answerTwo: 'Boolean',
      answerThree: 'Float',
      answerFour: 'Object',
      correctAnswer: 'C',
    },
    {
      id: 2,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'var myVariable;',
      answerTwo: ' variable myVariable;',
      answerThree: 'v myVariable;',
      answerFour: ' let myVariable;',
      correctAnswer: 'D',
    },
    {
      id: 3,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'pop()',
      answerTwo: 'push()',
      answerThree: 'shift()',
      answerFour: 'unshift()',
      correctAnswer: 'A',
    },
    {
      id: 4,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: '55',
      answerTwo: '10',
      answerThree: '"55"',
      answerFour: 'Error',
      correctAnswer: 'C',
    },
    {
      id: 5,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'console.log()',
      answerTwo: 'print()',
      answerThree: 'log()',
      answerFour: 'debug()',
      correctAnswer: 'A',
    },
    {
      id: 6,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: '<!--This is a comment-->',
      answerTwo: "'This is a comment'",
      answerThree: '/* This is a comment */',
      answerFour: ' // This is a comment',
      correctAnswer: 'D',
    },
    {
      id: 7,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'The type of a variable',
      answerTwo: 'The size of a variable',
      answerThree: 'The value of a variable',
      answerFour: 'The length of a variable',
      correctAnswer: 'A',
    },
    {
      id: 8,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'length()',
      answerTwo: 'getLength()',
      answerThree: 'size()',
      answerFour: 'length',
      correctAnswer: 'D',
    },
    {
      id: 9,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: '// This is a comment',
      answerTwo: '<!-- This is a comment -->',
      answerThree: ' /* This is a comment */',
      answerFour: ' ** This is a comment **',
      correctAnswer: 'C',
    },
    {
      id: 10,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'true',
      answerTwo: 'false',
      answerThree: 'Error',
      answerFour: 'NaN',
      correctAnswer: 'A',
    },
  ]

  const currentQuestion = questionsArray[questionNumber]
  const currentAnswer = answerArray[questionNumber]

  const handleAnswerSelection = (selectedOption: any) => {
    setSelectedAnswer(selectedOption)

    const correctAnswer = currentAnswer.correctAnswer

    setIsAnswerCorrect(selectedOption === correctAnswer)
  }

  const handleOnSubmitButtonClick = () => {
    console.log(isAnswerCorrect ? 'Correct!' : 'Incorrect')
    if (isAnswerCorrect) {
      setCountCorrectAnswer((prev) => prev + 1) // Increment countCorrectAnswer if the answer is correct
    }
    if (questionNumber < questionsArray.length - 1) {
      setQuestionNumber((prev) => prev + 1)
    } else {
      // Handle submission for last question
      setQuizSubmitted(true) // Set quizSubmitted to true after submitting
      setShowResult(true) // Show result after submitting
    }
    setSelectedAnswer(null)
    setIsAnswerCorrect(false)
  }

  // const handleOnResultClick = () => {
  //   setShowResult(true)
  // }

  const handleOnOkClick = () => {
    setShowResult(false)
  }

  // console.log({kiran: props})

  return (
    <div className='questionPage_wrapper'>
      <div className='questionPage'>
        <div className='subject_wrapper'>
          <div className='icon'>
            <RiJavascriptLine />
          </div>
          <div className='subject'>Javascript</div>
        </div>
        <div className='questionPage_container'>
          <div className='questionPage_left'>
            <div className='numb_of_questions'>
              Questions {questionNumber + 1} of 10
            </div>
            <div key={currentQuestion.id} className='question'>
              {currentQuestion?.question}
            </div>
            <progress
              className='progress_bar'
              value={(questionNumber + 1) * 10}
              max='100'
            >
              {(questionNumber + 1) * 10}%
            </progress>
          </div>
          <div key={currentAnswer.id} className='questionPage_right'>
            <div
              className='option_wrapper'
              onClick={() => handleAnswerSelection('A')}
            >
              <div className='letter'>{currentAnswer.optionA}</div>
              <div className='answer'>{currentAnswer.answerOne}</div>
            </div>
            <div
              className='option_wrapper'
              onClick={() => handleAnswerSelection('B')}
            >
              <div className='letter'>{currentAnswer.optionB}</div>
              <div className='answer'>{currentAnswer.answerTwo}</div>
            </div>
            <div
              className='option_wrapper'
              onClick={() => handleAnswerSelection('C')}
            >
              <div className='letter'>{currentAnswer.optionC}</div>
              <div className='answer'>{currentAnswer.answerThree}</div>
            </div>
            <div
              className='option_wrapper'
              onClick={() => handleAnswerSelection('D')}
            >
              <div className='letter'>{currentAnswer.optionD}</div>
              <div className='answer'>{currentAnswer.answerFour}</div>
            </div>
            {questionNumber < questionsArray.length - 1 ? (
              <button onClick={handleOnSubmitButtonClick} className='btn'>
                Next Question
              </button>
            ) : (
              <button onClick={handleOnSubmitButtonClick} className='btn'>
                Submit
              </button>
            )}
          </div>
        </div>
        <div className='model'>
          {showResult && (
            <ResultModel
              correctAnswers={countCorrectAnswer}
              showResult={showResult}
              setShowResult={handleOnOkClick}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default JsQuestionPage

// questionOne,
// questionTwo,
// questionThree,
// questionFour,
// questionFive,
// questionSix,
// questionSeven,
// questionEight,
// questionNine,
// questionTen,
// answer1,
// answer2,
// answer3,
// answer4,
// answer5,
// answer6,
// answer7,
// answer8,
// answer9,
// answer10,
// answer11,
// answer12,
// answer13,
// answer14,
// answer15,
// answer16,
// answer17,
// answer18,
// answer19,
// answer20,
// answer21,
// answer22,
// answer23,
// answer24,
// answer25,
// answer26,
// answer27,
// answer28,
// answer29,
// answer30,
// answer31,
// answer32,
// answer33,
// answer34,
// answer35,
// answer36,
// answer37,
// answer38,
// answer39,
// answer40,
// correctAnswerOne,
// correctAnswerTwo,
// correctAnswerThree,
// correctAnswerFour,
// correctAnswerFive,
// correctAnswerSix,
// correctAnswerSeven,
// correctAnswerEight,
// correctAnswerNine,
// correctAnswerTen,

// export default jsQuestionPage
