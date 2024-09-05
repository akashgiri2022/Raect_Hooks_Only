import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {
    const[size,setsize]=useState(window.innerWidth);
    
    const handleResize=()=>{
        setsize(window.innerWidth)
    }

    useEffect(()=>{
        
        window.addEventListener("resize",handleResize)

        return ()=>{
            window.removeEventListener("resize",handleResize)
        }

    });
    
  return (
    <div>
      <h2>The Size of the window is {size} </h2>
    </div>
  )
}

export default UseEffectCleanUp;
