import React, { useRef } from 'react'

//used to access the DOM eliment directly (UseRef2.jsx)

const UseRef2 = () => {

    const inputRef=useRef();
    console.log(inputRef);
    
    function backgroundcolor(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="blue";
    }

  return (
    <>
    <div>
      <input type="text" ref={inputRef} />
    </div>
    <div>
    <button onClick={backgroundcolor}>submit</button>
    </div>
    </>
  )
}

export default UseRef2
