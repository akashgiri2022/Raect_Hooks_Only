import React, { useCallback, useState } from 'react'
import Todo from './Todo'
//UseCallBack returns memoized callback function

const UseCallBack = () => {

    const[count,setcount]=useState(0);
    const[todos,settodos]=useState([]);

    const inc=(()=>{
        setcount(count+1);
    })

    const addTodo=useCallback(()=>{
        return settodos((prev)=>[...prev,"new entry"])
    },[todos])
    
  return (
    <>
      <Todo addTodo={addTodo} todos={todos}/>
      <h2>{count}</h2>
      <button onClick={inc}>+</button>
    </>
  )
}

export default UseCallBack
