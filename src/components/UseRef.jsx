 import React, { useEffect,useRef } from 'react'

 //It is used to mutable variable which  is not re-render the components
 //used to access the DOM eliment directly (UseRef2.jsx)
 import { useState } from 'react';

 const UseRef = () => {

    // const[count,setcount]=useState(); //this will not work here it render infinite time
    const count=useRef(0);
    console.log(count);
    
    const[userInput,setUserInput]=useState("");
    useEffect(()=>{
        // setcount(count+1);
        count.current=count.current+1;

    })
   return (
     <div>
       <input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
       <h1>No if time component render {count.current} </h1>
     </div>
   )
 }
 
 export default UseRef
 