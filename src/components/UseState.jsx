import { useState } from "react";
import React from 'react'

function UseState() {
    const[count,setcount]=useState(0);
    const inc=()=>{
        setcount(count+1);
    }
    const dec=()=>{
        if(count===0){
            setcount(0);
        }else{

            setcount(count-1);
        }
    }
  return (

    <div className="counter">
        <button onClick={inc}>+</button>
        <span>{count}</span>
        <button onClick={dec}>-</button>
    </div>
  )
}

export default UseState
