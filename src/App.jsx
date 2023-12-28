import React, { useReducer } from 'react'
import Header from './components/Header'
import Loader from './components/Loader';
import Main from './components/Main';
const initialState={
  status:"loading",
  questions:[],
}
const reducer=(state,action)=>{

}
const App = () => {
  const [{status},dispatch]=useReducer(reducer,initialState);
  return (
    <div className='app'>
      <Header/>
      <Main>
        {status==="loading"&&<Loader/>}
      </Main>
    </div>
  )
}

export default App