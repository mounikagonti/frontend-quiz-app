import React from 'react'

const ResultModel = ({showResult, setShowResult, correctAnswers}: any) => {
  const handleOnOkClick = () => {
    setShowResult(false)
  }

  return (
    <div className='resultModel_wrapper'>
      <div className='text'>You have scored</div>
      <h1>{correctAnswers}</h1>
      <button onClick={handleOnOkClick} className='ok_btn'>
        Ok
      </button>
    </div>
  )
}

export default ResultModel
