import React from 'react'
import { useReducer } from 'react'
import reducer from './reducer';
const initialvalue=0;
function UseReducer() {
    
    const[count,dispatch]= useReducer(reducer,initialvalue);
    
  return (

    <div className="counter">
        <button onClick={()=>dispatch({type:"inc"})}>+</button>
        <button onClick={()=>dispatch({type:"incbyfive",payload:5})}> Plus 5</button>
        <span>{count}</span>
        <button onClick={()=>dispatch({type:"dec"})}>-</button>
    </div>
  )
}

export default UseReducer
