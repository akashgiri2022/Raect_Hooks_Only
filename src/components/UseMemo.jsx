import React, { useMemo, useState } from 'react'
//UseMemo returns memorized function
const UseMemo = () => {
    const[num,setnum]=useState(0);
    const[show,setshow]=useState(false);

    console.log(num);

    
    const getValue=(()=>{
        return setnum(num+1);
    })

    const countDelay=(n)=>{
        for (let index = 0; index < 1000000000; index++) {     //this loop will just delay some time  
        }
        return n;
    }

    const CheckData=useMemo(()=>{
        return countDelay(num);
    },[num]);


  return (
    <>
    <button onClick={getValue}>Counter</button>
    <p>My new Number {CheckData}</p>
    <button onClick={()=>setshow(!show)}>
         {show?"you clicked me":"click me"}

    </button>
    </> 
  )
}

export default UseMemo
