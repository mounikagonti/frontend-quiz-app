import React, {useEffect, useRef, useState} from 'react'
import {IoLogoHtml5} from 'react-icons/io5'
import ResultModel from '../resultmodel/ResultModel'

const QuestionPage = () => {
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
      question: 'What does HTML stand for?',
    },

    {
      id: 2,
      question: 'Which tag is used to create a hyperlink in HTML?',
    },
    {
      id: 3,
      question: 'What is the purpose of the <head> tag in HTML?',
    },
    {
      id: 4,
      question: 'Which HTML tag is used to insert an image?',
    },
    {
      id: 5,
      question: 'What does the HTML element <br> represent?',
    },
    {
      id: 6,
      question: 'Which tag is used for creating an ordered list in HTML?',
    },
    {
      id: 7,
      question: 'What does the HTML attribute href stand for?',
    },
    {
      id: 8,
      question: 'Which HTML tag is used to define a paragraph?',
    },
    {
      id: 9,
      question: 'What does the HTML element <div> represent?',
    },
    {
      id: 10,
      question: 'Which HTML tag is used for creating a line break within text?',
    },
  ]

  const answerArray = [
    {
      id: 1,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'HyperText Markup Language',
      answerTwo: 'High-level Text Management Language',
      answerThree: 'Hyperlink and Text Management Language',
      answerFour: 'High-level Markup Language',
      correctAnswer: 'A',
    },
    {
      id: 2,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: '<link>',
      answerTwo: '<a>',
      answerThree: '<hlink>',
      answerFour: '<url>',
      correctAnswer: 'B',
    },
    {
      id: 3,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'It defines a heading in the document.',
      answerTwo: 'It contains the main content of the HTML document.',
      answerThree: 'It includes meta-information about the HTML document.',
      answerFour: 'It represents a horizontal rule in the document.',
      correctAnswer: 'C',
    },
    {
      id: 4,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: '<img>',
      answerTwo: '<picture>',
      answerThree: '<image>',
      answerFour: '<photo>',
      correctAnswer: 'A',
    },
    {
      id: 5,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'Bold text',
      answerTwo: 'Break line or line break',
      answerThree: 'Bullet point',
      answerFour: 'Background color',
      correctAnswer: 'B',
    },
    {
      id: 6,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: '<ul>',
      answerTwo: '<ol>',
      answerThree: '<li>',
      answerFour: '<list>',
      correctAnswer: 'B',
    },
    {
      id: 7,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'HyperText Reference',
      answerTwo: 'Hypertext Reflect',
      answerThree: 'Hyperlink Reference',
      answerFour: 'Hypertext Refresh',
      correctAnswer: 'C',
    },
    {
      id: 8,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: '<par>',
      answerTwo: '<text>',
      answerThree: '<p>',
      answerFour: '<paragraph>',
      correctAnswer: 'C',
    },
    {
      id: 9,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'A division or section',
      answerTwo: 'A hyperlink',
      answerThree: 'A list item',
      answerFour: 'A document title',
      correctAnswer: 'A',
    },
    {
      id: 10,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: '<lb>',
      answerTwo: '<br>',
      answerThree: '<line>',
      answerFour: '<break>',
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
            <IoLogoHtml5 />
          </div>
          <div className='subject'>HTML</div>
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

export default QuestionPage

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
