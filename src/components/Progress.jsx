import React from 'react'

const Progress = ({questions,currentQuestion,Points,maxPoints}) => {
  return (
    <header className='progress'>
    <progress value={currentQuestion} max={questions.length}/>
<p>Questions <strong>{currentQuestion+1}</strong>/{questions.length}</p>
<p> Points <strong>{Points}</strong>/{maxPoints}</p>
    </header>
  )
}

export default Progress