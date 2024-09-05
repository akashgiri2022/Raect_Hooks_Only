//UseLayoutEffect ,runs synchronously after a render but before the screen is updated

//useEffect runs asynchronously and after a render is painted to  the screen.

import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {
    useEffect(()=>{
        console.log("I am from 1st useEffect"); //asynchronous
    })
    useLayoutEffect(()=>{
        console.log("I am from UseLayoutEffect");  //synchrnous
    })
    useEffect(()=>{
        console.log("I am from 2nd useEffect");   //asynchronous
    })
  return (
    <>
      <h1>UseLayoutEffect</h1>
    </>
  )
}

export default UseLayoutEffect