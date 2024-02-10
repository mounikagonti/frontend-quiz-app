import React, {useEffect, useRef, useState} from 'react'
import {IoAccessibilityOutline} from 'react-icons/io5'
import ResultModel from '../resultmodel/ResultModel'

const Accessibility = () => {
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
      question: 'What does ARIA stand for in web accessibility?',
    },

    {
      id: 2,
      question:
        'Which HTML element is used to provide a screen reader with a brief description of the content or function of an element?',
    },
    {
      id: 3,
      question:
        'Which of the following is an example of an assistive technology used by people with visual impairments?',
    },
    {
      id: 4,
      question:
        'Which attribute in HTML5 is used to specify the alternative text for an image?',
    },
    {
      id: 5,
      question: 'What does the acronym WCAG stand for?',
    },
    {
      id: 6,
      question:
        'Which HTML tag is used to create a button in a web page that can be activated using the keyboard?',
    },
    {
      id: 7,
      question:
        'What is the purpose of semantic HTML elements like <header>, <footer>, <nav>, etc., in web accessibility?',
    },
    {
      id: 8,
      question:
        'Which attribute is used to associate a form label with its corresponding input element in HTML?',
    },
    {
      id: 9,
      question:
        'Which of the following is NOT a recommended practice for improving web accessibility?',
    },
    {
      id: 10,
      question:
        'What is the purpose of skip navigation links in web accessibility?',
    },
  ]

  const answerArray = [
    {
      id: 1,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'Accessible Rich Internet Applications',
      answerTwo: 'Assistive Resource for Internet Accessibility',
      answerThree: 'Accessibility Requirements and Implementation Act',
      answerFour: ' Advanced Responsive Interface Architecture',
      correctAnswer: 'A',
    },
    {
      id: 2,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: ' <label>',
      answerTwo: '<summary>',
      answerThree: '<alt>',
      answerFour: '<aria-label>',
      correctAnswer: 'D',
    },
    {
      id: 3,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'Mouse',
      answerTwo: 'Screen reader',
      answerThree: 'Trackpad',
      answerFour: 'Keyboard',
      correctAnswer: 'B',
    },
    {
      id: 4,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'alt',
      answerTwo: 'img-alt',
      answerThree: 'text',
      answerFour: 'description',
      correctAnswer: 'A',
    },
    {
      id: 5,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'Website Accessibility Guidelines',
      answerTwo: 'Web Content Accessibility Guidelines',
      answerThree: 'World Consortium of Accessibility Guidelines',
      answerFour: 'Web Compatibility Accessibility Guidelines',
      correctAnswer: 'B',
    },
    {
      id: 6,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: '<div>',
      answerTwo: '<button>',
      answerThree: '<span>',
      answerFour: '<input type="button">',
      correctAnswer: 'B',
    },
    {
      id: 7,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'They provide styling for the page.',
      answerTwo: 'They improve search engine optimization.',
      answerThree:
        'They provide structure and meaning to content for assistive technologies.',
      answerFour: 'They add animations and effects to the page.',
      correctAnswer: 'C',
    },
    {
      id: 8,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'label',
      answerTwo: 'for',
      answerThree: 'association',
      answerFour: 'connect',
      correctAnswer: 'B',
    },
    {
      id: 9,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'Using descriptive link text',
      answerTwo: 'Avoiding keyboard navigation',
      answerThree: 'Providing alternative text for images',
      answerFour: 'Ensuring proper color contrast',
      correctAnswer: 'B',
    },
    {
      id: 10,
      optionA: 'A',
      optionB: 'B',
      optionC: 'C',
      optionD: 'D',
      answerOne: 'To hide certain content from screen readers',
      answerTwo:
        'To provide shortcuts for keyboard users to skip repetitive navigation and go directly to main content',
      answerThree: 'To increase page loading speed',
      answerFour: ' To improve website aesthetics',
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
            <IoAccessibilityOutline />
          </div>
          <div className='subject'>Accessibility</div>
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

export default Accessibility

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

// export default Accessibility
