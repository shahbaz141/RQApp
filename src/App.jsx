import React, { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Loader from './components/Loader';
import Main from './components/Main';
import Error from './components/Error';
import Start from './components/Start';
const initialState={
  status:"loading",
  questions:[],
}
const reducer=(state,action)=>{
  if(action.type==="dataReceived")
  return{
...state,
status:"ready",
questions:action.payload}
if (action.type==="dataFailed")
return{
  ...state,
  status:"error",
}
}

const App = () => {
  const [{status},dispatch]=useReducer(reducer,initialState);
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
        {status==="ready"&&<Start/>}
        {status==="loading"&&<Loader/>}
        {status==="error"&&<Error/>}
      </Main>
    </div>
  )
}

export default App