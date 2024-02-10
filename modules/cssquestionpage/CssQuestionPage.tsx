import React, {useEffect, useRef, useState} from 'react'
import {IoLogoCss3} from 'react-icons/io'
import ResultModel from '../resultmodel/ResultModel'

const CssQuestionPage = () => {
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
      question: 'What does CSS stand for?',
    },

    {
      id: 2,
      question:
        'Which property is used to change the background color of an element?',
    },
    {
      id: 3,
      question: 'What does the "em" unit represent in CSS?',
    },
    {
      id: 4,
      question:
        'Which CSS property is used to control the spacing between lines of text?',
    },
    {
      id: 5,
      question:
        'Which of the following is the correct way to select an element with the id "header" in CSS?',
    },
    {
      id: 6,
      question:
        'Which CSS property is used to add rounded corners to an element?',
    },
    {
      id: 7,
      question: 'How can you include an external CSS file in an HTML document?',
    },
    {
      id: 8,
      question: 'Which CSS property is used to make text italic?',
    },
    {
      id: 9,
      question: 'What is the default value of the position property in CSS?',
    },
    {
      id: 10,
      question: 'Which CSS property is used to change the color of the text?',
    },
  ]

  const answerArray = [
    {
      id: 1,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'Creative Style Sheets',
      answerTwo: 'Cascading Style Sheets',
      answerThree: 'Computer Style Sheets',
      answerFour: 'Content Style Sheets',
      correctAnswer: 'B',
    },
    {
      id: 2,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'color',
      answerTwo: 'background-color',
      answerThree: 'background',
      answerFour: 'bgcolor',
      correctAnswer: 'B',
    },
    {
      id: 3,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'Exponential unit',
      answerTwo: 'Element unit',
      answerThree: 'Emphasis unit',
      answerFour: 'Font-size of the current element',
      correctAnswer: 'D',
    },
    {
      id: 4,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: ' line-height',
      answerTwo: 'letter-spacing',
      answerThree: 'word-spacing',
      answerFour: 'text-spacing',
      correctAnswer: 'A',
    },
    {
      id: 5,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: '#header',
      answerTwo: ' .header',
      answerThree: 'header',
      answerFour: 'header#',
      correctAnswer: 'A',
    },
    {
      id: 6,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'border-radius',
      answerTwo: 'corner-radius',
      answerThree: 'round-corner',
      answerFour: 'border-corner',
      correctAnswer: 'A',
    },
    {
      id: 7,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'Using the <style> tag',
      answerTwo: 'Using the <link> tag',
      answerThree: 'Using the <css> tag',
      answerFour: 'Using the <script> tag',
      correctAnswer: 'B',
    },
    {
      id: 8,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'font-style',
      answerTwo: 'text-style',
      answerThree: 'italic-style',
      answerFour: 'font-italic',
      correctAnswer: 'A',
    },
    {
      id: 9,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'absolute',
      answerTwo: 'static',
      answerThree: 'relative',
      answerFour: 'fixed',
      correctAnswer: 'B',
    },
    {
      id: 10,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'text-color',
      answerTwo: 'color',
      answerThree: 'font-color',
      answerFour: 'text-style',
      correctAnswer: 'B',
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
            <IoLogoCss3 />
          </div>
          <div className='subject'>CSS</div>
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

export default CssQuestionPage

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

// CssQuestionPage
