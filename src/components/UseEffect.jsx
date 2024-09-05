import { useState,useEffect } from "react";
import React from 'react'

function UseEffect() {
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

    //UseEffect is used to handle the side effect in react
    //example of side effect(fetch any api,manually changing the DOM,setting up a subscription)
     
    useEffect(()=>{
      document.title=count;
    },[count]);

  return (

    <div className="counter">
        <button onClick={inc}>+</button>
        <span>{count}</span>
        <button onClick={dec}>-</button>
    </div>
  )
}

export default UseEffect
