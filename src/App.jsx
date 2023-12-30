import React, { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Loader from './components/Loader';
import Main from './components/Main';
import Error from './components/Error';
import Start from './components/Start';
import Progress from './components/Progress';
const initialState={
  status:"loading",
  questions:[],
  currentQuestion:0,
  points:0,
};
const reducer=(state,action)=>{
  if(action.type==="dataReceived")
  return{
...state,
status:"ready",
questions:action.payload}
else if (action.type==="dataFailed")
return{
  ...state,
  status:"error",
}
else if (action.type==="start")
return {
  ...state,
  status:"start",
}
}

const App = () => {
  const [{status,questions,currentQuestion,points},dispatch]=useReducer(reducer,initialState);
  const maxPoints=questions.reduce((prev,current)=>prev+current.points,0);
  useEffect(()=>{
    const getQuestions=async()=>{
      try{
        const res =await fetch("http://localhost:3004/questions")
      const data =await res.json();
      dispatch({type:"dataReceived",payload:data});
      }
      catch{
        dispatch({type:"dataFailed"});
      }
      
    }
    getQuestions();
  },[])
  return (
    <div className='app'>
      <Header/>
      <Main>
        {status==="ready"&& <Start questions={questions.length} dispatch={dispatch}/>}
        {status==="loading"&&<Loader/>}
        {status==="error"&&<Error/>}
        {status==="start"&&<>
        <Progress points={points} questions={questions} currentQuestion={currentQuestion} maxPoints={maxPoints}/>
        </>
        }
      </Main>
    </div>
  )
}

export default App