// import React, { useState } from 'react'
// import UseState from './components/UseState.jsx'
// import UseStateForm from './components/UseStateForm.jsx'
// import UseEffect from './components/UseEffect.jsx'
// import UseEffectCleanUp from './components/UseEffectCleanUp.jsx'
// import GrandParent from './components/GrandParent.jsx';
// import UseReducer from './components/UseReducer.jsx';
// import UseRef from './components/UseRef.jsx';
// import UseRef2 from "./components/UseRef2"
// import UseLayoutEffect from "./components/UseLayoutEffect"
// import UseMemo from "./components/UseMemo"
import "./App.css"
import UseCallBack from "./components/UseCallBack"

function App() {
  // const[flag,setflag]=useState(true);
  return (
    <div>
      {/* <button onClick={()=>setflag(!flag)}>Flag</button> */}
      {/* <UseState/> */}
      {/* <UseStateForm /> */}
      {/* <UseEffect/> */}

      {/* conditional rendering */}

      {/* {flag && <UseEffectCleanUp/>}  */}
      {/* <GrandParent/> */}

      {/* <UseReducer/> */}
      {/* <UseRef/> */}
      {/* <UseRef2/> */}
      {/* <UseLayoutEffect/> */}
      {/* <UseMemo/> */}
      <UseCallBack/>

    </div>
  )
}

export default App
