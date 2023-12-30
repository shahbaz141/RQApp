import React from 'react'

const Start = ({questions,dispatch}) => {
  return (
    <div className='start'>
      <h2>wecome to React Quiz</h2>
      <h3>{questions} questions to test your react Mastery</h3>
      <button className='btn btn-ui' onClick={(e)=>dispatch({type:"start"})}>Lets Start</button>
    </div>
  )
}

export default Start